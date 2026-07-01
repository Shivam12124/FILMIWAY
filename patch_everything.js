const fs = require('fs');

const dataFile = 'utils/eroticRomanceMovieData.js';
let code = fs.readFileSync(dataFile, 'utf8');

// 1. COMPLETE_MOVIE_DATABASE
const dbEndIndex = code.indexOf('];', code.indexOf('export const COMPLETE_MOVIE_DATABASE'));
if (dbEndIndex !== -1) {
    const insertDb = `    ,{ "tmdbId":     258216, "imdbID": "tt1937390", "Title": "Nymphomaniac: Vol. I", "year": 2013, "genre": "Drama", "runtime": 117, "rank": "BONUS" }\n`;
    code = code.substring(0, dbEndIndex) + insertDb + code.substring(dbEndIndex);
}

// 2. STRATEGIC_QUOTES
const quotesEndIndex = code.indexOf('};', code.indexOf('export const STRATEGIC_QUOTES'));
if (quotesEndIndex !== -1) {
    const insertQuote = `,\n        258216: "Perhaps the only difference between me and other people is that I've always demanded more from the sunset."\n`;
    code = code.substring(0, quotesEndIndex) + insertQuote + code.substring(quotesEndIndex);
}

// 3. COMPLETE_MOVIE_DATA
const compStartIndex = code.indexOf('4478: createRomanceData');
const compEndIndex = code.indexOf('};', compStartIndex);
if (compStartIndex !== -1 && compEndIndex !== -1) {
    const before = code.substring(0, compEndIndex - 5);
    const exactEnd = code.indexOf('})', before.length);
    if (exactEnd !== -1) {
        const insertion = `,\n        258216: createRomanceData({ // Nymphomaniac: Vol. I
        eroticTension: 98, complexityLevel: "EXTREME", 
        dominantColor: "#52525b", rating: 6.9, criticsScore: 76, audienceScore: 68, director: "Lars von Trier", 
        cast: ["Charlotte Gainsbourg", "Stellan Skarsgård", "Stacy Martin"], boxOffice: "$13.5 million", budget: "€4.7 million", 
        dna: { "Drama": 80, "Romance": 20 },
        scenes: [
            { time: 15, intensity: 70, label: "The Train Journey" }, 
            { time: 45, intensity: 95, label: "The Secret Club" }, 
            { time: 80, intensity: 100, label: "Jerome" }, 
            { time: 110, intensity: 85, label: "The Hospital" } 
        ],
        synopsis: "A self-diagnosed nymphomaniac recounts her erotic experiences to the man who saved her after a beating. The film explores female sexuality, desire, and psychological trauma through a highly explicit, chapter-based narrative.",
        themes: ["Sexual Addiction", "Psychological Trauma", "Human Connection"]
    })`;
        code = code.substring(0, exactEnd + 2) + insertion + code.substring(exactEnd + 2);
    }
}

fs.writeFileSync(dataFile, code);
console.log("Updated eroticRomanceMovieData.js successfully!");
