# Elite Classes — Database Architecture & Migrations Guide

This directory contains sequential incremental SQL migration scripts for the Elite Classes Supabase PostgreSQL database.

---

## 📁 Directory Structure

```
database/
├── README.md                      # Database migration guide & SQL execution instructions
└── migrations/                    # Sequential incremental migration scripts
    ├── 001_base_schema.sql        # Initial foundational database tables & RLS
    ├── 002_whatsapp_pin_auth.sql  # Added PIN columns & phone indexes for WhatsApp login
    ├── 003_merge_teachers_staff.sql # Merged teachers into staff with is_teacher flag
    ├── 004_classes_and_subjects.sql # Dynamic classes & subjects tables
    ├── 005_profile_emails.sql     # Added email columns to profiles for future Google Login
    ├── ...
    ├── 018_unified_test_submissions_and_leaderboard.sql # Cross-cohort CBT rankings & avg score
    └── 019_rbac_privacy_and_proctoring_logs.sql # Proctoring logs & RBAC indexes
```

The single source of truth for the entire consolidated database schema is:
👉 [`supabase/schema.sql`](../supabase/schema.sql)

---

## 🚀 How to Execute the SQL Scripts

### Option 1: First-Time Setup / Fresh Database Deployment
If you are initializing a brand-new Supabase project or spinning up a staging database:
1. Open your **Supabase Dashboard** $\rightarrow$ select your project.
2. In the left navigation, click on **SQL Editor**.
3. Click **+ New Query**.
4. Open [`supabase/schema.sql`](../supabase/schema.sql), copy the entire contents, paste it into the editor, and click **Run**.
   - *Note: `supabase/schema.sql` is 100% idempotent and sets up all tables, indexes, Row-Level Security (RLS) policies, and starter seeds.*

### Option 2: Incremental Upgrades on Existing Live Database
When deploying a new feature or database migration to an existing instance:
1. Open [`database/migrations/`](migrations/).
2. Locate the newest migration file(s) that have not yet been applied to your database (e.g. `018_unified_test_submissions_and_leaderboard.sql`, `019_rbac_privacy_and_proctoring_logs.sql`).
3. In Supabase **SQL Editor**, paste the contents of that migration file and click **Run**.

---

## 📝 Best Practices for Future Migrations
1. **Idempotency Rule**: All migration files MUST be 100% idempotent and safe to run multiple times:
   - Use `CREATE TABLE IF NOT EXISTS`
   - Use `ALTER TABLE ... ADD COLUMN IF NOT EXISTS`
   - Use `CREATE INDEX IF NOT EXISTS`
   - Use `DROP POLICY IF EXISTS ...` before `CREATE POLICY`
   - Use `ON CONFLICT (id) DO UPDATE ...` or `DO NOTHING`
2. **Sequential Numbering**: Use `0XX_feature_name.sql` (e.g. `020_new_feature.sql`).
3. **Single Source of Truth Sync**: Whenever a new migration is added to `database/migrations/`, reflect its table definitions, indexes, and policies in [`supabase/schema.sql`](../supabase/schema.sql).
