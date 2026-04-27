const fs = require('fs');
const path = require('path');

const utilsDir = path.join(__dirname, 'utils');

console.log("🚀 Starting automatic URL replacement script...\n");

if (!fs.existsSync(utilsDir)) {
    console.error("❌ ERROR: Could not find 'utils' directory. Please ensure this script is in c:\\Users\\filmi\\FILMIWAY\\");
    process.exit(1);
}

let filesModified = 0;
const files = fs.readdirSync(utilsDir);

files.forEach(file => {
    if (file.endsWith('.js')) {
        const filePath = path.join(utilsDir, file);
        let content = fs.readFileSync(filePath, 'utf-8');
        const originalContent = content;

        // 1. Fix Schema Generators
        content = content.replace(
            /https:\/\/filmiway\.com\/movies\/\$\{collectionSlug\}\/\$\{movie\.imdbID\}/g,
            "https://filmiway.com/movie/${movie.slug || movie.Title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')}"
        );

        // 2. Fix Route Sitemaps & Breadcrumbs
        content = content.replace(
            /(\$\{baseUrl\})?\/movies\/[^\/`]+\/\$\{([^}]+)\}/g,
            (match, baseUrl, dynamicVariable) => {
                return `${baseUrl || ''}/movie/${dynamicVariable}`;
            }
        );

        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf-8');
            console.log(`✅ Patched: ${file}`);
            filesModified++;
        }
    }
});

console.log(`\n🎉 Success! Automatically patched ${filesModified} files.`);
console.log("Bing will now see your new URLs! Run 'npm run build' to verify everything works perfectly.");