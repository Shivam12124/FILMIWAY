const fs = require('fs');
const path = require('path');

const utilsDir = path.join(__dirname, 'utils');
const utilFiles = fs.readdirSync(utilsDir);
let utilsCount = 0;

for (const file of utilFiles) {
    if (!file.endsWith('.js')) continue;
    const filePath = path.join(utilsDir, file);
    let code = fs.readFileSync(filePath, 'utf8');
    
    // Find perfect 10/10
    const targetText = /earns a perfect 10\/10 Family Safety Score/g;
    const replacementText = 'earns a [DYNAMIC_SCORE]/10 ([DYNAMIC_LABEL]) Family Safety Score';
    
    if (code.match(targetText)) {
        code = code.replace(targetText, replacementText);
        fs.writeFileSync(filePath, code);
        utilsCount++;
        console.log("Patched clean movie text in " + file);
    }
}
console.log(`Successfully patched ${utilsCount} utils files.`);
