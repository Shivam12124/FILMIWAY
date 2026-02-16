const fs = require('fs');
const path = require('path');

// Adjust path to point to pages/movies from scripts/
const MOVIES_DIR = path.join(__dirname, '../pages/movies');
const UTILS_IMPORT_PATH = '../../../utils/cleanMovieSchema';

function getPlatformName(dirName) {
    if (dirName.startsWith('movies-like-')) return 'null';
    if (dirName.includes('peacock')) return "'Peacock'";
    if (dirName.includes('paramount')) return "'Paramount+'";
    if (dirName.includes('hulu')) return "'Hulu'";
    if (dirName.includes('hbo')) return "'HBO Max'";
    if (dirName.includes('netflix')) return "'Netflix'";
    return 'null';
}

function updateFile(filePath, dirName) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Skip if already updated or doesn't have the old function
    if (content.includes('generateCleanMovieSchema')) return;
    if (!content.includes('const generateMovieSchema')) return;

    console.log(`Updating: ${dirName}/[id].js`);

    const platformName = getPlatformName(dirName);

    // 1. Add Import
    if (!content.includes('cleanMovieSchema')) {
        // Insert after the last import
        const lastImportIndex = content.lastIndexOf('import ');
        const endOfLastImport = content.indexOf('\n', lastImportIndex);
        
        if (lastImportIndex !== -1) {
             content = content.slice(0, endOfLastImport + 1) + 
                       `import { generateCleanMovieSchema } from '${UTILS_IMPORT_PATH}';\n` + 
                       content.slice(endOfLastImport + 1);
        } else {
            content = `import { generateCleanMovieSchema } from '${UTILS_IMPORT_PATH}';\n` + content;
        }
    }

    // 2. Remove Local Function
    // Matches the function signature and body up to the closing brace
    const functionRegex = /(\/\/.*SCHEMA.*[\r\n]+)?const generateMovieSchema = \([^)]*\) => \{[\s\S]*?return \{ movieSchema, faqSchema \};\s*\};/g;
    
    if (functionRegex.test(content)) {
        content = content.replace(functionRegex, '');
    } else {
        console.warn(`⚠️ Could not auto-remove generateMovieSchema in ${dirName}. Please check manually.`);
    }

    // 3. Replace Function Call
    const callRegex = /const\s+\{\s*movieSchema,\s*faqSchema\s*\}\s*=\s*generateMovieSchema\s*\([^)]+\);/;
    
    const newCall = `const { movieSchema, faqSchema } = generateCleanMovieSchema(
        movie, 
        movieData, 
        currentMovieYear, 
        collectionSlug, 
        ${platformName},
        COMPLETE_MOVIE_DATA[movie.tmdbId]
    );`;

    if (callRegex.test(content)) {
        content = content.replace(callRegex, newCall);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Updated ${dirName}`);
    } else {
        console.warn(`⚠️ Could not find function call in ${dirName}`);
    }
}

function walk(dir) {
    if (!fs.existsSync(dir)) {
        console.error(`Directory not found: ${dir}`);
        return;
    }

    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            // Check if this directory contains an [id].js
            const pagePath = path.join(filePath, '[id].js');
            if (fs.existsSync(pagePath)) {
                updateFile(pagePath, file);
            }
            walk(filePath); // Continue recursion
        }
    });
}

console.log('🚀 Starting Schema Update...');
walk(MOVIES_DIR);
console.log('✅ Schema Update Complete.');
