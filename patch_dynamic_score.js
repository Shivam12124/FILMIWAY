const fs = require('fs');
const path = require('path');

const utilsDir = path.join(__dirname, 'utils');
const files = fs.readdirSync(utilsDir);

const targetRegex = /let familyFaqAnswer = `No\. \$\{movieTitle\} is not safe to watch with family because it contains \$\{familyUnsafeString\}, earning it a low Family Safety Score\. Adults can use Filmiway's timestamps to skip all \$\{sceneCount\} explicit scenes in the \$\{finalRuntime\} runtime\.`;/;

const newLogic = `        let dynamicScore = "3/10 (High Risk)";
        if (overallSeverity === 'Extreme') dynamicScore = "1/10 (Extreme Risk)";
        else if (overallSeverity === 'High') dynamicScore = "3/10 (High Risk)";
        else if (overallSeverity === 'Moderate') dynamicScore = "5/10 (Moderate Risk)";
        else if (overallSeverity === 'Mild') dynamicScore = "7/10 (Mild Risk)";

        let familyFaqAnswer = \`No. \${movieTitle} is not safe to watch with family because it contains \${familyUnsafeString}, earning it a \${dynamicScore} Family Safety Score. Adults can use Filmiway's timestamps to skip all \${sceneCount} explicit scenes in the \${finalRuntime} runtime.\`;`;

let patchedCount = 0;
let missingCount = 0;

for (const file of files) {
    if (!file.endsWith('.js')) continue;
    
    const filePath = path.join(utilsDir, file);
    let code = fs.readFileSync(filePath, 'utf8');
    
    // Check if the file is one of our target UI components by seeing if it exports getVisibleMovieFAQs
    if (code.includes('export const getVisibleMovieFAQs')) {
        if (code.match(targetRegex)) {
            code = code.replace(targetRegex, newLogic);
            fs.writeFileSync(filePath, code);
            console.log("Successfully patched " + file);
            patchedCount++;
        } else {
            // It might already be patched, or not match.
            if (code.includes('dynamicScore')) {
                console.log("Already patched " + file);
            } else {
                console.log("Regex did not match in " + file);
                missingCount++;
            }
        }
    }
}

console.log("Successfully patched " + patchedCount + " files.");
if (missingCount > 0) {
    console.log("WARNING: " + missingCount + " files did not match the regex.");
}
