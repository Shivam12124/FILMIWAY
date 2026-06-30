const fs = require('fs');
const path = require('path');

const utilsDir = path.join(__dirname, 'utils');
const files = fs.readdirSync(utilsDir);

let patchedCount = 0;

for (const file of files) {
    if (!file.endsWith('.js')) continue;
    
    const filePath = path.join(utilsDir, file);
    let code = fs.readFileSync(filePath, 'utf8');
    
    let originalCode = code;
    
    code = code.replace(/"1\/10 \(Extreme Risk\)"/g, '"1/10 (Strictly Adults Only)"');
    code = code.replace(/"3\/10 \(High Risk\)"/g, '"3/10 (Avoid Family Viewing)"');
    code = code.replace(/"5\/10 \(Moderate Risk\)"/g, '"5/10 (Watch With Caution)"');
    code = code.replace(/"7\/10 \(Mild Risk\)"/g, '"7/10 (Parental Guidance Suggested)"');

    if (code !== originalCode) {
        fs.writeFileSync(filePath, code);
        patchedCount++;
        console.log("Patched labels in " + file);
    }
}

console.log("Successfully aligned labels in " + patchedCount + " files.");
