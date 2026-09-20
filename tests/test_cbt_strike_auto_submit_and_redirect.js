#!/usr/bin/env node
/* =============================================================================
   ELITE CLASSES — CBT 3-Strike Proctor Auto-Submit & Homepage Redirection Test
   Validates:
   1. CBTPlayer 3-strike tab violation auto-submits current test assessment.
   2. CBTPlayer resolves student, subscriber, staff, and admin respective homepages.
   3. CBTPlayer redirects candidate to their respective homepage on 3rd strike.
   4. Course Player 3-strike violation auto-submits current mini-module quiz.
   5. Course Player redirects candidate to their respective homepage on 3rd strike.
   ============================================================================= */

const fs = require('fs');
const path = require('path');
const assert = require('assert');

const rootDir = path.resolve(__dirname, '..');

console.log('================================================================');
console.log('🚨 TESTING CBT & COURSE 3-STRIKE AUTO-SUBMIT & REDIRECT SYSTEM');
console.log('================================================================\n');

// Mock localStorage
const storage = {};
const mockLocalStorage = {
    getItem: (k) => storage[k] !== undefined ? storage[k] : null,
    setItem: (k, v) => { storage[k] = String(v); },
    removeItem: (k) => { delete storage[k]; },
    clear: () => { Object.keys(storage).forEach(k => delete storage[k]); }
};
global.localStorage = mockLocalStorage;

// Mock DOM & Window
class MockElement {
    constructor(id = '') {
        this.id = id;
        this.style = {};
        this.textContent = '';
        this.innerHTML = '';
        this._attrs = {};
    }
    setAttribute(k, v) { this._attrs[k] = v; }
    getAttribute(k) { return this._attrs[k] || null; }
    appendChild() {}
    querySelector() { return null; }
    querySelectorAll() { return []; }
}

const mockDoc = {
    getElementById: (id) => new MockElement(id),
    createElement: (tag) => new MockElement(tag),
    querySelector: (sel) => {
        if (sel.includes('student_home.html')) {
            const el = new MockElement();
            el.setAttribute('href', '../../../../../student_home.html');
            return el;
        }
        return null;
    },
    querySelectorAll: () => [],
    body: new MockElement('body'),
    head: new MockElement('head'),
    addEventListener: () => {},
    removeEventListener: () => {}
};

const mockWin = {
    location: {
        pathname: '/modules/testseries/data/class10/science/science_10.html',
        href: ''
    },
    addEventListener: () => {},
    removeEventListener: () => {},
    alert: () => {},
    confirm: () => true
};

global.window = mockWin;
global.document = mockDoc;

// Load CBT Player
const cbtCode = fs.readFileSync(path.join(rootDir, 'modules/testseries/cbtPlayer.js'), 'utf8');
const cbtFn = new Function('window', 'document', 'localStorage', `${cbtCode}; return CBTPlayer;`);
const CBTPlayer = cbtFn(mockWin, mockDoc, mockLocalStorage);

// --- TEST 1: CBTPlayer Redirection URL Resolution ---
console.log('[Test 1] Verifying Respective Homepage Resolution in CBTPlayer...');

mockLocalStorage.setItem('ec_user_role', 'student');
mockLocalStorage.setItem('ec_student_id', 'std_001');
assert.strictEqual(
    CBTPlayer.getRespectiveHomepageUrl(),
    '../../../../../student_home.html',
    'Student role should resolve to student_home.html with relative prefix'
);
console.log('  ✅ Student role resolves to: ../../../../../student_home.html');

mockLocalStorage.setItem('ec_user_role', 'testseries_subscriber');
mockLocalStorage.setItem('ec_subscriber_id', 'sub_001');
assert.strictEqual(
    CBTPlayer.getRespectiveHomepageUrl(),
    '../../../../../testseries_user_home.html',
    'Testseries subscriber should resolve to testseries_user_home.html'
);
console.log('  ✅ Subscriber role resolves to: ../../../../../testseries_user_home.html');

mockLocalStorage.setItem('ec_user_role', 'staff');
mockLocalStorage.setItem('ec_staff_id', 'staff_001');
assert.strictEqual(
    CBTPlayer.getRespectiveHomepageUrl(),
    '../../../../../staff_home.html',
    'Staff role should resolve to staff_home.html'
);
console.log('  ✅ Staff role resolves to: ../../../../../staff_home.html');

mockLocalStorage.setItem('ec_user_role', 'admin');
mockLocalStorage.setItem('ec_admin_id', 'admin_001');
assert.strictEqual(
    CBTPlayer.getRespectiveHomepageUrl(),
    '../../../../../admin_home.html',
    'Admin role should resolve to admin_home.html'
);
console.log('  ✅ Admin role resolves to: ../../../../../admin_home.html');

// --- TEST 2: CBTPlayer 3-Strike Auto-Submit & Redirect ---
console.log('\n[Test 2] Simulating CBT Assessment with 3 Strikes...');

const testData = {
    id: 'ch1_sci_test',
    title: 'Chemical Reactions and Equations Test',
    cls: 'Class 10',
    subject: 'Science',
    duration_mins: 90,
    marks_per_question: 4,
    negative_mark: 1,
    questions: [
        {
            id: 'q1',
            question: 'What is the color of FeSO4 crystals?',
            options: [
                { key: 'A', text: 'Green' },
                { key: 'B', text: 'White' },
                { key: 'C', text: 'Blue' },
                { key: 'D', text: 'Brown' }
            ],
            correct_option: 'A',
            explanation: 'Ferrous sulphate crystals are pale green.'
        }
    ]
};

const studentData = {
    id: 'std_test_01',
    name: 'Rahul Sharma',
    cls: 'Class 10',
    user_type: 'student'
};

mockLocalStorage.setItem('ec_user_role', 'student');
mockLocalStorage.setItem('ec_student_id', 'std_test_01');
mockWin.location.href = '';

const randomized = CBTPlayer.randomizeTest(testData);
CBTPlayer.activeTest = randomized;
CBTPlayer.student = studentData;
CBTPlayer.userAnswers = { 0: CBTPlayer._hiddenAnswerKey[0] }; // Student answered Q1 correctly
CBTPlayer.totalSecondsAllocated = 5400;
CBTPlayer.secondsLeft = 5000;
CBTPlayer.proctorStrikes = 0;
CBTPlayer.isSubmitted = false;
CBTPlayer.isRedirecting = false;

assert.strictEqual(CBTPlayer.proctorStrikes, 0, 'Initial strikes must be 0');

(async () => {
    // Strike 1
    await CBTPlayer.triggerProctorStrike('Tab switch 1');
    assert.strictEqual(CBTPlayer.proctorStrikes, 1, 'Proctor strikes should be 1');
    assert.strictEqual(mockWin.location.href, '', 'Should not redirect on Strike 1');
    CBTPlayer.resumeFromProctorWarning();

    // Strike 2
    await CBTPlayer.triggerProctorStrike('Tab switch 2');
    assert.strictEqual(CBTPlayer.proctorStrikes, 2, 'Proctor strikes should be 2');
    assert.strictEqual(mockWin.location.href, '', 'Should not redirect on Strike 2');
    CBTPlayer.resumeFromProctorWarning();

    // Strike 3 - Triggers Auto-Submit and Homepage Redirect
    await CBTPlayer.triggerProctorStrike('Tab switch 3 (Final violation)');
    assert.strictEqual(CBTPlayer.proctorStrikes, 3, 'Proctor strikes should be 3');
    assert.strictEqual(CBTPlayer.isSubmitted, true, 'Assessment must be submitted');
    assert.strictEqual(
        mockWin.location.href,
        '../../../../../student_home.html',
        'Must redirect candidate to respective homepage on 3rd strike'
    );

    // Verify localStorage submission
    const studentRecord = JSON.parse(mockLocalStorage.getItem(`ec_cbt_enrollment_${studentData.id}`) || '{}');
    assert(studentRecord.attempts && studentRecord.attempts['ch1_sci_test'], 'Attempt must be saved in localStorage');
    assert.strictEqual(studentRecord.attempts['ch1_sci_test'].score, 4, 'Score must be evaluated and recorded (4 marks)');

    console.log('  ✅ Strike 1: Warning recorded, no redirect');
    console.log('  ✅ Strike 2: Final warning recorded, no redirect');
    console.log('  ✅ Strike 3: Test auto-submitted, score evaluated (4/4), and redirected to student_home.html');

    // --- TEST 3: Course Player 3-Strike Verification ---
    console.log('\n[Test 3] Verifying Course Player 3-Strike Auto-Submit & Redirect...');
    const coursePlayerCode = fs.readFileSync(path.join(rootDir, 'modules/course/course_player.html'), 'utf8');

    assert(coursePlayerCode.includes('proctorStrikes >= maxProctorStrikes'), 'Course player must check maxProctorStrikes');
    assert(coursePlayerCode.includes('await submitCurrentQuiz(true)'), 'Course player must auto-submit current quiz without prompt');
    assert(coursePlayerCode.includes('getCourseRespectiveHomepageUrl()'), 'Course player must resolve respective homepage');
    assert(coursePlayerCode.includes('window.location.href = getCourseRespectiveHomepageUrl()'), 'Course player must redirect on 3rd strike');

    console.log('  ✅ Course Player auto-submit on 3 strikes verified');
    console.log('  ✅ Course Player homepage redirection on 3 strikes verified');

    console.log('\n================================================================');
    console.log('🎉 ALL CBT & COURSE 3-STRIKE REDIRECTION TESTS PASSED! (100%)');
    console.log('================================================================\n');
})();
