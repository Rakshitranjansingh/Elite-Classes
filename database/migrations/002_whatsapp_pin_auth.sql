-- =========================================================
-- MIGRATION 002: WHATSAPP NUMBER & PIN AUTHENTICATION
-- Description: Adds secret PIN columns and phone indexes across all user roles
-- =========================================================

-- 1. ADD PIN COLUMNS WITH DEFAULT VALUES
ALTER TABLE admins ADD COLUMN IF NOT EXISTS pin VARCHAR(50) DEFAULT '987654';
ALTER TABLE students ADD COLUMN IF NOT EXISTS pin VARCHAR(50) DEFAULT '123456';
ALTER TABLE staff ADD COLUMN IF NOT EXISTS pin VARCHAR(50) DEFAULT '123456';

-- 2. CREATE PERFORMANCE INDEXES ON PHONE FOR INSTANT LOGIN LOOKUPS
CREATE INDEX IF NOT EXISTS idx_admins_phone ON admins(phone);
CREATE INDEX IF NOT EXISTS idx_students_phone ON students(phone);
CREATE INDEX IF NOT EXISTS idx_staff_phone ON staff(phone);
