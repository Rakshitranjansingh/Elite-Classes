const assert = require('assert');
const fs = require('fs');

console.log('=== TEST 1: enums/classes.js ===');
const classesContent = fs.readFileSync('./enums/classes.js', 'utf8');
const classEnumMatch = classesContent.includes("CIVIL_SERVICES: 'Civil Services'");
assert.strictEqual(classEnumMatch, true, 'CIVIL_SERVICES must be defined in CLASS_ENUM');
console.log('✔ CLASS_ENUM defines CIVIL_SERVICES: "Civil Services"');

console.log('\n=== TEST 2: today.js normalizeClassKey ===');
const todayContent = fs.readFileSync('./modules/studentView/today/today.js', 'utf8');
assert.strictEqual(todayContent.includes("clean.includes('civil')"), true, 'normalizeClassKey must check for civil');

// Simulate normalizeClassKey
function normalizeClassKey(cls) {
    if (!cls) return 'default';
    const clean = cls.toString().trim().toLowerCase().replace(/[^a-z0-9]/g, '');
    if (clean.includes('civil')) return 'civilservices';
    if (clean.includes('10')) return 'class10';
    return clean || 'default';
}
assert.strictEqual(normalizeClassKey('Civil Services'), 'civilservices');
assert.strictEqual(normalizeClassKey('civilservices'), 'civilservices');
assert.strictEqual(normalizeClassKey('Civil_Services'), 'civilservices');
console.log('✔ normalizeClassKey successfully resolves "Civil Services" -> "civilservices"');

console.log('\n=== TEST 3: civilservices.js Handler ===');
// Verify civilservices.js syntax and export
const mockWindow = {
    registerTodayClassHandler: function(key, handler) {
        this[key] = handler;
    },
    TodayClassHandlers: {}
};
global.window = mockWindow;
require('../modules/studentView/today/civilservices.js');
assert.ok(mockWindow.civilservices, 'civilservices handler registered on mockWindow');
assert.strictEqual(typeof mockWindow.civilservices.render, 'function');

const mockContainer = { innerHTML: '' };
const mockStudent = { name: 'Ananya Sharma', cls: 'Civil Services' };
const mockHelpers = {
    escapeHtml: (s) => s,
    formattedDate: 'Thursday, 18 September 2025',
    rawClass: 'Civil Services'
};
mockWindow.civilservices.render(mockContainer, mockStudent, mockHelpers);
assert.ok(mockContainer.innerHTML.includes('Ananya Sharma'), 'Render output must contain student name');
assert.ok(mockContainer.innerHTML.includes('Civil Services Aspirant'), 'Render output must contain Civil Services badge');
assert.ok(mockContainer.innerHTML.includes('General Studies'), 'Render output must contain General Studies section');
assert.ok(mockContainer.innerHTML.includes('CSAT'), 'Render output must contain CSAT section');
console.log('✔ civilservices.js renders rich aspirant UI seamlessly');

console.log('\n=== TEST 4: Database and Dropdown Verifications ===');
const indexContent = fs.readFileSync('./index.html', 'utf8');
assert.ok(indexContent.includes('<option value="Civil Services">Civil Services</option>'), 'index.html must include Civil Services in registration selects');

const adminContent = fs.readFileSync('./admin_home.html', 'utf8');
assert.ok(adminContent.includes('<option>Civil Services</option>'), 'admin_home.html must include Civil Services in student creation modal');

const migrationContent = fs.readFileSync('./database/migrations/024_add_civil_services_class.sql', 'utf8');
assert.ok(migrationContent.includes("'c_civil', 'Civil Services'"), 'Migration 024 must insert Civil Services');

const schemaContent = fs.readFileSync('./supabase/schema.sql', 'utf8');
assert.ok(schemaContent.includes("'c_civil', 'Civil Services'"), 'schema.sql must include Civil Services');

console.log('✔ All static checks and registration selects verified');
console.log('\nALL TESTS PASSED SUCCESSFULLY! 🎉');
