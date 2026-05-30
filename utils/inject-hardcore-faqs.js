const fs = require('fs');
const path = require('path');

// Simplified pathing. This script MUST be in the `utils` directory to work.
const utilsDir = __dirname;
const masterTimestampsPath = path.join(utilsDir, 'masterTimestamps.json');

if (!fs.existsSync(masterTimestampsPath)) {
    console.error(`❌ Cannot find masterTimestamps.json in ${utilsDir}! Please ensure the script is in the 'utils' folder and you are running the command from the root 'FILMIWAY' directory.`);
    process.exit(1);
}

const masterTimestamps = require(masterTimestampsPath);
const files = fs.readdirSync(utilsDir).filter(f => f.endsWith('Data.js'));

let totalInjected = 0;

function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

files.forEach(file => {
    const filePath = path.join(utilsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Find the FAQS object name (e.g., EROTIC_THRILLER_MOVIE_FAQS)
    const faqMatch = content.match(/export\s+const\s+([A-Z0-9_]+_FAQS)\s*=\s*\{/);
    if (!faqMatch) return;
    
    // Find all movies listed in this specific file
    // Handles {"tmdbId": 123, "Title": "Abc"} and {tmdbId: 123, Title: 'Abc'}
    const movieDataRegex = /(?:["'])?tmdbId(?:["'])?\s*:\s*(\d+)[^{}]*?(?:["'])?Title(?:["'])?\s*:\s*(["'])(.*?)\2/ig;
    let match;
    const movies = [];
    while ((match = movieDataRegex.exec(content)) !== null) {
        movies.push({ tmdbId: match[1], title: match[3] });
    }

    let modified = false;

    movies.forEach(movie => {
        const tsData = masterTimestamps[movie.tmdbId];
        if (!tsData || !tsData.scenes) return;

        const violenceScene = tsData.scenes.find(s => s.type === "Violence & Gore" && s.description);
        const profanityScene = tsData.scenes.find(s => s.type === "Profanity" && s.description);
        
        // Only proceed if we have the hardcore data for this movie
        if (!violenceScene || !profanityScene || !tsData.Age || !tsData.Summary) return;

        // Check if existing FAQ block already has these questions
        const safeTitle = escapeRegex(movie.title).replace(/'/g, "\\\\?'");
        const movieFaqBlockRegex = new RegExp(`['"]${safeTitle}['"]\\s*:\\s*\\[([\\s\\S]*?)\\]`, 'm');
        const faqBlockMatch = content.match(movieFaqBlockRegex);
        
        if (faqBlockMatch) {
            const existingFaqs = faqBlockMatch[1].toLowerCase();
            // CONDITION: "don't apply for the film that actually faq" -> skip if it exists!
            if (existingFaqs.includes("violence and gore") || existingFaqs.includes("profanity or swearing")) {
                return; 
            }
        }

        const hasNudity = tsData.scenes.some(s => s.type.toLowerCase().includes("sex") || s.type.toLowerCase().includes("nudity"));
        
        // CONDITION: "use notsuenumberbutuse aftercoutn liekthis for brutal graphic violence..."
        const summaryFormatted = tsData.Summary.replace(/^Aged \d+\+\s*/i, '');
        
        let ageAnswer = `${movie.title} earns its ${tsData.Age} rating ${summaryFormatted} Specifically, the film contains: ${violenceScene.description} ${profanityScene.description}`;
        
        // CONDITION: Append the mature skip warning if necessary
        if (hasNudity) {
            ageAnswer += " The film contains mature scenes some people might find uncomfortable. They can use our timestamps to skip it.";
        }

        const violenceAnswer = `According to the Filmiway Parents Guide, the violence in ${movie.title} is rated as ${violenceScene.severity || 'Moderate'}. ${violenceScene.description}`;
        const profanityAnswer = `The profanity in ${movie.title} is rated as ${profanityScene.severity || 'Moderate'}. ${profanityScene.description}`;

        const faqsToAdd = [
            `        { question: "Does ${movie.title} have violence and gore?", answer: ${JSON.stringify(violenceAnswer)} }`,
            `        { question: "Does ${movie.title} have profanity or swearing?", answer: ${JSON.stringify(profanityAnswer)} }`,
            `        { question: "Why is ${movie.title} rated ${tsData.Age}?", answer: ${JSON.stringify(ageAnswer.trim())} }`
        ];

        if (faqBlockMatch) {
            // Insert at the beginning of the existing array
            const insertionPoint = faqBlockMatch.index + faqBlockMatch[0].indexOf('[') + 1;
            content = content.slice(0, insertionPoint) + '\n' + faqsToAdd.join(',\n') + ',' + content.slice(insertionPoint);
            modified = true;
            totalInjected++;
        } else {
            // Create a brand new block at the beginning of the FAQS object
            const faqsStartPoint = faqMatch.index + faqMatch[0].length;
            const newBlock = `\n    ${JSON.stringify(movie.title)}: [\n${faqsToAdd.join(',\n')}\n    ],`;
            content = content.slice(0, faqsStartPoint) + newBlock + content.slice(faqsStartPoint);
            modified = true;
            totalInjected++;
        }
    });

    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Updated ${file}`);
    }
});

console.log(`\n🎉 Script Complete! Injected ${totalInjected} movie FAQ blocks.`);