/* Elite Classes — Support Staff Profiles & Salaries */

let editingStaffId = null;

function renderStaffTable() {
    const search = (document.getElementById('staff-search')?.value || '').toLowerCase();
    const tbody = document.getElementById('staff-tbody');
    if (!tbody) return;

    const filtered = staff.filter(s => !search || s.name.toLowerCase().includes(search) || s.role.toLowerCase().includes(search));

    const countEl = document.getElementById('staff-count-badge');
    if (countEl) countEl.textContent = `(${filtered.length})`;

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6"><div class="empty-state"><p>No staff profiles found</p></div></td></tr>`;
        return;
    }

    tbody.innerHTML = filtered.map(s => {
        const initials = getInitials(s.name);
        const incentive = s.incentive || 0;
        const totalSalary = (s.salary || 0) + incentive;

        const curPayouts = salaryPayouts.filter(p => p.recipientId === s.id && isCurrentMonth(p.month));
        const paidSalary = curPayouts.reduce((a, p) => a + p.amount, 0);
        const isSalaryPaid = paidSalary >= totalSalary;
        const salaryBadge = isSalaryPaid ? '<span class="badge badge-success">Salary Paid</span>' : '<span class="badge badge-warning">Salary Dues</span>';

        return `<tr>
            <td>
                <div style="display:flex; align-items:center; gap:12px;">
                    <div class="avatar" style="background:${s.color || '#06b6d4'}">${initials}</div>
                    <div>
                        <div style="font-weight:700; color:var(--text);">${s.name}</div>
                        <div style="font-size:11.5px; color:var(--text-muted);">${s.phone}</div>
                    </div>
                </div>
            </td>
            <td><span class="badge badge-purple">${s.role}</span></td>
            <td>
                <div style="font-weight:700; color:var(--text);">₹${totalSalary.toLocaleString()} / mo</div>
                ${incentive > 0 ? `<div style="font-size:10.5px; color:var(--success); font-weight:600;">(Base ₹${s.salary.toLocaleString()} + ₹${incentive.toLocaleString()} Incentive)</div>` : ''}
            </td>
            <td>${salaryBadge}</td>
            <td>
                <div class="action-group">
                    <button class="btn btn-sm btn-success" onclick="openSalaryPayoutModal('${s.id}', 'staff')">
                        Pay Salary
                    </button>
                    <button class="icon-btn" onclick="editStaff('${s.id}')" title="Edit Staff">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke-width="2"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke-width="2"/></svg>
                    </button>
                    <button class="icon-btn danger" onclick="deleteStaff('${s.id}')" title="Delete">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6" stroke-width="2"/><path d="M19 6l-1 14H6L5 6" stroke-width="2"/><path d="M10 11v6M14 11v6" stroke-width="2"/><path d="M9 6V4h6v2" stroke-width="2"/></svg>
                    </button>
                </div>
            </td>
        </tr>`;
    }).join('');
}

function openAddStaffModal() {
    editingStaffId = null;
    document.getElementById('staffModalTitle').textContent = 'Add New Staff Member';
    ['f-stname', 'f-strole', 'f-stemail', 'f-stphone', 'f-stsalary', 'f-stincentive'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });
    openModal('addStaffModal');
}

function editStaff(id) {
    const s = staff.find(x => x.id === id);
    if (!s) return;
    editingStaffId = id;
    document.getElementById('staffModalTitle').textContent = 'Edit Staff Member';
    document.getElementById('f-stname').value = s.name;
    document.getElementById('f-strole').value = s.role;
    if (document.getElementById('f-stemail')) document.getElementById('f-stemail').value = s.email || '';
    document.getElementById('f-stphone').value = s.phone;
    document.getElementById('f-stsalary').value = s.salary;
    document.getElementById('f-stincentive').value = s.incentive || 0;
    openModal('addStaffModal');
}

function saveStaffForm() {
    const name = document.getElementById('f-stname').value.trim();
    const role = document.getElementById('f-strole').value.trim();
    const email = (document.getElementById('f-stemail')?.value || '').trim();
    const phone = document.getElementById('f-stphone').value.trim();
    const salary = parseFloat(document.getElementById('f-stsalary').value);
    const incentive = parseFloat(document.getElementById('f-stincentive')?.value) || 0;

    if (!name || !role || !phone || isNaN(salary)) {
        showToast('Fill all required fields (*)', 'danger');
        return;
    }

    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
        showToast('Please enter a valid 10-digit phone number', 'danger');
        return;
    }

    if (!editingStaffId) {
        const existing = staff.find(s => (s.phone || '').replace(/\D/g, '') === cleanPhone);
        if (existing) {
            showToast(`A staff member with WhatsApp ${cleanPhone} already exists (${existing.name})!`, 'danger');
            return;
        }
    } else {
        const duplicate = staff.find(s => s.id !== editingStaffId && (s.phone || '').replace(/\D/g, '') === cleanPhone);
        if (duplicate) {
            showToast(`Another staff member (${duplicate.name}) is already using WhatsApp ${cleanPhone}!`, 'danger');
            return;
        }
    }

    if (editingStaffId) {
        const idx = staff.findIndex(s => s.id === editingStaffId);
        staff[idx] = { ...staff[idx], name, role, email, phone, salary, incentive };
        if (typeof DBService !== 'undefined') DBService.upsertStaff(staff[idx]);
        showToast('Staff member updated');
    } else {
        const newStaff = {
            id: 'st_' + Date.now(),
            name, role, email, phone, salary, incentive,
            color: AVATAR_COLORS[Math.floor(Math.random() * AVATAR_COLORS.length)]
        };
        staff.push(newStaff);
        if (typeof DBService !== 'undefined') DBService.upsertStaff(newStaff);
        showToast('Staff member added');
    }

    saveState();
    closeModal('addStaffModal');
    renderStaffTable();
    renderDashboard();
}

function deleteStaff(id) {
    if (!confirm('Remove this staff profile?')) return;
    staff = staff.filter(s => s.id !== id);
    saveState();
    if (typeof DBService !== 'undefined') DBService.deleteStaff(id);
    renderStaffTable();
    renderDashboard();
    showToast('Staff member removed', 'danger');
}
