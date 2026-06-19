const https = require('https');

function fetchGoogle(url) {
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
    console.log("=== SAFESEARCH BANNED CHECK ===");
    
    // Check 1: SafeSearch ON ("safe=active")
    const urlSafeOn = 'https://www.google.com/search?q=site:filmiway.com+the+handmaiden&safe=active';
    // Check 2: SafeSearch OFF ("safe=images" or safe not set)
    const urlSafeOff = 'https://www.google.com/search?q=site:filmiway.com+the+handmaiden&safe=images'; // safe=images means Off in Google URL params

    try {
        console.log("Fetching Google Search with SafeSearch ON...");
        const htmlOn = await fetchGoogle(urlSafeOn);
        const hasOnResults = htmlOn.includes('filmiway.com/movie/the-handmaiden');
        
        console.log("Fetching Google Search with SafeSearch OFF...");
        const htmlOff = await fetchGoogle(urlSafeOff);
        const hasOffResults = htmlOff.includes('filmiway.com/movie/the-handmaiden');

        console.log("\nResults for 'site:filmiway.com the handmaiden':");
        console.log(`- SafeSearch ON:  ${hasOnResults ? "✅ FOUND" : "❌ HIDDEN / FILTERED"}`);
        console.log(`- SafeSearch OFF: ${hasOffResults ? "✅ FOUND" : "❌ HIDDEN"}`);
        
        if (!hasOnResults && hasOffResults) {
            console.log("\n⚠️ CONFIRMED: Google SafeSearch has filtered (banned) the Handmaiden page from showing in standard search results.");
        } else if (hasOnResults && hasOffResults) {
            console.log("\n✅ CLEAN: Page is visible under both SafeSearch settings.");
        } else {
            console.log("\n❓ Unable to determine (both returned negative or Google blocked requests).");
        }
    } catch (err) {
        console.error("Error checking SafeSearch status:", err);
    }
}

run();
