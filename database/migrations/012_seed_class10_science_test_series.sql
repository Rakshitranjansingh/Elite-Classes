-- =========================================================================
-- MIGRATION 012: SEED CLASS 10 SCIENCE CHAPTER-WISE TESTS INTO TEST_SERIES
-- Ensures all 13 Class 10 Science master assessments exist in the database,
-- satisfying foreign key constraints for test_submissions and test_questions.
-- =========================================================================

INSERT INTO test_series (
    id, title, cls, subject, duration_mins, total_marks, passing_marks, negative_marking, questions_count, status, instructions, created_by
) VALUES
('ts_c10_sci_ch1', 'Chapter 1: Chemical Reactions Assessment', 'Class 10', 'Science', 120, 400.00, 160.00, 1.00, 100, 'published', 'Single master 100Q assessment covering Class 10 NCERT Chapter 1.', 'Science Faculty'),
('ts_c10_sci_ch2', 'Chapter 2: Acids, Bases and Salts Assessment', 'Class 10', 'Science', 120, 400.00, 160.00, 1.00, 100, 'published', 'Single master 100Q assessment covering Class 10 NCERT Chapter 2.', 'Science Faculty'),
('ts_c10_sci_ch3', 'Chapter 3: Metals and Non-Metals Assessment', 'Class 10', 'Science', 120, 400.00, 160.00, 1.00, 100, 'published', 'Single master 100Q assessment covering Class 10 NCERT Chapter 3.', 'Science Faculty'),
('ts_c10_sci_ch4', 'Chapter 4: Carbon and its Compounds Assessment', 'Class 10', 'Science', 120, 400.00, 160.00, 1.00, 100, 'published', 'Single master 100Q assessment covering Class 10 NCERT Chapter 4.', 'Science Faculty'),
('ts_c10_sci_ch5', 'Chapter 5: Life Processes Assessment', 'Class 10', 'Science', 120, 400.00, 160.00, 1.00, 100, 'published', 'Single master 100Q assessment covering Class 10 NCERT Chapter 5.', 'Science Faculty'),
('ts_c10_sci_ch6', 'Chapter 6: Control and Coordination Assessment', 'Class 10', 'Science', 120, 400.00, 160.00, 1.00, 100, 'published', 'Single master 100Q assessment covering Class 10 NCERT Chapter 6.', 'Science Faculty'),
('ts_c10_sci_ch7', 'Chapter 7: How do Organisms Reproduce Assessment', 'Class 10', 'Science', 120, 400.00, 160.00, 1.00, 100, 'published', 'Single master 100Q assessment covering Class 10 NCERT Chapter 7.', 'Science Faculty'),
('ts_c10_sci_ch8', 'Chapter 8: Heredity Assessment', 'Class 10', 'Science', 120, 400.00, 160.00, 1.00, 100, 'published', 'Single master 100Q assessment covering Class 10 NCERT Chapter 8.', 'Science Faculty'),
('ts_c10_sci_ch9', 'Chapter 9: Light – Reflection and Refraction Assessment', 'Class 10', 'Science', 120, 400.00, 160.00, 1.00, 100, 'published', 'Single master 100Q assessment covering Class 10 NCERT Chapter 9.', 'Science Faculty'),
('ts_c10_sci_ch10', 'Chapter 10: The Human Eye and the Colourful World Assessment', 'Class 10', 'Science', 120, 400.00, 160.00, 1.00, 100, 'published', 'Single master 100Q assessment covering Class 10 NCERT Chapter 10.', 'Science Faculty'),
('ts_c10_sci_ch11', 'Chapter 11: Electricity Assessment', 'Class 10', 'Science', 120, 400.00, 160.00, 1.00, 100, 'published', 'Single master 100Q assessment covering Class 10 NCERT Chapter 11.', 'Science Faculty'),
('ts_c10_sci_ch12', 'Chapter 12: Magnetic Effects of Electric Current Assessment', 'Class 10', 'Science', 120, 400.00, 160.00, 1.00, 100, 'published', 'Single master 100Q assessment covering Class 10 NCERT Chapter 12.', 'Science Faculty'),
('ts_c10_sci_ch13', 'Chapter 13: Our Environment Assessment', 'Class 10', 'Science', 120, 400.00, 160.00, 1.00, 100, 'published', 'Single master 100Q assessment covering Class 10 NCERT Chapter 13.', 'Science Faculty')
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
