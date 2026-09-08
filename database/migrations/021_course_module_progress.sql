-- =============================================================================
-- Migration 021: Course Module Progress & Quiz Performance Analytics
-- Elite Classes ERP & LMS
-- Date: 2026-09-07
-- =============================================================================

-- 1. Course Module Progress (Per-module completion, score, and answer payload)
CREATE TABLE IF NOT EXISTS course_module_progress (
    id VARCHAR(100) PRIMARY KEY, -- 'prog_<studentId>_<chapterId>_<moduleId>'
    student_id VARCHAR(50) NOT NULL,
    student_name VARCHAR(100),
    cls VARCHAR(20) NOT NULL DEFAULT 'Class 10',
    subject VARCHAR(50) NOT NULL DEFAULT 'Science',
    chapter_id VARCHAR(50) NOT NULL, -- e.g. 'c10_sci_ch1'
    module_id VARCHAR(20) NOT NULL,  -- e.g. 'm01' ... 'm20'
    module_number INT NOT NULL DEFAULT 1,
    is_completed BOOLEAN NOT NULL DEFAULT false,
    quiz_score INT NOT NULL DEFAULT 0,
    quiz_max_score INT NOT NULL DEFAULT 10,
    accuracy_pct NUMERIC(5,2) NOT NULL DEFAULT 0.00,
    answers_payload JSONB DEFAULT '{}'::jsonb,
    completed_at TIMESTAMPTZ,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Course Chapter Stats (Aggregated completion % and mastery score per chapter)
CREATE TABLE IF NOT EXISTS course_chapter_stats (
    id VARCHAR(100) PRIMARY KEY, -- 'chstats_<studentId>_<chapterId>'
    student_id VARCHAR(50) NOT NULL,
    chapter_id VARCHAR(50) NOT NULL,
    modules_completed INT NOT NULL DEFAULT 0,
    total_modules INT NOT NULL DEFAULT 20,
    completion_percentage NUMERIC(5,2) NOT NULL DEFAULT 0.00,
    total_quiz_score INT NOT NULL DEFAULT 0,
    total_quiz_max INT NOT NULL DEFAULT 200,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. High-Performance Query Indexes
CREATE INDEX IF NOT EXISTS idx_course_mod_prog_student ON course_module_progress(student_id);
CREATE INDEX IF NOT EXISTS idx_course_mod_prog_chap ON course_module_progress(chapter_id);
CREATE INDEX IF NOT EXISTS idx_course_mod_prog_std_chap ON course_module_progress(student_id, chapter_id);
CREATE INDEX IF NOT EXISTS idx_course_chap_stats_std_chap ON course_chapter_stats(student_id, chapter_id);

-- 4. Row Level Security (RLS)
ALTER TABLE course_module_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE course_chapter_stats ENABLE ROW LEVEL SECURITY;

-- Allow students to read and upsert their own progress
DROP POLICY IF EXISTS "Allow public read course_module_progress" ON course_module_progress;
CREATE POLICY "Allow public read course_module_progress" ON course_module_progress
    FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow public insert course_module_progress" ON course_module_progress;
CREATE POLICY "Allow public insert course_module_progress" ON course_module_progress
    FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Allow public update course_module_progress" ON course_module_progress;
CREATE POLICY "Allow public update course_module_progress" ON course_module_progress
    FOR UPDATE USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Allow public read course_chapter_stats" ON course_chapter_stats;
CREATE POLICY "Allow public read course_chapter_stats" ON course_chapter_stats
    FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow public insert course_chapter_stats" ON course_chapter_stats;
CREATE POLICY "Allow public insert course_chapter_stats" ON course_chapter_stats
    FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Allow public update course_chapter_stats" ON course_chapter_stats;
CREATE POLICY "Allow public update course_chapter_stats" ON course_chapter_stats
    FOR UPDATE USING (true) WITH CHECK (true);
