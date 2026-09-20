const fs = require('fs');
const content = fs.readFileSync('C:/Users/filmi/.gemini/antigravity-ide/brain/a0186845-b550-4ac4-b25e-307cded4cb5d/.system_generated/steps/11812/content.md', 'utf8');

const regex = /full_text:"([^"]+)"/g;
let match;
while ((match = regex.exec(content)) !== null) {
    console.log('REPLY:', match[1]);
}
