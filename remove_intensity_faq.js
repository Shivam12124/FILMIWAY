const fs = require('fs');
const glob = require('fs').readdirSync('utils');

const regex = /    const intensityScenes = movieInfo\?\.scenes \|\| \[\];\s*if \(intensityScenes\.length > 0\) \{[\s\S]*?(?:faqs\.push|mainEntity\.push)\(\{[\s\S]*?\}\);\s*\}/g;

let totalRemoved = 0;

glob.forEach(f => {
    if (f.endsWith('.js')) {
        let content = fs.readFileSync('utils/' + f, 'utf8');
        
        // Count matches
        const matches = content.match(regex);
        if (matches) {
            totalRemoved += matches.length;
            content = content.replace(regex, '');
            fs.writeFileSync('utils/' + f, content, 'utf8');
            console.log('Removed from ' + f);
        }
    }
});

console.log('Total blocks removed: ' + totalRemoved);
