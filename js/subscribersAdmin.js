/* =========================================================================
   ELITE CLASSES — TEST SERIES SUBSCRIBERS ADMIN CONTROLLER (subscribersAdmin.js)
   Isolated administration module for ₹499/yr CBT Pass Subscribers:
   - Live KPI Metrics (Total, Active, Pending Queue, Subscription Revenue)
   - Offline UTR Payment Verification Queue (1-Click Activate, WhatsApp, Reject)
   - Candidate Directory with Search & Status/Class Filters
   - 1-Click "Convert to Regular Coaching Student" Promotion Flow
   - Pass Validity Extension & Renewal (+1 Year)
   ========================================================================= */

let cachedSubscribersList = [];
let selectedSubscriberForConversion = null;

// Initialize & Render Subscribers View in Admin Portal
async function renderSubscribersAdminView() {
    try {
        const subscribers = await DBService.fetchSubscribersList('all');
        cachedSubscribersList = subscribers || [];

        // 1. Update KPI Tiles
        updateSubscribersKPIs(cachedSubscribersList);

        // 2. Render Pending Verification Queue
        renderPendingVerificationQueue(cachedSubscribersList);

        // 3. Render Subscribers Directory Table
        renderSubscribersDirectoryTable(cachedSubscribersList);

    } catch (err) {
        console.error('[subscribersAdmin] Render view error:', err);
        showToast('Failed to load test series subscribers.', 'danger');
    }
}

// 1. Update Live KPI Metric Pallets
function updateSubscribersKPIs(subscribers) {
    const totalCount = subscribers.length;
    const activeCount = subscribers.filter(s => s.status === 'active').length;
    const pendingCount = subscribers.filter(s => s.status === 'pending_verification').length;
    const convertedCount = subscribers.filter(s => s.status === 'converted_to_student').length;

    // Revenue from active passes + converted
    const totalRevenue = (activeCount + convertedCount) * 499;

    const totalEl = document.getElementById('sub-kpi-total');
    const activeEl = document.getElementById('sub-kpi-active');
    const pendingEl = document.getElementById('sub-kpi-pending');
    const revenueEl = document.getElementById('sub-kpi-revenue');
    const dashStatEl = document.getElementById('dash-stat-subscribers');

    if (totalEl) totalEl.textContent = totalCount;
    if (activeEl) activeEl.textContent = activeCount;
    if (pendingEl) {
        pendingEl.textContent = pendingCount;
        pendingEl.style.color = pendingCount > 0 ? '#d97706' : '#10b981';
    }
    if (revenueEl) revenueEl.textContent = `₹${totalRevenue.toLocaleString('en-IN')}`;
    if (dashStatEl) dashStatEl.textContent = `${activeCount} Active`;

    // Also update alert badge in pending queue header if present
    const badgeEl = document.getElementById('sub-pending-badge');
    if (badgeEl) {
        badgeEl.textContent = pendingCount;
        badgeEl.style.display = pendingCount > 0 ? 'inline-block' : 'none';
    }
}

// 2. Render Offline UTR Payment Verification Queue
function renderPendingVerificationQueue(subscribers) {
    const container = document.getElementById('sub-pending-queue-tbody');
    if (!container) return;

    const pendingList = subscribers.filter(s => s.status === 'pending_verification');

    if (pendingList.length === 0) {
        container.innerHTML = `
            <tr>
                <td colspan="6" style="text-align:center; padding:32px; color:#10b981; font-weight:600;">
                    ✓ All offline payments verified. No pending subscriber registrations in queue.
                </td>
            </tr>
        `;
        return;
    }

    container.innerHTML = pendingList.map(sub => {
        const timeStr = sub.created_at ? new Date(sub.created_at).toLocaleString('en-US', {
            month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
        }) : 'Recently';

        const safeName = (sub.name || 'Candidate').replace(/'/g, "\\'");
        const cleanPhone = (sub.phone || '').replace(/\D/g, '');

        // Pre-filled WhatsApp verify text
        const waMsg = encodeURIComponent(`Hello ${sub.name}, this is Elite Classes administration regarding your ₹499 Test Series Pass registration (Code: ${sub.tracking_code || 'N/A'}, UTR: ${sub.payment_ref || 'N/A'}). We are reviewing your payment reference.`);
        const waUrl = `https://wa.me/91${cleanPhone}?text=${waMsg}`;

        return `
            <tr style="background:#fffbeb;">
                <td>
                    <div style="font-weight:700; color:#0f172a;">${sub.name}</div>
                    <div style="font-size:11.5px; color:#64748b;">WhatsApp: ${sub.phone}</div>
                </td>
                <td>
                    <span class="badge" style="background:#e0e7ff; color:#3730a3; font-weight:700;">${sub.cls || 'Class 10'}</span>
                </td>
                <td>
                    <span style="font-family:monospace; font-weight:800; color:#1e40af; background:#eff6ff; padding:2px 8px; border-radius:4px; border:1px solid #bfdbfe;">
                        ${sub.tracking_code || 'EC-TS-REG'}
                    </span>
                </td>
                <td>
                    <div style="font-family:monospace; font-weight:700; color:#0f172a; font-size:13px;">
                        ${sub.payment_ref || '<span style="color:#ef4444;">No UTR submitted</span>'}
                    </div>
                    <div style="font-size:11px; color:#94a3b8;">${timeStr}</div>
                </td>
                <td>
                    <span class="badge" style="background:#fef3c7; color:#92400e; font-weight:700; padding:4px 8px;">
                        🟡 Awaiting UTR Verification
                    </span>
                </td>
                <td style="text-align:right;">
                    <div style="display:inline-flex; gap:6px; align-items:center;">
                        <button type="button" class="btn btn-sm btn-primary" onclick="confirmActivateSubscriberPass('${sub.id}', '${safeName}')" style="background:#10b981; border:none; padding:6px 12px; font-weight:700; font-size:12px;" title="Verify UTR and Activate Pass">
                            ✓ Activate 1-Yr Pass
                        </button>
                        <a href="${waUrl}" target="_blank" class="btn btn-sm" style="background:#25d366; color:#ffffff; text-decoration:none; padding:6px 10px; font-weight:700; font-size:12px; border-radius:6px;" title="Chat with candidate on WhatsApp">
                            💬 WhatsApp
                        </a>
                        <button type="button" class="btn btn-sm btn-outline" onclick="confirmRejectSubscriber('${sub.id}', '${safeName}')" style="border-color:#fca5a5; color:#dc2626; padding:6px 10px; font-size:12px;" title="Reject invalid registration">
                            ✕
                        </button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

// 3. Render Subscribers Directory Table
function renderSubscribersDirectoryTable(subscribers) {
    const tbody = document.getElementById('sub-directory-tbody');
    if (!tbody) return;

    const statusFilter = document.getElementById('sub-filter-status')?.value || 'all';
    const classFilter = document.getElementById('sub-filter-class')?.value || 'all';
    const searchQuery = (document.getElementById('sub-search-input')?.value || '').toLowerCase().trim();

    let list = [...subscribers];

    // Filter by status
    if (statusFilter !== 'all') {
        list = list.filter(s => s.status === statusFilter);
    }

    // Filter by class
    if (classFilter !== 'all') {
        list = list.filter(s => s.cls === classFilter);
    }

    // Filter by search query
    if (searchQuery) {
        list = list.filter(s => 
            (s.name || '').toLowerCase().includes(searchQuery) ||
            (s.phone || '').includes(searchQuery) ||
            (s.tracking_code || '').toLowerCase().includes(searchQuery) ||
            (s.payment_ref || '').toLowerCase().includes(searchQuery)
        );
    }

    if (list.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="7" style="text-align:center; padding:32px; color:#94a3b8;">
                    No subscribers found matching the current search filters.
                </td>
            </tr>
        `;
        return;
    }

    tbody.innerHTML = list.map(sub => {
        const cleanPhone = (sub.phone || '').replace(/\D/g, '');
        const safeName = (sub.name || 'Candidate').replace(/'/g, "\\'");

        // Status Badge
        let statusBadge = '';
        if (sub.status === 'active') {
            statusBadge = '<span class="badge" style="background:#dcfce7; color:#15803d; font-weight:700;">🟢 Active Pass</span>';
        } else if (sub.status === 'pending_verification') {
            statusBadge = '<span class="badge" style="background:#fef3c7; color:#92400e; font-weight:700;">🟡 Pending</span>';
        } else if (sub.status === 'converted_to_student') {
            statusBadge = '<span class="badge" style="background:#e0e7ff; color:#3730a3; font-weight:700;">🎓 Regular Student</span>';
        } else if (sub.status === 'suspended') {
            statusBadge = '<span class="badge" style="background:#fee2e2; color:#991b1b; font-weight:700;">🔴 Suspended</span>';
        } else {
            statusBadge = `<span class="badge badge-outline">${sub.status}</span>`;
        }

        const validUntilStr = sub.valid_until ? sub.valid_until : (sub.status === 'active' ? '365 Days Active' : '—');
        const waMsg = encodeURIComponent(`Hello ${sub.name}, this is Elite Classes administration.`);
        const waUrl = `https://wa.me/91${cleanPhone}?text=${waMsg}`;

        return `
            <tr>
                <td>
                    <div style="font-weight:700; color:#0f172a;">${sub.name}</div>
                    <div style="font-size:11px; color:#64748b;">Code: <strong style="font-family:monospace; color:#2563eb;">${sub.tracking_code || '—'}</strong></div>
                </td>
                <td>
                    <span class="badge" style="background:#f1f5f9; color:#334155; font-weight:700;">${sub.cls || 'Class 10'}</span>
                </td>
                <td>
                    <div style="font-weight:600; color:#0f172a;">${sub.phone}</div>
                    <div style="font-size:11px; font-family:monospace; color:#64748b;">UTR: ${sub.payment_ref || '—'}</div>
                </td>
                <td style="font-size:12.5px; color:#334155; font-weight:600;">
                    ${validUntilStr}
                </td>
                <td>
                    ${statusBadge}
                </td>
                <td style="font-size:12px; font-weight:700; color:#059669;">
                    ₹${parseFloat(sub.plan_amount || 499).toFixed(2)}
                </td>
                <td style="text-align:right;">
                    <div style="display:inline-flex; gap:6px; align-items:center;">
                        ${sub.status !== 'converted_to_student' ? `
                            <button type="button" class="btn btn-sm" onclick="openConvertSubscriberModal('${sub.id}')" style="background:linear-gradient(135deg, #2563eb, #1d4ed8); color:#ffffff; font-weight:700; font-size:11.5px; padding:5px 10px; border-radius:6px; border:none;" title="Promote candidate to official coaching student">
                                🎓 Convert to Student
                            </button>
                        ` : `
                            <span style="font-size:11.5px; color:#3730a3; font-weight:700; margin-right:4px;">Enrolled</span>
                        `}
                        
                        <button type="button" class="btn btn-sm btn-outline" onclick="renewSubscriberPass('${sub.id}', '${safeName}')" style="font-size:11.5px; padding:5px 8px; font-weight:700;" title="Add 1 Year to Pass Validity">
                            🔄 +1 Yr
                        </button>

                        <a href="${waUrl}" target="_blank" class="btn btn-sm btn-outline" style="padding:5px 8px; font-size:11.5px; text-decoration:none;" title="Open WhatsApp chat">
                            💬
                        </a>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

// Filter triggers
function filterSubscribers() {
    renderSubscribersDirectoryTable(cachedSubscribersList);
}

// 4. Verification Action: Activate Pass
async function confirmActivateSubscriberPass(subId, subName) {
    if (!confirm(`Are you sure you want to verify offline payment and activate the 1-Year Annual Pass for ${subName}?`)) {
        return;
    }

    try {
        const adminName = localStorage.getItem('ec_admin_name') || 'Admin';
        const res = await DBService.activateSubscriberPass(subId, adminName);

        if (res && res.success) {
            showToast(`Pass activated for ${subName}! Candidate can now log in.`, 'success');
            await renderSubscribersAdminView();
        } else {
            showToast('Failed to activate pass. Please try again.', 'danger');
        }
    } catch (err) {
        console.error('Activate subscriber error:', err);
        showToast('Connection error while activating pass.', 'danger');
    }
}

// Verification Action: Reject Payment
async function confirmRejectSubscriber(subId, subName) {
    const reason = prompt(`Please enter rejection reason for ${subName} (e.g. Invalid UTR / Payment not received):`, 'Payment UTR could not be verified in institute account');
    if (reason === null) return;

    try {
        await DBService.deactivateSubscriberPass(subId, reason);
        showToast(`Registration rejected for ${subName}.`, 'success');
        await renderSubscribersAdminView();
    } catch (err) {
        console.error('Reject subscriber error:', err);
        showToast('Failed to update status.', 'danger');
    }
}

// Renew Pass (+1 Year)
async function renewSubscriberPass(subId, subName) {
    if (!confirm(`Extend Annual Test Series Pass for ${subName} by +365 days?`)) {
        return;
    }

    try {
        const res = await DBService.renewSubscriberPass(subId, 365);
        if (res && res.success) {
            showToast(`Pass extended until ${res.subscriber.valid_until}!`, 'success');
            await renderSubscribersAdminView();
        } else {
            showToast('Failed to extend pass.', 'danger');
        }
    } catch (err) {
        console.error('Renew pass error:', err);
        showToast('Connection error.', 'danger');
    }
}

// =========================================================================
// 5. 1-CLICK PROMOTION: CONVERT SUBSCRIBER TO REGULAR COACHING STUDENT
// =========================================================================
function openConvertSubscriberModal(subId) {
    const sub = cachedSubscribersList.find(s => s.id === subId);
    if (!sub) return;

    selectedSubscriberForConversion = sub;

    document.getElementById('conv-sub-id').value = sub.id;
    document.getElementById('conv-sub-name').value = sub.name || '';
    document.getElementById('conv-sub-phone').value = sub.phone || '';
    document.getElementById('conv-sub-class').value = sub.cls || 'Class 10';
    document.getElementById('conv-sub-parent').value = '';
    document.getElementById('conv-sub-fee').value = '2500';
    document.getElementById('conv-sub-due').value = '10';
    document.getElementById('conv-sub-scholarship').value = '0';
    document.getElementById('conv-sub-subjects').value = 'Science, Mathematics, English';
    document.getElementById('conv-sub-school').value = '';

    openModal('convertSubscriberModal');
}

async function confirmConvertSubscriber() {
    if (!selectedSubscriberForConversion) return;

    const subId = document.getElementById('conv-sub-id').value;
    const name = document.getElementById('conv-sub-name').value.trim();
    const phone = document.getElementById('conv-sub-phone').value.trim();
    const cls = document.getElementById('conv-sub-class').value;
    const parent = document.getElementById('conv-sub-parent').value.trim() || 'Parent/Guardian';
    const fee = parseFloat(document.getElementById('conv-sub-fee').value) || 2500;
    const due = parseInt(document.getElementById('conv-sub-due').value, 10) || 10;
    const scholarship = parseFloat(document.getElementById('conv-sub-scholarship').value) || 0;
    const subjects = document.getElementById('conv-sub-subjects').value.trim() || 'All Subjects';
    const school = document.getElementById('conv-sub-school').value.trim();

    if (!name || !phone) {
        alert('Please provide student name and phone number.');
        return;
    }

    const submitBtn = document.getElementById('conv-submit-btn');
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Converting to Student Profile...';
    }

    try {
        const studentPayload = {
            name,
            phone,
            cls,
            parent,
            fee,
            due,
            scholarshipPct: scholarship,
            subjects,
            school,
            doa: new Date().toISOString().split('T')[0]
        };

        const adminName = localStorage.getItem('ec_admin_name') || 'Admin';
        const res = await DBService.convertSubscriberToStudent(subId, studentPayload, adminName);

        if (res && res.success) {
            closeModal('convertSubscriberModal');
            showToast(`🎓 ${name} promoted to Regular Coaching Student successfully!`, 'success');

            // Refresh views
            await renderSubscribersAdminView();
            if (typeof renderStudentsTable === 'function') renderStudentsTable();
            if (typeof renderDashboard === 'function') renderDashboard();
        } else {
            showToast((res && res.message) || 'Failed to convert subscriber.', 'danger');
        }
    } catch (err) {
        console.error('Convert subscriber error:', err);
        showToast('Connection error during candidate conversion.', 'danger');
    } finally {
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Confirm & Promote to Student Profile →';
        }
    }
}
