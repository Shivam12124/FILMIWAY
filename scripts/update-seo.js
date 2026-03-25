const fs = require('fs');
const path = require('path');

const moviesDir = path.join(__dirname, '../pages/movies');

function updateSEOBlockInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Extract collectionSlug to preserve it
  let slug = '';
  let searchIndex = 0;
  
  const slugMatch = content.match(/const\s+collectionSlug\s*=\s*['"]([^'"]+)['"]/);
  if (slugMatch) {
    slug = slugMatch[1];
    searchIndex = slugMatch.index;
  } else {
    // Fallback if missing: use the folder name dynamically
    slug = path.basename(path.dirname(filePath));
    const oldVarMatch = content.match(/(let\s+cleanSEOTitle|const\s+scenes\s*=)/);
    if (!oldVarMatch) return false;
    searchIndex = oldVarMatch.index;
  }

  // 2. Find start of the SEO block
  let startIndex = content.lastIndexOf('// ====', searchIndex);
  if (startIndex === -1 || (searchIndex - startIndex > 400)) {
    startIndex = searchIndex;
  }

  // 3. Find the end boundary where the SEO logic finishes (Broadened)
  const endMarkers = [
    'const masterCollectionSlug',
    'const canonicalUrl',
    '// BUG FIX:',
    'const { movieSchema',
    'const {movieSchema',
    'return ('
  ];
  
  let endIndex = -1;
  for (const marker of endMarkers) {
    const idx = content.indexOf(marker, searchIndex);
    if (idx !== -1 && (endIndex === -1 || idx < endIndex)) {
      endIndex = idx;
    }
  }

  if (endIndex === -1) return false;

  // Grab the end boundary and clear trailing comment lines
  const trailingCommentIndex = content.lastIndexOf('// ====', endIndex);
  if (trailingCommentIndex > searchIndex) {
      endIndex = trailingCommentIndex + content.substring(trailingCommentIndex).indexOf('\n') + 1;
  }

  const newBlock = `// =========================================================================
  // ✅ THE STANDARDIZED ELITE SEO BLOCK (Clean, Direct Intent)
  // =========================================================================

  const collectionSlug = '${slug}';

  const scenes = SENSITIVE_TIMELINES?.[movie.tmdbId]?.scenes || [];
  
  // 1. PURE META TITLE LOGIC (No extra tags or keywords)
  let cleanSEOTitle = '';
  const coreUSP = "Timestamps & Parents Guide:";

  if (scenes.length > 0) {
    const idealTitle = \`\${coreUSP} \${movie.Title} (\${currentMovieYear})\`;
    
    if (idealTitle.length <= 62) {
      cleanSEOTitle = idealTitle; 
    } else {
      cleanSEOTitle = \`\${coreUSP} \${movie.Title}\`;
    }
  } else {
    const idealCleanTitle = \`Parents Guide: \${movie.Title} (\${currentMovieYear})\`;
    
    if (idealCleanTitle.length <= 62) {
      cleanSEOTitle = idealCleanTitle;
    } else {
      cleanSEOTitle = \`Parents Guide: \${movie.Title}\`;
    }
  }

  // 2. STANDARDIZED ELITE META DESCRIPTION (Mature Scenes & Top Ranges)
  let currentRuntime = movie.Runtime || movie.runtime || "Official";
  if (typeof currentRuntime === 'number') currentRuntime = \`\${currentRuntime} min\`;

  let cleanSEODesc = '';
  if (scenes.length > 0) {
    const sceneCount = scenes.length;
    // Show the full range (Start-End) for the first 2 scenes only to save space
    const topScenes = scenes.slice(0, 2).map(s => \`\${s.start}–\${s.end}\`).join(', ');
    
    cleanSEODesc = \`\${movie.Title} Parents Guide: \${sceneCount} mature scenes (sex, nudity) manually verified. Skip: \${topScenes}... Full \${currentRuntime} list inside.\`;
  } else {
    cleanSEODesc = \`\${movie.Title} Parents Guide. Filmiway editors have manually verified zero sex scenes or nudity in the full \${currentRuntime} runtime.\`;
  }

  // =========================================================================

    `;

  // Rebuild the file
  const newContent = content.substring(0, startIndex) + newBlock + content.substring(endIndex).replace(/^\s+/, '');
  
  fs.writeFileSync(filePath, newContent, 'utf8');
  return true;
}

function traverseDir(dir) {
  const files = fs.readdirSync(dir);
  let updatedCount = 0;

  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      updatedCount += traverseDir(fullPath);
    } else if (file === '[id].js') {
      const success = updateSEOBlockInFile(fullPath);
      if (success) {
        console.log(`✅ Updated: ${fullPath}`);
        updatedCount++;
      } else {
        console.log(`⚠️ Skipped: ${fullPath}`);
      }
    }
  }
  return updatedCount;
}

const total = traverseDir(moviesDir);
console.log(`\n🎉 Process completed. Successfully updated ${total} files.`);
