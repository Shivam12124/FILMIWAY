const masterDatabase = require('./utils/masterDatabase.json');
const tmdbCache = require('./data/tmdbCache.json');
const masterTimestamps = require('./utils/masterTimestamps.json');

function getMetadataForSlug(slug) {
    const baseMovie = masterDatabase.find(m => {
        const safeSlug = m.slug || (m.Title || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
        return safeSlug === slug;
    });

    if (!baseMovie) {
        return "Movie not found";
    }

    const cacheData = tmdbCache[baseMovie.imdbID] || {};
    const sensitiveData = masterTimestamps[String(baseMovie.tmdbId)] || { scenes: [] };
    const allScenes = sensitiveData.scenes || [];
    
    const mergedScenes = [...allScenes];
    const isClean = mergedScenes.length === 0 || mergedScenes.every(s => !((s.type || '').toLowerCase().match(/sex|nudity|explicit/)));

    let metaTitle = '';
    let metaDesc = '';

    if (isClean) {
        metaTitle = `${baseMovie.Title} Parents Guide (Clean)`;
        let currentRuntime = baseMovie.runtime || baseMovie.Runtime || "Official";
        if (typeof currentRuntime === 'number') currentRuntime = `${currentRuntime} min`;
        metaDesc = `Filmiway editors have manually verified that ${baseMovie.Title} has zero intimate scenes in its full ${currentRuntime} runtime.`;
    } else {
        metaTitle = `${baseMovie.Title} Parents Guide: Timestamps to Skip Intimate Scenes`;
        
        const sortedScenes = [...mergedScenes].sort((a, b) => {
            const aIsSevere = a.type?.toLowerCase().match(/sex|nudity|explicit/);
            const bIsSevere = b.type?.toLowerCase().match(/sex|nudity|explicit/);
            if (aIsSevere && !bIsSevere) return -1;
            if (!aIsSevere && bIsSevere) return 1;
            return 0;
        });

        const timestampList = sortedScenes.map(s => s.end ? `${s.start}-${s.end}` : s.start);
        let rawTimestampsText = '';
        if (timestampList.length >= 2) {
            rawTimestampsText = `${timestampList[0]}, ${timestampList[1]} and more`;
        } else if (timestampList.length === 1) {
            rawTimestampsText = `${timestampList[0]}`;
        }

        metaDesc = `PARENTS GUIDE: Exact skip timestamps for ${baseMovie.Title}. ${rawTimestampsText}. Skip intimate content.`;
    }

    return { title: metaTitle, description: metaDesc };
}

const testMovies = ['the-handmaiden', 'basic-instinct', 'oppenheimer', 'abominable'];
testMovies.forEach(slug => {
    console.log(`\n===================================`);
    console.log(`SLUG: ${slug}`);
    console.log(`===================================`);
    const meta = getMetadataForSlug(slug);
    console.log(`Title: ${meta.title}`);
    console.log(`Description: ${meta.description}`);
});
