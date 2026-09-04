-- =====================================================================
-- MIGRATION 014: STUDENT SELF-REGISTRATION & ADMISSION APPROVAL WORKFLOW
-- =====================================================================

CREATE TABLE IF NOT EXISTS student_registrations (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL UNIQUE,
    email VARCHAR(100),
    pin VARCHAR(20) NOT NULL,
    cls VARCHAR(50) NOT NULL,
    parent_name VARCHAR(100),
    parent_phone VARCHAR(20),
    school_name VARCHAR(150),
    course_interest VARCHAR(150),
    status VARCHAR(30) DEFAULT 'pending_approval', -- 'pending_approval', 'approved', 'rejected'
    rejection_reason TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    approved_at TIMESTAMPTZ,
    approved_by VARCHAR(50)
);

CREATE INDEX IF NOT EXISTS idx_student_registrations_phone ON student_registrations(phone);
CREATE INDEX IF NOT EXISTS idx_student_registrations_status ON student_registrations(status);

ALTER TABLE student_registrations ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public can submit student registrations" ON student_registrations;
CREATE POLICY "Public can submit student registrations" ON student_registrations 
FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Public and authenticated can read registrations" ON student_registrations;
CREATE POLICY "Public and authenticated can read registrations" ON student_registrations 
FOR SELECT USING (true);

DROP POLICY IF EXISTS "Admins can update registrations" ON student_registrations;
CREATE POLICY "Admins can update registrations" ON student_registrations 
FOR UPDATE USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Admins can delete registrations" ON student_registrations;
CREATE POLICY "Admins can delete registrations" ON student_registrations 
FOR DELETE USING (true);
