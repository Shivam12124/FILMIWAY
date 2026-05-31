const fs = require('fs');
const path = require('path');
const utilsDir = __dirname;
const files = fs.readdirSync(utilsDir).filter(f => f.endsWith('Data.js'));

let totalFixed = 0;

files.forEach(file => {
    const filePath = path.join(utilsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // This regex perfectly captures the broken leftover text that is causing the red lines
    const garbageRegex = /}\s*Parents Guide\. Filmiway editors have manually verified zero [^`]+ in the full \$\{currentRuntime} runtime\.`;\s*}/g;

    if (garbageRegex.test(content)) {
        content = content.replace(garbageRegex, '');
        fs.writeFileSync(filePath, content, 'utf8');
        totalFixed++;
        console.log(`✅ Cleaned up syntax error in `);
    }
});

console.log(`\n🎉 Cleanup Complete! Repaired syntax in  files.`);
