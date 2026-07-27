const fs = require('fs');
const path = require('path');
const dir = './utils';
let count = 0;

fs.readdirSync(dir).forEach(file => {
    if (file.endsWith('.js')) {
        const fp = path.join(dir, file);
        let content = fs.readFileSync(fp, 'utf8');
        if (content.includes("addType('explicit content', severity);") && !content.includes("steamy scenes")) {
            content = content.replace(
                /else if \(lowerType\.includes\('explicit'\)\) addType\('explicit content', severity\);/g,
                "else if (lowerType.includes('explicit')) addType('explicit content', severity);\n                else if (lowerType.includes('steamy')) addType('steamy scenes', severity);"
            );
            fs.writeFileSync(fp, content);
            count++;
        }
    }
});
console.log('Patched ' + count + ' files for steamy scenes');
