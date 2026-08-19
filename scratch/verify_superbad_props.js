const fs = require('fs');
const path = require('path');

const masterDatabase = JSON.parse(fs.readFileSync(path.join(__dirname, '../utils/masterDatabase.json'), 'utf8'));
const masterTimestamps = JSON.parse(fs.readFileSync(path.join(__dirname, '../utils/masterTimestamps.json'), 'utf8'));

const superbadMovie = masterDatabase.find(m => m.slug === 'superbad');
const rawSensitiveData = masterTimestamps[String(superbadMovie.tmdbId)];

const VERIFIED_PARENTS_GUIDE_IDS = new Set([
    '8363', 'tt0829482'
]);

const isVerifiedParentsGuideMovie = VERIFIED_PARENTS_GUIDE_IDS.has(String(superbadMovie.imdbID)) || 
                                   VERIFIED_PARENTS_GUIDE_IDS.has(String(superbadMovie.tmdbId));

const baseScenes = rawSensitiveData ? (rawSensitiveData.scenes || []) : [];
const resolvedSensitiveScenes = baseScenes.filter(scene => {
    if (scene.start && scene.start.trim() !== '') return true;

    const type = (scene.type || '').toLowerCase();
    const isViolenceOrProfanity = type.includes('violence') || type.includes('gore') || type.includes('profanity') || type.includes('language') || type.includes('swearing');

    if (isViolenceOrProfanity) {
        return isVerifiedParentsGuideMovie;
    }

    return true;
});

console.log('Is Superbad Verified Parents Guide Movie?:', isVerifiedParentsGuideMovie);
console.log('Total Resolved Sensitive Scenes:', resolvedSensitiveScenes.length);
resolvedSensitiveScenes.forEach((s, idx) => {
    console.log(`${idx + 1}. Type: "${s.type}" | Timestamp: "${s.start || 'None'}" | Severity: "${s.severity}"`);
});
