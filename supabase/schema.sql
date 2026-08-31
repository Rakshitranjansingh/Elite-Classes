-- =========================================================
-- ELITE CLASSES — SUPABASE RELATIONAL DATABASE SCHEMA & MIGRATION
-- 100% Idempotent Script: Safe to click Run multiple times!
-- =========================================================

-- 1. COACHING SETTINGS & SECURITY TABLE
CREATE TABLE IF NOT EXISTS coaching_settings (
    id VARCHAR(50) PRIMARY KEY DEFAULT 'coaching_main',
    coaching_name VARCHAR(255) NOT NULL DEFAULT 'Elite Classes',
    access_key VARCHAR(50) NOT NULL DEFAULT '987654',
    student_access_key VARCHAR(50) NOT NULL DEFAULT '123456',
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Ensure column exists if table was created in an earlier migration
ALTER TABLE coaching_settings 
ADD COLUMN IF NOT EXISTS student_access_key VARCHAR(50) NOT NULL DEFAULT '123456';

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

-- 10. NOTICES TICKER & ANNOUNCEMENTS TABLE
CREATE TABLE IF NOT EXISTS notices (
    id VARCHAR(50) PRIMARY KEY,
    content TEXT NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 11. COURSES & STUDY MATERIAL TABLE
CREATE TABLE IF NOT EXISTS courses (
    id VARCHAR(50) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    cls VARCHAR(50) NOT NULL,
    subject VARCHAR(100) NOT NULL,
    instructor VARCHAR(255),
    description TEXT,
    lessons_count INT DEFAULT 10,
    resources_json JSONB,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 12. TEST SERIES & MOCK EXAMS TABLE
CREATE TABLE IF NOT EXISTS test_series (
    id VARCHAR(50) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    cls VARCHAR(50) NOT NULL,
    subject VARCHAR(100) NOT NULL,
    duration_mins INT DEFAULT 45,
    total_marks NUMERIC(5, 2) DEFAULT 100,
    questions_count INT DEFAULT 25,
    test_date VARCHAR(50),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 13. STUDENT STATS & ACTIVITY PERSISTENCE TABLE
CREATE TABLE IF NOT EXISTS student_stats (
    id VARCHAR(50) PRIMARY KEY,
    student_id VARCHAR(50) REFERENCES students(id) ON DELETE CASCADE,
    stats_json JSONB NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW()
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
CREATE INDEX IF NOT EXISTS idx_courses_cls ON courses(cls);
CREATE INDEX IF NOT EXISTS idx_test_series_cls ON test_series(cls);
CREATE INDEX IF NOT EXISTS idx_student_stats_student ON student_stats(student_id);

-- =========================================================
-- ENABLE RLS & CREATE POLICIES (SAFE FOR MULTIPLE RE-RUNS)
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
ALTER TABLE notices ENABLE ROW LEVEL SECURITY;
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE test_series ENABLE ROW LEVEL SECURITY;
ALTER TABLE student_stats ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if re-running script to avoid duplicate policy error
DROP POLICY IF EXISTS "Public Read/Write coaching_settings" ON coaching_settings;
DROP POLICY IF EXISTS "Public Read/Write students" ON students;
DROP POLICY IF EXISTS "Public Read/Write teachers" ON teachers;
DROP POLICY IF EXISTS "Public Read/Write staff" ON staff;
DROP POLICY IF EXISTS "Public Read/Write admins" ON admins;
DROP POLICY IF EXISTS "Public Read/Write payments" ON payments;
DROP POLICY IF EXISTS "Public Read/Write salary_payouts" ON salary_payouts;
DROP POLICY IF EXISTS "Public Read/Write attendance" ON attendance;
DROP POLICY IF EXISTS "Public Read/Write exam_results" ON exam_results;
DROP POLICY IF EXISTS "Public Read/Write notices" ON notices;
DROP POLICY IF EXISTS "Public Read/Write courses" ON courses;
DROP POLICY IF EXISTS "Public Read/Write test_series" ON test_series;
DROP POLICY IF EXISTS "Public Read/Write student_stats" ON student_stats;

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
CREATE POLICY "Public Read/Write notices" ON notices FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public Read/Write courses" ON courses FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public Read/Write test_series" ON test_series FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public Read/Write student_stats" ON student_stats FOR ALL USING (true) WITH CHECK (true);

-- =========================================================
-- INITIAL SEED DATA (SAFE FOR MULTIPLE RE-RUNS)
-- =========================================================
INSERT INTO coaching_settings (id, coaching_name, access_key, student_access_key)
VALUES ('coaching_main', 'Elite Classes', '987654', '123456')
ON CONFLICT (id) DO UPDATE SET access_key = EXCLUDED.access_key, student_access_key = EXCLUDED.student_access_key;

INSERT INTO notices (id, content, is_active)
VALUES 
('n1', '📢 Admissions open for Academic Session 2025-26 • Mid-Term Examinations begin next week!', true),
('n2', '🏆 Monthly Science & Mathematics Talent Hunt Olympiad results published on student portal.', true),
('n3', '⏰ Special doubt clearing sessions scheduled every Saturday for Class 8 to 10.', true)
ON CONFLICT (id) DO NOTHING;

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

INSERT INTO courses (id, title, cls, subject, instructor, description, lessons_count)
VALUES
('c1', 'Class 5 Mathematics Masterclass', 'Class 5', 'Mathematics', 'Sunita Rao', 'Fractions, Decimals, Basic Geometry & Problem Solving', 12),
('c2', 'Class 5 General Science & Experiments', 'Class 5', 'Science', 'Sunita Rao', 'Plants, Animals, Human Body & Simple Machines', 10),
('c3', 'Class 8 Advanced Algebra & Geometry', 'Class 8', 'Mathematics', 'Dr. Ramesh Kumar', 'Linear Equations, Triangles, Quadrilaterals & Exponents', 15),
('c4', 'Class 8 Fundamentals of Physics & Chemistry', 'Class 8', 'Science', 'Dr. Ramesh Kumar', 'Force, Pressure, Chemical Reactions & Combustion', 14),
('c5', 'Class 10 CBSE Board Physics & Mathematics', 'Class 10', 'Mathematics', 'Dr. Ramesh Kumar', 'Quadratic Equations, Trigonometry, Light & Electricity', 20)
ON CONFLICT (id) DO NOTHING;

INSERT INTO test_series (id, title, cls, subject, duration_mins, total_marks, questions_count, test_date)
VALUES
('ts1', 'Class 5 Maths Monthly Olympiad Mock', 'Class 5', 'Mathematics', 45, 50, 25, '2025-09-05'),
('ts2', 'Class 5 Science Chapter-wise Assessment', 'Class 5', 'Science', 30, 40, 20, '2025-09-10'),
('ts3', 'Class 8 Science Mid-Term Mock Exam', 'Class 8', 'Science', 60, 100, 40, '2025-09-08'),
('ts4', 'Class 10 Physics Electricity & Magnetism Test', 'Class 10', 'Physics', 60, 100, 35, '2025-09-12')
ON CONFLICT (id) DO NOTHING;


