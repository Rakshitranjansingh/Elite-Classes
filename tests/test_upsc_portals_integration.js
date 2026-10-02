const fs = require('fs');
const path = require('path');
const assert = require('assert');

const ROOT = path.resolve(__dirname, '..');
const PORTALS_DIR = path.join(ROOT, 'modules/testseries/data/civilservices/UPSC/Chaptertests');

console.log('================================================================');
console.log('🧪 VERIFYING UPSC CHAPTER PORTALS INTEGRATION & CBT ENGINE');
console.log('================================================================\n');

const subjects = fs.readdirSync(PORTALS_DIR).filter(f => fs.statSync(path.join(PORTALS_DIR, f)).isDirectory());
console.log(`Found ${subjects.length} subjects in Chaptertests directory.`);
assert.strictEqual(subjects.length, 16, 'Must have 16 subjects');

for (const subj of subjects) {
    const portalFile = path.join(PORTALS_DIR, subj, `${subj}_upsc.html`);
    assert.ok(fs.existsSync(portalFile), `Portal file missing: ${portalFile}`);
    const html = fs.readFileSync(portalFile, 'utf8');

    // 1. Verify cbtPlayer.js script link resolves to existing file
    assert.ok(html.includes('modules/testseries/cbtPlayer.js'), `${subj}_upsc.html must link to modules/testseries/cbtPlayer.js`);
    const cbtPlayerPath = path.resolve(path.join(PORTALS_DIR, subj), '../../../../../../../modules/testseries/cbtPlayer.js');
    assert.ok(fs.existsSync(cbtPlayerPath), `cbtPlayer.js resolved path must exist: ${cbtPlayerPath}`);

    // 2. Verify no broken '' + testId + '' escaping
    assert.ok(!html.includes("'' + testId + ''"), `${subj}_upsc.html must not contain broken '' + testId + '' escaping`);
    assert.ok(html.includes("data-testid") && html.includes("getAttribute"), `${subj}_upsc.html must use data-testid handler`);

    // 3. Verify clickable logo
    assert.ok(html.includes('href="../../../../../../../student_home.html"'), `${subj}_upsc.html must link to student_home.html`);
}

console.log('✔ All 16 UPSC subject portals verified with accurate cbtPlayer.js links and clean data-testid handlers!\n');

// 4. Verify testseries_civilservices.html
const masterHubPath = path.join(ROOT, 'modules/testseries/data/civilservices/testseries_civilservices.html');
const hubHtml = fs.readFileSync(masterHubPath, 'utf8');

for (const subj of subjects) {
    assert.ok(hubHtml.includes(`UPSC/Chaptertests/${subj}/${subj}_upsc.html`), `testseries_civilservices.html must link to ${subj}_upsc.html`);
}
console.log('✔ testseries_civilservices.html contains direct active links to all 16 UPSC subject portals!\n');

console.log('================================================================');
console.log('🎉 ALL UPSC PORTALS & CIVIL SERVICES INTEGRATION TESTS PASSED!');
console.log('================================================================');
