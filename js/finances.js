/* Elite Classes — Financial Management (Student Fees & Staff Salaries) */

let activeFinanceTab = 'fee-collections';

function switchFinanceTab(tab) {
    activeFinanceTab = tab;
    document.querySelectorAll('.finance-sub-tab').forEach(t => {
        t.classList.toggle('active', t.getAttribute('data-tab') === tab);
    });
    
    document.getElementById('finance-fee-sec').style.display = tab === 'fee-collections' ? 'block' : 'none';
    document.getElementById('finance-salary-sec').style.display = tab === 'salary-payouts' ? 'block' : 'none';

    renderFinancesView();
}

function renderFinancesView() {
    // 1. Calculate Statistics
    const curMonthPayments = payments.filter(p => isCurrentMonth(p.month));
    const totalFeesCollected = curMonthPayments.reduce((a, p) => a + p.amount, 0);

    const curMonthSalaries = salaryPayouts.filter(s => isCurrentMonth(s.month));
    const totalSalariesPaid = curMonthSalaries.reduce((a, s) => a + s.amount, 0);

    const netProfit = totalFeesCollected - totalSalariesPaid;

    const feeValEl = document.getElementById('fin-total-fees');
    const salValEl = document.getElementById('fin-total-salaries');
    const netValEl = document.getElementById('fin-net-profit');

    if (feeValEl) feeValEl.textContent = '₹' + totalFeesCollected.toLocaleString();
    if (salValEl) salValEl.textContent = '₹' + totalSalariesPaid.toLocaleString();
    if (netValEl) {
        netValEl.textContent = '₹' + netProfit.toLocaleString();
        netValEl.style.color = netProfit >= 0 ? 'var(--success)' : 'var(--danger)';
    }

    // 2. Render Fee Payments Table
    renderFeePaymentsTable();

    // 3. Render Salary Payouts Table
    renderSalaryPayoutsTable();
}

function renderFeePaymentsTable() {
    const tbody = document.getElementById('fee-payments-tbody');
    if (!tbody) return;

    const monthFilter = document.getElementById('fee-month-filter')?.value || '';
    const search = (document.getElementById('fee-search-input')?.value || '').toLowerCase();

    let filtered = payments.filter(p => {
        const matchMonth = !monthFilter || p.month === monthFilter;
        const student = students.find(s => s.id === p.studentId);
        const matchSearch = !search || (student && (student.name.toLowerCase().includes(search) || student.cls.toLowerCase().includes(search)));
        return matchMonth && matchSearch;
    }).sort((a, b) => b.id - a.id);

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7"><div class="empty-state"><p>No fee payment records found</p></div></td></tr>`;
        return;
    }

    tbody.innerHTML = filtered.map(p => {
        const s = students.find(x => x.id === p.studentId) || { name: 'Unknown Student', cls: 'N/A' };
        return `<tr>
            <td style="font-weight:700;">${p.month}</td>
            <td>${p.date}</td>
            <td>
                <div style="font-weight:700;">${s.name}</div>
                <div style="font-size:11.5px; color:var(--text-muted);">${s.cls}</div>
            </td>
            <td style="font-weight:700; color:var(--success);">₹${p.amount.toLocaleString()}</td>
            <td><span class="badge badge-purple">${p.mode}</span></td>
            <td style="font-size:12px; color:var(--text-muted);">${p.remarks || '—'}</td>
            <td>
                <button class="btn btn-sm btn-outline" onclick="showReceiptForPayment('${p.id}')">
                    Receipt
                </button>
            </td>
        </tr>`;
    }).join('');
}

function renderSalaryPayoutsTable() {
    const tbody = document.getElementById('salary-payouts-tbody');
    if (!tbody) return;

    let filtered = [...salaryPayouts].sort((a, b) => b.id - a.id);

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6"><div class="empty-state"><p>No salary payouts recorded yet</p></div></td></tr>`;
        return;
    }

    tbody.innerHTML = filtered.map(p => {
        const person = p.type === 'teacher' ? teachers.find(t => t.id === p.recipientId) : staff.find(s => s.id === p.recipientId);
        const personName = person ? person.name : 'Unknown Recipient';
        const personRole = p.type === 'teacher' ? 'Teacher' : (person?.role || 'Staff');

        return `<tr>
            <td style="font-weight:700;">${p.month}</td>
            <td>${p.date}</td>
            <td>
                <div style="font-weight:700;">${personName}</div>
                <div style="font-size:11.5px; color:var(--text-muted);">${personRole}</div>
            </td>
            <td style="font-weight:700; color:var(--primary);">₹${p.amount.toLocaleString()}</td>
            <td><span class="badge badge-info">${p.mode}</span></td>
            <td>
                <button class="btn btn-sm btn-outline" onclick="showSalarySlip('${p.id}')">
                    Slip
                </button>
            </td>
        </tr>`;
    }).join('');
}

// Record Student Fee Payment Modal
function openCollectFeeModal() {
    const sel = document.getElementById('collect-student-select');
    if (!sel) return;

    sel.innerHTML = '<option value="">— Select Student —</option>' +
        students.sort((a, b) => a.name.localeCompare(b.name)).map(s => {
            const effFee = typeof getDiscountedFee === 'function' ? getDiscountedFee(s) : s.fee;
            return `<option value="${s.id}">${s.name} (${s.cls}) — ₹${effFee.toLocaleString()}/mo${s.scholarshipPct > 0 ? ` (${s.scholarshipPct}% Scholarship)` : ''}</option>`;
        }).join('');

    document.getElementById('collect-month-input').value = getCurrentMonthLabel();
    document.getElementById('collect-amount-input').value = '';
    document.getElementById('collect-mode-input').value = 'UPI';
    document.getElementById('collect-remarks-input').value = '';

    openModal('collectFeeModal');
}

function openCollectFeeModalForStudent(studentId) {
    openCollectFeeModal();
    const sel = document.getElementById('collect-student-select');
    if (sel) {
        sel.value = studentId;
        onCollectStudentSelectChange();
    }
}

function onCollectStudentSelectChange() {
    const sId = document.getElementById('collect-student-select').value;
    const s = students.find(x => x.id === sId);
    if (s) {
        const effFee = typeof getDiscountedFee === 'function' ? getDiscountedFee(s) : s.fee;
        document.getElementById('collect-amount-input').value = effFee;
    }
}

function saveFeePayment() {
    const studentId = document.getElementById('collect-student-select').value;
    const month = document.getElementById('collect-month-input').value.trim();
    const amount = parseFloat(document.getElementById('collect-amount-input').value);
    const mode = document.getElementById('collect-mode-input').value;
    const remarks = document.getElementById('collect-remarks-input').value.trim();

    if (!studentId || !month || !amount || amount <= 0) {
        showToast('Select a student and enter valid fee amount', 'danger');
        return;
    }

    const s = students.find(x => x.id === studentId);
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-IN');

    const paymentRecord = {
        id: 'p_' + Date.now(),
        studentId,
        month,
        amount,
        mode,
        remarks,
        date: dateStr
    };

    payments.push(paymentRecord);
    saveState();
    if (typeof DBService !== 'undefined') DBService.insertPayment(paymentRecord);

    closeModal('collectFeeModal');
    showToast(`₹${amount.toLocaleString()} recorded for ${s.name}`);
    
    renderFinancesView();
    renderDashboard();

    // Show Receipt Modal
    showReceiptForPayment(paymentRecord.id);
}

// Salary Payout Modal
let activeSalaryRecipientId = null;
let activeSalaryRecipientType = null;

function openSalaryPayoutModal(recipientId, type) {
    activeSalaryRecipientId = recipientId;
    activeSalaryRecipientType = type;

    const person = type === 'teacher' ? teachers.find(t => t.id === recipientId) : staff.find(s => s.id === recipientId);
    if (!person) return;

    const totalSalary = (person.salary || 0) + (person.incentive || 0);

    const nameEl = document.getElementById('salaryRecipientName');
    if (nameEl) {
        nameEl.innerHTML = `Paying Salary to <strong>${person.name}</strong> (${type === 'teacher' ? 'Teacher' : person.role})${person.incentive > 0 ? `<div style="font-size:12px; color:var(--success); margin-top:2px;">Includes ₹${person.incentive.toLocaleString()} Monthly Incentive</div>` : ''}`;
    }

    document.getElementById('salary-month-input').value = getCurrentMonthLabel();
    document.getElementById('salary-amount-input').value = totalSalary;
    document.getElementById('salary-mode-input').value = 'Bank Transfer';

    openModal('salaryPayoutModal');
}

function saveSalaryPayout() {
    const month = document.getElementById('salary-month-input').value.trim();
    const amount = parseFloat(document.getElementById('salary-amount-input').value);
    const mode = document.getElementById('salary-mode-input').value;

    if (!month || !amount || amount <= 0) {
        showToast('Enter valid month and payout amount', 'danger');
        return;
    }

    const now = new Date();
    const dateStr = now.toLocaleDateString('en-IN');

    const payoutRecord = {
        id: 'sp_' + Date.now(),
        recipientId: activeSalaryRecipientId,
        type: activeSalaryRecipientType,
        month,
        amount,
        mode,
        date: dateStr
    };

    salaryPayouts.push(payoutRecord);

    saveState();
    if (typeof DBService !== 'undefined') DBService.insertSalaryPayout(payoutRecord);
    closeModal('salaryPayoutModal');
    showToast(`Salary payout of ₹${amount.toLocaleString()} recorded`);

    renderFinancesView();
    renderActiveProfileView();
    renderDashboard();
}

// Receipt & Slip Modals
function showReceiptForPayment(paymentId) {
    const p = payments.find(x => x.id === paymentId);
    if (!p) return;

    const s = students.find(x => x.id === p.studentId) || { name: 'Student', cls: 'N/A', parent: 'N/A', phone: 'N/A' };
    const modalBody = document.getElementById('receiptModalBody');
    if (!modalBody) return;

    modalBody.innerHTML = `
        <div class="receipt-box">
            <div class="receipt-header">
                <div style="font-size:22px; font-weight:800; color:var(--primary);">elite<span>.</span>classes</div>
                <div style="font-size:12px; color:var(--text-muted); font-weight:700;">OFFICIAL FEE RECEIPT</div>
                <div style="font-size:11px; color:var(--text-light); margin-top:2px;">Receipt No: #${p.id}</div>
            </div>
            <div class="receipt-row"><span>Student Name:</span><span style="font-weight:700;">${s.name}</span></div>
            <div class="receipt-row"><span>Class:</span><span>${s.cls}</span></div>
            <div class="receipt-row"><span>Parent / Guardian:</span><span>${s.parent}</span></div>
            <div class="receipt-row"><span>Phone Contact:</span><span>${s.phone}</span></div>
            <div class="receipt-row"><span>Fee Month:</span><span style="font-weight:700;">${p.month}</span></div>
            <div class="receipt-row"><span>Payment Date:</span><span>${p.date}</span></div>
            <div class="receipt-row"><span>Payment Mode:</span><span class="badge badge-purple">${p.mode}</span></div>
            ${p.remarks ? `<div class="receipt-row"><span>Remarks:</span><span>${p.remarks}</span></div>` : ''}
            <div class="receipt-row receipt-total"><span>Amount Paid:</span><span style="color:var(--success);">₹${p.amount.toLocaleString()}</span></div>
            <div style="text-align:center; margin-top:16px; font-size:11px; color:var(--text-muted);">
                Generated on ${new Date().toLocaleDateString('en-IN')} • Elite Classes Management Portal
            </div>
        </div>
    `;

    openModal('receiptModal');
}

function showSalarySlip(payoutId) {
    const p = salaryPayouts.find(x => x.id === payoutId);
    if (!p) return;

    const person = p.type === 'teacher' ? teachers.find(t => t.id === p.recipientId) : staff.find(s => s.id === p.recipientId);
    const personName = person ? person.name : 'Employee';
    const personRole = p.type === 'teacher' ? 'Teacher' : (person?.role || 'Support Staff');

    const modalBody = document.getElementById('receiptModalBody');
    if (!modalBody) return;

    modalBody.innerHTML = `
        <div class="receipt-box">
            <div class="receipt-header">
                <div style="font-size:22px; font-weight:800; color:var(--primary);">elite<span>.</span>classes</div>
                <div style="font-size:12px; color:var(--text-muted); font-weight:700;">SALARY DISBURSEMENT SLIP</div>
                <div style="font-size:11px; color:var(--text-light); margin-top:2px;">Voucher No: #${p.id}</div>
            </div>
            <div class="receipt-row"><span>Employee Name:</span><span style="font-weight:700;">${personName}</span></div>
            <div class="receipt-row"><span>Designation:</span><span>${personRole}</span></div>
            <div class="receipt-row"><span>Salary Month:</span><span style="font-weight:700;">${p.month}</span></div>
            <div class="receipt-row"><span>Disbursement Date:</span><span>${p.date}</span></div>
            <div class="receipt-row"><span>Payment Mode:</span><span class="badge badge-info">${p.mode}</span></div>
            <div class="receipt-row receipt-total"><span>Net Disbursed:</span><span style="color:var(--primary);">₹${p.amount.toLocaleString()}</span></div>
        </div>
    `;

    openModal('receiptModal');
}
