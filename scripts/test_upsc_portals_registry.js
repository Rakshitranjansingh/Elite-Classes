const fs = require('fs');
const path = require('path');
const baseDir = path.resolve(__dirname, '../modules/testseries/data/civilservices/UPSC/Chaptertests');
const subjects = fs.readdirSync(baseDir).filter(s => fs.statSync(path.join(baseDir, s)).isDirectory());

let totalMismatches = 0;
let totalTestsChecked = 0;

for (const subj of subjects) {
    const portalPath = path.join(baseDir, subj, subj + '_upsc.html');
    if (!fs.existsSync(portalPath)) continue;
    const html = fs.readFileSync(portalPath, 'utf8');

    // Extract TOPICS from html
    const topicsMatch = html.match(/var TOPICS = \[([\s\S]*?)\];/);
    if (!topicsMatch) {
        console.error('No TOPICS found in', subj);
        continue;
    }
    const topics = eval('[' + topicsMatch[1] + ']');

    // Extract script tags
    const scriptRegex = /<script src="(topic_[^"]+\.js)"><\/script>/g;
    let match;
    const loadedFiles = new Set();
    while ((match = scriptRegex.exec(html)) !== null) {
        loadedFiles.add(match[1]);
    }

    // Now simulate window.EliteTestRegistry
    const registry = [];
    for (const f of loadedFiles) {
        const filePath = path.join(baseDir, subj, f);
        if (fs.existsSync(filePath)) {
            const testObj = require(filePath);
            registry.push(testObj);
        } else {
            console.error('Missing file referenced in HTML:', filePath);
        }
    }

    // Now check every topic and part
    ['A', 'B', 'C'].forEach(part => {
        topics.forEach(t => {
            totalTestsChecked++;
            const expectedId = 'ts_upsc_' + subj + '_t' + String(t.num).padStart(2, '0') + part.toLowerCase();
            const found = registry.find(item => item && item.id === expectedId);
            if (!found) {
                totalMismatches++;
                console.error('MISMATCH in ' + subj + ': expected ' + expectedId + ' for topic ' + t.num + ' ' + t.title);
            }
        });
    });
}

console.log('Checked', totalTestsChecked, 'tests across all', subjects.length, 'subjects. Total mismatches:', totalMismatches);
