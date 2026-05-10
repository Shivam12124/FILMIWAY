const fs = require('fs');
const path = require('path');

const utilsDir = path.join(__dirname, '../utils');

function fixWording() {
    const files = fs.readdirSync(utilsDir).filter(f => f.endsWith('.js') || f.endsWith('.json'));
    let updatedCount = 0;

    files.forEach(file => {
        const filePath = path.join(utilsDir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        let originalContent = content;

        // 1. Fix Parents Guide Content Types (Database cleanup)
        content = content.replace(/Profanity & Language/g, 'Profanity');
        content = content.replace(/Violence or Gore/gi, 'Violence & Gore');

        // 2. Fix FAQ Questions (UI and Schema cleanup)
        content = content.replace(/have curse words or profanity\?/g, 'have profanity?');
        content = content.replace(/have violence or gore scenes\?/g, 'have Violence & Gore scenes?');

        // 3. Fix FAQ Answers (UI and Schema cleanup)
        content = content.replace(/severity rating for language\./g, 'severity rating for profanity.');
        content = content.replace(/rates the violence in/g, 'rates the Violence & Gore in');

        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`✅ Standardized vocabulary in: ${file}`);
            updatedCount++;
        }
    });

    console.log(`\n🎉 Process complete! Perfectly applied 'Profanity' and 'Violence & Gore' across ${updatedCount} files.`);
}

fixWording();