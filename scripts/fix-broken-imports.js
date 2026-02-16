const fs = require('fs');
const path = require('path');

const MOVIES_DIR = path.join(__dirname, '../pages/movies');
const CLEAN_SCHEMA_IMPORT = "import { generateCleanMovieSchema } from '../../../utils/cleanMovieSchema';";

function fixFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // Regex to find the nested import pattern
    // Matches: import { <whitespace/newlines> import { generateCleanMovieSchema } from '...';
    const brokenImportRegex = /import\s*\{\s*[\r\n]+\s*import\s*\{\s*generateCleanMovieSchema\s*\}\s*from\s*['"]\.\.\/\.\.\/\.\.\/utils\/cleanMovieSchema['"];/g;

    if (brokenImportRegex.test(content)) {
        // Replace with the clean import followed by the original import start
        content = content.replace(brokenImportRegex, `${CLEAN_SCHEMA_IMPORT}\nimport {`);
    }

    // Remove duplicates if the script ran multiple times or if we just added one that already existed elsewhere
    const lines = content.split('\n');
    let importCount = 0;
    const newLines = lines.filter(line => {
        if (line.trim() === CLEAN_SCHEMA_IMPORT) {
            importCount++;
            return importCount === 1; // Keep only the first occurrence
        }
        return true;
    });
    
    content = newLines.join('\n');

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        return true;
    }
    return false;
}

function getAllMovieFiles(dir) {
    let results = [];
    if (fs.existsSync(dir)) {
        const list = fs.readdirSync(dir);
        list.forEach(file => {
            const fullPath = path.join(dir, file);
            const stat = fs.statSync(fullPath);
            if (stat && stat.isDirectory()) {
                results = results.concat(getAllMovieFiles(fullPath));
            } else if (file === '[id].js') {
                results.push(fullPath);
            }
        });
    }
    return results;
}

console.log('🔧 Starting Fix for Broken Imports...');
try {
    const files = getAllMovieFiles(MOVIES_DIR);
    let fixedCount = 0;

    files.forEach(file => {
        if (fixFile(file)) {
            console.log(`✅ Fixed: ${path.relative(MOVIES_DIR, file)}`);
            fixedCount++;
        }
    });

    console.log(`\n✨ Complete! Fixed ${fixedCount} files.`);
} catch (error) {
    console.error('❌ Error:', error);
}
