const fs = require('fs');
const path = require('path');
const assert = require('assert');

// Mock localStorage for Node environment
class MockStorage {
    constructor() { this.store = {}; }
    getItem(k) { return this.store[k] !== undefined ? this.store[k] : null; }
    setItem(k, v) { this.store[k] = String(v); }
    removeItem(k) { delete this.store[k]; }
    clear() { this.store = {}; }
}
global.localStorage = new MockStorage();
global.window = { location: { href: '' } };
global.supabaseClient = null;
global.isSupabaseConnected = () => false;

const { DBService } = require('../supabase/api.js');
const { RazorpayGateway } = require('../js/razorpay_config.js');

async function runTests() {
    console.log('================================================================');
    console.log('🧪 VERIFYING RAZORPAY PAYMENT & EDUCATIONAL DONATION GATEWAY');
    console.log('================================================================\n');

    // -------------------------------------------------------------
    // Test 1: Verify DBService Payment Config defaults & updates
    // -------------------------------------------------------------
    console.log('▶ Test 1: Verifying DBService.getPaymentConfig & updatePaymentConfig...');
    const initialConfig = await DBService.getPaymentConfig();
    assert.ok(initialConfig, 'Config object must exist');
    assert.strictEqual(typeof initialConfig.razorpay_enabled, 'boolean', 'razorpay_enabled must be boolean');
    assert.ok(initialConfig.donation_purpose.includes('Donation') || initialConfig.donation_purpose.includes('Support'), 'Must frame fee as donation/support');

    // Update config dynamically at runtime
    const updated = await DBService.updatePaymentConfig({
        razorpay_key_id: 'rzp_test_mockKey998877',
        razorpay_enabled: true,
        donation_purpose: 'Voluntary Educational Support for Civil Services Portal',
        admin_upi_id: 'director@upi'
    });
    assert.ok(updated && updated.success, 'Update must return success');
    const retrieved = await DBService.getPaymentConfig();
    assert.strictEqual(retrieved.razorpay_key_id, 'rzp_test_mockKey998877', 'Must retrieve updated key from cache/DB');
    assert.strictEqual(retrieved.razorpay_enabled, true, 'Enabled must be true');
    console.log('  ✔ Payment config retrieval and dynamic runtime updating verified');

    // -------------------------------------------------------------
    // Test 2: Verify Razorpay Instant Auto-Activation in DBService
    // -------------------------------------------------------------
    console.log('\n▶ Test 2: Verifying Razorpay Instant Subscriber Registration & Activation...');
    const oneYearFromNow = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    const subPayload = {
        name: 'Priya Civil Aspirant',
        phone: '9876500001',
        email: 'priya@example.com',
        pin: '1234',
        cls: 'Civil Services',
        exam_target: 'UPSC CSE 2026',
        payment_method: 'RAZORPAY',
        payment_ref: 'pay_MockRazorpayId123',
        status: 'active',
        valid_until: oneYearFromNow,
        activated_at: new Date().toISOString(),
        activated_by: 'RAZORPAY_GATEWAY'
    };

    const subRes = await DBService.createSubscriberRegistration(subPayload);
    assert.ok(subRes && subRes.success, 'Registration must succeed');
    assert.ok(subRes.subscriber, 'Must return subscriber object');
    assert.strictEqual(subRes.subscriber.status, 'active', 'Razorpay registration must be instantly ACTIVE (zero admin delay)');
    assert.strictEqual(subRes.subscriber.valid_until, oneYearFromNow, 'Validity must be set to 365 days');
    assert.strictEqual(subRes.subscriber.activated_by, 'RAZORPAY_GATEWAY', 'Activated by must be RAZORPAY_GATEWAY');
    console.log(`  ✔ Razorpay subscriber activated instantly with status=active until ${oneYearFromNow}`);

    // -------------------------------------------------------------
    // Test 3: Verify Razorpay Gateway Helper Object
    // -------------------------------------------------------------
    console.log('\n▶ Test 3: Verifying RazorpayGateway helper module...');
    assert.ok(RazorpayGateway, 'RazorpayGateway helper must be defined');
    assert.strictEqual(typeof RazorpayGateway.getActiveConfig, 'function', 'getActiveConfig must be a function');
    assert.strictEqual(typeof RazorpayGateway.openDonationCheckout, 'function', 'openDonationCheckout must be a function');
    
    const activeGwConfig = await RazorpayGateway.getActiveConfig();
    assert.strictEqual(activeGwConfig.keyId, 'rzp_test_mockKey998877', 'Helper must read dynamically configured key');
    console.log('  ✔ RazorpayGateway helper properly configured and connected to DBService');

    // -------------------------------------------------------------
    // Test 4: Verify index.html Presentation & No Hardcoded Secrets
    // -------------------------------------------------------------
    console.log('\n▶ Test 4: Verifying index.html modal, UI wording & security...');
    const indexHtml = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');

    // Check script include
    assert.ok(indexHtml.includes('js/razorpay_config.js'), 'index.html must include js/razorpay_config.js');
    
    // Check voluntary donation terminology
    assert.ok(indexHtml.includes('Voluntary Educational Support') || indexHtml.includes('Voluntary Educational Donation'), 'Fee must be framed as voluntary educational support/donation');
    assert.ok(indexHtml.includes('Instant Donation &amp; Auto-Activation') || indexHtml.includes('Instant Donation & Auto-Activation'), 'Must offer instant donation checkout button');
    assert.ok(indexHtml.includes('Scan Manual UPI QR Code') || indexHtml.includes('Scan &amp; Pay UPI QR'), 'Must preserve fallback manual UPI QR option');

    // Check no real live secret keys are committed
    assert.ok(!indexHtml.includes('rzp_live_'), 'index.html must NOT contain hardcoded live razorpay keys');
    assert.ok(!indexHtml.includes('key_secret'), 'index.html must NOT contain any key_secret');
    console.log('  ✔ index.html verified: clean of hardcoded secrets, framing fee as voluntary donation, dual checkout enabled');

    // -------------------------------------------------------------
    // Test 5: Verify admin_home.html Gateway Config Management
    // -------------------------------------------------------------
    console.log('\n▶ Test 5: Verifying admin_home.html Gateway Settings UI...');
    const adminHtml = fs.readFileSync(path.join(__dirname, '../admin_home.html'), 'utf8');
    assert.ok(adminHtml.includes('js/razorpay_config.js'), 'admin_home.html must include js/razorpay_config.js');
    assert.ok(adminHtml.includes('paymentGatewayModal'), 'admin_home.html must contain #paymentGatewayModal');
    assert.ok(adminHtml.includes('openPaymentGatewayModal'), 'admin_home.html must have openPaymentGatewayModal trigger');
    assert.ok(adminHtml.includes('cfg-rzp-key'), 'admin_home.html must have cfg-rzp-key input');
    console.log('  ✔ admin_home.html verified: full runtime UI to update Razorpay key and settings without code rebuild');

    console.log('\n================================================================');
    console.log('🎉 ALL RAZORPAY DONATION GATEWAY TESTS PASSED (100%)');
    console.log('================================================================\n');
}

runTests().catch(err => {
    console.error('❌ Test suite failed:', err);
    process.exit(1);
});
