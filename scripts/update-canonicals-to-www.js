const fs = require('fs');
const path = require('path');

function processDirectory(dir, extensions) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.next' && file !== '.git') {
        processDirectory(fullPath, extensions);
      }
    } else if (extensions.some(ext => file.endsWith(ext))) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Match https://www.filmiway.com (not followed by www)
      const updated = content.replace(/https:\/\/filmiway\.com/g, 'https://www.filmiway.com');
      
      if (updated !== content) {
        fs.writeFileSync(fullPath, updated, 'utf8');
        console.log(`Updated canonicals in: ${fullPath}`);
      }
    }
  }
}

const rootDir = path.resolve(__dirname, '..');
console.log('Replacing https://www.filmiway.com with https://www.filmiway.com across utils, pages, components...');
processDirectory(path.join(rootDir, 'utils'), ['.js']);
processDirectory(path.join(rootDir, 'pages'), ['.js']);
processDirectory(path.join(rootDir, 'components'), ['.js']);
processDirectory(path.join(rootDir, 'scripts'), ['.js']);
console.log('✅ Canonical URL update complete!');
