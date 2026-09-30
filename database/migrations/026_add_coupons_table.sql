-- Migration 026: Add Dynamic Coupons Table for Database-Driven Promo & Access Codes
-- Idempotent and safe to run multiple times

CREATE TABLE IF NOT EXISTS coupons (
    code VARCHAR(50) PRIMARY KEY,
    description VARCHAR(255) NOT NULL,
    discount_type VARCHAR(30) NOT NULL DEFAULT 'fixed_price', -- 'free_pass', 'fixed_price', 'percentage', 'fixed_discount'
    fixed_price NUMERIC(10, 2) DEFAULT NULL,
    discount_amount NUMERIC(10, 2) DEFAULT NULL,
    validity_days INT DEFAULT 365,
    allowed_classes JSONB DEFAULT NULL, -- NULL = all classes
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Row-level security for public read of active coupons
ALTER TABLE coupons ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public Read active coupons" ON coupons;
CREATE POLICY "Public Read active coupons" ON coupons FOR SELECT USING (true);
DROP POLICY IF EXISTS "Admin Full Access coupons" ON coupons;
CREATE POLICY "Admin Full Access coupons" ON coupons FOR ALL USING (true) WITH CHECK (true);

-- Seed initial default coupons
INSERT INTO coupons (code, description, discount_type, fixed_price, discount_amount, validity_days, allowed_classes, is_active)
VALUES 
    (
        'SANTA150',
        'Special Access Offer — ₹150 for 6 Months Access',
        'fixed_price',
        150.00,
        NULL,
        180,
        NULL,
        TRUE
    ),
    (
        'ELITE30',
        'Special 30-Day Direct Access Free Pass',
        'free_pass',
        0.00,
        NULL,
        30,
        NULL,
        TRUE
    ),
    (
        'WELCOME',
        'Welcome 30-Day Direct Access Free Pass',
        'free_pass',
        0.00,
        NULL,
        30,
        NULL,
        TRUE
    )
ON CONFLICT (code) DO UPDATE SET
    description = EXCLUDED.description,
    discount_type = EXCLUDED.discount_type,
    fixed_price = EXCLUDED.fixed_price,
    validity_days = EXCLUDED.validity_days,
    allowed_classes = EXCLUDED.allowed_classes,
    is_active = EXCLUDED.is_active,
    updated_at = NOW();
