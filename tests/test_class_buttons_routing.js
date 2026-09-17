const fs = require('fs');
const path = require('path');

console.log('--- 1. Testing student_home.html Action Buttons ---');
const sh = fs.readFileSync('student_home.html', 'utf8');
if (!sh.includes('navigateToStudentCourses()') || !sh.includes('navigateToStudentTests()')) {
    throw new Error('Action buttons missing in student_home.html');
}
if (sh.includes('profile-switcher')) {
    throw new Error('profile-switcher tab bar still found in student_home.html');
}
console.log('✔ student_home.html uses action buttons instead of tabs');

console.log('--- 2. Testing studentView.js Navigation Logic ---');
const sj = fs.readFileSync('modules/studentView/studentView.js', 'utf8');
if (!sj.includes('function navigateToStudentCourses') || !sj.includes('function navigateToStudentTests')) {
    throw new Error('Navigation functions missing in studentView.js');
}
if (!sj.includes('modules/course/civilservices/courses_civilservices.html') ||
    !sj.includes('modules/course/class10/courses_class_10.html')) {
    throw new Error('Courses routing targets incorrect');
}
if (!sj.includes('modules/testseries/data/civilservices/testseries_civilservices.html') ||
    !sj.includes('modules/testseries/data/class10/testseries_class_10.html')) {
    throw new Error('Test series routing targets incorrect');
}
console.log('✔ studentView.js contains dynamic class-based routing functions');

console.log('--- 3. Testing courses_class_10.html ---');
const c10 = fs.readFileSync('modules/course/class10/courses_class_10.html', 'utf8');
if (!c10.includes('Class 10: Interactive Courses Hub') || !c10.includes('student_home.html')) {
    throw new Error('Invalid content in courses_class_10.html');
}
console.log('✔ courses_class_10.html verified with back button to student_home.html');

console.log('--- 4. Testing courses_civilservices.html ---');
const ccs = fs.readFileSync('modules/course/civilservices/courses_civilservices.html', 'utf8');
if (!ccs.includes('Civil Services: Interactive Courses Hub') || !ccs.includes('student_home.html')) {
    throw new Error('Invalid content in courses_civilservices.html');
}
console.log('✔ courses_civilservices.html verified with back button to student_home.html');

console.log('\n=============================================');
console.log('🎉 ALL CLASS BUTTON ROUTING CHECKS PASSED!');
console.log('=============================================');
