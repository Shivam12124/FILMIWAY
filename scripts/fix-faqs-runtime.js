// scripts/fix-faqs-runtime.js
const fs = require('fs');
const path = require('path');

const COMPONENTS_DIR = path.join(__dirname, '../components');
let fixedCount = 0;

function fixFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // --- Fix 1: Add currentRuntime to existing getVisibleMovieFAQs calls ---
    if (content.includes('getVisibleMovieFAQs')) {
        // If currentRuntime is missing, inject it
        if (!content.includes('const currentRuntime =')) {
            content = content.replace(/(const faqsFromData = getVisibleMovieFAQs)/g, 
                'const currentRuntime = movie?.Runtime || movie?.runtime || "Official";\n    $1');
        }
        
        // Upgrade 2-argument calls to 3-argument calls
        const callRegex = /getVisibleMovieFAQs\(([^,]+),\s*([^,)]+)\)/g;
        content = content.replace(callRegex, 'getVisibleMovieFAQs($1, $2, currentRuntime)');
    }

    // --- Fix 2: Convert manual array lookups to getVisibleMovieFAQs (Major SEO Fix) ---
    const importFaqRegex = /import\s*\{\s*([A-Z_]+FAQS)\s*\}\s*from\s*['"]([^'"]+)['"]/;
    const match = content.match(importFaqRegex);
    
    if (match) {
        // Swap static array import for the dynamic generator
        content = content.replace(importFaqRegex, `import { getVisibleMovieFAQs } from '$2'`);
        
        // Replace the manual ternary assignment block
        const declRegex = /const faqsFromData =[\s\S]*?\[\];/;
        content = content.replace(declRegex, 
            `const currentRuntime = movie?.Runtime || movie?.runtime || "Official";\n    const faqsFromData = getVisibleMovieFAQs(movie?.Title, movie?.tmdbId, currentRuntime);`);
    }

    // --- Fix 3: Ensure whitespace-pre-line is active for dynamic bullet points ---
    if (content.includes('{faq.answer}') && !content.includes('whitespace-pre-line')) {
        content = content.replace(/className="([^"]+)"(>\s*\{faq\.answer\})/g, 'className="$1 whitespace-pre-line"$2');
    }

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Standardized FAQ logic & runtime in: ${path.basename(filePath)}`);
        fixedCount++;
    }
}

function walk(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            walk(filePath);
        } else if (file.endsWith('SEOFAQSection.js') || file === 'SEOFAQSection.js') {
            fixFile(filePath);
        }
    });
}

console.log('🚀 Unifying Runtime Data Across All FAQ UI Components...');
walk(COMPONENTS_DIR);
console.log(`\n🎉 Done! Fixed ${fixedCount} FAQ components.`);
