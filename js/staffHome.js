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
        headerNameEl.textContent = typeof formatProfileButtonName === 'function' ? formatProfileButtonName(currentStaffUser.name) : currentStaffUser.name;
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
    if (tab === 'attendance') {
        setupStaffAttendanceControls();
        renderStaffAttendanceSheet();
    }
    if (tab === 'notices') renderStaffNotices();
}

// ---------------------------------------------------------
// 1. STUDENTS TAB & TEACHER REMARKS
// ---------------------------------------------------------
let currentRemarkStudent = { id: '', name: '' };

async function renderStaffStudentsList() {
    const container = document.getElementById('staff-students-tbody');
    if (!container) return;

    const assignedClasses = currentStaffUser && currentStaffUser.classes ? currentStaffUser.classes.split(',').map(c => c.trim()) : [];
    
    // Class filter chips
    const chipBox = document.getElementById('staff-class-filter-chips');
    if (chipBox) {
        let classesToShow = assignedClasses.length > 0 ? assignedClasses : (typeof CLASS_OPTIONS !== 'undefined' ? CLASS_OPTIONS : ['Class 8', 'Class 9', 'Class 10']);
        chipBox.innerHTML = `<button class="btn btn-sm ${activeStaffClassFilter === '' ? 'btn-primary' : 'btn-outline'}" onclick="filterStaffStudents('')">All Classes</button>` +
            classesToShow.map(c => `
                <button class="btn btn-sm ${activeStaffClassFilter === c ? 'btn-primary' : 'btn-outline'}" onclick="filterStaffStudents('${c}')">${c}</button>
            `).join('');
    }

    const search = (document.getElementById('staff-student-search')?.value || '').toLowerCase();

    const filtered = (students || []).filter(s => {
        const matchClass = !activeStaffClassFilter || s.cls === activeStaffClassFilter || s.cls === ('Class ' + activeStaffClassFilter);
        const matchAssigned = assignedClasses.length === 0 || assignedClasses.includes(s.cls) || assignedClasses.includes('All') || assignedClasses.includes('All Classes');
        const matchSearch = !search || s.name.toLowerCase().includes(search) || (s.school && s.school.toLowerCase().includes(search)) || (s.cls && s.cls.toLowerCase().includes(search));
        return matchClass && matchAssigned && matchSearch;
    });

    if (filtered.length === 0) {
        container.innerHTML = `<tr><td colspan="5"><div class="empty-state"><p>No students found for this selection</p></div></td></tr>`;
        return;
    }

    // Read cached student remarks
    let allRemarks = [];
    if (typeof DBService !== 'undefined' && typeof DBService.fetchStudentRemarks === 'function') {
        allRemarks = await DBService.fetchStudentRemarks();
    } else {
        allRemarks = JSON.parse(localStorage.getItem('ec_student_remarks') || '[]');
    }

    container.innerHTML = filtered.map(s => {
        const initials = getInitials(s.name);
        const studentRemarks = allRemarks.filter(r => r.student_id === s.id || r.studentId === s.id);
        const remarkBadge = studentRemarks.length > 0
            ? `<button class="badge badge-purple" style="border:none; cursor:pointer; font-size:11.5px; padding:4px 8px;" onclick="openViewRemarksModal('${s.id}', '${s.name.replace(/'/g, "\\'")}')" title="View ${studentRemarks.length} remark(s)">📋 ${studentRemarks.length} Note(s)</button>`
            : '';

        return `
            <tr>
                <td>
                    <div style="display:flex; align-items:center; gap:12px;">
                        <div class="avatar" style="background:${s.color || '#2563eb'}">${initials}</div>
                        <div>
                            <div style="font-weight:700; color:var(--text);">${s.name}</div>
                            <div style="font-size:11.5px; color:var(--text-muted);">${s.doa ? 'Joined: ' + s.doa : 'Enrolled Student'}</div>
                        </div>
                    </div>
                </td>
                <td><span class="badge badge-primary">${s.cls}</span></td>
                <td><span style="font-size:12.5px; font-weight:600; color:var(--text);">${s.subjects || 'General Subjects'}</span></td>
                <td style="color:var(--text-muted); font-size:13px;">${s.school || '—'}</td>
                <td>
                    <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                        ${remarkBadge}
                        <button class="btn btn-sm btn-outline" onclick="openAddRemarkModal('${s.id}', '${s.name.replace(/'/g, "\\'")}')" style="font-size:11.5px; padding:4px 10px; display:inline-flex; align-items:center; gap:4px;">
                            💬 Add Remark
                        </button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

function filterStaffStudents(cls) {
    activeStaffClassFilter = cls;
    renderStaffStudentsList();
}

// Open Add Remark Modal
function openAddRemarkModal(studentId, studentName) {
    currentRemarkStudent = { id: studentId, name: studentName };
    const idEl = document.getElementById('f-remark-student-id');
    const nameEl = document.getElementById('f-remark-student-name');
    const textEl = document.getElementById('f-remark-text');
    const titleEl = document.getElementById('staffRemarkModalTitle');

    if (idEl) idEl.value = studentId;
    if (nameEl) nameEl.value = studentName;
    if (textEl) textEl.value = '';
    if (titleEl) titleEl.textContent = `💬 Raise Remark for ${studentName}`;

    openModal('staffAddRemarkModal');
}

function openAddRemarkModalFromHistory() {
    if (currentRemarkStudent.id) {
        openAddRemarkModal(currentRemarkStudent.id, currentRemarkStudent.name);
    }
}

// Submit Teacher Remark
async function submitTeacherRemark() {
    const studentId = document.getElementById('f-remark-student-id')?.value;
    const studentName = document.getElementById('f-remark-student-name')?.value;
    const category = document.getElementById('f-remark-category')?.value || 'General Note';
    const text = document.getElementById('f-remark-text')?.value.trim();

    if (!studentId) {
        showToast('Student reference missing', 'danger');
        return;
    }
    if (!text) {
        showToast('Please enter your observation or remark note', 'danger');
        return;
    }

    const remarkObj = {
        student_id: studentId,
        staff_id: currentStaffUser ? currentStaffUser.id : null,
        staff_name: currentStaffUser ? currentStaffUser.name : 'Faculty Member',
        category: category,
        remark: text,
        created_at: new Date().toISOString()
    };

    if (typeof DBService !== 'undefined' && typeof DBService.insertStudentRemark === 'function') {
        await DBService.insertStudentRemark(remarkObj);
    } else {
        const list = JSON.parse(localStorage.getItem('ec_student_remarks') || '[]');
        list.unshift({ ...remarkObj, id: 'rem_' + Date.now() });
        localStorage.setItem('ec_student_remarks', JSON.stringify(list));
    }

    closeModal('staffAddRemarkModal');
    showToast(`Remark saved for ${studentName}! Admins can review it in Student Profile.`, 'success');
    renderStaffStudentsList();
}

// View Remarks History Modal
async function openViewRemarksModal(studentId, studentName) {
    currentRemarkStudent = { id: studentId, name: studentName };
    const titleEl = document.getElementById('staffViewRemarksTitle');
    const bodyEl = document.getElementById('staffViewRemarksBody');
    if (titleEl) titleEl.textContent = `📋 Remarks History for ${studentName}`;

    if (bodyEl) {
        bodyEl.innerHTML = `<div style="text-align:center; padding:20px; color:var(--text-muted);">Loading remarks...</div>`;
    }

    openModal('staffViewRemarksModal');

    let remarks = [];
    if (typeof DBService !== 'undefined' && typeof DBService.fetchStudentRemarks === 'function') {
        remarks = await DBService.fetchStudentRemarks(studentId);
    } else {
        const allRemarks = JSON.parse(localStorage.getItem('ec_student_remarks') || '[]');
        remarks = allRemarks.filter(r => r.student_id === studentId || r.studentId === studentId);
    }

    if (!bodyEl) return;

    if (!remarks || remarks.length === 0) {
        bodyEl.innerHTML = `<div style="padding:24px; text-align:center; color:var(--text-muted); background:#f8fafc; border-radius:8px; border:1px dashed var(--border);">No teacher remarks recorded for ${studentName} yet.</div>`;
        return;
    }

    bodyEl.innerHTML = `
        <div style="display:flex; flex-direction:column; gap:10px;">
            ${remarks.map(r => `
                <div style="background:#f8fafc; border:1px solid var(--border); border-radius:10px; padding:12px 16px;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                        <span class="badge badge-purple" style="font-size:11px;">${r.category || 'General Observation'}</span>
                        <span style="font-size:11.5px; color:var(--text-muted);">${r.created_at ? new Date(r.created_at).toLocaleDateString() : 'Recent'}</span>
                    </div>
                    <div style="font-size:13.5px; color:var(--text); line-height:1.5;">${r.remark}</div>
                    <div style="font-size:11px; color:var(--text-muted); margin-top:6px; font-style:italic;">— Raised by ${r.staff_name || 'Faculty Member'}</div>
                </div>
            `).join('')}
        </div>
    `;
}

// ---------------------------------------------------------
// 2. DAILY ATTENDANCE (CHIP-BASED CLASS & SUBJECT CONTROLS)
// ---------------------------------------------------------
let selectedAttendanceClass = '';
let selectedAttendanceSubject = '';

function setupStaffAttendanceControls() {
    const dateInput = document.getElementById('staff-att-date');
    if (dateInput && (!dateInput.value || dateInput.value === '')) {
        dateInput.value = new Date().toISOString().split('T')[0];
    }

    const assignedClasses = currentStaffUser && currentStaffUser.classes
        ? currentStaffUser.classes.split(',').map(c => c.trim()).filter(Boolean)
        : (typeof CLASS_OPTIONS !== 'undefined' ? CLASS_OPTIONS : ['Class 8', 'Class 9', 'Class 10']);

    if (!selectedAttendanceClass || (selectedAttendanceClass !== 'All' && !assignedClasses.includes(selectedAttendanceClass))) {
        selectedAttendanceClass = assignedClasses[0] || 'All';
    }

    // Render Class Chips
    const classChipsEl = document.getElementById('staff-att-class-chips');
    if (classChipsEl) {
        classChipsEl.innerHTML = `<button class="btn btn-sm ${selectedAttendanceClass === 'All' ? 'btn-primary' : 'btn-outline'}" onclick="selectStaffAttendanceClass('All')">All My Classes</button>` +
            assignedClasses.map(c => `
                <button class="btn btn-sm ${selectedAttendanceClass === c ? 'btn-primary' : 'btn-outline'}" onclick="selectStaffAttendanceClass('${c}')">
                    ${c}
                </button>
            `).join('');
    }

    // Determine subjects taught by teacher
    const teacherSubjects = currentStaffUser && currentStaffUser.subjects
        ? currentStaffUser.subjects.split(',').map(s => s.trim()).filter(Boolean)
        : ['Mathematics', 'Science'];

    if (!selectedAttendanceSubject || (selectedAttendanceSubject !== 'All' && !teacherSubjects.includes(selectedAttendanceSubject))) {
        selectedAttendanceSubject = teacherSubjects[0] || 'All';
    }

    // Render Subject Chips
    const subjectChipsEl = document.getElementById('staff-att-subject-chips');
    if (subjectChipsEl) {
        subjectChipsEl.innerHTML = `<button class="btn btn-sm ${selectedAttendanceSubject === 'All' ? 'btn-primary' : 'btn-outline'}" onclick="selectStaffAttendanceSubject('All')">All Subjects</button>` +
            teacherSubjects.map(s => `
                <button class="btn btn-sm ${selectedAttendanceSubject === s ? 'btn-primary' : 'btn-outline'}" onclick="selectStaffAttendanceSubject('${s}')">
                    📖 ${s}
                </button>
            `).join('');
    }
}

function selectStaffAttendanceClass(cls) {
    selectedAttendanceClass = cls;
    setupStaffAttendanceControls();
    renderStaffAttendanceSheet();
}

function selectStaffAttendanceSubject(sub) {
    selectedAttendanceSubject = sub;
    setupStaffAttendanceControls();
    renderStaffAttendanceSheet();
}

function renderStaffAttendanceSheet() {
    const container = document.getElementById('staff-attendance-container');
    if (!container) return;

    setupStaffAttendanceControls();

    const assignedClasses = currentStaffUser && currentStaffUser.classes ? currentStaffUser.classes.split(',').map(c => c.trim()) : [];
    const dateInput = document.getElementById('staff-att-date');
    const selectedDate = (dateInput && dateInput.value) ? dateInput.value : new Date().toISOString().split('T')[0];

    const dayRecords = (typeof attendanceRecords !== 'undefined' && attendanceRecords[selectedDate]) ? attendanceRecords[selectedDate] : {};

    const filtered = (students || []).filter(s => {
        const matchClass = selectedAttendanceClass === 'All' || s.cls === selectedAttendanceClass;
        const matchAssigned = assignedClasses.length === 0 || assignedClasses.includes(s.cls) || assignedClasses.includes('All');
        const matchSubject = selectedAttendanceSubject === 'All' || !s.subjects || s.subjects.toLowerCase().includes(selectedAttendanceSubject.toLowerCase());
        return matchClass && matchAssigned && matchSubject;
    });

    if (filtered.length === 0) {
        container.innerHTML = `<div style="padding:24px; text-align:center; color:var(--text-muted); background:#f8fafc; border-radius:8px;">No students found matching Class: <b>${selectedAttendanceClass}</b> & Subject: <b>${selectedAttendanceSubject}</b>.</div>`;
        return;
    }

    container.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; flex-wrap:wrap; gap:10px;">
            <div style="font-size:13.5px; font-weight:700; color:var(--text);">
                Roster: <span class="badge badge-primary">${selectedAttendanceClass}</span> <span class="badge badge-purple">${selectedAttendanceSubject}</span> • <b>${filtered.length}</b> Students
            </div>
            <button class="btn btn-sm btn-success" onclick="markAllStaffStudentsPresent('${selectedDate}', '${selectedAttendanceClass}')">
                ✓ Mark All Present
            </button>
        </div>
        <div class="table-wrap">
            <table>
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Class</th>
                        <th>Enrolled Subjects</th>
                        <th>Status</th>
                        <th>Attendance Toggle</th>
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
                                <td style="font-size:12px; color:var(--text-muted);">${s.subjects || 'General'}</td>
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
    if (typeof attendanceRecords === 'undefined') attendanceRecords = {};
    if (!attendanceRecords[date]) attendanceRecords[date] = {};
    attendanceRecords[date][studentId] = status;
    if (typeof saveState === 'function') saveState();
    renderStaffAttendanceSheet();
    showToast(`Attendance marked as ${status}`);
}

function markAllStaffStudentsPresent(date, cls) {
    if (typeof attendanceRecords === 'undefined') attendanceRecords = {};
    if (!attendanceRecords[date]) attendanceRecords[date] = {};
    const assignedClasses = currentStaffUser && currentStaffUser.classes ? currentStaffUser.classes.split(',').map(c => c.trim()) : [];
    (students || []).forEach(s => {
        const matchClass = cls === 'All' || s.cls === cls;
        const matchAssigned = assignedClasses.length === 0 || assignedClasses.includes(s.cls) || assignedClasses.includes('All');
        if (matchClass && matchAssigned) {
            attendanceRecords[date][s.id] = 'present';
        }
    });
    if (typeof saveState === 'function') saveState();
    renderStaffAttendanceSheet();
    showToast('All students marked Present for today');
}

// ---------------------------------------------------------
// 3. NOTICES & BULLETINS
// ---------------------------------------------------------
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
