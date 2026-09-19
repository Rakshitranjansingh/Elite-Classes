#!/usr/bin/env node
/* =============================================================================
   ELITE CLASSES — Civil Services Course Automated Validator
   ============================================================================= */

const fs = require('fs');
const path = require('path');
const assert = require('assert');

const rootDir = path.resolve(__dirname, '../../../../');

console.log('================================================================');
console.log('🏛️ VALIDATING CIVIL SERVICES COURSES ECOSYSTEM');
console.log('================================================================\n');

// 1. Validate Master Catalog
const catalogPath = path.join(rootDir, 'modules/course/civilservices/courses_civilservices.html');
assert(fs.existsSync(catalogPath), 'courses_civilservices.html must exist');
const catalogHtml = fs.readFileSync(catalogPath, 'utf8');
assert(catalogHtml.includes('revisionCourse/revision_course_hub.html'), 'Catalog must link to revisionCourse');
assert(catalogHtml.includes('BPSC_72/bpsc_72_hub.html'), 'Catalog must link to BPSC_72');
assert(catalogHtml.includes('student_home.html'), 'Catalog header must link to student_home.html');
console.log('✔ Master catalog (courses_civilservices.html) verified with Revision & BPSC_72 courses.');

// 2. Validate BPSC 72 Hub
const bpscHubPath = path.join(rootDir, 'modules/course/civilservices/BPSC_72/bpsc_72_hub.html');
assert(fs.existsSync(bpscHubPath), 'bpsc_72_hub.html must exist');
const bpscHubHtml = fs.readFileSync(bpscHubPath, 'utf8');
assert(bpscHubHtml.includes('student_home.html'), 'bpsc_72_hub.html must link to student_home.html');
assert(bpscHubHtml.includes('../courses_civilservices.html') || bpscHubHtml.includes('courses_civilservices.html'), 'bpsc_72_hub.html must have back link');
console.log('✔ BPSC 72 Course Hub (bpsc_72_hub.html) verified and ready for subject configuration.');

// 3. Validate Revision Course Hub & Subject Data
const revHubPath = path.join(rootDir, 'modules/course/civilservices/revisionCourse/revision_course_hub.html');
assert(fs.existsSync(revHubPath), 'revision_course_hub.html must exist');
const revHubHtml = fs.readFileSync(revHubPath, 'utf8');
assert(revHubHtml.includes('physics/physics_course_hub.html'), 'revision_course_hub.html must link to physics subject hub');

for (let ch = 1; ch <= 7; ch++) {
    const dataPath = path.join(rootDir, `modules/course/civilservices/revisionCourse/physics/data/chapter${ch}_course_data.js`);
    assert(fs.existsSync(dataPath), `Chapter ${ch} data must exist at ${dataPath}`);
    const chData = require(dataPath);
    assert.strictEqual(chData.chapterNumber, ch, `Chapter number must be ${ch}`);
    assert.strictEqual(chData.totalModules, 20, `Chapter ${ch} must have 20 modules`);
    assert.strictEqual(chData.totalQuestions, 200, `Chapter ${ch} must have 200 questions`);
}
console.log('✔ Revision Course Physics Chapters validated (20 modules & 200 MCQs each).');

// 4. Validate BPSC 72 History Course Hub & Subject Data
const historyHubPath = path.join(rootDir, 'modules/course/civilservices/BPSC_72/history/history_course_hub.html');
assert(fs.existsSync(historyHubPath), 'history_course_hub.html must exist');
const historyHubHtml = fs.readFileSync(historyHubPath, 'utf8');
assert(historyHubHtml.includes('student_home.html'), 'history_course_hub.html must link to student_home.html');
assert(historyHubHtml.includes('bpsc_72_hub.html'), 'history_course_hub.html must link back to bpsc_72_hub.html');
assert(historyHubHtml.includes('course_player.html'), 'history_course_hub.html must launch course_player.html');

for (let ch = 1; ch <= 7; ch++) {
    const dataPath = path.join(rootDir, `modules/course/civilservices/BPSC_72/history/data/chapter${ch}_course_data.js`);
    assert(fs.existsSync(dataPath), `BPSC 72 History Chapter ${ch} data must exist at ${dataPath}`);
    const chData = require(dataPath);
    assert.strictEqual(chData.chapterNumber, ch, `Chapter number must be ${ch}`);
    assert.strictEqual(chData.totalModules, 20, `Chapter ${ch} must have 20 modules`);
    assert.strictEqual(chData.totalQuestions, 200, `Chapter ${ch} must have 200 questions`);
    assert.strictEqual(chData.passingPercentage || chData.passThreshold, 70, `Chapter ${ch} pass threshold must be 70%`);
}
console.log('✔ BPSC 72 History Chapters validated (7 Chapters, 140 modules & 1,400 MCQs total).');

// 5. Validate BPSC 72 Geography Course Hub & Subject Data
const geogHubPath = path.join(rootDir, 'modules/course/civilservices/BPSC_72/geography/geography_course_hub.html');
assert(fs.existsSync(geogHubPath), 'geography_course_hub.html must exist');
const geogHubHtml = fs.readFileSync(geogHubPath, 'utf8');
assert(geogHubHtml.includes('student_home.html'), 'geography_course_hub.html must link to student_home.html');
assert(geogHubHtml.includes('bpsc_72_hub.html'), 'geography_course_hub.html must link back to bpsc_72_hub.html');
assert(geogHubHtml.includes('course_player.html'), 'geography_course_hub.html must launch course_player.html');

for (let ch = 1; ch <= 7; ch++) {
    const dataPath = path.join(rootDir, `modules/course/civilservices/BPSC_72/geography/data/chapter${ch}_course_data.js`);
    assert(fs.existsSync(dataPath), `BPSC 72 Geography Chapter ${ch} data must exist at ${dataPath}`);
    const chData = require(dataPath);
    assert.strictEqual(chData.chapterNumber, ch, `Chapter number must be ${ch}`);
    assert.strictEqual(chData.totalModules, 20, `Chapter ${ch} must have 20 modules`);
    assert.strictEqual(chData.totalQuestions, 200, `Chapter ${ch} must have 200 questions`);
    assert.strictEqual(chData.passingPercentage || chData.passThreshold, 70, `Chapter ${ch} pass threshold must be 70%`);
}
console.log('✔ BPSC 72 Geography Chapters validated (7 Chapters, 140 modules & 1,400 MCQs total).');

// 6. Validate Revision Course Chemistry Course Hub & Subject Data
const chemHubPath = path.join(rootDir, 'modules/course/civilservices/revisionCourse/chemistry/chemistry_course_hub.html');
assert(fs.existsSync(chemHubPath), 'chemistry_course_hub.html must exist');
const chemHubHtml = fs.readFileSync(chemHubPath, 'utf8');
assert(chemHubHtml.includes('student_home.html'), 'chemistry_course_hub.html must link to student_home.html');
assert(chemHubHtml.includes('revision_course_hub.html'), 'chemistry_course_hub.html must link back to revision_course_hub.html');
assert(chemHubHtml.includes('course_player.html'), 'chemistry_course_hub.html must launch course_player.html');

for (let ch = 1; ch <= 7; ch++) {
    const dataPath = path.join(rootDir, `modules/course/civilservices/revisionCourse/chemistry/data/chapter${ch}_course_data.js`);
    assert(fs.existsSync(dataPath), `Chemistry Chapter ${ch} data must exist at ${dataPath}`);
    const chData = require(dataPath);
    assert.strictEqual(chData.chapterNumber, ch, `Chapter number must be ${ch}`);
    assert.strictEqual(chData.totalModules, 20, `Chapter ${ch} must have 20 modules`);
    assert.strictEqual(chData.totalQuestions, 200, `Chapter ${ch} must have 200 questions`);
    assert.strictEqual(chData.passingPercentage || chData.passThreshold, 70, `Chapter ${ch} pass threshold must be 70%`);
}
console.log('✔ Revision Course Chemistry Chapters validated (7 Chapters, 140 modules & 1,400 MCQs total).');

// 7. Validate Revision Course Biology Course Hub & Subject Data
const bioHubPath = path.join(rootDir, 'modules/course/civilservices/revisionCourse/biology/biology_course_hub.html');
assert(fs.existsSync(bioHubPath), 'biology_course_hub.html must exist');
const bioHubHtml = fs.readFileSync(bioHubPath, 'utf8');
assert(bioHubHtml.includes('student_home.html'), 'biology_course_hub.html must link to student_home.html');
assert(bioHubHtml.includes('revision_course_hub.html'), 'biology_course_hub.html must link back to revision_course_hub.html');
assert(bioHubHtml.includes('course_player.html'), 'biology_course_hub.html must launch course_player.html');

for (let ch = 1; ch <= 7; ch++) {
    const dataPath = path.join(rootDir, `modules/course/civilservices/revisionCourse/biology/data/chapter${ch}_course_data.js`);
    assert(fs.existsSync(dataPath), `Biology Chapter ${ch} data must exist at ${dataPath}`);
    const chData = require(dataPath);
    assert.strictEqual(chData.chapterNumber, ch, `Chapter number must be ${ch}`);
    assert.strictEqual(chData.modules.length, 20, `Chapter ${ch} must have 20 modules`);
    assert.strictEqual(chData.modules.reduce((acc, m) => acc + m.questions.length, 0), 200, `Chapter ${ch} must have 200 questions`);
    assert.strictEqual(chData.passPercentage || chData.passingPercentage || chData.passThreshold, 70, `Chapter ${ch} pass threshold must be 70%`);
}
console.log('✔ Revision Course Biology Chapters validated (7 Chapters, 140 modules & 1,400 MCQs total).');

// 8. Validate Revision Course Geography Course Hub & Subject Data
const geoHubPath = path.join(rootDir, 'modules/course/civilservices/revisionCourse/geography/geography_course_hub.html');
assert(fs.existsSync(geoHubPath), 'geography_course_hub.html must exist');
const geoHubHtml = fs.readFileSync(geoHubPath, 'utf8');
assert(geoHubHtml.includes('student_home.html'), 'geography_course_hub.html must link to student_home.html');
assert(geoHubHtml.includes('revision_course_hub.html'), 'geography_course_hub.html must link back to revision_course_hub.html');
assert(geoHubHtml.includes('course_player.html'), 'geography_course_hub.html must launch course_player.html');

for (let ch = 1; ch <= 7; ch++) {
    const dataPath = path.join(rootDir, `modules/course/civilservices/revisionCourse/geography/data/chapter${ch}_course_data.js`);
    assert(fs.existsSync(dataPath), `Geography Chapter ${ch} data must exist at ${dataPath}`);
    const chData = require(dataPath);
    assert.strictEqual(chData.chapterNumber, ch, `Chapter number must be ${ch}`);
    assert.strictEqual(chData.modules.length, 20, `Chapter ${ch} must have 20 modules`);
    assert.strictEqual(chData.modules.reduce((acc, m) => acc + m.questions.length, 0), 200, `Chapter ${ch} must have 200 questions`);
    assert.strictEqual(chData.passPercentage || chData.passingPercentage || chData.passThreshold, 70, `Chapter ${ch} pass threshold must be 70%`);
}
console.log('✔ Revision Course Geography Chapters validated (7 Chapters, 140 modules & 1,400 MCQs total).');

console.log('\n================================================================');
console.log('🎉 CIVIL SERVICES COURSES ECOSYSTEM VALIDATION PASSED (100%)!');
console.log('================================================================');


