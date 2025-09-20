// data/moviesLikeShutterIsland.js - Shutter Island Collection Data
// ✅ COMPLETE MOVIE DATABASE (REVERSED ORDER: 10 to 1)
export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 629, "imdbID": "tt0114814", "Title": "The Usual Suspects", "year": 1995, "genre": "Thriller", "runtime": 106, "rank": 10 },
    { "tmdbId": 31011, "imdbID": "tt1130884", "Title": "Mr. Nobody", "year": 2009, "genre": "Sci-Fi", "runtime": 141, "rank": 9 },
    { "tmdbId": 1381, "imdbID": "tt0414993", "Title": "The Fountain", "year": 2006, "genre": "Drama", "runtime": 96, "rank": 8 },
    { "tmdbId": 181886, "imdbID": "tt2316411", "Title": "Enemy", "year": 2013, "genre": "Thriller", "runtime": 91, "rank": 7 },
    { "tmdbId": 141, "imdbID": "tt0246578", "Title": "Donnie Darko", "year": 2001, "genre": "Sci-Fi", "runtime": 113, "rank": 6 },
    { "tmdbId": 220289, "imdbID": "tt2866360", "Title": "Coherence", "year": 2013, "genre": "Sci-Fi", "runtime": 89, "rank": 5 },
    { "tmdbId": 206487, "imdbID": "tt2397535", "Title": "Predestination", "year": 2014, "genre": "Sci-Fi", "runtime": 97, "rank": 4 },
    { "tmdbId": 1018, "imdbID": "tt0166924", "Title": "Mulholland Drive", "year": 2001, "genre": "Mystery", "runtime": 147, "rank": 3 },
    { "tmdbId": 4960, "imdbID": "tt0383028", "Title": "Synecdoche, New York", "year": 2008, "genre": "Drama", "runtime": 124, "rank": 2 },
    { "tmdbId": 14337, "imdbID": "tt0390384", "Title": "Primer", "year": 2004, "genre": "Sci-Fi", "runtime": 77, "rank": 1 }
];

// ✅ SIMPLIFIED MOVIE DATA (using your existing structure)
export const COMPLETE_MOVIE_DATA = {
    // Same structure as your inception data but for shutter island movies
    14337: { mindBendingIndex: 95, rating: 6.9, director: "Shane Carruth", seoDescription: "Like Shutter Island, Primer challenges audiences with complex narrative layers." },
    4960: { mindBendingIndex: 92, rating: 7.5, director: "Charlie Kaufman", seoDescription: "Like Shutter Island's layered reality, Synecdoche New York creates nested realities." },
    1018: { mindBendingIndex: 94, rating: 7.9, director: "David Lynch", seoDescription: "Like Shutter Island's questioning of reality, Mulholland Drive weaves between dreams and truth." },
    206487: { mindBendingIndex: 89, rating: 7.4, director: "Michael & Peter Spierig", seoDescription: "Like Shutter Island's complex plot structure, Predestination creates intricate puzzles." },
    220289: { mindBendingIndex: 78, rating: 7.2, director: "James Ward Byrkit", seoDescription: "Like Shutter Island's multiple reality layers, Coherence explores parallel dimensions." },
    141: { mindBendingIndex: 85, rating: 8.0, director: "Richard Kelly", seoDescription: "Like Shutter Island's reality manipulation, Donnie Darko blends time travel with psychology." },
    181886: { mindBendingIndex: 82, rating: 6.9, director: "Denis Villeneuve", seoDescription: "Like Shutter Island's subconscious exploration, Enemy delves into psychological duality." },
    1381: { mindBendingIndex: 87, rating: 7.2, director: "Darren Aronofsky", seoDescription: "Like Shutter Island's timeline structure, The Fountain weaves interconnected stories." },
    31011: { mindBendingIndex: 93, rating: 7.8, director: "Jaco Van Dormael", seoDescription: "Like Shutter Island's branching possibilities, Mr. Nobody explores infinite life paths." },
    629: { mindBendingIndex: 88, rating: 8.5, director: "Bryan Singer", seoDescription: "Like Shutter Island's unreliable narrator, The Usual Suspects masterfully deceives audiences." }
};

// ✅ BASIC SENSITIVE DATA (optional - can be expanded later)
export const SENSITIVE_TIMELINES = {
    // Add sensitive content data if needed
    14337: { scenes: [] }, // Primer - Clean
    629: { scenes: [] } // Usual Suspects - Minimal content
    // Add others as needed
};
