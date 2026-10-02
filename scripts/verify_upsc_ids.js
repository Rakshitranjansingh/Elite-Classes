const fs = require('fs');
const path = require('path');

const base = path.resolve(__dirname, '../modules/testseries/data/civilservices/UPSC/Chaptertests');
const dirs = fs.readdirSync(base).filter(f => fs.statSync(path.join(base, f)).isDirectory());

let mismatches = 0;
let scriptTagMissing = 0;
let total = 0;

dirs.forEach(subjectId => {
    const htmlFile = path.join(base, subjectId, subjectId + '_upsc.html');
    if (!fs.existsSync(htmlFile)) {
        console.log('Missing HTML for:', subjectId);
        return;
    }
    const html = fs.readFileSync(htmlFile, 'utf8');

    const topicFiles = fs.readdirSync(path.join(base, subjectId)).filter(f => f.endsWith('.js'));
    topicFiles.forEach(f => {
        total++;
        const content = fs.readFileSync(path.join(base, subjectId, f), 'utf8');
        const idMatch = content.match(/id:\s*['"]([^'"]+)['"]/);
        if (!idMatch) {
            console.log('No id in:', f);
            return;
        }
        const fileTestId = idMatch[1];

        // Check if script tag is included in HTML!
        if (!html.includes(f)) {
            console.log(`Script tag missing in ${subjectId}_upsc.html for: ${f}`);
            scriptTagMissing++;
        }

        // Parse filename: topic_01a_...
        const m = f.match(/^topic_(\d+)([abc])_/);
        if (!m) {
            console.log('Unrecognized filename pattern:', f);
            return;
        }
        const topicNum = parseInt(m[1], 10);
        const part = m[2];
        const expectedId = 'ts_upsc_' + subjectId + '_t' + String(topicNum).padStart(2, '0') + part;
        if (fileTestId !== expectedId) {
            console.log('ID MISMATCH in ' + subjectId + '/' + f + ': file has id "' + fileTestId + '" but expected "' + expectedId + '"');
            mismatches++;
        }
    });
});

console.log(`Summary -> Total: ${total}, ID Mismatches: ${mismatches}, Missing script tags: ${scriptTagMissing}`);
