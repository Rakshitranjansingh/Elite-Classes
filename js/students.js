/* Elite Classes — Student Management Module */

let editingStudentId = null;
let activeStudentClassFilter = '';

// Helper: Calculate Discounted Fee based on Scholarship %
function getDiscountedFee(student) {
    if (!student || !student.fee) return 0;
    const pct = student.scholarshipPct || 0;
    return Math.max(0, Math.round(student.fee * (1 - pct / 100)));
}

// Prompt / Set Scholarship for Student
function setStudentScholarship(studentId) {
    const s = students.find(x => x.id === studentId);
    if (!s) return;

    const currentPct = s.scholarshipPct || 0;
    const input = prompt(`Set Scholarship % for ${s.name}\n(Current: ${currentPct}% | Base Fee: ₹${s.fee}):`, currentPct);
    
    if (input === null) return;

    const pct = parseFloat(input);
    if (isNaN(pct) || pct < 0 || pct > 100) {
        showToast('Enter a valid scholarship percentage (0 - 100%)', 'danger');
        return;
    }

    s.scholarshipPct = pct;
    saveState();
    if (typeof DBService !== 'undefined') DBService.upsertStudent(s);
    showToast(`${pct}% scholarship applied for ${s.name}`);
    openStudentDetailModal(studentId);
    renderStudentsTable();
    renderDashboard();
}

function setStudentClassFilter(cls) {
    activeStudentClassFilter = cls;
    renderStudentsTable();
}

function renderStudentsTable() {
    const search = (document.getElementById('student-search')?.value || '').toLowerCase();
    const classFilter = activeStudentClassFilter;

    // Render Class Filter Chips using CLASS_OPTIONS
    const filterContainer = document.getElementById('student-class-chips');
    if (filterContainer) {
        filterContainer.innerHTML = `<button class="btn btn-sm ${classFilter === '' ? 'btn-primary' : 'btn-outline'}" onclick="setStudentClassFilter('')">All</button>` +
            CLASS_OPTIONS.map(c => {
                const label = (c === 'LKG' || c === 'UKG') ? c : c.replace('Class ', '');
                const isActive = activeStudentClassFilter === c || activeStudentClassFilter === label;
                return `<button class="btn btn-sm ${isActive ? 'btn-primary' : 'btn-outline'}" onclick="setStudentClassFilter('${c}')">${label}</button>`;
            }).join('');
    }

    const filtered = students.filter(s => {
        const matchClass = !classFilter || s.cls === classFilter || s.cls === ('Class ' + classFilter);
        const matchSearch = !search || s.name.toLowerCase().includes(search) || s.parent.toLowerCase().includes(search) || (s.phone && s.phone.includes(search));
        return matchClass && matchSearch;
    });

    const countEl = document.getElementById('student-count-badge');
    if (countEl) countEl.textContent = `(${filtered.length})`;

    const tbody = document.getElementById('students-tbody');
    if (!tbody) return;

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8"><div class="empty-state"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke-width="1.5"/><circle cx="9" cy="7" r="4" stroke-width="1.5"/></svg><p>No students found</p></div></td></tr>`;
        return;
    }

    tbody.innerHTML = filtered.map(s => {
        const initials = getInitials(s.name);
        const effectiveFee = getDiscountedFee(s);
        const curPayments = payments.filter(p => p.studentId === s.id && isCurrentMonth(p.month));
        const paidAmount = curPayments.reduce((a, p) => a + p.amount, 0);
        const status = paidAmount >= effectiveFee ? 'paid' : paidAmount > 0 ? 'partial' : 'pending';
        const statusBadge = status === 'paid' ? '<span class="badge badge-success">Paid</span>' : status === 'partial' ? '<span class="badge badge-warning">Partial</span>' : '<span class="badge badge-danger">Pending Dues</span>';

        return `<tr class="clickable-row" onclick="openStudentDetailModal('${s.id}')">
            <td>
                <div style="display:flex; align-items:center; gap:12px;">
                    <div class="avatar" style="background:${s.color}">${initials}</div>
                    <div>
                        <div style="font-weight:700; color:var(--text);">${s.name}</div>
                        <div style="font-size:11.5px; color:var(--text-muted);">Due: ${s.due}th of month</div>
                    </div>
                </div>
            </td>
            <td><span class="badge badge-primary">${s.cls}</span></td>
            <td>
                <div>${s.parent}</div>
                <a href="https://wa.me/91${s.phone}" target="_blank" onclick="event.stopPropagation()" style="font-size:11.5px; color:#25D366; text-decoration:none; font-weight:600; display:inline-flex; align-items:center; gap:3px;">
                    <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654z"/></svg>
                    ${s.phone}
                </a>
            </td>
            <td style="font-size:12px; color:var(--text-muted);">${s.subjects || '—'}</td>
            <td style="font-weight:700;">
                ₹${effectiveFee.toLocaleString()}
                ${s.scholarshipPct > 0 ? `<div style="font-size:10.5px; color:var(--success); font-weight:600;">${s.scholarshipPct}% Scholarship</div>` : ''}
            </td>
            <td>${statusBadge}</td>
            <td onclick="event.stopPropagation()">
                <div class="action-group">
                    <button class="icon-btn" onclick="openStudentDetailModal('${s.id}')" title="View Student Profile">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke-width="2"/><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" stroke-width="2"/></svg>
                    </button>
                    <button class="icon-btn" onclick="editStudent('${s.id}')" title="Edit Info">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke-width="2"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke-width="2"/></svg>
                    </button>
                    <button class="icon-btn danger" onclick="deleteStudent('${s.id}')" title="Delete">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6" stroke-width="2"/><path d="M19 6l-1 14H6L5 6" stroke-width="2"/><path d="M10 11v6M14 11v6" stroke-width="2"/><path d="M9 6V4h6v2" stroke-width="2"/></svg>
                    </button>
                </div>
            </td>
        </tr>`;
    }).join('');
}

// Render Subject Checkbox Checklist
function renderSubjectChecklistContainer(containerId, selectedSubjectsStr = '') {
    const container = document.getElementById(containerId);
    if (!container) return;

    const selectedArr = (selectedSubjectsStr || '').split(',').map(s => s.trim());
    const validSubjects = SUBJECT_OPTIONS.filter(s => s !== SUBJECT_ENUM.ALL_SUBJECTS);

    container.innerHTML = validSubjects.map(sub => {
        const isChecked = selectedArr.includes(sub) || selectedSubjectsStr.includes('All Subjects');
        return `
            <label class="checkbox-item">
                <input type="checkbox" value="${sub}" ${isChecked ? 'checked' : ''}>
                <span>${sub}</span>
            </label>
        `;
    }).join('');
}

// Open Detailed Student Profile Modal
function openStudentDetailModal(studentId) {
    const s = students.find(x => x.id === studentId);
    if (!s) return;

    const modalBody = document.getElementById('studentDetailModalBody');
    if (!modalBody) return;

    const initials = getInitials(s.name);
    const effectiveFee = getDiscountedFee(s);
    const studentPayments = payments.filter(p => p.studentId === s.id).sort((a, b) => b.id - a.id);
    const totalPaidLifetime = studentPayments.reduce((a, p) => a + p.amount, 0);
    const perf = getStudentPerformance(s.id);

    modalBody.innerHTML = `
        <div style="display:flex; align-items:center; gap:16px; margin-bottom:20px; padding-bottom:16px; border-bottom:1px solid var(--border);">
            <div class="avatar" style="background:${s.color}; width:52px; height:52px; font-size:18px;">${initials}</div>
            <div style="flex:1;">
                <div style="font-size:18px; font-weight:800; color:var(--text);">${s.name}</div>
                <div style="display:flex; gap:8px; align-items:center; margin-top:4px;">
                    <span class="badge badge-primary">${s.cls}</span>
                    <span style="font-size:12px; color:var(--text-muted);">Admitted: ${s.doa || 'N/A'}</span>
                    <span style="font-size:12px; color:var(--text-muted);">School: ${s.school || 'N/A'}</span>
                </div>
            </div>
            <div>
                <button class="btn btn-sm btn-outline" onclick="closeModal('studentDetailModal'); editStudent('${s.id}')">
                    <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke-width="2"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke-width="2"/></svg>
                    Edit
                </button>
            </div>
        </div>

        <div class="form-grid" style="grid-template-columns: 1fr 1fr 1fr; gap:12px; margin-bottom:24px;">
            <div class="card" style="padding:14px; margin-bottom:0; background:#f8fafc;">
                <div style="font-size:11px; color:var(--text-muted); font-weight:700; text-transform:uppercase;">Parent / Guardian</div>
                <div style="font-size:13.5px; font-weight:700; margin-top:2px;">${s.parent}</div>
                <a href="https://wa.me/91${s.phone}" target="_blank" class="btn btn-sm btn-whatsapp" style="margin-top:8px; display:inline-flex; font-size:11px; padding:4px 8px;">
                    WhatsApp (${s.phone})
                </a>
            </div>

            <div class="card" style="padding:14px; margin-bottom:0; background:#f8fafc;">
                <div style="display:flex; align-items:center; justify-content:space-between;">
                    <div style="font-size:11px; color:var(--text-muted); font-weight:700; text-transform:uppercase;">Fee Details</div>
                    <button class="btn btn-sm btn-outline" onclick="setStudentScholarship('${s.id}')" style="padding:2px 6px; font-size:10px;" title="Set Scholarship Percentage">
                        + Scholarship
                    </button>
                </div>
                <div style="font-size:15px; font-weight:800; color:var(--primary); margin-top:2px;">
                    ₹${effectiveFee.toLocaleString()} <span style="font-size:11px; font-weight:500; color:var(--text-muted);">/ mo</span>
                </div>
                ${s.scholarshipPct > 0 ? `
                    <div style="font-size:11px; color:var(--success); font-weight:700; margin-top:2px;">
                        ${s.scholarshipPct}% Scholarship <span style="font-weight:400; color:var(--text-muted); text-decoration:line-through;">(Base ₹${s.fee})</span>
                    </div>
                ` : `
                    <div style="font-size:11.5px; color:var(--text-muted); margin-top:2px;">Due on ${s.due}th of month</div>
                `}
            </div>

            <div class="card" style="padding:14px; margin-bottom:0; background:#f8fafc; cursor:pointer;" onclick="document.getElementById('student-marks-history-sec').scrollIntoView({behavior:'smooth'})" title="Click to view exam history table">
                <div style="font-size:11px; color:var(--text-muted); font-weight:700; text-transform:uppercase;">Marks & Class Rank</div>
                <div style="font-size:15px; font-weight:800; color:var(--success); margin-top:2px;">
                    Rank #${perf.rank} <span style="font-size:11px; color:var(--text-muted); font-weight:600;">(in ${s.cls})</span>
                </div>
                <div style="font-size:11.5px; color:var(--text-muted); margin-top:2px;">
                    Student Avg: <strong style="color:var(--text);">${perf.avg}%</strong> <span style="font-size:10.5px;">(Class Avg: ${perf.classAvg}%)</span>
                </div>
            </div>
        </div>

        <div id="student-marks-history-sec" style="margin-bottom:24px;">
            <div style="font-size:14px; font-weight:800; color:var(--text); margin-bottom:10px;">Subject-wise Marks & Exam Performance History</div>
            <div class="table-wrap">
                <table>
                    <thead>
                        <tr>
                            <th>Exam / Test</th>
                            <th>Subject</th>
                            <th>Marks Obtained</th>
                            <th>Max Marks</th>
                            <th>Percentage</th>
                            <th>Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${perf.history.map(m => {
                            const pct = Math.round((m.marks / m.max) * 100);
                            return `
                            <tr>
                                <td style="font-weight:700;">${m.exam}</td>
                                <td>${m.subject}</td>
                                <td style="font-weight:700; color:var(--primary);">${m.marks}</td>
                                <td>${m.max}</td>
                                <td style="font-weight:700;">${pct}%</td>
                                <td><span class="badge ${pct >= 90 ? 'badge-success' : 'badge-primary'}">${m.grade}</span></td>
                            </tr>`;
                        }).join('')}
                    </tbody>
                </table>
            </div>
        </div>

        <div>
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:10px;">
                <div style="font-size:14px; font-weight:800; color:var(--text);">Fee Payment History (Total Paid: ₹${totalPaidLifetime.toLocaleString()})</div>
                <button class="btn btn-sm btn-primary" onclick="closeModal('studentDetailModal'); openCollectFeeModalForStudent('${s.id}')">
                    + Record Payment
                </button>
            </div>
            ${studentPayments.length === 0 ? '<div class="empty-state" style="padding:20px;"><p>No fee payments recorded yet</p></div>' : `
            <div class="table-wrap">
                <table>
                    <thead>
                        <tr>
                            <th>Month</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Mode</th>
                            <th>Remarks</th>
                            <th>Receipt</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${studentPayments.map(p => `
                        <tr>
                            <td style="font-weight:700;">${p.month}</td>
                            <td>${p.date}</td>
                            <td style="font-weight:700; color:var(--success);">₹${p.amount.toLocaleString()}</td>
                            <td><span class="badge badge-purple">${p.mode}</span></td>
                            <td style="font-size:12px; color:var(--text-muted);">${p.remarks || '—'}</td>
                            <td>
                                <button class="btn btn-sm btn-outline" onclick="showReceiptForPayment('${p.id}')">Receipt</button>
                            </td>
                        </tr>`).join('')}
                    </tbody>
                </table>
            </div>
            `}
        </div>
    `;

    openModal('studentDetailModal');
}

// Student Form Actions
function openAddStudentModal() {
    editingStudentId = null;
    document.getElementById('studentModalTitle').textContent = 'Add New Student';
    ['f-sname', 'f-sclass', 'f-sparent', 'f-sphone', 'f-sfee', 'f-sscholarship', 'f-sdoa', 'f-sschool'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });
    
    renderSubjectChecklistContainer('f-ssubjects-container', '');

    document.getElementById('f-sdue').value = '10';
    document.getElementById('f-sscholarship').value = '0';
    document.getElementById('f-sdoa').value = new Date().toISOString().split('T')[0];
    openModal('addStudentModal');
}

function editStudent(studentId) {
    const s = students.find(x => x.id === studentId);
    if (!s) return;

    editingStudentId = studentId;
    document.getElementById('studentModalTitle').textContent = 'Edit Student Details';
    document.getElementById('f-sname').value = s.name;
    document.getElementById('f-sclass').value = s.cls;
    document.getElementById('f-sparent').value = s.parent;
    document.getElementById('f-sphone').value = s.phone;
    document.getElementById('f-sfee').value = s.fee;
    document.getElementById('f-sdue').value = s.due || '10';
    document.getElementById('f-sscholarship').value = s.scholarshipPct || 0;

    renderSubjectChecklistContainer('f-ssubjects-container', s.subjects || '');

    document.getElementById('f-sdoa').value = s.doa || '';
    document.getElementById('f-sschool').value = s.school || '';

    openModal('addStudentModal');
}

function saveStudentForm() {
    const name = document.getElementById('f-sname').value.trim();
    const cls = document.getElementById('f-sclass').value;
    const parent = document.getElementById('f-sparent').value.trim();
    const phone = document.getElementById('f-sphone').value.trim();
    const fee = parseFloat(document.getElementById('f-sfee').value);
    const scholarshipPct = parseFloat(document.getElementById('f-sscholarship')?.value) || 0;

    // Read multi-select subject checkboxes
    const checkedSubjects = Array.from(document.querySelectorAll('#f-ssubjects-container input[type="checkbox"]:checked'))
        .map(cb => cb.value);
    const subjects = checkedSubjects.join(', ') || 'General Academics';

    if (!name || !cls || !parent || !phone || isNaN(fee)) {
        showToast('Fill all required fields (*)', 'danger');
        return;
    }

    if (editingStudentId) {
        const idx = students.findIndex(s => s.id === editingStudentId);
        students[idx] = {
            ...students[idx],
            name, cls, parent, phone, fee,
            scholarshipPct,
            due: document.getElementById('f-sdue').value,
            subjects,
            doa: document.getElementById('f-sdoa').value,
            school: document.getElementById('f-sschool').value.trim()
        };
        if (typeof DBService !== 'undefined') DBService.upsertStudent(students[idx]);
        showToast('Student details updated successfully!');
    } else {
        const newStudent = {
            id: 's_' + Date.now(),
            name, cls, parent, phone, fee,
            due: document.getElementById('f-sdue').value,
            subjects,
            scholarshipPct,
            doa: document.getElementById('f-sdoa').value,
            school: document.getElementById('f-sschool').value.trim(),
            color: AVATAR_COLORS[Math.floor(Math.random() * AVATAR_COLORS.length)]
        };
        students.push(newStudent);
        if (typeof DBService !== 'undefined') DBService.upsertStudent(newStudent);
        showToast('New student added successfully!');
    }

    saveState();
    closeModal('addStudentModal');
    renderStudentsTable();
    renderDashboard();
}

function deleteStudent(studentId) {
    if (!confirm('Are you sure you want to remove this student? All fee records will be deleted.')) return;
    students = students.filter(s => s.id !== studentId);
    payments = payments.filter(p => p.studentId !== studentId);
    saveState();
    if (typeof DBService !== 'undefined') DBService.deleteStudent(studentId);
    renderStudentsTable();
    renderDashboard();
    showToast('Student profile deleted', 'danger');
}
