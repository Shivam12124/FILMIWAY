const fs = require('fs');
const path = require('path');

const utilsDir = path.join(__dirname, '../utils');

function fixAllCollections() {
  const files = fs.readdirSync(utilsDir);
  let updatedCount = 0;

  for (const file of files) {
    if (!file.endsWith('.js')) continue;

    const filePath = path.join(utilsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Skip files that don't look like our movie data files
    if (!content.includes('COMPLETE_') && !content.includes('SENSITIVE_TIMELINES')) continue;

    // Skip if FALLBACK_POSTERS is already defined
    if (content.includes('export const FALLBACK_POSTERS')) continue;

    // Safely inject FALLBACK_POSTERS near the top of the file
    const updatedContent = content.replace(
      /(export\s+const\s+(?:TMDB_CONFIG|COMPLETE_MOVIE_DATABASE|COMPLETE_SCI_FI_MOVIES|SENSITIVE_TIMELINES)\s*=\s*[{[])/,
      'export const FALLBACK_POSTERS = {};\n\n$1'
    );

    if (content !== updatedContent) {
      fs.writeFileSync(filePath, updatedContent, 'utf8');
      console.log(`✅ Fixed: ${file}`);
      updatedCount++;
    }
  }

  console.log(`\n🎉 BOOM! Successfully injected FALLBACK_POSTERS into ${updatedCount} collection files.`);
}

fixAllCollections();