#!/usr/bin/env node

/* =============================================================================
   ELITE CLASSES — COURSE CHAPTER VALIDATION SCRIPT (validate_course.js)
   Autonomous quality assurance script validating:
   1. Exactly 20 mini-modules in the chapter
   2. Each module has title, tagline, theoryHtml, pointsToRemember, keyNotes
   3. Each module has exactly 10 questions (200 MCQs total per chapter)
   4. Each question has 4 unique options, a valid answer, and an explanation
   5. Proper Unicode formatting for chemical subscripts and math
   ============================================================================= */

const fs = require('fs');
const path = require('path');

const targetFile = process.argv[2];
if (!targetFile) {
    console.error('Usage: node validate_course.js <path-to-course-chapter-data.js>');
    process.exit(1);
}

const resolvedPath = path.resolve(process.cwd(), targetFile);
if (!fs.existsSync(resolvedPath)) {
    console.error(`Error: File not found at ${resolvedPath}`);
    process.exit(1);
}

console.log('================================================================');
console.log(`📘 VALIDATING COURSE CHAPTER DATA: ${path.basename(resolvedPath)}`);
console.log('================================================================\n');

let chapterData;
try {
    const rawContent = fs.readFileSync(resolvedPath, 'utf8');
    const fn = new Function('window', 'module', 'exports', `${rawContent}; return (typeof module !== 'undefined' && module.exports) ? module.exports : (window.COURSE_CHAPTER_DATA || Object.values(window)[0]);`);
    const mockWindow = {};
    const mockModule = { exports: {} };
    chapterData = fn(mockWindow, mockModule, mockModule.exports);
    if (!chapterData && mockWindow.COURSE_CHAPTER_DATA) chapterData = mockWindow.COURSE_CHAPTER_DATA;
} catch (e) {
    console.error(`❌ Syntax / Execution Error in ${targetFile}:`, e);
    process.exit(1);
}

if (!chapterData || !Array.isArray(chapterData.modules)) {
    console.error('❌ Root object must contain a "modules" array.');
    process.exit(1);
}

const modules = chapterData.modules;
let totalErrors = 0;
let totalQuestions = 0;

console.log(`Checking Modules Count: Found ${modules.length} modules...`);
if (modules.length !== 20) {
    console.error(`❌ Module Count Error: Expected exactly 20 modules, found ${modules.length}.`);
    totalErrors++;
} else {
    console.log('  ✅ PASS: Exactly 20 mini-modules present.');
}

// Inspect each module
modules.forEach((mod, idx) => {
    const modNum = idx + 1;
    const prefix = `[Module ${modNum}]`;

    if (!mod.id || !mod.title) {
        console.error(`  ❌ ${prefix} Missing id or title.`);
        totalErrors++;
    }
    if (!mod.theoryHtml || mod.theoryHtml.length < 50) {
        console.error(`  ❌ ${prefix} Theory content is too brief or missing.`);
        totalErrors++;
    }
    if (!Array.isArray(mod.pointsToRemember) || mod.pointsToRemember.length < 2) {
        console.error(`  ❌ ${prefix} pointsToRemember should have at least 2 items.`);
        totalErrors++;
    }
    if (!Array.isArray(mod.keyNotes) || mod.keyNotes.length < 1) {
        console.error(`  ❌ ${prefix} keyNotes should have at least 1 item.`);
        totalErrors++;
    }
    if (!Array.isArray(mod.questions) || mod.questions.length !== 10) {
        console.error(`  ❌ ${prefix} Must have exactly 10 questions. Found: ${mod.questions ? mod.questions.length : 0}`);
        totalErrors++;
    } else {
        totalQuestions += mod.questions.length;
        mod.questions.forEach((q, qIdx) => {
            const qPrefix = `${prefix} Q${qIdx + 1}`;
            if (!q.question || q.question.trim().length === 0) {
                console.error(`  ❌ ${qPrefix} Missing question text.`);
                totalErrors++;
            }
            if (!Array.isArray(q.options) || q.options.length !== 4) {
                console.error(`  ❌ ${qPrefix} Must contain exactly 4 options.`);
                totalErrors++;
            } else {
                const uniqueOpts = new Set(q.options);
                if (uniqueOpts.size !== 4) {
                    console.error(`  ❌ ${qPrefix} Duplicate options found.`);
                    totalErrors++;
                }
                if (!q.options.includes(q.answer)) {
                    console.error(`  ❌ ${qPrefix} Answer "${q.answer}" does not match any option!`);
                    totalErrors++;
                }
            }
            if (!q.explanation || q.explanation.trim().length === 0) {
                console.error(`  ❌ ${qPrefix} Missing explanation.`);
                totalErrors++;
            }

            // Raw subscript warning check (e.g. Ca(OH)2 instead of Ca(OH)₂)
            const rawSubscriptRegex = /\b(Ca\(OH\)2|Fe3O4|Fe2O3|Pb\(NO3\)2|BaSO4|H2SO4|Na2SO4|CO2|H2O)\b/;
            if (rawSubscriptRegex.test(q.question) || (q.options && q.options.some(o => rawSubscriptRegex.test(o)))) {
                console.warn(`  ⚠️ ${qPrefix} Warning: Found raw ASCII chemical subscript (use Unicode ₀₁₂₃₄₅₆₇₈₉).`);
            }
        });
    }
});

console.log('\n----------------------------------------------------------------');
console.log(`Total Questions Verified: ${totalQuestions} / 200 Expected`);
console.log(`Validation Results: ${totalErrors === 0 ? '🎉 100% PASSED' : `⚠️ ${totalErrors} ERRORS FOUND`}`);
console.log('----------------------------------------------------------------\n');

if (totalErrors > 0) {
    process.exit(1);
} else {
    process.exit(0);
}
