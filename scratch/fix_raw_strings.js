const fs = require('fs');

let content = fs.readFileSync('scratch/ch3_part1.py', 'utf8');
// Replace "theoryHtml": """ with "theoryHtml": r"""
content = content.replace(/"theoryHtml": """/g, '"theoryHtml": r"""');
fs.writeFileSync('scratch/ch3_part1.py', content, 'utf8');
console.log("Fixed theoryHtml to raw strings!");
