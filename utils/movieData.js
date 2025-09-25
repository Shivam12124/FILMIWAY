// utils/movieData.js - 🔥 COMPLETE FIXED DATABASE WITH CORRECT SHUTTER ISLAND ID

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 14337, "imdbID": "tt0390384", "Title": "Primer", "Year": "2004", "Genre": "Sci-Fi", "Runtime": "77 min", "Plot": "Four friends accidentally discover a way to travel back in time.", "Poster": "https://image.tmdb.org/t/p/w500/qyIiKVhPXWoApBNcpCLhYe8K9p7.jpg", "imdbRating": "6.9", "Director": "Shane Carruth" },
    
    { "tmdbId": 4960, "imdbID": "tt0383028", "Title": "Synecdoche, New York", "Year": "2008", "Genre": "Drama", "Runtime": "124 min", "Plot": "A theatre director struggles with his work and the women in his life.", "Poster": "https://image.tmdb.org/t/p/w500/2nOjh4MEjjTzLo69gTgwjdZW7cz.jpg", "imdbRating": "7.5", "Director": "Charlie Kaufman" },
    
    { "tmdbId": 1018, "imdbID": "tt0166924", "Title": "Mulholland Drive", "Year": "2001", "Genre": "Mystery, Drama", "Runtime": "147 min", "Plot": "After a car wreck renders a woman amnesiac, she and a Hollywood-hopeful search for clues.", "Poster": "https://image.tmdb.org/t/p/w500/tVxGt7uffLVhIIcwuldXOMpFBPX.jpg", "imdbRating": "7.9", "Director": "David Lynch" },
    
    { "tmdbId": 206487, "imdbID": "tt2397535", "Title": "Predestination", "Year": "2014", "Genre": "Sci-Fi, Thriller", "Runtime": "97 min", "Plot": "A temporal agent's final assignment becomes a mind-bending journey through identity.", "Poster": "https://image.tmdb.org/t/p/w500/r6SKC9UJOgqSGfEV6bS8Eb0xILd.jpg", "imdbRating": "7.4", "Director": "Michael Spierig, Peter Spierig" },
    
    { "tmdbId": 220289, "imdbID": "tt2866360", "Title": "Coherence", "Year": "2013", "Genre": "Sci-Fi, Drama", "Runtime": "89 min", "Plot": "A dinner party becomes a labyrinth of parallel realities when a comet passes overhead.", "Poster": "https://image.tmdb.org/t/p/w500/54abeBC8arCzn1R4wY3JrNqRBwQ.jpg", "imdbRating": "7.2", "Director": "James Ward Byrkit" },
    
    { "tmdbId": 141, "imdbID": "tt0246578", "Title": "Donnie Darko", "Year": "2001", "Genre": "Sci-Fi, Drama", "Runtime": "113 min", "Plot": "A troubled teenager is guided by a mysterious figure through time travel and destiny.", "Poster": "https://image.tmdb.org/t/p/w500/fhQoQfejY1hUcwyuLgpBrYs6uFt.jpg", "imdbRating": "8.0", "Director": "Richard Kelly" },
    
    { "tmdbId": 181886, "imdbID": "tt2316411", "Title": "Enemy", "Year": "2013", "Genre": "Thriller, Mystery", "Runtime": "91 min", "Plot": "A man seeks out his exact look-alike after spotting him in a movie.", "Poster": "https://image.tmdb.org/t/p/w500/jkJMpGZW72qN0vxOJCVa8dSFHbx.jpg", "imdbRating": "6.9", "Director": "Denis Villeneuve" },
    
    { "tmdbId": 1381, "imdbID": "tt0414993", "Title": "The Fountain", "Year": "2006", "Genre": "Drama, Romance, Sci-Fi", "Runtime": "96 min", "Plot": "Aronofsky's meditation on love, death, and immortality spans three timelines.", "Poster": "https://image.tmdb.org/t/p/w500/oJcM8gFdLVy7zyPKYLJNjEGNfJO.jpg", "imdbRating": "7.2", "Director": "Darren Aronofsky" },
    
    { "tmdbId": 31011, "imdbID": "tt0485947", "Title": "Mr. Nobody", "Year": "2009", "Genre": "Sci-Fi, Drama", "Runtime": "141 min", "Plot": "The last mortal human follows infinite potential lives in this visually stunning epic.", "Poster": "https://image.tmdb.org/t/p/w500/4NWa2P7fz2V0Zf39L2qhyMcjKHN.jpg", "imdbRating": "7.8", "Director": "Jaco Van Dormael" },
    
    // 🔥 FIXED: SHUTTER ISLAND WITH CORRECT IMDb ID (tt1130884)
    { "tmdbId": 11324, "imdbID": "tt1130884", "Title": "Shutter Island", "Year": "2010", "Genre": "Mystery, Thriller", "Runtime": "138 min", "Plot": "A U.S. Marshal investigates the disappearance of a murderer from a hospital for the criminally insane.", "Poster": "https://image.tmdb.org/t/p/w500/4GDy0PHYX3VRXUtwK5ysFbg3kEx.jpg", "imdbRating": "8.2", "Director": "Martin Scorsese" },
    
    // 🔥 ADDED: The Usual Suspects for Shutter Island collection position #10
    { "tmdbId": 629, "imdbID": "tt0114814", "Title": "The Usual Suspects", "Year": "1995", "Genre": "Crime, Thriller", "Runtime": "106 min", "Plot": "A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat.", "Poster": "https://image.tmdb.org/t/p/w500/99PhdkYvHInKN3bXh7xXf7lIkjw.jpg", "imdbRating": "8.5", "Director": "Bryan Singer" }
];

export const COMPLETE_MOVIE_DATA = {
    14337: {
        mindBendingIndex: 95, complexityLevel: "EXTREME", dominantColor: "#1e3a8a", rating: 6.9, criticsScore: 77, audienceScore: 73, director: "Shane Carruth", cast: ["Shane Carruth", "David Sullivan", "Casey Gooden"], boxOffice: "$424,760", budget: "$7,000", 
        dna: { "Sci-Fi": 75, "Thriller": 15, "Drama": 10 }, 
        scenes: [{ time: 10, intensity: 35, label: "Discovery", color: "#1e3a8a" }, { time: 25, intensity: 60, label: "First Loop", color: "#1d4ed8" }, { time: 40, intensity: 75, label: "Exploitation", color: "#2563eb" }, { time: 55, intensity: 90, label: "Paradox", color: "#3b82f6" }, { time: 70, intensity: 100, label: "Chaos", color: "#60a5fa" }], 
        synopsis: "Four friends accidentally discover a way to travel back in time, leading to increasingly complex moral and temporal dilemmas in this ultra-low budget masterpiece.", 
        themes: ["Time Travel", "Friendship", "Moral Ambiguity", "Scientific Ethics"], 
        awards: ["Sundance Film Festival Winner", "Alfred P. Sloan Prize"],
        seoDescription: "Like Inception, Primer plays with time and reality in complex layers that require multiple viewings to fully understand.",
        intensityPeak: "The narrative intensity peaks at 70 minutes when temporal chaos erupts and multiple timelines collide.",
        genreComposition: "This film is predominantly Sci-Fi at 75%, with thriller elements at 15% and drama at 10%, creating a unique blend of scientific complexity and emotional tension."
    },
    4960: {
        mindBendingIndex: 92, complexityLevel: "EXTREME", dominantColor: "#7c2d12", rating: 7.5, criticsScore: 85, audienceScore: 69, director: "Charlie Kaufman", cast: ["Philip Seymour Hoffman", "Samantha Morton", "Michelle Williams"], boxOffice: "$4.4 million", budget: "$20 million", 
        dna: { "Drama": 60, "Comedy": 25, "Fantasy": 15 }, 
        scenes: [{ time: 15, intensity: 25, label: "The Grant", color: "#7c2d12" }, { time: 40, intensity: 50, label: "Construction", color: "#a16207" }, { time: 70, intensity: 75, label: "Reality Blurs", color: "#ca8a04" }, { time: 100, intensity: 90, label: "Infinite Recursion", color: "#eab308" }, { time: 120, intensity: 95, label: "Final Truth", color: "#facc15" }], 
        synopsis: "A theater director creates a life-size replica of New York inside a warehouse, blurring the lines between art and reality in Kaufman's surreal masterpiece.", 
        themes: ["Art vs Reality", "Death", "Identity", "Creative Process"], 
        awards: ["Palme d'Or Nomination", "Best Original Screenplay Nomination"],
        seoDescription: "Like Inception's layered dreams, Synecdoche New York creates nested realities within theatrical productions.",
        intensityPeak: "The film reaches maximum intensity at 120 minutes when the final truth about reality and identity is revealed.",
        genreComposition: "Primarily a drama at 60%, enhanced by dark comedy at 25% and fantasy elements at 15% that blur the boundaries between performance and life."
    },
    1018: {
        mindBendingIndex: 94, complexityLevel: "EXTREME", dominantColor: "#701a75", rating: 7.9, criticsScore: 85, audienceScore: 82, director: "David Lynch", cast: ["Naomi Watts", "Laura Harring", "Justin Theroux"], boxOffice: "$20.1 million", budget: "$15 million", 
        dna: { "Mystery": 50, "Drama": 30, "Thriller": 20 }, 
        scenes: [{ time: 20, intensity: 40, label: "The Accident", color: "#701a75" }, { time: 60, intensity: 65, label: "Hollywood Dreams", color: "#86198f" }, { time: 90, intensity: 75, label: "Club Silencio", color: "#a21caf" }, { time: 120, intensity: 90, label: "Blue Box", color: "#c026d3" }, { time: 140, intensity: 95, label: "Reality Shift", color: "#d946ef" }], 
        synopsis: "Lynch's surreal exploration of Hollywood dreams and nightmares follows two women searching for truth in a world where reality constantly shifts.", 
        themes: ["Dreams vs Reality", "Hollywood", "Identity", "Lesbian Romance"], 
        awards: ["Palme d'Or Winner", "Best Director Cannes"],
        seoDescription: "Like Inception's dream layers, Mulholland Drive weaves between dreams and reality in Lynch's signature surreal style.",
        intensityPeak: "The narrative reaches its climax at 140 minutes when reality dramatically shifts and the true story is revealed.",
        genreComposition: "A mystery at its core with 50%, enriched by dramatic elements at 30% and thriller tension at 20%, creating Lynch's trademark atmospheric confusion."
    },
    206487: {
        mindBendingIndex: 89, complexityLevel: "EXTREME", dominantColor: "#0f172a", rating: 7.4, criticsScore: 84, audienceScore: 85, director: "Michael & Peter Spierig", cast: ["Ethan Hawke", "Sarah Snook", "Noah Taylor"], boxOffice: "$5.1 million", budget: "$5 million", 
        dna: { "Sci-Fi": 60, "Thriller": 35, "Action": 5 }, 
        scenes: [{ time: 10, intensity: 65, label: "The Hunt", color: "#0f172a" }, { time: 30, intensity: 35, label: "The Story", color: "#1e293b" }, { time: 60, intensity: 80, label: "Time Jump", color: "#334155" }, { time: 75, intensity: 95, label: "The Loop", color: "#475569" }, { time: 90, intensity: 100, label: "Identity", color: "#64748b" }], 
        synopsis: "A temporal agent's final assignment becomes a mind-bending journey through identity, love, and predestination in this perfectly crafted time-travel thriller.", 
        themes: ["Predestination", "Gender Identity", "Time Travel", "Self-Sacrifice"], 
        awards: ["AACTA Best Screenplay", "Saturn Award Nomination"],
        seoDescription: "Like Inception's complex plot structure, Predestination creates an intricate temporal puzzle with shocking revelations.",
        intensityPeak: "The film peaks at 90 minutes when the protagonist's true identity is revealed in a mind-bending twist.",
        genreComposition: "Primarily Sci-Fi at 60% with strong thriller elements at 35% and minimal action at 5%, focusing on intellectual complexity over spectacle."
    },
    220289: {
        mindBendingIndex: 78, complexityLevel: "HIGH", dominantColor: "#166534", rating: 7.2, criticsScore: 88, audienceScore: 85, director: "James Ward Byrkit", cast: ["Emily Baldoni", "Maury Sterling", "Nicholas Brendon"], boxOffice: "$102,617", budget: "$50,000", 
        dna: { "Sci-Fi": 45, "Thriller": 35, "Drama": 20 }, 
        scenes: [{ time: 8, intensity: 20, label: "Dinner Begins", color: "#166534" }, { time: 18, intensity: 45, label: "Comet Effect", color: "#16a34a" }, { time: 35, intensity: 65, label: "Other House", color: "#22c55e" }, { time: 55, intensity: 80, label: "Paranoia", color: "#4ade80" }, { time: 75, intensity: 95, label: "Reality Choice", color: "#86efac" }], 
        synopsis: "A dinner party becomes a labyrinth of parallel realities when a comet passes overhead in this ingenious low-budget sci-fi thriller.", 
        themes: ["Parallel Realities", "Choice", "Relationship Dynamics", "Quantum Physics"], 
        awards: ["Fantastic Fest Winner", "Critics Choice Nomination"],
        seoDescription: "Like Inception's multiple reality layers, Coherence explores parallel dimensions during a single dinner party.",
        intensityPeak: "Maximum tension occurs at 75 minutes when characters must choose between different versions of reality.",
        genreComposition: "Balanced between Sci-Fi at 45%, thriller tension at 35%, and interpersonal drama at 20%, creating intimate yet cosmic storytelling."
    },
    141: {
        mindBendingIndex: 85, complexityLevel: "HIGH", dominantColor: "#9a3412", rating: 8.0, criticsScore: 85, audienceScore: 87, director: "Richard Kelly", cast: ["Jake Gyllenhaal", "Jena Malone", "Drew Barrymore"], boxOffice: "$7.5 million", budget: "$4.5 million", 
        dna: { "Sci-Fi": 40, "Drama": 35, "Thriller": 25 }, 
        scenes: [{ time: 8, intensity: 50, label: "The Engine", color: "#9a3412" }, { time: 25, intensity: 60, label: "Frank", color: "#c2410c" }, { time: 80, intensity: 70, label: "School Flood", color: "#ea580c" }, { time: 105, intensity: 85, label: "Death", color: "#f97316" }, { time: 118, intensity: 90, label: "The Loop", color: "#fb923c" }], 
        synopsis: "A troubled teenager is guided by a mysterious figure through a complex tale of time travel, destiny, and sacrifice in Kelly's cult classic.", 
        themes: ["Time Travel", "Destiny", "Adolescence", "Mental Health"], 
        awards: ["Teen Choice Award", "Cult Classic Status"],
        seoDescription: "Like Inception's reality manipulation, Donnie Darko blends time travel with psychological complexity in a cult masterpiece.",
        intensityPeak: "The story culminates at 118 minutes when the time loop closes and Donnie makes his ultimate sacrifice.",
        genreComposition: "Evenly balanced with Sci-Fi elements at 40%, emotional drama at 35%, and psychological thriller aspects at 25%."
    },
    181886: {
        mindBendingIndex: 82, complexityLevel: "HIGH", dominantColor: "#7c2d12", rating: 6.9, criticsScore: 75, audienceScore: 70, director: "Denis Villeneuve", cast: ["Jake Gyllenhaal", "Mélanie Laurent", "Sarah Gadon"], boxOffice: "$3.4 million", budget: "$9 million", 
        dna: { "Thriller": 70, "Mystery": 20, "Drama": 10 }, 
        scenes: [{ time: 18, intensity: 35, label: "Discovery", color: "#7c2d12" }, { time: 45, intensity: 65, label: "First Contact", color: "#a16207" }, { time: 70, intensity: 80, label: "Obsession", color: "#ca8a04" }, { time: 88, intensity: 95, label: "Truth", color: "#eab308" }], 
        synopsis: "Villeneuve's psychological thriller explores identity and obsession as a man discovers his exact double in this Kafkaesque nightmare.", 
        themes: ["Duality", "Identity Crisis", "Obsession", "Subconscious"], 
        awards: ["Toronto International Film Festival", "Genie Award Winner"],
        seoDescription: "Like Inception's exploration of the subconscious, Enemy delves into psychological duality and identity confusion.",
        intensityPeak: "The film reaches its disturbing climax at 88 minutes when the horrifying truth about identity is unveiled.",
        genreComposition: "Dominated by psychological thriller elements at 70%, with mystery components at 20% and dramatic undertones at 10%."
    },
    1381: {
        mindBendingIndex: 87, complexityLevel: "HIGH", dominantColor: "#581c87", rating: 7.2, criticsScore: 69, audienceScore: 75, director: "Darren Aronofsky", cast: ["Hugh Jackman", "Rachel Weisz", "Ellen Burstyn"], boxOffice: "$16 million", budget: "$35 million", 
        dna: { "Drama": 50, "Sci-Fi": 30, "Romance": 20 }, 
        scenes: [{ time: 15, intensity: 45, label: "The Quest", color: "#581c87" }, { time: 35, intensity: 40, label: "Modern Love", color: "#7c3aed" }, { time: 55, intensity: 65, label: "Future Journey", color: "#8b5cf6" }, { time: 75, intensity: 85, label: "Convergence", color: "#a78bfa" }, { time: 90, intensity: 80, label: "Acceptance", color: "#c4b5fd" }], 
        synopsis: "Aronofsky's ambitious meditation on love, death, and immortality spans three timelines in this visually stunning philosophical epic.", 
        themes: ["Immortality", "Love", "Death", "Spiritual Journey"], 
        awards: ["Venice Film Festival", "Visual Effects Society Award"],
        seoDescription: "Like Inception's multiple timeline structure, The Fountain weaves three interconnected stories across different eras.",
        intensityPeak: "Emotional intensity peaks at 75 minutes when all three timelines converge in a spectacular climax.",
        genreComposition: "Primarily a drama at 50%, elevated by Sci-Fi concepts at 30% and romantic elements at 20%, creating Aronofsky's signature philosophical blend."
    },
    31011: {
        mindBendingIndex: 93, complexityLevel: "EXTREME", dominantColor: "#be185d", rating: 7.8, criticsScore: 86, audienceScore: 81, director: "Jaco Van Dormael", cast: ["Jared Leto", "Sarah Polley", "Diane Kruger"], boxOffice: "$3.6 million", budget: "$47 million", 
        dna: { "Sci-Fi": 50, "Drama": 30, "Fantasy": 20 }, 
        scenes: [{ time: 15, intensity: 30, label: "The Choice", color: "#be185d" }, { time: 45, intensity: 60, label: "Multiple Lives", color: "#db2777" }, { time: 85, intensity: 70, label: "Love Stories", color: "#ec4899" }, { time: 115, intensity: 85, label: "Old Age", color: "#f472b6" }, { time: 135, intensity: 95, label: "Big Bang", color: "#f9a8d4" }], 
        synopsis: "Van Dormael's ambitious exploration of choice and possibility follows the last mortal human through infinite potential lives in this visually stunning epic.", 
        themes: ["Choice", "Possibility", "Love", "Mortality"], 
        awards: ["European Film Award", "Magritte Award Winner"],
        seoDescription: "Like Inception's branching possibilities, Mr. Nobody explores infinite life paths and the consequences of choice.",
        intensityPeak: "The narrative reaches cosmic proportions at 135 minutes with the Big Bang sequence revealing universal connections.",
        genreComposition: "Half Sci-Fi at 50% exploring quantum possibilities, complemented by human drama at 30% and fantasy elements at 20%."
    },
    // 🔥 SHUTTER ISLAND DATA (tt1130884)
    11324: {
        mindBendingIndex: 90, complexityLevel: "EXTREME", dominantColor: "#374151", rating: 8.2, criticsScore: 68, audienceScore: 89, director: "Martin Scorsese", cast: ["Leonardo DiCaprio", "Mark Ruffalo", "Ben Kingsley"], boxOffice: "$294.8 million", budget: "$80 million", 
        dna: { "Thriller": 50, "Mystery": 35, "Drama": 15 }, 
        scenes: [{ time: 15, intensity: 40, label: "Arrival", color: "#374151" }, { time: 45, intensity: 65, label: "Investigation", color: "#4b5563" }, { time: 85, intensity: 80, label: "Conspiracy", color: "#6b7280" }, { time: 115, intensity: 95, label: "The Truth", color: "#9ca3af" }, { time: 138, intensity: 100, label: "Reality", color: "#d1d5db" }], 
        synopsis: "Scorsese's psychological thriller follows a U.S. Marshal investigating a disappearance at a psychiatric facility, leading to shocking revelations about reality and identity.", 
        themes: ["Mental Illness", "Reality vs Delusion", "Guilt", "Identity Crisis"], 
        awards: ["People's Choice Award", "Teen Choice Award"],
        seoDescription: "Scorsese's masterful psychological thriller explores the fragile boundary between sanity and delusion through unreliable narration.",
        intensityPeak: "The devastating truth is revealed at 138 minutes when the protagonist's true identity and condition are unveiled.",
        genreComposition: "Primarily a psychological thriller at 50%, with mystery elements at 35% and dramatic depth at 15%, creating Scorsese's signature character study."
    },
    // 🔥 THE USUAL SUSPECTS DATA (tt0114814)
    629: {
        mindBendingIndex: 88, complexityLevel: "HIGH", dominantColor: "#0c4a6e", rating: 8.5, criticsScore: 88, audienceScore: 94, director: "Bryan Singer", cast: ["Kevin Spacey", "Gabriel Byrne", "Chazz Palminteri"], boxOffice: "$23 million", budget: "$6 million", 
        dna: { "Crime": 50, "Thriller": 35, "Mystery": 15 }, 
        scenes: [{ time: 15, intensity: 40, label: "The Lineup", color: "#0c4a6e" }, { time: 45, intensity: 55, label: "The Job", color: "#0284c7" }, { time: 75, intensity: 70, label: "Keyser Söze", color: "#0ea5e9" }, { time: 95, intensity: 85, label: "The Truth", color: "#38bdf8" }, { time: 105, intensity: 100, label: "The Reveal", color: "#7dd3fc" }], 
        synopsis: "A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, weaving a tale where nothing is as it seems.", 
        themes: ["Deception", "Identity", "Truth vs Fiction", "Criminal Psychology"], 
        awards: ["Academy Award Best Supporting Actor", "Academy Award Best Original Screenplay"],
        seoDescription: "Like Shutter Island's unreliable narration, The Usual Suspects masterfully deceives audiences with its shocking twist ending.",
        intensityPeak: "The legendary reveal occurs at 105 minutes when the true identity of Keyser Söze is finally unveiled.",
        genreComposition: "Primarily a crime thriller at 50%, enhanced by psychological thriller elements at 35% and mystery components at 15%."
    }
};

export const CINEMATIC_COLORS = {
    "Sci-Fi": "#1e3a8a", "Drama": "#7c2d12", "Thriller": "#0f172a", "Mystery": "#701a75", "Action": "#9a3412", "Fantasy": "#581c87", "Romance": "#be185d", "Crime": "#0c4a6e"
};

export const STRATEGIC_TAGLINES = {
    14337: "Time is the fire in which we burn", 
    4960: "We are what happens to our dreams",
    1018: "A love story in the city of dreams", 
    206487: "The future is not set in stone", 
    220289: "Reality is just a matter of perspective", 
    141: "Some people are born to change the world", 
    181886: "We all have a double somewhere", 
    1381: "Death is the road to awe", 
    31011: "Every choice creates a universe", 
    11324: "Some places never let you go",
    629: "The greatest trick the Devil ever pulled was convincing the world he didn't exist"
};

export const STRATEGIC_QUOTES = {
    14337: "They say time is the fire in which we burn", 
    4960: "Everything is more complicated than you think",
    1018: "No hay banda. There is no band", 
    206487: "What if I told you that you're the person you're trying to catch?", 
    220289: "There are dark places where terrible things have happened", 
    141: "Every living creature on earth dies alone", 
    181886: "I don't think I'm me", 
    1381: "Death is the road to awe", 
    31011: "Every path is the right path", 
    11324: "Which would be worse: to live as a monster, or to die as a good man?",
    629: "The greatest trick the Devil ever pulled was convincing the world he didn't exist"
};

export const FALLBACK_POSTERS = {
    14337: "https://image.tmdb.org/t/p/w500/qyIiKVhPXWoApBNcpCLhYe8K9p7.jpg", // Primer
    4960: "https://image.tmdb.org/t/p/w500/2nOjh4MEjjTzLo69gTgwjdZW7cz.jpg", // Synecdoche, New York
    1018: "https://image.tmdb.org/t/p/w500/tVxGt7uffLVhIIcwuldXOMpFBPX.jpg", // Mulholland Drive
    206487: "https://image.tmdb.org/t/p/w500/r6SKC9UJOgqSGfEV6bS8Eb0xILd.jpg", // Predestination
    220289: "https://image.tmdb.org/t/p/w500/54abeBC8arCzn1R4wY3JrNqRBwQ.jpg", // Coherence
    141: "https://image.tmdb.org/t/p/w500/fhQoQfejY1hUcwyuLgpBrYs6uFt.jpg", // Donnie Darko
    181886: "https://image.tmdb.org/t/p/w500/jkJMpGZW72qN0vxOJCVa8dSFHbx.jpg", // Enemy
    1381: "https://image.tmdb.org/t/p/w500/oJcM8gFdLVy7zyPKYLJNjEGNfJO.jpg", // The Fountain
    31011: "https://image.tmdb.org/t/p/w500/4NWa2P7fz2V0Zf39L2qhyMcjKHN.jpg", // Mr. Nobody
    11324: "https://image.tmdb.org/t/p/w500/4GDy0PHYX3VRXUtwK5ysFbg3kEx.jpg", // Shutter Island
    629: "https://image.tmdb.org/t/p/w500/99PhdkYvHInKN3bXh7xXf7lIkjw.jpg" // The Usual Suspects
};

export const RATING_OPTIONS = [
    { 
        value: 1, 
        label: "A Disappointment", 
        color: "#dc2626", 
        symbol: "△",
        bgColor: "bg-red-900/30",
        description: "Falls short of expectations"
    },
    { 
        value: 2, 
        label: "Flawed", 
        color: "#ea580c", 
        symbol: "◇",
        bgColor: "bg-orange-900/30",
        description: "Watchable with notable flaws"
    },
    { 
        value: 3, 
        label: "Worth the Ride", 
        color: "#16a34a", 
        symbol: "◆",
        bgColor: "bg-green-900/30",
        description: "Solid entertainment value"
    },
    { 
        value: 4, 
        label: "Exceptional", 
        color: "#eab308", 
        symbol: "★",
        bgColor: "bg-yellow-900/30",
        description: "Outstanding cinematic achievement"
    }
];
