# Elite Classes — Database Releases & Incremental Migrations

This directory contains incremental SQL migration scripts and release bundles for the Elite Classes Supabase PostgreSQL database.

## 📁 Directory Structure

```
database/
├── README.md                      # Release workflow and migration guide
├── releases/                      # Consolidated SQL scripts per release / sprint
│   └── release_v2.0.0.sql         # Production Release v2.0.0 (Unified schema + seed data)
└── migrations/                    # Sequential incremental migration scripts
    ├── 001_base_schema.sql        # Initial foundational database tables & RLS
    ├── 002_whatsapp_pin_auth.sql  # Added PIN columns & phone indexes for WhatsApp login
    ├── 003_merge_teachers_staff.sql # Merged teachers into staff with is_teacher flag
    ├── 004_classes_and_subjects.sql # Dynamic classes & subjects tables
    └── 005_profile_emails.sql     # Added email columns to profiles for future Google Login
```

---

## 🚀 How to Apply Migrations

### Option 1: First-Time Setup / Fresh Database
Run the consolidated full script in the Supabase SQL Editor:
- File: [`supabase/schema.sql`](../supabase/schema.sql) or [`database/releases/release_v2.0.0.sql`](releases/release_v2.0.0.sql)

### Option 2: Incremental Upgrades
When deploying a new development update or feature release:
1. Navigate to [`database/migrations/`](migrations/)
2. Run the newest migration file(s) (e.g. `005_profile_emails.sql`) on your live Supabase project.

---

## 📝 Best Practices for New Release Migrations
1. **Idempotency**: Always use `IF NOT EXISTS` for tables, columns, indexes, and `DROP POLICY IF EXISTS` before creating RLS policies so migrations can be safely re-run.
2. **Naming Convention**: `XXX_feature_or_ticket_description.sql` (e.g. `006_student_fee_discounts.sql`).
3. **Data Integrity**: Include `ON CONFLICT DO UPDATE` or `DO NOTHING` for any initial seed data.
