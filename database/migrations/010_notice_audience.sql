-- =========================================================
-- ELITE CLASSES — MIGRATION 010: NOTICE TARGET AUDIENCE
-- Adds target_audience column ('all', 'students', 'staff')
-- to direct notices to respective portals.
-- =========================================================

ALTER TABLE notices ADD COLUMN IF NOT EXISTS target_audience VARCHAR(50) DEFAULT 'all';
CREATE INDEX IF NOT EXISTS idx_notices_target_audience ON notices(target_audience);
