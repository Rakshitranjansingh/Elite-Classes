-- =========================================================================
-- MIGRATION 017: SEED CLASS 10 MATHEMATICS ASSESSMENTS INTO TEST_SERIES
-- Seeds all 14 Class 10 Mathematics assessments into the test_series table:
-- - Chapter 1: Real Numbers (published / active with diagrams)
-- - Chapters 2-14: Inactive by default for progressive activation by admin
-- =========================================================================

-- 1. ENSURE TEST_SERIES TABLE EXISTS
CREATE TABLE IF NOT EXISTS test_series (
    id VARCHAR(50) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    cls VARCHAR(50) NOT NULL,
    subject VARCHAR(100) NOT NULL,
    duration_mins INT DEFAULT 90,
    total_marks NUMERIC(5, 2) DEFAULT 400.00,
    passing_marks NUMERIC(5, 2) DEFAULT 160.00,
    negative_marking NUMERIC(3, 2) DEFAULT 1.00,
    questions_count INT DEFAULT 100,
    status VARCHAR(50) DEFAULT 'published',
    test_date VARCHAR(50),
    instructions TEXT,
    created_by VARCHAR(50),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE test_series ADD COLUMN IF NOT EXISTS duration_mins INT DEFAULT 90;
ALTER TABLE test_series ADD COLUMN IF NOT EXISTS total_marks NUMERIC(5, 2) DEFAULT 400.00;
ALTER TABLE test_series ADD COLUMN IF NOT EXISTS passing_marks NUMERIC(5, 2) DEFAULT 160.00;
ALTER TABLE test_series ADD COLUMN IF NOT EXISTS negative_marking NUMERIC(3, 2) DEFAULT 1.00;
ALTER TABLE test_series ADD COLUMN IF NOT EXISTS questions_count INT DEFAULT 100;
ALTER TABLE test_series ADD COLUMN IF NOT EXISTS instructions TEXT;
ALTER TABLE test_series ADD COLUMN IF NOT EXISTS created_by VARCHAR(50);
ALTER TABLE test_series ADD COLUMN IF NOT EXISTS status VARCHAR(50) DEFAULT 'published';

-- 2. SEED ALL 14 MASTER CHAPTER ASSESSMENTS INTO TEST_SERIES
INSERT INTO test_series (
    id, title, cls, subject, duration_mins, total_marks, passing_marks, negative_marking, questions_count, status, instructions, created_by
) VALUES
('ts_c10_math_ch1', 'Chapter 1: Real Numbers', 'Class 10', 'Mathematics', 90, 400.00, 160.00, 1.00, 100, 'published', 'Single master 100Q assessment covering Class 10 NCERT Mathematics Chapter 1 with diagram support.', 'Mathematics Faculty'),
('ts_c10_math_ch2', 'Chapter 2: Polynomials', 'Class 10', 'Mathematics', 90, 400.00, 160.00, 1.00, 100, 'inactive', 'Single master 100Q assessment covering Class 10 NCERT Mathematics Chapter 2.', 'Mathematics Faculty'),
('ts_c10_math_ch3', 'Chapter 3: Pair of Linear Equations in Two Variables', 'Class 10', 'Mathematics', 90, 400.00, 160.00, 1.00, 100, 'inactive', 'Single master 100Q assessment covering Class 10 NCERT Mathematics Chapter 3.', 'Mathematics Faculty'),
('ts_c10_math_ch4', 'Chapter 4: Quadratic Equations', 'Class 10', 'Mathematics', 90, 400.00, 160.00, 1.00, 100, 'inactive', 'Single master 100Q assessment covering Class 10 NCERT Mathematics Chapter 4.', 'Mathematics Faculty'),
('ts_c10_math_ch5', 'Chapter 5: Arithmetic Progressions', 'Class 10', 'Mathematics', 90, 400.00, 160.00, 1.00, 100, 'inactive', 'Single master 100Q assessment covering Class 10 NCERT Mathematics Chapter 5.', 'Mathematics Faculty'),
('ts_c10_math_ch6', 'Chapter 6: Triangles', 'Class 10', 'Mathematics', 90, 400.00, 160.00, 1.00, 100, 'inactive', 'Single master 100Q assessment covering Class 10 NCERT Mathematics Chapter 6.', 'Mathematics Faculty'),
('ts_c10_math_ch7', 'Chapter 7: Coordinate Geometry', 'Class 10', 'Mathematics', 90, 400.00, 160.00, 1.00, 100, 'inactive', 'Single master 100Q assessment covering Class 10 NCERT Mathematics Chapter 7.', 'Mathematics Faculty'),
('ts_c10_math_ch8', 'Chapter 8: Introduction to Trigonometry', 'Class 10', 'Mathematics', 90, 400.00, 160.00, 1.00, 100, 'inactive', 'Single master 100Q assessment covering Class 10 NCERT Mathematics Chapter 8.', 'Mathematics Faculty'),
('ts_c10_math_ch9', 'Chapter 9: Some Applications of Trigonometry', 'Class 10', 'Mathematics', 90, 400.00, 160.00, 1.00, 100, 'inactive', 'Single master 100Q assessment covering Class 10 NCERT Mathematics Chapter 9.', 'Mathematics Faculty'),
('ts_c10_math_ch10', 'Chapter 10: Circles', 'Class 10', 'Mathematics', 90, 400.00, 160.00, 1.00, 100, 'inactive', 'Single master 100Q assessment covering Class 10 NCERT Mathematics Chapter 10.', 'Mathematics Faculty'),
('ts_c10_math_ch11', 'Chapter 11: Areas Related to Circles', 'Class 10', 'Mathematics', 90, 400.00, 160.00, 1.00, 100, 'inactive', 'Single master 100Q assessment covering Class 10 NCERT Mathematics Chapter 11.', 'Mathematics Faculty'),
('ts_c10_math_ch12', 'Chapter 12: Surface Areas and Volumes', 'Class 10', 'Mathematics', 90, 400.00, 160.00, 1.00, 100, 'inactive', 'Single master 100Q assessment covering Class 10 NCERT Mathematics Chapter 12.', 'Mathematics Faculty'),
('ts_c10_math_ch13', 'Chapter 13: Statistics', 'Class 10', 'Mathematics', 90, 400.00, 160.00, 1.00, 100, 'inactive', 'Single master 100Q assessment covering Class 10 NCERT Mathematics Chapter 13.', 'Mathematics Faculty'),
('ts_c10_math_ch14', 'Chapter 14: Probability', 'Class 10', 'Mathematics', 90, 400.00, 160.00, 1.00, 100, 'inactive', 'Single master 100Q assessment covering Class 10 NCERT Mathematics Chapter 14.', 'Mathematics Faculty')
ON CONFLICT (id) DO UPDATE SET
    title = EXCLUDED.title,
    cls = EXCLUDED.cls,
    subject = EXCLUDED.subject,
    duration_mins = EXCLUDED.duration_mins,
    total_marks = EXCLUDED.total_marks,
    passing_marks = EXCLUDED.passing_marks,
    negative_marking = EXCLUDED.negative_marking,
    questions_count = EXCLUDED.questions_count,
    instructions = EXCLUDED.instructions,
    created_by = EXCLUDED.created_by;
