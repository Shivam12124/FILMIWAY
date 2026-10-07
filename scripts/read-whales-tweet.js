const fs = require('fs');
const html = fs.readFileSync('C:/Users/filmi/.gemini/antigravity-ide/brain/a0186845-b550-4ac4-b25e-307cded4cb5d/.system_generated/steps/16716/content.md', 'utf8');

const regex = /<meta[^>]*itemProp=["']text["'][^>]*content=["']([^"']+)["']/g;
let m;
console.log('--- EXTRACTED TWEET & REPLIES ---');
while ((m = regex.exec(html)) !== null) {
  console.log('TEXT:', m[1]);
}

const titleMatch = html.match(/<title>([^<]+)<\/title>/);
console.log('TITLE:', titleMatch ? titleMatch[1] : 'No title');

const ogDesc = html.match(/<meta property=["']og:description["'] content=["']([^"']+)["']/);
console.log('OG DESC:', ogDesc ? ogDesc[1] : 'No og desc');
