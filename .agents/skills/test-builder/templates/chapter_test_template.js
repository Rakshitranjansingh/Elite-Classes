/**
 * Elite Classes — Standard 100-Question Chapter Assessment Template
 * Subject: {{SUBJECT}} | Class: {{CLASS}} | Chapter: {{CHAPTER_NAME}}
 * 
 * Mandatory 5-Tier Breakdown:
 *   - 🟢 50 Easy (Q1 - Q50): Direct concepts, definitions, formulas, base facts
 *   - 🟡 10 Medium (Q51 - Q60): Single-step calculations, applications, balanced equations
 *   - 🟠 10 Hard (Q61 - Q70): Multi-step problems, condition-based reasoning, diagrams
 *   - 🟣 20 Tricky (Q71 - Q90): Subtle distractors, edge cases, common misconceptions
 *   - 🔴 10 Very Hard / Olympiad (Q91 - Q100): Deep synthesis, Exemplar/Olympiad deductions
 */

const AssessmentData = {
    id: 'ts_c{{CLASS_NUM}}_{{SUBJECT_SHORT}}_ch{{CH_NUM}}',
    title: 'Chapter {{CH_NUM}}: {{CHAPTER_NAME}} Assessment',
    cls: 'Class {{CLASS_NUM}}',
    subject: '{{SUBJECT}}',
    duration_mins: 90,
    total_marks: 400,
    passing_marks: 160,
    negative_marking: 1.00,
    questions_count: 100,
    status: 'published',
    test_date: new Date().toISOString().split('T')[0],
    instructions: 'Each question carries 4 marks for a correct answer and -1 mark penalty for an incorrect option. Unattempted questions carry 0 marks.',
    created_by: '{{SUBJECT}} Faculty',
    difficulty_breakdown: {
        easy: 50,
        medium: 10,
        hard: 10,
        tricky: 20,
        very_hard: 10
    },
    questions: [
        // 1. EASY (Q1 - Q50)
        {
            id: 'ts_c{{CLASS_NUM}}_ch{{CH_NUM}}_q1',
            question_number: 1,
            difficulty: 'easy',
            question_text: 'Sample question text with proper mathematical/scientific typography (e.g. H₂O or x² + y² = r²)?',
            question_type: 'mcq',
            option_a: 'Option A statement',
            option_b: 'Option B statement',
            option_c: 'Option C statement',
            option_d: 'Option D statement',
            correct_option: 'A',
            marks: 4.00,
            negative_marks: 1.00,
            explanation: 'Detailed explanation explaining why option A is correct based on the syllabus.'
        }
        // ... (Q2 through Q100 follow the same schema)
    ]
};

// Dual-Environment Registration
if (typeof window !== 'undefined') {
    if (!window.EliteTestRegistry) window.EliteTestRegistry = [];
    window.EliteTestRegistry.push(AssessmentData);
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = AssessmentData;
}
