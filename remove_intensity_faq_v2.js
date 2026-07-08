const fs = require('fs');
const path = require('path');
const dir = 'utils';

fs.readdirSync(dir).forEach(file => {
    if (!file.endsWith('.js')) return;
    const filePath = path.join(dir, file);
    const lines = fs.readFileSync(filePath, 'utf8').split('\n');
    const newLines = [];
    let skip = false;
    let braceCount = 0;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (!skip && line.includes('if (intensityScenes.length > 0) {') && 
           (lines[i+1] && (lines[i+1].includes('schemaIntensityList') || lines[i+1].includes('uiIntensityList')))) {
            skip = true;
            braceCount = 1;
            continue;
        }

        if (skip) {
            if (line.includes('{')) braceCount += (line.match(/\{/g) || []).length;
            if (line.includes('}')) braceCount -= (line.match(/\}/g) || []).length;
            
            if (braceCount <= 0) {
                skip = false;
            }
            continue;
        }

        newLines.push(line);
    }
    
    const newContent = newLines.join('\n');
    if (newContent.length !== lines.join('\n').length) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log('Cleaned ' + file);
    }
});
