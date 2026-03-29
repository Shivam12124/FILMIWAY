const fs = require('fs');
const path = require('path');

// Target the directory where all your collections live
const targetDir = path.join(process.cwd(), 'pages', 'movies');

// Function to recursively find all [id].js files
function getAllIdFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllIdFiles(fullPath, arrayOfFiles);
    } else {
      if (file === '[id].js') {
        arrayOfFiles.push(fullPath);
      }
    }
  });
  return arrayOfFiles;
}

const files = getAllIdFiles(targetDir);
let updatedCount = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  let modified = false;

  // 1. Remove the component definition (including any comments right above it)
  const defRegex = /(?:\/\/[^\n]*\r?\n)*const SmartBackButton = \(\) => \{[\s\S]*?return \([\s\S]*?\);\r?\n\};\r?\n?/g;
  if (defRegex.test(content)) {
    content = content.replace(defRegex, '');
    modified = true;
  }

  // 2. Remove the `<SmartBackButton />` usage in the JSX
  const usageRegex = /[ \t]*<SmartBackButton \/>\r?\n?/g;
  if (usageRegex.test(content)) {
    content = content.replace(usageRegex, '');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(file, content, 'utf-8');
    updatedCount++;
    console.log(`✅ Removed from: ${file}`);
  }
});

console.log(`\n🎉 Successfully removed SmartBackButton from ${updatedCount} collection files!`);