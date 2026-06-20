const fs = require('fs');
const path = require('path');

const UTILS_DIR = path.join(__dirname, '../utils');

const TARGET_STRING_1 = 'const sensitiveScenes = SENSITIVE_TIMELINES[tmdbId]?.scenes || [];';
const TARGET_STRING_2 = "const sensitiveScenes = typeof SENSITIVE_TIMELINES !== 'undefined' ? (SENSITIVE_TIMELINES[tmdbId]?.scenes || []) : [];";

const REPLACEMENT_STRING = `const masterScenes = masterTimestamps[String(tmdbId)]?.scenes || [];
    const sensitiveScenes = [...((typeof SENSITIVE_TIMELINES !== 'undefined' ? SENSITIVE_TIMELINES[tmdbId]?.scenes : null) || [])];
    
    const parseTimeToSeconds = (t) => {
        if (!t) return -1;
        const parts = String(t).trim().split(':').map(Number);
        if (parts.length === 3) return (parts[0] * 3600) + (parts[1] * 60) + (parts[2] || 0);
        if (parts.length === 2) return (parts[0] * 60) + (parts[1] || 0);
        return Number(t) || 0;
    };

    masterScenes.forEach(mScene => {
        const mStartSec = parseTimeToSeconds(mScene.start);
        const exists = sensitiveScenes.some(s => {
            const sStartSec = parseTimeToSeconds(s.start);
            if (sStartSec !== -1 && mStartSec !== -1) {
                return sStartSec === mStartSec;
            }
            return s.start && s.start.trim() === mScene.start && mScene.start.trim();
        });
        if (!exists) {
            sensitiveScenes.push(mScene);
        }
    });`;

function patchFiles() {
    const files = fs.readdirSync(UTILS_DIR).filter(f => f.endsWith('.js'));
    let patchedCount = 0;

    files.forEach(file => {
        const filePath = path.join(UTILS_DIR, file);
        const content = fs.readFileSync(filePath, 'utf8');

        if (!content.includes('COMPLETE_MOVIE_DATABASE') || !content.includes('getVisibleMovieFAQs')) {
            return;
        }

        if (content.includes(TARGET_STRING_1)) {
            const updatedContent = content.replace(TARGET_STRING_1, REPLACEMENT_STRING);
            fs.writeFileSync(filePath, updatedContent, 'utf8');
            console.log(`✅ Patched: ${file}`);
            patchedCount++;
        } else if (content.includes(TARGET_STRING_2)) {
            const updatedContent = content.replace(TARGET_STRING_2, REPLACEMENT_STRING);
            fs.writeFileSync(filePath, updatedContent, 'utf8');
            console.log(`✅ Patched: ${file}`);
            patchedCount++;
        } else if (content.includes('masterScenes = masterTimestamps')) {
            console.log(`ℹ️ Already Patched: ${file}`);
        } else {
            console.log(`⚠️ Target string not found in: ${file}`);
        }
    });

    console.log(`\n🎉 Done! Total patched files: ${patchedCount}`);
}

patchFiles();
