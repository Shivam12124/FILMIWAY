const https = require('https');

function fetchUrl(url) {
    return new Promise((resolve, reject) => {
        const options = {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            }
        };
        https.get(url, options, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
}

async function run() {
    try {
        console.log("Fetching sceneradar.com homepage...");
        const homeHtml = await fetchUrl('https://sceneradar.com/');
        const titleMatch = homeHtml.match(/<title>([^<]+)<\/title>/i);
        const descMatch = homeHtml.match(/<meta\s+name="description"\s+content="([^"]+)"/i) || homeHtml.match(/<meta\s+content="([^"]+)"\s+name="description"/i);
        console.log("Homepage Title:", titleMatch ? titleMatch[1] : "N/A");
        console.log("Homepage Description:", descMatch ? descMatch[1] : "N/A");

        console.log("\nFetching sceneradar.com/movie/872585 (Oppenheimer)...");
        const oppHtml = await fetchUrl('https://sceneradar.com/movie/872585');
        const oppTitle = oppHtml.match(/<title>([^<]+)<\/title>/i);
        const oppDesc = oppHtml.match(/<meta\s+name="description"\s+content="([^"]+)"/i) || oppHtml.match(/<meta\s+content="([^"]+)"\s+name="description"/i);
        console.log("Oppenheimer Title:", oppTitle ? oppTitle[1] : "N/A");
        console.log("Oppenheimer Description:", oppDesc ? oppDesc[1] : "N/A");
    } catch (err) {
        console.error("Error fetching SceneRadar:", err);
    }
}

run();
