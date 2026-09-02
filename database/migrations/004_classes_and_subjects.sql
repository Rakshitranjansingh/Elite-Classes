-- =========================================================
-- MIGRATION 004: DYNAMIC CLASSES & SUBJECTS TABLES
-- Description: Creates relational classes, subjects, and class_subjects mapping tables
-- =========================================================

-- 1. ACADEMIC CLASSES TABLE
CREATE TABLE IF NOT EXISTS classes (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    display_order INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. ACADEMIC SUBJECTS TABLE
CREATE TABLE IF NOT EXISTS subjects (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    code VARCHAR(20),
    description TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. CLASS_SUBJECTS MAPPING TABLE
CREATE TABLE IF NOT EXISTS class_subjects (
    id VARCHAR(50) PRIMARY KEY,
    class_id VARCHAR(50) REFERENCES classes(id) ON DELETE CASCADE,
    subject_id VARCHAR(50) REFERENCES subjects(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    CONSTRAINT unique_class_subject UNIQUE (class_id, subject_id)
);

-- 4. PERFORMANCE INDEXES
CREATE INDEX IF NOT EXISTS idx_classes_name ON classes(name);
CREATE INDEX IF NOT EXISTS idx_subjects_name ON subjects(name);

-- 5. SEED STANDARD CLASSES
INSERT INTO classes (id, name, display_order, is_active)
VALUES
('c_lkg', 'LKG', 1, true),
('c_ukg', 'UKG', 2, true),
('c_1', 'Class 1', 3, true),
('c_2', 'Class 2', 4, true),
('c_3', 'Class 3', 5, true),
('c_4', 'Class 4', 6, true),
('c_5', 'Class 5', 7, true),
('c_6', 'Class 6', 8, true),
('c_7', 'Class 7', 9, true),
('c_8', 'Class 8', 10, true),
('c_9', 'Class 9', 11, true),
('c_10', 'Class 10', 12, true)
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, display_order = EXCLUDED.display_order;

-- 6. SEED STANDARD SUBJECTS
INSERT INTO subjects (id, name, code, description, is_active)
VALUES
('sub_math', 'Mathematics', 'MATH', 'Core Mathematics & Quantitative Aptitude', true),
('sub_sci', 'Science', 'SCI', 'General Science & Environmental Studies', true),
('sub_phy', 'Physics', 'PHY', 'Mechanics, Optics, Electricity & Modern Physics', true),
('sub_chem', 'Chemistry', 'CHEM', 'Organic, Inorganic & Physical Chemistry', true),
('sub_bio', 'Biology', 'BIO', 'Botany, Zoology & Human Physiology', true),
('sub_eng', 'English', 'ENG', 'Grammar, Literature & Creative Writing', true),
('sub_sst', 'Social Studies', 'SST', 'History, Geography, Civics & Economics', true),
('sub_hin', 'Hindi', 'HIN', 'Hindi Vyakaran & Sahitya', true),
('sub_cs', 'Computer Science', 'CS', 'Basics of Computing & Programming Concepts', true),
('sub_gk', 'General Knowledge', 'GK', 'Current Affairs & Logical Reasoning', true)
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, code = EXCLUDED.code;
