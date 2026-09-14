-- =============================================================================
-- Migration 023: Update Class 10 Students Core Subjects for Course Access
-- Ensures Class 10 students have Science and Social Science in their enrolled subjects
-- =============================================================================

UPDATE students
SET subjects = 'Science, Social Science, Mathematics, English'
WHERE (cls = 'Class 10' OR cls = '10') 
  AND (subjects IS NULL OR subjects = 'Mathematics, Physics, Chemistry' OR subjects = '');

-- Update seed student s5 explicitly
UPDATE students
SET subjects = 'Science, Social Science, Mathematics, English'
WHERE id = 's5';
