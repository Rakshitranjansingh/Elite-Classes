const fs = require('fs');
const path = require('path');


// If jsdom is not available, we can test using lightweight DOM simulation or require
console.log('Testing portal simulation...');
const portalPath = path.resolve(__dirname, '../modules/testseries/data/civilservices/UPSC/Chaptertests/ancient_history/ancient_history_upsc.html');
const htmlContent = fs.readFileSync(portalPath, 'utf8');

// Check script tags in ancient_history_upsc.html
const scripts = [];
const re = /<script src="([^"]+)"><\/script>/g;
let m;
while ((m = re.exec(htmlContent)) !== null) {
    scripts.push(m[1]);
}
console.log('Total scripts found in ancient_history_upsc.html:', scripts.length);

// Verify every script file path exists relative to ancient_history directory
const dir = path.dirname(portalPath);
let missing = 0;
for (const s of scripts) {
    if (s.startsWith('http')) continue;
    const full = path.resolve(dir, s);
    if (!fs.existsSync(full)) {
        console.error('MISSING SCRIPT:', s, 'resolved to', full);
        missing++;
    }
}
console.log('Script path check done. Missing:', missing);
