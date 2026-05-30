const fs = require('fs');
const path = require('path');
const utilsDir = __dirname;
const files = fs.readdirSync(utilsDir).filter(f => f.endsWith('Data.js'));

let totalRemoved = 0;

files.forEach(file => {
    const filePath = path.join(utilsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let lines = content.split('\n');
    let modified = false;

    const newLines = lines.filter(line => {
        // Targets specifically: { question: "Why is [Movie] rated 16+?", ... }
        if (line.match(/question:\s*["']Why is .*? rated \d+\+\?["']/i)) {
            modified = true;
            return false; // Deletes this line
        }
        return true;
    });

    if (modified) {
        fs.writeFileSync(filePath, newLines.join('\n'), 'utf8');
        totalRemoved++;
        console.log(`✅ Removed incorrect age FAQ from ${file}`);
    }
});

console.log(`\n🎉 Cleanup Complete! Purged the incorrect '17+' FAQs from ${totalRemoved} files.`);