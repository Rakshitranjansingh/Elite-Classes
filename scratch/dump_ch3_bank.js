const fs = require('fs');

// Read and eval the bank
const bankCode = fs.readFileSync('modules/testseries/data/class10/science/chapter3_metals_non_metals.js', 'utf8');
const script = bankCode + '\nfs.writeFileSync("scratch/ch3_bank_questions.json", JSON.stringify(Class10ScienceChapter3FullBank.questions, null, 2));\n';
eval(script);
console.log("Exported ch3 questions successfully!");

