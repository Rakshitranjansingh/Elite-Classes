const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

console.log('Total HTML length:', html.length);

// 1. Check onclick functions
const onclickRegex = /onclick="([a-zA-Z0-9_]+)\(/g;
let m;
const onclicks = new Set();
while ((m = onclickRegex.exec(html)) !== null) {
  onclicks.add(m[1]);
}

console.log('\n--- Checking onclick functions ---');
for (const fn of onclicks) {
  const exists = html.includes('function ' + fn) || html.includes(fn + ' =') || html.includes(fn + ':');
  if (!exists) {
    console.warn('❌ Potential missing function for onclick:', fn);
  } else {
    console.log('✔ Function exists:', fn);
  }
}

// 2. Check modal open/close IDs
console.log('\n--- Checking Modal IDs ---');
const openModalRegex = /openModal\(['"]([^'"]+)['"]\)/g;
const openModalIds = new Set();
while ((m = openModalRegex.exec(html)) !== null) {
  openModalIds.add(m[1]);
}
for (const id of openModalIds) {
  const hasElement = html.includes(`id="${id}"`) || html.includes(`id='${id}'`);
  if (!hasElement) {
    console.warn('❌ Modal element missing for ID:', id);
  } else {
    console.log('✔ Modal ID element found:', id);
  }
}

// 3. Check internal anchor targets
console.log('\n--- Checking internal hrefs ---');
const hrefRegex = /href="#([a-zA-Z0-9_\-]+)"/g;
const anchorIds = new Set();
while ((m = hrefRegex.exec(html)) !== null) {
  anchorIds.add(m[1]);
}
for (const id of anchorIds) {
  const hasElement = html.includes(`id="${id}"`) || html.includes(`id='${id}'`);
  if (!hasElement) {
    console.warn('❌ Anchor target missing for href="#' + id + '"');
  } else {
    console.log('✔ Anchor target found:', id);
  }
}

// 4. Check all local asset links (img, script, link)
console.log('\n--- Checking local asset links ---');
const srcRegex = /(?:src|href)="([^"#?:]+\.[a-zA-Z0-9]+)(?:\?[^"]*)?"/g;
const assets = new Set();
while ((m = srcRegex.exec(html)) !== null) {
  if (!m[1].startsWith('http') && !m[1].startsWith('//') && !m[1].startsWith('mailto:') && !m[1].startsWith('tel:')) {
    assets.add(m[1]);
  }
}
for (const asset of assets) {
  if (fs.existsSync(asset)) {
    console.log('✔ Asset exists:', asset);
  } else {
    console.warn('❌ Missing local asset:', asset);
  }
}
