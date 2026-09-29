-- Migration 025: Add Razorpay Gateway and Educational Donation Configuration
-- Idempotent and safe to run multiple times

ALTER TABLE IF EXISTS coaching_settings
ADD COLUMN IF NOT EXISTS razorpay_key_id VARCHAR(100) DEFAULT 'rzp_live_ThjCyikI4P88f5',
ADD COLUMN IF NOT EXISTS razorpay_enabled BOOLEAN DEFAULT TRUE,
ADD COLUMN IF NOT EXISTS donation_purpose VARCHAR(255) DEFAULT 'Platform Maintenance & Educational Support Fee',
ADD COLUMN IF NOT EXISTS admin_upi_id VARCHAR(100) DEFAULT '9911519237@upi';

-- Ensure coaching_main default row exists with all columns populated
INSERT INTO coaching_settings (id, coaching_name, access_key, student_access_key, razorpay_key_id, razorpay_enabled, donation_purpose, admin_upi_id)
VALUES (
    'coaching_main',
    'Elite Classes',
    '987654',
    '123456',
    'rzp_live_ThjCyikI4P88f5',
    TRUE,
    'Platform Maintenance & Educational Support Fee',
    '9911519237@upi'
)
ON CONFLICT (id) DO UPDATE
SET 
    razorpay_key_id = 'rzp_live_ThjCyikI4P88f5',
    razorpay_enabled = TRUE,
    donation_purpose = COALESCE(coaching_settings.donation_purpose, EXCLUDED.donation_purpose),
    admin_upi_id = COALESCE(coaching_settings.admin_upi_id, EXCLUDED.admin_upi_id),
    updated_at = NOW();
