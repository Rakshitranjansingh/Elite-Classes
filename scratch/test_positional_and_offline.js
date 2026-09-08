const fs = require('fs');
const path = require('path');
const assert = require('assert');

// Test 1: Positional Options Guard & Answer Vault
const cbtCode = fs.readFileSync(path.join(__dirname, '../modules/testseries/cbtPlayer.js'), 'utf8');
const fn = new Function('window', 'document', 'localStorage', cbtCode + '; return CBTPlayer;');
const CBTPlayer = fn(
    { innerWidth: 1200, innerHeight: 800, outerWidth: 1200, outerHeight: 800 },
    { querySelector: () => null, addEventListener: () => {} },
    {}
);

const testData = {
    questions: [
        {
            id: 'q1',
            question: 'Which of the following is correct?',
            option_a: 'Option 1',
            option_b: 'Option 2',
            option_c: 'Both A and B',
            option_d: 'None of these',
            correct_option: 'C',
            explanation: 'Both 1 and 2 are correct.'
        },
        {
            id: 'q2',
            question: 'What is water?',
            option_a: 'Solid',
            option_b: 'Liquid',
            option_c: 'Gas',
            option_d: 'All of the above',
            correct_option: 'D',
            explanation: 'Water exists in three states.'
        },
        {
            id: 'q3',
            question: 'Normal question?',
            option_a: 'Alpha',
            option_b: 'Beta',
            option_c: 'Gamma',
            option_d: 'Delta',
            correct_option: 'A',
            explanation: 'Normal.'
        }
    ]
};

const sanitizedTest = CBTPlayer.randomizeTest(testData);

// Find the questions in sanitizedTest
const q1 = sanitizedTest.questions.find(q => q.id === 'q1');
const q2 = sanitizedTest.questions.find(q => q.id === 'q2');
const q3 = sanitizedTest.questions.find(q => q.id === 'q3');

// Positional options must retain their natural slot
assert.strictEqual(q1.options[2].text, 'Both A and B', 'Both A and B must maintain its positional slot');
assert.strictEqual(q2.options[3].text, 'All of the above', 'All of the above must maintain its positional slot');

// Answers & explanations must be completely deleted from public objects
assert.strictEqual(q1.correct_option, undefined, 'correct_option must be stripped from public q1');
assert.strictEqual(q1.explanation, undefined, 'explanation must be stripped from public q1');
assert.strictEqual(q2.correct_option, undefined, 'correct_option must be stripped from public q2');
assert.strictEqual(q2.explanation, undefined, 'explanation must be stripped from public q2');
assert.strictEqual(q3.correct_option, undefined, 'correct_option must be stripped from public q3');
assert.strictEqual(q3.explanation, undefined, 'explanation must be stripped from public q3');

console.log('✅ PASS: CBTPlayer positional guard preserved natural option ordering for "Both A and B" and "All of the above".');
console.log('✅ PASS: All correct_option & explanation properties stripped from client memory into closure vault.');

// Test 2: HTML Escape Utility
const appCode = fs.readFileSync(path.join(__dirname, '../js/app.js'), 'utf8');
const localDb = {};
const mockLocalStorage = {
    getItem: (k) => localDb[k] || null,
    setItem: (k, v) => { localDb[k] = String(v); },
    removeItem: (k) => { delete localDb[k]; }
};
global.localStorage = mockLocalStorage;
const appFn = new Function('window', 'document', 'localStorage', appCode + '; return window.escapeHtml;');
const mockWin = { localStorage: mockLocalStorage };
const escapeHtml = appFn(mockWin, { addEventListener: () => {} }, mockLocalStorage);

const dangerousXss = '<script>alert("pwned")</script>&"\'';
const sanitized = escapeHtml(dangerousXss);
assert.strictEqual(sanitized, '&lt;script&gt;alert(&quot;pwned&quot;)&lt;/script&gt;&amp;&quot;&#039;', 'HTML characters must be escaped');
console.log('✅ PASS: escapeHtml() correctly encodes < > & " \' to safe HTML entities.');

// Test 3: Offline Mutation Queue in DBService
const apiCode = fs.readFileSync(path.join(__dirname, '../supabase/api.js'), 'utf8');
const apiFn = new Function('window', 'document', 'localStorage', apiCode + '; return DBService;');
const DBService = apiFn({}, { addEventListener: () => {} }, mockLocalStorage);

DBService.enqueueOfflineMutation('UPDATE_ATTENDANCE', { id: 'att_001', status: 'present' });
const queue = JSON.parse(mockLocalStorage.getItem('ec_offline_mutation_queue') || '[]');
assert.strictEqual(queue.length, 1, 'Queue should have 1 mutation item');
assert.strictEqual(queue[0].action, 'UPDATE_ATTENDANCE');
assert.strictEqual(queue[0].payload.id, 'att_001');
console.log('✅ PASS: DBService.enqueueOfflineMutation persists offline actions gracefully.');

console.log('\n🎉 ALL PHASE VERIFICATIONS PASSED 100%!');
