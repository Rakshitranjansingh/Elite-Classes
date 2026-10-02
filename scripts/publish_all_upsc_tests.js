const fs = require('fs');
const path = require('path');
const base = path.resolve(__dirname, '../modules/testseries/data/civilservices/UPSC/Chaptertests');
let updated = 0;
let total = 0;

function walk(dir) {
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) {
      walk(full);
    } else if (item.endsWith('.js') && item.startsWith('topic_')) {
      total++;
      let content = fs.readFileSync(full, 'utf8');
      if (content.includes("status: 'inactive'")) {
        content = content.replace("status: 'inactive'", "status: 'published'");
        fs.writeFileSync(full, content, 'utf8');
        updated++;
      }
    }
  }
}

walk(base);
console.log(`Scanned ${total} files. Updated status to published in ${updated} files.`);
