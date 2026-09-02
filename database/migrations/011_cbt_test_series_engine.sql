-- =========================================================
-- ELITE CLASSES — MIGRATION 011: CBT TEST SERIES & LEADERBOARD ENGINE
-- Comprehensive Computer-Based Test (CBT) Series schema:
-- 1. test_series: Test metadata, duration, negative marking, instructions
-- 2. test_questions: Question bank with options, answers & marks
-- 3. test_submissions: Student test attempts, scores & leaderboards
-- =========================================================

-- 1. TEST SERIES TABLE
CREATE TABLE IF NOT EXISTS test_series (
    id VARCHAR(50) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    cls VARCHAR(50) NOT NULL,
    subject VARCHAR(100) NOT NULL,
    duration_mins INT DEFAULT 45,
    total_marks NUMERIC(5, 2) DEFAULT 100,
    passing_marks NUMERIC(5, 2) DEFAULT 40,
    negative_marking NUMERIC(3, 2) DEFAULT 0.00,
    questions_count INT DEFAULT 0,
    status VARCHAR(50) DEFAULT 'published', -- 'draft', 'published', 'archived'
    test_date VARCHAR(50),
    instructions TEXT,
    created_by VARCHAR(50),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. TEST QUESTIONS TABLE
CREATE TABLE IF NOT EXISTS test_questions (
    id VARCHAR(50) PRIMARY KEY,
    test_id VARCHAR(50) REFERENCES test_series(id) ON DELETE CASCADE,
    question_number INT NOT NULL,
    question_text TEXT NOT NULL,
    question_type VARCHAR(50) DEFAULT 'mcq', -- 'mcq', 'true_false', 'subjective'
    option_a TEXT NOT NULL,
    option_b TEXT NOT NULL,
    option_c TEXT,
    option_d TEXT,
    correct_option VARCHAR(10) NOT NULL, -- 'A', 'B', 'C', 'D'
    marks NUMERIC(4, 2) DEFAULT 4.00,
    negative_marks NUMERIC(4, 2) DEFAULT 1.00,
    explanation TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. TEST SUBMISSIONS & LEADERBOARD TABLE
CREATE TABLE IF NOT EXISTS test_submissions (
    id VARCHAR(50) PRIMARY KEY,
    test_id VARCHAR(50) REFERENCES test_series(id) ON DELETE CASCADE,
    student_id VARCHAR(50) REFERENCES students(id) ON DELETE CASCADE,
    student_name VARCHAR(255),
    cls VARCHAR(50),
    score NUMERIC(5, 2) NOT NULL DEFAULT 0,
    total_marks NUMERIC(5, 2) NOT NULL DEFAULT 100,
    percentage NUMERIC(5, 2) NOT NULL DEFAULT 0,
    accuracy_pct NUMERIC(5, 2) DEFAULT 0,
    correct_count INT DEFAULT 0,
    incorrect_count INT DEFAULT 0,
    unattempted_count INT DEFAULT 0,
    time_taken_seconds INT DEFAULT 0,
    rank INT DEFAULT 1,
    status VARCHAR(50) DEFAULT 'completed', -- 'in_progress', 'completed'
    answers_json JSONB, -- Map of question_id/number -> selected option
    submitted_at TIMESTAMPTZ DEFAULT NOW(),
    CONSTRAINT unique_student_test_submission UNIQUE (test_id, student_id)
);

-- INDEXES FOR FAST LEADERBOARD & CLASS FILTERING
CREATE INDEX IF NOT EXISTS idx_test_series_cls ON test_series(cls);
CREATE INDEX IF NOT EXISTS idx_test_series_subject ON test_series(subject);
CREATE INDEX IF NOT EXISTS idx_test_series_status ON test_series(status);
CREATE INDEX IF NOT EXISTS idx_test_questions_test_id ON test_questions(test_id);
CREATE INDEX IF NOT EXISTS idx_test_submissions_test_id ON test_submissions(test_id);
CREATE INDEX IF NOT EXISTS idx_test_submissions_student_id ON test_submissions(student_id);
CREATE INDEX IF NOT EXISTS idx_test_submissions_score ON test_submissions(test_id, score DESC);

-- ENABLE ROW LEVEL SECURITY
ALTER TABLE test_series ENABLE ROW LEVEL SECURITY;
ALTER TABLE test_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE test_submissions ENABLE ROW LEVEL SECURITY;

-- IDEMPOTENT POLICIES
DROP POLICY IF EXISTS "Public and authenticated can view published test series" ON test_series;
CREATE POLICY "Public and authenticated can view published test series" ON test_series FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow all modifications on test series" ON test_series;
CREATE POLICY "Allow all modifications on test series" ON test_series FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Public and authenticated can view test questions" ON test_questions;
CREATE POLICY "Public and authenticated can view test questions" ON test_questions FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow all modifications on test questions" ON test_questions;
CREATE POLICY "Allow all modifications on test questions" ON test_questions FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Public and authenticated can view test submissions" ON test_submissions;
CREATE POLICY "Public and authenticated can view test submissions" ON test_submissions FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow all modifications on test submissions" ON test_submissions;
CREATE POLICY "Allow all modifications on test submissions" ON test_submissions FOR ALL USING (true) WITH CHECK (true);
