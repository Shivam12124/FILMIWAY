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

  // 1. Add the Header Import
  if (!content.includes("import Header from '../../../components/Header';")) {
    content = content.replace(
      /import TMDBAttribution from '\.\.\/\.\.\/\.\.\/components\/TMDBAttribution';/,
      "import TMDBAttribution from '../../../components/TMDBAttribution';\nimport Header from '../../../components/Header';"
    );
    modified = true;
  }

  // 2. Add the <Header /> component just below the CinematicBackground
  if (!content.includes("<Header />")) {
    content = content.replace(
      /<div className="absolute inset-0"><CinematicBackground \/><\/div>/,
      "<div className=\"absolute inset-0\"><CinematicBackground /></div>\n          \n          <Header />"
    );
    modified = true;
  }

  // 3. Update the content padding to accommodate the header
  if (content.includes("pt-10 sm:pt-12 lg:pt-16")) {
    content = content.replace(/pt-10 sm:pt-12 lg:pt-16/g, "pt-20 sm:pt-24 lg:pt-28");
    modified = true;
  }

  // 4. Lower the SmartBackButton so it doesn't overlap the header
  if (content.includes("fixed top-4 left-4 sm:top-6 sm:left-6")) {
    content = content.replace(/fixed top-4 left-4 sm:top-6 sm:left-6/g, "fixed top-20 left-4 sm:top-24 sm:left-6");
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(file, content, 'utf-8');
    updatedCount++;
    console.log(`✅ Updated: ${file}`);
  }
});

console.log(`\n🎉 Successfully added the Header to ${updatedCount} collection files!`);