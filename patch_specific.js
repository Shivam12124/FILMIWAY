const fs = require('fs');
const path = require('path');

const filesToPatch = [
    'basicInstinctMovieData.js',
    'bookAdaptationData.js',
    'decadeMovieData.js',
    'enemiesToLoversMovieData.js',
    'gangsterMovieData.js',
    'jenniferLawrenceMovieData.js',
    'monicaBellucciMovieData.js'
];

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
for (const file of filesToPatch) {
    const filePath = path.join(__dirname, 'utils', file);
    let code = fs.readFileSync(filePath, 'utf8');
    
    // Find the getVisibleMovieFAQs function
    const funcStartIdx = code.indexOf('export const getVisibleMovieFAQs');
    if (funcStartIdx === -1) {
        console.log(\`Could not find getVisibleMovieFAQs in \${file}\`);
        continue;
    }
    
    // Within the function, find 'const startTimesList ='
    const startTimesIdx = code.indexOf('const startTimesList =', funcStartIdx);
    if (startTimesIdx === -1) {
        console.log(\`Could not find startTimesList in \${file}\`);
        continue;
    }
    
    // Find the end of the function 'return staticFaqs;'
    const returnIdx = code.indexOf('return staticFaqs;', startTimesIdx);
    if (returnIdx === -1) {
        console.log(\`Could not find return staticFaqs in \${file}\`);
        continue;
    }
    
    // The end index is after 'return staticFaqs;'
    const endIdx = returnIdx + 'return staticFaqs;'.length;
    
    // Replace the slice
    const before = code.slice(0, startTimesIdx);
    const after = code.slice(endIdx);
    
    // Include 'const startTimesList = ...' because we need it (wait, do we need startTimesList? No, the new UI format doesn't use startTimesList!
    // But wait, our newLogic DOES NOT contain startTimesList! We should remove it.)
    
    code = before + newLogic + after;
    fs.writeFileSync(filePath, code);
    console.log(\`Successfully patched \${file}\`);
    patchedCount++;
}
console.log(\`Patched \${patchedCount} files.\`);
