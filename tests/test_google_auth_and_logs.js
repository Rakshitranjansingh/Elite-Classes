/**
 * Automated Verification Script for Google Sign-In, Additional Email, Strict Uniqueness,
 * Locked Profile Registration, and Daily Login Counter Logging.
 */

const assert = require('assert');

// 1. Setup Mock Browser / LocalStorage Environment for Node
const storageMap = new Map();
global.localStorage = {
    getItem(key) {
        return storageMap.has(key) ? storageMap.get(key) : null;
    },
    setItem(key, value) {
        storageMap.set(key, String(value));
    },
    removeItem(key) {
        storageMap.delete(key);
    },
    clear() {
        storageMap.clear();
    }
};

global.window = {
    localStorage: global.localStorage
};

// 2. Load DBService
const { DBService } = require('../supabase/api.js');

async function runTests() {
    console.log('\n======================================================');
    console.log('🧪 RUNNING GOOGLE AUTH & LOGIN LOGS VERIFICATION TESTS');
    console.log('======================================================\n');

    // Seed mock local data
    const initialStudents = [
        {
            id: 's_101',
            name: 'Aarav Sharma',
            phone: '9876543210',
            pin: '123456',
            email: 'aarav@gmail.com',
            additional_email: null,
            cls: 'Class 10',
            status: 'approved',
            fee: 1500
        }
    ];
    localStorage.setItem('ec_students', JSON.stringify(initialStudents));

    const initialStaff = [
        {
            id: 't_201',
            name: 'Dr. Verma',
            phone: '9811122233',
            email: 'verma@eliteclasses.com',
            additional_email: null,
            is_teacher: true,
            salary: 35000
        }
    ];
    localStorage.setItem('ec_staff', JSON.stringify(initialStaff));

    const initialAdmins = [
        {
            id: 'a_301',
            name: 'Super Admin',
            phone: '9911519237',
            email: 'admin@eliteclasses.com',
            additional_email: null,
            role: 'Super Admin'
        }
    ];
    localStorage.setItem('ec_admins', JSON.stringify(initialAdmins));

    // ----------------------------------------------------
    // TEST 1: Strict Email Uniqueness Check
    // ----------------------------------------------------
    console.log('▶ Test 1: Verifying Strict Email Uniqueness across all profiles...');
    
    // Check against student email
    const resStudent = await DBService.checkEmailUniqueness('aarav@gmail.com');
    assert.strictEqual(resStudent.isUnique, false, 'Should detect duplicate student email');
    assert.strictEqual(resStudent.role, 'student', 'Should identify duplicate role as student');
    console.log('  ✔ Correctly flagged duplicate student primary email');

    // Case-insensitivity check
    const resCase = await DBService.checkEmailUniqueness('AARAV@GMAIL.COM');
    assert.strictEqual(resCase.isUnique, false, 'Should be case-insensitive');
    console.log('  ✔ Verified case-insensitive email comparison');

    // Check against staff email
    const resStaff = await DBService.checkEmailUniqueness('verma@eliteclasses.com');
    assert.strictEqual(resStaff.isUnique, false, 'Should detect duplicate staff email');
    assert.strictEqual(resStaff.role, 'staff');
    console.log('  ✔ Correctly flagged duplicate staff email');

    // Check against admin email
    const resAdmin = await DBService.checkEmailUniqueness('admin@eliteclasses.com');
    assert.strictEqual(resAdmin.isUnique, false, 'Should detect duplicate admin email');
    assert.strictEqual(resAdmin.role, 'admin');
    console.log('  ✔ Correctly flagged duplicate admin email');

    // Check unique email
    const resNew = await DBService.checkEmailUniqueness('brandnew.student@gmail.com');
    assert.strictEqual(resNew.isUnique, true, 'Unique email should pass');
    console.log('  ✔ Allowed brand new unique email');

    // Check excluding self
    const resSelf = await DBService.checkEmailUniqueness('aarav@gmail.com', 's_101');
    assert.strictEqual(resSelf.isUnique, true, 'Self-exclusion should pass');
    console.log('  ✔ Allowed self-exclusion during profile updates');

    // ----------------------------------------------------
    // TEST 2: Account Linking with PIN Verification
    // ----------------------------------------------------
    console.log('\n▶ Test 2: Verifying Google Account Linking to Existing Profile...');

    // Wrong PIN
    const linkFailPin = await DBService.linkGoogleEmailToExistingStudent('9876543210', '999999', 'aarav.google@gmail.com');
    assert.strictEqual(linkFailPin.success, false, 'Should fail with incorrect PIN');
    console.log('  ✔ Rejected account linking with incorrect PIN');

    // Collision with another user's email
    const linkFailColl = await DBService.linkGoogleEmailToExistingStudent('9876543210', '123456', 'admin@eliteclasses.com');
    assert.strictEqual(linkFailColl.success, false, 'Should fail when linking email belonging to admin');
    console.log('  ✔ Blocked account linking with email already in use');

    // Valid linking
    const linkSuccess = await DBService.linkGoogleEmailToExistingStudent('9876543210', '123456', 'aarav.google@gmail.com');
    assert.strictEqual(linkSuccess.success, true, 'Should link successfully');
    assert.strictEqual(linkSuccess.student.additional_email, 'aarav.google@gmail.com');
    console.log('  ✔ Successfully linked Google email to existing student profile');

    // Check uniqueness now detects the new additional email
    const resAdditional = await DBService.checkEmailUniqueness('aarav.google@gmail.com');
    assert.strictEqual(resAdditional.isUnique, false, 'Additional email must also be treated as occupied');
    console.log('  ✔ Confirmed strict uniqueness covers both primary and additional emails');

    // ----------------------------------------------------
    // TEST 3: New Google Student Registration (Locked Status)
    // ----------------------------------------------------
    console.log('\n▶ Test 3: Verifying Unregistered Google User Onboarding (Locked Profile)...');

    const newStudentData = {
        name: 'Pooja Sen',
        email: 'pooja.sen@gmail.com',
        phone: '9988776655',
        pin: '543210',
        cls: 'Class 10',
        parent: 'Mr. Sen',
        program: 'testseries_only',
        school: 'Kendriya Vidyalaya'
    };

    const regResult = await DBService.registerGoogleStudent(newStudentData);
    assert.strictEqual(regResult.success, true, 'Registration should succeed');
    assert.strictEqual(regResult.student.status, 'pending', 'Student profile must be locked pending admin approval');
    assert.strictEqual(regResult.student.program, 'testseries_only', 'Program selection must be stored correctly');
    console.log('  ✔ Successfully registered Google user with status: "pending" (Admin Approval Required)');
    console.log('  ✔ Verified program toggle (testseries_only) successfully stored');

    // Duplicate registration attempt with same email
    const dupReg = await DBService.registerGoogleStudent({
        ...newStudentData,
        phone: '9988776650'
    });
    assert.strictEqual(dupReg.success, false, 'Duplicate email registration should fail');
    console.log('  ✔ Blocked registration attempt with duplicate Google email');

    // ----------------------------------------------------
    // TEST 4: Daily Login Counter Tracking
    // ----------------------------------------------------
    console.log('\n▶ Test 4: Verifying Daily User Login Counter Tracking...');

    // Note: s_101 already logged in once during successful account linking above!
    const today = new Date().toISOString().split('T')[0];
    const logsBefore = await DBService.fetchDailyLoginLogs(today);
    const existingS101 = logsBefore.find(l => l.user_id === 's_101');
    assert.strictEqual(existingS101 ? existingS101.login_count : 0, 1, 's_101 should have 1 login logged from linking');
    console.log('  ✔ Account linking automatically logged initial login for s_101 (count: 1)');

    // Second login today for s_101
    const log2 = await DBService.recordUserDailyLogin('s_101', 'student', 'aarav@gmail.com', 'google');
    assert.strictEqual(log2.login_count, 2, 'Second login count should increment to 2');
    console.log('  ✔ Subsequent login today atomically incremented count: 2');

    // Third login via whatsapp method
    const log3 = await DBService.recordUserDailyLogin('s_101', 'student', 'aarav@gmail.com', 'whatsapp');
    assert.strictEqual(log3.login_count, 3, 'Third login count should increment to 3');
    console.log('  ✔ Cross-method login today incremented count: 3');

    // Fresh login for brand new user
    const logFresh = await DBService.recordUserDailyLogin('s_fresh_user', 'student', 'fresh@gmail.com', 'google');
    assert.strictEqual(logFresh.login_count, 1, 'Distinct new user login count should start at 1');
    console.log('  ✔ Distinct user login tracked with count: 1');

    // Fetch and check all logs
    const allLogs = await DBService.fetchDailyLoginLogs(today);
    const aaravLog = allLogs.find(l => l.user_id === 's_101');
    assert.strictEqual(aaravLog.login_count, 3, 'Aarav log should have count 3');
    const freshLog = allLogs.find(l => l.user_id === 's_fresh_user');
    assert.strictEqual(freshLog.login_count, 1, 'Fresh user log should have count 1');
    console.log('  ✔ fetchDailyLoginLogs successfully retrieved per-user daily counters');

    console.log('\n======================================================');
    console.log('🎉 ALL GOOGLE AUTH & AUDIT TESTS PASSED SUCCESSFULLY!');
    console.log('======================================================\n');
}

runTests().catch(err => {
    console.error('\n❌ TEST RUN FAILED:', err);
    process.exit(1);
});
