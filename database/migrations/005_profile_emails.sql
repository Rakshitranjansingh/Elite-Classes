-- =========================================================
-- MIGRATION 005: PROFILE EMAIL COLUMNS & GOOGLE SSO READINESS
-- Description: Adds email address columns and indexes across students, staff, and admins
-- =========================================================

-- 1. ADD EMAIL COLUMNS
ALTER TABLE students ADD COLUMN IF NOT EXISTS email VARCHAR(255);
ALTER TABLE staff ADD COLUMN IF NOT EXISTS email VARCHAR(255);
ALTER TABLE admins ADD COLUMN IF NOT EXISTS email VARCHAR(255);

-- 2. CREATE INDEXES ON EMAIL
CREATE INDEX IF NOT EXISTS idx_students_email ON students(email);
CREATE INDEX IF NOT EXISTS idx_staff_email ON staff(email);
CREATE INDEX IF NOT EXISTS idx_admins_email ON admins(email);

-- 3. UPDATE SEED ACCOUNTS WITH SAMPLE EMAILS
UPDATE students SET email = 'aarav.sharma@gmail.com' WHERE id = 's1' AND (email IS NULL OR email = '');
UPDATE students SET email = 'ananya.singh@gmail.com' WHERE id = 's2' AND (email IS NULL OR email = '');
UPDATE students SET email = 'rohan.gupta@gmail.com' WHERE id = 's3' AND (email IS NULL OR email = '');
UPDATE students SET email = 'ishita.patel@gmail.com' WHERE id = 's4' AND (email IS NULL OR email = '');
UPDATE students SET email = 'karan.mehta@gmail.com' WHERE id = 's5' AND (email IS NULL OR email = '');

UPDATE staff SET email = 'ramesh.kumar@eliteclasses.com' WHERE id = 't1' AND (email IS NULL OR email = '');
UPDATE staff SET email = 'sunita.rao@eliteclasses.com' WHERE id = 't2' AND (email IS NULL OR email = '');
UPDATE staff SET email = 'vikram.das@eliteclasses.com' WHERE id = 't3' AND (email IS NULL OR email = '');
UPDATE staff SET email = 'rajesh.accountant@eliteclasses.com' WHERE id = 'st1' AND (email IS NULL OR email = '');
UPDATE staff SET email = 'sunil.maintenance@eliteclasses.com' WHERE id = 'st2' AND (email IS NULL OR email = '');

UPDATE admins SET email = 'admin@eliteclasses.com' WHERE id = 'a1' AND (email IS NULL OR email = '');
