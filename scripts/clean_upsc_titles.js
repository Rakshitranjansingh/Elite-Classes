const fs = require('fs');
const path = require('path');

const base = path.resolve(__dirname, '../modules/testseries/data/civilservices/UPSC/Chaptertests');
let total = 0;
let modified = 0;
const samples = [];
const dryRun = process.argv.includes('--dry-run');

const dirs = fs.readdirSync(base).filter(f => fs.statSync(path.join(base, f)).isDirectory());

dirs.forEach(dir => {
    const dirPath = path.join(base, dir);
    const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.js'));
    files.forEach(f => {
        total++;
        const filePath = path.join(dirPath, f);
        const content = fs.readFileSync(filePath, 'utf8');

        // Replace title: '... ? Part A: Easy & Moderate'
        // Also clean up top comment header question mark: 'Elite Classes ? UPSC' -> 'Elite Classes — UPSC'
        let newContent = content.replace(/(title:\s*['"])(.*?)(['"],)/, (match, prefix, val, suffix) => {
            let cleanVal = val.replace(/\s*\?\s*Part\s+[ABC].*$/i, '').trim();
            // Also if there's any stray trailing question marks
            cleanVal = cleanVal.replace(/\s*\?+$/, '').trim();
            return prefix + cleanVal + suffix;
        });

        // Clean comment header
        newContent = newContent.replace(/\*\s*Elite Classes \? UPSC/g, '* Elite Classes — UPSC');
        newContent = newContent.replace(/\*\s*Test\s*:\s*Part A:[^\r\n]*/gi, '* Test     : Test 1');
        newContent = newContent.replace(/\*\s*Test\s*:\s*Part B:[^\r\n]*/gi, '* Test     : Test 2');
        newContent = newContent.replace(/\*\s*Test\s*:\s*Part C:[^\r\n]*/gi, '* Test     : Test 3');

        let cleanTitleCheck = (newContent.match(/title:\s*['"](.*?)['"],/) || [])[1] || '';
        if (cleanTitleCheck.includes('?') || /Part\s+[ABC]/i.test(cleanTitleCheck)) {
            console.warn(`[WARNING] Suspicious title remaining in ${f}: "${cleanTitleCheck}"`);
        }

        if (newContent !== content) {
            modified++;
            if (samples.length < 8) {
                const origTitle = (content.match(/title:\s*['"].*?['"],/) || [''])[0];
                const newTitle = (newContent.match(/title:\s*['"].*?['"],/) || [''])[0];
                samples.push({ file: f, before: origTitle, after: newTitle });
            }
            if (!dryRun) {
                fs.writeFileSync(filePath, newContent, 'utf8');
            }
        }
    });
});

console.log(`Finished. Total: ${total}, Modified: ${modified}, DryRun: ${dryRun}`);
console.log('Sample replacements:\n', JSON.stringify(samples, null, 2));
