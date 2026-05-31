const fs = require('fs');
const path = require('path');
const utilsDir = __dirname;
const files = fs.readdirSync(utilsDir).filter(f => f.endsWith('Data.js'));

let updatedCount = 0;

files.forEach(file => {
    const filePath = path.join(utilsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    const oldBlockRegex = /const sceneCount = heavyScenes\.length;\s*let schemaDesc = '';\s*if\s*\(sceneCount\s*>\s*0\)\s*\{[\s\S]*?\}\s*else\s*\{[\s\S]*?\}/;

    const newBlock = `const sceneCount = heavyScenes.length;
    
    // 🔥 DYNAMIC SEO META DESCRIPTION GENERATOR
    const mpaaRating = tmdbData?.ageRating || 'R';
    
    let schemaDesc = '';
    if (sceneCount > 0) {
        const firstTwo = heavyScenes.slice(0, 2).map(s => s.start).join(' and ');
        schemaDesc = \`Why is \${movie.Title} rated \${mpaaRating}? Read our complete parents guide to get the exact timestamps needed to skip all heavy nudity, sex scenes, and mature content. Explicit scenes start at \${firstTwo}.\`;
    } else {
        schemaDesc = \`\${movie.Title} Parents Guide. Filmiway editors have manually verified zero explicit scenes in the full \${currentRuntime} runtime.\`;
    }`;

    if (content.match(oldBlockRegex)) {
        content = content.replace(oldBlockRegex, newBlock);
        fs.writeFileSync(filePath, content, 'utf8');
        updatedCount++;
        console.log(`✅ Updated Meta Description logic in ${file}`);
    }
});

console.log(`\n🎉 Complete! Updated ${updatedCount} collection files to use the new intent-driven Meta Descriptions with dynamic timestamps.`);