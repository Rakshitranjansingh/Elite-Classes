/* Elite Classes — Attendance Management Module */

let attendanceRecords = JSON.parse(localStorage.getItem('ec_attendance') || '{}');
let activeAttendanceClass = 'Class 5';

function saveAttendance() {
    localStorage.setItem('ec_attendance', JSON.stringify(attendanceRecords));
}

function getTodayDateStr() {
    return new Date().toISOString().split('T')[0];
}

function renderAttendanceView() {
    const container = document.getElementById('attendance-container');
    if (!container) return;

    const dateInput = document.getElementById('attendance-date-input');
    const selectedDate = dateInput ? dateInput.value : getTodayDateStr();

    if (!attendanceRecords[selectedDate]) {
        attendanceRecords[selectedDate] = {};
    }

    const classSel = document.getElementById('attendance-class-select');
    const selectedClass = classSel ? classSel.value : 'All';

    const filteredStudents = students.filter(s => selectedClass === 'All' || s.cls === selectedClass);

    let presentCount = 0;
    let absentCount = 0;

    filteredStudents.forEach(s => {
        const status = attendanceRecords[selectedDate][s.id] || 'present';
        if (status === 'present') presentCount++;
        else if (status === 'absent') absentCount++;
    });

    const total = filteredStudents.length;
    const rate = total > 0 ? Math.round((presentCount / total) * 100) : 100;

    const rateEl = document.getElementById('att-rate-badge');
    if (rateEl) rateEl.textContent = `${rate}% Present (${presentCount}/${total})`;

    if (filteredStudents.length === 0) {
        container.innerHTML = `<div class="empty-state"><p>No students enrolled in this class</p></div>`;
        return;
    }

    container.innerHTML = `
        <div class="table-wrap">
            <table>
                <thead>
                    <tr>
                        <th>Student</th>
                        <th>Class</th>
                        <th>Parent Contact</th>
                        <th>Status for ${selectedDate}</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    ${filteredStudents.map(s => {
                        const curStatus = attendanceRecords[selectedDate][s.id] || 'present';
                        const initials = getInitials(s.name);
                        return `
                        <tr>
                            <td>
                                <div style="display:flex; align-items:center; gap:10px;">
                                    <div class="avatar avatar-sm" style="background:${s.color}">${initials}</div>
                                    <span style="font-weight:700;">${s.name}</span>
                                </div>
                            </td>
                            <td><span class="badge badge-primary">${s.cls}</span></td>
                            <td>${s.parent} (${s.phone})</td>
                            <td>
                                <span class="badge ${curStatus === 'present' ? 'badge-success' : curStatus === 'absent' ? 'badge-danger' : 'badge-warning'}">
                                    ${curStatus.toUpperCase()}
                                </span>
                            </td>
                            <td>
                                <div style="display:flex; gap:6px;">
                                    <button class="btn btn-sm ${curStatus === 'present' ? 'btn-success' : 'btn-outline'}" onclick="markStudentAttendance('${s.id}', 'present')">
                                        Present
                                    </button>
                                    <button class="btn btn-sm ${curStatus === 'absent' ? 'btn-danger' : 'btn-outline'}" onclick="markStudentAttendance('${s.id}', 'absent')">
                                        Absent
                                    </button>
                                    <button class="btn btn-sm ${curStatus === 'late' ? 'btn-warning' : 'btn-outline'}" onclick="markStudentAttendance('${s.id}', 'late')">
                                        Late
                                    </button>
                                </div>
                            </td>
                        </tr>`;
                    }).join('')}
                </tbody>
            </table>
        </div>
    `;
}

function markStudentAttendance(studentId, status) {
    const dateInput = document.getElementById('attendance-date-input');
    const selectedDate = dateInput ? dateInput.value : getTodayDateStr();

    if (!attendanceRecords[selectedDate]) {
        attendanceRecords[selectedDate] = {};
    }

    attendanceRecords[selectedDate][studentId] = status;
    saveAttendance();
    renderAttendanceView();
    renderDashboard();
    showToast(`Attendance updated to ${status.toUpperCase()}`);
}
