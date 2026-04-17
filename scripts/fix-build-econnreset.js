const fs = require('fs');
const path = require('path');

const MOVIES_DIR = path.join(__dirname, '../pages/movies');
let fixedCount = 0;

function fixFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if already patched to prevent duplicates
    if (content.includes('MAX_RETRIES')) return;

    // Find the standard, vulnerable fetch block
    const fetchPattern = /const tmdbResponse = await fetch\([\s\S]*?api\.themoviedb\.org\/3\/movie\/\$\{movie\.tmdbId\}\?api_key=[^&]+&append_to_response=videos`[\s\S]*?\);[\s\S]*?const tmdbData = tmdbResponse\.ok \? await tmdbResponse\.json\(\) : null;/;

    if (fetchPattern.test(content)) {
        const replacement = `// ⚡ ANTI-CRASH RETRY LOGIC (Prevents ECONNRESET during massive static builds)
        let tmdbData = null;
        const MAX_RETRIES = 3;
        for (let i = 0; i < MAX_RETRIES; i++) {
            try {
                // Stagger requests to prevent slamming the API at the exact same millisecond
                if (i > 0) await new Promise(r => setTimeout(r, 1500 * i + Math.random() * 1000));
                
                const tmdbResponse = await fetch(
                    \`https://api.themoviedb.org/3/movie/\${movie.tmdbId}?api_key=\${process.env.NEXT_PUBLIC_TMDB_API_KEY || 'a07e22bc18f5cb106bfe4cc1f83ad8ed'}&append_to_response=videos\`
                );
                
                if (tmdbResponse.ok) {
                    tmdbData = await tmdbResponse.json();
                    break; // Success! Exit the retry loop.
                } else if (tmdbResponse.status === 429) {
                    // Rate limited. Wait and retry.
                    continue;
                } else {
                    // Other error (404, etc). Don't retry.
                    break;
                }
            } catch (err) {
                // Network error (ECONNRESET). Will retry silently.
            }
        }`;
        
        content = content.replace(fetchPattern, replacement);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Patched fetch logic in: ${path.basename(path.dirname(filePath))}/[id].js`);
        fixedCount++;
    }
}

function walk(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) walk(filePath);
        else if (file === '[id].js') fixFile(filePath);
    });
}

console.log('🚀 Injecting Anti-Crash Retry Logic across all Movie Pages...');
walk(MOVIES_DIR);
console.log(`\\n🎉 Done! Patched ${fixedCount} files to prevent ECONNRESET.`);