const fs = require('fs');
const html = fs.readFileSync('C:/Users/filmi/.gemini/antigravity-ide/brain/a0186845-b550-4ac4-b25e-307cded4cb5d/.system_generated/steps/16690/content.md', 'utf8');

// find all spans with dir="auto"
const spanRegex = /<span[^>]*dir=["']auto["'][^>]*>(.*?)<\/span>/gs;
let match;
console.log('--- ALL TEXT SPANS ---');
while ((match = spanRegex.exec(html)) !== null) {
  const text = match[1].replace(/<[^>]+>/g, '').trim();
  if (text.length > 5) console.log('SPAN:', text);
}

// find all itemProp="text"
const itemRegex = /itemProp=["']text["'][^>]*content=["']([^"']+)["']/g;
console.log('\n--- ALL ITEMPROP TEXTS ---');
while ((match = itemRegex.exec(html)) !== null) {
  console.log('ITEM:', match[1]);
}
