-- =========================================================
-- ELITE CLASSES ERP — RELEASE v2.0.0 (CONSOLIDATED PRODUCTION BUNDLE)
-- Features Included:
--  1. Unified Authentication Gateway (WhatsApp Number + PIN)
--  2. Dynamic Classes & Subjects Relational Tables
--  3. Merged Staff & Teaching Faculty with is_teacher Flag
--  4. Email Address Support across Profiles for Google SSO Readiness
--  5. Full Row Level Security (RLS) & Performance Indexes
-- =========================================================

-- 1. COACHING SETTINGS & SECURITY
CREATE TABLE IF NOT EXISTS coaching_settings (
    id VARCHAR(50) PRIMARY KEY DEFAULT 'coaching_main',
    coaching_name VARCHAR(255) NOT NULL DEFAULT 'Elite Classes',
    access_key VARCHAR(50) NOT NULL DEFAULT '987654',
    student_access_key VARCHAR(50) NOT NULL DEFAULT '123456',
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE coaching_settings 
ADD COLUMN IF NOT EXISTS student_access_key VARCHAR(50) NOT NULL DEFAULT '123456';

-- 2. ACADEMIC CLASSES TABLE
CREATE TABLE IF NOT EXISTS classes (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    display_order INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. ACADEMIC SUBJECTS TABLE
CREATE TABLE IF NOT EXISTS subjects (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    code VARCHAR(20),
    description TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. CLASS TO SUBJECTS MAPPING TABLE
CREATE TABLE IF NOT EXISTS class_subjects (
    id VARCHAR(50) PRIMARY KEY,
    class_id VARCHAR(50) REFERENCES classes(id) ON DELETE CASCADE,
    subject_id VARCHAR(50) REFERENCES subjects(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    CONSTRAINT unique_class_subject UNIQUE (class_id, subject_id)
);

-- 5. STUDENTS TABLE
CREATE TABLE IF NOT EXISTS students (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    cls VARCHAR(50) NOT NULL,
    parent_name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    pin VARCHAR(50) DEFAULT '123456',
    monthly_fee NUMERIC(10, 2) NOT NULL DEFAULT 0,
    fee_due_day INT DEFAULT 10,
    scholarship_pct NUMERIC(5, 2) DEFAULT 0,
    subjects TEXT,
    date_of_admission DATE,
    school_name VARCHAR(255),
    avatar_color VARCHAR(20),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE students ADD COLUMN IF NOT EXISTS email VARCHAR(255);
ALTER TABLE students ADD COLUMN IF NOT EXISTS pin VARCHAR(50) DEFAULT '123456';

-- 6. UNIFIED STAFF & FACULTY TABLE
CREATE TABLE IF NOT EXISTS staff (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    is_teacher BOOLEAN NOT NULL DEFAULT FALSE,
    role VARCHAR(255),
    subjects TEXT,
    assigned_classes TEXT,
    phone VARCHAR(20) NOT NULL,
    pin VARCHAR(50) DEFAULT '123456',
    base_salary NUMERIC(10, 2) NOT NULL DEFAULT 0,
    incentive NUMERIC(10, 2) DEFAULT 0,
    avatar_color VARCHAR(20),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE staff ADD COLUMN IF NOT EXISTS email VARCHAR(255);
ALTER TABLE staff ADD COLUMN IF NOT EXISTS is_teacher BOOLEAN NOT NULL DEFAULT FALSE;
ALTER TABLE staff ADD COLUMN IF NOT EXISTS subjects TEXT;
ALTER TABLE staff ADD COLUMN IF NOT EXISTS assigned_classes TEXT;
ALTER TABLE staff ADD COLUMN IF NOT EXISTS pin VARCHAR(50) DEFAULT '123456';

-- 7. ADMIN ACCOUNTS TABLE
CREATE TABLE IF NOT EXISTS admins (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    role VARCHAR(50) NOT NULL,
    phone VARCHAR(20),
    pin VARCHAR(50) DEFAULT '987654',
    avatar_color VARCHAR(20),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE admins ADD COLUMN IF NOT EXISTS email VARCHAR(255);
ALTER TABLE admins ADD COLUMN IF NOT EXISTS pin VARCHAR(50) DEFAULT '987654';

-- 8. FEE PAYMENTS LEDGER
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

-- 9. SALARY PAYOUTS LEDGER
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

-- 10. DAILY ATTENDANCE
CREATE TABLE IF NOT EXISTS attendance (
    id VARCHAR(50) PRIMARY KEY,
    date DATE NOT NULL,
    student_id VARCHAR(50) REFERENCES students(id) ON DELETE CASCADE,
    status VARCHAR(20) NOT NULL CHECK (status IN ('present', 'absent', 'late', 'excused')),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    CONSTRAINT unique_student_daily_att UNIQUE (date, student_id)
);

-- 11. EXAM RESULTS & MARKS
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

-- 12. NOTICES TICKER
CREATE TABLE IF NOT EXISTS notices (
    id VARCHAR(50) PRIMARY KEY,
    content TEXT NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 13. COURSES & STUDY MATERIAL
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

-- 14. TEST SERIES & CBT EXAMS
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

-- 15. STUDENT STATS & PERSISTENCE
CREATE TABLE IF NOT EXISTS student_stats (
    id VARCHAR(50) PRIMARY KEY,
    student_id VARCHAR(50) REFERENCES students(id) ON DELETE CASCADE,
    stats_json JSONB NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =========================================================
-- INDEXES FOR PERFORMANCE OPTIMIZATION
-- =========================================================
CREATE INDEX IF NOT EXISTS idx_classes_name ON classes(name);
CREATE INDEX IF NOT EXISTS idx_subjects_name ON subjects(name);
CREATE INDEX IF NOT EXISTS idx_students_phone ON students(phone);
CREATE INDEX IF NOT EXISTS idx_students_email ON students(email);
CREATE INDEX IF NOT EXISTS idx_staff_phone ON staff(phone);
CREATE INDEX IF NOT EXISTS idx_staff_email ON staff(email);
CREATE INDEX IF NOT EXISTS idx_staff_is_teacher ON staff(is_teacher);
CREATE INDEX IF NOT EXISTS idx_admins_phone ON admins(phone);
CREATE INDEX IF NOT EXISTS idx_admins_email ON admins(email);
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
-- ROW LEVEL SECURITY POLICIES
-- =========================================================
ALTER TABLE coaching_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE classes ENABLE ROW LEVEL SECURITY;
ALTER TABLE subjects ENABLE ROW LEVEL SECURITY;
ALTER TABLE class_subjects ENABLE ROW LEVEL SECURITY;
ALTER TABLE students ENABLE ROW LEVEL SECURITY;
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

DROP POLICY IF EXISTS "Public Read/Write coaching_settings" ON coaching_settings;
DROP POLICY IF EXISTS "Public Read/Write classes" ON classes;
DROP POLICY IF EXISTS "Public Read/Write subjects" ON subjects;
DROP POLICY IF EXISTS "Public Read/Write class_subjects" ON class_subjects;
DROP POLICY IF EXISTS "Public Read/Write students" ON students;
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

CREATE POLICY "Public Read/Write coaching_settings" ON coaching_settings FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public Read/Write classes" ON classes FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public Read/Write subjects" ON subjects FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public Read/Write class_subjects" ON class_subjects FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public Read/Write students" ON students FOR ALL USING (true) WITH CHECK (true);
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
-- SEED DATA
-- =========================================================
INSERT INTO coaching_settings (id, coaching_name, access_key, student_access_key)
VALUES ('coaching_main', 'Elite Classes', '987654', '123456')
ON CONFLICT (id) DO UPDATE SET access_key = EXCLUDED.access_key, student_access_key = EXCLUDED.student_access_key;

INSERT INTO classes (id, name, display_order, is_active)
VALUES
('c_lkg', 'LKG', 1, true),
('c_ukg', 'UKG', 2, true),
('c_1', 'Class 1', 3, true),
('c_2', 'Class 2', 4, true),
('c_3', 'Class 3', 5, true),
('c_4', 'Class 4', 6, true),
('c_5', 'Class 5', 7, true),
('c_6', 'Class 6', 8, true),
('c_7', 'Class 7', 9, true),
('c_8', 'Class 8', 10, true),
('c_9', 'Class 9', 11, true),
('c_10', 'Class 10', 12, true)
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, display_order = EXCLUDED.display_order;

INSERT INTO subjects (id, name, code, description, is_active)
VALUES
('sub_math', 'Mathematics', 'MATH', 'Core Mathematics & Quantitative Aptitude', true),
('sub_sci', 'Science', 'SCI', 'General Science & Environmental Studies', true),
('sub_phy', 'Physics', 'PHY', 'Mechanics, Optics, Electricity & Modern Physics', true),
('sub_chem', 'Chemistry', 'CHEM', 'Organic, Inorganic & Physical Chemistry', true),
('sub_bio', 'Biology', 'BIO', 'Botany, Zoology & Human Physiology', true),
('sub_eng', 'English', 'ENG', 'Grammar, Literature & Creative Writing', true),
('sub_sst', 'Social Studies', 'SST', 'History, Geography, Civics & Economics', true),
('sub_hin', 'Hindi', 'HIN', 'Hindi Vyakaran & Sahitya', true),
('sub_cs', 'Computer Science', 'CS', 'Basics of Computing & Programming Concepts', true),
('sub_gk', 'General Knowledge', 'GK', 'Current Affairs & Logical Reasoning', true)
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, code = EXCLUDED.code;

INSERT INTO notices (id, content, is_active)
VALUES 
('n1', '📢 Admissions open for Academic Session 2025-26 • Mid-Term Examinations begin next week!', true),
('n2', '🏆 Monthly Science & Mathematics Talent Hunt Olympiad results published on student portal.', true),
('n3', '⏰ Special doubt clearing sessions scheduled every Saturday for Class 8 to 10.', true)
ON CONFLICT (id) DO NOTHING;

INSERT INTO students (id, name, email, cls, parent_name, phone, pin, monthly_fee, fee_due_day, scholarship_pct, subjects, date_of_admission, school_name, avatar_color)
VALUES
('s1', 'Aarav Sharma', 'aarav.sharma@gmail.com', 'Class 5', 'Rajesh Sharma', '9876543210', '123456', 1500, 10, 0, 'Mathematics, Science, English', '2025-04-01', 'St. Xavier School', '#2563eb'),
('s2', 'Ananya Singh', 'ananya.singh@gmail.com', 'Class 5', 'Vikram Singh', '9876543211', '123456', 1500, 10, 10, 'Mathematics, Science, English', '2025-04-02', 'Delhi Public School', '#8b5cf6'),
('s3', 'Rohan Gupta', 'rohan.gupta@gmail.com', 'Class 8', 'Suresh Gupta', '9876543212', '123456', 2000, 5, 0, 'Mathematics, Science', '2025-04-05', 'Kendriya Vidyalaya', '#10b981'),
('s4', 'Ishita Patel', 'ishita.patel@gmail.com', 'LKG', 'Amit Patel', '9876543213', '123456', 1200, 1, 0, 'Rhymes, Drawing, English', '2025-04-10', 'Little Tots Play School', '#ec4899'),
('s5', 'Karan Mehta', 'karan.mehta@gmail.com', 'Class 10', 'Pankaj Mehta', '9876543214', '123456', 3000, 10, 25, 'Mathematics, Physics, Chemistry', '2025-03-15', 'Modern High School', '#f59e0b')
ON CONFLICT (id) DO UPDATE SET email = EXCLUDED.email, pin = EXCLUDED.pin, phone = EXCLUDED.phone;

INSERT INTO staff (id, name, email, is_teacher, role, subjects, assigned_classes, phone, pin, base_salary, incentive, avatar_color)
VALUES
('t1', 'Dr. Ramesh Kumar', 'ramesh.kumar@eliteclasses.com', true, 'Mathematics Faculty', 'Mathematics, Physics', 'Class 8, Class 9, Class 10', '9811223344', '123456', 35000, 2500, '#2563eb'),
('t2', 'Sunita Rao', 'sunita.rao@eliteclasses.com', true, 'Science Faculty', 'Science, Biology', 'Class 5, Class 6, Class 7', '9822334455', '123456', 28000, 1500, '#8b5cf6'),
('t3', 'Vikram Das', 'vikram.das@eliteclasses.com', true, 'Humanities Faculty', 'English, Social Studies', 'Class 6, Class 7, Class 8', '9833445566', '123456', 25000, 1000, '#10b981'),
('st1', 'Rajesh Sharma', 'rajesh.accountant@eliteclasses.com', false, 'Office Accountant', null, null, '9911223344', '123456', 20000, 1000, '#06b6d4'),
('st2', 'Sunil Verma', 'sunil.maintenance@eliteclasses.com', false, 'Lab Assistant & Maintenance', null, null, '9922334455', '123456', 15000, 500, '#f59e0b')
ON CONFLICT (id) DO UPDATE SET 
    email = EXCLUDED.email,
    is_teacher = EXCLUDED.is_teacher, 
    role = EXCLUDED.role, 
    subjects = EXCLUDED.subjects, 
    assigned_classes = EXCLUDED.assigned_classes, 
    pin = EXCLUDED.pin, 
    phone = EXCLUDED.phone;

INSERT INTO admins (id, name, email, role, phone, pin, avatar_color)
VALUES
('a1', 'Elite Admin Main', 'admin@eliteclasses.com', 'Super Admin', '9800000000', '987654', '#2563eb')
ON CONFLICT (id) DO UPDATE SET email = EXCLUDED.email, pin = EXCLUDED.pin, phone = EXCLUDED.phone;
