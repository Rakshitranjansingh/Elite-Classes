const fs = require('fs');
const path = require('path');
const assert = require('assert');

// Mock localStorage for Node.js environment
class MockStorage {
    constructor() { this.store = {}; }
    getItem(k) { return this.store[k] !== undefined ? this.store[k] : null; }
    setItem(k, v) { this.store[k] = String(v); }
    removeItem(k) { delete this.store[k]; }
    clear() { this.store = {}; }
}
global.localStorage = new MockStorage();

global.window = {
    location: { href: '' }
};

// Mock Supabase environment
global.supabaseClient = null;
global.isSupabaseConnected = () => false;

// Load API
const { DBService } = require('../supabase/api.js');

async function runTests() {
    console.log('================================================================');
    console.log('🧪 VERIFYING PUBLIC SERVICE COMMISSIONS OFFER & ELITE30 COUPON');
    console.log('================================================================\n');

    // -------------------------------------------------------------
    // Test 1: Verify index.html contains pricing & offering card
    // -------------------------------------------------------------
    console.log('▶ Test 1: Verifying index.html Academic Offerings...');
    const indexHtml = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');

    assert.ok(indexHtml.includes('Public Service Commissions GS & Test Pass'), 'Index must contain Civil Services card title');
    assert.ok(indexHtml.includes('₹14,000'), 'Index must contain ₹14,000 strikethrough price');
    assert.ok(indexHtml.includes('₹299'), 'Index must contain ₹299 offer price');
    assert.ok(indexHtml.includes('id="contact"'), 'Index must have id="contact" on footer');
    assert.ok(indexHtml.includes('id="cbt-test-series"'), 'Index must have id="cbt-test-series"');

    // Verify ribbons are removed
    assert.ok(!indexHtml.includes('Flagship Program'), 'Flagship Program ribbon must be removed');
    assert.ok(!indexHtml.includes('Self-Paced CBT Pass'), 'Self-Paced CBT Pass ribbon must be removed');
    assert.ok(!indexHtml.includes('UPSC • BPSC • UPPCS'), 'UPSC BPSC UPPCS ribbon must be removed');

    // Verify CBT keyword removed from Card 2 title
    assert.ok(indexHtml.includes('<h3 class="course-name">Annual Test Series Pass</h3>'), 'Annual Test Series Pass must not have CBT in title');

    // Verify secret code is not leaked on the card
    assert.ok(!indexHtml.includes('Use coupon code "ELITE30"'), 'Secret coupon code ELITE30 must not be displayed publicly on card');
    console.log('  ✔ Verified index.html offering card, pricing (<s>₹14,000</s> ₹299), ribbons removed, CBT keyword removed, and secret coupon confidential');

    // -------------------------------------------------------------
    // Test 2: Test createSubscriberRegistration with coupon ELITE30
    // -------------------------------------------------------------
    console.log('\n▶ Test 2: Verifying Instant 30-Day Pass via Coupon ELITE30...');
    const testCandidate = {
        name: 'Aarav Civil Aspirant',
        phone: '9876500001',
        pin: '4321',
        cls: 'Civil Services',
        coupon_code: 'ELITE30'
    };

    const regRes = await DBService.createSubscriberRegistration(testCandidate);
    assert.ok(regRes.success, 'Registration must be successful');
    assert.ok(regRes.subscriber, 'Must return subscriber object');
    assert.strictEqual(regRes.subscriber.status, 'active', 'Status must be active immediately (no admin confirmation)');
    assert.strictEqual(regRes.subscriber.plan_amount, 0, 'Plan amount must be 0 for ELITE30');
    assert.strictEqual(regRes.subscriber.payment_method, 'COUPON_ELITE30', 'Payment method must be COUPON_ELITE30');

    // Check 30-day validity
    const now = new Date();
    const expectedExpiry = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    assert.strictEqual(regRes.subscriber.valid_until, expectedExpiry, `Validity must be exactly 30 days from now (${expectedExpiry})`);
    console.log(`  ✔ Verified instant active status and 30-day validity (${regRes.subscriber.valid_until})`);

    // -------------------------------------------------------------
    // Test 3: Test Login via authenticateByWhatsApp (Zero Admin Needed)
    // -------------------------------------------------------------
    console.log('\n▶ Test 3: Verifying WhatsApp + PIN Login for 30-Day Pass...');
    const loginRes = await DBService.authenticateByWhatsApp(testCandidate.phone, testCandidate.pin);
    assert.ok(loginRes.success, 'Login must succeed without admin intervention');
    assert.strictEqual(loginRes.role, 'testseries_subscriber', 'Role must be testseries_subscriber');
    assert.strictEqual(loginRes.user.status, 'active', 'User status must be active');
    assert.strictEqual(loginRes.user.cls, 'Civil Services', 'User class must be Civil Services');
    assert.strictEqual(
        loginRes.redirectUrl,
        'modules/testseries/data/civilservices/testseries_civilservices.html',
        'Redirect URL must point directly to Civil Services Test Series Hub'
    );
    console.log('  ✔ Verified WhatsApp + PIN instant login and direct redirection to Civil Services CBT Hub');

    // -------------------------------------------------------------
    // Test 4: Test Coupon Alias WELCOME works identically
    // -------------------------------------------------------------
    console.log('\n▶ Test 4: Verifying WELCOME Alias Coupon...');
    const welcomeCandidate = {
        name: 'Neha IAS Aspirant',
        phone: '9876500002',
        pin: '5678',
        cls: 'Civil Services',
        coupon_code: 'WELCOME'
    };
    const welcomeRes = await DBService.createSubscriberRegistration(welcomeCandidate);
    assert.ok(welcomeRes.success, 'WELCOME coupon registration must be successful');
    assert.strictEqual(welcomeRes.subscriber.status, 'active', 'Status must be active');
    assert.strictEqual(welcomeRes.subscriber.plan_amount, 0, 'Plan amount must be 0');
    assert.strictEqual(welcomeRes.subscriber.valid_until, expectedExpiry, 'Must also have 30 days validity');
    console.log('  ✔ Verified WELCOME alias coupon works smoothly');

    // -------------------------------------------------------------
    // Test 5: Verify student_home.html contains civilservices.js
    // -------------------------------------------------------------
    console.log('\n▶ Test 5: Verifying student_home.html Script Imports...');
    const studentHomeHtml = fs.readFileSync(path.join(__dirname, '../student_home.html'), 'utf8');
    assert.ok(
        studentHomeHtml.includes('modules/studentView/today/civilservices.js'),
        'student_home.html must include civilservices.js for aspirant view'
    );
    console.log('  ✔ Verified student_home.html includes civilservices.js');

    console.log('\n================================================================');
    console.log('🎉 ALL TESTS PASSED SUCCESSFULLY! 100% VERIFIED');
    console.log('================================================================\n');
}

runTests().catch(err => {
    console.error('❌ Test failed:', err);
    process.exit(1);
});
