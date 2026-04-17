const fs = require('fs');
const path = require('path');
const https = require('https');
const { loadEnvConfig } = require('@next/env');

// Automatically load environment variables from .env / .env.local
loadEnvConfig(process.cwd());

const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const UTILS_DIR = path.join(__dirname, '../utils');
const DATA_DIR = path.join(__dirname, '../data');
const OUTPUT_FILE = path.join(DATA_DIR, 'tmdbCache.json');

const fetchTMDB = (url) => {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                if (res.statusCode === 200) {
                    try {
                        resolve(JSON.parse(data));
                    } catch(e) {
                        resolve(null);
                    }
                } else {
                    resolve(null);
                }
            });
        }).on('error', reject);
    });
};

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const formatMoney = (amount) => {
    if (!amount || amount === 0) return 'N/A';
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(amount);
};

async function buildCache() {
    console.log('🚀 Starting Deep TMDB Data Caching Process...');
    
    if (!fs.existsSync(DATA_DIR)) {
        fs.mkdirSync(DATA_DIR);
    }

    // 1. Gather all unique movies from your database
    const files = fs.readdirSync(UTILS_DIR).filter(f => f.endsWith('Data.js'));
    const uniqueMovies = new Map();

    files.forEach(file => {
        const content = fs.readFileSync(path.join(UTILS_DIR, file), 'utf8');
        const lines = content.split('\n');
        lines.forEach(line => {
            const tmdbMatch = line.match(/['"]?(?:tmdbId|tmdbID|id)['"]?\s*:\s*(\d+)/i);
            const imdbMatch = line.match(/['"]?(?:imdbID|imdbId)['"]?\s*:\s*['"](tt\d+)['"]/i);
            if (tmdbMatch && imdbMatch) {
                uniqueMovies.set(imdbMatch[1], tmdbMatch[1]);
            }
        });
    });

    console.log(`📦 Found ${uniqueMovies.size} unique movies to process.`);

    // 2. Load existing cache
    let cache = {};
    if (fs.existsSync(OUTPUT_FILE)) {
        cache = JSON.parse(fs.readFileSync(OUTPUT_FILE, 'utf8'));
        console.log(`📂 Loaded existing cache with ${Object.keys(cache).length} movies.`);
    }

    // 3. Fetch rich data from TMDB
    let newFetches = 0;
    for (const [imdbID, tmdbId] of uniqueMovies.entries()) {
        // We force a re-fetch if they don't have the new rich data fields
        if (!cache[imdbID] || !cache[imdbID].overview || !cache[imdbID].director) {
            process.stdout.write(`Fetching rich data for ${imdbID} (TMDB: ${tmdbId})... `);
            
            try {
                // We ask for credits and release_dates to get Cast, Director, and Age Rating
                const data = await fetchTMDB(`https://api.themoviedb.org/3/movie/${tmdbId}?api_key=${TMDB_API_KEY}&append_to_response=credits,release_dates`);
                
                if (data) {
                    // Find US Age Rating
                    let ageRating = 'Not Rated';
                    const usRelease = data.release_dates?.results?.find(r => r.iso_3166_1 === 'US');
                    if (usRelease && usRelease.release_dates) {
                        const ratedRelease = usRelease.release_dates.find(r => r.certification && r.certification !== '');
                        if (ratedRelease) ageRating = ratedRelease.certification;
                    }

                    cache[imdbID] = {
                        poster_path: data.poster_path,
                        backdrop_path: data.backdrop_path,
                        runtime: data.runtime,
                        release_date: data.release_date,
                        overview: data.overview,
                        ageRating: ageRating,
                        director: data.credits?.crew?.find(c => c.job === 'Director')?.name || 'Unknown',
                        cast: data.credits?.cast?.slice(0, 3).map(c => c.name) || [], // Top 3 actors
                        budget: formatMoney(data.budget),
                        revenue: formatMoney(data.revenue)
                    };
                    console.log('✅ Success');
                    newFetches++;
                } else {
                    console.log('❌ Failed (Not Found)');
                }
            } catch (err) {
                console.log(`❌ Error: ${err.message}`);
            }

            await sleep(50); // Respect TMDB rate limits
        }
    }

    // 4. Save the massive JSON dictionary
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(cache, null, 2), 'utf8');
    console.log(`\n🎉 Done! Fetched/Updated ${newFetches} movies. Total movies in cache: ${Object.keys(cache).length}`);
    console.log(`💾 Cache saved to: ${OUTPUT_FILE}`);
}

if (!TMDB_API_KEY) {
    console.error("❌ TMDB_API_KEY is missing! Make sure it is set in your .env or .env.local file.");
} else {
    buildCache();
}