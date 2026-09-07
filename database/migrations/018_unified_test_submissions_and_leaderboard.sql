-- =====================================================================
-- ELITE CLASSES — MIGRATION 018: UNIFIED TEST SUBMISSIONS & COMBINED LEADERBOARD
-- Enables Cross-Cohort Ranking (Coaching Students + Test Series Subscribers)
-- Introduces Average Score Tracking (avg_score) for Fair Competitive Rankings
-- =====================================================================

-- 1. Remove rigid foreign key on student_id to allow both coaching students & online subscribers
DO $$ 
DECLARE
    r RECORD;
BEGIN
    FOR r IN (
        SELECT constraint_name 
        FROM information_schema.table_constraints 
        WHERE table_name = 'test_submissions' 
          AND constraint_type = 'FOREIGN KEY'
          AND constraint_name LIKE '%student_id%'
    ) LOOP
        EXECUTE 'ALTER TABLE test_submissions DROP CONSTRAINT IF EXISTS ' || quote_ident(r.constraint_name);
    END LOOP;
END $$;

-- 2. Add Cohort & Average Marks Columns
ALTER TABLE test_submissions ADD COLUMN IF NOT EXISTS user_type VARCHAR(20) DEFAULT 'student'; -- 'student' | 'subscriber'
ALTER TABLE test_submissions ADD COLUMN IF NOT EXISTS avg_score NUMERIC(5, 2) DEFAULT 0;
ALTER TABLE test_submissions ADD COLUMN IF NOT EXISTS total_attempts INT DEFAULT 1;
ALTER TABLE test_submissions ADD COLUMN IF NOT EXISTS avg_accuracy_pct NUMERIC(5, 2) DEFAULT 0;
ALTER TABLE test_submissions ADD COLUMN IF NOT EXISTS subject VARCHAR(100);

-- 3. Backfill initial avg_score and total_attempts for existing historical submissions
UPDATE test_submissions 
SET avg_score = score 
WHERE avg_score IS NULL OR avg_score = 0;

UPDATE test_submissions 
SET total_attempts = 1 
WHERE total_attempts IS NULL OR total_attempts = 0;

-- 4. Fast Indexes for Dynamic Cross-Cohort Leaderboard Aggregation
CREATE INDEX IF NOT EXISTS idx_test_submissions_avg_score ON test_submissions(test_id, avg_score DESC, score DESC, time_taken_seconds ASC);
CREATE INDEX IF NOT EXISTS idx_test_submissions_user_type ON test_submissions(user_type);
CREATE INDEX IF NOT EXISTS idx_test_submissions_subject ON test_submissions(subject);
CREATE INDEX IF NOT EXISTS idx_test_submissions_cls_subj ON test_submissions(cls, subject);

-- 5. Migrate any existing records from testseries_subscriber_results into test_submissions
DO $$
BEGIN
    IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'testseries_subscriber_results') THEN
        INSERT INTO test_submissions (
            id,
            test_id,
            student_id,
            student_name,
            cls,
            subject,
            score,
            total_marks,
            percentage,
            accuracy_pct,
            avg_score,
            total_attempts,
            correct_count,
            incorrect_count,
            unattempted_count,
            time_taken_seconds,
            user_type,
            answers_json,
            submitted_at
        )
        SELECT 
            r.id,
            r.test_id,
            r.subscriber_id,
            COALESCE(s.name, 'Test Series User'),
            COALESCE(r.cls, 'Class 10'),
            r.subject,
            r.score,
            r.total_marks,
            CASE WHEN r.total_marks > 0 THEN ROUND((r.score / r.total_marks) * 100, 2) ELSE 0 END,
            CASE WHEN (r.correct_count + r.wrong_count) > 0 THEN ROUND((r.correct_count::numeric / (r.correct_count + r.wrong_count)) * 100, 2) ELSE 0 END,
            r.score, -- initial avg_score
            1,       -- initial total_attempts
            r.correct_count,
            r.wrong_count,
            r.unattempted_count,
            r.time_taken_seconds,
            'subscriber',
            r.answers_payload,
            r.submitted_at
        FROM testseries_subscriber_results r
        LEFT JOIN testseries_subscribers s ON s.id = r.subscriber_id
        ON CONFLICT (test_id, student_id) DO UPDATE SET
            score = EXCLUDED.score,
            avg_score = EXCLUDED.avg_score,
            total_attempts = EXCLUDED.total_attempts,
            accuracy_pct = EXCLUDED.accuracy_pct,
            time_taken_seconds = EXCLUDED.time_taken_seconds,
            answers_json = EXCLUDED.answers_json,
            user_type = 'subscriber',
            submitted_at = EXCLUDED.submitted_at;
    END IF;
END $$;
