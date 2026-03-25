const fs = require('fs');
const path = require('path');

const UTILS_DIR = path.join(__dirname, '../utils');
let fixedCount = 0;

function fixFile(filePath) {
    if (!filePath.endsWith('Data.js')) return;

    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // Skip if it doesn't have the main database
    if (!content.includes('COMPLETE_MOVIE_DATABASE')) return;

    // Skip if it ALREADY has getVisibleMovieFAQs (prevents duplicates)
    if (content.includes('export const getVisibleMovieFAQs')) return;

    // Find the specific FAQ object name for this file (e.g., PARAMOUNT_HORROR_MOVIE_FAQS)
    const faqMatch = content.match(/export const ([A-Z0-9_]+FAQS)\s*=/);
    if (!faqMatch) {
        console.log(`⚠️ Skipped ${path.basename(filePath)} (No FAQ object found)`);
        return;
    }

    const faqObjectName = faqMatch[1];

    // Inject getSensitiveContentTypes if it's missing
    if (!content.includes('export const getSensitiveContentTypes')) {
        content += `\n
export const getSensitiveContentTypes = (tmdbId) => {
    const sensitiveData = typeof SENSITIVE_TIMELINES !== 'undefined' ? SENSITIVE_TIMELINES[tmdbId] : null;
    if (!sensitiveData?.scenes?.length) return null;
    const types = new Set();
    sensitiveData.scenes.forEach(scene => {
        const lowerType = scene.type?.toLowerCase() || '';
        if (lowerType.includes('sex') || lowerType.includes('explicit')) types.add('sexual content');
        if (lowerType.includes('partial nudity')) types.add('partial nudity');
        else if (lowerType.includes('nudity')) types.add('nudity');
        if (lowerType.includes('suggestive') || lowerType.includes('lingerie') || lowerType.includes('bikini')) types.add('suggestive clothing');
    });
    return Array.from(types);
};\n`;
    }

    // Inject the missing getVisibleMovieFAQs function
    content += `\n
// 🔥 FRONTEND UI SYNC (Injected by script)
export const getVisibleMovieFAQs = (movieTitle, tmdbId, currentRuntime = "Official") => {
    const staticFaqs = typeof ${faqObjectName} !== 'undefined' && ${faqObjectName}[movieTitle] ? [...${faqObjectName}[movieTitle]] : [];
    const sensitiveScenes = typeof SENSITIVE_TIMELINES !== 'undefined' ? (SENSITIVE_TIMELINES[tmdbId]?.scenes || []) : [];
    const movieInfo = typeof COMPLETE_MOVIE_DATA !== 'undefined' ? COMPLETE_MOVIE_DATA[tmdbId] : null;
    const intensityScenes = movieInfo?.scenes || [];

    const dbMovie = typeof COMPLETE_MOVIE_DATABASE !== 'undefined' ? COMPLETE_MOVIE_DATABASE.find(m => m.tmdbId === tmdbId) : null;
    let finalRuntime = currentRuntime !== "Official" ? currentRuntime : (dbMovie?.runtime ? \`\${dbMovie.runtime} min\` : "Official");
    if (typeof finalRuntime === 'number') finalRuntime = \`\${finalRuntime} min\`;

    if (intensityScenes.length > 0) {
        const uiIntensityList = intensityScenes.map(s => \`• Minute \${s.time} - \${s.label} (Intensity: \${s.intensity}/100)\`).join('\\n');
        staticFaqs.unshift({
            question: \`What are the most intense scenes in \${movieTitle}?\`,
            answer: \`According to the Filmiway Intensity metric, \${movieTitle} peaks at the following moments:\\n\\n\${uiIntensityList}\`
        });
    }

    const heavyScenes = sensitiveScenes.filter(s => {
        const t = s.type?.toLowerCase() || '';
        return t.includes('sex') || t.includes('nudity') || t.includes('explicit') || t.includes('suggestive') || t.includes('lingerie') || t.includes('bikini');
    });

    if (heavyScenes.length > 0) {
        const typesArray = typeof getSensitiveContentTypes !== 'undefined' ? getSensitiveContentTypes(tmdbId) : ['mature content'];
        const typesString = typesArray ? typesArray.join(' and ') : 'mature content';
        const sceneCount = heavyScenes.length;
        
        let totalSeconds = 0;
        heavyScenes.forEach(scene => {
            if (scene.start && scene.end) {
                const parseTime = (t) => {
                    const parts = t.split(':').map(Number);
                    if (parts.length === 3) return (parts[0] * 3600) + (parts[1] * 60) + (parts[2] || 0);
                    if (parts.length === 2) return (parts[0] * 60) + (parts[1] || 0);
                    return 0;
                };
                const startSec = parseTime(scene.start);
                const endSec = parseTime(scene.end);
                if (endSec > startSec) totalSeconds += (endSec - startSec);
            }
        });
        const mins = Math.floor(totalSeconds / 60);
        const secs = totalSeconds % 60;
        let totalSkipTime = "< 1 min";
        if (totalSeconds > 0) {
            if (mins === 0) totalSkipTime = \`\${secs} sec\`;
            else totalSkipTime = secs > 0 ? \`\${mins} min \${secs} sec\` : \`\${mins} min\`;
        }

        const firstTimestamp = heavyScenes[0].start;
        const firstSeverity = heavyScenes[0].severity || 'Moderate';
        
        const severities = heavyScenes.map(s => (s.severity || 'Moderate').toLowerCase());
        const extremeCount = severities.filter(s => s === 'extreme').length;
        let overallSeverity = 'Mild';
        if (extremeCount >= 2) overallSeverity = 'Extreme';
        else if (severities.includes('high') || extremeCount === 1) overallSeverity = 'High';
        else if (severities.includes('moderate')) overallSeverity = 'Moderate';

        const uiDetailedList = heavyScenes.map(s => {
            const timeRange = s.end ? \`\${s.start}–\${s.end}\` : s.start;
            const fullType = s.severity ? \`\${s.type || 'Mature Content'}, \${s.severity}\` : (s.type || 'Mature Content');
            return \`• \${timeRange} (\${fullType})\`;
        }).join('\\n');
        
        const startTimesList = heavyScenes.map(s => s.start).join(', ');

        staticFaqs.unshift(
            {
                question: \`Does \${movieTitle} have sex scenes or nudity?\`,
                answer: \`Yes. \${movieTitle} contains \${sceneCount} scenes of \${typesString}. Exact timestamps:\\n\\n\${uiDetailedList}\\n\\nManually verified frame by frame by Filmiway editors for the \${finalRuntime} runtime.\`
            },
            {
                question: \`What time does nudity appear in \${movieTitle} and how do I skip it?\`,
                answer: \`Explicit content first appears at \${firstTimestamp} (\${firstSeverity}). Total time to skip: \${totalSkipTime} across \${sceneCount} scenes. Skip timestamps: \${startTimesList}. Verified for the \${finalRuntime} version.\`
            },
            {
                question: \`Is \${movieTitle} safe to watch with family?\`,
                answer: \`No. \${movieTitle} contains \${overallSeverity} severity scenes and is not recommended for children. Adults can use Filmiway's timestamps to skip all \${sceneCount} scenes.\`
            }
        );
    } else {
        staticFaqs.unshift(
            {
                question: \`Does \${movieTitle} have sex scenes or nudity?\`,
                answer: \`No. Filmiway editors have manually verified that \${movieTitle} is free of explicit sex scenes and nudity.\`
            },
            {
                question: \`Is \${movieTitle} safe to watch with family?\`,
                answer: \`Yes, regarding explicit sexual content. Filmiway has confirmed 0 scenes of nudity, sexual content, or explicit scenes in the \${finalRuntime} runtime.\`
            }
        );
    }

    return staticFaqs;
};
`;

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Injected getVisibleMovieFAQs into: ${path.basename(filePath)}`);
    fixedCount++;
}

function walk(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            walk(filePath);
        } else {
            fixFile(filePath);
        }
    });
}

console.log('🚀 Injecting missing getVisibleMovieFAQs exports into Data files...');
walk(UTILS_DIR);
console.log(`\n🎉 Done! Fixed ${fixedCount} data files.`);