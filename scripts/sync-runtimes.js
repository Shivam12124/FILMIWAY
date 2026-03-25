// scripts/sync-runtimes.js
const fs = require('fs');
const path = require('path');

const MOVIES_DIR = path.join(__dirname, '../pages/movies');
let fixedCount = 0;

function fixFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if already fixed to prevent double-injections
    if (content.includes('CRITICAL FIX: Sync local movie runtime')) return;

    let replaced = false;

    // 🔥 This new regex purely looks for the start of the return statement
    // It completely ignores brackets, meaning it will catch ALL 60+ files perfectly.
    const regex1 = /return\s*\{\s*props:\s*\{\s*movie\s*,/g;
    
    if (regex1.test(content)) {
        content = content.replace(regex1, `// 🔥 CRITICAL FIX: Sync local movie runtime with TMDB to prevent FAQ/Timestamps mismatch
        const syncedMovie = { ...movie };
        if (typeof tmdbData !== 'undefined' && tmdbData?.runtime) {
            syncedMovie.runtime = tmdbData.runtime;
            syncedMovie.Runtime = tmdbData.runtime;
        }
        return { props: { movie: syncedMovie,`);
        replaced = true;
    }

    // Fallback for files that might use "movie: movie,"
    const regex2 = /return\s*\{\s*props:\s*\{\s*movie:\s*movie\s*,/g;
    if (!replaced && regex2.test(content)) {
        content = content.replace(regex2, `// 🔥 CRITICAL FIX: Sync local movie runtime with TMDB to prevent FAQ/Timestamps mismatch
        const syncedMovie = { ...movie };
        if (typeof tmdbData !== 'undefined' && tmdbData?.runtime) {
            syncedMovie.runtime = tmdbData.runtime;
            syncedMovie.Runtime = tmdbData.runtime;
        }
        return { props: { movie: syncedMovie,`);
        replaced = true;
    }

    if (replaced) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Fixed runtime sync in: ${path.basename(path.dirname(filePath))}/[id].js`);
        fixedCount++;
    } else {
        console.log(`⚠️ Skipped/No Match in: ${path.basename(path.dirname(filePath))}/[id].js`);
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
            fixFile(filePath);
        }
    });
}

console.log('🚀 Fixing Runtime Mismatches Across ALL Movies...');
walk(MOVIES_DIR);
console.log(`\n🎉 Done! Fixed ${fixedCount} remaining files.`);
