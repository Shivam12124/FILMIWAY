const fs = require('fs');
const path = require('path');

const utilsDir = path.join(__dirname, '..', 'utils');

function injectLanguageViolenceFAQs() {
    const files = fs.readdirSync(utilsDir).filter(f => f.endsWith('.js'));
    let updatedCount = 0;

    files.forEach(file => {
        const filePath = path.join(utilsDir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;

        // Skip if already injected to prevent duplicates
        if (content.includes("Does ${movie.Title} have profanity")) return;

        // 1. Inject into generateCleanMovieSchema (For Google Bots & Featured Snippets)
        const schemaTarget = "const faqSchema = {";
        if (content.includes(schemaTarget)) {
            const schemaInjection = `
    // ⚡ DYNAMIC LANGUAGE & VIOLENCE FAQS (SEO SCHEMA)
    const languageScene = sensitiveScenes.find(s => s.type?.toLowerCase().includes('profanity') || s.type?.toLowerCase().includes('language'));
    if (languageScene && languageScene.description) {
        schemaFaqs.push({
            '@type': 'Question',
            'name': \`Does \${movie.Title} have profanity?\`,
            'acceptedAnswer': {
                '@type': 'Answer',
                'text': \`According to our Parents Guide, \${movie.Title} has a \${languageScene.severity || 'Moderate'} severity rating for profanity. \${languageScene.description}\`
            }
        });
    }

    const violenceScene = sensitiveScenes.find(s => s.type?.toLowerCase().includes('violence') || s.type?.toLowerCase().includes('gore'));
    if (violenceScene && violenceScene.description) {
        schemaFaqs.push({
            '@type': 'Question',
            'name': \`Does \${movie.Title} have Violence & Gore scenes?\`,
            'acceptedAnswer': {
                '@type': 'Answer',
                'text': \`Our Parents Guide rates the Violence & Gore in \${movie.Title} as \${violenceScene.severity || 'Moderate'}. \${violenceScene.description}\`
            }
        });
    }

    const faqSchema = {`;
            content = content.replace(schemaTarget, schemaInjection);
            modified = true;
        }

        // 2. Inject into getVisibleMovieFAQs (For Human Users / UI Accordion)
        const uiTarget = "return staticFaqs;";
        if (content.includes(uiTarget) && modified) {
            const uiInjection = `
    // ⚡ DYNAMIC LANGUAGE & VIOLENCE FAQS (FRONTEND UI)
    const languageScene = sensitiveScenes.find(s => s.type?.toLowerCase().includes('profanity') || s.type?.toLowerCase().includes('language'));
    if (languageScene && languageScene.description) {
        staticFaqs.push({
            question: \`Does \${movieTitle} have profanity?\`,
            answer: \`According to our Parents Guide, \${movieTitle} has a \${languageScene.severity || 'Moderate'} severity rating for profanity. \${languageScene.description}\`
        });
    }

    const violenceScene = sensitiveScenes.find(s => s.type?.toLowerCase().includes('violence') || s.type?.toLowerCase().includes('gore'));
    if (violenceScene && violenceScene.description) {
        staticFaqs.push({
            question: \`Does \${movieTitle} have Violence & Gore scenes?\`,
            answer: \`Our Parents Guide rates the Violence & Gore in \${movieTitle} as \${violenceScene.severity || 'Moderate'}. \${violenceScene.description}\`
        });
    }

    return staticFaqs;`;
            const lastIndex = content.lastIndexOf(uiTarget);
            if (lastIndex !== -1) {
                content = content.substring(0, lastIndex) + uiInjection + content.substring(lastIndex + uiTarget.length);
            }
        }

        if (modified) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`✅ Injected Language & Violence FAQs into: ${file}`);
            updatedCount++;
        }
    });

    console.log(`\n🎉 Process complete! Injected dynamic Language & Violence FAQs into ${updatedCount} data files.`);
}

injectLanguageViolenceFAQs();