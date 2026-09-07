-- =========================================================================
-- MIGRATION 016: SEED CLASS 10 SOCIAL SCIENCE ASSESSMENTS INTO TEST_SERIES
-- Seeds all 22 Class 10 Social Science assessments (History, Politics,
-- Economics, Geography) into the test_series table, satisfying foreign key
-- constraints for test_submissions, test_questions, and subscriber results.
-- =========================================================================

-- 1. SEED SPECIFIC SOCIAL SCIENCE SUBJECTS IF NOT ALREADY PRESENT
INSERT INTO subjects (id, name, code, description, is_active)
VALUES
('sub_hist', 'History', 'HIST', 'India and the Contemporary World - II', true),
('sub_poli', 'Democratic Politics', 'POLI', 'Democratic Politics - II (Civics)', true),
('sub_econ', 'Economics', 'ECON', 'Understanding Economic Development', true),
('sub_geog', 'Geography', 'GEOG', 'Contemporary India - II', true)
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name,
    code = EXCLUDED.code,
    description = EXCLUDED.description;

-- 2. MAP TO CLASS 10
INSERT INTO class_subjects (id, class_id, subject_id)
VALUES
('cs_c10_hist', 'c_10', 'sub_hist'),
('cs_c10_poli', 'c_10', 'sub_poli'),
('cs_c10_econ', 'c_10', 'sub_econ'),
('cs_c10_geog', 'c_10', 'sub_geog')
ON CONFLICT (class_id, subject_id) DO NOTHING;

-- 3. SEED ALL 22 MASTER CHAPTER ASSESSMENTS INTO TEST_SERIES
INSERT INTO test_series (
    id, title, cls, subject, duration_mins, total_marks, passing_marks, negative_marking, questions_count, status, instructions, created_by
) VALUES
-- HISTORY (5 CHAPTERS)
('ts_c10_hist_ch1', 'Chapter 1: The Rise of Nationalism in Europe', 'Class 10', 'History', 90, 400.00, 160.00, 1.00, 100, 'published', 'Single master 100Q assessment covering Class 10 NCERT History Chapter 1.', 'History Faculty'),
('ts_c10_hist_ch2', 'Chapter 2: Nationalism in India', 'Class 10', 'History', 90, 400.00, 160.00, 1.00, 100, 'published', 'Single master 100Q assessment covering Class 10 NCERT History Chapter 2.', 'History Faculty'),
('ts_c10_hist_ch3', 'Chapter 3: The Making of a Global World', 'Class 10', 'History', 90, 400.00, 160.00, 1.00, 100, 'published', 'Single master 100Q assessment covering Class 10 NCERT History Chapter 3.', 'History Faculty'),
('ts_c10_hist_ch4', 'Chapter 4: The Age of Industrialisation', 'Class 10', 'History', 90, 400.00, 160.00, 1.00, 100, 'published', 'Single master 100Q assessment covering Class 10 NCERT History Chapter 4.', 'History Faculty'),
('ts_c10_hist_ch5', 'Chapter 5: Print Culture and the Modern World', 'Class 10', 'History', 90, 400.00, 160.00, 1.00, 100, 'published', 'Single master 100Q assessment covering Class 10 NCERT History Chapter 5.', 'History Faculty'),

-- DEMOCRATIC POLITICS (5 CHAPTERS)
('ts_c10_poli_ch1', 'Chapter 1: Power-sharing', 'Class 10', 'Politics', 90, 400.00, 160.00, 1.00, 100, 'published', 'Single master 100Q assessment covering Class 10 NCERT Democratic Politics Chapter 1.', 'Politics Faculty'),
('ts_c10_poli_ch2', 'Chapter 2: Federalism', 'Class 10', 'Politics', 90, 400.00, 160.00, 1.00, 100, 'published', 'Single master 100Q assessment covering Class 10 NCERT Democratic Politics Chapter 2.', 'Politics Faculty'),
('ts_c10_poli_ch3', 'Chapter 3: Gender, Religion and Caste', 'Class 10', 'Politics', 90, 400.00, 160.00, 1.00, 100, 'published', 'Single master 100Q assessment covering Class 10 NCERT Democratic Politics Chapter 3.', 'Politics Faculty'),
('ts_c10_poli_ch4', 'Chapter 4: Political Parties', 'Class 10', 'Politics', 90, 400.00, 160.00, 1.00, 100, 'published', 'Single master 100Q assessment covering Class 10 NCERT Democratic Politics Chapter 4.', 'Politics Faculty'),
('ts_c10_poli_ch5', 'Chapter 5: Outcomes of Democracy', 'Class 10', 'Politics', 90, 400.00, 160.00, 1.00, 100, 'published', 'Single master 100Q assessment covering Class 10 NCERT Democratic Politics Chapter 5.', 'Politics Faculty'),

-- ECONOMICS (5 CHAPTERS)
('ts_c10_econ_ch1', 'Chapter 1: Development', 'Class 10', 'Economics', 90, 400.00, 160.00, 1.00, 100, 'published', 'Single master 100Q assessment covering Class 10 NCERT Economics Chapter 1.', 'Economics Faculty'),
('ts_c10_econ_ch2', 'Chapter 2: Sectors of the Indian Economy', 'Class 10', 'Economics', 90, 400.00, 160.00, 1.00, 100, 'published', 'Single master 100Q assessment covering Class 10 NCERT Economics Chapter 2.', 'Economics Faculty'),
('ts_c10_econ_ch3', 'Chapter 3: Money and Credit', 'Class 10', 'Economics', 90, 400.00, 160.00, 1.00, 100, 'published', 'Single master 100Q assessment covering Class 10 NCERT Economics Chapter 3.', 'Economics Faculty'),
('ts_c10_econ_ch4', 'Chapter 4: Globalisation and the Indian Economy', 'Class 10', 'Economics', 90, 400.00, 160.00, 1.00, 100, 'published', 'Single master 100Q assessment covering Class 10 NCERT Economics Chapter 4.', 'Economics Faculty'),
('ts_c10_econ_ch5', 'Chapter 5: Consumer Rights', 'Class 10', 'Economics', 90, 400.00, 160.00, 1.00, 100, 'published', 'Single master 100Q assessment covering Class 10 NCERT Economics Chapter 5.', 'Economics Faculty'),

-- GEOGRAPHY (7 CHAPTERS)
('ts_c10_geog_ch1', 'Chapter 1: Resources and Development', 'Class 10', 'Geography', 90, 400.00, 160.00, 1.00, 100, 'published', 'Single master 100Q assessment covering Class 10 NCERT Geography Chapter 1.', 'Geography Faculty'),
('ts_c10_geog_ch2', 'Chapter 2: Forest and Wildlife Resources', 'Class 10', 'Geography', 90, 400.00, 160.00, 1.00, 100, 'published', 'Single master 100Q assessment covering Class 10 NCERT Geography Chapter 2.', 'Geography Faculty'),
('ts_c10_geog_ch3', 'Chapter 3: Water Resources', 'Class 10', 'Geography', 90, 400.00, 160.00, 1.00, 100, 'published', 'Single master 100Q assessment covering Class 10 NCERT Geography Chapter 3.', 'Geography Faculty'),
('ts_c10_geog_ch4', 'Chapter 4: Agriculture', 'Class 10', 'Geography', 90, 400.00, 160.00, 1.00, 100, 'published', 'Single master 100Q assessment covering Class 10 NCERT Geography Chapter 4.', 'Geography Faculty'),
('ts_c10_geog_ch5', 'Chapter 5: Minerals and Energy Resources', 'Class 10', 'Geography', 90, 400.00, 160.00, 1.00, 100, 'published', 'Single master 100Q assessment covering Class 10 NCERT Geography Chapter 5.', 'Geography Faculty'),
('ts_c10_geog_ch6', 'Chapter 6: Manufacturing Industries', 'Class 10', 'Geography', 90, 400.00, 160.00, 1.00, 100, 'published', 'Single master 100Q assessment covering Class 10 NCERT Geography Chapter 6.', 'Geography Faculty'),
('ts_c10_geog_ch7', 'Chapter 7: Lifelines of National Economy', 'Class 10', 'Geography', 90, 400.00, 160.00, 1.00, 100, 'published', 'Single master 100Q assessment covering Class 10 NCERT Geography Chapter 7.', 'Geography Faculty')

ON CONFLICT (id) DO UPDATE SET
    title = EXCLUDED.title,
    cls = EXCLUDED.cls,
    subject = EXCLUDED.subject,
    duration_mins = EXCLUDED.duration_mins,
    total_marks = EXCLUDED.total_marks,
    passing_marks = EXCLUDED.passing_marks,
    negative_marking = EXCLUDED.negative_marking,
    questions_count = EXCLUDED.questions_count,
    status = EXCLUDED.status,
    instructions = EXCLUDED.instructions,
    created_by = EXCLUDED.created_by;
