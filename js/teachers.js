/* Elite Classes — Teacher Profiles & Salary Module */

let editingTeacherId = null;

function renderTeachersTable() {
    const search = (document.getElementById('teacher-search')?.value || '').toLowerCase();
    const tbody = document.getElementById('teachers-tbody');
    if (!tbody) return;

    const filtered = teachers.filter(t => !search || t.name.toLowerCase().includes(search) || t.subjects.toLowerCase().includes(search));

    const countEl = document.getElementById('teacher-count-badge');
    if (countEl) countEl.textContent = `(${filtered.length})`;

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7"><div class="empty-state"><p>No teacher profiles found</p></div></td></tr>`;
        return;
    }

    tbody.innerHTML = filtered.map(t => {
        const initials = getInitials(t.name);
        const incentive = t.incentive || 0;
        const totalSalary = (t.salary || 0) + incentive;

        const curPayouts = salaryPayouts.filter(p => p.recipientId === t.id && isCurrentMonth(p.month));
        const paidSalary = curPayouts.reduce((a, p) => a + p.amount, 0);
        const isSalaryPaid = paidSalary >= totalSalary;
        const salaryBadge = isSalaryPaid ? '<span class="badge badge-success">Salary Paid</span>' : '<span class="badge badge-warning">Salary Dues</span>';

        return `<tr>
            <td>
                <div style="display:flex; align-items:center; gap:12px;">
                    <div class="avatar" style="background:${t.color || '#2563eb'}">${initials}</div>
                    <div>
                        <div style="font-weight:700; color:var(--text);">${t.name}</div>
                        <div style="font-size:11.5px; color:var(--text-muted);">${t.phone}</div>
                    </div>
                </div>
            </td>
            <td><span class="badge badge-purple">${t.subjects || 'General'}</span></td>
            <td><span class="badge badge-info">${t.classes || 'All'}</span></td>
            <td>
                <div style="font-weight:700; color:var(--text);">₹${totalSalary.toLocaleString()} / mo</div>
                ${incentive > 0 ? `<div style="font-size:10.5px; color:var(--success); font-weight:600;">(Base ₹${t.salary.toLocaleString()} + ₹${incentive.toLocaleString()} Incentive)</div>` : ''}
            </td>
            <td>${salaryBadge}</td>
            <td>
                <div class="action-group">
                    <button class="btn btn-sm btn-success" onclick="openSalaryPayoutModal('${t.id}', 'teacher')">
                        Pay Salary
                    </button>
                    <button class="icon-btn" onclick="editTeacher('${t.id}')" title="Edit Teacher">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke-width="2"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke-width="2"/></svg>
                    </button>
                    <button class="icon-btn danger" onclick="deleteTeacher('${t.id}')" title="Delete">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6" stroke-width="2"/><path d="M19 6l-1 14H6L5 6" stroke-width="2"/><path d="M10 11v6M14 11v6" stroke-width="2"/><path d="M9 6V4h6v2" stroke-width="2"/></svg>
                    </button>
                </div>
            </td>
        </tr>`;
    }).join('');
}

// Render Teacher Subject & Class Checklists
function renderTeacherChecklists(selectedSubjectsStr = '', selectedClassesStr = '') {
    const subContainer = document.getElementById('f-tsubjects-container');
    if (subContainer) {
        const selectedSubs = (selectedSubjectsStr || '').split(',').map(s => s.trim());
        const validSubjects = SUBJECT_OPTIONS.filter(s => s !== SUBJECT_ENUM.ALL_SUBJECTS);
        subContainer.innerHTML = validSubjects.map(sub => {
            const isChecked = selectedSubs.includes(sub) || selectedSubjectsStr.includes('All');
            return `<label class="checkbox-item"><input type="checkbox" value="${sub}" ${isChecked ? 'checked' : ''}><span>${sub}</span></label>`;
        }).join('');
    }

    const classContainer = document.getElementById('f-tclasses-container');
    if (classContainer) {
        const selectedClasses = (selectedClassesStr || '').split(',').map(c => c.trim());
        classContainer.innerHTML = CLASS_OPTIONS.map(cls => {
            const isChecked = selectedClasses.includes(cls) || selectedClassesStr.includes('All');
            return `<label class="checkbox-item"><input type="checkbox" value="${cls}" ${isChecked ? 'checked' : ''}><span>${cls}</span></label>`;
        }).join('');
    }
}

function openAddTeacherModal() {
    editingTeacherId = null;
    document.getElementById('teacherModalTitle').textContent = 'Add New Teacher';
    ['f-tname', 'f-temail', 'f-tphone', 'f-tsalary', 'f-tincentive'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });
    
    renderTeacherChecklists('', '');
    openModal('addTeacherModal');
}

function editTeacher(id) {
    const t = teachers.find(x => x.id === id);
    if (!t) return;

    editingTeacherId = id;
    document.getElementById('teacherModalTitle').textContent = 'Edit Teacher Profile';
    document.getElementById('f-tname').value = t.name;
    if (document.getElementById('f-temail')) document.getElementById('f-temail').value = t.email || '';
    document.getElementById('f-tphone').value = t.phone;
    document.getElementById('f-tsalary').value = t.salary;
    document.getElementById('f-tincentive').value = t.incentive || 0;

    renderTeacherChecklists(t.subjects || '', t.classes || '');

    openModal('addTeacherModal');
}

function saveTeacherForm() {
    const name = document.getElementById('f-tname').value.trim();
    const email = (document.getElementById('f-temail')?.value || '').trim();
    const phone = document.getElementById('f-tphone').value.trim();
    const salary = parseFloat(document.getElementById('f-tsalary').value);
    const incentive = parseFloat(document.getElementById('f-tincentive')?.value) || 0;

    // Read checked subjects & classes
    const checkedSubjects = Array.from(document.querySelectorAll('#f-tsubjects-container input[type="checkbox"]:checked')).map(cb => cb.value);
    const subjects = checkedSubjects.join(', ') || 'General Subjects';

    const checkedClasses = Array.from(document.querySelectorAll('#f-tclasses-container input[type="checkbox"]:checked')).map(cb => cb.value);
    const classes = checkedClasses.join(', ') || 'All Classes';

    if (!name || !phone || isNaN(salary)) {
        showToast('Fill all required fields (*)', 'danger');
        return;
    }

    if (editingTeacherId) {
        const idx = teachers.findIndex(t => t.id === editingTeacherId);
        teachers[idx] = { ...teachers[idx], name, email, subjects, classes, phone, salary, incentive };
        if (typeof DBService !== 'undefined') DBService.upsertTeacher(teachers[idx]);
        showToast('Teacher profile updated');
    } else {
        const newTeacher = {
            id: 't_' + Date.now(),
            name, email, subjects, classes, phone, salary, incentive,
            color: AVATAR_COLORS[Math.floor(Math.random() * AVATAR_COLORS.length)]
        };
        teachers.push(newTeacher);
        if (typeof DBService !== 'undefined') DBService.upsertTeacher(newTeacher);
        showToast('Teacher added successfully');
    }

    saveState();
    closeModal('addTeacherModal');
    renderTeachersTable();
    renderDashboard();
}

function deleteTeacher(id) {
    if (!confirm('Remove this teacher profile?')) return;
    teachers = teachers.filter(t => t.id !== id);
    saveState();
    if (typeof DBService !== 'undefined') DBService.deleteTeacher(id);
    renderTeachersTable();
    renderDashboard();
    showToast('Teacher profile removed', 'danger');
}
