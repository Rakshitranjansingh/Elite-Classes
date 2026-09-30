const fs = require('fs');
const path = require('path');
const assert = require('assert');

// Mock environment
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

async function runTests() {
    console.log('================================================================');
    console.log('🧪 VERIFYING PASS PRICING PLANS TABLE & NAVBAR PROFILE DROPDOWN');
    console.log('================================================================\n');

    // -------------------------------------------------------------
    // Test 1: Verify pass_plans table migration & schema
    // -------------------------------------------------------------
    console.log('▶ Test 1: Verifying migration 027 and supabase/schema.sql...');
    const migrationFile = path.join(__dirname, '../database/migrations/027_add_pass_plans_table.sql');
    assert.ok(fs.existsSync(migrationFile), 'Migration 027 file must exist');
    const migSql = fs.readFileSync(migrationFile, 'utf8');
    assert.ok(migSql.includes('CREATE TABLE IF NOT EXISTS pass_plans'), 'Migration must create pass_plans table');
    assert.ok(migSql.includes('elite_pass_1y'), 'Migration must seed elite_pass_1y');
    assert.ok(migSql.includes('elite_pass_pro_3y'), 'Migration must seed elite_pass_pro_3y');

    const schemaFile = path.join(__dirname, '../supabase/schema.sql');
    const schemaSql = fs.readFileSync(schemaFile, 'utf8');
    assert.ok(schemaSql.includes('CREATE TABLE IF NOT EXISTS pass_plans'), 'Base schema must contain pass_plans table');
    console.log('  ✔ Migration 027 and supabase/schema.sql verified');

    // -------------------------------------------------------------
    // Test 2: Verify DBService.getPassPlans() defaults (6 plans)
    // -------------------------------------------------------------
    console.log('\n▶ Test 2: Verifying DBService.getPassPlans()...');
    const plans = await DBService.getPassPlans();
    assert.ok(Array.isArray(plans), 'Plans must be an array');
    assert.strictEqual(plans.length, 6, 'Must contain exactly 6 duration plans (3 for Elite Pass, 3 for Elite Pass Pro)');

    const school1 = plans.find(p => p.id === 'elite_pass_1y');
    assert.ok(school1, 'elite_pass_1y must exist');
    assert.strictEqual(school1.price, 299.00, 'Elite Pass 1y price must be 299');
    assert.strictEqual(school1.duration_years, 1, 'Elite Pass 1y duration must be 1');

    const school2 = plans.find(p => p.id === 'elite_pass_2y');
    assert.ok(school2, 'elite_pass_2y must exist');
    assert.strictEqual(school2.price, 499.00, 'Elite Pass 2y price must be 499');

    const school3 = plans.find(p => p.id === 'elite_pass_3y');
    assert.ok(school3, 'elite_pass_3y must exist');
    assert.strictEqual(school3.price, 599.00, 'Elite Pass 3y price must be 599');

    const civil1 = plans.find(p => p.id === 'elite_pass_pro_1y');
    assert.ok(civil1, 'elite_pass_pro_1y must exist');
    assert.strictEqual(civil1.price, 499.00, 'Elite Pass Pro 1y price must be 499');

    const civil2 = plans.find(p => p.id === 'elite_pass_pro_2y');
    assert.ok(civil2, 'elite_pass_pro_2y must exist');
    assert.strictEqual(civil2.price, 799.00, 'Elite Pass Pro 2y price must be 799');

    const civil3 = plans.find(p => p.id === 'elite_pass_pro_3y');
    assert.ok(civil3, 'elite_pass_pro_3y must exist');
    assert.strictEqual(civil3.price, 999.00, 'Elite Pass Pro 3y price must be 999');
    console.log('  ✔ All 6 default pass plans verified successfully');

    // -------------------------------------------------------------
    // Test 3: Verify DBService.updatePassPlan()
    // -------------------------------------------------------------
    console.log('\n▶ Test 3: Verifying DBService.updatePassPlan()...');
    const updateRes = await DBService.updatePassPlan('elite_pass_1y', { price: 349.00 });
    assert.ok(updateRes.success, 'Update pass plan must succeed');
    const refreshedPlans = await DBService.getPassPlans();
    const updatedPlan = refreshedPlans.find(p => p.id === 'elite_pass_1y');
    assert.strictEqual(updatedPlan.price, 349.00, 'Updated price must be reflected in next fetch');
    // Restore back to 299
    await DBService.updatePassPlan('elite_pass_1y', { price: 299.00 });
    console.log('  ✔ Dynamic pass plan price updating verified');

    // -------------------------------------------------------------
    // Test 4: Verify index.html navigation bar profile icon & dropdown
    // -------------------------------------------------------------
    console.log('\n▶ Test 4: Verifying index.html navigation bar profile menu...');
    const indexHtml = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');

    assert.ok(indexHtml.includes('id="nav-profile-menu-container"'), 'Navbar must contain profile menu container');
    assert.ok(indexHtml.includes('id="btn-nav-profile"'), 'Navbar must contain profile button');
    assert.ok(indexHtml.includes('id="nav-profile-dropdown"'), 'Navbar must contain profile dropdown');
    assert.ok(indexHtml.includes('id="nav-btn-signin"'), 'Profile dropdown must contain Sign In option');
    assert.ok(indexHtml.includes('id="nav-btn-signup"'), 'Profile dropdown must contain Sign Up option');
    assert.ok(indexHtml.includes('toggleNavProfileDropdown'), 'Must include toggleNavProfileDropdown JS function');

    // Verify "Get Elite Pass (₹299)" is removed from the navbar
    const navSectionMatch = indexHtml.match(/<header class="pub-navbar">([\s\S]*?)<\/header>/);
    assert.ok(navSectionMatch, 'Header pub-navbar must exist');
    const navbarContent = navSectionMatch[1];
    assert.ok(!navbarContent.includes('Get Elite Pass'), 'Navbar must not contain standalone Get Elite Pass button');
    assert.ok(!navbarContent.includes('₹299'), 'Navbar must not contain hardcoded price');
    console.log('  ✔ Navigation bar profile icon & dropdown verified; standalone Get Elite Pass removed');

    // -------------------------------------------------------------
    // Test 5: Verify "Get Elite Pass" buttons without prices on homepage
    // -------------------------------------------------------------
    console.log('\n▶ Test 5: Verifying "Get Elite Pass" buttons do not have attached prices...');
    assert.ok(!indexHtml.includes('Get Elite Pass (₹299)'), 'Must not contain "Get Elite Pass (₹299)"');
    assert.ok(!indexHtml.includes('Get Elite Pass Pro (₹499)'), 'Must not contain "Get Elite Pass Pro (₹499)"');
    assert.ok(!indexHtml.includes('Get Elite Pass Pro (₹499/yr)'), 'Must not contain "Get Elite Pass Pro (₹499/yr)"');
    assert.ok(indexHtml.includes('Get Elite Pass →'), 'Must contain clean "Get Elite Pass →"');
    assert.ok(indexHtml.includes('Get Elite Pass Pro →'), 'Must contain clean "Get Elite Pass Pro →"');
    console.log('  ✔ All Get Elite Pass buttons are clean without attached price');

    // -------------------------------------------------------------
    // Test 6: Verify admin_home.html pass plans modal
    // -------------------------------------------------------------
    console.log('\n▶ Test 6: Verifying admin_home.html pass plans modal...');
    const adminHtml = fs.readFileSync(path.join(__dirname, '../admin_home.html'), 'utf8');
    assert.ok(adminHtml.includes('openPassPlansModal()'), 'Admin page must have button to open pass plans modal');
    assert.ok(adminHtml.includes('id="passPlansModal"'), 'Admin page must contain passPlansModal');
    assert.ok(adminHtml.includes('id="cfg-plan-school-1y"'), 'Modal must have field for school 1y price');
    assert.ok(adminHtml.includes('id="cfg-plan-civil-3y"'), 'Modal must have field for civil 3y price');

    const appJs = fs.readFileSync(path.join(__dirname, '../js/app.js'), 'utf8');
    assert.ok(appJs.includes('function openPassPlansModal'), 'app.js must define openPassPlansModal');
    assert.ok(appJs.includes('function savePassPlansFromModal'), 'app.js must define savePassPlansFromModal');
    console.log('  ✔ admin_home.html and app.js pass pricing modal verified');

    console.log('\n================================================================');
    console.log('🎉 ALL PASS PLANS & NAVBAR PROFILE TESTS PASSED (100%)');
    console.log('================================================================\n');
}

runTests().catch(err => {
    console.error('❌ Test failed:', err);
    process.exit(1);
});
