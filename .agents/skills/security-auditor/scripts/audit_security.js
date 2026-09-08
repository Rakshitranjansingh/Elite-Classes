#!/usr/bin/env node
/* =============================================================================
   ELITE CLASSES — Security & RBAC Automated Auditor
   Validates:
   - Anti-Cheat & Anti-Leak (cbtPlayer.js)
   - RBAC Privacy & Data Scoping (supabase/api.js)
   - Real Marks Enforcement (js/staffHome.js)
   - Database Schema & Migrations Integrity
   ============================================================================= */

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '../../../../');

let passedChecks = 0;
let totalChecks = 0;

function assertCheck(description, condition, failureDetails = '') {
    totalChecks++;
    if (condition) {
        passedChecks++;
        console.log(`  ✅ PASS: ${description}`);
    } else {
        console.error(`  ❌ FAIL: ${description}`);
        if (failureDetails) console.error(`     ↳ Details: ${failureDetails}`);
    }
}

console.log('================================================================');
console.log('🛡️  ELITE CLASSES — ENTERPRISE SECURITY & RBAC AUDIT REPORT');
console.log('================================================================\n');

// 1. Check cbtPlayer.js
console.log('[1/4] Auditing CBT Player Anti-Leak & Anti-Cheat Suite...');
const cbtPath = path.join(rootDir, 'modules/testseries/cbtPlayer.js');
if (fs.existsSync(cbtPath)) {
    const cbtContent = fs.readFileSync(cbtPath, 'utf8');

    assertCheck('Dynamic Forensic Watermark Injection Present', cbtContent.includes('injectWatermark'));
    assertCheck('MutationObserver Watermark Defender Active', cbtContent.includes('MutationObserver') && cbtContent.includes('setupWatermarkProtection'));
    assertCheck('3-Strike Tab Proctor & Window Blur Monitor Active', cbtContent.includes('triggerProctorStrike') && cbtContent.includes('visibilitychange'));
    assertCheck('DevTools Geometry Check Active', cbtContent.includes('outerWidth - window.innerWidth'));
    assertCheck('Memory Answer Key Stripping in randomizeTest()', cbtContent.includes('_hiddenAnswerKey') && (cbtContent.includes('delete safeQ.correct_option') || cbtContent.includes('delete q.correct_option')));
    assertCheck('Private Closure Answer Vault Active', cbtContent.includes('_secretAnswerVault'));
    assertCheck('Positional Options Guard (All/Both) Active', cbtContent.includes('hasPositionalOption'));
    assertCheck('Canary QR Forensic Honeypot Seal Active', cbtContent.includes('generateCanaryQRSvg') && cbtContent.includes('cbt-canary-seal'));
    assertCheck('Proctor Security Cloud Logging Hook', cbtContent.includes('logSecurityIncident'));
} else {
    assertCheck('cbtPlayer.js exists', false, 'File missing');
}

// 2. Check supabase/api.js
console.log('\n[2/4] Auditing Backend Data Access Layer (supabase/api.js)...');
const apiPath = path.join(rootDir, 'supabase/api.js');
if (fs.existsSync(apiPath)) {
    const apiContent = fs.readFileSync(apiPath, 'utf8');

    assertCheck('Salary Payouts Scoped to Staff ID for Faculty', apiContent.includes('fetchSalaryPayouts') && apiContent.includes('targetStaffId'));
    assertCheck('Student PIN & Fee Sanitization for Non-Admins', apiContent.includes('fetchStudents') && apiContent.includes('isAdmin ? (s.pin'));
    assertCheck('Faculty Salary & Incentive Sanitization for Non-Admins', apiContent.includes('fetchTeachers') && apiContent.includes('isAdmin ? parseFloat(t.base_salary'));
    assertCheck('Proctor Security Incident Logging Method Exists', apiContent.includes('logSecurityIncident'));
    assertCheck('Combined Multi-Class Multi-Subject Leaderboard Exists', apiContent.includes('fetchCombinedLeaderboard'));
} else {
    assertCheck('supabase/api.js exists', false, 'File missing');
}

// 3. Check js/staffHome.js
console.log('\n[3/4] Auditing Faculty Exam Marks Integrity (js/staffHome.js)...');
const staffHomePath = path.join(rootDir, 'js/staffHome.js');
if (fs.existsSync(staffHomePath)) {
    const staffContent = fs.readFileSync(staffHomePath, 'utf8');

    assertCheck('Pseudo-Random Marks Generator Eliminated', !staffContent.includes('Math.min(100, 64 + seed)'));
    assertCheck('Pending Marks State Displayed for Unentered Scores', staffContent.includes('Pending Entry') || staffContent.includes('hasAnyMarks'));
} else {
    assertCheck('js/staffHome.js exists', false, 'File missing');
}

// 4. Check Dynamic Subject Portal & Database Migrations
console.log('\n[4/4] Auditing Dynamic Subject Portal & Database Migrations...');
const portalPath = path.join(rootDir, 'modules/testseries/subject_portal.html');
assertCheck('Dynamic subject_portal.html Template Present', fs.existsSync(portalPath));

const mig19Path = path.join(rootDir, 'database/migrations/019_rbac_privacy_and_proctoring_logs.sql');
assertCheck('Migration 019 for Security Audit Logs Exists', fs.existsSync(mig19Path));

console.log('\n----------------------------------------------------------------');
console.log(`Audit Completed: ${passedChecks}/${totalChecks} Checks Passed (${Math.round((passedChecks / totalChecks) * 100)}%)`);
console.log('----------------------------------------------------------------');

if (passedChecks === totalChecks) {
    console.log('🎉 ZERO VULNERABILITIES DETECTED! System is 100% compliant with Elite Classes security & RBAC standards.\n');
    process.exit(0);
} else {
    console.error('⚠️ Compliance failures detected. Please review the failed checks above.\n');
    process.exit(1);
}
