const fs = require('fs');

const chNum = process.argv[2];
if (!chNum) {
    console.error("Please provide chapter number");
    process.exit(1);
}

const files = {
    4: 'chapter4_carbon_compounds.js',
    5: 'chapter5_life_processes.js',
    6: 'chapter6_control_coordination.js',
    7: 'chapter7_reproduction.js',
    8: 'chapter8_heredity.js',
    9: 'chapter9_light.js',
    10: 'chapter10_human_eye.js',
    11: 'chapter11_electricity.js',
    12: 'chapter12_magnetic_effects.js',
    13: 'chapter13_our_environment.js'
};

const filename = `modules/testseries/data/class10/science/${files[chNum]}`;
const code = fs.readFileSync(filename, 'utf8');

// Find the variable name
const match = code.match(/const\s+([A-Za-z0-9_]+)\s*=\s*\{/);
if (!match) {
    console.error("Could not find bank variable name");
    process.exit(1);
}
const varName = match[1];

eval(code + `\nfs.writeFileSync('scratch/ch${chNum}_bank_questions.json', JSON.stringify(${varName}.questions, null, 2));\n`);
console.log(`Successfully exported Chapter ${chNum} (${varName}) with questions to scratch/ch${chNum}_bank_questions.json`);
