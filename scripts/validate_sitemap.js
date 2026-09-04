const fs = require('fs');
const path = require('path');

const xml = fs.readFileSync(path.join(__dirname, '../public/sitemap-movies.xml'), 'utf8');

console.log('Starts with <?xml:', xml.startsWith('<?xml'));
console.log('Ends with </urlset>:', xml.trim().endsWith('</urlset>'));

const urlBlocks = xml.match(/<url>[\s\S]*?<\/url>/g) || [];
console.log('Total <url> blocks:', urlBlocks.length);

let errors = [];
urlBlocks.forEach((block, index) => {
  if (!block.includes('<loc>https://www.filmiway.com/movie/')) {
    errors.push('Block ' + index + ': Missing or invalid <loc>');
  }
  if (!block.includes('<lastmod>')) {
    errors.push('Block ' + index + ': Missing <lastmod>');
  }
  if (!block.includes('<changefreq>')) {
    errors.push('Block ' + index + ': Missing <changefreq>');
  }
  if (!block.includes('<priority>')) {
    errors.push('Block ' + index + ': Missing <priority>');
  }
});

if (errors.length === 0) {
  console.log('🎉 100% VALID! Zero missing tags or XML errors found across all ' + urlBlocks.length + ' URLs.');
} else {
  console.error('Errors found:', errors);
}
