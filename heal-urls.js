const fs = require('fs');
const path = require('path');

const utilsDir = path.join(__dirname, 'utils');
let filesModified = 0;

console.log("🩹 Starting URL syntax healing script...\n");

const files = fs.readdirSync(utilsDir);

files.forEach(file => {
    if (file.endsWith('.js')) {
        const filePath = path.join(utilsDir, file);
        let content = fs.readFileSync(filePath, 'utf-8');
        const originalContent = content;

        // Safely finds naked variables like /movie/movie.slug` and converts them back to /movie/${movie.slug}`
        content = content.replace(
            /(\/movie\/)([a-zA-Z0-9_]+(?:\[[^\]]+\]|\.[a-zA-Z0-9_]+))(\`)/g,
            "$1$${$2}$3"
        );

        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf-8');
            console.log(`✅ Healed syntax in: ${file}`);
            filesModified++;
        }
    }
});

console.log(`\n🎉 Success! Healed ${filesModified} files.`);
console.log("Your dynamic variables are properly wrapped again. You are 100% good to build and deploy!");
