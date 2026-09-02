-- =========================================================
-- ELITE CLASSES — MIGRATION 006: TEACHER REMARKS FOR STUDENTS
-- Allows faculty/staff to raise academic and behavioral remarks for students,
-- which administrators can review in student profiles.
-- =========================================================

CREATE TABLE IF NOT EXISTS student_remarks (
    id VARCHAR(50) PRIMARY KEY,
    student_id VARCHAR(50) REFERENCES students(id) ON DELETE CASCADE,
    staff_id VARCHAR(50),
    staff_name VARCHAR(255) NOT NULL,
    category VARCHAR(100) DEFAULT 'General Note',
    remark TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_student_remarks_student ON student_remarks(student_id);
CREATE INDEX IF NOT EXISTS idx_student_remarks_staff ON student_remarks(staff_id);

ALTER TABLE student_remarks ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public Read/Write student_remarks" ON student_remarks;
CREATE POLICY "Public Read/Write student_remarks" ON student_remarks FOR ALL USING (true) WITH CHECK (true);
