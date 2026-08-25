/* Elit Classes — Admin Profiles Module */

let editingAdminId = null;

function renderAdminsTable() {
    const search = (document.getElementById('admin-search')?.value || '').toLowerCase();
    const tbody = document.getElementById('admins-tbody');
    if (!tbody) return;

    const filtered = admins.filter(a => !search || a.name.toLowerCase().includes(search) || a.email.toLowerCase().includes(search));

    const countEl = document.getElementById('admin-count-badge');
    if (countEl) countEl.textContent = `(${filtered.length})`;

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5"><div class="empty-state"><p>No admin accounts found</p></div></td></tr>`;
        return;
    }

    tbody.innerHTML = filtered.map(a => {
        const initials = getInitials(a.name);
        return `<tr>
            <td>
                <div style="display:flex; align-items:center; gap:12px;">
                    <div class="avatar" style="background:${a.color || '#2563eb'}">${initials}</div>
                    <div>
                        <div style="font-weight:700; color:var(--text);">${a.name}</div>
                        <div style="font-size:11.5px; color:var(--text-muted);">${a.email}</div>
                    </div>
                </div>
            </td>
            <td><span class="badge badge-primary">${a.role || 'Admin'}</span></td>
            <td>${a.phone || 'N/A'}</td>
            <td><span class="badge badge-success">Active</span></td>
            <td>
                <div class="action-group">
                    <button class="icon-btn" onclick="editAdmin('${a.id}')" title="Edit Admin">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke-width="2"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke-width="2"/></svg>
                    </button>
                    ${admins.length > 1 ? `<button class="icon-btn danger" onclick="deleteAdmin('${a.id}')" title="Delete"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6" stroke-width="2"/><path d="M19 6l-1 14H6L5 6" stroke-width="2"/><path d="M10 11v6M14 11v6" stroke-width="2"/><path d="M9 6V4h6v2" stroke-width="2"/></svg></button>` : ''}
                </div>
            </td>
        </tr>`;
    }).join('');
}

function openAddAdminModal() {
    editingAdminId = null;
    document.getElementById('adminModalTitle').textContent = 'Add Admin Account';
    ['f-aname', 'f-aemail', 'f-arole', 'f-aphone'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });
    openModal('addAdminModal');
}

function editAdmin(id) {
    const a = admins.find(x => x.id === id);
    if (!a) return;
    editingAdminId = id;
    document.getElementById('adminModalTitle').textContent = 'Edit Admin Account';
    document.getElementById('f-aname').value = a.name;
    document.getElementById('f-aemail').value = a.email;
    document.getElementById('f-arole').value = a.role;
    document.getElementById('f-aphone').value = a.phone || '';
    openModal('addAdminModal');
}

function saveAdminForm() {
    const name = document.getElementById('f-aname').value.trim();
    const email = document.getElementById('f-aemail').value.trim();
    const role = document.getElementById('f-arole').value;
    const phone = document.getElementById('f-aphone').value.trim();

    if (!name || !email) {
        showToast('Fill all required fields (*)', 'danger');
        return;
    }

    if (editingAdminId) {
        const idx = admins.findIndex(a => a.id === editingAdminId);
        admins[idx] = { ...admins[idx], name, email, role, phone };
        showToast('Admin account updated');
    } else {
        admins.push({
            id: 'a_' + Date.now(),
            name, email, role, phone,
            color: AVATAR_COLORS[Math.floor(Math.random() * AVATAR_COLORS.length)]
        });
        showToast('New Admin added');
    }

    saveState();
    closeModal('addAdminModal');
    renderAdminsTable();
}

function deleteAdmin(id) {
    if (admins.length <= 1) {
        showToast('Cannot delete the primary admin', 'danger');
        return;
    }
    if (!confirm('Delete this admin account?')) return;
    admins = admins.filter(a => a.id !== id);
    saveState();
    renderAdminsTable();
    showToast('Admin removed', 'danger');
}
