/* Elite Classes — Staff & Teacher Portal Controller */

let currentStaffUser = null;
let activeStaffTab = 'students';
let activeStaffClassFilter = '';

// Initialize Staff Portal
async function initStaffPortal() {
    const role = localStorage.getItem('ec_user_role');
    const staffId = localStorage.getItem('ec_staff_id');

    if (role !== 'staff' || !staffId) {
        if (typeof logoutToGateway === 'function') {
            logoutToGateway('Please login with your registered WhatsApp and PIN to enter Staff Portal.');
        } else {
            window.location.href = 'index.html';
        }
        return;
    }

    if (typeof initSeedData === 'function') initSeedData();
    if (typeof initSupabaseClient === 'function') initSupabaseClient();

    // Fetch teachers & staff list if needed
    if (typeof DBService !== 'undefined') {
        if (isSupabaseConnected()) {
            teachers = await DBService.fetchTeachers();
            staff = await DBService.fetchStaff();
            students = await DBService.fetchStudents();
            salaryPayouts = await DBService.fetchSalaryPayouts();
        }
    }

    // Identify user
    const storedStaffUser = JSON.parse(localStorage.getItem('ec_staff_user') || 'null');
    if (storedStaffUser && storedStaffUser.id === staffId) {
        currentStaffUser = storedStaffUser;
    } else {
        currentStaffUser = (teachers || []).find(t => t.id === staffId);
        if (currentStaffUser) {
            currentStaffUser.type = 'teacher';
        } else {
            currentStaffUser = (staff || []).find(s => s.id === staffId);
            if (currentStaffUser) currentStaffUser.type = 'staff';
        }
    }

    if (!currentStaffUser) {
        // Fallback demo user
        currentStaffUser = storedStaffUser || ((teachers && teachers.length > 0) ? { ...teachers[0], type: 'teacher' } : { id: staffId, name: 'Dr. Ramesh Kumar', role: 'Mathematics Faculty', phone: '9811223344', salary: 35000, type: 'teacher' });
    }

    // Set UI Header Info
    const avatarEl = document.getElementById('staff-portal-avatar');
    if (avatarEl) {
        avatarEl.textContent = getInitials(currentStaffUser.name);
        avatarEl.style.background = currentStaffUser.color || '#2563eb';
    }

    const headerNameEl = document.getElementById('staff-header-username');
    if (headerNameEl) {
        headerNameEl.textContent = currentStaffUser.name;
    }

    const headerAvatarEl = document.getElementById('staff-header-avatar');
    if (headerAvatarEl) {
        headerAvatarEl.textContent = getInitials(currentStaffUser.name);
        if (currentStaffUser.color) headerAvatarEl.style.background = currentStaffUser.color;
    }

    const staffNameEl = document.getElementById('staff-portal-name');
    if (staffNameEl) staffNameEl.textContent = `Hello, ${currentStaffUser.name}`;
    const roleBadgeEl = document.getElementById('staff-portal-role-badge');
    const roleLabel = currentStaffUser.type === 'teacher' ? (currentStaffUser.subjects ? `${currentStaffUser.subjects} Faculty` : 'Teacher') : (currentStaffUser.role || 'Support Staff');
    if (roleBadgeEl) roleBadgeEl.textContent = roleLabel;
    
    const staffSubEl = document.getElementById('staff-portal-sub');
    if (staffSubEl) {
        if (currentStaffUser.classes) {
            staffSubEl.textContent = `Assigned Classes: ${currentStaffUser.classes}`;
        } else {
            staffSubEl.textContent = `Role: ${currentStaffUser.role || 'Staff Member'} • Elite Classes`;
        }
    }

    initInactivityListeners();
    resetInactivityTimer();
    if (typeof updateSubHeaderDate === 'function') updateSubHeaderDate();

    // Render Tabs & Sections
    renderStaffProfileModal();
    switchStaffTab(activeStaffTab);
}

// Switch Tabs in Staff Dashboard
function switchStaffTab(tab) {
    activeStaffTab = tab;

    document.querySelectorAll('.profile-tab').forEach(t => {
        t.classList.toggle('active', t.getAttribute('data-stafftab') === tab);
    });

    document.querySelectorAll('.staff-tab-section').forEach(s => {
        s.style.display = s.id === 'staff-section-' + tab ? 'block' : 'none';
    });

    if (tab === 'students') renderStaffStudentsList();
    if (tab === 'attendance') renderStaffAttendanceSheet();
    if (tab === 'salary') renderStaffSalaryHistory();
    if (tab === 'notices') renderStaffNotices();
}

// 1. Render Student Roster for Staff
function renderStaffStudentsList() {
    const container = document.getElementById('staff-students-tbody');
    if (!container) return;

    const assignedClasses = currentStaffUser.classes ? currentStaffUser.classes.split(',').map(c => c.trim()) : [];
    
    // Class filter chips
    const chipBox = document.getElementById('staff-class-filter-chips');
    if (chipBox) {
        let classesToShow = assignedClasses.length > 0 ? assignedClasses : CLASS_OPTIONS;
        chipBox.innerHTML = `<button class="btn btn-sm ${activeStaffClassFilter === '' ? 'btn-primary' : 'btn-outline'}" onclick="filterStaffStudents('')">All Classes</button>` +
            classesToShow.map(c => `
                <button class="btn btn-sm ${activeStaffClassFilter === c ? 'btn-primary' : 'btn-outline'}" onclick="filterStaffStudents('${c}')">${c}</button>
            `).join('');
    }

    const search = (document.getElementById('staff-student-search')?.value || '').toLowerCase();

    const filtered = students.filter(s => {
        const matchClass = !activeStaffClassFilter || s.cls === activeStaffClassFilter || s.cls === ('Class ' + activeStaffClassFilter);
        const matchAssigned = assignedClasses.length === 0 || assignedClasses.includes(s.cls) || assignedClasses.includes('All') || assignedClasses.includes('All Classes');
        const matchSearch = !search || s.name.toLowerCase().includes(search) || s.parent.toLowerCase().includes(search) || (s.phone && s.phone.includes(search));
        return matchClass && matchAssigned && matchSearch;
    });

    if (filtered.length === 0) {
        container.innerHTML = `<tr><td colspan="6"><div class="empty-state"><p>No students found for this selection</p></div></td></tr>`;
        return;
    }

    container.innerHTML = filtered.map(s => {
        const initials = getInitials(s.name);
        return `
            <tr>
                <td>
                    <div style="display:flex; align-items:center; gap:12px;">
                        <div class="avatar" style="background:${s.color || '#2563eb'}">${initials}</div>
                        <div>
                            <div style="font-weight:700; color:var(--text);">${s.name}</div>
                            <div style="font-size:11.5px; color:var(--text-muted);">Parent: ${s.parent}</div>
                        </div>
                    </div>
                </td>
                <td><span class="badge badge-primary">${s.cls}</span></td>
                <td>
                    <a href="https://wa.me/91${s.phone}" target="_blank" style="color:#25D366; font-weight:700; text-decoration:none; display:inline-flex; align-items:center; gap:4px;">
                        💬 +91 ${s.phone}
                    </a>
                </td>
                <td><span style="font-size:12.5px;">${s.subjects || 'General Subjects'}</span></td>
                <td>${s.school || '—'}</td>
                <td>
                    <a href="https://wa.me/91${s.phone}?text=Hello%20${encodeURIComponent(s.parent)},%20this%20is%20${encodeURIComponent(currentStaffUser.name)}%20from%20Elite%20Classes." target="_blank" class="btn btn-sm btn-outline" style="border-color:#25D366; color:#25D366; font-size:11.5px; padding:3px 8px;">
                        Message Parent
                    </a>
                </td>
            </tr>
        `;
    }).join('');
}

function filterStaffStudents(cls) {
    activeStaffClassFilter = cls;
    renderStaffStudentsList();
}

// 2. Render Staff Attendance Sheet
function renderStaffAttendanceSheet() {
    const container = document.getElementById('staff-attendance-container');
    if (!container) return;

    const assignedClasses = currentStaffUser.classes ? currentStaffUser.classes.split(',').map(c => c.trim()) : [];
    const dateInput = document.getElementById('staff-att-date');
    const selectedDate = dateInput ? dateInput.value : getTodayDateStr();

    const classSelect = document.getElementById('staff-att-class');
    const selectedClass = classSelect ? classSelect.value : (assignedClasses[0] || 'All');

    const dayRecords = attendanceRecords[selectedDate] || {};

    const filtered = students.filter(s => {
        const matchClass = selectedClass === 'All' || s.cls === selectedClass;
        const matchAssigned = assignedClasses.length === 0 || assignedClasses.includes(s.cls) || assignedClasses.includes('All');
        return matchClass && matchAssigned;
    });

    if (filtered.length === 0) {
        container.innerHTML = `<div style="padding:24px; text-align:center; color:var(--text-muted);">No students in this class roster.</div>`;
        return;
    }

    container.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; flex-wrap:wrap; gap:10px;">
            <div style="font-size:13px; font-weight:700;">Total Students: ${filtered.length}</div>
            <button class="btn btn-sm btn-success" onclick="markAllStaffStudentsPresent('${selectedDate}', '${selectedClass}')">
                ✓ Mark All Present
            </button>
        </div>
        <div class="table-wrap">
            <table>
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Class</th>
                        <th>Status</th>
                        <th>Quick Toggle</th>
                    </tr>
                </thead>
                <tbody>
                    ${filtered.map(s => {
                        const status = dayRecords[s.id] || 'present';
                        const badge = status === 'present' ? '<span class="badge badge-success">Present</span>' : status === 'absent' ? '<span class="badge badge-danger">Absent</span>' : '<span class="badge badge-warning">Late</span>';
                        return `
                            <tr>
                                <td><b>${s.name}</b></td>
                                <td><span class="badge badge-primary">${s.cls}</span></td>
                                <td>${badge}</td>
                                <td>
                                    <div class="action-group">
                                        <button class="btn btn-sm ${status === 'present' ? 'btn-success' : 'btn-outline'}" onclick="setStaffStudentAttendance('${selectedDate}', '${s.id}', 'present')">Present</button>
                                        <button class="btn btn-sm ${status === 'absent' ? 'btn-danger' : 'btn-outline'}" onclick="setStaffStudentAttendance('${selectedDate}', '${s.id}', 'absent')" style="border-color:#ef4444; color:${status==='absent'?'#fff':'#ef4444'};">Absent</button>
                                        <button class="btn btn-sm ${status === 'late' ? 'btn-warning' : 'btn-outline'}" onclick="setStaffStudentAttendance('${selectedDate}', '${s.id}', 'late')">Late</button>
                                    </div>
                                </td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>
        </div>
    `;
}

function setStaffStudentAttendance(date, studentId, status) {
    if (!attendanceRecords[date]) attendanceRecords[date] = {};
    attendanceRecords[date][studentId] = status;
    saveState();
    renderStaffAttendanceSheet();
    showToast(`Attendance marked as ${status}`);
}

function markAllStaffStudentsPresent(date, cls) {
    if (!attendanceRecords[date]) attendanceRecords[date] = {};
    const assignedClasses = currentStaffUser.classes ? currentStaffUser.classes.split(',').map(c => c.trim()) : [];
    students.forEach(s => {
        const matchClass = cls === 'All' || s.cls === cls;
        const matchAssigned = assignedClasses.length === 0 || assignedClasses.includes(s.cls) || assignedClasses.includes('All');
        if (matchClass && matchAssigned) {
            attendanceRecords[date][s.id] = 'present';
        }
    });
    saveState();
    renderStaffAttendanceSheet();
    showToast('All students marked Present for today');
}

// 3. Render Courses for Staff
function renderStaffCoursesList() {
    const container = document.getElementById('staff-courses-container');
    if (!container) return;

    const courses = JSON.parse(localStorage.getItem('ec_courses') || '[]');

    if (courses.length === 0) {
        container.innerHTML = `
            <div style="grid-column:1/-1; padding:30px; text-align:center; color:var(--text-muted); background:#f8fafc; border-radius:12px; border:1px dashed var(--border);">
                <div>No course materials published yet.</div>
                <button class="btn btn-primary btn-sm" style="margin-top:12px;" onclick="openModal('addCourseModal')">+ Publish Study Material</button>
            </div>
        `;
        return;
    }

    container.innerHTML = courses.map(c => `
        <div class="content-card">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:10px;">
                <span class="badge badge-primary">${c.cls}</span>
                <span class="badge badge-purple">${c.subject}</span>
            </div>
            <div class="content-card-title">${c.title}</div>
            <div class="content-card-sub" style="margin-bottom:12px;">Instructor: ${c.instructor || currentStaffUser.name} • ${c.lessons_count || 10} Lessons</div>
            <div style="font-size:12.5px; color:var(--text-muted); line-height:1.5; margin-bottom:16px;">
                ${c.description || 'Comprehensive syllabus modules, practice exercises, and study notes.'}
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid #f1f5f9; padding-top:12px;">
                <span style="font-size:11.5px; color:var(--text-muted);">Status: <b style="color:var(--success);">Active</b></span>
                <button class="btn btn-sm btn-outline" onclick="showToast('Course notes & lesson plan opened!')">View Lessons</button>
            </div>
        </div>
    `).join('');
}

// 4. Render Staff Salary & Payouts Ledger
function renderStaffSalaryHistory() {
    const container = document.getElementById('staff-salary-tbody');
    const summaryCard = document.getElementById('staff-salary-summary-card');
    if (!container || !currentStaffUser) return;

    const baseSalary = currentStaffUser.salary || currentStaffUser.base_salary || 0;
    const incentive = currentStaffUser.incentive || 0;
    const totalExpected = baseSalary + incentive;

    if (summaryCard) {
        summaryCard.innerHTML = `
            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap:14px;">
                <div class="stat-pallet blue" style="padding:14px;">
                    <div class="stat-content">
                        <div class="stat-title">Base Monthly Salary</div>
                        <div class="stat-value">₹${baseSalary.toLocaleString()}</div>
                    </div>
                </div>
                <div class="stat-pallet green" style="padding:14px;">
                    <div class="stat-content">
                        <div class="stat-title">Monthly Bonus / Incentive</div>
                        <div class="stat-value">₹${incentive.toLocaleString()}</div>
                    </div>
                </div>
                <div class="stat-pallet purple" style="padding:14px;">
                    <div class="stat-content">
                        <div class="stat-title">Total Monthly Compensation</div>
                        <div class="stat-value">₹${totalExpected.toLocaleString()}</div>
                    </div>
                </div>
            </div>
        `;
    }

    const myPayouts = salaryPayouts.filter(p => p.recipientId === currentStaffUser.id);

    if (myPayouts.length === 0) {
        container.innerHTML = `<tr><td colspan="5"><div class="empty-state"><p>No salary disbursement vouchers on record yet</p></div></td></tr>`;
        return;
    }

    container.innerHTML = myPayouts.map(p => `
        <tr>
            <td><b>${p.month}</b></td>
            <td style="font-weight:700; color:var(--success);">₹${(p.amount || 0).toLocaleString()}</td>
            <td><span class="badge badge-purple">${p.mode || 'Bank Transfer'}</span></td>
            <td>${p.date || '01/08/2025'}</td>
            <td>
                <button class="btn btn-sm btn-outline" onclick="openStaffSalaryVoucher('${p.id}')">📜 View Slip</button>
            </td>
        </tr>
    `).join('');
}

// View Printable Salary Voucher
function openStaffSalaryVoucher(payoutId) {
    const payout = salaryPayouts.find(p => p.id === payoutId);
    if (!payout || !currentStaffUser) return;

    const modalBody = document.getElementById('salaryVoucherModalBody');
    if (!modalBody) return;

    modalBody.innerHTML = `
        <div style="border:2px dashed var(--primary); padding:20px; border-radius:12px; background:#f8fafc;">
            <div style="text-align:center; margin-bottom:14px;">
                <h3 style="margin:0; font-size:20px; font-weight:800; color:var(--primary);">ELITE CLASSES</h3>
                <div style="font-size:12px; color:var(--text-muted);">OFFICIAL SALARY DISBURSEMENT VOUCHER</div>
            </div>

            <div style="display:flex; justify-content:space-between; font-size:13px; margin-bottom:10px;">
                <span>Voucher No: <b>#SAL-${payout.id.slice(-6)}</b></span>
                <span>Date: <b>${payout.date}</b></span>
            </div>

            <hr style="border:none; border-top:1px solid #e2e8f0; margin:12px 0;">

            <div style="font-size:13.5px; line-height:1.8;">
                <div>Employee Name: <b>${currentStaffUser.name}</b></div>
                <div>Designation: <b>${currentStaffUser.role || currentStaffUser.subjects + ' Faculty'}</b></div>
                <div>WhatsApp Contact: <b>+91 ${currentStaffUser.phone}</b></div>
                <div>Disbursement Month: <b>${payout.month}</b></div>
                <div>Payment Method: <b>${payout.mode}</b></div>
            </div>

            <hr style="border:none; border-top:1px solid #e2e8f0; margin:12px 0;">

            <div style="display:flex; justify-content:space-between; align-items:center;">
                <span style="font-size:14px; font-weight:700;">Disbursed Net Amount:</span>
                <span style="font-size:18px; font-weight:800; color:var(--success);">₹${(payout.amount || 0).toLocaleString()}</span>
            </div>
        </div>
    `;

    openModal('salaryVoucherModal');
}

// 5. Render Notices for Staff
async function renderStaffNotices() {
    const container = document.getElementById('staff-notices-container');
    if (!container) return;

    let notices = [];
    if (typeof DBService !== 'undefined' && typeof DBService.fetchNoticeList === 'function') {
        notices = await DBService.fetchNoticeList();
    } else {
        notices = JSON.parse(localStorage.getItem('ec_notices') || '[]');
    }

    if (!notices || notices.length === 0) {
        container.innerHTML = `<div style="padding:30px; text-align:center; color:var(--text-muted);">No announcements published yet. Click "+ Add Notice" to post one.</div>`;
        return;
    }

    container.innerHTML = notices.map(n => `
        <div style="background:#ffffff; border:1px solid var(--border); padding:16px 20px; border-radius:12px; margin-bottom:12px; display:flex; justify-content:space-between; align-items:center; box-shadow:0 1px 3px rgba(0,0,0,0.03);">
            <div style="font-size:14px; font-weight:600; color:#0f172a; line-height:1.5;">${n.content}</div>
            <span class="badge badge-success" style="flex-shrink:0; margin-left:12px;">Active</span>
        </div>
    `).join('');
}

// 6. Submit Notice / Announcement by Staff
async function submitStaffNotice() {
    const contentInput = document.getElementById('f-staff-notice-content');
    const categoryInput = document.getElementById('f-staff-notice-category');
    if (!contentInput) return;

    const content = contentInput.value.trim();
    const category = categoryInput ? categoryInput.value : '';

    if (!content) {
        showToast('Please enter the notice message', 'danger');
        return;
    }

    const formattedContent = category ? `[${category}] ${content}` : content;

    if (typeof DBService !== 'undefined' && typeof DBService.insertNotice === 'function') {
        await DBService.insertNotice(formattedContent);
    } else {
        const newNotice = { id: 'n_' + Date.now(), content: formattedContent, is_active: true, created_at: new Date().toISOString() };
        const list = JSON.parse(localStorage.getItem('ec_notices') || '[]');
        list.unshift(newNotice);
        localStorage.setItem('ec_notices', JSON.stringify(list));
    }

    closeModal('staffAddNoticeModal');
    contentInput.value = '';
    showToast('Notice published successfully!', 'success');
    await renderStaffNotices();
}

// Render Profile Modal Info Cards
function renderStaffProfileModal() {
    const grid = document.getElementById('staff-profile-info-grid');
    if (!grid || !currentStaffUser) return;

    grid.innerHTML = `
        <div class="student-info-card">
            <div class="student-info-icon">👤</div>
            <div>
                <div class="student-info-label">Full Name</div>
                <div class="student-info-value">${currentStaffUser.name}</div>
            </div>
        </div>

        <div class="student-info-card">
            <div class="student-info-icon">💼</div>
            <div>
                <div class="student-info-label">Role / Faculty</div>
                <div class="student-info-value">${currentStaffUser.role || currentStaffUser.subjects + ' Faculty'}</div>
            </div>
        </div>

        <div class="student-info-card">
            <div class="student-info-icon">📱</div>
            <div>
                <div class="student-info-label">WhatsApp Number</div>
                <div class="student-info-value">+91 ${currentStaffUser.phone}</div>
            </div>
        </div>

        <div class="student-info-card">
            <div class="student-info-icon">🏫</div>
            <div>
                <div class="student-info-label">Assigned Classes</div>
                <div class="student-info-value">${currentStaffUser.classes || 'All Institute Classes'}</div>
            </div>
        </div>

        <div class="student-info-card">
            <div class="student-info-icon">📧</div>
            <div>
                <div class="student-info-label">Email Address</div>
                <div class="student-info-value">${currentStaffUser.email || 'N/A'}</div>
            </div>
        </div>

        <div class="student-info-card">
            <div class="student-info-icon">💵</div>
            <div>
                <div class="student-info-label">Base Monthly Salary</div>
                <div class="student-info-value">₹${(currentStaffUser.salary || currentStaffUser.base_salary || 0).toLocaleString()}</div>
            </div>
        </div>

        <div class="student-info-card">
            <div class="student-info-icon">🎁</div>
            <div>
                <div class="student-info-label">Monthly Incentive</div>
                <div class="student-info-value">₹${(currentStaffUser.incentive || 0).toLocaleString()}</div>
            </div>
        </div>
    `;
}

// Boot on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('staff_home.html') || document.getElementById('view-staff-portal')) {
        initStaffPortal();
    }
});
