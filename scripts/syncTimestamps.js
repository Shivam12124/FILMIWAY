const fs = require('fs');
const path = require('path');
const vm = require('vm');

const utilsDir = path.join(__dirname, '../utils');
const masterTimestampsPath = path.join(utilsDir, 'masterTimestamps.json');

// 1. Read the existing masterTimestamps.json
let masterTimestamps = {};
if (fs.existsSync(masterTimestampsPath)) {
    masterTimestamps = JSON.parse(fs.readFileSync(masterTimestampsPath, 'utf8'));
}

let addedCount = 0;

// 2. Scan all JS files in the utils directory
const files = fs.readdirSync(utilsDir).filter(f => f.endsWith('.js'));

for (const file of files) {
    const filePath = path.join(utilsDir, file);
    const content = fs.readFileSync(filePath, 'utf8');

    // Skip files that don't have timeline data
    if (!content.includes('SENSITIVE_TIMELINES') || !content.includes('COMPLETE_MOVIE_DATABASE')) {
        continue;
    }

    try {
        // Strip imports and exports to avoid the "Unexpected token export" Node error!
        const cleanContent = content
            .replace(/import\s+[\s\S]*?from\s+['"].*?['"];?/g, '') 
            .replace(/export\s+const\s+/g, 'const ')
            .replace(/export\s+let\s+/g, 'let ')
            .replace(/export\s+function\s+/g, 'function ')
            .replace(/export\s+default\s+/g, 'const defaultExport = ');

        // Create a secure sandbox environment to read the variables
        const sandbox = { process: { env: {} }, console: console };
        vm.createContext(sandbox);
        
        // Execute the cleaned code and extract the objects
        vm.runInContext(cleanContent + '\n; this.db = COMPLETE_MOVIE_DATABASE; this.timelines = SENSITIVE_TIMELINES;', sandbox);

        const db = sandbox.db || [];
        const timelines = sandbox.timelines || {};

        // 3. Process each movie
        for (const movie of db) {
            const tmdbId = String(movie.tmdbId);
            const title = movie.Title;

            if (timelines[tmdbId]) {
                // If not in masterTimestamps.json yet, add it!
                if (!masterTimestamps[tmdbId]) {
                    masterTimestamps[tmdbId] = {
                        Title: title,
                        scenes: timelines[tmdbId].scenes || []
                    };
                    addedCount++;
                    console.log(`[ADDED] ${title} (${tmdbId}) from ${file}`);
                }
                // If it is already there, we "let it be" as requested.
            }
        }
    } catch (err) {
        console.error(`[ERROR] Failed parsing ${file}:`, err.message);
    }
}

// 4. Save and rewrite masterTimestamps.json
if (addedCount > 0) {
    fs.writeFileSync(masterTimestampsPath, JSON.stringify(masterTimestamps, null, 4), 'utf8');
    console.log(`\n✅ Successfully synced ${addedCount} missing movies to masterTimestamps.json!`);
} else {
    console.log('\n✅ masterTimestamps.json is already up to date. No missing films found.');
}