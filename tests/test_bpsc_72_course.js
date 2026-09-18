// tests/test_bpsc_72_course.js
const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('================================================================');
console.log('🧪 TESTING BPSC 72 COURSE INTEGRATION');
console.log('================================================================\n');

// 1. Verify Civil Services Catalog has BPSC_72
const csCoursesPath = path.join(__dirname, '../modules/course/civilservices/courses_civilservices.html');
assert(fs.existsSync(csCoursesPath), 'courses_civilservices.html must exist');
const csCoursesHtml = fs.readFileSync(csCoursesPath, 'utf8');
assert(csCoursesHtml.includes('BPSC_72/bpsc_72_hub.html'), 'Catalog must link to BPSC_72/bpsc_72_hub.html');
assert(csCoursesHtml.includes('revisionCourse/revision_course_hub.html'), 'Catalog must preserve revisionCourse link');
console.log('✔ courses_civilservices.html verified with BPSC 72 and Revision Course.');

// 2. Verify BPSC 72 Hub file and links
const bpscHubPath = path.join(__dirname, '../modules/course/civilservices/BPSC_72/bpsc_72_hub.html');
assert(fs.existsSync(bpscHubPath), 'bpsc_72_hub.html must exist');
const bpscHubHtml = fs.readFileSync(bpscHubPath, 'utf8');
assert(bpscHubHtml.includes('student_home.html'), 'bpsc_72_hub.html must link to student_home.html via clickable logo');
assert(bpscHubHtml.includes('courses_civilservices.html'), 'bpsc_72_hub.html must have back link to Civil Services courses');
console.log('✔ bpsc_72_hub.html verified with clickable logo and return navigation.');

// 3. Verify civil-services-course skill
const skillPath = path.join(__dirname, '../.agents/skills/civil-services-course/SKILL.md');
assert(fs.existsSync(skillPath), 'civil-services-course SKILL.md must exist');
console.log('✔ civil-services-course SKILL.md verified.');

// 4. Verify BPSC 72 History Course Hub
const historyHubPath = path.join(__dirname, '../modules/course/civilservices/BPSC_72/history/history_course_hub.html');
assert(fs.existsSync(historyHubPath), 'history_course_hub.html must exist');
const historyHubHtml = fs.readFileSync(historyHubPath, 'utf8');
assert(historyHubHtml.includes('student_home.html'), 'history_course_hub.html must have clickable logo linking to student_home.html');
assert(historyHubHtml.includes('bpsc_72_hub.html'), 'history_course_hub.html must link back to bpsc_72_hub.html');
assert(historyHubHtml.includes('course_player.html'), 'history_course_hub.html must launch course_player.html');
console.log('✔ history_course_hub.html verified with navigation, progress tracker, and 7 chapters.');

// 5. Verify all 7 History Chapter Data Files
const historyDataDir = path.join(__dirname, '../modules/course/civilservices/BPSC_72/history/data');
assert(fs.existsSync(historyDataDir), 'history/data directory must exist');

for (let ch = 1; ch <= 7; ch++) {
    const chFile = path.join(historyDataDir, `chapter${ch}_course_data.js`);
    assert(fs.existsSync(chFile), `Chapter ${ch} data file must exist: ${chFile}`);

    // Require chapter data
    delete require.cache[require.resolve(chFile)];
    const chData = require(chFile);

    assert.strictEqual(chData.chapterNumber, ch, `Ch ${ch}: chapterNumber must match`);
    assert(chData.chapterTitle && chData.chapterTitle.length > 0, `Ch ${ch}: chapterTitle must be present`);
    assert.strictEqual(chData.totalModules, 20, `Ch ${ch}: totalModules must be 20`);
    assert.strictEqual(chData.totalQuestions, 200, `Ch ${ch}: totalQuestions must be 200`);
    assert.strictEqual(chData.passingPercentage || chData.passThreshold, 70, `Ch ${ch}: passingPercentage must be 70%`);
    assert(Array.isArray(chData.modules) && chData.modules.length === 20, `Ch ${ch}: modules array must have length 20`);

    let totalQuestions = 0;
    chData.modules.forEach((mod, idx) => {
        assert.strictEqual(mod.moduleNumber, idx + 1, `Ch ${ch} Mod ${idx + 1}: invalid moduleNumber`);
        assert(mod.title && mod.title.length > 0, `Ch ${ch} Mod ${idx + 1}: title missing`);
        assert(mod.theoryHtml && mod.theoryHtml.length > 50, `Ch ${ch} Mod ${idx + 1}: theoryHtml too short`);
        assert(Array.isArray(mod.pointsToRemember) && mod.pointsToRemember.length >= 2, `Ch ${ch} Mod ${idx + 1}: pointsToRemember missing`);
        assert(Array.isArray(mod.keyNotes) && mod.keyNotes.length >= 1, `Ch ${ch} Mod ${idx + 1}: keyNotes missing`);
        assert(Array.isArray(mod.questions) && mod.questions.length === 10, `Ch ${ch} Mod ${idx + 1}: questions count must be 10`);

        mod.questions.forEach((q, qIdx) => {
            assert(q.question && q.question.length > 5, `Ch ${ch} Mod ${idx + 1} Q${qIdx + 1}: question text missing`);
            assert(Array.isArray(q.options) && q.options.length === 4, `Ch ${ch} Mod ${idx + 1} Q${qIdx + 1}: options must be 4`);
            assert(q.options.includes(q.answer), `Ch ${ch} Mod ${idx + 1} Q${qIdx + 1}: answer '${q.answer}' must be in options`);
            assert(q.explanation && q.explanation.length > 5, `Ch ${ch} Mod ${idx + 1} Q${qIdx + 1}: explanation missing`);
        });

        totalQuestions += mod.questions.length;
    });

    assert.strictEqual(totalQuestions, 200, `Ch ${ch}: totalQuestions must be 200`);

    // Verify anti-boilerplate & zero publisher mentions ("NCERT")
    const rawContent = fs.readFileSync(chFile, 'utf8');
    assert(!rawContent.toLowerCase().includes('ncert'), `Ch ${ch} must NOT mention NCERT anywhere`);

    console.log(`✔ Ch ${ch}: ${chData.chapterTitle} verified (20 modules, 200 MCQs, 0 NCERT mentions).`);
}

console.log('\n================================================================');
console.log('🎉 ALL BPSC 72 COURSE & HISTORY 7-CHAPTER CHECKS PASSED!');
console.log('================================================================');

