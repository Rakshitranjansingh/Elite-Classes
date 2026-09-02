-- =========================================================
-- MIGRATION 003: MERGE TEACHERS & STAFF
-- Description: Unifies teaching faculty and support staff in staff table with is_teacher flag
-- =========================================================

-- 1. ADD TEACHER ATTRIBUTES TO STAFF TABLE
ALTER TABLE staff ADD COLUMN IF NOT EXISTS is_teacher BOOLEAN NOT NULL DEFAULT FALSE;
ALTER TABLE staff ADD COLUMN IF NOT EXISTS subjects TEXT;
ALTER TABLE staff ADD COLUMN IF NOT EXISTS assigned_classes TEXT;

-- 2. CREATE INDEX ON is_teacher FOR FAST FILTERING
CREATE INDEX IF NOT EXISTS idx_staff_is_teacher ON staff(is_teacher);

-- 3. MIGRATE DATA FROM TEACHERS TABLE IF PREVIOUSLY CREATED
DO $$
BEGIN
    IF EXISTS (SELECT FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'teachers') THEN
        INSERT INTO staff (id, name, is_teacher, role, subjects, assigned_classes, phone, pin, base_salary, incentive, avatar_color)
        SELECT id, name, true, 'Faculty Teacher', subjects, assigned_classes, phone, COALESCE(pin, '123456'), base_salary, incentive, avatar_color
        FROM teachers
        ON CONFLICT (id) DO UPDATE SET 
            is_teacher = true,
            subjects = EXCLUDED.subjects,
            assigned_classes = EXCLUDED.assigned_classes,
            pin = EXCLUDED.pin;
    END IF;
END $$;
