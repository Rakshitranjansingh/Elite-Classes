-- =============================================================================
-- ELITE CLASSES — MIGRATION 022: GOOGLE AUTH, ADDITIONAL EMAIL & DAILY LOGIN LOGS
-- 100% Idempotent Script: Safe to execute multiple times!
-- =============================================================================

-- 1. ADD ADDITIONAL EMAIL COLUMN TO EXISTING PROFILE TABLES
ALTER TABLE students 
ADD COLUMN IF NOT EXISTS additional_email VARCHAR(255);

ALTER TABLE staff 
ADD COLUMN IF NOT EXISTS additional_email VARCHAR(255);

ALTER TABLE admins 
ADD COLUMN IF NOT EXISTS additional_email VARCHAR(255);

-- 2. STRICT EMAIL UNIQUENESS CONSTRAINTS (CASE-INSENSITIVE & TRIMMED)
-- Ensures no two students can share the same primary or additional email.
CREATE UNIQUE INDEX IF NOT EXISTS idx_students_unique_email 
ON students (LOWER(TRIM(email))) 
WHERE email IS NOT NULL AND email != '';

CREATE UNIQUE INDEX IF NOT EXISTS idx_students_unique_additional_email 
ON students (LOWER(TRIM(additional_email))) 
WHERE additional_email IS NOT NULL AND additional_email != '';

CREATE UNIQUE INDEX IF NOT EXISTS idx_staff_unique_email 
ON staff (LOWER(TRIM(email))) 
WHERE email IS NOT NULL AND email != '';

CREATE UNIQUE INDEX IF NOT EXISTS idx_staff_unique_additional_email 
ON staff (LOWER(TRIM(additional_email))) 
WHERE additional_email IS NOT NULL AND additional_email != '';

CREATE UNIQUE INDEX IF NOT EXISTS idx_admins_unique_email 
ON admins (LOWER(TRIM(email))) 
WHERE email IS NOT NULL AND email != '';

CREATE UNIQUE INDEX IF NOT EXISTS idx_admins_unique_additional_email 
ON admins (LOWER(TRIM(additional_email))) 
WHERE additional_email IS NOT NULL AND additional_email != '';

-- 3. USER DAILY LOGIN LOGS TABLE (PER-USER PER-DAY COUNTER)
CREATE TABLE IF NOT EXISTS user_daily_login_logs (
    id BIGSERIAL PRIMARY KEY,
    user_id VARCHAR(50) NOT NULL,
    user_role VARCHAR(20) NOT NULL,                -- 'student', 'staff', 'admin'
    login_date DATE NOT NULL DEFAULT CURRENT_DATE,
    login_count INT NOT NULL DEFAULT 1,
    email VARCHAR(255),
    login_method VARCHAR(50) DEFAULT 'whatsapp_pin', -- 'whatsapp_pin', 'google_oauth'
    last_login_at TIMESTAMPTZ DEFAULT NOW(),
    ip_address VARCHAR(100),
    user_agent TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    CONSTRAINT unique_user_daily_login UNIQUE (user_id, login_date)
);

-- Query Optimization Indexes
CREATE INDEX IF NOT EXISTS idx_user_daily_logins_user_id ON user_daily_login_logs(user_id);
CREATE INDEX IF NOT EXISTS idx_user_daily_logins_date ON user_daily_login_logs(login_date);
CREATE INDEX IF NOT EXISTS idx_user_daily_logins_role_date ON user_daily_login_logs(user_role, login_date);

-- 4. ATOMIC UPSERT STORED PROCEDURE FOR DAILY LOGIN LOGGING
CREATE OR REPLACE FUNCTION record_daily_user_login(
    p_user_id VARCHAR(50),
    p_user_role VARCHAR(20),
    p_email VARCHAR(255) DEFAULT NULL,
    p_login_method VARCHAR(50) DEFAULT 'whatsapp_pin',
    p_ip VARCHAR(100) DEFAULT NULL,
    p_user_agent TEXT DEFAULT NULL
)
RETURNS json
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    v_record RECORD;
BEGIN
    INSERT INTO user_daily_login_logs (
        user_id,
        user_role,
        login_date,
        login_count,
        email,
        login_method,
        last_login_at,
        ip_address,
        user_agent
    )
    VALUES (
        p_user_id,
        p_user_role,
        CURRENT_DATE,
        1,
        p_email,
        p_login_method,
        NOW(),
        p_ip,
        p_user_agent
    )
    ON CONFLICT (user_id, login_date) DO UPDATE
    SET 
        login_count = user_daily_login_logs.login_count + 1,
        last_login_at = NOW(),
        login_method = EXCLUDED.login_method,
        email = COALESCE(EXCLUDED.email, user_daily_login_logs.email),
        ip_address = COALESCE(EXCLUDED.ip_address, user_daily_login_logs.ip_address),
        user_agent = COALESCE(EXCLUDED.user_agent, user_daily_login_logs.user_agent)
    RETURNING * INTO v_record;

    RETURN json_build_object(
        'success', true,
        'user_id', v_record.user_id,
        'login_date', v_record.login_date,
        'login_count', v_record.login_count,
        'last_login_at', v_record.last_login_at
    );
END;
$$;

-- 5. ROW LEVEL SECURITY (RLS) POLICIES
ALTER TABLE user_daily_login_logs ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow authenticated and public insert login logs" ON user_daily_login_logs;
CREATE POLICY "Allow authenticated and public insert login logs" ON user_daily_login_logs
    FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Allow authenticated update login logs" ON user_daily_login_logs;
CREATE POLICY "Allow authenticated update login logs" ON user_daily_login_logs
    FOR UPDATE USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Allow public read own login logs" ON user_daily_login_logs;
CREATE POLICY "Allow public read own login logs" ON user_daily_login_logs
    FOR SELECT USING (true);
