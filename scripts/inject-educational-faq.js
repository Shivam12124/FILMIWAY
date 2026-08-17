const fs = require('fs');
const path = require('path');

const utilsDir = path.join(__dirname, '..', 'utils');
const files = fs.readdirSync(utilsDir).filter(f => f.endsWith('.js'));

let updatedCount = 0;

files.forEach(file => {
    const filePath = path.join(utilsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Check if the file contains staticFaqs.unshift with the inappropriate scenes question
    if (content.includes('Does ${movieTitle} have inappropriate scenes?')) {
        // Prevent duplicate injection if script runs multiple times
        if (content.includes('Why does Filmiway provide skip timestamps for ${movieTitle}?')) {
            return;
        }

        const targetPattern = /staticFaqs\.unshift\(\s*\{\s*question:\s*`Does \$\{movieTitle\} have inappropriate scenes\? If yes, how to skip them while watching with family\?`,[\s\S]*?\},/g;

        const replacement = `staticFaqs.unshift(
            {
                question: \`Does \${movieTitle} have inappropriate scenes? If yes, how to skip them while watching with family?\`,
                answer: \`Yes. \${movieTitle} contains \${sceneCount} scenes of \${typesString}. To ensure a safe family movie night, you can use these exact skip timestamps:\\n\\n\${uiDetailedList}\\n\\nManually verified frame by frame by Filmiway editors for the \${finalRuntime} runtime.\`
            },
            {
                question: \`Why does Filmiway provide skip timestamps for \${movieTitle}?\`,
                answer: \`Filmiway provides exact skip timestamps for \${movieTitle} strictly as an educational parental advisory utility. Our goal is to empower parents, families, and sensitive viewers with complete transparency so they can preview mature content or skip uncomfortable scenes effortlessly during movie nights.\`
            },`;

        const newContent = content.replace(targetPattern, replacement);

        if (newContent !== content) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log(`✅ Injected Educational Utility FAQ into: ${file}`);
            updatedCount++;
        }
    }
});

console.log(`\n🎉 Successfully injected Educational Utility FAQ into ${updatedCount} utils files!`);
