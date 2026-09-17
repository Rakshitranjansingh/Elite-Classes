-- =========================================================
-- MIGRATION 024: ADD CIVIL SERVICES ACADEMIC CLASS & SUBJECTS
-- Description: Registers 'Civil Services' in classes table and provisions core GS and CSAT subjects
-- =========================================================

-- 1. SEED CIVIL SERVICES CLASS
INSERT INTO classes (id, name, display_order, is_active)
VALUES
('c_civil', 'Civil Services', 13, true)
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, display_order = EXCLUDED.display_order;

-- 2. SEED CIVIL SERVICES SUBJECTS IF NOT PRESENT
INSERT INTO subjects (id, name, code, description, is_active)
VALUES
('sub_gs', 'General Studies', 'GS', 'Indian Polity, History, Geography, Economy, Science & Technology', true),
('sub_csat', 'CSAT & Aptitude', 'CSAT', 'Comprehension, Logical Reasoning & Quantitative Aptitude', true),
('sub_ca', 'Current Affairs', 'CA', 'National & International Current Events, PIB & Policy Analysis', true)
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, description = EXCLUDED.description;

-- 3. MAP CIVIL SERVICES SUBJECTS TO CIVIL SERVICES CLASS
INSERT INTO class_subjects (id, class_id, subject_id)
VALUES
('cs_civil_gs', 'c_civil', 'sub_gs'),
('cs_civil_csat', 'c_civil', 'sub_csat'),
('cs_civil_ca', 'c_civil', 'sub_ca')
ON CONFLICT (id) DO NOTHING;
