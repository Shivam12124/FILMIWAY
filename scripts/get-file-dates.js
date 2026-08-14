// scripts/get-file-dates.js
const fs = require('fs');
const path = require('path');

const filesToCheck = [
    '../utils/masterTimestamps.json.backup',
    '../utils/masterTimestamps.json',
    '../utils/basicInstinctMovieData.js',
    '../scripts/syncTimestamps.js'
];

filesToCheck.forEach(relPath => {
    const fullPath = path.join(__dirname, relPath);
    if (fs.existsSync(fullPath)) {
        const stats = fs.statSync(fullPath);
        console.log(`File: ${path.basename(relPath)}`);
        console.log(`  Created:  ${stats.birthtime.toISOString().split('T')[0]}`);
        console.log(`  Modified: ${stats.mtime.toISOString().split('T')[0]}`);
    }
});
