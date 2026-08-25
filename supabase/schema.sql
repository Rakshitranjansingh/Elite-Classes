-- =========================================================
-- ELITE CLASSES — SUPABASE RELATIONAL DATABASE SCHEMA & MIGRATION
-- Copy and paste this script directly into Supabase SQL Editor & click Run.
-- =========================================================

-- 1. COACHING SETTINGS & SECURITY TABLE
CREATE TABLE IF NOT EXISTS coaching_settings (
    id VARCHAR(50) PRIMARY KEY DEFAULT 'coaching_main',
    coaching_name VARCHAR(255) NOT NULL DEFAULT 'Elite Classes',
    access_key VARCHAR(50) NOT NULL DEFAULT '987654',
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. STUDENTS TABLE
CREATE TABLE IF NOT EXISTS students (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    cls VARCHAR(50) NOT NULL,
    parent_name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    monthly_fee NUMERIC(10, 2) NOT NULL DEFAULT 0,
    fee_due_day INT DEFAULT 10,
    scholarship_pct NUMERIC(5, 2) DEFAULT 0,
    subjects TEXT,
    date_of_admission DATE,
    school_name VARCHAR(255),
    avatar_color VARCHAR(20),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. TEACHERS TABLE
CREATE TABLE IF NOT EXISTS teachers (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    subjects TEXT,
    assigned_classes TEXT,
    phone VARCHAR(20) NOT NULL,
    base_salary NUMERIC(10, 2) NOT NULL DEFAULT 0,
    incentive NUMERIC(10, 2) DEFAULT 0,
    avatar_color VARCHAR(20),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. SUPPORT STAFF TABLE
CREATE TABLE IF NOT EXISTS staff (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    base_salary NUMERIC(10, 2) NOT NULL DEFAULT 0,
    incentive NUMERIC(10, 2) DEFAULT 0,
    avatar_color VARCHAR(20),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. ADMIN ACCOUNTS TABLE
CREATE TABLE IF NOT EXISTS admins (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    role VARCHAR(50) NOT NULL,
    phone VARCHAR(20),
    avatar_color VARCHAR(20),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. FEE PAYMENTS LEDGER TABLE
CREATE TABLE IF NOT EXISTS payments (
    id VARCHAR(50) PRIMARY KEY,
    student_id VARCHAR(50) REFERENCES students(id) ON DELETE CASCADE,
    month VARCHAR(50) NOT NULL,
    amount NUMERIC(10, 2) NOT NULL,
    mode VARCHAR(50) NOT NULL,
    remarks TEXT,
    payment_date VARCHAR(50) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. SALARY PAYOUTS LEDGER TABLE
CREATE TABLE IF NOT EXISTS salary_payouts (
    id VARCHAR(50) PRIMARY KEY,
    recipient_id VARCHAR(50) NOT NULL,
    recipient_type VARCHAR(20) NOT NULL CHECK (recipient_type IN ('teacher', 'staff')),
    month VARCHAR(50) NOT NULL,
    amount NUMERIC(10, 2) NOT NULL,
    mode VARCHAR(50) NOT NULL,
    payout_date VARCHAR(50) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. DAILY ATTENDANCE TABLE
CREATE TABLE IF NOT EXISTS attendance (
    id VARCHAR(50) PRIMARY KEY,
    date DATE NOT NULL,
    student_id VARCHAR(50) REFERENCES students(id) ON DELETE CASCADE,
    status VARCHAR(20) NOT NULL CHECK (status IN ('present', 'absent', 'late', 'excused')),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    CONSTRAINT unique_student_daily_att UNIQUE (date, student_id)
);

-- 9. EXAM RESULTS & MARKS HISTORY TABLE
CREATE TABLE IF NOT EXISTS exam_results (
    id VARCHAR(50) PRIMARY KEY,
    student_id VARCHAR(50) REFERENCES students(id) ON DELETE CASCADE,
    exam_name VARCHAR(255) NOT NULL,
    subject VARCHAR(100) NOT NULL,
    marks_obtained NUMERIC(5, 2) NOT NULL,
    max_marks NUMERIC(5, 2) NOT NULL,
    grade VARCHAR(5),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =========================================================
-- INDEXES FOR PERFORMANCE OPTIMIZATION
-- =========================================================
CREATE INDEX IF NOT EXISTS idx_students_cls ON students(cls);
CREATE INDEX IF NOT EXISTS idx_payments_student_id ON payments(student_id);
CREATE INDEX IF NOT EXISTS idx_payments_month ON payments(month);
CREATE INDEX IF NOT EXISTS idx_salary_payouts_recipient ON salary_payouts(recipient_id);
CREATE INDEX IF NOT EXISTS idx_attendance_date ON attendance(date);
CREATE INDEX IF NOT EXISTS idx_exam_results_student ON exam_results(student_id);

-- =========================================================
-- DISABLE RLS OR ALLOW PUBLIC ANONYMOUS ACCESS FOR FRONTEND
-- =========================================================
ALTER TABLE coaching_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE students ENABLE ROW LEVEL SECURITY;
ALTER TABLE teachers ENABLE ROW LEVEL SECURITY;
ALTER TABLE staff ENABLE ROW LEVEL SECURITY;
ALTER TABLE admins ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE salary_payouts ENABLE ROW LEVEL SECURITY;
ALTER TABLE attendance ENABLE ROW LEVEL SECURITY;
ALTER TABLE exam_results ENABLE ROW LEVEL SECURITY;

-- Create Permissive Policies for Web Application Access
CREATE POLICY "Public Read/Write coaching_settings" ON coaching_settings FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public Read/Write students" ON students FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public Read/Write teachers" ON teachers FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public Read/Write staff" ON staff FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public Read/Write admins" ON admins FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public Read/Write payments" ON payments FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public Read/Write salary_payouts" ON salary_payouts FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public Read/Write attendance" ON attendance FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public Read/Write exam_results" ON exam_results FOR ALL USING (true) WITH CHECK (true);

-- =========================================================
-- INITIAL SEED DATA
-- =========================================================
INSERT INTO coaching_settings (id, coaching_name, access_key)
VALUES ('coaching_main', 'Elite Classes', '987654')
ON CONFLICT (id) DO UPDATE SET access_key = EXCLUDED.access_key;

INSERT INTO students (id, name, cls, parent_name, phone, monthly_fee, fee_due_day, scholarship_pct, subjects, date_of_admission, school_name, avatar_color)
VALUES
('s1', 'Aarav Sharma', 'Class 5', 'Rajesh Sharma', '9876543210', 1500, 10, 0, 'Mathematics, Science, English', '2025-04-01', 'St. Xavier School', '#2563eb'),
('s2', 'Ananya Singh', 'Class 5', 'Vikram Singh', '9876543211', 1500, 10, 10, 'Mathematics, Science, English', '2025-04-02', 'Delhi Public School', '#8b5cf6'),
('s3', 'Rohan Gupta', 'Class 8', 'Suresh Gupta', '9876543212', 2000, 5, 0, 'Mathematics, Science', '2025-04-05', 'Kendriya Vidyalaya', '#10b981'),
('s4', 'Ishita Patel', 'LKG', 'Amit Patel', '9876543213', 1200, 1, 0, 'Rhymes, Drawing, English', '2025-04-10', 'Little Tots Play School', '#ec4899'),
('s5', 'Karan Mehta', 'Class 10', 'Pankaj Mehta', '9876543214', 3000, 10, 25, 'Mathematics, Physics, Chemistry', '2025-03-15', 'Modern High School', '#f59e0b')
ON CONFLICT (id) DO NOTHING;

INSERT INTO teachers (id, name, subjects, assigned_classes, phone, base_salary, incentive, avatar_color)
VALUES
('t1', 'Dr. Ramesh Kumar', 'Mathematics, Physics', 'Class 8, Class 9, Class 10', '9811223344', 35000, 2500, '#2563eb'),
('t2', 'Sunita Rao', 'Science, Biology', 'Class 5, Class 6, Class 7', '9822334455', 28000, 1500, '#8b5cf6'),
('t3', 'Vikram Das', 'English, Social Studies', 'Class 6, Class 7, Class 8', '9833445566', 25000, 1000, '#10b981')
ON CONFLICT (id) DO NOTHING;

INSERT INTO staff (id, name, role, phone, base_salary, incentive, avatar_color)
VALUES
('st1', 'Rajesh Sharma', 'Office Accountant', '9911223344', 20000, 1000, '#06b6d4'),
('st2', 'Sunil Verma', 'Lab Assistant & Maintenance', '9922334455', 15000, 500, '#f59e0b')
ON CONFLICT (id) DO NOTHING;

INSERT INTO admins (id, name, email, role, phone, avatar_color)
VALUES
('a1', 'Elite Admin Main', 'admin@eliteclasses.com', 'Super Admin', '9800000000', '#2563eb')
ON CONFLICT (id) DO NOTHING;
