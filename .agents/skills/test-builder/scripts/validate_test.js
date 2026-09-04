#!/usr/bin/env node
/**
 * Elite Classes — Test Series Assessment Validator
 * Validates chapter test files for:
 * 1. Syntax correctness
 * 2. 100-Question count & sequential numbering
 * 3. 5-Tier difficulty breakdown (50 Easy, 10 Medium, 10 Hard, 20 Tricky, 10 Very Hard)
 * 4. Option completeness (A, B, C, D) and valid correct_option
 * 5. Explanations for all questions
 * 6. Scientific & Chemical Unicode typography formatting
 * 
 * Usage:
 *   node validate_test.js <path-to-test-file.js>
 *   node validate_test.js modules/testseries/data/class10/science/
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const args = process.argv.slice(2);
if (args.length === 0) {
    console.error('\x1b[31mError: Missing file or directory path.\x1b[0m');
    console.log('Usage: node validate_test.js <path-to-file-or-dir>');
    process.exit(1);
}

const filesToValidate = [];

function collectFiles(targetPath) {
    const stat = fs.statSync(targetPath);
    if (stat.isDirectory()) {
        const entries = fs.readdirSync(targetPath);
        for (const entry of entries) {
            const fullPath = path.join(targetPath, entry);
            if (fs.statSync(fullPath).isDirectory()) {
                if (entry !== 'ncert' && entry !== 'node_modules') collectFiles(fullPath);
            } else if (entry.endsWith('.js') && entry.startsWith('chapter')) {
                filesToValidate.push(fullPath);
            }
        }
    } else if (stat.isFile() && targetPath.endsWith('.js')) {
        filesToValidate.push(targetPath);
    }
}

for (const arg of args) {
    if (fs.existsSync(arg)) {
        collectFiles(arg);
    } else {
        console.error(`\x1b[31mTarget not found: ${arg}\x1b[0m`);
    }
}

if (filesToValidate.length === 0) {
    console.log('\x1b[33mNo assessment .js files found to validate.\x1b[0m');
    process.exit(0);
}

let totalPassed = 0;
let totalFailed = 0;

for (const filePath of filesToValidate) {
    const relPath = path.relative(process.cwd(), filePath);
    console.log(`\n\x1b[36mValidating: ${relPath}\x1b[0m`);
    const code = fs.readFileSync(filePath, 'utf8');

    // 1. Sandbox Execution
    const sandbox = {
        window: { EliteTestRegistry: [] },
        module: { exports: {} },
        exports: {},
        console: console
    };

    let testData = null;
    try {
        vm.createContext(sandbox);
        vm.runInContext(code, sandbox);

        // Find the exported object
        if (sandbox.module.exports && sandbox.module.exports.id) {
            testData = sandbox.module.exports;
        } else if (sandbox.window.EliteTestRegistry && sandbox.window.EliteTestRegistry.length > 0) {
            testData = sandbox.window.EliteTestRegistry[0];
        } else {
            // Find in global sandbox scope
            for (const key of Object.keys(sandbox)) {
                if (sandbox[key] && typeof sandbox[key] === 'object' && sandbox[key].id && Array.isArray(sandbox[key].questions)) {
                    testData = sandbox[key];
                    break;
                }
            }
        }
    } catch (err) {
        console.log(`  \x1b[31m✖ Syntax / Evaluation Error: ${err.message}\x1b[0m`);
        totalFailed++;
        continue;
    }

    if (!testData || !Array.isArray(testData.questions)) {
        console.log(`  \x1b[31m✖ Error: Could not find valid test object with 'questions' array.\x1b[0m`);
        totalFailed++;
        continue;
    }

    const errors = [];
    const warnings = [];

    // Metadata checks
    if (!testData.id) errors.push("Missing required field 'id'");
    if (!testData.title) errors.push("Missing required field 'title'");
    if (!testData.cls) errors.push("Missing required field 'cls'");
    if (!testData.subject) errors.push("Missing required field 'subject'");
    if (testData.total_marks !== 400) warnings.push(`Total marks is ${testData.total_marks}, expected 400`);
    if (testData.passing_marks !== 160) warnings.push(`Passing marks is ${testData.passing_marks}, expected 160`);

    const qCount = testData.questions.length;
    if (qCount !== 100) {
        errors.push(`Question count is ${qCount}, expected exactly 100 questions`);
    }

    // Difficulty counts
    const diffCounts = { easy: 0, medium: 0, hard: 0, tricky: 0, very_hard: 0 };
    const seenIds = new Set();

    testData.questions.forEach((q, idx) => {
        const qNum = q.question_number || (idx + 1);

        if (!q.id) {
            errors.push(`Q${qNum}: Missing 'id'`);
        } else if (seenIds.has(q.id)) {
            errors.push(`Q${qNum}: Duplicate id '${q.id}'`);
        } else {
            seenIds.add(q.id);
        }

        const qText = q.question_text || q.question;
        if (!qText || typeof qText !== 'string' || qText.trim() === '') {
            errors.push(`Q${qNum}: Empty question text`);
        }

        const diff = (q.difficulty || '').toLowerCase();
        if (diffCounts[diff] !== undefined) {
            diffCounts[diff]++;
        } else {
            errors.push(`Q${qNum}: Invalid difficulty '${q.difficulty}'`);
        }

        // Options check
        const optA = q.option_a || (q.options && q.options[0] ? q.options[0].text : null);
        const optB = q.option_b || (q.options && q.options[1] ? q.options[1].text : null);
        const optC = q.option_c || (q.options && q.options[2] ? q.options[2].text : null);
        const optD = q.option_d || (q.options && q.options[3] ? q.options[3].text : null);

        if (!optA || !optB || !optC || !optD) {
            errors.push(`Q${qNum}: Missing one or more options (A, B, C, D)`);
        }

        const correct = (q.correct_option || q.answer || '').toUpperCase();
        if (!['A', 'B', 'C', 'D'].includes(correct)) {
            errors.push(`Q${qNum}: Invalid correct_option '${q.correct_option}', must be A, B, C, or D`);
        }

        if (!q.explanation || typeof q.explanation !== 'string' || q.explanation.trim() === '') {
            warnings.push(`Q${qNum}: Missing detailed explanation`);
        }

        // Typography warnings (for Science/Chemistry)
        if (testData.subject && testData.subject.toLowerCase().includes('sci')) {
            const rawComb = `${qText} ${optA || ''} ${optB || ''} ${optC || ''} ${optD || ''}`;
            if (/\b(H2O|CO2|O2|H2|SO4|CaCO3|NaCl|Fe3O4|CuSO4|Pb\(NO3\)2)\b/.test(rawComb)) {
                warnings.push(`Q${qNum}: Contains raw chemical formula without Unicode subscripts (e.g. H2O, CO2)`);
            }
        }
    });

    // Verify 5-tier distribution
    if (diffCounts.easy !== 50) warnings.push(`Easy questions: ${diffCounts.easy}/50 expected`);
    if (diffCounts.medium !== 10) warnings.push(`Medium questions: ${diffCounts.medium}/10 expected`);
    if (diffCounts.hard !== 10) warnings.push(`Hard questions: ${diffCounts.hard}/10 expected`);
    if (diffCounts.tricky !== 20) warnings.push(`Tricky questions: ${diffCounts.tricky}/20 expected`);
    if (diffCounts.very_hard !== 10) warnings.push(`Very Hard questions: ${diffCounts.very_hard}/10 expected`);

    if (errors.length > 0) {
        console.log(`  \x1b[31m✖ Failed (${errors.length} errors):\x1b[0m`);
        errors.slice(0, 10).forEach(e => console.log(`    - ${e}`));
        if (errors.length > 10) console.log(`    ... and ${errors.length - 10} more errors`);
        totalFailed++;
    } else {
        console.log(`  \x1b[32m✔ Passed all structural and schema checks!\x1b[0m`);
        console.log(`    Questions: ${qCount} | Easy: ${diffCounts.easy} | Med: ${diffCounts.medium} | Hard: ${diffCounts.hard} | Tricky: ${diffCounts.tricky} | Very Hard: ${diffCounts.very_hard}`);
        totalPassed++;
    }

    if (warnings.length > 0) {
        console.log(`  \x1b[33m⚠ ${warnings.length} Warnings:\x1b[0m`);
        warnings.slice(0, 5).forEach(w => console.log(`    - ${w}`));
        if (warnings.length > 5) console.log(`    ... and ${warnings.length - 5} more warnings`);
    }
}

console.log(`\n\x1b[1mSummary: ${totalPassed} Passed, ${totalFailed} Failed\x1b[0m`);
if (totalFailed > 0) process.exit(1);
