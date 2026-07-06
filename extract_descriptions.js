const fs = require('fs');
const path = require('path');

const utilsDir = path.join(__dirname, 'utils');
const files = fs.readdirSync(utilsDir).filter(f => f.endsWith('Data.js') || f.endsWith('.json'));

let backupContent = '# 🛑 Timestamp Descriptions Backup\n\nSave this file somewhere safe on your computer. This contains all the descriptions we are about to delete.\n\n';

files.forEach(file => {
    const content = fs.readFileSync(path.join(utilsDir, file), 'utf8');
    const lines = content.split('\n');
    let hasDescription = false;
    let currentTitle = 'Unknown Movie';
    let fileOutput = `## File: ${file}\n`;
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        // Try to track the current movie title
        const titleMatch = line.match(/Title:\s*['"`](.*?)['"`]/i) || line.match(/title:\s*['"`](.*?)['"`]/i);
        if (titleMatch) {
            currentTitle = titleMatch[1];
        }
        
        // Extract descriptions
        const descMatch = line.match(/description:\s*(.*)/i) || line.match(/"description":\s*(.*)/i);
        if (descMatch) {
            // Only back up if it actually contains text (not empty)
            const text = descMatch[1].trim().replace(/,$/, '').replace(/['"`]/g, '');
            if (text.length > 2 && text !== 'null' && text !== 'undefined') {
                hasDescription = true;
                fileOutput += `- **${currentTitle}**: ${text}\n`;
            }
        }
    }
    
    if (hasDescription) {
        backupContent += fileOutput + '\n';
    }
});

const backupPath = path.join('C:', 'Users', 'filmi', '.gemini', 'antigravity-ide', 'brain', 'fdd33e54-c922-4f17-957b-3db5bd4e760b', 'explicit_descriptions_backup.md');
fs.writeFileSync(backupPath, backupContent);
console.log('Backup successfully created at:', backupPath);
