-- Migration 027: Add Pass Plans Table for Dynamic Database-Driven Pricing
-- Supports 3 duration plans (1 Year, 2 Years, 3 Years) for Elite Pass and Elite Pass Pro
-- Idempotent and safe to run multiple times

CREATE TABLE IF NOT EXISTS pass_plans (
    id VARCHAR(50) PRIMARY KEY,
    tier_code VARCHAR(50) NOT NULL, -- 'elite_pass', 'elite_pass_pro'
    tier_name VARCHAR(100) NOT NULL, -- 'Elite Pass', 'Elite Pass Pro'
    target_group VARCHAR(100) NOT NULL, -- 'School Foundation (Class 6-10)', 'Civil Services (UPSC & State PCS)'
    duration_years INT NOT NULL, -- 1, 2, 3
    duration_label VARCHAR(50) NOT NULL, -- '1 Year', '2 Years', '3 Years'
    price NUMERIC(10, 2) NOT NULL, -- 299.00, 499.00, etc.
    original_price NUMERIC(10, 2), -- 999.00, 14000.00, etc.
    validity_days INT NOT NULL, -- 365, 730, 1095
    badge_text VARCHAR(50) DEFAULT NULL, -- 'Most Popular', 'Best Value'
    is_popular BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE,
    display_order INT DEFAULT 1,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Row-level security for public read of active pass plans
ALTER TABLE pass_plans ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public Read active pass plans" ON pass_plans;
CREATE POLICY "Public Read active pass plans" ON pass_plans FOR SELECT USING (true);
DROP POLICY IF EXISTS "Admin Full Access pass plans" ON pass_plans;
CREATE POLICY "Admin Full Access pass plans" ON pass_plans FOR ALL USING (true) WITH CHECK (true);

-- Seed default plans (3 for Elite Pass, 3 for Elite Pass Pro)
INSERT INTO pass_plans (id, tier_code, tier_name, target_group, duration_years, duration_label, price, original_price, validity_days, badge_text, is_popular, is_active, display_order)
VALUES
    ('elite_pass_1y', 'elite_pass', 'Elite Pass', 'School Foundation (Class 6-10)', 1, '1 Year', 299.00, 999.00, 365, 'Most Popular', TRUE, TRUE, 1),
    ('elite_pass_2y', 'elite_pass', 'Elite Pass', 'School Foundation (Class 6-10)', 2, '2 Years', 499.00, 1899.00, 730, 'Save 20%', FALSE, TRUE, 2),
    ('elite_pass_3y', 'elite_pass', 'Elite Pass', 'School Foundation (Class 6-10)', 3, '3 Years', 599.00, 2799.00, 1095, 'Best Value', FALSE, TRUE, 3),
    ('elite_pass_pro_1y', 'elite_pass_pro', 'Elite Pass Pro', 'Civil Services (UPSC & State PCS)', 1, '1 Year', 499.00, 14000.00, 365, 'Most Popular', TRUE, TRUE, 4),
    ('elite_pass_pro_2y', 'elite_pass_pro', 'Elite Pass Pro', 'Civil Services (UPSC & State PCS)', 2, '2 Years', 799.00, 25000.00, 730, 'Save 25%', FALSE, TRUE, 5),
    ('elite_pass_pro_3y', 'elite_pass_pro', 'Elite Pass Pro', 'Civil Services (UPSC & State PCS)', 3, '3 Years', 999.00, 35000.00, 1095, 'Best Value', FALSE, TRUE, 6)
ON CONFLICT (id) DO UPDATE SET
    tier_code = EXCLUDED.tier_code,
    tier_name = EXCLUDED.tier_name,
    target_group = EXCLUDED.target_group,
    duration_years = EXCLUDED.duration_years,
    duration_label = EXCLUDED.duration_label,
    price = EXCLUDED.price,
    original_price = EXCLUDED.original_price,
    validity_days = EXCLUDED.validity_days,
    badge_text = EXCLUDED.badge_text,
    is_popular = EXCLUDED.is_popular,
    is_active = EXCLUDED.is_active,
    display_order = EXCLUDED.display_order,
    updated_at = NOW();
