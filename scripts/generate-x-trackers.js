const fs = require('fs');
const path = require('path');

const masterDbPath = path.join(__dirname, '../utils/masterDatabase.json');
const masterTsPath = path.join(__dirname, '../utils/masterTimestamps.json');
const outputPath = path.join(__dirname, '../X_VIRAL_POST_TRACKER.md');

if (!fs.existsSync(masterDbPath) || !fs.existsSync(masterTsPath)) {
    console.error("Database files missing!");
    process.exit(1);
}

const masterDb = JSON.parse(fs.readFileSync(masterDbPath, 'utf8'));
const masterTs = JSON.parse(fs.readFileSync(masterTsPath, 'utf8'));

// Filter ONLY movies that have explicit start/end timestamps (e.g. 0:35:10 - 0:36:15)
const moviesWithTimestamps = masterDb.filter(movie => {
    const entry = masterTs[movie.tmdbId];
    if (!entry || !entry.scenes) return false;
    return entry.scenes.some(scene => scene.start && scene.start.trim() !== '');
});

// Extract unique titles
const uniqueMoviesMap = new Map();
moviesWithTimestamps.forEach(m => {
    if (m.Title && !uniqueMoviesMap.has(m.Title)) {
        uniqueMoviesMap.set(m.Title, m.year);
    }
});

const isAmbiguousTitle = (title) => {
    const words = title.trim().split(/\s+/);
    if (words.length === 1) return true;
    const commonPhrases = ['Crash', 'Heat', 'Big', 'Contact', 'Ghost', 'Drive', '300', 'Aliens', 'Jaws', 'Fargo', 'Casino', 'Platoon', 'Sunshine', 'Troy', 'Chinatown', 'Scream', 'Speed', 'Twister', 'Predator', 'Alien', 'The Game', 'Dark City', 'The Abyss', 'Wild Things', 'The Ninth Gate', 'Easy Rider', 'Inside Man', 'The Ring', 'The Thing', 'The Fly', 'The Mist', 'The Fog', 'The Craft'];
    return commonPhrases.includes(title);
};

// Build FLAT search terms (NO nested parentheses!)
const flatSearchTerms = [];
uniqueMoviesMap.forEach((year, title) => {
    const cleaned = title.replace(/"/g, '');
    if (isAmbiguousTitle(cleaned)) {
        flatSearchTerms.push(`"${cleaned} movie"`);
        flatSearchTerms.push(`"${cleaned} film"`);
    } else {
        flatSearchTerms.push(`"${cleaned}"`);
    }
});

// Date YYYY-MM-DD for today and yesterday
const now = new Date();
const todayStr = now.toISOString().split('T')[0];
const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
const yesterdayStr = yesterday.toISOString().split('T')[0];

// Group into 20 clean search groups (15-16 terms per query)
const CHUNK_SIZE = 20;
const chunks = [];
for (let i = 0; i < flatSearchTerms.length; i += CHUNK_SIZE) {
    chunks.push(flatSearchTerms.slice(i, i + CHUNK_SIZE));
}

let mdContent = `# 🎯 Filmiway High-Traffic X (Twitter) Viral Post Tracker\n\n`;
mdContent += `*Total Movies Tracked:* **${uniqueMoviesMap.size} Verified Movies with Skip-Timestamps ONLY**\n`;
mdContent += `*Strict Filter Criteria:* **ONLY Viral Posts with Verified Skip-Timestamps**\n`;
mdContent += `*Last Updated:* ${new Date().toLocaleString()} (Active Date Window: **${yesterdayStr} to ${todayStr}**)\n\n`;
mdContent += `> 💡 **Quick Refresh:** To auto-update all search links to today's date every morning, run \`npm run update-tracker\` in your terminal!\n\n`;

mdContent += `--- \n\n`;
mdContent += `## 🔥 MONSTER VIRAL HITS - LAST 24 HOURS (min_faves:1200 | since:${yesterdayStr})\n`;
mdContent += `*Strictly posts under 24 hours old with 1,200+ to 50,000+ likes! Zero 48-hour old clutter.*\n\n`;

chunks.forEach((chunk, index) => {
    const queryGroup = chunk.join(' OR ');
    const fullQuery = `(${queryGroup}) filter:media min_faves:1200 since:${yesterdayStr} -filter:replies`;
    const encodedQuery = encodeURIComponent(fullQuery);
    const url = `https://x.com/search?q=${encodedQuery}&f=top`;

    mdContent += `### 🚀 Group ${index + 1} of ${chunks.length}\n`;
    mdContent += `👉 [**Scan Group ${index + 1} (Last 24h | 1,200+ Likes)**](${url})\n\n`;
});

mdContent += `---\n\n`;
mdContent += `## ⚡ TODAY ONLY - FRESH BREAKING POSTS (min_faves:500 | since:${todayStr})\n`;
mdContent += `*Strictly brand new posts posted TODAY (${todayStr}) in the last few hours with 500+ likes.*\n\n`;

chunks.forEach((chunk, index) => {
    const queryGroup = chunk.join(' OR ');
    const fullQuery = `(${queryGroup}) filter:media min_faves:500 since:${todayStr} -filter:replies`;
    const encodedQuery = encodeURIComponent(fullQuery);
    const url = `https://x.com/search?q=${encodedQuery}&f=top`;

    mdContent += `### ⚡ Group ${index + 1} of ${chunks.length}\n`;
    mdContent += `👉 [**Scan Group ${index + 1} (Today Only | 500+ Likes)**](${url})\n\n`;
});

mdContent += `---\n\n`;
mdContent += `## 📈 RISING VIRAL HITS - LAST 24 HOURS (min_faves:500 | since:${yesterdayStr})\n`;
mdContent += `*High-velocity rising posts with 500+ likes from the last 24 hours.*\n\n`;

chunks.forEach((chunk, index) => {
    const queryGroup = chunk.join(' OR ');
    const fullQuery = `(${queryGroup}) filter:media min_faves:500 since:${yesterdayStr} -filter:replies`;
    const encodedQuery = encodeURIComponent(fullQuery);
    const url = `https://x.com/search?q=${encodedQuery}&f=top`;

    mdContent += `### 📈 Group ${index + 1} of ${chunks.length}\n`;
    mdContent += `👉 [**Scan Group ${index + 1} (Last 24h | 500+ Likes)**](${url})\n\n`;
});

fs.writeFileSync(outputPath, mdContent, 'utf8');

console.log(`✅ Successfully generated 1,200+ Likes Filtered X Tracker!`);
console.log(`📊 Tracked ${uniqueMoviesMap.size} movies across ${chunks.length} groups.`);
