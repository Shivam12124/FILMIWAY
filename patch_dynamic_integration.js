const fs = require('fs');
const path = require('path');

// 1. Patch utils (77 files)
const utilsDir = path.join(__dirname, 'utils');
const utilFiles = fs.readdirSync(utilsDir);
let utilsCount = 0;

const targetLogic = /let dynamicScore = "3\/10 \(Avoid Family Viewing\)";[\s\S]*?let familyFaqAnswer = `No\. \$\{movieTitle\} is not safe to watch with family because it contains \$\{familyUnsafeString\}, earning it a \$\{dynamicScore\} Family Safety Score\. Adults can use Filmiway's timestamps to skip all \$\{sceneCount\} explicit scenes in the \$\{finalRuntime\} runtime\.`;/;

const replacementLogic = "let familyFaqAnswer = `No. ${movieTitle} is not safe to watch with family because it contains ${familyUnsafeString}, earning it a [DYNAMIC_SCORE]/10 ([DYNAMIC_LABEL]) Family Safety Score. Adults can use Filmiway's timestamps to skip all ${sceneCount} explicit scenes in the ${finalRuntime} runtime.`;";

for (const file of utilFiles) {
    if (!file.endsWith('.js')) continue;
    const filePath = path.join(utilsDir, file);
    let code = fs.readFileSync(filePath, 'utf8');
    if (code.match(targetLogic)) {
        code = code.replace(targetLogic, replacementLogic);
        fs.writeFileSync(filePath, code);
        utilsCount++;
    }
}
console.log(`Patched ${utilsCount} utils files.`);

// 2. Patch components (77 files)
const componentsDir = path.join(__dirname, 'components');
const componentFiles = fs.readdirSync(componentsDir);
let compCount = 0;

for (const file of componentFiles) {
    if (!file.includes('SEOFAQSection')) continue;
    const filePath = path.join(componentsDir, file);
    let code = fs.readFileSync(filePath, 'utf8');
    
    // Find the getVisibleMovieFAQs call
    const faqsCallRegex = /const faqsFromData = getVisibleMovieFAQs\(movie\?\.Title, movie\?\.tmdbId, currentRuntime\);/g;
    
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
    }
}
console.log(`Patched ${compCount} component files.`);

// 3. Patch pages/movie/[slug].js for SEO JSON-LD
const slugFile = path.join(__dirname, 'pages', 'movie', '[slug].js');
let slugCode = fs.readFileSync(slugFile, 'utf8');

const slugRegex = /const faqs = getVisibleMovieFAQs\(movie\.Title, movie\.tmdbId, currentRuntime\) \|\| \[\];/g;
const slugReplacement = `const rawFaqs = getVisibleMovieFAQs(movie.Title, movie.tmdbId, currentRuntime) || [];
    const faqs = rawFaqs.map(faq => {
        if (faq.answer && faq.answer.includes("[DYNAMIC_SCORE]")) {
            return {
                ...faq,
                answer: faq.answer.replace("[DYNAMIC_SCORE]", safetyScore || 5).replace("[DYNAMIC_LABEL]", safetyLabel || "Watch With Caution")
            };
        }
        return faq;
    });`;

if (slugCode.match(slugRegex)) {
    slugCode = slugCode.replace(slugRegex, slugReplacement);
    fs.writeFileSync(slugFile, slugCode);
    console.log('Patched pages/movie/[slug].js successfully!');
} else {
    console.log('Regex did not match in slug.js');
}
