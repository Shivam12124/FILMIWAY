const fs = require('fs');

const dataFile = './utils/warFilmsMovieData.js';
const routeFile = './utils/warFilmMovieRoutes.js';

// 1. Update warFilmsMovieData.js
let dataContent = fs.readFileSync(dataFile, 'utf8');

if (!dataContent.includes('"Title": "Troy"')) {
    const movieEntry = `    { "tmdbId": 652, "imdbID": "tt0332452", "Title": "Troy", "year": 2004, "genre": "Drama, War, Action", "runtime": 163, "rank": "BONUS" }\n];`;
    dataContent = dataContent.replace('];', movieEntry);
    
    // Add Quote
    const quoteEntry = `    652: "I want what all men want. I just want it more.", // Troy\n};`;
    dataContent = dataContent.replace('};', quoteEntry);
    
    // Add Sensitive Timelines (Wait, we need to match the structure for SENSITIVE_TIMELINES)
    const troyTimeline = `    // BONUS: Troy\n    652: {\n        scenes: [\n            { start: "00:06:55", end: "00:07:45", type: "Nudity", severity: "High" },\n            { start: "00:15:38", end: "00:15:50", type: "Nudity", severity: "High" },\n            { start: "00:16:17", end: "00:16:50", type: "Nudity", severity: "High" },\n            { start: "01:05:20", end: "01:06:06", type: "Partial Nudity", severity: "Mild" },\n            { start: "01:53:20", end: "01:54:21", type: "Sex & Nudity", severity: "High" }\n        ]\n    },\n`;
    const timelineRegex = /(export const SENSITIVE_TIMELINES = \{[\s\S]*?)(};)/;
    dataContent = dataContent.replace(timelineRegex, `$1${troyTimeline}$2`);
    
    // Add FAQ
    const troyFaq = `    'Troy': [\n        { question: "Does Troy have violence and gore?", answer: "According to the Filmiway Parents Guide, the violence in Troy is rated as High. It features large-scale ancient battles, brutal sword fights, impalements, and blood." },\n        { question: "Does Troy have sex scenes or nudity?", answer: "Yes, Troy contains multiple scenes of nudity and a sex scene. Adults can use our skip timestamps to avoid these scenes while watching with family." }\n    ],\n`;
    const faqRegex = /(export const MOVIE_FAQS = \{[\s\S]*?)(};)/;
    dataContent = dataContent.replace(faqRegex, `$1${troyFaq}$2`);
    
    fs.writeFileSync(dataFile, dataContent);
    console.log('Updated warFilmsMovieData.js');
}

// 2. Update warFilmMovieRoutes.js
let routeContent = fs.readFileSync(routeFile, 'utf8');
if (!routeContent.includes("'tt0332452': 'troy'")) {
    const routeEntry = `    'tt0050825': 'paths-of-glory',\n    'tt0332452': 'troy' // BONUS: Troy`;
    routeContent = routeContent.replace("'tt0050825': 'paths-of-glory'", routeEntry);
    fs.writeFileSync(routeFile, routeContent);
    console.log('Updated warFilmMovieRoutes.js');
}
