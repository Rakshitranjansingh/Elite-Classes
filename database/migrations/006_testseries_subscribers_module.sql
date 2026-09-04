-- =====================================================================
-- Elite Classes ERP — Migration 006: Dedicated Test Series Subscribers Module
-- Fully isolated module for test series subscribers (₹499/year UPI pass)
-- =====================================================================

-- 1. Create testseries_subscribers table
CREATE TABLE IF NOT EXISTS testseries_subscribers (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    phone TEXT UNIQUE NOT NULL,
    pin TEXT NOT NULL DEFAULT '1234',
    cls TEXT NOT NULL,
    email TEXT,
    tracking_code TEXT,
    plan_name TEXT DEFAULT 'Annual CBT Test Series Pass',
    plan_amount NUMERIC(10,2) DEFAULT 499.00,
    payment_method TEXT DEFAULT 'UPI',
    payment_ref TEXT,
    status TEXT DEFAULT 'pending_verification', -- 'pending_verification', 'active', 'suspended', 'expired', 'converted_to_student'
    valid_until DATE,
    activated_at TIMESTAMPTZ,
    activated_by TEXT,
    converted_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Create testseries_subscriber_results table (isolated attempts and evaluations)
CREATE TABLE IF NOT EXISTS testseries_subscriber_results (
    id TEXT PRIMARY KEY,
    subscriber_id TEXT NOT NULL REFERENCES testseries_subscribers(id) ON DELETE CASCADE,
    test_id TEXT NOT NULL,
    test_title TEXT NOT NULL,
    subject TEXT NOT NULL,
    cls TEXT NOT NULL,
    score NUMERIC(6,2) NOT NULL,
    total_marks NUMERIC(6,2) NOT NULL,
    correct_count INT NOT NULL DEFAULT 0,
    wrong_count INT NOT NULL DEFAULT 0,
    unattempted_count INT NOT NULL DEFAULT 0,
    time_taken_seconds INT DEFAULT 0,
    answers_payload JSONB,
    submitted_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Create Indexes for High-Performance Queries
CREATE INDEX IF NOT EXISTS idx_ts_subscribers_phone ON testseries_subscribers(phone);
CREATE INDEX IF NOT EXISTS idx_ts_subscribers_status ON testseries_subscribers(status);
CREATE INDEX IF NOT EXISTS idx_ts_subscribers_cls ON testseries_subscribers(cls);
CREATE INDEX IF NOT EXISTS idx_ts_sub_results_sub_id ON testseries_subscriber_results(subscriber_id);
CREATE INDEX IF NOT EXISTS idx_ts_sub_results_test_id ON testseries_subscriber_results(test_id);

-- 4. Enable Row-Level Security
ALTER TABLE testseries_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE testseries_subscriber_results ENABLE ROW LEVEL SECURITY;

-- 5. Open RLS Policies for Single-Tenant Client Access
DROP POLICY IF EXISTS "Public subscribers read" ON testseries_subscribers;
CREATE POLICY "Public subscribers read" ON testseries_subscribers FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public subscribers insert" ON testseries_subscribers;
CREATE POLICY "Public subscribers insert" ON testseries_subscribers FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Public subscribers update" ON testseries_subscribers;
CREATE POLICY "Public subscribers update" ON testseries_subscribers FOR UPDATE USING (true);

DROP POLICY IF EXISTS "Public subscriber results read" ON testseries_subscriber_results;
CREATE POLICY "Public subscriber results read" ON testseries_subscriber_results FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public subscriber results insert" ON testseries_subscriber_results;
CREATE POLICY "Public subscriber results insert" ON testseries_subscriber_results FOR INSERT WITH CHECK (true);
