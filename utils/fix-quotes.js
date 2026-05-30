const fs = require('fs');
const path = require('path');
const utilsDir = __dirname;
const files = fs.readdirSync(utilsDir).filter(f => f.endsWith('Data.js'));

let totalFixed = 0;

files.forEach(file => {
    const filePath = path.join(utilsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let lines = content.split('\n');
    let modified = false;
    
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        
        // Target the injected FAQ lines that are broken
        if (line.includes('question: ') && line.includes('answer: "') && (line.endsWith('},') || line.endsWith('}'))) {
            // This regex safely isolates the text inside answer: "..."
            const match = line.match(/^(.*answer:\s*")([\s\S]*?)("\s*\},?\s*)$/);
            if (match) {
                const prefix = match[1];
                let middle = match[2];
                const suffix = match[3];
                
                // Fix the quotes: Unescape to avoid double-escaping, then escape all double quotes safely
                let fixedMiddle = middle.replace(/\\"/g, '"').replace(/"/g, '\\"');
                
                const newLine = prefix + fixedMiddle + suffix;
                if (line !== newLine) {
                    lines[i] = newLine;
                    modified = true;
                }
            }
        }
    }
    
    if (modified) {
        fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
        totalFixed++;
        console.log(`✅ Repaired syntax in ${file}`);
    }
});

console.log(`\n🎉 Auto-Fix Complete! Repaired broken quotes in ${totalFixed} files.`);