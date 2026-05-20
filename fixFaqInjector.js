const fs = require('fs');
const path = require('path');

const utilsDir = path.join(__dirname, 'utils');
const files = fs.readdirSync(utilsDir).filter(f => f.endsWith('Data.js') || f.endsWith('Movies.js'));

let updatedCount = 0;

files.forEach(file => {
    const filePath = path.join(utilsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // 1. Strip ALL existing injected blocks to start fresh
    content = content.replace(/\/\/\s*🔥 DYNAMIC RECOMMENDED AGE FAQ INJECTION \(SEO SCHEMA\)[\s\S]*?(?=\n\s*if\s*\(\s*intensityScenes\.length|\n\s*if\s*\(\s*heavyScenes\.length)/g, '');
    content = content.replace(/\/\/\s*🔥 DYNAMIC RECOMMENDED AGE FAQ INJECTION \(UI\)[\s\S]*?(?=\n\s*const heavyScenes)/g, '');
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n'); // Cleanup empty spaces

    // 2. The Logic to Inject into the SEO Schema Generator
    const schemaInjection = `
    // 🔥 DYNAMIC RECOMMENDED AGE FAQ INJECTION (SEO SCHEMA)
    const tmdbIdKey = movie?.tmdbId?.toString();
    const timestampData = tmdbIdKey ? masterTimestamps[tmdbIdKey] : null;
    const recommendedAge = timestampData?.Age || movie?.Age;
    const ageSummary = timestampData?.Summary || movie?.Summary;

    if (recommendedAge && ageSummary) {
        schemaFaqs.unshift({
            '@type': 'Question',
            'name': \`What is the suitable age to watch \${movie.Title}?\`,
            'acceptedAnswer': { 
                '@type': 'Answer', 
                'text': \`According to Filmiway's Parents Guide, the recommended age for \${movie.Title} is \${recommendedAge}. \${ageSummary}\` 
            }
        });
    }`;
    
    // 3. The Logic to Inject into the Visual UI Generator
    const uiInjection = `
    // 🔥 DYNAMIC RECOMMENDED AGE FAQ INJECTION (UI)
    const tmdbIdKeyStr = tmdbId?.toString();
    const timestampDataUI = tmdbIdKeyStr ? masterTimestamps[tmdbIdKeyStr] : null;
    const recommendedAgeUI = timestampDataUI?.Age;
    const ageSummaryUI = timestampDataUI?.Summary;

    if (recommendedAgeUI && ageSummaryUI) {
        staticFaqs.unshift({
            question: \`What is the suitable age to watch \${movieTitle}?\`,
            answer: \`According to Filmiway's Parents Guide, the recommended age for \${movieTitle} is \${recommendedAgeUI}. \${ageSummaryUI}\`
        });
    }`;

    // 4. Inject SEO Logic safely into generateCleanMovieSchema
    if (content.includes('export const generateCleanMovieSchema')) {
        const parts = content.split('export const generateCleanMovieSchema');
        if (parts.length === 2) {
            if (parts[1].includes('if (intensityScenes.length > 0)')) {
                parts[1] = parts[1].replace(/(\s*if \(\s*intensityScenes\.length > 0\s*\))/, `\n${schemaInjection}$1`);
            } else if (parts[1].includes('if (heavyScenes.length > 0)')) {
                parts[1] = parts[1].replace(/(\s*if \(\s*heavyScenes\.length > 0\s*\))/, `\n${schemaInjection}$1`);
            }
            content = parts[0] + 'export const generateCleanMovieSchema' + parts[1];
        }
    }

    // 5. Inject UI Logic safely into getVisibleMovieFAQs
    if (content.includes('export const getVisibleMovieFAQs')) {
        const parts = content.split('export const getVisibleMovieFAQs');
        if (parts.length === 2) {
            parts[1] = parts[1].replace(/(\s*const heavyScenes = sensitiveScenes\.filter)/, `\n${uiInjection}$1`);
            content = parts[0] + 'export const getVisibleMovieFAQs' + parts[1];
        }
    }

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        updatedCount++;
        console.log(`✅ Fixed & Updated: ${file}`);
    }
});

console.log(`\n🎉 Success! Re-injected Age FAQs correctly in \${updatedCount} collection files!`);