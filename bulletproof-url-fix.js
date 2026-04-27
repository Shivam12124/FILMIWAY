const fs = require('fs');
const path = require('path');

const utilsDir = path.join(__dirname, 'utils');
let filesModified = 0;

console.log("🔥 Starting BULLETPROOF URL Fixer Script...\n");

const files = fs.readdirSync(utilsDir);

// We use exact string matching to completely bypass Regex escaping issues
const oldString1 = "`https://filmiway.com/movies/${collectionSlug}/${movie.imdbID}`";
const oldString2 = "`https://filmiway.com/movies/${collectionSlug}/${movie.tmdbId}`";
const newString = "`https://filmiway.com/movie/${movie.slug || movie.Title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')}`";

files.forEach(file => {
    if (file.endsWith('.js')) {
        const filePath = path.join(utilsDir, file);
        let content = fs.readFileSync(filePath, 'utf-8');
        const originalContent = content;

        content = content.split(oldString1).join(newString);
        content = content.split(oldString2).join(newString);

        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf-8');
            console.log(`✅ Patched: ${file}`);
            filesModified++;
        }
    }
});

console.log(`\n🎉 Success! Patched ${filesModified} files.`);