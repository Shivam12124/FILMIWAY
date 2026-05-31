const fs = require('fs');
const path = require('path');
const utilsDir = __dirname;
const files = fs.readdirSync(utilsDir).filter(f => f.endsWith('Data.js'));

let updatedCount = 0;

files.forEach(file => {
    const filePath = path.join(utilsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // 🔥 This regex perfectly captures EVERYTHING from the start of the block up to the movieSchema definition, wiping out any broken code or dangling brackets!
    const blockRegex = /const sceneCount = heavyScenes\.length;[\s\S]*?(?=const movieSchema = \{)/;

    const newBlock = `const sceneCount = heavyScenes.length;
    
    // 🔥 DYNAMIC SEO META DESCRIPTION GENERATOR
    const targetMovies = {
        "Eyes Wide Shut": "R",
        "Fifty Shades of Grey": "R",
        "Fifty Shades Darker": "R",
        "Blue Is the Warmest Color": "NC-17",
        "The Dreamers": "NC-17",
        "Oppenheimer": "R",
        "Gone Girl": "R",
        "Basic Instinct": "R"
    };
    
    let schemaDesc = '';
    if (targetMovies[movie.Title]) {
        const mpaaRating = targetMovies[movie.Title];
        if (sceneCount > 0) {
            // 🔥 Prioritize Sex/Nudity over Suggestive Clothing
            const heavyOnly = heavyScenes.filter(s => s.type?.toLowerCase().match(/sex|nudity|explicit/));
            const lightOnly = heavyScenes.filter(s => !s.type?.toLowerCase().match(/sex|nudity|explicit/));
            
            // Grab the top 2 priority scenes, then sort them chronologically
            const selectedScenes = [...heavyOnly, ...lightOnly].slice(0, 2);
            selectedScenes.sort((a, b) => heavyScenes.indexOf(a) - heavyScenes.indexOf(b));
            
            // Format with start, end, and TYPE reason!
            const firstTwo = selectedScenes.map(s => s.end ? \`\${s.start} to \${s.end} (\${s.type})\` : \`\${s.start} (\${s.type})\`).join(' and ');
            
            schemaDesc = \`Why is \${movie.Title} rated \${mpaaRating}? Use our parents guide to skip mature content. Skip scenes at \${firstTwo}.\`;
        } else {
            schemaDesc = \`\${movie.Title} Parents Guide. Filmiway editors have manually verified zero explicit scenes in the full \${currentRuntime} runtime.\`;
        }
    } else {
        // Fallback to standard Filmiway format for all other movies
        if (sceneCount > 0) {
            schemaDesc = \`\${movie.Title} Parents Guide with exact explicit timestamps. \${sceneCount} scenes manually verified frame by frame by Filmiway editors for the \${currentRuntime} runtime.\`;
        } else {
            schemaDesc = \`\${movie.Title} Parents Guide. Filmiway editors have manually verified zero explicit scenes in the full \${currentRuntime} runtime.\`;
        }
    }

    `;

    if (content.match(blockRegex)) {
        content = content.replace(blockRegex, newBlock);
        fs.writeFileSync(filePath, content, 'utf8');
        updatedCount++;
        console.log(`✅ Completely repaired syntax in ${file}`);
    }
});

console.log(`\n🎉 Ultimate Fix Complete! Fully repaired the syntax errors in ${updatedCount} files.`);
