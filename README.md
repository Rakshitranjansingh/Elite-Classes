# 🎓 Elite Classes — Enterprise Coaching Institute ERP & LMS

[![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)](https://github.com/Rakshitranjansingh/Elite-Classes)
[![Database](https://img.shields.io/badge/database-Supabase%20PostgreSQL-3ECF8E.svg)](https://supabase.com)
[![Platform](https://img.shields.io/badge/platform-Web%20App-0f172a.svg)](#)

**Elite Classes** is an enterprise-grade Coaching Institute Management ERP and Learning Management System (LMS). Built with clean 4-tier client-serverless architecture, high-performance Vanilla CSS/ES6+, Supabase PostgreSQL cloud sync, and offline-first LocalStorage resilience.

---

## 🏛️ System Architecture & Portals

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           PRESENTATION LAYER                                │
│                                                                             │
│  [Unified Gateway: index.html] ── WhatsApp + PIN ──► Dynamic Role Dispatch  │
│        │                                                                    │
│   ┌────┴────────────────────────┬─────────────────────────────┐             │
│   ▼                             ▼                             ▼             │
│ 👑 Admin Portal          👨‍🏫 Faculty Portal            🎓 Student Portal      │
│ (admin_home.html)       (staff_home.html)             (student_home.html)   │
│   - Full Institute CRUD   - Class Roster & Remarks      - Course Materials  │
│   - Fees & Salaries       - Attendance Marking          - CBT Test Engine   │
│   - Class Directory       - Salary Slips & Notices      - Attendance & Fees │
│   - Overall Analytics     - Assigned Classes Only       - Marks Ledger      │
│        │                             │                        │             │
│        └─────────────────────────────┼────────────────────────┘             │
│                                      ▼                                      │
│                       [Unified DBService: api.js]                           │
│                       ├── Supabase Cloud PostgreSQL                         │
│                       └── LocalStorage Cache / Fallback                     │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 🚀 Key Features

### 👑 1. Admin Management Portal (`admin_home.html`)
- **Student Roster & Profiles**: Complete student directory, parent contacts, discount/scholarship percentage calculators, and multi-month fee arrears tracking.
- **Unified Staff Directory**: Teaching faculty and support staff profiles, subject/class assignments, base salary, and incentive ledgers.
- **Class & Academic Directory**: Comprehensive classes catalog (Classes 5–10, LKG, UKG) with subject groupings and enrolled student rosters.
- **Financial Ledger**: Fee collections, automated official receipts, salary disbursements, and monthly profit & loss metrics.
- **Attendance Hub**: Daily batch attendance marking across classes and subjects with unmarked detection.
- **Exam Results & Scoreboard**: Class performance scoreboard with real-time ranking and subject-wise score management (evaluated only for enrolled subjects).

### 👨‍🏫 2. Faculty & Staff Portal (`staff_home.html`)
- **Assigned Class Scoping**: Teachers view only students enrolled in their assigned classes and subjects.
- **Student Remarks System**: Raise and review academic or behavioral remarks for students.
- **Attendance Marking**: Fast daily attendance recording for assigned classes.
- **Compensation History**: View personal salary disbursement slips and incentive statements.

### 🎓 3. Student Learning Portal (`student_home.html`)
- **Course & Curriculum Materials**: Access enrolled subject courses, study modules, and syllabus outlines.
- **Computer-Based Test (CBT) Series Engine**:
  - Full 100-question NCERT assessments with real-time countdown timer.
  - Responsive question palette (mobile top horizontal scroll ribbon with auto-scroll, desktop sidebar grid).
  - Negative marking formulas and instant scorecards with solution accordions.
  - Real-time dynamic class leaderboards.
- **Attendance & Academic Record**: View session attendance rates, days present/late/absent, and exam scorecards.
- **Fee Ledger & Receipts**: View payment history, dues balance, and digital official receipts.

---

## 🔒 Authentication & Role-Based Access Control (RBAC)

All users enter via the unified gateway (`index.html`) using their registered **WhatsApp Phone Number + Secret Security PIN**:
- **Admin**: Routes to `admin_home.html` (Full Institute Scope).
- **Staff / Faculty**: Routes to `staff_home.html` (Class-Scoped).
- **Student**: Routes to `student_home.html` (Self-Scoped).

---

## 📁 Repository Directory Structure

```
EliteClasses/
├── index.html                   # Unified Gateway Login (WhatsApp + PIN)
├── admin_home.html              # Admin Management Portal
├── staff_home.html              # Faculty & Staff Portal
├── student_home.html            # Student Learning Portal
│
├── css/
│   └── styles.css               # Global Theme Design System & Tokens
│
├── enums/
│   ├── classes.js               # Academic Classes Enum
│   └── subjects.js              # Academic Subjects Enum
│
├── js/
│   ├── app.js                   # State Manager, Auth Guards, Inactivity Timer
│   ├── admins.js                # Admin CRUD & Permissions
│   ├── students.js              # Student Profiles & Fee Dues Calculations
│   ├── teachers.js              # Faculty Assignments & Compensation
│   ├── staff.js                 # Support Staff Management
│   ├── staffHome.js             # Staff Portal Controller
│   ├── classes.js               # Classes Catalog & Leaderboards
│   ├── finances.js              # Fee Ledger & Salary Disbursements
│   ├── attendance.js            # Batch Attendance Marking
│   └── adminMarks.js            # Exam Scoreboard & Dynamic Ranking
│
├── modules/
│   ├── studentView/             # Student Dashboard Controller
│   ├── testseries/              # CBT Engine (cbtPlayer.js) & Class Hubs
│   ├── courses/                 # Courses & Materials Catalog
│   └── notices/                 # Notice Board & Live Bulletin Slider
│
├── supabase/
│   ├── config.js                # Supabase Client Initializer
│   ├── api.js                   # Unified DBService (Cloud + Local Fallback)
│   └── schema.sql               # Base PostgreSQL Database Schema
│
└── database/
    ├── migrations/              # Idempotent Incremental SQL Migrations (001–011)
    └── releases/                # Production Release Bundles
```

---

## 🛠️ Local Development & Running

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Rakshitranjansingh/Elite-Classes.git
   cd EliteClasses
   ```
2. **Launch with any local HTTP server**:
   ```bash
   npx serve .
   # or Python HTTP server
   python -m http.server 3000
   ```
3. **Open in Browser**: Navigate to `http://localhost:3000` to access the Unified Gateway.

---

## 📜 Engineering Standards
- **Zero Nested Iframes**: All test hubs, CBT players, and subject views run natively in the full browser viewport with smooth breadcrumb navigation.
- **Dynamic Leaderboards**: Real-time rank sorting combining active attempts and peer scores.
- **Offline-First Resilience**: All views operate smoothly in offline demo mode using localStorage caching.
- **Idempotent SQL**: All database migrations in `database/migrations/` use `IF NOT EXISTS` and `ON CONFLICT` clauses for safe repeated execution.
