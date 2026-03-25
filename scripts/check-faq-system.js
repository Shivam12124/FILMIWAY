const fs = require('fs');
const path = require('path');

const UTILS_DIR = path.join(__dirname, '../utils');

// The unique markers that prove the file has the NEW Advanced FAQ/Schema system
const REQUIRED_SIGNATURES = [
    'calculateSkipStats',
    'getHighestSeverityInfo',
    'getVisibleMovieFAQs',
    'What time does nudity appear'
];

function checkFiles() {
    const files = fs.readdirSync(UTILS_DIR).filter(f => f.endsWith('.js'));
    
    const missingSystem = [];
    const hasSystem = [];

    files.forEach(file => {
        const filePath = path.join(UTILS_DIR, file);
        const content = fs.readFileSync(filePath, 'utf8');

        // Skip files that aren't actual movie database files (like utilities or configs)
        if (!content.includes('COMPLETE_MOVIE_DATABASE')) return;

        let hasAll = true;
        for (const sig of REQUIRED_SIGNATURES) {
            if (!content.includes(sig)) {
                hasAll = false;
                break;
            }
        }

        if (hasAll) {
            hasSystem.push(file);
        } else {
            missingSystem.push(file);
        }
    });

    console.log(`\n✅ Collections WITH the Golden FAQ system (${hasSystem.length}):`);
    
    console.log(`\n❌ Collections MISSING the Golden FAQ system (${missingSystem.length}):`);
    missingSystem.forEach(f => console.log(`  - ${f}`));
}

console.log('🔍 Scanning database files for the Golden FAQ system...');
checkFiles();