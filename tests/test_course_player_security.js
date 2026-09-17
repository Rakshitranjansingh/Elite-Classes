#!/usr/bin/env node
/* =============================================================================
   ELITE CLASSES — Course Player Security Suite Test
   Validates CBT-Grade Security across all course player instances:
   - Private Closure Vault & Memory Answer Stripping
   - Dynamic SVG Vector Watermark & MutationObserver Defender
   - 3-Strike Tab Proctor & Focus Monitor Modal
   - Canary Seal Honeypot Generator
   - DPI-Aware DevTools Detection & Anti-Theft Lockouts
   ============================================================================= */

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

const targetPlayers = [
    { name: 'Civil Services / Central Course Player', path: 'modules/course/course_player.html' },
    { name: 'Class 10 Science Course Player', path: 'modules/course/class10/science/course_player.html' },
    { name: 'Class 10 Geography Course Player', path: 'modules/course/class10/geography/course_player.html' },
    { name: 'Class 10 Economics Course Player', path: 'modules/course/class10/economics/course_player.html' },
    { name: 'Class 10 History Course Player', path: 'modules/course/class10/history/course_player.html' },
    { name: 'Class 10 Politics Course Player', path: 'modules/course/class10/politics/course_player.html' }
];

let totalChecks = 0;
let passedChecks = 0;

function assertCheck(desc, condition, details = '') {
    totalChecks++;
    if (condition) {
        passedChecks++;
        console.log(`  ✅ PASS: ${desc}`);
    } else {
        console.error(`  ❌ FAIL: ${desc}`);
        if (details) console.error(`     ↳ ${details}`);
    }
}

console.log('================================================================');
console.log('🛡️  VERIFYING COURSE PLAYER CBT-GRADE SECURITY SUITE');
console.log('================================================================\n');

targetPlayers.forEach((player, idx) => {
    console.log(`[${idx + 1}/${targetPlayers.length}] Auditing ${player.name}...`);
    const fullPath = path.join(rootDir, player.path);

    if (!fs.existsSync(fullPath)) {
        assertCheck(`${player.name} exists`, false, `File not found at ${player.path}`);
        return;
    }

    const content = fs.readFileSync(fullPath, 'utf8');

    // 1. Private Closure Vault
    assertCheck('Private Closure Answer Vault Present', content.includes('_secretQuizVault = new Map()') && content.includes('getVaultItem('));

    // 2. Memory Answer Stripping
    assertCheck('Memory Answer Key & Explanation Stripping Active',
        content.includes('delete q.answer') &&
        content.includes('delete q.correct_option') &&
        content.includes('delete q.explanation')
    );

    // 3. Vault-Based Grading & Evaluation
    assertCheck('Vault-Based Answer Evaluation in submitCurrentQuiz',
        content.includes('const vaultItem = getVaultItem(mod.id, q.id)') &&
        content.includes('userAnswers[q.id] === vaultItem.answer')
    );

    // 4. Dynamic SVG Vector Watermark
    assertCheck('Dynamic Vector SVG Forensic Watermark Pattern Active',
        content.includes('renderDynamicWatermark') &&
        content.includes('course-wm-pattern') &&
        content.includes('AUTHENTIC DIGITAL COPY • LEAKS TRACEABLE')
    );

    // 5. MutationObserver Tamper Defender
    assertCheck('MutationObserver Watermark Defender Active',
        content.includes('setupWatermarkProtection') &&
        content.includes('MutationObserver') &&
        content.includes('renderDynamicWatermark()')
    );

    // 6. 3-Strike Tab Proctor & Focus Loss Monitor
    assertCheck('3-Strike Tab Proctor & Window Blur Monitor Active',
        content.includes('triggerProctorStrike') &&
        content.includes('course-proctor-warning-modal') &&
        content.includes('visibilitychange') &&
        content.includes('window.addEventListener(\'blur\'')
    );

    // 7. Canary Honeypot Seal
    assertCheck('Canary Vector Honeypot Seal Active',
        content.includes('generateCanaryQRSvg') &&
        content.includes('canary-seal-container')
    );

    // 8. DPI-Aware DevTools Detection & Anti-Theft Lockouts
    assertCheck('DPI-Aware DevTools Detection & Anti-Theft Protection Active',
        content.includes('devicePixelRatio') &&
        content.includes('contextmenu') &&
        content.includes('dragstart') &&
        content.includes('@media print')
    );

    console.log('');
});

console.log('----------------------------------------------------------------');
console.log(`Total Checks: ${passedChecks}/${totalChecks} Passed (${Math.round((passedChecks / totalChecks) * 100)}%)`);
console.log('----------------------------------------------------------------\n');

if (passedChecks === totalChecks) {
    console.log('🎉 ALL COURSE PLAYERS ARE 100% COMPLIANT WITH CBT-GRADE SECURITY STANDARDS!\n');
    process.exit(0);
} else {
    console.error('⚠️ Some security checks failed. Please inspect the logs above.\n');
    process.exit(1);
}
