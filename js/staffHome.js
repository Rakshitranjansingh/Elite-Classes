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

    const subKey = `${selectedDate}_${selectedAttendanceSubject}`;
    const dayRecords = (typeof attendanceRecords !== 'undefined') ? (attendanceRecords[subKey] || attendanceRecords[selectedDate] || {}) : {};

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

    let presentCount = 0;
    let absentCount = 0;
    let lateCount = 0;

    filtered.forEach(s => {
        const st = dayRecords[s.id] || 'present';
        if (st === 'present') presentCount++;
        else if (st === 'absent') absentCount++;
        else if (st === 'late') lateCount++;
        else presentCount++;
    });

    container.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; flex-wrap:wrap; gap:10px;">
            <div style="font-size:13.5px; font-weight:700; color:var(--text);">
                Roster: <span class="badge badge-primary">${selectedAttendanceClass}</span> <span class="badge badge-purple">${selectedAttendanceSubject}</span> • <b>${filtered.length} Students (${presentCount}P, ${absentCount}A, ${lateCount}L)</b>
            </div>
            <button class="btn btn-sm btn-success" onclick="markAllStaffStudentsPresent('${selectedDate}', '${selectedAttendanceClass}', '${selectedAttendanceSubject}')">
                ✓ Mark All Present
            </button>
        </div>
        <div class="table-wrap">
            <table>
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Attendance Status</th>
                        <th>Quick Action</th>
                    </tr>
                </thead>
                <tbody>
                    ${filtered.map(s => {
                        const status = dayRecords[s.id] || 'present';
                        const badge = status === 'present' ? '<span class="badge badge-success">Present</span>' : status === 'absent' ? '<span class="badge badge-danger">Absent</span>' : '<span class="badge badge-warning">Late</span>';
                        return `
                            <tr>
                                <td>
                                    <div style="display:flex; align-items:center; gap:10px;">
                                        <div class="avatar avatar-sm" style="background:${s.color || '#2563eb'}; width:32px; height:32px; font-size:12px;">${getInitials(s.name)}</div>
                                        <div>
                                            <b>${s.name}</b>
                                            <div style="font-size:11px; color:var(--text-muted);">ID: #${s.id}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>${badge}</td>
                                <td>
                                    <div class="action-group">
                                        <button class="btn btn-sm ${status === 'present' ? 'btn-success' : 'btn-outline'}" onclick="setStaffStudentAttendance('${selectedDate}', '${s.id}', 'present', '${selectedAttendanceSubject}')">Present</button>
                                        <button class="btn btn-sm ${status === 'absent' ? 'btn-danger' : 'btn-outline'}" onclick="setStaffStudentAttendance('${selectedDate}', '${s.id}', 'absent', '${selectedAttendanceSubject}')" style="border-color:#ef4444; color:${status==='absent'?'#fff':'#ef4444'};">Absent</button>
                                        <button class="btn btn-sm ${status === 'late' ? 'btn-warning' : 'btn-outline'}" onclick="setStaffStudentAttendance('${selectedDate}', '${s.id}', 'late', '${selectedAttendanceSubject}')">Late</button>
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

async function setStaffStudentAttendance(date, studentId, status, subject = 'General') {
    if (typeof attendanceRecords === 'undefined') attendanceRecords = {};
    const subKey = `${date}_${subject}`;
    if (!attendanceRecords[subKey]) attendanceRecords[subKey] = {};
    attendanceRecords[subKey][studentId] = status;

    if (!attendanceRecords[date]) attendanceRecords[date] = {};
    attendanceRecords[date][studentId] = status;

    if (typeof saveState === 'function') saveState();

    if (typeof DBService !== 'undefined' && typeof DBService.saveAttendanceStatus === 'function') {
        await DBService.saveAttendanceStatus(date, studentId, subject, status);
    }

    renderStaffAttendanceSheet();
    showToast(`Marked ${status.toUpperCase()} for ${subject}`, 'success');
}

async function markAllStaffStudentsPresent(date, cls, subject = 'General') {
    if (typeof attendanceRecords === 'undefined') attendanceRecords = {};
    const subKey = `${date}_${subject}`;
    if (!attendanceRecords[subKey]) attendanceRecords[subKey] = {};
    if (!attendanceRecords[date]) attendanceRecords[date] = {};

    const assignedClasses = currentStaffUser && currentStaffUser.classes ? currentStaffUser.classes.split(',').map(c => c.trim()) : [];
    const batch = [];

    (students || []).forEach(s => {
        const matchClass = cls === 'All' || s.cls === cls;
        const matchAssigned = assignedClasses.length === 0 || assignedClasses.includes(s.cls) || assignedClasses.includes('All');
        const matchSubject = subject === 'All' || !s.subjects || s.subjects.toLowerCase().includes(subject.toLowerCase());
        if (matchClass && matchAssigned && matchSubject) {
            attendanceRecords[subKey][s.id] = 'present';
            attendanceRecords[date][s.id] = 'present';
            batch.push({ date: date, student_id: s.id, subject: subject, status: 'present' });
        }
    });

    if (typeof saveState === 'function') saveState();

    if (typeof DBService !== 'undefined' && typeof DBService.saveAttendanceBatch === 'function') {
        await DBService.saveAttendanceBatch(batch);
    }

    renderStaffAttendanceSheet();
    showToast(`All students marked Present for ${subject} (${date})`, 'success');
}

// ---------------------------------------------------------
// 3. NOTICES & BULLETINS (CREATE, EDIT, DELETE)
// ---------------------------------------------------------
let cachedStaffNotices = [];

async function renderStaffNotices() {
    const container = document.getElementById('staff-notices-container');
    if (!container) return;

    if (typeof DBService !== 'undefined' && typeof DBService.fetchNoticeList === 'function') {
        cachedStaffNotices = await DBService.fetchNoticeList();
    } else {
        cachedStaffNotices = JSON.parse(localStorage.getItem('ec_notices') || '[]');
    }

    if (!cachedStaffNotices || cachedStaffNotices.length === 0) {
        container.innerHTML = `<div style="padding:30px; text-align:center; color:var(--text-muted); background:#f8fafc; border-radius:12px; border:1px dashed var(--border);">No announcements published yet. Click "+ Add Notice" to post one.</div>`;
        return;
    }

    container.innerHTML = cachedStaffNotices.map(n => {
        let category = 'ANNOUNCEMENT';
        let text = n.content;

        const match = text.match(/^\[(.*?)\]\s*(.*)$/s);
        if (match) {
            category = match[1];
            text = match[2];
        }

        const dateStr = n.created_at ? new Date(n.created_at).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Active';

        return `
            <div style="background:#ffffff; border:1px solid var(--border); padding:16px 20px; border-radius:12px; margin-bottom:12px; display:flex; justify-content:space-between; align-items:flex-start; box-shadow:0 1px 3px rgba(0,0,0,0.03); gap:16px; flex-wrap:wrap;">
                <div style="flex:1; min-width:260px;">
                    <div style="display:flex; align-items:center; gap:8px; margin-bottom:6px;">
                        <span class="badge badge-purple" style="font-size:11px;">${category}</span>
                        <span style="font-size:11.5px; color:var(--text-muted);">📅 ${dateStr}</span>
                    </div>
                    <div style="font-size:14px; font-weight:600; color:#0f172a; line-height:1.5;">${text}</div>
                </div>
                <div style="display:flex; align-items:center; gap:8px; flex-shrink:0;">
                    <span class="badge badge-success">Active</span>
                    <button class="btn btn-sm btn-outline" onclick="openEditStaffNoticeModal('${n.id}')" style="font-size:11.5px; padding:4px 10px; display:inline-flex; align-items:center; gap:4px;" title="Edit announcement">
                        ✏️ Edit
                    </button>
                    <button class="btn btn-sm btn-outline danger" onclick="deleteStaffNotice('${n.id}')" style="border-color:#ef4444; color:#ef4444; font-size:11.5px; padding:4px 8px;" title="Delete announcement">
                        🗑️
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

function openAddStaffNoticeModal() {
    const idInput = document.getElementById('f-staff-notice-id');
    const contentInput = document.getElementById('f-staff-notice-content');
    const categoryInput = document.getElementById('f-staff-notice-category');
    const titleEl = document.getElementById('staffNoticeModalTitle');
    const submitBtn = document.getElementById('staffNoticeSubmitBtn');

    if (idInput) idInput.value = '';
    if (contentInput) contentInput.value = '';
    if (categoryInput) categoryInput.value = 'ANNOUNCEMENT';
    if (titleEl) titleEl.textContent = '📢 Post New Notice / Announcement';
    if (submitBtn) submitBtn.textContent = 'Publish Notice';

    openModal('staffAddNoticeModal');
}

function openEditStaffNoticeModal(noticeId) {
    const notice = cachedStaffNotices.find(n => n.id === noticeId);
    if (!notice) return;

    let category = 'ANNOUNCEMENT';
    let text = notice.content;

    const match = text.match(/^\[(.*?)\]\s*(.*)$/s);
    if (match) {
        category = match[1];
        text = match[2];
    }

    const idInput = document.getElementById('f-staff-notice-id');
    const contentInput = document.getElementById('f-staff-notice-content');
    const categoryInput = document.getElementById('f-staff-notice-category');
    const titleEl = document.getElementById('staffNoticeModalTitle');
    const submitBtn = document.getElementById('staffNoticeSubmitBtn');

    if (idInput) idInput.value = notice.id;
    if (contentInput) contentInput.value = text;
    if (categoryInput) categoryInput.value = category;
    if (titleEl) titleEl.textContent = '✏️ Edit Notice / Announcement';
    if (submitBtn) submitBtn.textContent = 'Save Changes';

    openModal('staffAddNoticeModal');
}

async function deleteStaffNotice(noticeId) {
    if (!confirm('Are you sure you want to remove this announcement from the notice board?')) return;

    if (typeof DBService !== 'undefined' && typeof DBService.deleteNotice === 'function') {
        await DBService.deleteNotice(noticeId);
    } else {
        let list = JSON.parse(localStorage.getItem('ec_notices') || '[]');
        list = list.filter(n => n.id !== noticeId);
        localStorage.setItem('ec_notices', JSON.stringify(list));
    }

    showToast('Notice removed successfully!', 'success');
    await renderStaffNotices();
    if (typeof renderStudentNoticeSlides === 'function') renderStudentNoticeSlides();
}

async function submitStaffNotice() {
    const idInput = document.getElementById('f-staff-notice-id');
    const contentInput = document.getElementById('f-staff-notice-content');
    const categoryInput = document.getElementById('f-staff-notice-category');
    if (!contentInput) return;

    const noticeId = idInput ? idInput.value : '';
    const content = contentInput.value.trim();
    const category = categoryInput ? categoryInput.value : '';

    if (!content) {
        showToast('Please enter the notice message', 'danger');
        return;
    }

    const formattedContent = category ? `[${category}] ${content}` : content;

    if (noticeId) {
        // Edit mode
        if (typeof DBService !== 'undefined' && typeof DBService.updateNotice === 'function') {
            await DBService.updateNotice(noticeId, formattedContent, true);
        } else {
            const list = JSON.parse(localStorage.getItem('ec_notices') || '[]');
            const idx = list.findIndex(n => n.id === noticeId);
            if (idx >= 0) list[idx].content = formattedContent;
            localStorage.setItem('ec_notices', JSON.stringify(list));
        }
        showToast('Notice updated successfully!', 'success');
    } else {
        // Create mode
        if (typeof DBService !== 'undefined' && typeof DBService.insertNotice === 'function') {
            await DBService.insertNotice(formattedContent);
        } else {
            const newNotice = { id: 'n_' + Date.now(), content: formattedContent, is_active: true, created_at: new Date().toISOString() };
            const list = JSON.parse(localStorage.getItem('ec_notices') || '[]');
            list.unshift(newNotice);
            localStorage.setItem('ec_notices', JSON.stringify(list));
        }
        showToast('Notice published successfully!', 'success');
    }

    closeModal('staffAddNoticeModal');
    contentInput.value = '';
    if (idInput) idInput.value = '';
    await renderStaffNotices();
    if (typeof renderStudentNoticeSlides === 'function') renderStudentNoticeSlides();
}

// ---------------------------------------------------------
// 4. STAFF PROFILE & PIN-PROTECTED SALARY DETAILS
// ---------------------------------------------------------
function renderStaffProfileModal() {
    const grid = document.getElementById('staff-profile-info-grid');
    if (!grid || !currentStaffUser) return;

    const isTeacher = currentStaffUser.type === 'teacher' || currentStaffUser.is_teacher === true || !!currentStaffUser.subjects;

    grid.innerHTML = `
        <div class="student-info-card">
            <div class="student-info-icon">👤</div>
            <div>
                <div class="student-info-label">Full Name</div>
                <div class="student-info-value">${currentStaffUser.name}</div>
            </div>
        </div>

        <div class="student-info-card">
            <div class="student-info-icon">🏛️</div>
            <div>
                <div class="student-info-label">Staff Type</div>
                <div class="student-info-value">
                    ${isTeacher ? '<span class="badge badge-purple" style="font-size:12px;">Teaching Faculty</span>' : '<span class="badge badge-primary" style="font-size:12px;">Support Staff / Non-Teaching</span>'}
                </div>
            </div>
        </div>

        <div class="student-info-card">
            <div class="student-info-icon">💼</div>
            <div>
                <div class="student-info-label">Role / Department</div>
                <div class="student-info-value">${currentStaffUser.role || (isTeacher ? (currentStaffUser.subjects || 'General') + ' Faculty' : 'Institute Staff')}</div>
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
            <div class="student-info-icon">📧</div>
            <div>
                <div class="student-info-label">Email Address</div>
                <div class="student-info-value">${currentStaffUser.email || 'N/A'}</div>
            </div>
        </div>

        <div class="student-info-card">
            <div class="student-info-icon">🏫</div>
            <div>
                <div class="student-info-label">Assigned Classes</div>
                <div class="student-info-value">${isTeacher ? (currentStaffUser.classes || currentStaffUser.assigned_classes || 'All Institute Classes') : 'Administrative Scope'}</div>
            </div>
        </div>
    `;
}

function openStaffSalaryPinModal() {
    const pinInput = document.getElementById('staff-salary-pin-input');
    const errEl = document.getElementById('staff-salary-pin-error');
    if (pinInput) pinInput.value = '';
    if (errEl) errEl.textContent = '';
    openModal('staffSalaryPinModal');
    setTimeout(() => { if (pinInput) pinInput.focus(); }, 150);
}

function verifyStaffSalaryPin() {
    const pinInput = document.getElementById('staff-salary-pin-input');
    const errEl = document.getElementById('staff-salary-pin-error');
    const entered = pinInput ? pinInput.value.trim() : '';

    const expectedPin = (currentStaffUser && currentStaffUser.pin) ? String(currentStaffUser.pin) : '123456';

    if (!entered) {
        if (errEl) errEl.textContent = 'Please enter your 6-digit PIN.';
        return;
    }

    if (entered !== expectedPin) {
        if (errEl) errEl.textContent = '❌ Incorrect PIN. Please enter your profile PIN.';
        if (pinInput) {
            pinInput.value = '';
            pinInput.focus();
        }
        return;
    }

    closeModal('staffSalaryPinModal');
    renderStaffSalaryDetailsModal();
    openModal('staffSalaryDetailsModal');
}

function renderStaffSalaryDetailsModal() {
    const body = document.getElementById('staffSalaryDetailsBody');
    if (!body || !currentStaffUser) return;

    const baseSalary = parseFloat(currentStaffUser.salary || currentStaffUser.base_salary || 0);
    const incentive = parseFloat(currentStaffUser.incentive || 0);
    const totalMonthlySalary = baseSalary + incentive;

    // Calculate Next Salary Date (5th of next month)
    const now = new Date();
    const nextSalaryDate = new Date(now.getFullYear(), now.getMonth() + 1, 5);
    const nextSalaryStr = nextSalaryDate.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

    // Filter salary payouts for this staff member
    const myPayouts = (salaryPayouts || []).filter(p => 
        p.recipientId === currentStaffUser.id || 
        p.recipient_id === currentStaffUser.id || 
        (p.recipientName && p.recipientName.toLowerCase() === currentStaffUser.name.toLowerCase())
    );

    body.innerHTML = `
        <!-- TOP COMBINED SALARY & NEXT PAYOUT SUMMARY -->
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:16px; margin-bottom:20px;">
            <div style="background:linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%); border:1px solid #bfdbfe; border-radius:14px; padding:18px 20px;">
                <div style="font-size:11.5px; font-weight:700; color:#1e40af; text-transform:uppercase; letter-spacing:0.5px;">
                    💵 Total Monthly Salary
                </div>
                <div style="font-size:28px; font-weight:800; color:#1e3a8a; margin:8px 0;">
                    ₹${totalMonthlySalary.toLocaleString()}
                </div>
                <div style="font-size:12px; color:#3b82f6; font-weight:600;">
                    (Base Pay: ₹${baseSalary.toLocaleString()} + Monthly Incentive: ₹${incentive.toLocaleString()})
                </div>
            </div>

            <div style="background:linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); border:1px solid #bbf7d0; border-radius:14px; padding:18px 20px;">
                <div style="font-size:11.5px; font-weight:700; color:#166534; text-transform:uppercase; letter-spacing:0.5px;">
                    📅 Next Scheduled Salary Date
                </div>
                <div style="font-size:22px; font-weight:800; color:#14532d; margin:8px 0;">
                    ${nextSalaryStr}
                </div>
                <div style="font-size:12px; color:#16a34a; font-weight:600;">
                    ⏱️ Disbursed automatically on the 5th of every month
                </div>
            </div>
        </div>

        <!-- SALARY DISBURSEMENT HISTORY -->
        <div style="margin-top:10px;">
            <div style="font-size:14.5px; font-weight:700; color:var(--text); margin-bottom:12px; display:flex; justify-content:space-between; align-items:center;">
                <span>📋 Salary Payments Received</span>
                <span class="badge badge-purple">${myPayouts.length} Disbursement(s)</span>
            </div>

            ${myPayouts.length === 0 ? `
                <div style="padding:28px; text-align:center; background:#f8fafc; border-radius:12px; border:1px dashed var(--border); color:var(--text-muted);">
                    <div style="font-size:24px; margin-bottom:6px;">🧾</div>
                    <div style="font-weight:600; font-size:13.5px; color:var(--text);">No historical salary payouts on record yet.</div>
                    <div style="font-size:12px; margin-top:4px;">Disbursements processed by administration on the 5th will appear in this ledger.</div>
                </div>
            ` : `
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Salary Month</th>
                                <th>Disbursement Date</th>
                                <th>Payment Mode</th>
                                <th>Reference / Txn No.</th>
                                <th>Amount Paid</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${myPayouts.map(p => `
                                <tr>
                                    <td><b>${p.month || 'Current Month'}</b></td>
                                    <td>${p.date || '5th of Month'}</td>
                                    <td><span class="badge badge-primary">${p.mode || 'Bank Transfer'}</span></td>
                                    <td style="font-size:12px; color:var(--text-muted);">${p.refNo || 'TXN-DIRECT'}</td>
                                    <td style="font-weight:700; color:#16a34a;">₹${(p.amount || totalMonthlySalary).toLocaleString()}</td>
                                    <td><span class="badge badge-success">Received</span></td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            `}
        </div>
    `;
}

// Boot on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('staff_home.html') || document.getElementById('view-staff-portal')) {
        initStaffPortal();
    }
});
