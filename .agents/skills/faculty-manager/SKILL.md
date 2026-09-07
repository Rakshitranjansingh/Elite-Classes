---
name: faculty-manager
description: Operational runbook and automated toolchain for the Elite Classes Faculty Manager Agent. Use when onboarding teachers/staff, assigning classes and subjects, managing salary disbursements, tracking payroll vouchers, and enforcing RBAC privacy boundaries.
---

# Elite Classes — Faculty Manager Agent Runbook

The **Faculty Manager Agent** manages teaching faculty, administrative staff, subject/class assignments, and confidential salary disbursements while guaranteeing zero human error and strict RBAC privacy.

---

## 1. Operating Responsibilities

1. **Faculty Provisioning**: Add teaching faculty (`is_teacher = true`) with subjects taught, assigned classes, and base compensation.
2. **Staff Provisioning**: Add support staff (`is_teacher = false`) with designated operational roles.
3. **Class Assignment Maintenance**: Update assigned classes to control scope in `staff_home.html`.
4. **Salary Payout Ledger**: Disburse monthly salaries into `salary_payouts` and generate printable voucher records.
5. **RBAC Privacy Enforcement**: Ensure individual teachers can never query or view other teachers' compensation or the institute's total payroll.

---

## 2. CLI Tooling: `manage_faculty.js`

```bash
# List all active faculty & staff
node .agents/skills/faculty-manager/scripts/manage_faculty.js list

# Onboard new teacher
node .agents/skills/faculty-manager/scripts/manage_faculty.js add-teacher \
  --name "Dr. Vikram Seth" \
  --phone "9812345678" \
  --subjects "Physics,Mathematics" \
  --classes "Class 10,Class 11" \
  --salary 45000

# Disburse monthly salary
node .agents/skills/faculty-manager/scripts/manage_faculty.js disburse-salary \
  --staffId "stf_vikram" \
  --month "September 2026" \
  --amount 45000 \
  --mode "Bank Transfer"
```

---

## 3. Privacy & Compliance Guardrails

- Faculty PINs and base salaries are strictly invisible to students and non-admin staff in UI and API payloads.
- In `staff_home.html`, faculty only see salary slips issued specifically to their own staff ID.
