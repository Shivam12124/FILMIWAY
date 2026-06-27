const db = require('./utils/masterDatabase.json');
const timestamps = require('./utils/masterTimestamps.json');

const results = [];
db.forEach(movie => {
    const tmdbId = String(movie.tmdbId);
    if (timestamps[tmdbId]) {
        const scenes = timestamps[tmdbId].scenes || [];
        const heavyScenes = scenes.filter(s => {
            const t = (s.type || '').toLowerCase();
            return t.includes('sex') || t.includes('nudity') || t.includes('explicit');
        });
        if (heavyScenes.length > 0) {
            results.push({
                title: movie.Title,
                year: movie.Year,
                tmdbId: tmdbId,
                heavySceneCount: heavyScenes.length
            });
        }
    }
});
results.sort((a, b) => b.heavySceneCount - a.heavySceneCount);
console.log('Top 30 movies with most erotic/nude scenes:');
results.slice(0, 30).forEach(r => console.log(r.title + " (" + r.year + ") - " + r.heavySceneCount + " scenes"));
