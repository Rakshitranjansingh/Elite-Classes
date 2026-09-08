const fs = require('fs');
const assert = require('assert');
const path = require('path');

const code = fs.readFileSync(path.join(__dirname, '../modules/testseries/testseries.js'), 'utf8');
const fn = new Function('window', 'document', 'localStorage', code + '; return { buildTestSeriesPortalMarkup, toggleChapterTestsSubjects };');
const mockWin = {};
const { buildTestSeriesPortalMarkup } = fn(mockWin, {}, {});

const html = buildTestSeriesPortalMarkup('Class 10');

// 1. Heading check
assert(html.includes('Chapter Tests'), 'Should contain Chapter Tests title');
assert(!html.includes('Class 10: Chapter Tests'), 'Should NOT contain Class 10: Chapter Tests');

// 2. Leadership Hub button check
assert(!html.includes('Leadership Hub'), 'Leadership Hub button should be removed');

// 3. Expandable section hidden by default
assert(html.includes('id="cbt-subjects-expandable-section" style="display:none;"'), 'Expandable section should be hidden by default');

// 4. Clickable card
assert(html.includes('onclick="toggleChapterTestsSubjects()"'), 'Card should call toggleChapterTestsSubjects() on click');

// 5. Toggle badge
assert(html.includes('View Subjects'), 'Should have View Subjects badge');

// 6. Check testseries.html static file
const htmlFile = fs.readFileSync(path.join(__dirname, '../modules/testseries/testseries.html'), 'utf8');
assert(!htmlFile.includes('Class 10: Chapter Tests'), 'testseries.html should not contain Class 10: Chapter Tests');
assert(!htmlFile.includes('Leadership Hub'), 'testseries.html should not have Leadership Hub button');
assert(htmlFile.includes('id="cbt-subjects-expandable-section" style="display:none;"'), 'testseries.html should have hidden expandable section');

console.log('✅ ALL 6 VERIFICATIONS PASSED: Chapter Tests card is interactive, renamed, and subject tests are cleanly hidden by default!');
