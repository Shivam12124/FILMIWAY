const fs = require('fs');
const path = require('path');

// 1. Load all databases to cross-reference Ratings and Sex Severities
const masterPath = path.join(__dirname, '../utils/masterTimestamps.json');
const dbPath = path.join(__dirname, '../utils/masterDatabase.json');
const cachePath = path.join(__dirname, '../data/tmdbCache.json');

const masterData = JSON.parse(fs.readFileSync(masterPath, 'utf8'));
const masterDb = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
const tmdbCache = JSON.parse(fs.readFileSync(cachePath, 'utf8'));

const targetFilms = [
    "Forrest Gump", "Eyes Wide Shut", "Basic Instinct", "Fight Club", "Titanic", 
    "Wild Things", "Little Miss Sunshine", "Irréversible", "The Dreamers", 
    "The Piano Teacher", "Lust, Caution", "Superbad", "Malèna", "Secretary", 
    "Memories of Murder", "The Wolf of Wall Street", "Blue Is the Warmest Color", 
    "Gone Girl", "Fifty Shades of Grey", "The Handmaiden", "Fifty Shades Darker", 
    "Parasite", "365 Days", "Poor Things", "Oppenheimer", "Anyone But You"
];

const utilsDir = path.join(__dirname, '../utils');
const files = fs.readdirSync(utilsDir).filter(f => f.endsWith('Data.js') || f.endsWith('MoviesData.js'));

// Helper: Fetch Exact Age Rating
const getAgeRating = (title) => {
    const dbEntry = masterDb.find(m => m.Title === title);
    if (!dbEntry) return 'R';
    const cacheEntry = tmdbCache[dbEntry.imdbID];
    return cacheEntry?.ageRating || 'R';
};

// Helper: Calculate Sex & Nudity Severity
const getSexSeverity = (scenes) => {
    const sexScenes = scenes.filter(s => {
        const t = (s.type || '').toLowerCase();
        return t.includes('sex') || t.includes('nudity') || t.includes('explicit') || t.includes('suggestive') || t.includes('lingerie') || t.includes('bikini') || t.includes('bdsm');
    });
    if (sexScenes.length === 0) return 'None';
    const severities = sexScenes.map(s => (s.severity || 'Moderate').toLowerCase());
    if (severities.filter(s => s === 'extreme').length >= 2) return 'Extreme';
    if (severities.includes('extreme') || severities.includes('high')) return 'High';
    if (severities.includes('moderate')) return 'Moderate';
    return 'Mild';
};

let updatedFilesCount = 0;

files.forEach(file => {
    const filePath = path.join(utilsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    targetFilms.forEach(title => {
        if (!content.includes(title)) return;
        
        // 🔥 1. AGGRESSIVE SCRUBBING: Remove all old injected FAQs for this specific movie
        const regex = /\{\s*question\s*:\s*"([^"]+)"\s*,\s*answer\s*:\s*"([\s\S]*?[^\\])"\s*\},?\s*/g;
        content = content.replace(regex, (match, qText, aText) => {
            if (qText.includes(title) && (
                qText.toLowerCase().includes('violence') || qText.toLowerCase().includes('gore') ||
                qText.toLowerCase().includes('profanity') || qText.toLowerCase().includes('swearing') ||
                qText.toLowerCase().includes('curse words') || qText.toLowerCase().includes('mature') ||
                qText.toLowerCase().includes('disturbing') || qText.toLowerCase().includes('trigger') ||
                qText.toLowerCase().match(/why is .* rated/)
            )) {
                modified = true;
                return ''; // Erase the old duplicate question entirely
            }
            return match;
        });

        // 🔥 2. BUILD THE 3 PERFECT QUESTIONS
        let movieData = null;
        for (const [id, data] of Object.entries(masterData)) {
            if (data.Title === title) { movieData = data; break; }
        }
        if (!movieData || !movieData.scenes) return;

        const violence = movieData.scenes.find(s => s.type?.toLowerCase().includes('violence'));
        const profanity = movieData.scenes.find(s => s.type?.toLowerCase().includes('profanity') || s.type?.toLowerCase().includes('language'));
        if (!violence && !profanity) return;

        const ageRating = getAgeRating(title);
        const sexSeverity = getSexSeverity(movieData.scenes);
        const safeText = (text) => text ? text.replace(/"/g, "'").replace(/\\/g, '\\\\') : '';

        let faqInjections = [];
        if (violence) faqInjections.push(`\n        { question: "Does ${title.replace(/"/g, '\\"')} have violence and gore?", answer: "According to the Filmiway Parents Guide, the violence in ${title.replace(/"/g, '\\"')} is rated as ${violence.severity || 'Moderate'}. ${safeText(violence.description)}" }`);
        if (profanity) faqInjections.push(`\n        { question: "Does ${title.replace(/"/g, '\\"')} have profanity or swearing?", answer: "The profanity in ${title.replace(/"/g, '\\"')} is rated as ${profanity.severity || 'Moderate'}. ${safeText(profanity.description)}" }`);

        const reasons = [];
        if (sexSeverity !== 'None') reasons.push(`${sexSeverity.toLowerCase()} sexual content and nudity`);
        if (violence) reasons.push(`${(violence.severity || 'Moderate').toLowerCase()} violence`);
        if (profanity) reasons.push(`${(profanity.severity || 'Moderate').toLowerCase()} profanity`);
        
        const reasonStr = reasons.length > 1 ? reasons.slice(0, -1).join(', ') + ', and ' + reasons[reasons.length - 1] : reasons[0];
        const specificStr = `${profanity ? safeText(profanity.description) + ' ' : ''}${violence ? safeText(violence.description) : ''}`.trim();

        faqInjections.push(`\n        { question: "Why is ${title.replace(/"/g, '\\"')} rated ${ageRating}?", answer: "${title.replace(/"/g, '\\"')} earns its ${ageRating} rating due to ${reasonStr}. Specifically, the film contains ${specificStr} Adults can use our timestamps to skip the explicit content." }`);

        const injectionString = faqInjections.join(',') + ',';

        // 🔥 3. INJECT INTO THE ARRAY
        const escapedTitle = title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const exactKeyRegex1 = new RegExp(`'${escapedTitle}':\\s*\\[`);
        const exactKeyRegex2 = new RegExp(`"${escapedTitle}":\\s*\\[`);

        if (exactKeyRegex1.test(content)) { content = content.replace(exactKeyRegex1, `'${title}': [${injectionString}`); modified = true; } 
        else if (exactKeyRegex2.test(content)) { content = content.replace(exactKeyRegex2, `"${title}": [${injectionString}`); modified = true; }
    });

    if (modified) { fs.writeFileSync(filePath, content, 'utf8'); console.log(`✅ Cleaned and Repopulated 3 FAQs in: ${file}`); updatedFilesCount++; }
});

console.log(`\n🎉 Finished! Fixed FAQs across ${updatedFilesCount} file locations.`);