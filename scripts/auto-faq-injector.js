const fs = require('fs');
const path = require('path');

// 1. Load the master timestamps data
const masterPath = path.join(__dirname, '../utils/masterTimestamps.json');
const masterData = JSON.parse(fs.readFileSync(masterPath, 'utf8'));

// 2. The exact 26 films requested
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

let updatedFilesCount = 0;

targetFilms.forEach(title => {
    // Find the movie data by matching the title
    let movieData = null;
    for (const [id, data] of Object.entries(masterData)) {
        if (data.Title === title) {
            movieData = data;
            break;
        }
    }
    
    if (!movieData || !movieData.scenes) return;

    // Extract specific violence and profanity scenes
    const violence = movieData.scenes.find(s => s.type?.toLowerCase().includes('violence'));
    const profanity = movieData.scenes.find(s => s.type?.toLowerCase().includes('profanity') || s.type?.toLowerCase().includes('language'));

    if (!violence && !profanity) return;

    let faqInjections = [];

    // Helper to safely format text for JavaScript injection
    const safeText = (text) => text ? text.replace(/"/g, "'").replace(/\\/g, '\\\\') : '';

    if (violence) {
        faqInjections.push(`
        { 
            question: "Does ${title.replace(/"/g, '\\"')} have violence and gore?", 
            answer: "According to the Filmiway Parents Guide, the violence in ${title.replace(/"/g, '\\"')} is rated as ${violence.severity || 'Moderate'}. ${safeText(violence.description)}" 
        }`);

        const isHigh = ['high', 'extreme', 'severe'].includes((violence.severity || '').toLowerCase());
        const triggerAnswer = isHigh 
            ? `Yes. Viewers should be aware that the film contains ${violence.severity} violence. ${safeText(violence.description)} Viewer discretion is strongly advised.`
            : `The film's violence is rated as ${violence.severity} and is not overly disturbing for a mass audience. ${safeText(violence.description)}`;

        faqInjections.push(`
        { 
            question: "Are there disturbing scenes or trigger warnings for ${title.replace(/"/g, '\\"')}?", 
            answer: "${triggerAnswer}" 
        }`);
    }

    if (profanity) {
        faqInjections.push(`
        { 
            question: "How much swearing or profanity is in ${title.replace(/"/g, '\\"')}?", 
            answer: "The profanity in ${title.replace(/"/g, '\\"')} is rated as ${profanity.severity || 'Moderate'}. ${safeText(profanity.description)}" 
        }`);
    }

    faqInjections.push(`
        {
            question: "Why is ${title.replace(/"/g, '\\"')} rated mature?",
            answer: "${title.replace(/"/g, '\\"')} earns its mature rating due to intense scenes. Specifically, the film contains ${profanity ? safeText(profanity.description) : ''} ${violence ? safeText(violence.description) : ''} Adults can use our timestamps to skip the explicit content."
        }`);

    const injectionString = faqInjections.join(',') + ',';

    // 3. Scan all Data files to inject the FAQs into the proper dictionaries
    files.forEach(file => {
        const filePath = path.join(utilsDir, file);
        let content = fs.readFileSync(filePath, 'utf8');

        const faqsRegex = /export const [A-Z0-9_]+_FAQS = \{/;
        if (!faqsRegex.test(content) || !content.includes(title) || content.includes(`Does ${title} have violence and gore?`)) return;

        const exactKeyRegex1 = new RegExp(`'${title}':\\s*\\[`);
        const exactKeyRegex2 = new RegExp(`"${title}":\\s*\\[`);

        let modified = false;
        if (exactKeyRegex1.test(content)) { content = content.replace(exactKeyRegex1, `'${title}': [${injectionString}`); modified = true; } 
        else if (exactKeyRegex2.test(content)) { content = content.replace(exactKeyRegex2, `"${title}": [${injectionString}`); modified = true; } 
        else { content = content.replace(faqsRegex, `$& \n    '${title}': [${injectionString} \n    ],`); modified = true; }

        if (modified) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`✅ Injected FAQs for "${title}" into ${file}`);
            updatedFilesCount++;
        }
    });
});

console.log(`\n🎉 Finished! Updated FAQs in ${updatedFilesCount} file locations.`);