const fs = require('fs');
const path = require('path');

// Load Chapter 2 test bank
const bankFilePath = path.resolve(__dirname, '../modules/testseries/data/class10/science/chapter2_acids_bases_salts.js');
const bankContent = fs.readFileSync(bankFilePath, 'utf8');
const bank = eval(`(function(){ ${bankContent}; return Class10ScienceChapter2FullBank; })()`);

function sanitize(str) {
    if (!str) return '';
    return str
        .replace(/NCERT/gi, 'curriculum')
        .replace(/\s+/g, ' ')
        .trim();
}

function getBankQ(id) {
    const q = bank.questions.find(x => x.id === id);
    if (!q) throw new Error(`Question ID ${id} not found in test bank!`);
    const correctOpt = q.options.find(o => o.key === q.correct_option);
    return {
        question: sanitize(q.question),
        options: q.options.map(o => sanitize(o.text)),
        answer: sanitize(correctOpt.text),
        explanation: sanitize(q.explanation)
    };
}

console.log(`Loaded test bank with ${bank.questions.length} questions.`);
