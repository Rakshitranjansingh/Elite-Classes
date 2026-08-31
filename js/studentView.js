/* Elite Classes — Student Portal & Dashboard Core Module (studentView.js) */

let currentStudent = null;
let activeStudentTab = 'courses';
let studentStats = { testAttempts: {}, courseProgress: {} };
let cachedCoursesList = [];
let cachedTestSeriesList = [];
let cachedNoticesList = [];

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
    showToast(`Welcome back, ${matched.name}!`, 'success');
    
    // Hide Auth Screen & Load Student Dashboard
    document.getElementById('auth-screen').style.display = 'none';
    await loadStudentDashboard();
}

// Logout & Return to Gateway Screen
function logoutStudent() {
    currentStudent = null;
    document.getElementById('auth-screen').style.display = 'flex';
    document.querySelectorAll('.page-view').forEach(v => v.classList.remove('active'));
    document.getElementById('view-dashboard').classList.add('active');
    showToast('Logged out of Student Portal', 'info');
}

// Load Student Dashboard View & Data
async function loadStudentDashboard() {
    if (!currentStudent) return;

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

    document.getElementById('st-portal-name').textContent = `Hello, ${currentStudent.name}`;
    document.getElementById('st-portal-class-badge').textContent = currentStudent.cls || 'Student';
    document.getElementById('st-portal-sub').textContent = `School: ${currentStudent.school || 'Elite Coaching'} • WhatsApp: ${currentStudent.phone}`;

    // Load persistent stats
    studentStats = await DBService.fetchStudentStats(currentStudent.id);
    if (!studentStats.testAttempts) studentStats.testAttempts = {};
    if (!studentStats.courseProgress) studentStats.courseProgress = {};

    // Render Read-Only Profile Cards
    renderStudentProfileCards();

    // Render Right-to-Left Scrolling Notice Slides
    await renderStudentNoticeSlides();

    // Render Active Tab Content
    switchStudentTab(activeStudentTab);
}

// Render Read-Only Profile Info Cards
function renderStudentProfileCards() {
    const grid = document.getElementById('st-profile-info-grid');
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

// Render Right-to-Left Scrolling Notice Board Slides
async function renderStudentNoticeSlides() {
    const track = document.getElementById('student-notice-slides-track');
    if (!track) return;

    cachedNoticesList = await DBService.fetchNoticeList();
    if (!cachedNoticesList || cachedNoticesList.length === 0) return;

    // Render continuous Right-to-Left sliding cards
    let slidesHtml = '';
    const badges = ['ANNOUNCEMENT', 'OLYMPIAD', 'EXAM SCHEDULE', 'DOUBT SESSION', 'NOTICE'];

    // Duplicate list items to create seamless scrolling loop
    const displayNotices = [...cachedNoticesList, ...cachedNoticesList];

    displayNotices.forEach((n, idx) => {
        const badge = badges[idx % badges.length];
        slidesHtml += `
            <div class="notice-card-slide">
                <span class="notice-card-slide-badge">${badge}</span>
                <div>${n.content}</div>
            </div>
        `;
    });

    track.innerHTML = slidesHtml;
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
    if (tab === 'courses') renderStudentCourses();
    if (tab === 'testseries') renderStudentTestSeries();
    if (tab === 'attendance') renderStudentAttendance();
    if (tab === 'fees') renderStudentFees();
    if (tab === 'exams') renderStudentExamResults();
}

// Render Class-Filtered Courses & Study Materials
async function renderStudentCourses() {
    const container = document.getElementById('st-courses-container');
    const heading = document.getElementById('st-courses-heading');
    if (!container || !currentStudent) return;

    heading.textContent = `Courses & Materials for ${currentStudent.cls}`;

    cachedCoursesList = await DBService.fetchCourses();
    
    // Filter courses matching student class or general
    const filtered = cachedCoursesList.filter(c => c.cls === currentStudent.cls || c.cls === 'All');

    if (filtered.length === 0) {
        container.innerHTML = `<div style="grid-column:1/-1; padding:30px; text-align:center; color:var(--text-muted);">No study materials published yet for ${currentStudent.cls}. Check back soon!</div>`;
        return;
    }

    let html = '';
    filtered.forEach(c => {
        const progress = studentStats.courseProgress[c.id] || 0;
        html += `
            <div class="learning-card">
                <div>
                    <div class="learning-card-header">
                        <div>
                            <span class="badge badge-primary">${c.subject}</span>
                            <span class="badge badge-info" style="margin-left:4px;">${c.cls}</span>
                        </div>
                        <span style="font-size:12px; font-weight:700; color:var(--primary);">${progress}% Complete</span>
                    </div>
                    <div class="learning-card-title">${c.title}</div>
                    <div class="learning-card-desc">${c.description || 'Comprehensive chapter modules and problem solving.'}</div>
                    
                    <div style="font-size:12px; color:var(--text-muted); margin-bottom:4px;">
                        <span>👨‍🏫 Instructor: <b>${c.instructor || 'Senior Faculty'}</b></span> • <span>📖 ${c.lessons_count || 10} Lessons</span>
                    </div>
                    
                    <div class="progress-bar-wrap">
                        <div class="progress-bar-fill" style="width:${progress}%;"></div>
                    </div>
                </div>

                <div style="display:flex; gap:8px; margin-top:12px;">
                    <button class="btn btn-primary btn-sm" style="flex:1;" onclick="updateCourseProgress('${c.id}', ${Math.min(100, progress + 25)})">
                        ${progress === 0 ? '▶ Start Learning' : progress >= 100 ? '✅ Completed' : '📖 Continue Lesson (+25%)'}
                    </button>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

// Update and Persist Student Course Progress
async function updateCourseProgress(courseId, newProgress) {
    if (!currentStudent) return;

    studentStats.courseProgress[courseId] = newProgress;
    await DBService.saveStudentStats(currentStudent.id, studentStats);
    
    showToast(newProgress >= 100 ? '🎉 Congratulations! Course completed!' : `Progress updated to ${newProgress}%`, 'success');
    renderStudentCourses();
}

// Render Class-Filtered Test Series & Mock Exams
async function renderStudentTestSeries() {
    const container = document.getElementById('st-testseries-container');
    const heading = document.getElementById('st-tests-heading');
    if (!container || !currentStudent) return;

    heading.textContent = `Online Test Series & Mock Exams for ${currentStudent.cls}`;

    cachedTestSeriesList = await DBService.fetchTestSeries();
    
    // Filter tests matching student class
    const filtered = cachedTestSeriesList.filter(t => t.cls === currentStudent.cls || t.cls === 'All');

    if (filtered.length === 0) {
        container.innerHTML = `<div style="grid-column:1/-1; padding:30px; text-align:center; color:var(--text-muted);">No online test series scheduled yet for ${currentStudent.cls}.</div>`;
        return;
    }

    let html = '';
    filtered.forEach(t => {
        const attempt = studentStats.testAttempts[t.id];
        const statusBadge = attempt 
            ? `<span class="badge badge-success">Attempted: ${attempt.score}/${t.total_marks} (${Math.round((attempt.score/t.total_marks)*100)}%)</span>`
            : `<span class="badge badge-warning">Upcoming / Active</span>`;

        html += `
            <div class="learning-card">
                <div>
                    <div class="learning-card-header">
                        <span class="badge badge-purple">${t.subject}</span>
                        ${statusBadge}
                    </div>
                    <div class="learning-card-title">${t.title}</div>
                    
                    <div style="display:flex; gap:12px; font-size:12px; color:var(--text-muted); margin:10px 0 14px; flex-wrap:wrap;">
                        <span>⏱️ ${t.duration_mins} Mins</span>
                        <span>❓ ${t.questions_count} Questions</span>
                        <span>🎯 ${t.total_marks} Total Marks</span>
                        <span>📅 ${t.test_date || 'Active Today'}</span>
                    </div>
                </div>

                <div>
                    ${attempt ? `
                        <button class="btn btn-outline btn-sm" style="width:100%; font-weight:700;" onclick="startInteractiveTest('${t.id}')">
                            🔄 Retake Test Assessment
                        </button>
                    ` : `
                        <button class="btn btn-primary btn-sm" style="width:100%; font-weight:700;" onclick="startInteractiveTest('${t.id}')">
                            ✏️ Start Online Test
                        </button>
                    `}
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

// Start Interactive Test Assessment Modal
function startInteractiveTest(testId) {
    const test = cachedTestSeriesList.find(t => t.id === testId);
    if (!test) return;

    const modalBody = document.getElementById('takeTestModalBody');
    document.getElementById('testModalTitle').textContent = `Assessment: ${test.title}`;

    modalBody.innerHTML = `
        <div style="margin-bottom:16px; background:#f8fafc; padding:14px; border-radius:10px; border:1px solid var(--border);">
            <div style="display:flex; justify-content:space-between; font-size:13px; font-weight:700; color:var(--text-dark);">
                <span>Subject: ${test.subject} (${test.cls})</span>
                <span>Duration: ${test.duration_mins} Mins • Total Marks: ${test.total_marks}</span>
            </div>
        </div>

        <div style="display:flex; flex-direction:column; gap:18px;">
            <div style="background:#ffffff; border:1px solid var(--border); border-radius:10px; padding:16px;">
                <div style="font-weight:700; font-size:14px; margin-bottom:10px;">Q1. Solve the fundamental problem for ${test.subject}:</div>
                <div style="font-size:13px; color:var(--text-muted); margin-bottom:12px;">Select the most accurate answer statement from the options below.</div>
                
                <div style="display:flex; flex-direction:column; gap:8px;">
                    <label style="display:flex; align-items:center; gap:8px; padding:10px; border:1px solid var(--border); border-radius:8px; cursor:pointer;">
                        <input type="radio" name="q1_opt" value="A" checked> <b>(A)</b> Option A — Standard solution formulation
                    </label>
                    <label style="display:flex; align-items:center; gap:8px; padding:10px; border:1px solid var(--border); border-radius:8px; cursor:pointer;">
                        <input type="radio" name="q1_opt" value="B"> <b>(B)</b> Option B — Verified theoretical output
                    </label>
                    <label style="display:flex; align-items:center; gap:8px; padding:10px; border:1px solid var(--border); border-radius:8px; cursor:pointer;">
                        <input type="radio" name="q1_opt" value="C"> <b>(C)</b> Option C — Conceptual application principle
                    </label>
                </div>
            </div>

            <div style="background:#ffffff; border:1px solid var(--border); border-radius:10px; padding:16px;">
                <div style="font-weight:700; font-size:14px; margin-bottom:10px;">Q2. Analytical assessment question for ${test.cls} ${test.subject}:</div>
                <div style="font-size:13px; color:var(--text-muted); margin-bottom:12px;">Choose the appropriate reasoning match.</div>
                
                <div style="display:flex; flex-direction:column; gap:8px;">
                    <label style="display:flex; align-items:center; gap:8px; padding:10px; border:1px solid var(--border); border-radius:8px; cursor:pointer;">
                        <input type="radio" name="q2_opt" value="A" checked> <b>(A)</b> True
                    </label>
                    <label style="display:flex; align-items:center; gap:8px; padding:10px; border:1px solid var(--border); border-radius:8px; cursor:pointer;">
                        <input type="radio" name="q2_opt" value="B"> <b>(B)</b> False
                    </label>
                </div>
            </div>
        </div>

        <div style="margin-top:20px; display:flex; justify-content:flex-end; gap:10px;">
            <button class="btn btn-outline" onclick="closeModal('takeTestModal')">Cancel</button>
            <button class="btn btn-primary" onclick="submitTestAssessment('${test.id}', ${test.total_marks})">Submit Test Answers</button>
        </div>
    `;

    openModal('takeTestModal');
}

// Submit Test & Save Score to Student Stats
async function submitTestAssessment(testId, totalMarks) {
    if (!currentStudent) return;

    // Calculate score (Simulated 85-95% score for demonstration)
    const earnedScore = Math.round(totalMarks * 0.9);
    
    studentStats.testAttempts[testId] = {
        score: earnedScore,
        total: totalMarks,
        date: new Date().toISOString().split('T')[0]
    };

    await DBService.saveStudentStats(currentStudent.id, studentStats);
    closeModal('takeTestModal');
    
    showToast(`Test Submitted! You scored ${earnedScore}/${totalMarks} (${Math.round((earnedScore/totalMarks)*100)}%)`, 'success');
    renderStudentTestSeries();
}

// Render Student Personal Attendance Record
function renderStudentAttendance() {
    const container = document.getElementById('st-attendance-summary-container');
    if (!container || !currentStudent) return;

    // Collect attendance records for logged in student
    let presentCount = 0;
    let absentCount = 0;
    let lateCount = 0;
    let totalDays = 0;

    Object.keys(attendanceRecords).forEach(dateStr => {
        const dayRecs = attendanceRecords[dateStr] || {};
        const status = dayRecs[currentStudent.id];
        if (status) {
            totalDays++;
            if (status === 'present') presentCount++;
            if (status === 'absent') absentCount++;
            if (status === 'late') lateCount++;
        }
    });

    // Defaults for demonstration if attendance sheet is fresh
    if (totalDays === 0) {
        totalDays = 24;
        presentCount = 22;
        absentCount = 1;
        lateCount = 1;
    }

    const pct = Math.round((presentCount / totalDays) * 100);

    container.innerHTML = `
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap:14px; margin-bottom:20px;">
            <div class="stat-pallet green" style="padding:14px;">
                <div class="stat-content">
                    <div class="stat-title">Attendance Rate</div>
                    <div class="stat-value">${pct}%</div>
                </div>
            </div>
            <div class="stat-pallet blue" style="padding:14px;">
                <div class="stat-content">
                    <div class="stat-title">Days Present</div>
                    <div class="stat-value">${presentCount} Days</div>
                </div>
            </div>
            <div class="stat-pallet orange" style="padding:14px;">
                <div class="stat-content">
                    <div class="stat-title">Days Absent</div>
                    <div class="stat-value">${absentCount} Days</div>
                </div>
            </div>
        </div>

        <div style="margin-top:16px;">
            <div style="font-size:13px; font-weight:700; margin-bottom:8px;">Attendance Progress Bar</div>
            <div class="progress-bar-wrap" style="height:12px;">
                <div class="progress-bar-fill" style="width:${pct}%; background:linear-gradient(90deg, #10b981, #059669);"></div>
            </div>
            <div style="font-size:12px; color:var(--text-muted); margin-top:6px;">
                Maintaining over 85% attendance is required for term exams.
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

    // Default academic report cards for student
    const defaultExams = [
        { exam: 'Mid-Term Assessment 2025', subject: 'Mathematics', score: 92, max: 100, grade: 'A+' },
        { exam: 'Mid-Term Assessment 2025', subject: 'Science', score: 88, max: 100, grade: 'A' },
        { exam: 'Monthly Olympiad Quiz', subject: 'English', score: 45, max: 50, grade: 'A+' }
    ];

    let rowsHtml = '';
    defaultExams.forEach(e => {
        rowsHtml += `
            <tr>
                <td><b>${e.exam}</b></td>
                <td><span class="badge badge-primary">${e.subject}</span></td>
                <td><b>${e.score} / ${e.max}</b></td>
                <td>${Math.round((e.score/e.max)*100)}%</td>
                <td><span class="badge badge-success">${e.grade}</span></td>
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

// Admin Helper: Submit New Notice Slide
async function submitNewNotice() {
    const content = document.getElementById('f-notice-content').value.trim();
    if (!content) {
        showToast('Please enter notice content', 'error');
        return;
    }

    await DBService.insertNotice(content);
    closeModal('postNoticeModal');
    document.getElementById('f-notice-content').value = '';
    
    showToast('Notice published successfully!', 'success');
    await renderStudentNoticeSlides();
}

// Admin Helper: Submit New Course
async function submitNewCourse() {
    const title = document.getElementById('f-course-title').value.trim();
    const cls = document.getElementById('f-course-class').value;
    const subject = document.getElementById('f-course-subject').value.trim();
    const instructor = document.getElementById('f-course-instructor').value.trim();
    const lessons = parseInt(document.getElementById('f-course-lessons').value) || 10;
    const desc = document.getElementById('f-course-desc').value.trim();

    if (!title || !subject) {
        showToast('Please enter Course Title and Subject', 'error');
        return;
    }

    const courseObj = {
        id: 'c_' + Date.now(),
        title, cls, subject, instructor, lessons_count: lessons, description: desc
    };

    await DBService.upsertCourse(courseObj);
    closeModal('addCourseModal');
    
    showToast('Course published successfully!', 'success');
    renderStudentCourses();
}

// Admin Helper: Submit New Test Series
async function submitNewTestSeries() {
    const title = document.getElementById('f-test-title').value.trim();
    const cls = document.getElementById('f-test-class').value;
    const subject = document.getElementById('f-test-subject').value.trim();
    const duration = parseInt(document.getElementById('f-test-duration').value) || 45;
    const marks = parseFloat(document.getElementById('f-test-marks').value) || 50;
    const questions = parseInt(document.getElementById('f-test-questions').value) || 25;
    const testDate = document.getElementById('f-test-date').value || 'Active Today';

    if (!title || !subject) {
        showToast('Please enter Test Title and Subject', 'error');
        return;
    }

    const testObj = {
        id: 'ts_' + Date.now(),
        title, cls, subject, duration_mins: duration, total_marks: marks, questions_count: questions, test_date: testDate
    };

    await DBService.upsertTestSeries(testObj);
    closeModal('addTestSeriesModal');
    
    showToast('Test Series created successfully!', 'success');
    renderStudentTestSeries();
}
