const fs = require('fs');
const path = require('path');

const utilsDir = path.join(__dirname, '..', 'utils');
const files = fs.readdirSync(utilsDir).filter(f => f.endsWith('.js'));

let updatedCount = 0;

files.forEach(file => {
    const filePath = path.join(utilsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    if (content.includes('uiDetailedList')) {
        let newContent = content;

        // Replace return `• ${timeRange} (${fullType})` or similar with clean timestamps
        newContent = newContent.replace(
            /const uiDetailedList = heavyScenes\.map\(s => \{[\s\S]*?return `• \${timeRange}[^`]*`;[\s\S]*?\}\)\.join\('\\n'\);/g,
            `const uiDetailedList = heavyScenes.map(s => {\n            const timeRange = s.end ? \`\${s.start}–\${s.end}\` : s.start;\n            return \`• \${timeRange}\`;\n        }).join('\\n');`
        );

        if (newContent !== content) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log(`✅ Updated FAQ timestamp format in: ${file}`);
            updatedCount++;
        }
    }
});

console.log(`\n🎉 Successfully updated ${updatedCount} utils files with clean FAQ timestamps!`);
