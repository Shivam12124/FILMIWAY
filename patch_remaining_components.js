const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'components');
const filesToPatch = [
  'BlackSwanSEOFAQSection.js',
  'DecadeSEOFAQSection.js',
  'GangsterSEOFAQSection.js',
  'HboMaxComedySEOFAQSection.js',
  'HboMaxDramaSEOFAQSection.js',
  'HboMaxHorrorSEOFAQSection.js',
  'HboMaxRomanceSEOFAQSection.js',
  'HboMaxSciFiSEOFAQSection.js',
  'HboMaxThrillerSEOFAQSection.js',
  'InterstellarSEOFAQSection.js',
  'SciFiSEOFAQSection.js',
  'SurvivalSEOFAQSection.js',
  'WarFilmsSEOFAQSection.js'
];

let compCount = 0;

for (const file of filesToPatch) {
    const filePath = path.join(componentsDir, file);
    let code = fs.readFileSync(filePath, 'utf8');
    
    // Looser regex to handle movie.Title or movie?.Title
    const faqsCallRegex = /const faqsFromData = getVisibleMovieFAQs\(movie\??\.Title, movie\??\.tmdbId, currentRuntime\);/g;
    
    if (code.match(faqsCallRegex)) {
        const replacement = `const faqsRaw = getVisibleMovieFAQs(movie?.Title, movie?.tmdbId, currentRuntime);
    const faqsFromData = faqsRaw ? faqsRaw.map(faq => {
        if (faq.answer && faq.answer.includes("[DYNAMIC_SCORE]")) {
            return {
                ...faq,
                answer: faq.answer.replace("[DYNAMIC_SCORE]", movie?.safetyScore || 5).replace("[DYNAMIC_LABEL]", movie?.safetyLabel || "Watch With Caution")
            };
        }
        return faq;
    }) : [];`;
        code = code.replace(faqsCallRegex, replacement);
        fs.writeFileSync(filePath, code);
        compCount++;
        console.log("Patched " + file);
    } else {
        console.log("Regex still didn't match " + file);
    }
}
console.log(`Successfully patched ${compCount} files.`);
