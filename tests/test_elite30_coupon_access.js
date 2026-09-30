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
    // Test 1: Verify index.html contains Uniform Elite Pass & Preview Offer
    // -------------------------------------------------------------
    console.log('▶ Test 1: Verifying index.html Uniform Elite Pass & Preview Offer...');
    const indexHtml = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');

    assert.ok(indexHtml.includes('Uniform Elite Pass'), 'Index must contain Uniform Elite Pass section title');
    assert.ok(indexHtml.includes('Elite Pass Pro'), 'Index must contain Elite Pass Pro card');
    assert.ok(indexHtml.includes('₹299'), 'Index must contain ₹299 offer price for Elite Pass');
    assert.ok(indexHtml.includes('₹499'), 'Index must contain ₹499 offer price for Elite Pass Pro');
    assert.ok(indexHtml.includes('All-India Leaderboard &amp; Real-Time Ranking') || indexHtml.includes('All-India Leaderboard'), 'Must mention All-India Leaderboard & Ranking');
    assert.ok(indexHtml.includes('Weekly Current Affairs'), 'Must mention Weekly Current Affairs');
    assert.ok(indexHtml.includes('Preview Offer'), 'Must frame passes under Preview Offer');
    assert.ok(indexHtml.includes('id="contact"'), 'Index must have id="contact" on footer');

    // Verify CBT keyword removed
    assert.ok(!indexHtml.includes('>Chapter-wise CBT Assessments<'), 'CBT Assessments must be renamed');

    console.log('  ✔ Verified index.html Uniform Elite Pass (₹299 / ₹499), Preview Offer, Leaderboard & Ranking, and CBT removal');

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

    // -------------------------------------------------------------
    // Test 6: Verify SANTA150 DB-driven coupon (₹150 for 6 Months / 180 Days)
    // -------------------------------------------------------------
    console.log('\n▶ Test 6: Verifying SANTA150 Coupon (₹150 for 6 Months / 180 Days)...');
    const verifySanta = await DBService.verifyCoupon('SANTA150', 'Class 10');
    assert.ok(verifySanta.valid, 'SANTA150 must be a valid coupon');
    assert.strictEqual(verifySanta.coupon.fixed_price, 150, 'SANTA150 fixed_price must be 150');
    assert.strictEqual(verifySanta.coupon.validity_days, 180, 'SANTA150 validity_days must be 180');

    const santaCandidate = {
        name: 'Rohan Board Aspirant',
        phone: '9876500003',
        pin: '9988',
        cls: 'Class 10',
        coupon_code: 'SANTA150'
    };
    const santaRegRes = await DBService.createSubscriberRegistration(santaCandidate);
    assert.ok(santaRegRes.success, 'SANTA150 registration must succeed');
    assert.strictEqual(santaRegRes.subscriber.plan_amount, 150, 'Plan amount must be 150 for SANTA150');
    const expectedSantaExpiry = new Date(Date.now() + 180 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    assert.strictEqual(santaRegRes.subscriber.valid_until, expectedSantaExpiry, 'SANTA150 validity must be exactly 180 days (6 months)');
    console.log(`  ✔ Verified SANTA150 coupon: ₹150 for 6 months (180 days until ${santaRegRes.subscriber.valid_until})`);

    console.log('\n================================================================');
    console.log('🎉 ALL TESTS PASSED SUCCESSFULLY! 100% VERIFIED');
    console.log('================================================================\n');
}

runTests().catch(err => {
    console.error('❌ Test failed:', err);
    process.exit(1);
});
