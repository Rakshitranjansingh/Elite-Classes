---
name: elite-classes-dev
description: Development guide, architectural standards, database migrations, and quality checklist for the Elite Classes Coaching ERP platform. Use when modifying features, adding DB migrations, updating APIs, or refactoring UI views.
---

# Elite Classes — Agent Engineering Skill

Use this skill whenever you are building features, modifying UI views, refactoring logic, or performing database schema migrations on the **Elite Classes** platform.

---

## 1. Mandatory Role-Based Access Control (RBAC) Specification

**FIRST STEP ON EVERY TASK**: Clearly specify what each of the 3 profiles can do for the feature:

| Module / Feature | 👑 Admin (`admin_home.html`) | 👨‍🏫 Faculty/Staff (`staff_home.html`) | 🎓 Student (`student_home.html`) |
| :--- | :--- | :--- | :--- |
| **Student Profiles** | **Full CRUD** (All students) | **Read & Contact** (Assigned classes) | **Read-Only** (Own profile card) |
| **Attendance** | **Full CRUD** (All classes & history) | **Create/Update** (Assigned classes) | **Read-Only** (Own attendance & %) |
| **Courses & Materials** | **Full CRUD** (Publish, edit, delete) | **Create & Read** (Assigned classes) | **Read-Only** (Enrolled class subjects) |
| **Exam Marks & Results** | **Full CRUD** (Enter & adjust all marks) | **Enter & View** (Assigned classes) | **Read-Only** (Own marks & report cards) |
| **Test Series & CBT** | **Full CRUD** (Create/edit test questions) | **Create & View** (Assigned classes) | **Take CBT Test** (View own score) |
| **Fee Collection** | **Full CRUD** (Collect fee, issue receipt) | **No Access** | **Read-Only** (Own receipts & dues) |
| **Salary Disbursements** | **Full CRUD** (Disburse salaries, vouchers) | **Read-Only** (Own salary slips) | **No Access** |
| **Notices & Bulletins** | **Full CRUD** (Publish & manage notices) | **Create & Read** (Publish coaching notices) | **Read-Only** (All announcements) |
| **Staff & Admin Mgmt** | **Full CRUD** (Add/edit teachers & staff) | **No Access** | **No Access** |
| **System / DB Config** | **Full CRUD** (Supabase URL, API Keys) | **No Access** | **No Access** |

---

## 2. Quick Reference: System Components

| Purpose | Primary Files | Key Responsibility |
| :--- | :--- | :--- |
| **Authentication Gateway** | [`index.html`](file:///c:/Users/raksh/Desktop/Projects/EliteClasses/index.html) | Unified WhatsApp & PIN routing to roles |
| **Admin Portal** | [`admin_home.html`](file:///c:/Users/raksh/Desktop/Projects/EliteClasses/admin_home.html), [`js/admins.js`](file:///c:/Users/raksh/Desktop/Projects/EliteClasses/js/admins.js) | Full institute administration & settings |
| **Student Portal** | [`student_home.html`](file:///c:/Users/raksh/Desktop/Projects/EliteClasses/student_home.html), [`modules/studentView/`](file:///c:/Users/raksh/Desktop/Projects/EliteClasses/modules/studentView/) | Student courses, CBT test series, attendance, fee ledger |
| **Staff / Faculty Portal** | [`staff_home.html`](file:///c:/Users/raksh/Desktop/Projects/EliteClasses/staff_home.html), [`js/staffHome.js`](file:///c:/Users/raksh/Desktop/Projects/EliteClasses/js/staffHome.js) | Assigned class roster, daily attendance marking, salary slips |
| **Data Access Layer** | [`supabase/api.js`](file:///c:/Users/raksh/Desktop/Projects/EliteClasses/supabase/api.js) | `DBService` with online Supabase + offline localStorage fallback |
| **Database Base Schema** | [`supabase/schema.sql`](file:///c:/Users/raksh/Desktop/Projects/EliteClasses/supabase/schema.sql) | Idempotent PostgreSQL schema |
| **Database Migrations** | [`database/migrations/`](file:///c:/Users/raksh/Desktop/Projects/EliteClasses/database/migrations/) | Sequential incremental migration SQL files |
| **Design System** | [`css/styles.css`](file:///c:/Users/raksh/Desktop/Projects/EliteClasses/css/styles.css) | Tokens, layout utilities, cards, tables, badges, modals |

---

## 3. Core Scalability Rules

### Data Access Layer (`DBService`)
- Never execute direct Supabase queries in HTML/views. Route all calls through `DBService` in `supabase/api.js`.
- Always provide fallback defaults if offline or if Supabase query fails.

### Database Migrations
- All SQL scripts MUST be idempotent (`IF NOT EXISTS`, `ON CONFLICT DO UPDATE/NOTHING`, `ALTER TABLE ... ADD COLUMN IF NOT EXISTS`).
- Whenever a feature requires database changes:
  1. Add a sequentially numbered file in `database/migrations/` (e.g. `006_feature_name.sql`).
  2. Update `supabase/schema.sql`.
  3. Update `database/releases/release_vX.X.X.sql`.
  4. Update `DBService` in `supabase/api.js`.

### Profile Tables
- `students`, `staff`, and `admins` must maintain `phone`, `pin`, and `email` columns for multi-method authentication (WhatsApp PIN + future Google SSO).

---

## 4. Development Workflow Checklist

1. **Clarify Access Matrix**: Determine what level of access Admin, Staff, and Student receive for the feature.
2. **Investigate**: Check `project_doc.txt` and relevant files before editing.
3. **Implement**: Keep code modular, clean, and styled via `css/styles.css`.
4. **Verify Syntax**: Run `node --check <file>.js` on all modified JavaScript files.
5. **Test Routing**: Ensure session keys and navigation work seamlessly across all three portals.
