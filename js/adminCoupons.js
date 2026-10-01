/**
 * adminCoupons.js
 * ============================================================
 * Elite Classes ERP — Admin Coupon Code Manager Controller
 * Handles: Load, List, Create, Toggle Active, Delete coupons
 * Uses DBService (supabase/api.js) as the single point of truth.
 * ============================================================
 */

// -------------------------------------------------------
// STATE
// -------------------------------------------------------
let _adminCoupons = [];

// -------------------------------------------------------
// OPEN / CLOSE
// -------------------------------------------------------
async function openCouponManagerModal() {
    resetCouponForm();
    openModal('couponManagerModal');
    await loadAndRenderCoupons();
}

// -------------------------------------------------------
// LOAD & RENDER LIST
// -------------------------------------------------------
async function loadAndRenderCoupons() {
    const tbody = document.getElementById('coupon-manager-tbody');
    const countEl = document.getElementById('coupon-manager-count');
    if (!tbody) return;

    tbody.innerHTML = '<tr><td colspan="7" style="text-align:center; padding:24px; color:#94a3b8; font-size:13px;">\u23f3 Loading coupons\u2026</td></tr>';

    try {
        const coupons = await DBService.getCoupons();
        _adminCoupons = Array.isArray(coupons) ? coupons : [];
    } catch (e) {
        _adminCoupons = [];
        console.warn('[adminCoupons] loadAndRenderCoupons error:', e);
    }

    if (countEl) countEl.textContent = _adminCoupons.length + ' coupon' + (_adminCoupons.length !== 1 ? 's' : '');

    if (_adminCoupons.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" style="text-align:center; padding:32px; color:#94a3b8; font-size:13.5px; font-weight:600;">No coupons found. Create one below.</td></tr>';
        return;
    }

    tbody.innerHTML = _adminCoupons.map(function(c) { return _renderCouponRow(c); }).join('');
}

function _renderCouponRow(c) {
    var isActive = c.is_active !== false;
    var discountLabel = _discountLabel(c);
    var validityLabel = c.validity_days === 365 ? '1 Year' : c.validity_days === 730 ? '2 Years' : c.validity_days === 1095 ? '3 Years' : c.validity_days === 180 ? '6 Months' : c.validity_days === 30 ? '30 Days' : (c.validity_days + ' Days');
    var classesLabel = (!c.allowed_classes || (Array.isArray(c.allowed_classes) && c.allowed_classes.length === 0)) ? 'All Classes' : (Array.isArray(c.allowed_classes) ? c.allowed_classes.join(', ') : String(c.allowed_classes));
    var safeCode = _esc(c.code);

    return '<tr id="coupon-row-' + safeCode + '" style="transition:opacity 0.2s;">' +
        '<td style="font-weight:800; font-size:13px; letter-spacing:1px; color:#1e293b; font-family:monospace;">' + safeCode + '</td>' +
        '<td style="font-size:12px; color:#475569; max-width:180px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;" title="' + _esc(c.description) + '">' + _esc(c.description) + '</td>' +
        '<td style="text-align:center;">' + discountLabel + '</td>' +
        '<td style="text-align:center; font-size:12px; color:#475569; font-weight:600;">' + validityLabel + '</td>' +
        '<td style="text-align:center; font-size:11px; color:#64748b;" title="' + classesLabel + '">' + classesLabel + '</td>' +
        '<td style="text-align:center;"><button onclick="toggleCouponActive(\'' + safeCode + '\',' + (!isActive) + ')" style="padding:4px 14px; border-radius:20px; border:none; cursor:pointer; font-size:11px; font-weight:700; background:' + (isActive ? '#dcfce7' : '#fee2e2') + '; color:' + (isActive ? '#15803d' : '#dc2626') + ';">' + (isActive ? '\u25cf Active' : '\u25cb Inactive') + '</button></td>' +
        '<td style="text-align:center; padding:8px 4px;"><div style="display:flex; gap:6px; justify-content:center;">' +
        '<button onclick="prefillCouponForm(\'' + safeCode + '\')" style="padding:4px 10px; background:#eff6ff; border:1px solid #bfdbfe; border-radius:6px; color:#1d4ed8; font-size:11px; font-weight:700; cursor:pointer;">\u270f\ufe0f Edit</button>' +
        '<button onclick="deleteCoupon(\'' + safeCode + '\')" style="padding:4px 10px; background:#fef2f2; border:1px solid #fecaca; border-radius:6px; color:#dc2626; font-size:11px; font-weight:700; cursor:pointer;">\uD83D\uDDD1\uFE0F</button>' +
        '</div></td></tr>';
}

function _discountLabel(c) {
    if (c.discount_type === 'free_pass') {
        return '<span style="background:#dcfce7; color:#15803d; padding:2px 10px; border-radius:20px; font-size:11px; font-weight:700;">\uD83C\uDF81 Free Pass</span>';
    } else if (c.discount_type === 'fixed_price') {
        var price = (c.fixed_price !== null && c.fixed_price !== undefined) ? '\u20b9' + Math.round(c.fixed_price) : '\u2014';
        return '<span style="background:#eff6ff; color:#1d4ed8; padding:2px 10px; border-radius:20px; font-size:11px; font-weight:700;">Flat ' + price + '</span>';
    } else if (c.discount_type === 'percentage') {
        return '<span style="background:#fef9c3; color:#854d0e; padding:2px 10px; border-radius:20px; font-size:11px; font-weight:700;">' + (c.discount_amount || 0) + '% Off</span>';
    } else if (c.discount_type === 'fixed_discount') {
        return '<span style="background:#fff7ed; color:#c2410c; padding:2px 10px; border-radius:20px; font-size:11px; font-weight:700;">\u20b9' + (c.discount_amount || 0) + ' Off</span>';
    }
    return '<span style="color:#94a3b8; font-size:11px;">' + (c.discount_type || '\u2014') + '</span>';
}

// -------------------------------------------------------
// TOGGLE ACTIVE STATUS
// -------------------------------------------------------
async function toggleCouponActive(code, newIsActive) {
    var existing = _adminCoupons.find(function(c) { return c.code === code; });
    if (!existing) return;
    var result = await DBService.saveCoupon(Object.assign({}, existing, { is_active: newIsActive }));
    if (result && result.success) {
        showToast('Coupon ' + code + ' ' + (newIsActive ? 'activated' : 'deactivated') + ' \u2713', 'success');
        await loadAndRenderCoupons();
    } else {
        showToast('Failed to update coupon status.', 'danger');
    }
}

// -------------------------------------------------------
// PREFILL FORM FOR EDIT
// -------------------------------------------------------
function prefillCouponForm(code) {
    var c = _adminCoupons.find(function(x) { return x.code === code; });
    if (!c) return;

    document.getElementById('coupon-form-code').value = c.code || '';
    document.getElementById('coupon-form-code').readOnly = true;
    document.getElementById('coupon-form-description').value = c.description || '';
    document.getElementById('coupon-form-type').value = c.discount_type || 'fixed_price';
    document.getElementById('coupon-form-fixed-price').value = (c.fixed_price !== null && c.fixed_price !== undefined) ? c.fixed_price : '';
    document.getElementById('coupon-form-discount-amount').value = (c.discount_amount !== null && c.discount_amount !== undefined) ? c.discount_amount : '';
    document.getElementById('coupon-form-validity').value = c.validity_days || 365;
    document.getElementById('coupon-form-classes').value = (Array.isArray(c.allowed_classes) && c.allowed_classes.length > 0) ? c.allowed_classes.join(', ') : '';
    document.getElementById('coupon-form-active').checked = c.is_active !== false;

    onCouponTypeChange();

    var formCard = document.getElementById('coupon-create-form');
    if (formCard) formCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    var saveBtn = document.getElementById('coupon-save-btn');
    if (saveBtn) saveBtn.textContent = '\uD83D\uDCBE Update Coupon: ' + code;
}

// -------------------------------------------------------
// CREATE / UPDATE COUPON
// -------------------------------------------------------
async function saveCouponFromForm() {
    var code = (document.getElementById('coupon-form-code').value || '').trim().toUpperCase();
    var description = (document.getElementById('coupon-form-description').value || '').trim();
    var discount_type = document.getElementById('coupon-form-type').value;
    var fixedPriceRaw = document.getElementById('coupon-form-fixed-price').value;
    var discountAmountRaw = document.getElementById('coupon-form-discount-amount').value;
    var validity_days = parseInt(document.getElementById('coupon-form-validity').value) || 365;
    var classesRaw = (document.getElementById('coupon-form-classes').value || '').trim();
    var is_active = document.getElementById('coupon-form-active').checked;
    var saveBtn = document.getElementById('coupon-save-btn');

    _showCouponAlert('', 'hide');

    if (!code) { _showCouponAlert('Coupon code is required.', 'error'); return; }
    if (!/^[A-Z0-9_-]{2,30}$/.test(code)) { _showCouponAlert('Code must be 2\u201330 chars: uppercase letters, digits, hyphens, or underscores only.', 'error'); return; }
    if (!description) { _showCouponAlert('Description is required.', 'error'); return; }
    if (!discount_type) { _showCouponAlert('Please select a discount type.', 'error'); return; }

    var fixed_price = null;
    var discount_amount = null;

    if (discount_type === 'fixed_price' || discount_type === 'free_pass') {
        fixed_price = (fixedPriceRaw !== '' && fixedPriceRaw !== null) ? parseFloat(fixedPriceRaw) : 0;
        if (isNaN(fixed_price) || fixed_price < 0) { _showCouponAlert('Please enter a valid price (\u2265 0).', 'error'); return; }
    } else if (discount_type === 'percentage') {
        discount_amount = parseFloat(discountAmountRaw);
        if (isNaN(discount_amount) || discount_amount <= 0 || discount_amount > 100) { _showCouponAlert('Percentage must be 1\u2013100.', 'error'); return; }
    } else if (discount_type === 'fixed_discount') {
        discount_amount = parseFloat(discountAmountRaw);
        if (isNaN(discount_amount) || discount_amount <= 0) { _showCouponAlert('Fixed discount amount must be > 0.', 'error'); return; }
    }

    var allowed_classes = null;
    if (classesRaw) {
        allowed_classes = classesRaw.split(',').map(function(s) { return s.trim(); }).filter(Boolean);
        if (allowed_classes.length === 0) allowed_classes = null;
    }

    var couponData = { code: code, description: description, discount_type: discount_type, fixed_price: fixed_price, discount_amount: discount_amount, validity_days: validity_days, allowed_classes: allowed_classes, is_active: is_active };

    if (saveBtn) { saveBtn.disabled = true; saveBtn.textContent = 'Saving\u2026'; }

    try {
        var result = await DBService.saveCoupon(couponData);
        if (result && result.success) {
            showToast('Coupon ' + code + ' saved successfully! \u2713', 'success');
            resetCouponForm();
            await loadAndRenderCoupons();
        } else {
            _showCouponAlert((result && result.message) || 'Failed to save coupon. Please try again.', 'error');
        }
    } catch (e) {
        console.error('[adminCoupons] saveCouponFromForm error:', e);
        _showCouponAlert('Unexpected error. Please try again.', 'error');
    } finally {
        if (saveBtn) { saveBtn.disabled = false; saveBtn.textContent = '\u2705 Save Coupon'; }
    }
}

// -------------------------------------------------------
// DELETE COUPON
// -------------------------------------------------------
async function deleteCoupon(code) {
    if (!confirm('Delete coupon "' + code + '"?\n\nThis cannot be undone.')) return;

    var deleted = false;
    if (typeof supabaseClient !== 'undefined' && supabaseClient) {
        try {
            var resp = await supabaseClient.from('coupons').delete().eq('code', code);
            if (!resp.error) deleted = true;
        } catch (e) {
            console.warn('[adminCoupons] Supabase delete error:', e);
        }
    }

    // Always clean from localStorage cache
    try {
        var local = JSON.parse(localStorage.getItem('ec_coupons') || '[]');
        localStorage.setItem('ec_coupons', JSON.stringify(local.filter(function(c) { return c.code !== code; })));
        if (!deleted) deleted = true;
    } catch (e) {}

    if (deleted) {
        showToast('Coupon ' + code + ' deleted. \u2713', 'success');
        await loadAndRenderCoupons();
    } else {
        showToast('Failed to delete coupon.', 'danger');
    }
}

// -------------------------------------------------------
// FORM HELPERS
// -------------------------------------------------------
function resetCouponForm() {
    var form = document.getElementById('coupon-form-inner');
    if (form) form.reset();
    var codeInput = document.getElementById('coupon-form-code');
    if (codeInput) codeInput.readOnly = false;
    _showCouponAlert('', 'hide');
    var saveBtn = document.getElementById('coupon-save-btn');
    if (saveBtn) saveBtn.textContent = '\u2705 Save Coupon';
    onCouponTypeChange();
}

function onCouponTypeChange() {
    var type = (document.getElementById('coupon-form-type') || {}).value || '';
    var fixedPriceGroup = document.getElementById('coupon-field-fixed-price');
    var discountAmtGroup = document.getElementById('coupon-field-discount-amount');
    var fpLabel = document.getElementById('coupon-field-fp-label');

    if (fixedPriceGroup) fixedPriceGroup.style.display = 'none';
    if (discountAmtGroup) discountAmtGroup.style.display = 'none';

    if (type === 'fixed_price') {
        if (fixedPriceGroup) fixedPriceGroup.style.display = '';
        if (fpLabel) fpLabel.textContent = 'Fixed Price (\u20b9) *';
    } else if (type === 'free_pass') {
        if (fixedPriceGroup) fixedPriceGroup.style.display = '';
        if (fpLabel) fpLabel.textContent = 'Final Price (\u20b9) \u2014 set 0 for completely free';
    } else if (type === 'percentage') {
        if (discountAmtGroup) discountAmtGroup.style.display = '';
    } else if (type === 'fixed_discount') {
        if (discountAmtGroup) discountAmtGroup.style.display = '';
    }
}

function _showCouponAlert(msg, type) {
    var alertEl = document.getElementById('coupon-form-alert');
    if (!alertEl) return;
    if (type === 'hide' || !msg) { alertEl.style.display = 'none'; return; }
    alertEl.style.display = 'block';
    alertEl.style.background = type === 'error' ? '#fef2f2' : '#f0fdf4';
    alertEl.style.color = type === 'error' ? '#dc2626' : '#15803d';
    alertEl.style.border = '1px solid ' + (type === 'error' ? '#fecaca' : '#bbf7d0');
    alertEl.textContent = msg;
}

function _esc(str) {
    return String(str || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
