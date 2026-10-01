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
    console.log('🧪 VERIFYING UNIFORM DATABASE-DRIVEN COUPON ENGINE');
    console.log('================================================================\n');

    // -------------------------------------------------------------
    // Test 1: Verify getCoupons returns default active coupons
    // -------------------------------------------------------------
    console.log('▶ Test 1: Verifying DBService.getCoupons()...');
    const initialCoupons = await DBService.getCoupons();
    assert.ok(Array.isArray(initialCoupons), 'Must return an array of coupons');
    assert.ok(initialCoupons.some(c => c.code === 'SANTA150'), 'Must include SANTA150');
    assert.ok(initialCoupons.some(c => c.code === 'ELITE30'), 'Must include ELITE30');
    assert.ok(initialCoupons.some(c => c.code === 'WELCOME'), 'Must include WELCOME');
    console.log('  ✔ Verified default seed coupons present');

    // -------------------------------------------------------------
    // Test 2: Add a brand new coupon to database / local cache
    // -------------------------------------------------------------
    console.log('\n▶ Test 2: Saving a new custom coupon FESTIVE99 (₹99 for 120 Days)...');
    const newCoupon = {
        code: 'FESTIVE99',
        description: 'Special Festive Offer — Flat ₹99 for 4 Months',
        discount_type: 'fixed_price',
        fixed_price: 99.00,
        validity_days: 120,
        is_active: true
    };
    const saveRes = await DBService.saveCoupon(newCoupon);
    assert.ok(saveRes.success, 'saveCoupon must succeed');
    assert.strictEqual(saveRes.coupon.code, 'FESTIVE99');
    console.log('  ✔ Successfully saved new custom coupon FESTIVE99');

    // -------------------------------------------------------------
    // Test 3: Verify coupon verification resolves new coupon dynamically
    // -------------------------------------------------------------
    console.log('\n▶ Test 3: Verifying verifyCoupon("FESTIVE99")...');
    const verifyRes = await DBService.verifyCoupon('FESTIVE99', 'Class 10');
    assert.ok(verifyRes.valid, 'FESTIVE99 must be valid');
    assert.strictEqual(verifyRes.coupon.fixed_price, 99);
    assert.strictEqual(verifyRes.coupon.validity_days, 120);
    console.log('  ✔ Successfully verified new coupon dynamically from database/cache');

    // -------------------------------------------------------------
    // Test 4: Subscriber Registration with new custom coupon
    // -------------------------------------------------------------
    console.log('\n▶ Test 4: Registering candidate with FESTIVE99 coupon...');
    const candidateFestive = {
        name: 'Festive Candidate',
        phone: '9876543210',
        pin: '1234',
        cls: 'Class 10',
        coupon_code: 'FESTIVE99'
    };
    const regResFestive = await DBService.createSubscriberRegistration(candidateFestive);
    assert.ok(regResFestive.success, 'Registration must be successful');
    assert.strictEqual(regResFestive.subscriber.plan_amount, 99, 'Plan amount must be dynamically set to 99');
    const expectedFestiveExpiry = new Date(Date.now() + 120 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    assert.strictEqual(regResFestive.subscriber.valid_until, expectedFestiveExpiry, `Valid until must be ${expectedFestiveExpiry}`);
    console.log(`  ✔ Candidate enrolled with dynamic price (₹${regResFestive.subscriber.plan_amount}) and validity (${regResFestive.subscriber.valid_until})`);

    // -------------------------------------------------------------
    // Test 5: Update an existing coupon (e.g. SANTA150 to ₹120 / 90 days)
    // -------------------------------------------------------------
    console.log('\n▶ Test 5: Updating existing SANTA150 coupon in database/cache...');
    const updateRes = await DBService.saveCoupon({
        code: 'SANTA150',
        description: 'Updated Santa Special — ₹120 for 3 Months',
        discount_type: 'fixed_price',
        fixed_price: 120.00,
        validity_days: 90,
        is_active: true
    });
    assert.ok(updateRes.success, 'Updating coupon must succeed');

    const verifyUpdatedSanta = await DBService.verifyCoupon('SANTA150', 'Class 10');
    assert.ok(verifyUpdatedSanta.valid, 'Updated SANTA150 must be valid');
    assert.strictEqual(verifyUpdatedSanta.coupon.fixed_price, 120, 'Updated price must be 120');
    assert.strictEqual(verifyUpdatedSanta.coupon.validity_days, 90, 'Updated validity must be 90 days');

    const santaCandidateUpdated = {
        name: 'Updated Santa Student',
        phone: '9876543219',
        pin: '5566',
        cls: 'Class 10',
        coupon_code: 'SANTA150'
    };
    const regResUpdatedSanta = await DBService.createSubscriberRegistration(santaCandidateUpdated);
    assert.strictEqual(regResUpdatedSanta.subscriber.plan_amount, 120, 'Must apply newly updated price of 120');
    const expectedUpdatedSantaExpiry = new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    assert.strictEqual(regResUpdatedSanta.subscriber.valid_until, expectedUpdatedSantaExpiry, 'Must apply newly updated validity of 90 days');
    console.log('  ✔ Verified coupon database update reflects immediately in pricing & validity');

    // -------------------------------------------------------------
    // Test 6: Custom Free Pass Coupon (e.g. TRIAL45 - 45 days free)
    // -------------------------------------------------------------
    console.log('\n▶ Test 6: Creating and testing custom Free Pass coupon TRIAL45...');
    await DBService.saveCoupon({
        code: 'TRIAL45',
        description: '45-Day Extended Free Trial Pass',
        discount_type: 'free_pass',
        fixed_price: 0.00,
        validity_days: 45,
        is_active: true
    });
    const trialCandidate = {
        name: 'Trial Student',
        phone: '9876543218',
        pin: '7788',
        cls: 'Class 10',
        coupon_code: 'TRIAL45'
    };
    const trialRegRes = await DBService.createSubscriberRegistration(trialCandidate);
    assert.ok(trialRegRes.success);
    assert.strictEqual(trialRegRes.subscriber.status, 'active', 'Free pass must be active immediately');
    assert.strictEqual(trialRegRes.subscriber.plan_amount, 0, 'Plan amount must be 0');
    assert.strictEqual(trialRegRes.subscriber.payment_method, 'COUPON_TRIAL45');
    const expectedTrialExpiry = new Date(Date.now() + 45 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    assert.strictEqual(trialRegRes.subscriber.valid_until, expectedTrialExpiry);
    console.log('  ✔ Verified custom free pass instant activation and validity');

    // -------------------------------------------------------------
    // Test 7: Verify index.html dynamic pricing implementation
    // -------------------------------------------------------------
    console.log('\n▶ Test 7: Verifying index.html dynamic pricing logic...');
    const indexHtml = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');

    // Check that hardcoded code checks were removed from pricing logic
    assert.ok(!indexHtml.includes("appliedTsCouponData.code === 'SANTA150'"), 'Hardcoded SANTA150 code checks must be removed from index.html');
    assert.ok(indexHtml.includes('discount_type'), 'index.html must dynamically check discount_type');
    assert.ok(indexHtml.includes('fixed_price'), 'index.html must dynamically check fixed_price');
    assert.ok(indexHtml.includes('validity_days'), 'index.html must dynamically check validity_days');
    console.log('  ✔ Verified index.html uniform coupon pricing logic is completely dynamic');

    console.log('\n================================================================');
    console.log('🎉 ALL DATABASE-DRIVEN COUPON TESTS PASSED SUCCESSFULLY! (100%)');
    console.log('================================================================\n');
}

runTests().catch(err => {
    console.error('❌ Test failed:', err);
    process.exit(1);
});
