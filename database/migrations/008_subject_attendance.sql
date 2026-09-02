-- =========================================================
-- ELITE CLASSES ERP — MIGRATION 008: SUBJECT-WISE ATTENDANCE
-- Idempotent PostgreSQL Migration Script
-- =========================================================

-- 1. Add subject column to attendance table if missing
ALTER TABLE attendance ADD COLUMN IF NOT EXISTS subject VARCHAR(100) DEFAULT 'General';

-- 2. Drop existing unique constraint if present
ALTER TABLE attendance DROP CONSTRAINT IF EXISTS unique_student_daily_att;

-- 3. Create unique index for date + student + subject
CREATE UNIQUE INDEX IF NOT EXISTS idx_unique_student_date_subject ON attendance (date, student_id, COALESCE(subject, 'General'));

-- 4. Create subject query index
CREATE INDEX IF NOT EXISTS idx_attendance_date_subject ON attendance (date, subject);
