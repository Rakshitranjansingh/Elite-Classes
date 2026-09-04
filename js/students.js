/* Elite Classes — Student Management Module */

let editingStudentId = null;
let activeStudentClassFilter = '';

// Helper: Calculate Discounted Fee based on Scholarship %
function getDiscountedFee(student) {
    if (!student || !student.fee) return 0;
    const pct = student.scholarshipPct || 0;
    return Math.max(0, Math.round(student.fee * (1 - pct / 100)));
}

// Helper: Get comprehensive fee dues and status
function getStudentFeeStatus(student) {
    if (!student) return { status: 'pending', paidAmount: 0, pendingAmount: 0, effectiveFee: 0, badge: '<span class="badge badge-danger">Pending</span>' };
    const effectiveFee = getDiscountedFee(student);
    const curPayments = (payments || []).filter(p => p.studentId === student.id && isCurrentMonth(p.month));
    const paidAmount = curPayments.reduce((a, p) => a + (p.amount || 0), 0);
    const pendingAmount = Math.max(0, effectiveFee - paidAmount);

    let status = 'pending';
    let badge = '<span class="badge badge-danger">Pending Dues</span>';

    if (paidAmount >= effectiveFee) {
        status = 'paid';
        badge = '<span class="badge badge-success">Paid</span>';
    } else if (paidAmount > 0) {
        status = 'partial';
        badge = `<span class="badge badge-warning">Partial (₹${pendingAmount.toLocaleString()} Due)</span>`;
    } else {
        badge = `<span class="badge badge-danger">₹${effectiveFee.toLocaleString()} Due</span>`;
    }

    return { status, paidAmount, pendingAmount, effectiveFee, badge };
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
        const feeInfo = getStudentFeeStatus(s);
        const effectiveFee = feeInfo.effectiveFee;
        const statusBadge = feeInfo.badge;

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

        <div style="margin-bottom:20px;">
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

        <div>
            <div style="font-size:14px; font-weight:800; color:var(--text); margin-bottom:10px;">
                💬 Teacher Remarks & Faculty Observations
            </div>
            <div id="modal-student-remarks-list">
                <div style="font-size:12.5px; color:var(--text-muted); background:#f8fafc; padding:12px; border-radius:8px; border:1px dashed var(--border);">Loading teacher remarks...</div>
            </div>
        </div>
    `;

    openModal('studentDetailModal');

    // Load remarks asynchronously
    loadStudentRemarksInAdminModal(s.id);
}

async function loadStudentRemarksInAdminModal(studentId) {
    const container = document.getElementById('modal-student-remarks-list');
    if (!container) return;

    let remarks = [];
    if (typeof DBService !== 'undefined' && typeof DBService.fetchStudentRemarks === 'function') {
        remarks = await DBService.fetchStudentRemarks(studentId);
    } else {
        const allRemarks = JSON.parse(localStorage.getItem('ec_student_remarks') || '[]');
        remarks = allRemarks.filter(r => r.student_id === studentId || r.studentId === studentId);
    }

    if (!remarks || remarks.length === 0) {
        container.innerHTML = `<div style="font-size:12.5px; color:var(--text-muted); background:#f8fafc; padding:12px; border-radius:8px; border:1px dashed var(--border);">No teacher remarks or behavioral notes recorded for this student yet.</div>`;
        return;
    }

    container.innerHTML = `
        <div style="display:flex; flex-direction:column; gap:10px;">
            ${remarks.map(r => {
                const isPending = (r.status || 'inReview') === 'inReview';
                return `
                <div style="background:#f8fafc; border:1px solid var(--border); border-radius:10px; padding:12px 14px;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px; flex-wrap:wrap; gap:6px;">
                        <div style="display:flex; align-items:center; gap:6px;">
                            <span class="badge badge-purple" style="font-size:11px;">${r.category || 'General Observation'}</span>
                            ${isPending 
                                ? `<span class="badge badge-warning" style="font-size:11px;">🟡 In Review</span>`
                                : `<span class="badge badge-success" style="font-size:11px;">🟢 Resolved</span>`}
                        </div>
                        <span style="font-size:11px; color:var(--text-muted);">${r.created_at ? new Date(r.created_at).toLocaleDateString() : 'Recent'}</span>
                    </div>
                    <div style="font-size:13.5px; color:var(--text); line-height:1.45;">${r.remark}</div>
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-top:8px; flex-wrap:wrap; gap:8px;">
                        <div style="font-size:11px; color:var(--text-muted); font-style:italic;">
                            — Raised by ${r.staff_name || 'Faculty Member'}
                            ${r.resolved_at ? ` • <span style="color:var(--success); font-weight:600;">Resolved on ${new Date(r.resolved_at).toLocaleDateString()}</span>` : ''}
                        </div>
                        ${isPending ? `
                            <button class="btn btn-sm btn-success" onclick="resolveStudentRemarkAction('${r.id}', '${studentId}')" style="font-size:11px; padding:3px 10px; display:inline-flex; align-items:center; gap:4px;">
                                ✓ Mark Resolved
                            </button>
                        ` : ''}
                    </div>
                </div>
            `;}).join('')}
        </div>
    `;
}

async function resolveStudentRemarkAction(remarkId, studentId) {
    if (typeof DBService !== 'undefined' && typeof DBService.resolveStudentRemark === 'function') {
        await DBService.resolveStudentRemark(remarkId);
    } else {
        const allRemarks = JSON.parse(localStorage.getItem('ec_student_remarks') || '[]');
        const idx = allRemarks.findIndex(r => r.id === remarkId);
        if (idx >= 0) {
            allRemarks[idx].status = 'resolved';
            allRemarks[idx].resolved_at = new Date().toISOString();
            localStorage.setItem('ec_student_remarks', JSON.stringify(allRemarks));
        }
    }

    showToast('Teacher remark marked as Resolved & cleared from Faculty Portal!', 'success');
    loadStudentRemarksInAdminModal(studentId);
}

// Student Form Actions
function openAddStudentModal() {
    editingStudentId = null;
    document.getElementById('studentModalTitle').textContent = 'Add New Student';
    ['f-sname', 'f-semail', 'f-sclass', 'f-sparent', 'f-sphone', 'f-spin', 'f-sfee', 'f-sscholarship', 'f-sdoa', 'f-sschool'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = id === 'f-spin' ? '123456' : '';
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
    if (document.getElementById('f-semail')) document.getElementById('f-semail').value = s.email || '';
    document.getElementById('f-sclass').value = s.cls;
    document.getElementById('f-sparent').value = s.parent;
    document.getElementById('f-sphone').value = s.phone;
    if (document.getElementById('f-spin')) document.getElementById('f-spin').value = s.pin || '123456';
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
    const email = (document.getElementById('f-semail')?.value || '').trim();
    const cls = document.getElementById('f-sclass').value;
    const parent = document.getElementById('f-sparent').value.trim();
    const phone = document.getElementById('f-sphone').value.trim();
    const pin = (document.getElementById('f-spin')?.value || '123456').trim();
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
            name, email, cls, parent, phone, pin, fee,
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
            name, email, cls, parent, phone, pin, fee,
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

// =====================================================================
// ADMISSION APPROVAL WORKFLOW (STUDENTS ONLY)
// =====================================================================
let cachedPendingRegistrations = [];

async function updatePendingAdmissionsBadge() {
    const badgeEl = document.getElementById('pending-admissions-badge');
    if (!badgeEl) return;

    try {
        let pending = [];
        if (typeof DBService !== 'undefined') {
            pending = await DBService.fetchPendingRegistrations();
        } else {
            const list = JSON.parse(localStorage.getItem('ec_student_registrations') || '[]');
            pending = list.filter(r => r.status === 'pending_approval');
        }

        const count = pending.length;
        if (count > 0) {
            badgeEl.textContent = count;
            badgeEl.style.display = 'inline-block';
        } else {
            badgeEl.style.display = 'none';
        }

        const countText = document.getElementById('admissions-count-text');
        if (countText) {
            countText.textContent = `${count} Pending Application${count === 1 ? '' : 's'}`;
        }
    } catch (e) {
        console.warn('Error updating pending admissions badge:', e);
    }
}

async function renderPendingRegistrations() {
    const tbody = document.getElementById('admissions-tbody');
    if (!tbody) return;

    tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; padding:24px; color:var(--text-muted);">Loading admission applications...</td></tr>`;

    try {
        if (typeof DBService !== 'undefined') {
            cachedPendingRegistrations = await DBService.fetchPendingRegistrations();
        } else {
            const list = JSON.parse(localStorage.getItem('ec_student_registrations') || '[]');
            cachedPendingRegistrations = list.filter(r => r.status === 'pending_approval');
        }
    } catch (e) {
        console.error('Error fetching registrations:', e);
        cachedPendingRegistrations = [];
    }

    const search = (document.getElementById('admission-search')?.value || '').toLowerCase();
    const filtered = cachedPendingRegistrations.filter(r => {
        if (!search) return true;
        const name = (r.name || '').toLowerCase();
        const phone = (r.phone || '').toLowerCase();
        const cls = (r.cls || '').toLowerCase();
        const parent = (r.parent_name || '').toLowerCase();
        const school = (r.school_name || '').toLowerCase();
        return name.includes(search) || phone.includes(search) || cls.includes(search) || parent.includes(search) || school.includes(search);
    });

    await updatePendingAdmissionsBadge();

    if (filtered.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="8">
                    <div class="empty-state" style="padding:32px;">
                        <svg width="40" height="40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke-width="1.5"/>
                        </svg>
                        <p style="margin-top:8px; font-weight:700; color:var(--text);">No Pending Student Applications</p>
                        <span style="font-size:12px; color:var(--text-muted);">Prospective students who apply on the public homepage will appear here for verification.</span>
                    </div>
                </td>
            </tr>`;
        return;
    }

    tbody.innerHTML = filtered.map(r => {
        const initials = getInitials(r.name);
        const dateStr = r.created_at ? new Date(r.created_at).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) : 'Recent';

        return `
            <tr>
                <td>
                    <div style="display:flex; align-items:center; gap:12px;">
                        <div class="avatar" style="background:#2563eb;">${initials}</div>
                        <div>
                            <div style="font-weight:700; color:var(--text);">${r.name}</div>
                            <div style="font-size:11.5px; color:var(--text-muted);">PIN: ${r.pin || '123456'}</div>
                        </div>
                    </div>
                </td>
                <td><span class="badge badge-primary">${r.cls}</span></td>
                <td>
                    <div>${r.parent_name || '—'}</div>
                    <a href="https://wa.me/91${r.phone}" target="_blank" style="font-size:11.5px; color:#25D366; text-decoration:none; font-weight:600; display:inline-flex; align-items:center; gap:3px;">
                        <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654z"/></svg>
                        ${r.phone}
                    </a>
                </td>
                <td style="font-size:12.5px; color:var(--text);">${r.course_interest || 'General Admission'}</td>
                <td style="font-size:12px; color:var(--text-muted);">${r.school_name || '—'}</td>
                <td style="font-size:12px; color:var(--text-muted);">${dateStr}</td>
                <td><span class="badge badge-warning">🟡 Pending Approval</span></td>
                <td>
                    <div class="action-group">
                        <button class="btn btn-sm btn-success" onclick="openApproveAdmissionModal('${r.id}')" title="Approve Student Admission" style="padding:4px 10px; font-size:11.5px; display:inline-flex; align-items:center; gap:4px;">
                            ✓ Approve
                        </button>
                        <button class="icon-btn danger" onclick="rejectAdmissionAction('${r.id}')" title="Reject Application">
                            <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" stroke-width="2"/></svg>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

function openApproveAdmissionModal(regId) {
    const reg = cachedPendingRegistrations.find(r => r.id === regId);
    if (!reg) return;

    document.getElementById('appr-reg-id').value = reg.id;
    document.getElementById('appr-student-name').textContent = reg.name;
    document.getElementById('appr-student-phone').textContent = reg.phone;
    document.getElementById('appr-student-class').textContent = reg.cls;
    document.getElementById('appr-student-meta').textContent = `Parent: ${reg.parent_name || 'Guardian'} ${reg.parent_phone ? '(' + reg.parent_phone + ')' : ''} • School: ${reg.school_name || 'Not Provided'}`;

    // Populate class options
    const classSelect = document.getElementById('appr-f-class');
    if (classSelect) {
        classSelect.innerHTML = CLASS_OPTIONS.map(c => 
            `<option value="${c}" ${c === reg.cls ? 'selected' : ''}>${c}</option>`
        ).join('');
    }

    // Smart default fee based on class
    let defaultFee = 2500;
    if (reg.cls === 'Class 10') defaultFee = 2500;
    else if (reg.cls === 'Class 9') defaultFee = 2200;
    else if (['Class 6', 'Class 7', 'Class 8'].includes(reg.cls)) defaultFee = 1800;
    else defaultFee = 1500;

    document.getElementById('appr-f-fee').value = defaultFee;
    document.getElementById('appr-f-due').value = '10';
    document.getElementById('appr-f-scholarship').value = '0';
    document.getElementById('appr-f-subjects').value = reg.course_interest || 'Mathematics, Science, English';

    openModal('approveAdmissionModal');
}

async function confirmApproveAdmission() {
    const regId = document.getElementById('appr-reg-id').value;
    const reg = cachedPendingRegistrations.find(r => r.id === regId);
    if (!reg) return;

    const assignedCls = document.getElementById('appr-f-class').value;
    const fee = parseFloat(document.getElementById('appr-f-fee').value);
    const due = parseInt(document.getElementById('appr-f-due').value, 10);
    const scholarshipPct = parseFloat(document.getElementById('appr-f-scholarship').value) || 0;
    const subjects = document.getElementById('appr-f-subjects').value.trim();

    if (isNaN(fee)) {
        showToast('Please enter a valid monthly fee.', 'danger');
        return;
    }

    const payload = {
        name: reg.name,
        email: reg.email,
        cls: assignedCls,
        parent: reg.parent_name,
        phone: reg.phone,
        pin: reg.pin,
        fee: fee,
        due: due,
        scholarshipPct: scholarshipPct,
        subjects: subjects || 'General Academics',
        school: reg.school_name,
        approved_by: localStorage.getItem('ec_admin_name') || 'Admin'
    };

    try {
        let res;
        if (typeof DBService !== 'undefined') {
            res = await DBService.approveStudentRegistration(regId, payload);
        } else {
            res = { success: true, student: payload };
        }

        if (res && res.success) {
            // Also push to local students state if not present
            if (!students.some(s => s.phone === reg.phone)) {
                students.push(res.student || payload);
                saveState();
            }

            closeModal('approveAdmissionModal');
            showToast(`Admission Approved! ${reg.name} is now an active student.`, 'success');
            await renderPendingRegistrations();
            renderStudentsTable();
            renderDashboard();
        } else {
            showToast('Failed to approve registration.', 'danger');
        }
    } catch (e) {
        console.error('Approve admission error:', e);
        showToast('Error approving student admission.', 'danger');
    }
}

async function rejectAdmissionAction(regId) {
    const reg = cachedPendingRegistrations.find(r => r.id === regId);
    if (!reg) return;

    const reason = prompt(`Enter rejection reason for ${reg.name}'s application:`, 'Batch capacity full for current session');
    if (reason === null) return;

    try {
        if (typeof DBService !== 'undefined') {
            await DBService.rejectStudentRegistration(regId, reason);
        } else {
            const list = JSON.parse(localStorage.getItem('ec_student_registrations') || '[]');
            const idx = list.findIndex(r => r.id === regId);
            if (idx >= 0) {
                list[idx].status = 'rejected';
                list[idx].rejection_reason = reason;
                localStorage.setItem('ec_student_registrations', JSON.stringify(list));
            }
        }

        showToast(`Application for ${reg.name} marked as rejected.`, 'info');
        await renderPendingRegistrations();
        renderDashboard();
    } catch (e) {
        console.error('Reject admission error:', e);
        showToast('Error rejecting admission application.', 'danger');
    }
}
