const fs = require('fs');
const path = require('path');

const utilsDir = path.join(__dirname, 'utils');
const files = fs.readdirSync(utilsDir);

let fixedCount = 0;

for (const file of files) {
    if (!file.endsWith('Data.js')) continue;

    const filePath = path.join(utilsDir, file);
    let code = fs.readFileSync(filePath, 'utf8');

    // The corrupted pattern we are looking for is inside the getVisibleMovieFAQs function's else block.
    // It contains "sceneCount" and "typesString" in the else block.
    
    // Using a regex to capture the entire `} else { staticFaqs.unshift(...); }` block that has the bug.
    const buggyElseRegex = /\} else \{\s*staticFaqs\.unshift\(\s*\{\s*question: `Does \$\{movieTitle\} have inappropriate scenes\? If yes, how to skip them while watching with family\?`,\s*answer: `Yes\. \$\{movieTitle\} contains \$\{sceneCount\} scenes of \$\{typesString\}\.[\s\S]*?\}\s*\);\s*\}/;

    const correctElseBlock = `} else {
        staticFaqs.unshift(
            {
                question: \`Does \${movieTitle} have inappropriate scenes?\`,
                answer: \`No. Filmiway editors have manually verified that \${movieTitle} is free of explicit sex scenes and nudity.\`
            },
            {
                question: \`Is \${movieTitle} safe to watch with family?\`,
                answer: \`Yes. \${movieTitle} earns a [DYNAMIC_SCORE]/10 ([DYNAMIC_LABEL]) Family Safety Score. Filmiway editors have manually verified that it is completely free of sex, nudity, and sexual content throughout its entire \${finalRuntime} runtime.\`
            }
        );
    }`;

    if (buggyElseRegex.test(code)) {
        code = code.replace(buggyElseRegex, correctElseBlock);
        fs.writeFileSync(filePath, code);
        console.log(`Fixed buggy else block in ${file}`);
        fixedCount++;
    }
}

console.log(`Fixed ${fixedCount} files.`);
