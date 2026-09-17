// tests/test_physics_revision_course.js
const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('================================================================');
console.log('🧪 TESTING CIVIL SERVICES PHYSICS REVISION COURSE');
console.log('================================================================\n');

// 1. Test Master Civil Services Courses Hub
const csCoursesPath = path.join(__dirname, '../modules/course/civilservices/courses_civilservices.html');
assert(fs.existsSync(csCoursesPath), 'courses_civilservices.html must exist');
const csCoursesHtml = fs.readFileSync(csCoursesPath, 'utf8');
assert(csCoursesHtml.includes('revisionCourse/revision_course_hub.html'), 'Civil services courses must link to revisionCourse/revision_course_hub.html');
console.log('✔ courses_civilservices.html shows Revision Course.');

// 2. Test Revision Course Hub
const revHubPath = path.join(__dirname, '../modules/course/civilservices/revisionCourse/revision_course_hub.html');
assert(fs.existsSync(revHubPath), 'revision_course_hub.html must exist');
const revHubHtml = fs.readFileSync(revHubPath, 'utf8');
assert(revHubHtml.includes('student_home.html'), 'Revision hub must link to student_home.html');
assert(revHubHtml.includes('physics/physics_course_hub.html'), 'Revision hub must link to physics/physics_course_hub.html');
console.log('✔ revision_course_hub.html verified with physics link.');

// 3. Test Physics Hub
const hubPath = path.join(__dirname, '../modules/course/civilservices/revisionCourse/physics/physics_course_hub.html');
assert(fs.existsSync(hubPath), 'physics_course_hub.html must exist');
const hubHtml = fs.readFileSync(hubPath, 'utf8');
assert(hubHtml.includes('student_home.html'), 'Hub must have link to student_home.html');
assert(hubHtml.includes('cs_phy_ch1'), 'Hub must register cs_phy_ch1');
assert(hubHtml.includes('CHAPTERS_LIST'), 'Hub must contain CHAPTERS_LIST');
assert(hubHtml.includes('../../../course_player.html'), 'Hub must link to central course_player.html');
console.log('✔ physics_course_hub.html verified with central player link.');

// 2. Test Central Course Player
const playerPath = path.join(__dirname, '../modules/course/course_player.html');
assert(fs.existsSync(playerPath), 'central course_player.html must exist in modules/course/');
const playerHtml = fs.readFileSync(playerPath, 'utf8');
assert(playerHtml.includes('student_home.html'), 'Player must link to student_home.html via clickable logo');
assert(playerHtml.includes('course-back-btn'), 'Player must have dynamic back button');
assert(playerHtml.includes('loadChapterData'), 'Player must load chapter course data');
console.log('✔ central course_player.html verified.');

// 3. Test Chapter 1 Course Data
const dataPath = path.join(__dirname, '../modules/course/data/civilservices/revisionCourse/physics/chapter1_course_data.js');
assert(fs.existsSync(dataPath), 'chapter1_course_data.js must exist');
const ch1Data = require(dataPath);
assert.strictEqual(ch1Data.chapterNumber, 1, 'Chapter number must be 1');
assert.strictEqual(ch1Data.totalModules, 20, 'totalModules must be 20');
assert.strictEqual(ch1Data.totalQuestions, 200, 'totalQuestions must be 200');
assert.strictEqual(ch1Data.modules.length, 20, 'Must have 20 module objects');

let qCount = 0;
ch1Data.modules.forEach((mod, idx) => {
    assert(mod.title && mod.title.length > 0, `Module ${idx+1} missing title`);
    assert(mod.theoryHtml && mod.theoryHtml.length > 50, `Module ${idx+1} missing theoryHtml`);
    assert(Array.isArray(mod.pointsToRemember) && mod.pointsToRemember.length >= 2, `Module ${idx+1} invalid pointsToRemember`);
    assert(Array.isArray(mod.keyNotes) && mod.keyNotes.length >= 1, `Module ${idx+1} invalid keyNotes`);
    assert(Array.isArray(mod.questions) && mod.questions.length === 10, `Module ${idx+1} must have 10 questions`);
    qCount += mod.questions.length;
    mod.questions.forEach(q => {
        assert(q.question, 'Question missing question text');
        assert(Array.isArray(q.options) && q.options.length === 4, 'Question must have 4 options');
        assert(q.options.includes(q.answer), `Answer "${q.answer}" must be one of options`);
        assert(q.explanation, 'Question missing explanation');
    });
});
assert.strictEqual(qCount, 200, 'Total questions must be exactly 200');
console.log('✔ chapter1_course_data.js verified with all 20 modules & 200 questions.');

console.log('\n🎉 ALL PHYSICS REVISION COURSE TESTS PASSED (100%)!\n');
