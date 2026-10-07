const fs = require('fs');
const html = fs.readFileSync('C:/Users/filmi/.gemini/antigravity-ide/brain/a0186845-b550-4ac4-b25e-307cded4cb5d/.system_generated/steps/16642/content.md', 'utf8');

const regex = /<meta[^>]*itemProp=["']text["'][^>]*content=["']([^"']+)["']/g;
let m;
while ((m = regex.exec(html)) !== null) {
  console.log('REPLY:', m[1]);
}
