const fs = require('fs');
const http = require('http');

const urlsToTest = [
    '/movie/malena',
    '/movie/basic-instinct',
    '/movie/interstellar',
    '/movie/brotherhood-of-the-wolf',
    '/movie/the-matrix',
    '/movie/inception',
    '/movie/se7en',
    '/movie/the-wolf-of-wall-street'
];

async function checkUrl(path) {
    return new Promise((resolve) => {
        http.get('http://localhost:3000' + path, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                if (res.statusCode !== 200) {
                    console.log(`❌ ${path} - Failed with status ${res.statusCode}`);
                    return resolve(false);
                }
                if (data.includes('[DYNAMIC_SCORE]')) {
                    console.log(`❌ ${path} - Leaked [DYNAMIC_SCORE]`);
                    return resolve(false);
                }
                
                // Try to find the dynamically generated score
                const match = data.match(/(\d+\/10) \(([^)]+)\) Family Safety Score/);
                if (match) {
                    console.log(`✅ ${path} - Score: ${match[1]} (${match[2]})`);
                } else {
                    console.log(`⚠️ ${path} - Passed, but no Dynamic Score format found.`);
                }
                resolve(true);
            });
        }).on('error', (err) => {
            console.log(`❌ ${path} - Server Error: ${err.message}`);
            resolve(false);
        });
    });
}

async function run() {
    console.log("Starting cross-check...");
    let allPassed = true;
    for (const url of urlsToTest) {
        const passed = await checkUrl(url);
        if (!passed) allPassed = false;
    }
    console.log(allPassed ? "\\nAll tests passed successfully!" : "\\nSome tests failed.");
}

run();
