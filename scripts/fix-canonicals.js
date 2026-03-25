const fs = require('fs');
const path = require('path');

const MOVIES_DIR = path.join(__dirname, '../pages/movies');
let fixedCount = 0;

function fixFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if already fixed to prevent double-replacements
    if (content.includes('const masterCollectionSlug')) return;

    // Flexible regex to catch any variation of spacing
    const regex = /const canonicalUrl = `https:\/\/filmiway\.com\/movies\/[^`]+`;\s*const \{\s*movieSchema,\s*faqSchema\s*\}\s*=\s*generateCleanMovieSchema\(\s*movie,\s*movieData,\s*currentMovieYear,\s*collectionSlug,/g;

    if (regex.test(content)) {
        const replacement = `const masterCollectionSlug = getPrimaryCollectionForMovie(movie.imdbID) || collectionSlug;
    const canonicalUrl = \`https://filmiway.com/movies/\${masterCollectionSlug}/\${movie.imdbID}\`;

    const { movieSchema, faqSchema } = generateCleanMovieSchema(
        movie, 
        movieData, 
        currentMovieYear, 
        masterCollectionSlug,`;
        
        content = content.replace(regex, replacement);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Fixed: ${path.basename(path.dirname(filePath))}/[id].js`);
        fixedCount++;
    }
}

function walk(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) walk(filePath);
        else if (file === '[id].js') fixFile(filePath);
    });
}

console.log('🚀 Fixing Canonical URLs...');
walk(MOVIES_DIR);
console.log(`✅ Done! Fixed ${fixedCount} files.`);
