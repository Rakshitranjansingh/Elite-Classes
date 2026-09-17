const fs = require('fs');

console.log('--- Verifying student_home.html ---');
const sh = fs.readFileSync('student_home.html', 'utf8');
if (sh.includes('data-sttab="today"') || sh.includes('data-sttab="attendance"') || sh.includes('data-sttab="fees"') || sh.includes('data-sttab="marks"')) {
    throw new Error('Unwanted tabs found in student_home.html');
}
if (!sh.includes('navigateToStudentCourses()') || !sh.includes('navigateToStudentTests()')) {
    throw new Error('Required action buttons missing in student_home.html');
}
if (sh.includes('notice-slider-container')) {
    throw new Error('Notice slider container still in student_home.html');
}
if (sh.includes('id="st-tab-section-today"') || sh.includes('id="st-tab-section-attendance"') || sh.includes('id="st-tab-section-fees"') || sh.includes('id="st-tab-section-marks"')) {
    throw new Error('Unwanted tab sections still in student_home.html');
}
console.log('✔ student_home.html has strictly Courses and Tests action buttons, without notice slider or extra sections');

console.log('--- Verifying modules/studentView/studentView.html ---');
const sv = fs.readFileSync('modules/studentView/studentView.html', 'utf8');
if (sv.includes('data-sttab="attendance"') || sv.includes('data-sttab="fees"') || sv.includes('data-sttab="exams"')) {
    throw new Error('Unwanted tabs found in studentView.html');
}
if (sv.includes('id="module-notices-container"')) {
    throw new Error('Notices container still in studentView.html');
}
console.log('✔ studentView.html simplified correctly');

console.log('--- Verifying modules/studentView/studentView.js ---');
const sj = fs.readFileSync('modules/studentView/studentView.js', 'utf8');
if (sj.includes('topBannerHtml')) {
    throw new Error('topBannerHtml still found in studentView.js');
}
if (!sj.includes("activeStudentTab = 'courses'")) {
    throw new Error("activeStudentTab not defaulted to 'courses'");
}
console.log('✔ studentView.js defaults to courses and eliminated duplicate pills');

console.log('--- Verifying enums/classes.js ---');
const cjs = fs.readFileSync('enums/classes.js', 'utf8');
if (!cjs.includes('autoPopulateClassDropdowns')) {
    throw new Error('autoPopulateClassDropdowns missing in classes.js');
}
console.log('✔ enums/classes.js dynamic dropdown population verified');

console.log('\n========================================');
console.log('🎉 ALL VERIFICATION CHECKS PASSED!');
console.log('========================================');
