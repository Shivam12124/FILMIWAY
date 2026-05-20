const fs = require('fs');
const path = require('path');

// Point to your utils directory where all the collection files live
const utilsDir = path.join(__dirname, 'utils');
const files = fs.readdirSync(utilsDir).filter(f => f.endsWith('Data.js') || f.endsWith('Movies.js'));

let updatedCount = 0;

files.forEach(file => {
    const filePath = path.join(utilsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // 1. Add the masterTimestamps import if the file doesn't already have it
    if (!content.includes("import masterTimestamps from './masterTimestamps.json';")) {
        content = "import masterTimestamps from './masterTimestamps.json';\n" + content;
        modified = true;
    }

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
    
    // Safely find the exact spot to inject the SEO logic
    if (!content.includes("DYNAMIC RECOMMENDED AGE FAQ INJECTION (SEO SCHEMA)")) {
        const schemaRegex = /(const schemaFaqs = staticFaqs\.map\([\s\S]*?\}\)\);)/;
        if (schemaRegex.test(content)) {
            content = content.replace(schemaRegex, `$1\n${schemaInjection}\n`);
            modified = true;
        }
    }

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
    }
`;
    // Safely find the exact spot to inject the UI logic
    if (!content.includes("DYNAMIC RECOMMENDED AGE FAQ INJECTION (UI)")) {
        const uiRegex = /(const heavyScenes = sensitiveScenes\.filter\(s => \{)/;
        if (uiRegex.test(content)) {
            content = content.replace(uiRegex, `${uiInjection}\n    $1`);
            modified = true;
        }
    }

    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        updatedCount++;
        console.log(`✅ Automatically Updated: ${file}`);
    }
});

console.log(`\n🎉 Success! Added dynamic Age FAQ logic to ${updatedCount} collection files!`);
