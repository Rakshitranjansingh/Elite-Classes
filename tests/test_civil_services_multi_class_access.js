const fs = require('fs');
const path = require('path');
const assert = require('assert');

const ROOT = path.resolve(__dirname, '..');

console.log('================================================================');
console.log('🧪 VERIFYING CIVIL SERVICES MULTI-CLASS COURSE ACCESS & HUBS');
console.log('================================================================\n');

// 1. Check all class course files exist
const targetClasses = ['civilservices', 'class10', 'class9', 'class8', 'class7', 'class6', 'class11', 'class12'];
const expectedFiles = {
    'civilservices': 'modules/course/civilservices/courses_civilservices.html',
    'class10': 'modules/course/class10/courses_class_10.html',
    'class9': 'modules/course/class9/courses_class_9.html',
    'class8': 'modules/course/class8/courses_class_8.html',
    'class7': 'modules/course/class7/courses_class_7.html',
    'class6': 'modules/course/class6/courses_class_6.html',
    'class11': 'modules/course/class11/courses_class_11.html',
    'class12': 'modules/course/class12/courses_class_12.html'
};

console.log('▶ Test 1: Verifying All Class Course HTML Files Exist...');
for (const [clsKey, relPath] of Object.entries(expectedFiles)) {
    const fullPath = path.join(ROOT, relPath);
    assert.strictEqual(fs.existsSync(fullPath), true, `Missing file: ${relPath}`);
    const content = fs.readFileSync(fullPath, 'utf8');

    // Check clickable header logo
    assert.ok(content.includes('student_home.html'), `${relPath} must link back to student_home.html in header`);
    assert.ok(content.includes('brand-logo-icon'), `${relPath} must have brand logo icon`);

    // Check class switcher
    assert.ok(content.includes('id="course-class-selector"'), `${relPath} must have course-class-selector dropdown`);
    assert.ok(content.includes('switchCourseClass'), `${relPath} must have switchCourseClass function`);

    // Check clean wording
    assert.ok(!content.includes('20 Progressive Mini-Modules per Chapter'), `${relPath} must not contain raw technical boilerplate`);

    console.log(`  ✔ Verified ${clsKey}: ${relPath}`);
}

console.log('\n▶ Test 2: Verifying student_home.html & studentView.html Integration...');
const studentHomeHtml = fs.readFileSync(path.join(ROOT, 'student_home.html'), 'utf8');
assert.ok(studentHomeHtml.includes('id="st-civil-course-nav"'), 'student_home.html must include st-civil-course-nav');
assert.ok(studentHomeHtml.includes('id="st-civil-class-select"'), 'student_home.html must include st-civil-class-select');
assert.ok(studentHomeHtml.includes('onCivilCourseClassChange'), 'student_home.html must wire onCivilCourseClassChange');
console.log('  ✔ Verified student_home.html multi-class selector container & options');

const studentViewHtml = fs.readFileSync(path.join(ROOT, 'modules/studentView/studentView.html'), 'utf8');
assert.ok(studentViewHtml.includes('id="st-civil-course-nav"'), 'studentView.html must include st-civil-course-nav');
assert.ok(studentViewHtml.includes('id="st-civil-class-select"'), 'studentView.html must include st-civil-class-select');
console.log('  ✔ Verified studentView.html template synchronization');

console.log('\n▶ Test 3: Verifying studentView.js Dynamic Class Routing...');
const studentViewJs = fs.readFileSync(path.join(ROOT, 'modules/studentView/studentView.js'), 'utf8');
assert.ok(studentViewJs.includes('COURSE_CLASS_URL_MAP'), 'studentView.js must define COURSE_CLASS_URL_MAP');
assert.ok(studentViewJs.includes('onCivilCourseClassChange'), 'studentView.js must define onCivilCourseClassChange');
assert.ok(studentViewJs.includes('navigateToStudentCourses'), 'studentView.js must define navigateToStudentCourses');

// Test URL map completeness
for (const clsKey of targetClasses) {
    assert.ok(studentViewJs.includes(`'${clsKey}':`), `COURSE_CLASS_URL_MAP must contain mapping for ${clsKey}`);
}
console.log('  ✔ Verified COURSE_CLASS_URL_MAP contains all 8 class pathways');

console.log('\n================================================================');
console.log('🎉 ALL CIVIL SERVICES MULTI-CLASS COURSE TESTS PASSED (100%)!');
console.log('================================================================\n');
