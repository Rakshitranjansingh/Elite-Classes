-- =========================================================
-- ELITE CLASSES — MIGRATION 009: REMARK STATUS WORKFLOW (inReview / resolved)
-- Allows teachers to submit remarks with default status 'inReview'.
-- Administrators can mark remarks as 'resolved', which stops them from displaying
-- on the faculty portal while maintaining an audit trail in the admin student profile.
-- =========================================================

ALTER TABLE student_remarks ADD COLUMN IF NOT EXISTS status VARCHAR(50) DEFAULT 'inReview';
ALTER TABLE student_remarks ADD COLUMN IF NOT EXISTS resolved_at TIMESTAMPTZ;
ALTER TABLE student_remarks ADD COLUMN IF NOT EXISTS resolution_notes TEXT;

CREATE INDEX IF NOT EXISTS idx_student_remarks_status ON student_remarks(status);
