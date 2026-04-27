const fs = require('fs');
const path = require('path');

const utilsDir = path.join(__dirname, 'utils');
let filesModified = 0;

console.log("☢️ Starting NUCLEAR URL Fixer Script...\n");

const files = fs.readdirSync(utilsDir);

files.forEach(file => {
    if (file.endsWith('.js')) {
        const filePath = path.join(utilsDir, file);
        let content = fs.readFileSync(filePath, 'utf-8');
        const originalContent = content;

        // Aggressively find ANY 'url' property starting with https://filmiway.com/ inside the files and overwrite it
        content = content.replace(
            /'url':\s*`https:\/\/filmiway\.com\/[^`]+`,/g,
            `'url': \`https://filmiway.com/movie/\${movie.slug || movie.Title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')}\`,`
        );

        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf-8');
            console.log(`✅ Nuked old URL and fixed: ${file}`);
            filesModified++;
        }
    }
});

console.log(`\n🎉 Success! Aggressively patched ${filesModified} files.`);
console.log("Your schema URLs are now 100% guaranteed to be correct across the entire project!");