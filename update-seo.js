const fs = require('fs');
const path = require('path');

const moviesDir = path.join(__dirname, 'pages', 'movies');

function updateSEOBlockInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Extract slug dynamically
  let slug = path.basename(path.dirname(filePath));
  const slugMatch = content.match(/const\s+(?:collectionSlug|currentRouteSlug)\s*=\s*['"]([^'"]+)['"]/);
  if (slugMatch) slug = slugMatch[1];

  // BULLETPROOF ANCHORS: Target everything between "const trailer" and "const { movieSchema"
  const startAnchor = content.match(/const\s+trailer\s*=[^;]+;/);
  if (!startAnchor) return false;
  const startIndex = startAnchor.index + startAnchor[0].length;

  const endAnchor = content.match(/const\s+\{\s*movieSchema/);
  if (!endAnchor) return false;
  const endIndex = endAnchor.index;

  if (startIndex >= endIndex) return false;

  const newBlock = `
  // =========================================================================
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

  const masterCollectionSlug = getPrimaryCollectionForMovie(movie.imdbID) || collectionSlug;
  const canonicalUrl = \`https://filmiway.com/movies/\${masterCollectionSlug}/\${movie.imdbID}\`;
  `;

  // Rebuild the file
  const newContent = content.substring(0, startIndex) + newBlock + '\n  ' + content.substring(endIndex);
  
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
