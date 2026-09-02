/* Elite Classes — Student Portal & Dashboard Core Module */

let currentStudent = null;
let activeStudentTab = 'today';
let studentStats = { testAttempts: {}, courseProgress: {} };

// Gateway Tab Switcher (Student vs Admin)
function switchAuthTab(mode) {
    const studentBtn = document.getElementById('auth-tab-student');
    const adminBtn = document.getElementById('auth-tab-admin');
    const studentForm = document.getElementById('auth-form-student');
    const adminForm = document.getElementById('auth-form-admin');

    if (mode === 'student') {
        studentBtn.classList.add('active');
        adminBtn.classList.remove('active');
        studentForm.style.display = 'flex';
        adminForm.style.display = 'none';
    } else {
        adminBtn.classList.add('active');
        studentBtn.classList.remove('active');
        adminForm.style.display = 'flex';
        studentForm.style.display = 'none';
    }
}

// Authenticate & Verify Student Login via Access Code (123456) & WhatsApp Number
async function verifyStudentLogin() {
    const codeInput = document.getElementById('student-code-input').value.trim();
    const phoneInput = document.getElementById('student-phone-input').value.trim().replace(/\D/g, '');
    const errEl = document.getElementById('student-auth-error');
    errEl.style.display = 'none';

    if (!phoneInput) {
        errEl.textContent = 'Please enter your registered WhatsApp / Mobile number.';
        errEl.style.display = 'block';
        return;
    }

    // Verify Student Access Code (Default: 123456)
    const expectedStudentKey = await DBService.getStudentAccessKey();
    if (codeInput !== expectedStudentKey && codeInput !== '123456') {
        errEl.textContent = 'Invalid Coaching Student Access Code. Default is 123456.';
        errEl.style.display = 'block';
        return;
    }

    // Load latest student records if empty
    if (!students || students.length === 0) {
        students = await DBService.fetchStudents();
    }

    // Find student matching phone number
    const matched = students.find(s => {
        const pClean = (s.phone || '').replace(/\D/g, '');
        return pClean === phoneInput || pClean.endsWith(phoneInput) || phoneInput.endsWith(pClean);
    });

    if (!matched) {
        errEl.textContent = `No student found registered with number ${phoneInput}. Please contact Admin.`;
        errEl.style.display = 'block';
        return;
    }

    // Login Success
    currentStudent = matched;
    localStorage.setItem('ec_user_role', 'student');
    localStorage.setItem('ec_student_id', matched.id);

    if (typeof initInactivityListeners === 'function') initInactivityListeners();
    if (typeof resetInactivityTimer === 'function') resetInactivityTimer();

    showToast(`Welcome back, ${matched.name}!`, 'success');
    
    // Hide Auth Screen & Load Student Dashboard
    document.getElementById('auth-screen').style.display = 'none';
    await loadStudentDashboard();
}

// Logout & Return to Gateway Screen
function logoutStudent() {
    currentStudent = null;
    if (typeof logoutToGateway === 'function') {
        logoutToGateway('Logged out of Student Portal');
    } else {
        localStorage.removeItem('ec_user_role');
        localStorage.removeItem('ec_student_id');
        localStorage.removeItem('ec_last_activity');
        window.location.href = 'index.html';
    }
}

// Load Student Dashboard View & Data
async function loadStudentDashboard() {
    if (!currentStudent) return;

    // Hide Top Right Admin Icon in Student View
    const adminChip = document.getElementById('app-header-admin-chip');
    if (adminChip) adminChip.style.display = 'none';

    // Navigate to Student View
    document.querySelectorAll('.page-view').forEach(v => v.classList.remove('active'));
    const portalView = document.getElementById('view-student-portal');
    if (portalView) portalView.classList.add('active');

    // Update Header Avatar & Greeting
    const avatarEl = document.getElementById('st-portal-avatar');
    if (avatarEl) {
        avatarEl.textContent = getInitials(currentStudent.name);
        avatarEl.style.background = currentStudent.color || '#2563eb';
    }

    const headerUserEl = document.getElementById('st-header-username');
    if (headerUserEl) {
        headerUserEl.textContent = typeof formatProfileButtonName === 'function' ? formatProfileButtonName(currentStudent.name) : currentStudent.name;
    }

    const headerAvatarEl = document.getElementById('st-header-avatar');
    if (headerAvatarEl) {
        headerAvatarEl.textContent = getInitials(currentStudent.name);
        if (currentStudent.color) headerAvatarEl.style.background = currentStudent.color;
    }

    const nameEl = document.getElementById('st-portal-name');
    if (nameEl) nameEl.textContent = `Hello, ${currentStudent.name}`;
    const badgeEl = document.getElementById('st-portal-class-badge');
    if (badgeEl) badgeEl.textContent = currentStudent.cls || 'Student';
    const subEl = document.getElementById('st-portal-sub');
    if (subEl) subEl.textContent = `Access your class courses, test series, attendance, and fee receipts.`;

    // Load persistent stats
    studentStats = await DBService.fetchStudentStats(currentStudent.id);
    if (!studentStats.testAttempts) studentStats.testAttempts = {};
    if (!studentStats.courseProgress) studentStats.courseProgress = {};

    // Render Profile Info Cards in Settings Modal
    renderStudentProfileCards();

    // Render Right-to-Left Scrolling Notice Slides
    await renderStudentNoticeSlides();

    // Render Active Tab Content
    switchStudentTab(activeStudentTab);
}

// Render Profile Info Cards inside Settings Modal
function renderStudentProfileCards() {
    const grid = document.getElementById('st-settings-info-grid');
    if (!grid || !currentStudent) return;

    const cardsHtml = `
        <div class="student-info-card">
            <div class="student-info-icon">👤</div>
            <div>
                <div class="student-info-label">Full Name</div>
                <div class="student-info-value">${currentStudent.name}</div>
            </div>
        </div>

        <div class="student-info-card">
            <div class="student-info-icon">🎓</div>
            <div>
                <div class="student-info-label">Class / Standard</div>
                <div class="student-info-value">${currentStudent.cls}</div>
            </div>
        </div>

        <div class="student-info-card">
            <div class="student-info-icon">👨‍👩‍👦</div>
            <div>
                <div class="student-info-label">Parent / Guardian</div>
                <div class="student-info-value">${currentStudent.parent}</div>
            </div>
        </div>

        <div class="student-info-card">
            <div class="student-info-icon">📱</div>
            <div>
                <div class="student-info-label">WhatsApp Number</div>
                <div class="student-info-value">+91 ${currentStudent.phone}</div>
            </div>
        </div>

        <div class="student-info-card">
            <div class="student-info-icon">📧</div>
            <div>
                <div class="student-info-label">Email Address</div>
                <div class="student-info-value">${currentStudent.email || 'N/A'}</div>
            </div>
        </div>

        <div class="student-info-card">
            <div class="student-info-icon">🏫</div>
            <div>
                <div class="student-info-label">School Name</div>
                <div class="student-info-value">${currentStudent.school || 'Not Specified'}</div>
            </div>
        </div>

        <div class="student-info-card">
            <div class="student-info-icon">📚</div>
            <div>
                <div class="student-info-label">Enrolled Subjects</div>
                <div class="student-info-value">${currentStudent.subjects || 'General Subjects'}</div>
            </div>
        </div>

        <div class="student-info-card">
            <div class="student-info-icon">💰</div>
            <div>
                <div class="student-info-label">Monthly Fee & Due Day</div>
                <div class="student-info-value">₹${(currentStudent.fee || 0).toLocaleString()} (Due: ${currentStudent.due || 10}th)</div>
            </div>
        </div>

        <div class="student-info-card">
            <div class="student-info-icon">📅</div>
            <div>
                <div class="student-info-label">Admission Date</div>
                <div class="student-info-value">${currentStudent.doa || '2025-04-01'}</div>
            </div>
        </div>
    `;

    grid.innerHTML = cardsHtml;
}

// Switch Student Dashboard Tabs
function switchStudentTab(tab) {
    activeStudentTab = tab;

    // Update active tab buttons
    document.querySelectorAll('#view-student-portal .profile-tab').forEach(t => {
        t.classList.toggle('active', t.getAttribute('data-sttab') === tab);
    });

    // Toggle tab section containers
    document.querySelectorAll('.st-tab-section').forEach(s => {
        s.style.display = s.id === 'st-tab-section-' + tab ? 'block' : 'none';
    });

    // Render corresponding section
    if (tab === 'today') renderStudentToday();
    if (tab === 'courses') renderStudentCourses();
    if (tab === 'tests') renderStudentTests();
    if (tab === 'attendance') renderStudentAttendance();
    if (tab === 'fees') renderStudentFees();
    if (tab === 'marks') renderStudentExamResults();
}

// 1. Render Today Tab
function renderStudentToday() {
    const container = document.getElementById('st-today-container');
    if (!container || !currentStudent) return;

    container.innerHTML = `
        <div class="card" style="padding:40px 24px; text-align:center; background:#ffffff; border:1px dashed var(--border); border-radius:16px;">
            <div style="font-size:36px; margin-bottom:12px;">📅</div>
            <h3 style="font-size:16px; font-weight:700; color:#0f172a; margin:0 0 6px 0;">Today's Daily Feed & Activity</h3>
            <p style="font-size:13px; color:var(--text-muted); margin:0 auto; max-width:420px;">
                Daily updates, active classroom feeds, and today's coaching agenda will appear here.
            </p>
        </div>
    `;
}

// 2. Render Courses Tab (Enrolled Academic Subjects)
function renderStudentCourses() {
    const container = document.getElementById('st-courses-container');
    if (!container || !currentStudent) return;

    const enrolledSubs = currentStudent.subjects ? currentStudent.subjects.split(',').map(s => s.trim()) : ['Mathematics', 'Science', 'English'];

    let cardsHtml = '';
    const colors = ['#2563eb', '#8b5cf6', '#10b981', '#f59e0b', '#06b6d4', '#ec4899'];
    const icons = ['📐', '🔬', '📖', '🧪', '🧬', '🌍'];

    enrolledSubs.forEach((sub, idx) => {
        const color = colors[idx % colors.length];
        const icon = icons[idx % icons.length];

        cardsHtml += `
            <div class="card" style="border-radius:14px; border:1px solid var(--border); box-shadow:0 4px 12px rgba(0,0,0,0.03); overflow:hidden;">
                <div style="background:${color}; padding:18px 20px; color:#ffffff; display:flex; justify-content:space-between; align-items:center;">
                    <div style="display:flex; align-items:center; gap:10px;">
                        <span style="font-size:24px;">${icon}</span>
                        <div>
                            <h3 style="font-size:16px; font-weight:800; margin:0; color:#ffffff;">${sub}</h3>
                            <div style="font-size:11.5px; opacity:0.9; margin-top:2px;">${currentStudent.cls} Academic Curriculum</div>
                        </div>
                    </div>
                    <span style="background:rgba(255,255,255,0.25); color:#ffffff; font-size:11px; font-weight:700; padding:3px 10px; border-radius:12px;">Enrolled</span>
                </div>
                <div class="card-body" style="padding:16px 20px;">
                    <div style="font-size:13px; color:#0f172a; line-height:1.7;">
                        <div>🏫 Institute Program: <b>Elite Classes Coaching Curriculum</b></div>
                        <div>🎯 Course Scope: <b>Comprehensive Concept Building & Board Preparation</b></div>
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
            <h3 style="font-size:16px; font-weight:700; margin:0;">Enrolled Academic Courses & Subjects (${currentStudent.cls})</h3>
            <span class="badge badge-primary">${enrolledSubs.length} Subjects</span>
        </div>
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap:18px;">
            ${cardsHtml}
        </div>
    `;
}

// 3. Render Tests Tab (Scheduled Coaching Tests & CBT Assessments)
function renderStudentTests() {
    if (typeof renderStudentTestSeries === 'function') {
        renderStudentTestSeries();
        return;
    }

    const container = document.getElementById('st-tests-container');
    if (!container || !currentStudent) return;

    container.innerHTML = `
        <div class="card" style="padding:40px; text-align:center;">
            <div style="font-size:36px; margin-bottom:12px;">📚</div>
            <h3 style="font-size:16px; font-weight:700; color:var(--text); margin-bottom:6px;">Class 10 Assessment Hub</h3>
            <p style="font-size:13px; color:var(--text-muted); margin-bottom:16px;">
                Access all chapterwise test series and mock exams.
            </p>
            <a href="modules/testseries/data/class10/testseries_class_10.html" class="btn btn-primary btn-sm" style="text-decoration:none; font-weight:700;">
                Open Class 10 Test Hub →
            </a>
        </div>
    `;
}
function renderStudentAttendance() {
    const container = document.getElementById('st-attendance-summary-container');
    if (!container || !currentStudent) return;

    // Collect attendance records for logged in student
    let presentCount = 0;
    let absentCount = 0;
    let lateCount = 0;
    let totalSessions = 0;

    Object.keys(attendanceRecords).forEach(dateStr => {
        const dayRecs = attendanceRecords[dateStr] || {};
        const status = dayRecs[currentStudent.id];
        if (status) {
            totalSessions++;
            if (status === 'present') presentCount++;
            else if (status === 'absent') absentCount++;
            else if (status === 'late') lateCount++;
        }
    });

    // Defaults for demonstration if attendance sheet is fresh
    if (totalSessions === 0) {
        container.innerHTML = `<div style="padding:24px; text-align:center; color:var(--text-muted);">No attendance records entered yet for ${currentStudent.name}.</div>`;
        return;
    }

    const effectivePresent = presentCount + (lateCount * 0.5);
    const pct = Math.round((effectivePresent / totalSessions) * 100);

    container.innerHTML = `
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap:14px; margin-bottom:20px;">
            <div class="stat-pallet green" style="padding:14px;">
                <div class="stat-content">
                    <div class="stat-title">Attendance Rate</div>
                    <div class="stat-value">${pct}%</div>
                </div>
            </div>
            <div class="stat-pallet blue" style="padding:14px;">
                <div class="stat-content">
                    <div class="stat-title">Sessions Present</div>
                    <div class="stat-value">${presentCount}</div>
                </div>
            </div>
            <div class="stat-pallet purple" style="padding:14px;">
                <div class="stat-content">
                    <div class="stat-title">Late Sessions</div>
                    <div class="stat-value">${lateCount}</div>
                </div>
            </div>
            <div class="stat-pallet orange" style="padding:14px;">
                <div class="stat-content">
                    <div class="stat-title">Sessions Absent</div>
                    <div class="stat-value">${absentCount}</div>
                </div>
            </div>
        </div>

        <div style="margin-top:16px;">
            <div style="font-size:13px; font-weight:700; margin-bottom:8px;">Attendance Progress Bar</div>
            <div class="progress-bar-wrap" style="height:12px;">
                <div class="progress-bar-fill" style="width:${pct}%; background:linear-gradient(90deg, #10b981, #059669);"></div>
            </div>
            <div style="font-size:12px; color:var(--text-muted); margin-top:6px;">
                Maintaining over 85% attendance across all subject sessions is required for examination clearance.
            </div>
        </div>
    `;
}

// Render Student Fee Ledger & Payment Receipts
function renderStudentFees() {
    const container = document.getElementById('st-fee-ledger-container');
    if (!container || !currentStudent) return;

    // Filter payments for current student
    const studentPayments = payments.filter(p => p.studentId === currentStudent.id);

    if (studentPayments.length === 0) {
        container.innerHTML = `
            <div style="padding:20px; text-align:center; color:var(--text-muted);">
                <div>No fee payments recorded yet for ${currentStudent.name}.</div>
                <div style="margin-top:6px; font-size:13px; font-weight:600; color:var(--primary);">Monthly Fee: ₹${(currentStudent.fee || 0).toLocaleString()} (Due Day: ${currentStudent.due || 10}th of every month)</div>
            </div>
        `;
        return;
    }

    let rowsHtml = '';
    studentPayments.forEach(p => {
        rowsHtml += `
            <tr>
                <td><b>${p.month}</b></td>
                <td>₹${(p.amount || 0).toLocaleString()}</td>
                <td><span class="badge badge-success">${p.mode || 'UPI'}</span></td>
                <td>${p.date || '2025-08-10'}</td>
                <td>
                    <button class="btn btn-sm btn-outline" onclick="viewReceiptFromLedger('${p.id}')">📜 View Receipt</button>
                </td>
            </tr>
        `;
    });

    container.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; background:#f8fafc; padding:12px 16px; border-radius:10px; border:1px solid var(--border);">
            <div>
                <span style="font-size:13px; color:var(--text-muted);">Monthly Fee Structure:</span> 
                <b style="color:var(--text-dark); margin-left:6px;">₹${(currentStudent.fee || 0).toLocaleString()} / month</b>
            </div>
            <span class="badge badge-info">Scholarship Discount: ${currentStudent.scholarshipPct || 0}%</span>
        </div>

        <div style="overflow-x:auto;">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Fee Month</th>
                        <th>Amount Paid</th>
                        <th>Payment Mode</th>
                        <th>Date Paid</th>
                        <th>Receipt Document</th>
                    </tr>
                </thead>
                <tbody>
                    ${rowsHtml}
                </tbody>
            </table>
        </div>
    `;
}

// View Printable Receipt Modal for Student
function viewReceiptFromLedger(paymentId) {
    const payment = payments.find(p => p.id === paymentId);
    if (!payment || !currentStudent) return;

    const receiptBody = document.getElementById('receiptModalBody');
    if (!receiptBody) return;

    receiptBody.innerHTML = `
        <div style="border:2px dashed var(--primary); padding:20px; border-radius:12px; background:#f8fafc;">
            <div style="text-align:center; margin-bottom:14px;">
                <h3 style="margin:0; font-size:20px; font-weight:800; color:var(--primary);">ELITE CLASSES</h3>
                <div style="font-size:12px; color:var(--text-muted);">OFFICIAL FEE RECEIPT</div>
            </div>

            <div style="display:flex; justify-content:space-between; font-size:13px; margin-bottom:10px;">
                <span>Receipt No: <b>#REC-${payment.id.slice(-6)}</b></span>
                <span>Date: <b>${payment.date}</b></span>
            </div>

            <hr style="border:none; border-top:1px solid #e2e8f0; margin:12px 0;">

            <div style="font-size:13.5px; line-height:1.8;">
                <div>Student Name: <b>${currentStudent.name}</b></div>
                <div>Class / Standard: <b>${currentStudent.cls}</b></div>
                <div>Parent Name: <b>${currentStudent.parent}</b></div>
                <div>Fee Month: <b>${payment.month}</b></div>
                <div>Payment Method: <b>${payment.mode}</b></div>
            </div>

            <hr style="border:none; border-top:1px solid #e2e8f0; margin:12px 0;">

            <div style="display:flex; justify-content:space-between; align-items:center;">
                <span style="font-size:14px; font-weight:700;">Total Amount Paid:</span>
                <span style="font-size:18px; font-weight:800; color:var(--success);">₹${(payment.amount || 0).toLocaleString()}</span>
            </div>
        </div>
    `;

    openModal('receiptModal');
}

// Render Student Exam Results & Report Card
function renderStudentExamResults() {
    const container = document.getElementById('st-exam-results-container');
    if (!container || !currentStudent) return;

    const studentExams = (typeof examResults !== 'undefined' ? examResults : []).filter(e => e.student_id === currentStudent.id);

    if (studentExams.length === 0) {
        container.innerHTML = `<div style="padding:24px; text-align:center; color:var(--text-muted);">No exam scores recorded yet for ${currentStudent.name}.</div>`;
        return;
    }

    let rowsHtml = '';
    studentExams.forEach(e => {
        rowsHtml += `
            <tr>
                <td><b>${e.exam_name}</b></td>
                <td><span class="badge badge-primary">${e.subject}</span></td>
                <td><b>${e.marks_obtained} / ${e.max_marks}</b></td>
                <td>${Math.round((e.marks_obtained/e.max_marks)*100)}%</td>
                <td><span class="badge badge-success">${e.grade || 'A'}</span></td>
            </tr>
        `;
    });

    container.innerHTML = `
        <div style="overflow-x:auto;">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Examination Title</th>
                        <th>Subject</th>
                        <th>Marks Obtained</th>
                        <th>Percentage</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    ${rowsHtml}
                </tbody>
            </table>
        </div>
    `;
}

// Auto-boot for standalone student_home.html
async function initStudentHome() {
    const role = localStorage.getItem('ec_user_role');
    const studentId = localStorage.getItem('ec_student_id');
    const studentName = localStorage.getItem('ec_student_name');

    // Immediately update header profile name from session cache
    const headerUserEl = document.getElementById('st-header-username');
    if (headerUserEl && studentName) {
        headerUserEl.textContent = typeof formatProfileButtonName === 'function' ? formatProfileButtonName(studentName) : studentName;
    }

    if (role !== 'student' || !studentId) {
        if (typeof logoutToGateway === 'function') {
            logoutToGateway('Please login with your registered WhatsApp and PIN to enter Student Portal.');
        } else {
            window.location.href = 'index.html';
        }
        return;
    }

    if (typeof initSeedData === 'function') initSeedData();
    if (typeof initSupabaseClient === 'function') initSupabaseClient();

    // Fetch students list if needed
    if (typeof DBService !== 'undefined') {
        if (!students || students.length === 0) {
            students = await DBService.fetchStudents();
        }
        const found = students.find(s => s.id === studentId);
        if (found) {
            currentStudent = found;
        } else {
            // Check Supabase directly
            const liveList = await DBService.fetchStudents();
            const liveFound = liveList.find(s => s.id === studentId);
            if (liveFound) {
                currentStudent = liveFound;
                students = liveList;
            }
        }
    }

    if (!currentStudent) {
        // Fallback to first student if demo
        currentStudent = (students && students.length > 0) ? students[0] : { id: studentId, name: studentName || 'Student', cls: 'Class 5', phone: '9876543210', fee: 1500, due: 10 };
    }

    if (headerUserEl && currentStudent) {
        headerUserEl.textContent = currentStudent.name;
    }

    if (typeof initInactivityListeners === 'function') initInactivityListeners();
    if (typeof resetInactivityTimer === 'function') resetInactivityTimer();
    if (typeof updateSubHeaderDate === 'function') updateSubHeaderDate();

    await loadStudentDashboard();
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('student_home.html') || document.getElementById('view-student-portal')) {
        initStudentHome();
    }
});

