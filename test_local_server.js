const http = require('http');
const masterDatabase = require('./utils/masterDatabase.json');

async function checkUrl(slug) {
    return new Promise((resolve) => {
        const url = `http://localhost:3000/movie/${slug}`;
        http.get(url, (res) => {
            resolve(res.statusCode);
        }).on('error', (err) => {
            resolve(`ERROR: ${err.message}`);
        });
    });
}

async function run() {
    console.log("Waiting 5 seconds for local server to be fully ready...");
    await new Promise(r => setTimeout(r, 5000));

    console.log("Starting scan of the remaining movie slugs...");
    let successCount = 0;
    let failCount = 0;
    let redirectCount = 0;

    const movies = masterDatabase.slice(100);
    for (const movie of movies) {
        const slug = movie.slug || (movie.Title || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
        const status = await checkUrl(slug);
        if (status === 200) {
            successCount++;
        } else if (status === 301 || status === 302 || status === 307 || status === 308) {
            redirectCount++;
            console.log(`REDIRECT ${status}: /movie/${slug}`);
        } else {
            failCount++;
            console.log(`FAILED ${status}: /movie/${slug} (Movie: ${movie.Title})`);
        }
    }
    console.log(`Scan completed. Success: ${successCount}, Redirects: ${redirectCount}, Failures: ${failCount}`);
}

run();
