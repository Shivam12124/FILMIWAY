// scripts/fix-missed.js
const fs = require('fs');
const path = require('path');

const MOVIES_DIR = path.join(__dirname, '../pages/movies');

// We check both the old and new folder names just in case!
const targetFolders = [
    'movies-like-inception', 'like-inception',
    'movies-like-memento', 'like-memento',
    'movies-like-shutter-island', 'like-shutter-island',
    'best-war-films', 'war-films',
    'movies-like-se7en', 'like-se7en',
    'best-time-travel-movies', 'time-travel',
    'best-heist-thriller-movies', 'heist-thriller'
];

let fixedCount = 0;

targetFolders.forEach(folder => {
    const filePath = path.join(MOVIES_DIR, folder, '[id].js');
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf8');

    // Skip if already fixed
    if (content.includes('masterCollectionSlug')) {
        console.log(`✅ Already fixed: ${folder}/[id].js`);
        return;
    }

    // 1. Identify what they named the slug variable (collectionSlug, currentRouteSlug, etc.)
    let slugVarMatch = content.match(/const\s+(collectionSlug|currentRouteSlug)\s*=\s*['"][^'"]+['"]/);
    let slugVarName = slugVarMatch ? slugVarMatch[1] : "'missing-slug'";

    // 2. Replace the canonical URL definition regardless of how it's formatted
    const canonicalRegex = /const\s+canonicalUrl\s*=\s*[^;]+;/;
    if (canonicalRegex.test(content)) {
        const replacement = `const masterCollectionSlug = getPrimaryCollectionForMovie(movie.imdbID) || ${slugVarName};\n    const canonicalUrl = \`https://filmiway.com/movies/\${masterCollectionSlug}/\${movie.imdbID}\`;`;
        content = content.replace(canonicalRegex, replacement);
    } else {
        console.log(`⚠️ Could not find canonicalUrl in ${folder}`);
    }

    // 3. Replace the 4th argument in the Schema generator function
    const schemaRegex = /(generateCleanMovieSchema\(\s*movie,\s*movieData,\s*currentMovieYear,\s*)([^,]+)(,)/;
    if (schemaRegex.test(content)) {
        content = content.replace(schemaRegex, `$1masterCollectionSlug$3`);
    }

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`🚀 Successfully fixed: ${folder}/[id].js`);
    fixedCount++;
});

console.log(`\n🎉 Done! Fixed ${fixedCount} stubborn files.`);
