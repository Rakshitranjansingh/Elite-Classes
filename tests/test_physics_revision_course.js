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

// 4. Test All 7 Chapter Course Data Files in physics/data/
for (let ch = 1; ch <= 7; ch++) {
    const dataPath = path.join(__dirname, `../modules/course/civilservices/revisionCourse/physics/data/chapter${ch}_course_data.js`);
    assert(fs.existsSync(dataPath), `chapter${ch}_course_data.js must exist at ${dataPath}`);
    const chData = require(dataPath);
    assert.strictEqual(chData.chapterNumber, ch, `Chapter number must be ${ch}`);
    assert.strictEqual(chData.totalModules, 20, `Chapter ${ch} totalModules must be 20`);
    assert.strictEqual(chData.totalQuestions, 200, `Chapter ${ch} totalQuestions must be 200`);
    assert.strictEqual(chData.modules.length, 20, `Chapter ${ch} must have 20 module objects`);

    let qCount = 0;
    chData.modules.forEach((mod, idx) => {
        assert(mod.title && mod.title.length > 0, `Ch ${ch} Mod ${idx+1} missing title`);
        assert(mod.theoryHtml && mod.theoryHtml.length > 50, `Ch ${ch} Mod ${idx+1} missing theoryHtml`);
        assert(Array.isArray(mod.pointsToRemember) && mod.pointsToRemember.length >= 2, `Ch ${ch} Mod ${idx+1} invalid pointsToRemember`);
        assert(Array.isArray(mod.keyNotes) && mod.keyNotes.length >= 1, `Ch ${ch} Mod ${idx+1} invalid keyNotes`);
        assert(Array.isArray(mod.questions) && mod.questions.length === 10, `Ch ${ch} Mod ${idx+1} must have 10 questions`);
        qCount += mod.questions.length;
        mod.questions.forEach(q => {
            assert(q.question, `Ch ${ch} Mod ${idx+1} Question missing question text`);
            assert(Array.isArray(q.options) && q.options.length === 4, `Ch ${ch} Mod ${idx+1} Question must have 4 options`);
            assert(q.options.includes(q.answer), `Ch ${ch} Mod ${idx+1} Answer "${q.answer}" must be one of options`);
            assert(q.explanation, `Ch ${ch} Mod ${idx+1} Question missing explanation`);
        });
    });
    assert.strictEqual(qCount, 200, `Ch ${ch} total questions must be exactly 200`);
    console.log(`✔ chapter${ch}_course_data.js verified with all 20 modules & 200 questions.`);
}

console.log('\n🎉 ALL 7 PHYSICS REVISION COURSE CHAPTERS TESTED & PASSED (100%)!\n');

