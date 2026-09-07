---
name: security-auditor
description: Operational runbook and automated verification toolchain for the Elite Classes Security Auditor Agent. Use to audit codebase for RBAC compliance, confidential field sanitization, anti-leak watermarks, 3-strike tab proctoring, devtools detection, and memory answer key stripping.
---

# Elite Classes — Security Auditor Agent Runbook

The **Security Auditor Agent** ensures continuous adherence to institute privacy mandates, candidate data protection, and anti-cheat exam integrity across the **Elite Classes** platform.

---

## 1. Automated Security Checks

Run the automated verification script:

```bash
node .agents/skills/security-auditor/scripts/audit_security.js
```

The script autonomously validates:
1. **Memory Answer Stripping**: Verifies `cbtPlayer.js` does not expose `correct_option` or `explanation` in raw unsubmitted question objects.
2. **Proctoring Hooks**: Verifies presence of Tab-Switch detector, `MutationObserver` watermark defender, and DevTools geometry check.
3. **RBAC Data Scoping**: Verifies `supabase/api.js` scopes `fetchSalaryPayouts(staffId)` and sanitizes `pin`/`salary` in `fetchStudents()` / `fetchTeachers()`.
4. **Database RLS**: Verifies policies and migrations in `database/migrations/` and `supabase/schema.sql`.
5. **No Pseudo-random Marks**: Verifies `js/staffHome.js` does not synthesize fake marks with Math.random or deterministic seeds.

---

## 2. Audit Frequency & CI Integration

Execute the security auditor:
- Before each release merge or production push.
- After any change to authentication, test engine (`cbtPlayer.js`), or data access layer (`supabase/api.js`).
