// tests/test_universal_payment_integration.js
// Verification of Universal Razorpay & UPI Payment Integration across Elite Classes

const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('================================================================');
console.log('🧪 VERIFYING UNIVERSAL PAYMENT INTEGRATION (RAZORPAY & UPI QR)');
console.log('================================================================\n');

// 1. Check razorpay_config.js live key fallback and storage hygiene
console.log('▶ Test 1: Verifying razorpay_config.js live key fallback & hygiene...');
const rzpConfigContent = fs.readFileSync(path.join(__dirname, '../js/razorpay_config.js'), 'utf8');
assert(rzpConfigContent.includes('rzp_live_ThjCyikI4P88f5'), 'razorpay_config.js must default to live key rzp_live_ThjCyikI4P88f5');
assert(rzpConfigContent.includes('localStorage.removeItem(\'ec_razorpay_key_id\')'), 'razorpay_config.js must clear placeholder key from localStorage');
assert(!rzpConfigContent.includes('https://rakshitranjansingh.github.io/Elite-Classes/images/logo.png'), 'Must not reference broken external logo URL');
console.log('  ✔ razorpay_config.js verified with live default and clean asset loading');

// 2. Check supabase/api.js payment config
console.log('▶ Test 2: Verifying supabase/api.js getPaymentConfig defaults...');
const apiContent = fs.readFileSync(path.join(__dirname, '../supabase/api.js'), 'utf8');
assert(apiContent.includes('rzp_live_ThjCyikI4P88f5'), 'supabase/api.js must default to live key');
console.log('  ✔ supabase/api.js verified with live key');

// 3. Check index.html payment points & auto-failover
console.log('▶ Test 3: Verifying index.html payment points & failover...');
const indexContent = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');
assert(indexContent.includes('action === \'subscribe\''), 'index.html must handle ?action=subscribe URL query');
assert(indexContent.includes('⚡ Get Pass (₹299)'), 'index.html navbar must feature Get Pass button');
assert(indexContent.includes('Switching to Instant UPI QR code'), 'index.html onFailure must notify user of seamless QR fallback');
assert(indexContent.includes('await handleSubscriberRegSubmit(\'manual_upi\')'), 'index.html onFailure must auto-switch to manual_upi');
console.log('  ✔ index.html verified: navbar CTA, ?action=subscribe listener, and automatic failover to UPI QR');

// 4. Check UPSC Course Hub Pass link
console.log('▶ Test 4: Verifying upsc_course_hub.html Pass CTA...');
const upscHubContent = fs.readFileSync(path.join(__dirname, '../modules/course/civilservices/UPSC/upsc_course_hub.html'), 'utf8');
assert(upscHubContent.includes('index.html?action=subscribe&cls=Civil+Services'), 'upsc_course_hub.html must link to pass subscription');
console.log('  ✔ upsc_course_hub.html verified: header CTA links directly to Civil Services pass');

// 5. Check Test Series Hubs Pass links
console.log('▶ Test 5: Verifying CBT Test Series Hubs Pass CTAs...');
const tsCivilContent = fs.readFileSync(path.join(__dirname, '../modules/testseries/data/civilservices/testseries_civilservices.html'), 'utf8');
assert(tsCivilContent.includes('index.html?action=subscribe&cls=Civil+Services'), 'testseries_civilservices.html must link to pass subscription');

const ts10Content = fs.readFileSync(path.join(__dirname, '../modules/testseries/data/class10/testseries_class_10.html'), 'utf8');
assert(ts10Content.includes('index.html?action=subscribe&cls=Class+10'), 'testseries_class_10.html must link to pass subscription');
console.log('  ✔ Both Civil Services and Class 10 Test Series Hubs verified with direct pass CTAs');

console.log('\n================================================================');
console.log('🎉 ALL UNIVERSAL PAYMENT INTEGRATION TESTS PASSED (100%)');
console.log('================================================================');
