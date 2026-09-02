# Elite Classes ERP — Engineering & AI Agent Development Standards

You are developing **Elite Classes**, an enterprise-grade Coaching Institute ERP & Learning Management System. Every AI agent and developer working in this repository must strictly adhere to the architecture, scalability guidelines, role-based access control (RBAC), and coding standards defined below.

---

## 1. Core Architecture & Component Hierarchy

The application follows a clean 4-tier client-serverless architecture:

```
┌────────────────────────────────────────────────────────┐
│                   PRESENTATION LAYER                   │
│   index.html (Gateway)  │  admin_home.html (Admin)    │
│   student_home.html     │  staff_home.html (Faculty)  │
└───────────────────────────┬────────────────────────────┘
                            │
┌───────────────────────────▼────────────────────────────┐
│                CONTROLLERS & UI MODULES                │
│   js/students.js        │  js/teachers.js              │
│   js/staffHome.js       │  modules/studentView.js      │
│   js/finances.js        │  js/attendance.js            │
└───────────────────────────┬────────────────────────────┘
                            │
┌───────────────────────────▼────────────────────────────┐
│                   DATA ACCESS LAYER                    │
│   supabase/api.js (Unified DBService)                  │
│   - Supabase Cloud PostgreSQL Query Execution          │
│   - Offline localStorage Fallback & Cache Sync         │
└───────────────────────────┬────────────────────────────┘
                            │
┌───────────────────────────▼────────────────────────────┐
│                    DATABASE TIER                       │
│   supabase/schema.sql   │  database/migrations/        │
│   database/releases/    │  PostgreSQL + Row-Level Sec  │
└────────────────────────────────────────────────────────┘
```

---

## 2. Mandatory Role-Based Access Control (RBAC) Specification

**CRITICAL MANDATE**: Before proposing or developing any module or feature, the agent MUST define and strictly enforce the access permissions across the three distinct user profiles:

```
┌─────────────────┬──────────────────────────────────┬────────────────────────────────────────────────────────┐
│ Profile         │ Primary Target View             │ Typical Scope & Permissions                            │
├─────────────────┼──────────────────────────────────┼────────────────────────────────────────────────────────┤
│ 👑 Admin        │ admin_home.html                  │ Full CRUD across all classes, users, finances & system │
│ 👨‍🏫 Faculty/Staff │ staff_home.html                  │ Class-Scoped (Assigned classes only), Own Salary Slips │
│ 🎓 Student      │ student_home.html                │ Self-Scoped (Own class materials, own marks & receipts)│
└─────────────────┴──────────────────────────────────┴────────────────────────────────────────────────────────┘
```

### Standard Module Access Matrix:

| Module / Feature | 👑 Admin (`admin_home.html`) | 👨‍🏫 Faculty/Staff (`staff_home.html`) | 🎓 Student (`student_home.html`) |
| :--- | :--- | :--- | :--- |
| **Student Profiles & Remarks** | **Full CRUD & Review Remarks** (All institute students) | **Read Roster & Raise Remarks** (Assigned classes only) | **Read-Only** (Own profile card) |
| **Attendance** | **Full CRUD** (All classes & history) | **Create/Update** (Assigned classes only) | **Read-Only** (Own monthly attendance & %) |
| **Courses & Materials** | **Full CRUD** (Publish, edit, delete all) | **Create & Read** (For assigned classes) | **Read-Only** (Enrolled class subjects) |
| **Exam Marks & Results** | **Full CRUD** (Enter & adjust all marks) | **Enter & View** (For assigned classes) | **Read-Only** (Own marks & report card) |
| **Test Series & CBT** | **Full CRUD** (Create/edit test questions) | **Create & View** (For assigned classes) | **Execute Assessment** (Take CBT test) |
| **Fee Collection** | **Full CRUD** (Collect fee, issue receipt) | **No Access** | **Read-Only** (Own receipts & dues) |
| **Salary Disbursements** | **Full CRUD** (Disburse salaries, vouchers) | **Read-Only** (Own salary slips/vouchers) | **No Access** |
| **Notices & Bulletins** | **Full CRUD** (Create, toggle active state) | **Create & Read** (Publish coaching notices) | **Read-Only** (All active announcements) |
| **Staff & Admin Mgmt** | **Full CRUD** (Add/edit teachers & staff) | **No Access** | **No Access** |
| **System / DB Config** | **Full CRUD** (Supabase URL, API Keys) | **No Access** | **No Access** |

---

## 3. Mandatory Coding Standards for Scalability

### A. Data Access Layer (`DBService`)
1. **Single Point of Truth**: Never execute direct `supabaseClient` queries or write ad-hoc `localStorage` access in UI view files. All database queries must be encapsulated as methods inside `DBService` in [`supabase/api.js`](supabase/api.js).
2. **Offline-First Resilience**: Every `DBService` method must handle both online Supabase connections and offline/fallback `localStorage` mode gracefully without throwing unhandled exceptions.
3. **Optimized Queries & Indexes**: Ensure any queried or filtered column has a corresponding PostgreSQL index in migration scripts.

### B. Database Schema & Migration Discipline
1. **Idempotency Rule**: All SQL migration files must be 100% idempotent and safe to execute multiple times:
   - Use `CREATE TABLE IF NOT EXISTS`
   - Use `ALTER TABLE ... ADD COLUMN IF NOT EXISTS`
   - Use `CREATE INDEX IF NOT EXISTS`
   - Use `DROP POLICY IF EXISTS ...` before `CREATE POLICY`
   - Use `ON CONFLICT (id) DO UPDATE ...` or `DO NOTHING`
2. **Migration Workflow**:
   - For every new feature requiring schema modifications, create a sequentially numbered migration script in [`database/migrations/`](database/migrations/) (e.g., `006_feature_name.sql`).
   - Reflect changes in the base schema [`supabase/schema.sql`](supabase/schema.sql) and the consolidated release script in [`database/releases/`](database/releases/).
3. **Unified Staff Model**:
   - Teaching faculty and support staff are unified in the `staff` table.
   - Teachers are marked with `is_teacher = TRUE` and contain `subjects` and `assigned_classes`.
   - Support staff are marked with `is_teacher = FALSE`.
4. **Profile Authentication Attributes**:
   - All profile tables (`students`, `staff`, `admins`) must maintain `phone`, `pin`, and `email` columns to support instant WhatsApp + PIN login today and future Google SSO.

### C. Frontend & UI Consistency
1. **Vanilla CSS Design System**: Style components using predefined CSS classes in [`css/styles.css`](css/styles.css). Avoid ad-hoc inline styles.
2. **Modal Conventions**: Open modals via `openModal('modalId')` and close via `closeModal('modalId')`.
3. **Notification System**: Display feedback to users via `showToast('Message text', 'success'|'danger')`.
4. **Session Security & Inactivity**: Preserve the 10-minute inactivity timer (`INACTIVITY_TIMEOUT_MS`) and authentication guards on protected portal pages (`checkAdminAuthGuard()`, `initStaffPortal()`, `initStudentHome()`).

---

## 4. Agent Development Workflow & Quality Checklist

Before completing any task or proposing changes:
1. **Clarify Access Matrix**: Determine what level of access (Full, Class-Scoped, Self-Scoped, or No Access) Admin, Staff, and Student receive for the feature.
2. **Read Before Writing**: Check `project_doc.txt` and relevant controller files.
3. **Syntax Validation**: Run `node --check <file>.js` on all modified JavaScript files.
4. **Schema Sync**: If data models change, update:
   - `database/migrations/XXX_new_migration.sql`
   - `supabase/schema.sql`
   - `supabase/api.js` (DBService)
   - `js/app.js` (seed data)
5. **Auth Routing Verification**: Verify login and role navigation on `index.html` $\rightarrow$ `admin_home.html`, `student_home.html`, and `staff_home.html`.
