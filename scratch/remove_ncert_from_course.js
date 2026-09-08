const fs = require('fs');
const path = require('path');

const targetFiles = [
    path.resolve(__dirname, '../scratch/generate_course_ch1.js'),
    path.resolve(__dirname, '../modules/course/data/class10/science/chapter1_course_data.js'),
    path.resolve(__dirname, '../modules/course/class10/science/chapter1_course.html'),
    path.resolve(__dirname, '../modules/studentView/studentView.js')
];

const replacements = [
    // Direct matches requested by user
    { regex: /🔬\s*NCERT\s*Daily\s*Life\s*Examples:/gi, replace: '🔬 Daily Life Examples:' },
    { regex: /1\.\s*Conceptual\s*Explanation\s*&\s*NCERT\s*Notes/gi, replace: '1. Conceptual Explanation & Theory Notes' },
    { regex: /Daily\s*examples\s*from\s*NCERT:/gi, replace: 'Key daily life examples:' },
    
    // Activities
    { regex: /🔬\s*NCERT\s*Activity\s*(\d+\.\d+)/gi, replace: '🔬 Activity $1' },
    { regex: /NCERT\s*Activity\s*(\d+\.\d+)/gi, replace: 'Activity $1' },
    { regex: /NCERT\s*Activity/gi, replace: 'Curriculum Activity' },

    // Questions and Explanations
    { regex: /described\s+in\s+NCERT\s+Chapter\s+1\s+introductory\s+observations\?/gi, replace: 'described in introductory observations of chemical changes?' },
    { regex: /According\s+to\s+NCERT\s+Chapter\s+1,\s*/gi, replace: 'In scientific analysis, ' },
    { regex: /according\s+to\s+NCERT\s+guidelines/gi, replace: 'according to standard balancing principles' },
    { regex: /Key\s+examples\s+from\s+NCERT:/gi, replace: 'Key foundational examples:' },
    { regex: /Key\s+examples\s+highlighted\s+in\s+NCERT:/gi, replace: 'Key foundational examples:' },
    { regex: /accurate\s+NCERT\s+Class\s+10\s+scientific\s+fact\?/gi, replace: 'accurate Class 10 scientific fact?' },
    { regex: /As\s+taught\s+in\s+NCERT\s+Chapter\s+1\s+/gi, replace: 'As established in Chapter 1 ' },
    { regex: /💡\s*NCERT\s*Explanation:/gi, replace: '💡 Key Explanation:' },
    { regex: /NCERT\s+rationale/gi, replace: 'scientific rationale' },

    // Student View / Portal
    { regex: /NCERT\s*Notes/gi, replace: 'Comprehensive Notes' },
    { regex: /built\s+directly\s+from\s+NCERT\./gi, replace: 'covering the complete chapter curriculum.' },
    { regex: /\(NCERT\s+jesc101\.pdf\s+aligned\)/gi, replace: '(Class 10 Comprehensive Curriculum Aligned)' },
    { regex: /NCERT\s+textbook/gi, replace: 'standard curriculum textbook' },
    { regex: /NCERT\s+guidelines/gi, replace: 'board guidelines' },
    { regex: /from\s+NCERT/gi, replace: 'from core curriculum' },
    { regex: /in\s+NCERT/gi, replace: 'in curriculum' },
    { regex: /NCERT/g, replace: 'Core Curriculum' } // Fallback safety
];

let totalCount = 0;

targetFiles.forEach(filePath => {
    if (!fs.existsSync(filePath)) {
        console.log(`⚠️ File not found: ${filePath}`);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    const initialMatches = (content.match(/NCERT/gi) || []).length;

    replacements.forEach(r => {
        content = content.replace(r.regex, r.replace);
    });

    const remainingMatches = (content.match(/NCERT/gi) || []).length;
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Processed: ${path.basename(filePath)} | Cleaned: ${initialMatches - remainingMatches} occurrences | Remaining: ${remainingMatches}`);
    totalCount += (initialMatches - remainingMatches);
});

console.log(`\n🎉 Done! Cleaned total of ${totalCount} mentions of NCERT.`);
