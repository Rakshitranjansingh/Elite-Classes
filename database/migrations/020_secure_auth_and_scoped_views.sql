-- =============================================================================
-- Migration 020: Secure Server-Side Authentication & Query Scoping
-- Elite Classes ERP & LMS
-- Date: 2026-09-07
-- =============================================================================

-- 1. Server-Side Authentication Stored Procedure (Prevents full-table client downloads)
CREATE OR REPLACE FUNCTION authenticate_portal_user(p_phone TEXT, p_pin TEXT)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER -- Runs with elevated privileges so anon role does not need direct SELECT on admins table
SET search_path = public
AS $$
DECLARE
    v_clean_phone TEXT;
    v_entered_pin TEXT;
    v_admin RECORD;
    v_student RECORD;
    v_staff RECORD;
    v_subscriber RECORD;
BEGIN
    v_clean_phone := regexp_replace(COALESCE(p_phone, ''), '\D', '', 'g');
    v_entered_pin := trim(COALESCE(p_pin, ''));

    IF v_clean_phone = '' THEN
        RETURN jsonb_build_object('success', false, 'message', 'Please enter your registered WhatsApp number.');
    END IF;
    IF v_entered_pin = '' THEN
        RETURN jsonb_build_object('success', false, 'message', 'Please enter your security PIN.');
    END IF;

    -- 1. Check Admins
    SELECT id, name, email, role, phone, pin, avatar_color INTO v_admin
    FROM admins
    WHERE regexp_replace(COALESCE(phone, ''), '\D', '', 'g') = v_clean_phone
       OR regexp_replace(COALESCE(phone, ''), '\D', '', 'g') LIKE '%' || v_clean_phone
       OR v_clean_phone LIKE '%' || regexp_replace(COALESCE(phone, ''), '\D', '', 'g')
    LIMIT 1;

    IF FOUND THEN
        IF v_entered_pin = trim(COALESCE(v_admin.pin, '987654')) THEN
            RETURN jsonb_build_object(
                'success', true,
                'role', 'admin',
                'redirectUrl', 'admin_home.html',
                'user', jsonb_build_object(
                    'id', v_admin.id,
                    'name', v_admin.name,
                    'email', v_admin.email,
                    'role', COALESCE(v_admin.role, 'Super Admin'),
                    'phone', v_admin.phone,
                    'color', COALESCE(v_admin.avatar_color, '#2563eb')
                )
            );
        ELSE
            RETURN jsonb_build_object('success', false, 'message', 'Invalid Admin Security PIN for this WhatsApp number.');
        END IF;
    END IF;

    -- 2. Check Students
    SELECT id, name, email, cls, parent_name, phone, pin, monthly_fee, fee_due_day, scholarship_pct, subjects, date_of_admission, school_name, avatar_color
    INTO v_student
    FROM students
    WHERE regexp_replace(COALESCE(phone, ''), '\D', '', 'g') = v_clean_phone
       OR regexp_replace(COALESCE(phone, ''), '\D', '', 'g') LIKE '%' || v_clean_phone
       OR v_clean_phone LIKE '%' || regexp_replace(COALESCE(phone, ''), '\D', '', 'g')
    LIMIT 1;

    IF FOUND THEN
        IF v_entered_pin = trim(COALESCE(v_student.pin, '123456')) THEN
            RETURN jsonb_build_object(
                'success', true,
                'role', 'student',
                'redirectUrl', 'student_home.html',
                'user', jsonb_build_object(
                    'id', v_student.id,
                    'name', v_student.name,
                    'email', v_student.email,
                    'cls', v_student.cls,
                    'parent', v_student.parent_name,
                    'phone', v_student.phone,
                    'fee', v_student.monthly_fee,
                    'due', v_student.fee_due_day,
                    'scholarshipPct', v_student.scholarship_pct,
                    'subjects', v_student.subjects,
                    'doa', v_student.date_of_admission,
                    'school', v_student.school_name,
                    'color', COALESCE(v_student.avatar_color, '#2563eb')
                )
            );
        ELSE
            RETURN jsonb_build_object('success', false, 'message', 'Invalid Student Security PIN for this WhatsApp number.');
        END IF;
    END IF;

    -- 3. Check Staff / Teachers
    SELECT id, name, email, role, phone, pin, is_teacher, subjects, assigned_classes, avatar_color
    INTO v_staff
    FROM staff
    WHERE regexp_replace(COALESCE(phone, ''), '\D', '', 'g') = v_clean_phone
       OR regexp_replace(COALESCE(phone, ''), '\D', '', 'g') LIKE '%' || v_clean_phone
       OR v_clean_phone LIKE '%' || regexp_replace(COALESCE(phone, ''), '\D', '', 'g')
    LIMIT 1;

    IF FOUND THEN
        IF v_entered_pin = trim(COALESCE(v_staff.pin, '123456')) THEN
            RETURN jsonb_build_object(
                'success', true,
                'role', 'staff',
                'redirectUrl', 'staff_home.html',
                'user', jsonb_build_object(
                    'id', v_staff.id,
                    'name', v_staff.name,
                    'email', v_staff.email,
                    'role', v_staff.role,
                    'phone', v_staff.phone,
                    'is_teacher', v_staff.is_teacher,
                    'subjects', v_staff.subjects,
                    'classes', v_staff.assigned_classes,
                    'color', COALESCE(v_staff.avatar_color, '#2563eb')
                )
            );
        ELSE
            RETURN jsonb_build_object('success', false, 'message', 'Invalid Staff Security PIN for this WhatsApp number.');
        END IF;
    END IF;

    -- 4. Check Test Series Subscribers
    SELECT id, name, phone, pin, cls, status, tracking_code
    INTO v_subscriber
    FROM testseries_subscribers
    WHERE regexp_replace(COALESCE(phone, ''), '\D', '', 'g') = v_clean_phone
       OR regexp_replace(COALESCE(phone, ''), '\D', '', 'g') LIKE '%' || v_clean_phone
       OR v_clean_phone LIKE '%' || regexp_replace(COALESCE(phone, ''), '\D', '', 'g')
    LIMIT 1;

    IF FOUND THEN
        IF v_entered_pin = trim(COALESCE(v_subscriber.pin, '123456')) THEN
            IF v_subscriber.status = 'active' THEN
                RETURN jsonb_build_object(
                    'success', true,
                    'role', 'testseries_subscriber',
                    'redirectUrl', 'testseries_user_home.html',
                    'user', jsonb_build_object(
                        'id', v_subscriber.id,
                        'name', v_subscriber.name,
                        'phone', v_subscriber.phone,
                        'cls', v_subscriber.cls,
                        'tracking_code', v_subscriber.tracking_code,
                        'status', v_subscriber.status
                    )
                );
            ELSE
                RETURN jsonb_build_object(
                    'success', false,
                    'isSubscriberPending', true,
                    'trackingCode', v_subscriber.tracking_code,
                    'message', 'Your subscription is pending admin verification.'
                );
            END IF;
        ELSE
            RETURN jsonb_build_object('success', false, 'message', 'Invalid Subscriber PIN for this WhatsApp number.');
        END IF;
    END IF;

    -- 5. No user found
    RETURN jsonb_build_object('success', false, 'message', 'No registered account found matching this WhatsApp number.');
END;
$$;

-- Grant execution to anon and authenticated callers
GRANT EXECUTE ON FUNCTION authenticate_portal_user(TEXT, TEXT) TO anon, authenticated, public;
