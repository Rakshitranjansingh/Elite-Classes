---
name: student-onboarding
description: Operational runbook and automated toolchain for the Elite Classes Student Onboarding Agent. Use when admitting new students, approving pending registrations, generating PINs, assigning classes/batches, allocating tuition fees, and generating welcome credentials.
---

# Elite Classes — Student Onboarding Agent Runbook

The **Student Onboarding Agent** automates the admission pipeline, pending registration verification, WhatsApp credential generation, and profile initialization with zero human error.

---

## 1. Operating Responsibilities

1. **Self-Registration Review**: Process incoming rows from `student_registrations` (status: `pending_approval`).
2. **Profile Provisioning**: Create corresponding student profile in `students` table with secure 6-digit PIN, unique student ID (`st_c10_...`), and batch allocation.
3. **Tuition Fee Structure**: Initialize monthly fee record and fee due date in `fee_ledger`.
4. **WhatsApp Dispatch Template**: Format instant welcome message containing student login link, assigned class, and default PIN.

---

## 2. CLI Tooling: `onboard_student.js`

```bash
# Verify pending student admissions
node .agents/skills/student-onboarding/scripts/onboard_student.js list-pending

# Admit new student directly
node .agents/skills/student-onboarding/scripts/onboard_student.js create \
  --name "Ananya Sharma" \
  --phone "9876543210" \
  --cls "Class 10" \
  --fee 2500 \
  --parent "Rajesh Sharma"
```

---

## 3. Mandatory Security & Privacy Rules

- **PIN Security**: PIN must never be transmitted in cleartext in public logs or shared student views.
- **Unique Phone Check**: Phone numbers must be strictly unique across all active profiles.
- **Roll Number Generation**: Automated sequence ensuring zero duplicate IDs.

---

## 4. Quality Checklist

- [ ] Phone formatted with 10 digits.
- [ ] 6-digit PIN generated and stored securely.
- [ ] Enrolled class validated against institute classes.
- [ ] Toast confirmation and WhatsApp template ready.
