const fs = require('fs');
const path = require('path');
const assert = require('assert');

const ROOT = path.resolve(__dirname, '..');

console.log('================================================================');
console.log('🧪 VERIFYING CIVIL SERVICES TEST SERIES ROUTING & CLASS 10 ACCESS');
console.log('================================================================\n');

// 1. Verify studentView.js TEST_CLASS_URL_MAP and navigateToStudentTests
console.log('▶ Test 1: Verifying studentView.js Dynamic Test Routing...');
const studentViewJs = fs.readFileSync(path.join(ROOT, 'modules/studentView/studentView.js'), 'utf8');

assert.ok(studentViewJs.includes('TEST_CLASS_URL_MAP'), 'studentView.js must define TEST_CLASS_URL_MAP');
assert.ok(studentViewJs.includes('window.TEST_CLASS_URL_MAP'), 'TEST_CLASS_URL_MAP must be exported to window');
assert.ok(studentViewJs.includes("'civilservices': 'modules/testseries/data/civilservices/testseries_civilservices.html'"), 'Civil Services test URL mapped');
assert.ok(studentViewJs.includes("'class10': 'modules/testseries/data/class10/testseries_class_10.html'"), 'Class 10 test URL mapped');
assert.ok(studentViewJs.includes('ec_civil_selected_course_class'), 'Must check ec_civil_selected_course_class in test navigation');
console.log('  ✔ Verified studentView.js test routing map and persistence logic');

// 2. Verify testseries_civilservices.html Links & Switcher
console.log('\n▶ Test 2: Verifying testseries_civilservices.html Links & Integrity...');
const civilTestPath = path.join(ROOT, 'modules/testseries/data/civilservices/testseries_civilservices.html');
assert.ok(fs.existsSync(civilTestPath), 'testseries_civilservices.html must exist');
const civilTestContent = fs.readFileSync(civilTestPath, 'utf8');

// Check Header & Brand
assert.ok(civilTestContent.includes('app-header-sticky'), 'Must use app-header-sticky');
assert.ok(civilTestContent.includes('student_home.html'), 'Header must link to student_home.html');
assert.ok(civilTestContent.includes('Committed to success'), 'Header must include Committed to success');

// Check Class Switcher
assert.ok(civilTestContent.includes('id="test-class-selector"'), 'Must include test-class-selector');
assert.ok(civilTestContent.includes('switchTestClass'), 'Must include switchTestClass function');
assert.ok(civilTestContent.includes('../class10/testseries_class_10.html'), 'Class 10 target in switchTestClass');

// Check All Anchor Links Resolve to Real Files (Zero 404s)
const linkRegex = /href="([^"]+)"/g;
let match;
let linkCount = 0;
const civilDir = path.dirname(civilTestPath);

while ((match = linkRegex.exec(civilTestContent)) !== null) {
    const href = match[1];
    if (href.startsWith('http') || href.startsWith('#')) continue;
    linkCount++;
    const resolvedPath = path.resolve(civilDir, href.split('#')[0].split('?')[0]);
    assert.ok(fs.existsSync(resolvedPath), `Broken link in testseries_civilservices.html: ${href} (Resolved to ${resolvedPath})`);
}
console.log(`  ✔ Verified ${linkCount} anchor links in testseries_civilservices.html (Zero 404s)`);

// 3. Verify testseries_class_10.html Links & Switcher
console.log('\n▶ Test 3: Verifying testseries_class_10.html Links & Integrity...');
const class10TestPath = path.join(ROOT, 'modules/testseries/data/class10/testseries_class_10.html');
assert.ok(fs.existsSync(class10TestPath), 'testseries_class_10.html must exist');
const class10TestContent = fs.readFileSync(class10TestPath, 'utf8');

// Check Header & Brand
assert.ok(class10TestContent.includes('app-header-sticky'), 'Must use app-header-sticky');
assert.ok(class10TestContent.includes('student_home.html'), 'Header must link to student_home.html');
assert.ok(class10TestContent.includes('Committed to success'), 'Header must include Committed to success');

// Check Class Switcher
assert.ok(class10TestContent.includes('id="test-class-selector"'), 'Must include test-class-selector');
assert.ok(class10TestContent.includes('switchTestClass'), 'Must include switchTestClass function');
assert.ok(class10TestContent.includes('../civilservices/testseries_civilservices.html'), 'Civil Services target in switchTestClass');

// Check All Anchor Links Resolve to Real Files
let c10LinkCount = 0;
const c10Dir = path.dirname(class10TestPath);
while ((match = linkRegex.exec(class10TestContent)) !== null) {
    const href = match[1];
    if (href.startsWith('http') || href.startsWith('#')) continue;
    c10LinkCount++;
    const resolvedPath = path.resolve(c10Dir, href.split('#')[0].split('?')[0]);
    assert.ok(fs.existsSync(resolvedPath), `Broken link in testseries_class_10.html: ${href} (Resolved to ${resolvedPath})`);
}
console.log(`  ✔ Verified ${c10LinkCount} anchor links in testseries_class_10.html (Zero 404s)`);

// 4. Verify Cross-Class Test Series Navigation
console.log('\n▶ Test 4: Verifying Cross-Class Test Navigation Pathways...');
// Ensure Class 10 subject links are reachable from civilservices hub
const expectedClass10FromCivil = [
    '../class10/science/science_10.html',
    '../class10/mathematics/mathematics_10.html',
    '../class10/history/history_10.html',
    '../class10/geography/geography_10.html',
    '../class10/politics/politics_10.html',
    '../class10/economics/economics_10.html',
    '../class10/testseries_class_10.html'
];
for (const relLink of expectedClass10FromCivil) {
    assert.ok(civilTestContent.includes(relLink), `testseries_civilservices.html must contain link to ${relLink}`);
    const resolved = path.resolve(civilDir, relLink);
    assert.ok(fs.existsSync(resolved), `Path must exist: ${resolved}`);
}
console.log('  ✔ Verified all Class 10 test portals linked and reachable from Civil Services hub');

console.log('\n================================================================');
console.log('🎉 ALL CIVIL SERVICES TEST SERIES TESTS PASSED (100%)!');
console.log('================================================================\n');
