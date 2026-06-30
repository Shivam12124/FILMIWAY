const fs = require('fs');
let code = fs.readFileSync('utils/monicaBellucciMovieData.js', 'utf8');

// Replace import with require
code = code.replace(/import masterTimestamps from '\.\/masterTimestamps\.json';/, 'const masterTimestamps = require("./utils/masterTimestamps.json");');

// Replace exports with module.exports
code = code.replace(/export const/g, 'const');
code = code.replace(/export default/g, 'module.exports =');
code += '\n\nmodule.exports = { getVisibleMovieFAQs };\n';

fs.writeFileSync('test_malena_temp.js', code);

try {
    const { getVisibleMovieFAQs } = require('./test_malena_temp.js');
    console.log("TESTING MALENA FAQs:");
    const faqs = getVisibleMovieFAQs("Malèna", 10867, "109 min");
    console.log("FAQ length:", faqs.length);
    faqs.forEach(f => console.log("- " + f.question));
} catch (e) {
    console.error("ERROR:", e);
}
