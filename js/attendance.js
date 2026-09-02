/* Elite Classes — Attendance Management Module (Admin Portal) */

let activeAdminAttendanceClass = 'All';
let activeAdminAttendanceSubject = 'All';

function getTodayDateStr() {
    return new Date().toISOString().split('T')[0];
}

function setupAdminAttendanceControls() {
    const dateInput = document.getElementById('attendance-date-input');
    if (dateInput && (!dateInput.value || dateInput.value === '')) {
        dateInput.value = getTodayDateStr();
    }

    // 1. Class Filter Chips (All Classes)
    const classContainer = document.getElementById('admin-att-class-chips');
    const allClasses = ['All', ...(typeof CLASS_OPTIONS !== 'undefined' ? CLASS_OPTIONS : ['Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'LKG', 'UKG'])];

    if (classContainer) {
        classContainer.innerHTML = allClasses.map(c => `
            <button class="btn btn-sm ${activeAdminAttendanceClass === c ? 'btn-primary' : 'btn-outline'}" onclick="selectAdminAttendanceClass('${c}')">
                ${c === 'All' ? '🏫 All Classes' : c}
            </button>
        `).join('');
    }

    // 2. Subject Filter Chips (All Subjects)
    const subjectContainer = document.getElementById('admin-att-subject-chips');
    const allSubjects = ['All', 'General', 'Mathematics', 'Science', 'Physics', 'Chemistry', 'Biology', 'English', 'Social Studies', 'Hindi'];

    if (subjectContainer) {
        subjectContainer.innerHTML = allSubjects.map(s => `
            <button class="btn btn-sm ${activeAdminAttendanceSubject === s ? 'btn-primary' : 'btn-outline'}" onclick="selectAdminAttendanceSubject('${s}')">
                ${s === 'All' ? '📚 All Subjects' : s}
            </button>
        `).join('');
    }
}

function selectAdminAttendanceClass(cls) {
    activeAdminAttendanceClass = cls;
    setupAdminAttendanceControls();
    renderAttendanceView();
}

function selectAdminAttendanceSubject(sub) {
    activeAdminAttendanceSubject = sub;
    setupAdminAttendanceControls();
    renderAttendanceView();
}

async function renderAttendanceView() {
    const container = document.getElementById('attendance-container');
    if (!container) return;

    setupAdminAttendanceControls();

    const dateInput = document.getElementById('attendance-date-input');
    const selectedDate = dateInput ? dateInput.value : getTodayDateStr();

    let allAttendance = {};
    if (typeof DBService !== 'undefined' && typeof DBService.fetchAttendanceRecords === 'function') {
        allAttendance = await DBService.fetchAttendanceRecords(selectedDate, activeAdminAttendanceSubject);
    } else {
        allAttendance = JSON.parse(localStorage.getItem('ec_attendance') || '{}');
    }

    const subKey = `${selectedDate}_${activeAdminAttendanceSubject}`;
    const dayRecords = allAttendance[subKey] || allAttendance[selectedDate] || {};

    const filtered = (students || []).filter(s => {
        const matchClass = activeAdminAttendanceClass === 'All' || s.cls === activeAdminAttendanceClass;
        const matchSubject = activeAdminAttendanceSubject === 'All' || !s.subjects || s.subjects.toLowerCase().includes(activeAdminAttendanceSubject.toLowerCase());
        return matchClass && matchSubject;
    });

    if (filtered.length === 0) {
        container.innerHTML = `<div style="padding:28px; text-align:center; color:var(--text-muted); background:#f8fafc; border-radius:10px; border:1px dashed var(--border);">No students found matching Class: <b>${activeAdminAttendanceClass}</b> & Subject: <b>${activeAdminAttendanceSubject}</b>.</div>`;
        return;
    }

    let presentCount = 0;
    let absentCount = 0;
    let lateCount = 0;
    let unmarkedCount = 0;

    filtered.forEach(s => {
        const st = dayRecords[s.id];
        if (st === 'present') presentCount++;
        else if (st === 'absent') absentCount++;
        else if (st === 'late') lateCount++;
        else unmarkedCount++;
    });

    container.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; flex-wrap:wrap; gap:10px;">
            <div style="font-size:14px; font-weight:700; color:var(--text);">
                Roster: <span class="badge badge-primary">${activeAdminAttendanceClass}</span> <span class="badge badge-purple">${activeAdminAttendanceSubject}</span> • <b>${filtered.length} Students (${presentCount}P, ${absentCount}A, ${lateCount}L${unmarkedCount > 0 ? `, ${unmarkedCount} Unmarked` : ''})</b>
            </div>
            <button class="btn btn-sm btn-success" onclick="markAllAdminStudentsPresent('${selectedDate}', '${activeAdminAttendanceClass}', '${activeAdminAttendanceSubject}')">
                ✓ Mark All Present
            </button>
        </div>
        <div class="table-wrap">
            <table>
                <thead>
                    <tr>
                        <th>Student Name</th>
                        ${activeAdminAttendanceClass === 'All' ? '<th>Class</th>' : ''}
                        <th>Attendance Status</th>
                        <th>Quick Action</th>
                    </tr>
                </thead>
                <tbody>
                    ${filtered.map(s => {
                        const status = dayRecords[s.id] || 'unmarked';
                        const badge = status === 'present' 
                            ? '<span class="badge badge-success">Present</span>' 
                            : status === 'absent' 
                            ? '<span class="badge badge-danger">Absent</span>' 
                            : status === 'late' 
                            ? '<span class="badge badge-warning">Late</span>' 
                            : '<span class="badge badge-outline" style="color:var(--text-muted);">Unmarked</span>';
                        return `
                            <tr>
                                <td>
                                    <div style="display:flex; align-items:center; gap:10px;">
                                        <div class="avatar avatar-sm" style="background:${s.color || '#2563eb'}; width:32px; height:32px; font-size:12px;">${getInitials(s.name)}</div>
                                        <span style="font-weight:700; color:var(--text);">${s.name}</span>
                                    </div>
                                </td>
                                ${activeAdminAttendanceClass === 'All' ? `<td><span class="badge badge-primary">${s.cls}</span></td>` : ''}
                                <td>${badge}</td>
                                <td>
                                    <div class="action-group" style="display:flex; gap:6px;">
                                        <button class="btn btn-sm ${status === 'present' ? 'btn-success' : 'btn-outline'}" onclick="setAdminStudentAttendance('${selectedDate}', '${s.id}', 'present', '${activeAdminAttendanceSubject}')">Present</button>
                                        <button class="btn btn-sm ${status === 'absent' ? 'btn-danger' : 'btn-outline'}" onclick="setAdminStudentAttendance('${selectedDate}', '${s.id}', 'absent', '${activeAdminAttendanceSubject}')" style="border-color:#ef4444; color:${status==='absent'?'#fff':'#ef4444'};">Absent</button>
                                        <button class="btn btn-sm ${status === 'late' ? 'btn-warning' : 'btn-outline'}" onclick="setAdminStudentAttendance('${selectedDate}', '${s.id}', 'late', '${activeAdminAttendanceSubject}')">Late</button>
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

async function setAdminStudentAttendance(date, studentId, status, subject = 'General') {
    const attendanceRecords = JSON.parse(localStorage.getItem('ec_attendance') || '{}');
    const subKey = `${date}_${subject}`;
    if (!attendanceRecords[subKey]) attendanceRecords[subKey] = {};
    if (!attendanceRecords[date]) attendanceRecords[date] = {};

    attendanceRecords[subKey][studentId] = status;
    attendanceRecords[date][studentId] = status;
    localStorage.setItem('ec_attendance', JSON.stringify(attendanceRecords));

    if (typeof DBService !== 'undefined' && typeof DBService.saveAttendanceStatus === 'function') {
        await DBService.saveAttendanceStatus(date, studentId, subject, status);
    }

    renderAttendanceView();
    if (typeof renderDashboard === 'function') renderDashboard();
    showToast(`Attendance updated: ${status.toUpperCase()} (${subject})`);
}

async function markAllAdminStudentsPresent(date, cls, subject = 'General') {
    const attendanceRecords = JSON.parse(localStorage.getItem('ec_attendance') || '{}');
    const subKey = `${date}_${subject}`;
    if (!attendanceRecords[subKey]) attendanceRecords[subKey] = {};
    if (!attendanceRecords[date]) attendanceRecords[date] = {};

    const batch = [];
    (students || []).forEach(s => {
        const matchClass = cls === 'All' || s.cls === cls;
        const matchSubject = subject === 'All' || !s.subjects || s.subjects.toLowerCase().includes(subject.toLowerCase());
        if (matchClass && matchSubject) {
            attendanceRecords[subKey][s.id] = 'present';
            attendanceRecords[date][s.id] = 'present';
            batch.push({ date: date, student_id: s.id, subject: subject, status: 'present' });
        }
    });

    localStorage.setItem('ec_attendance', JSON.stringify(attendanceRecords));

    if (typeof DBService !== 'undefined' && typeof DBService.saveAttendanceBatch === 'function') {
        await DBService.saveAttendanceBatch(batch);
    }

    renderAttendanceView();
    if (typeof renderDashboard === 'function') renderDashboard();
    showToast(`All students marked Present for ${subject} (${date})`, 'success');
}
