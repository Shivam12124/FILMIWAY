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

// Character & Iconic Meme Names that people tweet WITHOUT mentioning the movie title
const iconicCharacterQueries = [
    '"Patrick Bateman"', '"Tyler Durden"', '"Michael Corleone"', '"Alex DeLarge"',
    '"Travis Bickle"', '"Jules Winnfield"', '"Vincent Vega"', '"Tony Montana"',
    '"Heath Ledger joker"', '"Oliver Quick"', '"Barry Keoghan saltburn"',
    '"Mikey Madison anora"', '"Yura Borisov anora"', '"Margaret Qualley substance"',
    '"Demi Moore substance"', '"Art the clown"', '"Terrifier"', '"Paul Allen card"'
];

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

// Append iconic characters to movie terms
iconicCharacterQueries.forEach(char => flatSearchTerms.push(char));

// Date YYYY-MM-DD for today and yesterday
const now = new Date();
const todayStr = now.toISOString().split('T')[0];
const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
const yesterdayStr = yesterday.toISOString().split('T')[0];

// Group into 20 clean search groups
const CHUNK_SIZE = 20;
const chunks = [];
for (let i = 0; i < flatSearchTerms.length; i += CHUNK_SIZE) {
    chunks.push(flatSearchTerms.slice(i, i + CHUNK_SIZE));
}

// -------------------------------------------------------------
// 🔥 RADAR: FILMIWAY TOP 25 MOST VISITED MOVIES
// Split into 2 safe parts (under 300 chars) so Twitter search never hits length limit!
// -------------------------------------------------------------
const top25Part1 = [
    '"Fifty Shades of Grey"', '"365 Days"', '"The Wolf of Wall Street"', '"Titanic"',
    '"Basic Instinct"', '"Oppenheimer"', '"Poor Things"', '"Eyes Wide Shut"',
    '"American Psycho"', '"Wild Things"', '"Unfaithful"', '"Blue Is the Warmest Color"',
    '"The Dreamers"'
];

const top25Part2 = [
    '"Original Sin"', '"Boogie Nights"', '"Malena"', '"Red Sparrow"',
    '"Secretary"', '"American Pie"', '"Last Tango In Paris"', '"Fight Club"',
    '"Fatal Attraction"', '"Irreversible"', '"Bound"', '"Obsession"'
];

// -------------------------------------------------------------
// 😱 RADAR: "NEVER WATCHING AGAIN", CONTROVERSIAL & CINEMA HISTORY
// Extreme reactions that trigger millions of views and massive curiosity
// -------------------------------------------------------------
const shockingCinemaGroups = [
    {
        name: "Never Watching Again & Traumatizing ('Never watching this movie again', 'Scarred me', 'Broke me')",
        query: '("never watching this again" OR "never watching this movie again" OR "never watching this film again" OR "never rewatching this" OR "scarred me for life" OR "sick to my stomach" OR "this movie traumatized")'
    },
    {
        name: "Cinema History & Masterpieces ('Cinema history', 'History of cinema', 'Changed cinema forever')",
        query: '("cinema history" OR "history of cinema" OR "changed cinema forever" OR "in the history of cinema" OR "cinema was never the same")'
    },
    {
        name: "Most Shocking & Controversial Cinema ('Most disturbing movie', 'Most controversial', 'Banned in')",
        query: '("most disturbing movie" OR "most disturbing film" OR "most disturbing scene" OR "most controversial movie" OR "most controversial film" OR "most unhinged movie" OR "banned in")'
    }
];

// -------------------------------------------------------------
// RADAR 1: The "No-Movie-Name" Universal Movie Clip Phrases
// People tweet pure clips with single sentences without mentioning movie names!
// -------------------------------------------------------------
const universalClipGroups = [
    {
        name: "Hype Scene Reactions ('This scene was insane', 'Never be topped')",
        query: '("this scene" OR "this whole scene" OR "never be topped" OR "jaw dropped" OR "unscripted scene" OR "altered my brain chemistry")'
    },
    {
        name: "Cinema & Acting Masterclass ('Peak cinema', 'Acting in this', 'Pure cinema')",
        query: '("peak cinema" OR "pure cinema" OR "acting in this" OR "acting masterclass" OR "cinematography in this" OR "cinema was at its peak")'
    },
    {
        name: "Rewatching & Nostalgia ('Rewatching this movie', 'They don\\'t make')",
        query: '("rewatching this" OR "they don\'t make movies like this" OR "one of the best movies" OR "one of the craziest movies" OR "10/10 movie" OR "10/10 scene")'
    },
    {
        name: "Emotional & Tension Impact ('The tension in this', 'The silence after this')",
        query: '("the tension in this" OR "the silence after this" OR "this movie broke me" OR "chills every time" OR "goosebumps every time")'
    },
    {
        name: "Now Watching Live (#nw, 'nw:', 'now watching', 'currently watching')",
        query: '(#nw OR "nw:" OR "now watching" OR "currently watching")'
    }
];

// -------------------------------------------------------------
// RADAR 2: Top Film Twitter Curator Hubs
// Accounts that curate viral movie clips 24/7 with short 1-line captions
// -------------------------------------------------------------
const curatorHubs = [
    {
        name: "Major Film Clip Curators (Cinematographr, Lostinfilm, OnePerfectShot, FilmDaze)",
        query: '(from:cinematographr OR from:lostinfilm OR from:oneperfectshot OR from:filmdaze OR from:CinephileClub)'
    },
    {
        name: "Breaking Movie Hubs (FilmUpdates, Screentime, DiscussingFilm, CinemaBurst)",
        query: '(from:FilmUpdates OR from:screentime OR from:DiscussingFilm OR from:CinemaBurst OR from:FilmHistoryPic)'
    },
    {
        name: "Horror & Thriller Specialist Hubs (HorrorLosers, HorrorDaily)",
        query: '(from:horrorlosers OR from:HorrorDaily OR from:BloodyDisgusting OR from:DreadCentral)'
    }
];

// -------------------------------------------------------------
// RADAR 3: "What Movie Is This?" (Highest Conversion for Filmiway)
// Viral tweets where viewers literally ask for the movie name/where to watch
// -------------------------------------------------------------
const whatMovieQuery = '("what movie is this" OR "what film is this" OR "name of this movie" OR "what is this movie called" OR "drop the movie name")';

let mdContent = `# 🎯 Filmiway Ultra-Advanced X (Twitter) Viral Post Radar\n\n`;
mdContent += `*Total Movies Tracked:* **${uniqueMoviesMap.size} Verified Movies + Top 25 Powerhouses + Iconic Characters**\n`;
mdContent += `*Live Date Window:* **${yesterdayStr} to ${todayStr}**\n`;
mdContent += `*Generation Time:* ${new Date().toLocaleString()}\n\n`;
mdContent += `> 💡 **One-Click Refresh:** Run \`npm run update-tracker\` in your terminal anytime to auto-refresh all dates and links to the latest 24 hours!\n\n`;

mdContent += `--- \n\n`;
mdContent += `## 🏆 RADAR 0: FILMIWAY TOP 25 POWERHOUSE MOVIES (Split into 2 Fast Links)\n`;
mdContent += `*Direct live scans for the **Top 25 Most Visited Parents Guides & Skip Timestamps** on Filmiway. Split into two optimal groups so Twitter/X loads smoothly without hitting character limits!*\n\n`;

// Part 1
const top25P1Query = `(${top25Part1.join(' OR ')})`;
const top25P1Monster = `${top25P1Query} filter:media min_faves:800 since:${yesterdayStr} -filter:replies`;
const top25P1Rising = `${top25P1Query} filter:media min_faves:300 since:${todayStr} -filter:replies`;

mdContent += `### 🎬 Top 25 - Part 1: Fifty Shades, 365 Days, Wolf of Wall Street, Titanic, Oppenheimer, Poor Things, Eyes Wide Shut, etc.\n`;
mdContent += `* 👉 [**Scan Part 1 Monster Viral (Last 24h | 800+ Likes)**](https://x.com/search?q=${encodeURIComponent(top25P1Monster)}&f=top)\n`;
mdContent += `* ⚡ [**Scan Part 1 Rising Today (Today Only | 300+ Likes)**](https://x.com/search?q=${encodeURIComponent(top25P1Rising)}&f=top)\n\n`;

// Part 2
const top25P2Query = `(${top25Part2.join(' OR ')})`;
const top25P2Monster = `${top25P2Query} filter:media min_faves:800 since:${yesterdayStr} -filter:replies`;
const top25P2Rising = `${top25P2Query} filter:media min_faves:300 since:${todayStr} -filter:replies`;

mdContent += `### 🎬 Top 25 - Part 2: Fight Club, Irreversible, Boogie Nights, Original Sin, Malena, Red Sparrow, Secretary, Obsession, etc.\n`;
mdContent += `* 👉 [**Scan Part 2 Monster Viral (Last 24h | 800+ Likes)**](https://x.com/search?q=${encodeURIComponent(top25P2Monster)}&f=top)\n`;
mdContent += `* ⚡ [**Scan Part 2 Rising Today (Today Only | 300+ Likes)**](https://x.com/search?q=${encodeURIComponent(top25P2Rising)}&f=top)\n\n`;

mdContent += `--- \n\n`;
mdContent += `## 😱 RADAR 0.5: "NEVER WATCHING AGAIN", CONTROVERSIAL & CINEMA HISTORY\n`;
mdContent += `*Viral tweets where people react to disturbing, shocking, or historical cinematic scenes. These threads are goldmines for dropping Filmiway skip timestamps!*\n\n`;

shockingCinemaGroups.forEach((group, idx) => {
    const fullQueryMonster = `${group.query} filter:media min_faves:1200 since:${yesterdayStr} -filter:replies`;
    const urlMonster = `https://x.com/search?q=${encodeURIComponent(fullQueryMonster)}&f=top`;

    const fullQueryRising = `${group.query} filter:media min_faves:400 since:${todayStr} -filter:replies`;
    const urlRising = `https://x.com/search?q=${encodeURIComponent(fullQueryRising)}&f=top`;

    mdContent += `### ⚡ ${group.name}\n`;
    mdContent += `* 👉 [**Scan Monster Viral (Last 24h | 1,200+ Likes)**](${urlMonster})\n`;
    mdContent += `* ⚡ [**Scan Rising Today (Today Only | 400+ Likes)**](${urlRising})\n\n`;
});

mdContent += `--- \n\n`;
mdContent += `## 🌟 RADAR 1: "NO-NAME" VIRAL MOVIE CLIPS (Zero Movie Title In Tweet)\n`;
mdContent += `*These are viral clips blowing up right now where the OP **did NOT write the movie name**—just 1 sentence like "this scene was insane" or "acting masterclass"!*\n\n`;

universalClipGroups.forEach((group, idx) => {
    // 1,500+ likes (Monster Viral)
    const fullQueryMonster = `${group.query} filter:media min_faves:1500 since:${yesterdayStr} -filter:replies`;
    const urlMonster = `https://x.com/search?q=${encodeURIComponent(fullQueryMonster)}&f=top`;

    // 500+ likes (Rising Today)
    const fullQueryRising = `${group.query} filter:media min_faves:500 since:${todayStr} -filter:replies`;
    const urlRising = `https://x.com/search?q=${encodeURIComponent(fullQueryRising)}&f=top`;

    mdContent += `### 🔥 Category ${idx + 1}: ${group.name}\n`;
    mdContent += `* 👉 [**Scan Monster Viral (Last 24h | 1,500+ Likes)**](${urlMonster})\n`;
    mdContent += `* ⚡ [**Scan Rising Today (Today Only | 500+ Likes)**](${urlRising})\n\n`;
});

mdContent += `--- \n\n`;
mdContent += `## 🎬 RADAR 2: TOP FILM CLIP CURATOR CHANNELS (Pure Movie Clips 24/7)\n`;
mdContent += `*Accounts that post high-definition movie scenes with single-line captions. The replies are ALWAYS packed with movie fans asking about the film.*\n\n`;

curatorHubs.forEach((hub, idx) => {
    const fullQuery = `${hub.query} filter:media min_faves:800 since:${yesterdayStr} -filter:replies`;
    const url = `https://x.com/search?q=${encodeURIComponent(fullQuery)}&f=top`;

    mdContent += `### 🎥 Hub ${idx + 1}: ${hub.name}\n`;
    mdContent += `👉 [**Scan Curated Viral Clips (Last 24h | 800+ Likes)**](${url})\n\n`;
});

mdContent += `--- \n\n`;
mdContent += `## ❓ RADAR 3: "WHAT MOVIE IS THIS?" (Instant Traffic & Link Conversion)\n`;
mdContent += `*Tweets where people post an insane clip and ask for the title. Dropping the movie name + your Filmiway skip-timestamps link is the #1 most helpful reply in the whole thread!*\n\n`;

const whatMovieUrlMonster = `https://x.com/search?q=${encodeURIComponent(`${whatMovieQuery} filter:media min_faves:500 since:${yesterdayStr}`)}&f=top`;
const whatMovieUrlFresh = `https://x.com/search?q=${encodeURIComponent(`${whatMovieQuery} filter:media min_faves:100 since:${todayStr}`)}&f=top`;

mdContent += `* 👉 [**Scan Viral "What Movie Is This?" (Last 24h | 500+ Likes)**](${whatMovieUrlMonster})\n`;
mdContent += `* ⚡ [**Scan Fresh "What Movie Is This?" (Today Only | 100+ Likes)**](${whatMovieUrlFresh})\n\n`;

mdContent += `--- \n\n`;
mdContent += `## 🚀 RADAR 4: SPECIFIC MOVIE & CHARACTER VIRAL HITS (LAST 24 HOURS)\n`;
mdContent += `*Tracks our 300+ database movies + iconic characters (Patrick Bateman, Tyler Durden, Michael Corleone, Alex DeLarge, etc.)*\n\n`;

chunks.forEach((chunk, index) => {
    const queryGroup = chunk.join(' OR ');
    const fullQuery = `(${queryGroup}) filter:media min_faves:1200 since:${yesterdayStr} -filter:replies`;
    const url = `https://x.com/search?q=${encodeURIComponent(fullQuery)}&f=top`;

    mdContent += `### 🚀 Group ${index + 1} of ${chunks.length}\n`;
    mdContent += `👉 [**Scan Group ${index + 1} (Last 24h | 1,200+ Likes)**](${url})\n\n`;
});

mdContent += `---\n\n`;
mdContent += `## ⚡ RADAR 5: TODAY'S FRESH BREAKING MOVIE POSTS (min_faves:500 | since:${todayStr})\n`;
mdContent += `*Brand new movie posts posted TODAY (${todayStr}) in the last few hours with 500+ likes.*\n\n`;

chunks.forEach((chunk, index) => {
    const queryGroup = chunk.join(' OR ');
    const fullQuery = `(${queryGroup}) filter:media min_faves:500 since:${todayStr} -filter:replies`;
    const url = `https://x.com/search?q=${encodeURIComponent(fullQuery)}&f=top`;

    mdContent += `### ⚡ Group ${index + 1} of ${chunks.length}\n`;
    mdContent += `👉 [**Scan Group ${index + 1} (Today Only | 500+ Likes)**](${url})\n\n`;
});

fs.writeFileSync(outputPath, mdContent, 'utf8');

console.log(`✅ Ultra-Advanced X Viral Radar generated successfully!`);
console.log(`📊 Radar 1: Anonymous Clips without Movie Names`);
console.log(`📊 Radar 2: Film Twitter Curator Hubs`);
console.log(`📊 Radar 3: "What Movie Is This?" High-Conversion Radar`);
console.log(`📊 Radar 4 & 5: ${uniqueMoviesMap.size} Movies + Iconic Character Names across ${chunks.length} groups.`);
