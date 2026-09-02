-- =========================================================
-- MIGRATION 001: BASE DATABASE SCHEMA
-- Description: Core tables for settings, students, staff, payments, attendance, notices, courses, tests
-- =========================================================

-- 1. COACHING SETTINGS
CREATE TABLE IF NOT EXISTS coaching_settings (
    id VARCHAR(50) PRIMARY KEY DEFAULT 'coaching_main',
    coaching_name VARCHAR(255) NOT NULL DEFAULT 'Elite Classes',
    access_key VARCHAR(50) NOT NULL DEFAULT '987654',
    student_access_key VARCHAR(50) NOT NULL DEFAULT '123456',
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

-- 3. STAFF TABLE
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

-- 4. ADMINS TABLE
CREATE TABLE IF NOT EXISTS admins (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    role VARCHAR(50) NOT NULL,
    phone VARCHAR(20),
    avatar_color VARCHAR(20),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. FEE PAYMENTS
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

-- 6. SALARY PAYOUTS
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

-- 7. ATTENDANCE
CREATE TABLE IF NOT EXISTS attendance (
    id VARCHAR(50) PRIMARY KEY,
    date DATE NOT NULL,
    student_id VARCHAR(50) REFERENCES students(id) ON DELETE CASCADE,
    status VARCHAR(20) NOT NULL CHECK (status IN ('present', 'absent', 'late', 'excused')),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    CONSTRAINT unique_student_daily_att UNIQUE (date, student_id)
);

-- 8. EXAM RESULTS
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

-- 9. NOTICES
CREATE TABLE IF NOT EXISTS notices (
    id VARCHAR(50) PRIMARY KEY,
    content TEXT NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 10. COURSES
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

-- 11. TEST SERIES
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

-- 12. STUDENT STATS
CREATE TABLE IF NOT EXISTS student_stats (
    id VARCHAR(50) PRIMARY KEY,
    student_id VARCHAR(50) REFERENCES students(id) ON DELETE CASCADE,
    stats_json JSONB NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);
