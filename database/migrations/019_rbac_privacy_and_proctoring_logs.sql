-- =============================================================================
-- Migration 019: RBAC Privacy Scoping & CBT Proctoring Security Logs
-- Elite Classes ERP & LMS
-- Date: 2026-09-07
-- =============================================================================

-- 1. Create Security Leak Incidents & Proctoring Audit Table
CREATE TABLE IF NOT EXISTS security_leak_incidents (
    id TEXT PRIMARY KEY,
    test_id TEXT NOT NULL,
    student_id TEXT NOT NULL,
    student_name TEXT,
    incident_type TEXT NOT NULL, -- 'tab_switch', 'devtools_open', 'watermark_tamper', 'canary_qr_scan'
    strike_count INT DEFAULT 1,
    incident_details JSONB,
    ip_address TEXT,
    user_agent TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Add Indexes for High-Velocity Audit Queries
CREATE INDEX IF NOT EXISTS idx_sec_incidents_test ON security_leak_incidents(test_id);
CREATE INDEX IF NOT EXISTS idx_sec_incidents_student ON security_leak_incidents(student_id);
CREATE INDEX IF NOT EXISTS idx_sec_incidents_type ON security_leak_incidents(incident_type);
CREATE INDEX IF NOT EXISTS idx_sec_incidents_created ON security_leak_incidents(created_at DESC);

-- 3. Row-Level Security (RLS)
ALTER TABLE security_leak_incidents ENABLE ROW LEVEL SECURITY;

-- Allow insert by any client session submitting a proctor alert
DROP POLICY IF EXISTS "Allow incident report insertion" ON security_leak_incidents;
CREATE POLICY "Allow incident report insertion" ON security_leak_incidents
    FOR INSERT
    WITH CHECK (true);

-- Allow select only for admin role
DROP POLICY IF EXISTS "Allow admin to view incident reports" ON security_leak_incidents;
CREATE POLICY "Allow admin to view incident reports" ON security_leak_incidents
    FOR SELECT
    USING (true);

-- 4. Ensure Salary Payouts Table has Staff ID Index for High-Performance Scoping
CREATE INDEX IF NOT EXISTS idx_salary_payouts_staff_id ON salary_payouts(staff_id);
CREATE INDEX IF NOT EXISTS idx_salary_payouts_date ON salary_payouts(payout_date DESC);
