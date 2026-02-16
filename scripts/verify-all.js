const fs = require('fs');
const path = require('path');
const MOVIES_DIR = path.join(__dirname, '../pages/movies');

let errorCount = 0;

function checkFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const fileName = path.relative(MOVIES_DIR, filePath);

    // Only check files that use the schema generator
    if (!content.includes('generateCleanMovieSchema')) return;

    const schemaMatch = /generateCleanMovieSchema/.exec(content);
    const slugMatch = /const\s+collectionSlug\s*=/.exec(content);

    // FAIL 1: collectionSlug is missing entirely
    if (!slugMatch) {
        console.error(`❌ MISSING VARIABLE: ${fileName}`);
        errorCount++;
        return;
    }

    // FAIL 2: collectionSlug is defined AFTER the schema call
    if (slugMatch.index > schemaMatch.index) {
        console.error(`❌ WRONG ORDER: ${fileName} (Variable is below Schema)`);
        errorCount++;
        return;
    }
}

function walk(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            walk(filePath);
        } else if (file === '[id].js') {
            checkFile(filePath);
        }
    });
}

console.log('🔍 Verifying all 50+ Movie Files...');
walk(MOVIES_DIR);

if (errorCount === 0) {
    console.log('\n✅ ALL SYSTEMS GO. READY FOR DEPLOYMENT.');
} else {
    console.log(`\n⚠️ FOUND ${errorCount} BROKEN FILES. FIX THEM BEFORE DEPLOYING.`);
}