const masterDatabase = require('./utils/masterDatabase.json');
const tmdbCache = require('./data/tmdbCache.json');
const { getPrimaryCollectionForMovie, COLLECTIONS } = require('./data/collections');

// Duplicate the logic of getStaticProps
function testGetStaticProps(slug) {
    const baseMovie = masterDatabase.find((m) => {
        const safeSlug = m.slug || (m.Title || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
        return safeSlug.toLowerCase().trim() === slug.toLowerCase().trim();
    }) || null;
    if (!baseMovie) {
        throw new Error(`Movie not found for slug: ${slug}`);
    }
    
    const cacheData = tmdbCache[baseMovie.imdbID] || {};
    
    let primarySlug = getPrimaryCollectionForMovie(baseMovie.imdbID);
    
    if (!primarySlug || (baseMovie.imdbID === 'tt33397980' && primarySlug !== 'best-enemies-to-lovers-movies')) {
        const sourceMap = {
            'enemiesToLoversMovieData.js': 'best-enemies-to-lovers-movies',
            'raunchyComedyMovieData.js': 'best-raunchy-comedy-movies'
        };
        if (baseMovie.sourceFile && sourceMap[baseMovie.sourceFile]) {
            primarySlug = sourceMap[baseMovie.sourceFile];
        }
    }
    const primaryTitle = primarySlug && COLLECTIONS[primarySlug] ? COLLECTIONS[primarySlug].title : null;

    let collectionData = require('./utils/movieData'); // Fallback
    switch(primarySlug) {
        case 'best-survival-movies': collectionData = require('./utils/survivalMovieData'); break;
        case 'movies-like-the-matrix': collectionData = require('./utils/matrixMovieData'); break;
        case 'movies-like-se7en': collectionData = require('./utils/se7enMovieData'); break;
        case 'movies-like-parasite': collectionData = require('./utils/parasiteMovieData'); break;
        case 'movies-like-oldboy': collectionData = require('./utils/oldboyMovieData'); break;
        case 'movies-like-donnie-darko': collectionData = require('./utils/donnieDarkoMovieData'); break;
        case 'movies-like-fight-club': collectionData = require('./utils/fightClubMovieData'); break;
        case 'movies-like-black-swan': collectionData = require('./utils/blackSwanMovieData'); break;
        case 'movies-like-eyes-wide-shut': collectionData = require('./utils/eyesWideShutMovieData'); break;
        case 'movies-like-the-prestige': collectionData = require('./utils/prestigeMovieData'); break;
        case 'best-erotic-thriller-movies': collectionData = require('./utils/eroticThrillerMovieData'); break;
        case 'best-erotic-romance-movies': collectionData = require('./utils/eroticRomanceMovieData'); break;
        case 'best-movies-about-greed': collectionData = require('./utils/greedMovieData'); break;
        case 'best-interstellar-movies': 
        case 'movies-like-interstellar': collectionData = require('./utils/interstellarMovieData'); break;
        case 'best-crime-thriller-movies': collectionData = require('./utils/crimeThrillerMovieData'); break;
        case 'best-war-films': collectionData = require('./utils/warFilmsMovieData'); break;
        case 'best-action-movies-on-hulu': collectionData = require('./utils/huluActionMovieData'); break;
        case 'best-romance-movies-on-hulu': collectionData = require('./utils/huluRomanceMovieData'); break;
        case 'best-horror-movies-on-hulu': collectionData = require('./utils/huluHorrorMovieData'); break;
        case 'best-comedy-movies-on-hulu': collectionData = require('./utils/huluComedyMovieData'); break;
        case 'best-sci-fi-movies-on-hulu': collectionData = require('./utils/huluSciFiMovieData'); break;
        case 'best-thriller-movies-hulu': collectionData = require('./utils/huluThrillerMovieData'); break;
        case 'best-movies-on-hulu': collectionData = require('./utils/huluBestMoviesData'); break;
        case 'best-drama-movies-on-hulu': collectionData = require('./utils/huluDramaMovieData'); break;
        case 'best-comedy-movies-on-hbo-max': collectionData = require('./utils/hboMaxComedyMovieData'); break;
        case 'best-action-movies-on-paramount-plus': collectionData = require('./utils/paramountActionMovieData'); break;
        case 'best-sci-fi-movies-on-paramount-plus': collectionData = require('./utils/paramountSciFiMovieData'); break;
        case 'best-romance-movies-on-paramount-plus': collectionData = require('./utils/paramountRomanceMovieData'); break;
        case 'best-core-drama-movies-on-paramount-plus': collectionData = require('./utils/paramountDramaMovieData'); break;
        case 'best-thriller-movies-on-paramount-plus': collectionData = require('./utils/paramountThrillerMovieData'); break;
        case 'best-family-movies-on-paramount-plus': collectionData = require('./utils/paramountFamilyMovieData'); break;
        case 'best-horror-movies-on-paramount-plus': collectionData = require('./utils/paramountHorrorMovieData'); break;
        case 'best-comedy-movies-on-paramount-plus': collectionData = require('./utils/paramountComedyMovieData'); break;
        case 'best-movies-on-paramount-plus': collectionData = require('./utils/paramountBestMoviesData'); break;
        case 'best-action-adventure-movies-on-peacock': collectionData = require('./utils/peacockActionAdventureData'); break;
        case 'best-sci-fi-movies-on-peacock': collectionData = require('./utils/peacockSciFiMovieData'); break;
        case 'best-romance-movies-on-peacock': collectionData = require('./utils/peacockRomanceMovieData'); break;
        case 'best-family-movies-on-peacock': collectionData = require('./utils/peacockFamilyMovieData'); break;
        case 'best-drama-movies-on-peacock': collectionData = require('./utils/peacockDramaMovieData'); break;
        case 'best-thriller-movies-on-peacock': collectionData = require('./utils/peacockThrillerMovieData'); break;
        case 'best-movies-on-peacock': collectionData = require('./utils/peacockBestMoviesData'); break;
        case 'best-comedy-movies-on-peacock': collectionData = require('./utils/peacockComedyMovieData'); break;
        case 'best-raunchy-comedy-movies': collectionData = require('./utils/raunchyComedyMovieData'); break;
        case 'top-10-road-trip-movies': collectionData = require('./utils/roadTripMovieData'); break;
        case 'best-thought-provoking-movies': collectionData = require('./utils/thoughtProvokingMovieData'); break;
        case 'best-neo-noir-movies': collectionData = require('./utils/neoNoirMovieData'); break;
        case 'best-action-movies': collectionData = require('./utils/bestActionMoviesData'); break;
        case 'best-true-story-movies': collectionData = require('./utils/trueStoryMovieData'); break;
        case 'best-gangster-movies-of-all-time': collectionData = require('./utils/gangsterMovieData'); break;
        case 'best-movies-of-the-decade': collectionData = require('./utils/decadeMovieData'); break;
        case 'top-10-book-adaptations': collectionData = require('./utils/bookAdaptationData'); break;
        case 'best-marriage-crisis-movies': collectionData = require('./utils/marriageCrisisMovieData'); break;
        case 'best-a24-movies': collectionData = require('./utils/a24MovieData'); break;
        case 'best-dark-comedy-movies': collectionData = require('./utils/darkComedyMovieData'); break;
        case 'best-paul-thomas-anderson-movies': collectionData = require('./utils/ptaMoviesData'); break;
        case 'movies-like-basic-instinct': collectionData = require('./utils/basicInstinctMovieData'); break;
        case 'best-enemies-to-lovers-movies': collectionData = require('./utils/enemiesToLoversMovieData'); break;
        case 'best-family-movies-on-hulu': collectionData = require('./utils/huluFamilyMovieData'); break;
        case 'best-action-movies-on-hbo-max': collectionData = require('./utils/hboActionMovieData'); break;
        case 'best-romance-movies-on-hbo-max': collectionData = require('./utils/hboMaxRomanceMovieData'); break;
        case 'best-thriller-movies-on-hbo-max': collectionData = require('./utils/hboMaxThrillerMovieData'); break;
        case 'best-family-movies-on-hbo-max': collectionData = require('./utils/hboMaxFamilyMovieData'); break;
        case 'best-sci-fi-movies-on-hbo-max': collectionData = require('./utils/hboMaxSciFiMovieData'); break;
        case 'best-horror-movies-on-hbo-max': collectionData = require('./utils/hboMaxHorrorMovieData'); break;
        case 'best-movies-on-hbo-max': collectionData = require('./utils/hboMaxBestMoviesData'); break;
        case 'best-drama-movies-on-hbo-max': collectionData = require('./utils/hboMaxDramaMovieData'); break;
        case 'best-sci-fi-movies': collectionData = require('./utils/sciFiMovieData'); break;
        case 'best-thriller-movies': collectionData = require('./utils/thrillerMovieData'); break;
        case 'best-mystery-thriller-movies': collectionData = require('./utils/mysteryThrillerMovieData'); break;
        case 'best-detective-thriller-movies': collectionData = require('./utils/detectiveThrillerMovieData'); break;
        case 'best-psychological-thriller-movies': collectionData = require('./utils/psychologicalThrillerMovieData'); break;
        case 'best-heist-thriller-movies': collectionData = require('./utils/heistThrillerMovieData'); break;
        case 'best-time-travel-movies': collectionData = require('./utils/timeTravelMovieData'); break;
        case 'best-revenge-movies': collectionData = require('./utils/revengeMovieData'); break;
        case 'top-10-jennifer-lawrence-movies': collectionData = require('./utils/jenniferLawrenceMovieData'); break;
        case 'top-10-monica-bellucci-movies': collectionData = require('./utils/monicaBellucciMovieData'); break;
    }

    const resolvedMovieInfo = collectionData?.COMPLETE_MOVIE_DATA?.[baseMovie.tmdbId] || null;
    const isTrueStory = require('./utils/trueStoryMovieData').COMPLETE_MOVIE_DATABASE.some(m => m.imdbID === baseMovie.imdbID);
    
    const masterTimestamps = require('./utils/masterTimestamps.json');
    const sensitiveData = masterTimestamps[String(baseMovie.tmdbId)] || { scenes: [] };
    const allScenes = sensitiveData.scenes || [];
    
    const parseTimeToSeconds = (t) => {
        if (!t) return -1;
        const parts = String(t).trim().split(':').map(Number);
        if (parts.length === 3) return (parts[0] * 3600) + (parts[1] * 60) + (parts[2] || 0);
        if (parts.length === 2) return (parts[0] * 60) + (parts[1] || 0);
        return Number(t) || 0;
    };

    const hardcodedScenes = collectionData?.SENSITIVE_TIMELINES?.[baseMovie.tmdbId]?.scenes || [];
    const mergedScenes = [...hardcodedScenes];
    
    allScenes.forEach(masterScene => {
        const masterStartSec = parseTimeToSeconds(masterScene.start);
        const existingIndex = mergedScenes.findIndex(s => {
            const sStartSec = parseTimeToSeconds(s.start);
            if (sStartSec !== -1 && masterStartSec !== -1) {
                return sStartSec === masterStartSec;
            }
            return s.start && s.start.trim() === masterScene.start && masterScene.start.trim();
        });
        if (existingIndex !== -1) {
            const existing = mergedScenes[existingIndex];
            if (!existing.description && masterScene.description) {
                existing.description = masterScene.description;
            }
            if (!existing.severity && masterScene.severity) {
                existing.severity = masterScene.severity;
            }
            if (masterScene.end && !existing.end) {
                existing.end = masterScene.end;
            }
            if (masterScene.type && (!existing.type || existing.type.length < masterScene.type.length)) {
                existing.type = masterScene.type;
            }
        } else {
            mergedScenes.push(masterScene);
        }
    });

    const resolvedSensitiveScenes = mergedScenes;
    const isClean = resolvedSensitiveScenes.length === 0 || resolvedSensitiveScenes.every(s => !((s.type || '').toLowerCase().match(/sex|nudity|explicit/)));
    
    let metaTitle = '';
    let metaDesc = '';
    if (isClean) {
        metaTitle = `${baseMovie.Title} Parents Guide (Clean)`;
        let currentRuntime = baseMovie.runtime || baseMovie.Runtime || "Official";
        if (typeof currentRuntime === 'number') currentRuntime = `${currentRuntime} min`;
        metaDesc = `Filmiway editors have manually verified that ${baseMovie.Title} has zero intimate scenes in its full ${currentRuntime} runtime.`;
    } else {
        metaTitle = `${baseMovie.Title} Parents Guide: Timestamps to Skip Intimate Scenes`;
        
        const sortedScenes = [...resolvedSensitiveScenes].sort((a, b) => {
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
}

// Test all slugs
let successCount = 0;
let failCount = 0;
masterDatabase.forEach(movie => {
    const slug = movie.slug || (movie.Title || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    try {
        testGetStaticProps(slug);
        successCount++;
    } catch (err) {
        failCount++;
        console.error(`FAILED Slug: ${slug}, Movie: ${movie.Title}, Error: ${err.message}`);
    }
});
console.log(`Test completed. Success: ${successCount}, Failures: ${failCount}`);
