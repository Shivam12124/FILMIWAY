const fs = require('fs');
const path = require('path');

const utilsDir = path.join(__dirname, 'utils');
const files = fs.readdirSync(utilsDir);

const newLogic = `        const familyUnsafeTypes = typesArray.filter(t => t !== 'suggestive clothing');
        const familyUnsafeString = familyUnsafeTypes.join(' and ');
        
        let familyFaqAnswer = \`No. \${movieTitle} is not safe to watch with family because it contains \${familyUnsafeString}, earning it a low Family Safety Score. Adults can use Filmiway's timestamps to skip all \${sceneCount} explicit scenes in the \${finalRuntime} runtime.\`;

        const familyFaqUI = familyUnsafeTypes.length > 0
            ? {
                question: \`Is \${movieTitle} safe to watch with family?\`,
                answer: familyFaqAnswer
            }
            : {
                question: \`Is \${movieTitle} safe to watch with family?\`,
                answer: \`Yes. \${movieTitle} earns a perfect 10/10 Family Safety Score. Filmiway editors have manually verified that it is completely free of sex, nudity, and sexual content throughout its entire \${finalRuntime} runtime.\`
            };

        staticFaqs.unshift(
            {
                question: \`Does \${movieTitle} have inappropriate scenes? If yes, how to skip them while watching with family?\`,
                answer: \`Yes. \${movieTitle} contains \${sceneCount} scenes of \${typesString}. To ensure a safe family movie night, you can use these exact skip timestamps:\\n\\n\${uiDetailedList}\\n\\nManually verified frame by frame by Filmiway editors for the \${finalRuntime} runtime.\`
            },
            familyFaqUI
        );
    } else {
        staticFaqs.unshift(
            {
                question: \`Does \${movieTitle} have inappropriate scenes? If yes, how to skip them while watching with family?\`,
                answer: \`No. Filmiway editors have manually verified that \${movieTitle} is free of explicit sex scenes and nudity.\`
            },
            {
                question: \`Is \${movieTitle} safe to watch with family?\`,
                answer: \`Yes. \${movieTitle} earns a perfect 10/10 Family Safety Score. Filmiway editors have manually verified that it is completely free of sex, nudity, and sexual content throughout its entire \${finalRuntime} runtime.\`
            }
        );
    }

    return staticFaqs;`;

let patchedCount = 0;
for (const file of files) {
    if (!file.endsWith('.js')) continue;
    
    const filePath = path.join(utilsDir, file);
    let code = fs.readFileSync(filePath, 'utf8');
    
    // Check if the file is unpatched
    if (code.includes('export const getVisibleMovieFAQs') && !code.includes('earning it a low Family Safety Score')) {
        const targetRegex = /\s*const familyUnsafeTypes = typesArray\.filter[\s\S]+?return staticFaqs;/;
        if (code.match(targetRegex)) {
            code = code.replace(targetRegex, '\n' + newLogic);
            fs.writeFileSync(filePath, code);
            console.log(`Patched ${file}`);
            patchedCount++;
        } else {
            console.log(`Regex did not match ${file}`);
        }
    }
}
console.log(`Successfully patched ${patchedCount} files.`);
