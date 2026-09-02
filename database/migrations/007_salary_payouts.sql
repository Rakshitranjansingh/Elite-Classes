-- =========================================================
-- ELITE CLASSES ERP — MIGRATION 007: SALARY PAYOUTS & DISBURSEMENTS
-- Idempotent PostgreSQL Migration Script
-- =========================================================

CREATE TABLE IF NOT EXISTS salary_payouts (
    id VARCHAR(50) PRIMARY KEY,
    recipient_id VARCHAR(50) NOT NULL,
    recipient_name VARCHAR(255) NOT NULL,
    recipient_type VARCHAR(50) DEFAULT 'teacher',
    amount NUMERIC(10,2) NOT NULL DEFAULT 0.00,
    month VARCHAR(20) NOT NULL,
    date DATE NOT NULL,
    mode VARCHAR(50) DEFAULT 'Bank Transfer',
    ref_no VARCHAR(100),
    note TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_salary_payouts_recipient ON salary_payouts(recipient_id);
CREATE INDEX IF NOT EXISTS idx_salary_payouts_month ON salary_payouts(month);

ALTER TABLE salary_payouts ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public access on salary_payouts" ON salary_payouts;
CREATE POLICY "Public access on salary_payouts" ON salary_payouts FOR ALL USING (true);
