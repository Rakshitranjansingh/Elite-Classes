// tests/test_geography_revision_course.js
const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('================================================================');
console.log('🌍 TESTING CIVIL SERVICES GEOGRAPHY REVISION COURSE');
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
assert(revHubHtml.includes('geography/geography_course_hub.html'), 'Revision hub must link to geography/geography_course_hub.html');
assert(revHubHtml.includes('5 Subjects Live') || revHubHtml.includes('4 Subjects Live'), 'Revision hub must show Subjects Live counter');
console.log('✔ revision_course_hub.html verified with geography link and Subjects Live counter.');

// 3. Test Geography Hub
const hubPath = path.join(__dirname, '../modules/course/civilservices/revisionCourse/geography/geography_course_hub.html');
assert(fs.existsSync(hubPath), 'geography_course_hub.html must exist');
const hubHtml = fs.readFileSync(hubPath, 'utf8');
assert(hubHtml.includes('student_home.html'), 'Hub must have link to student_home.html');
assert(hubHtml.includes('title="Return to Student Portal"'), 'Logo must have title "Return to Student Portal"');
assert(hubHtml.includes('cs_geo_ch1'), 'Hub must register cs_geo_ch1');
assert(hubHtml.includes('GEOGRAPHY_CHAPTERS'), 'Hub must contain GEOGRAPHY_CHAPTERS');
assert(hubHtml.includes('../../../course_player.html'), 'Hub must link to central course_player.html');
console.log('✔ geography_course_hub.html verified with central player link and clickable logo.');

// 4. Test All 7 Chapter Course Data Files in geography/data/
for (let ch = 1; ch <= 7; ch++) {
    const dataPath = path.join(__dirname, `../modules/course/civilservices/revisionCourse/geography/data/chapter${ch}_course_data.js`);
    assert(fs.existsSync(dataPath), `chapter${ch}_course_data.js must exist at ${dataPath}`);
    const chData = require(dataPath);
    assert.strictEqual(chData.chapterNumber, ch, `Chapter number must be ${ch}`);
    assert.strictEqual(chData.passPercentage, 70, `Chapter ${ch} passPercentage must be 70`);
    assert.strictEqual(chData.modules.length, 20, `Chapter ${ch} must have 20 module objects`);

    let qCount = 0;
    chData.modules.forEach((mod, idx) => {
        assert(mod.title && mod.title.length > 0, `Ch ${ch} Mod ${idx+1} missing title`);
        assert(mod.theoryHtml && mod.theoryHtml.length > 50, `Ch ${ch} Mod ${idx+1} missing theoryHtml`);
        assert(Array.isArray(mod.pointsToRemember) && mod.pointsToRemember.length >= 3, `Ch ${ch} Mod ${idx+1} invalid pointsToRemember`);
        assert(Array.isArray(mod.keyNotes) && mod.keyNotes.length >= 1, `Ch ${ch} Mod ${idx+1} invalid keyNotes`);
        assert(Array.isArray(mod.questions) && mod.questions.length === 10, `Ch ${ch} Mod ${idx+1} must have 10 questions`);

        // Check for forbidden branding / external mentions
        const fullModText = [
            mod.title,
            mod.summary || '',
            mod.theoryHtml,
            ...mod.pointsToRemember,
            ...mod.keyNotes
        ].join(' ');
        assert(!/\bNCERT\b|\bBCW\b|Sprint\s*72/i.test(fullModText), `Forbidden publisher/brand mentioned in Ch ${ch} Mod ${idx+1}`);

        mod.questions.forEach((q, qIdx) => {
            assert(q.question && q.question.length > 0, `Ch ${ch} Mod ${idx+1} Q ${qIdx+1} missing question`);
            assert(Array.isArray(q.options) && q.options.length === 4, `Ch ${ch} Mod ${idx+1} Q ${qIdx+1} must have 4 options`);
            assert(q.options.includes(q.answer), `Ch ${ch} Mod ${idx+1} Q ${qIdx+1} answer '${q.answer}' not in options`);
            assert(q.explanation && q.explanation.length > 0, `Ch ${ch} Mod ${idx+1} Q ${qIdx+1} missing explanation`);
            assert(!/\bNCERT\b|\bBCW\b|Sprint\s*72/i.test(q.question + ' ' + q.explanation), `Forbidden publisher mentioned in Ch ${ch} Mod ${idx+1} Q ${qIdx+1}`);
            qCount++;
        });
    });

    assert.strictEqual(qCount, 200, `Chapter ${ch} must contain exactly 200 validated questions`);
    console.log(`✔ Chapter ${ch} (${chData.chapterTitle}): 20 Modules, 200 MCQs validated.`);
}

console.log('\n✨ ALL TESTS PASSED! Civil Services Geography Revision Course (140 Modules, 1,400 MCQs) is 100% verified.');
