/* =============================================================================
   ELITE CLASSES — Headless End-to-End CBT & Security Test Suite
   ============================================================================= */

const fs = require('fs');
const path = require('path');
const assert = require('assert');

const rootDir = path.resolve(__dirname, '../');

console.log('================================================================');
console.log('🧪 RUNNING HEADLESS END-TO-END VERIFICATION TEST SUITE');
console.log('================================================================\n');

// Mock browser environment
const localStorageData = {};
global.localStorage = {
    getItem: (key) => localStorageData[key] || null,
    setItem: (key, val) => { localStorageData[key] = String(val); },
    removeItem: (key) => { delete localStorageData[key]; },
    clear: () => { for (let k in localStorageData) delete localStorageData[k]; }
};

global.document = {
    getElementById: (id) => null,
    createElement: (tag) => ({ style: {}, setAttribute: () => {} }),
    body: { appendChild: () => {} }
};
global.window = {
    innerWidth: 1200,
    innerHeight: 800,
    outerWidth: 1200,
    outerHeight: 800
};

// 1. Test CBT Player Logic
console.log('[Test 1] Testing CBTPlayer Anti-Cheat & Answer Stripping...');
const cbtCode = fs.readFileSync(path.join(rootDir, 'modules/testseries/cbtPlayer.js'), 'utf8');

// Evaluate CBTPlayer object
const evalScope = {};
const fn = new Function('window', 'document', 'localStorage', `${cbtCode}; return CBTPlayer;`);
const CBTPlayer = fn(global.window, global.document, global.localStorage);

assert(typeof CBTPlayer === 'object', 'CBTPlayer should be an object');
assert(typeof CBTPlayer.generateCanaryQRSvg === 'function', 'generateCanaryQRSvg should exist');

// Test Canary SVG generation
const qrSvg = CBTPlayer.generateCanaryQRSvg('std_123_test_ch1');
assert(qrSvg.includes('<svg') && qrSvg.includes('viewBox="0 0 25 25"'), 'Valid vector QR SVG should be generated');
console.log('  ✅ Canary QR Vector SVG generation verified');

// Test test randomization and memory answer stripping
const dummyTest = {
    id: 'ts_test_sample',
    title: 'Sample Test',
    marks_per_question: 4,
    negative_mark: 1,
    questions: [
        {
            id: 'q1',
            question: 'What is the formula of water?',
            options: [
                { key: 'A', text: 'H2O' },
                { key: 'B', text: 'CO2' },
                { key: 'C', text: 'NaCl' },
                { key: 'D', text: 'CH4' }
            ],
            correct_option: 'A',
            explanation: 'Water consists of two hydrogen atoms and one oxygen atom.'
        },
        {
            id: 'q2',
            question: 'What is the symbol for Iron?',
            options: [
                { key: 'A', text: 'Au' },
                { key: 'B', text: 'Ag' },
                { key: 'C', text: 'Fe' },
                { key: 'D', text: 'Cu' }
            ],
            correct_option: 'C',
            explanation: 'Ferrum is the Latin root for Iron.'
        }
    ]
};

const randomized = CBTPlayer.randomizeTest(dummyTest);
assert(randomized.questions.length === 2, 'Should preserve question count');
assert(randomized.questions[0].correct_option === undefined, 'Answer key MUST BE STRIPPED from question 0');
assert(randomized.questions[1].correct_option === undefined, 'Answer key MUST BE STRIPPED from question 1');
assert(randomized.questions[0].explanation === undefined, 'Explanation MUST BE STRIPPED from question 0');
assert(CBTPlayer._hiddenAnswerKey[0] !== undefined, 'Hidden answer key must be stored in private player state');
assert(CBTPlayer._hiddenExplanations[0] !== undefined, 'Hidden explanation must be stored in private player state');
console.log('  ✅ Memory Answer-Key & Explanation Stripping verified');

// Test finishAndSubmit scoring and reconstruction
CBTPlayer.activeTest = randomized;
CBTPlayer.student = { id: 'test_student_01', name: 'Test Student', phone: '9876543210' };
// User selects correct answer for Q1
CBTPlayer.userAnswers = { 0: CBTPlayer._hiddenAnswerKey[0], 1: 'WRONG_KEY' };
CBTPlayer.totalSecondsAllocated = 5400;
CBTPlayer.secondsLeft = 5000;

CBTPlayer.finishAndSubmit();

const savedData = JSON.parse(localStorage.getItem('ec_cbt_enrollment_test_student_01'));
assert(savedData && savedData.attempts['ts_test_sample'], 'Attempt record must be persisted');
const attempt = savedData.attempts['ts_test_sample'];
// 1 correct (4 marks) - 1 wrong (1 mark) = 3 marks
assert(attempt.score === 3, `Score should be 3, got ${attempt.score}`);
assert(attempt.correct === 1, 'Correct count should be 1');
assert(attempt.wrong === 1, 'Wrong count should be 1');

// Verify that solutions review reconstruction restored the answers
assert(attempt.shuffledQuestions[0].correct_option !== undefined, 'correct_option must be restored in saved review questions');
assert(attempt.shuffledQuestions[0].explanation !== undefined, 'explanation must be restored in saved review questions');
console.log('  ✅ Correct Scoring & Review Solutions Reconstruction verified');

// 2. Test Backend RBAC & Data Sanitization in supabase/api.js
console.log('\n[Test 2] Testing DBService RBAC Privacy & Field Sanitization...');
const apiCode = fs.readFileSync(path.join(rootDir, 'supabase/api.js'), 'utf8');

global.isSupabaseConnected = () => false;
const apiFn = new Function('window', 'document', 'localStorage', 'isSupabaseConnected', `${apiCode}; return DBService;`);
const DBService = apiFn(global.window, global.document, global.localStorage, global.isSupabaseConnected);

// Seed local teachers and students
localStorage.setItem('ec_students', JSON.stringify([
    { id: 'st_01', name: 'John Doe', pin: '998877', monthly_fee: 3000, cls: 'Class 10' }
]));
localStorage.setItem('ec_teachers', JSON.stringify([
    { id: 't_01', name: 'Mr. Sharma', pin: '445566', base_salary: 50000, incentive: 5000 }
]));
localStorage.setItem('ec_salary_payouts', JSON.stringify([
    { id: 'sp_01', recipientId: 't_01', recipientName: 'Mr. Sharma', amount: 50000, month: 'August 2026' },
    { id: 'sp_02', recipientId: 't_02', recipientName: 'Dr. Verma', amount: 65000, month: 'August 2026' }
]));

// Scenario A: Staff member logged in
localStorage.setItem('ec_user_role', 'staff');
localStorage.setItem('ec_staff_id', 't_01');

const staffViewStudents = DBService.fetchStudents();
const staffViewTeachers = DBService.fetchTeachers();
const staffSalaryLedger = DBService.fetchSalaryPayouts();

Promise.all([staffViewStudents, staffViewTeachers, staffSalaryLedger]).then(([students, teachers, salaries]) => {
    assert(students[0].pin === '******', 'Student PIN must be masked for non-admin');
    assert(students[0].fee === undefined, 'Student fee must be hidden for non-admin');
    console.log('  ✅ Student PIN & Fee Sanitization verified');

    assert(teachers[0].pin === '******', 'Teacher PIN must be masked for non-admin');
    assert(teachers[0].salary === undefined, 'Teacher salary must be hidden for non-admin');
    console.log('  ✅ Faculty Salary & PIN Sanitization verified');

    assert(salaries.length === 1 && salaries[0].recipientId === 't_01', 'Staff member must ONLY see their own salary slip, not other faculty members');
    console.log('  ✅ Faculty Salary Ledger RBAC Privacy Scoping verified (isolated to own recipientId)');

    // Scenario B: Admin logged in
    localStorage.setItem('ec_user_role', 'admin');
    Promise.all([DBService.fetchStudents(), DBService.fetchTeachers(), DBService.fetchSalaryPayouts()]).then(([adminStudents, adminTeachers, adminSalaries]) => {
        assert(adminStudents[0].pin === '998877', 'Admin should view real student PIN');
        assert(adminTeachers[0].salary === 50000, 'Admin should view real teacher salary');
        assert(adminSalaries.length === 2, 'Admin should view all institute salary payouts');
        console.log('  ✅ Admin Full Access Privileges verified');

        // Test Proctor Incident Logging
        DBService.logSecurityIncident({
            test_id: 'ts_test_sample',
            student_id: 'test_student_01',
            incident_type: 'tab_switch',
            strike_count: 1
        }).then(res => {
            assert(res && res.id, 'Incident log should return created record');
            const incidents = JSON.parse(localStorage.getItem('ec_security_incidents') || '[]');
            assert(incidents.length > 0 && incidents[0].test_id === 'ts_test_sample', 'Incident log should be stored');
            console.log('  ✅ Proctor Security Incident Logging verified');

            console.log('\n================================================================');
            console.log('🎉 ALL HEADLESS END-TO-END TESTS PASSED SUCCESSFULLY! (100%)');
            console.log('================================================================\n');
        });
    });
});
