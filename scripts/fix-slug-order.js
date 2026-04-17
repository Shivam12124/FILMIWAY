const fs = require('fs');
const path = require('path');

const MOVIES_DIR = path.join(__dirname, '../pages/movies');
let fixedCount = 0;
let checkedCount = 0;

function fixFile(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;
        
        // Check if file has generateCleanMovieSchema
        if (!content.includes('generateCleanMovieSchema')) {
            return false;
        }
        
        checkedCount++;
        
        // Find the line index for both patterns
        const lines = content.split('\n');
        let schemaLineIndex = -1;
        let slugLineIndex = -1;
        let canonicalLineIndex = -1;
        
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            
            // Find schema call
            if (line.includes('generateCleanMovieSchema(') && schemaLineIndex === -1) {
                schemaLineIndex = i;
            }
            
            // Find slug definition
            if (line.includes('const collectionSlug') && slugLineIndex === -1) {
                slugLineIndex = i;
            }
            
            // Find canonical definition
            if (line.includes('const canonicalUrl') && canonicalLineIndex === -1) {
                canonicalLineIndex = i;
            }
        }
        
        // If schema comes BEFORE slug, we need to fix
        if (schemaLineIndex > -1 && slugLineIndex > -1 && schemaLineIndex < slugLineIndex) {
            console.log(`🔧 Fixing: ${path.basename(path.dirname(filePath))}/[id].js`);
            console.log(`   Schema at line ${schemaLineIndex + 1}, Slug at line ${slugLineIndex + 1}`);
            
            // Extract the lines to move
            const slugLine = lines[slugLineIndex];
            const linesToMove = [slugLine];
            
            // Check if canonical is right after slug
            if (canonicalLineIndex === slugLineIndex + 1) {
                linesToMove.push(lines[canonicalLineIndex]);
            }
            
            // Remove the lines from their current position
            const removeCount = linesToMove.length;
            lines.splice(slugLineIndex, removeCount);
            
            // Adjust schemaLineIndex if needed (since we removed lines)
            if (slugLineIndex < schemaLineIndex) {
                schemaLineIndex -= removeCount;
            }
            
            // Insert before schema (with blank line after)
            lines.splice(schemaLineIndex, 0, ...linesToMove, '');
            
            // Join and save
            const newContent = lines.join('\n');
            fs.writeFileSync(filePath, newContent, 'utf8');
            fixedCount++;
            return true;
        }
        
        return false;
        
    } catch (e) {
        console.error(`❌ Error in ${filePath}: ${e.message}`);
        return false;
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
            walk(filePath);
        } else if (file === '[id].js') {
            fixFile(filePath);
        }
    });
}

console.log('🚀 Starting Variable Order Fix...\n');
walk(MOVIES_DIR);
console.log(`\n✅ Checked ${checkedCount} files, Fixed ${fixedCount} files`);
