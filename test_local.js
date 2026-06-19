const http = require('http');

function fetchLocal(path) {
    return new Promise((resolve, reject) => {
        http.get(`http://localhost:3000${path}`, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
}

async function run() {
    console.log("=== LOCAL METADATA VERIFICATION ===");
    try {
        console.log("Fetching /movie/the-handmaiden...");
        const htmlHandmaiden = await fetchLocal('/movie/the-handmaiden');
        const titleH = htmlHandmaiden.match(/<title>([^<]+)<\/title>/i);
        const descH = htmlHandmaiden.match(/<meta\s+name="description"\s+content="([^"]+)"/i) || htmlHandmaiden.match(/<meta\s+content="([^"]+)"\s+name="description"/i);
        console.log("\nThe Handmaiden:");
        console.log("- Title:", titleH ? titleH[1] : "N/A");
        console.log("- Description:", descH ? descH[1] : "N/A");

        console.log("\nFetching /movie/basic-instinct...");
        const htmlBasic = await fetchLocal('/movie/basic-instinct');
        const titleB = htmlBasic.match(/<title>([^<]+)<\/title>/i);
        const descB = htmlBasic.match(/<meta\s+name="description"\s+content="([^"]+)"/i) || htmlBasic.match(/<meta\s+content="([^"]+)"\s+name="description"/i);
        console.log("\nBasic Instinct:");
        console.log("- Title:", titleB ? titleB[1] : "N/A");
        console.log("- Description:", descB ? descB[1] : "N/A");
    } catch (err) {
        console.error("Local fetch failed (Is the dev server offline or on a different port?):", err.message);
    }
}

run();
