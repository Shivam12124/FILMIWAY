// utils/psychologicalThrillerMovieData.js - COMPLETE PSYCHOLOGICAL THRILLER COLLECTION 🔥

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { tmdbId: 274, imdbID: 'tt0102926', Title: 'The Silence of the Lambs', year: 1991, genre: 'Psychological Thriller', runtime: 118, rank: 1 },
    { tmdbId: 550, imdbID: 'tt0137523', Title: 'Fight Club', year: 1999, genre: 'Drama', runtime: 139, rank: 2 },
    { tmdbId: 77, imdbID: 'tt0209144', Title: 'Memento', year: 2000, genre: 'Mystery', runtime: 113, rank: 3 },
    { tmdbId: 807, imdbID: 'tt0114369', Title: 'Se7en', year: 1995, genre: 'Crime Thriller', runtime: 127, rank: 4 },
    { tmdbId: 11324, imdbID: 'tt1130884', Title: 'Shutter Island', year: 2010, genre: 'Mystery', runtime: 138, rank: 5 },
    { tmdbId: 44214, imdbID: 'tt0947798', Title: 'Black Swan', year: 2010, genre: 'Drama', runtime: 108, rank: 6 },
    { tmdbId: 4553, imdbID: 'tt0361862', Title: 'The Machinist', year: 2004, genre: 'Thriller', runtime: 101, rank: 7 },
    { tmdbId: 670, imdbID: 'tt0364569', Title: 'Oldboy', year: 2003, genre: 'Action', runtime: 120, rank: 8 },
    { tmdbId: 103, imdbID: 'tt0075314', Title: 'Taxi Driver', year: 1976, genre: 'Crime', runtime: 114, rank: 9 },
    { tmdbId: 694, imdbID: 'tt0081505', Title: 'The Shining', year: 1980, genre: 'Horror', runtime: 146, rank: 10 }
];

// Helper to ensure default values
const createMovieData = (data) => ({
    psychologicalIntensity: 90,
    mindBendScore: 85,
    emotionalImpact: 80,
    complexityLevel: "HIGH",
    dominantColor: "#000000",
    ...data,
});

export const SENSITIVE_TIMELINES = {
    274: { scenes: [
        { start: '18:50', end: '18:57', type: 'Explicit Scene', severity: 'High' },
        { start: '1:36:30', end: '1:36:37', type: 'Nudity (man)', severity: 'Moderate' }
    ]},
    550: { scenes: [
        { start: '48:40', end: '48:55', type: 'Sex', severity: 'High' },
        { start: '1:06:55', end: '1:07:35', type: 'Partial nudity + kissing', severity: 'Moderate' }
    ]},
    77: { scenes: [
        { start: '31:08', end: '31:13', type: 'Casual Kissing', severity: 'Mild' }
    ]},
    807: { scenes: [] }, // Se7en
    11324: { scenes: [
        { start: '1:10:43', end: '1:10:47', type: 'Nudity', severity: 'Moderate' },
        { start: '1:59:03', end: '1:59:06', type: 'Casual Kissing', severity: 'Mild' }
    ]},
    44214: { scenes: [

        { start: '39:40', end: '40:40', type: 'Sexual Content', severity: 'High' },

        { start: '48:52', end: '49:10', type: 'Sexual Content', severity: 'Moderate' },

        { start: '51:20', end: '51:40', type: 'Sexual Content', severity: 'High' },

        { start: '1:08:20', end: '1:11:01', type: 'Sex', severity: 'High' },

        { start: '1:20:20', end: '1:20:40', type: 'Sex', severity: 'High' }

    ]},
    4553: { scenes: [
        { start: '17:00', end: '18:25', type: 'Sex', severity: 'High' },
        { start: '1:16:10', end: '1:16:15', type: 'Kissing', severity: 'Mild' }
    ]},
    670: { scenes: [
        { start: '11:20', end: '11:40', type: 'Masturbating', severity: 'Moderate' },
        { start: '57:37', end: '1:01:10', type: 'Partial nudity (woman)', severity: 'Moderate' },
        { start: '1:03:35', end: '1:05:10', type: 'Sex', severity: 'High' },
        { start: '1:22:20', end: '1:22:36', type: 'Sexually Suggestive Scene', severity: 'Moderate' },
        { start: '1:30:30', end: '1:30:38', type: 'Partial nudity (man)', severity: 'Mild' }
    ]},
    103: { scenes: [

        { start: '35:34', end: '35:45', type: 'Sexually Content', severity: 'Moderate' },

        { start: '58:52', end: '59:05', type: 'Sexually Content', severity: 'Moderate' }

    ]},
    694: { scenes: [
        { start: '1:10:40', end: '1:11:00', type: 'Nudity (Painting)', severity: 'Mild' },
        { start: '1:13:10', end: '1:16:00', type: 'Nudity + Kissing', severity: 'High' }
    ]}
};

export const FALLBACK_POSTERS = {
    274: "https://image.tmdb.org/t/p/w500/rplLJ2hPcOQ.jpg",
    550: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    77: "https://image.tmdb.org/t/p/w500/yuNs09hvpHWUxJslQdr2cTKJD42.jpg",
    807: "https://image.tmdb.org/t/p/w500/6yoghtyTpznpBik8EngEmJskVUO.jpg",
    11324: "https://image.tmdb.org/t/p/w500/unyHKrkQ6UPUxyBevzMpTpF6hOL.jpg",
    44214: "https://image.tmdb.org/t/p/w500/ppad3tK7S2pX6Y6B0U5B5F37a5s.jpg",
    4553: "https://image.tmdb.org/t/p/w500/wM2oJ5s4E5c0t9c2c2f2f2f2.jpg", // Placeholder
    670: "https://image.tmdb.org/t/p/w500/pWDtjs568ZfOTMbURQBYuT4Qxka.jpg",
    103: "https://image.tmdb.org/t/p/w500/ekstpHby5fsBliVqgJ6kL.jpg", // Placeholder
    694: "https://image.tmdb.org/t/p/w500/9w0Vkq1e5c3bWp6b1c1c1.jpg" // Placeholder
};

export const COMPLETE_MOVIE_DATA = {
    // 1. The Silence of the Lambs
    274: createMovieData({ 
        psychologicalIntensity: 94, mindBendScore: 85, emotionalImpact: 90, complexityLevel: "HIGH", 
        dominantColor: "#4a5568", rating: 8.6, criticsScore: 95, audienceScore: 95, 
        director: "Jonathan Demme", cast: ["Jodie Foster", "Anthony Hopkins", "Scott Glenn"], 
        boxOffice: "$272.7 million", budget: "$19 million", 
        dna: { Thriller: 55, Crime: 30, Horror: 15 }, 
        scenes: [
            { time: 10, intensity: 35, label: 'First Interview', color: '#b91c1c' },
            { time: 46, intensity: 67, label: 'Lecter Escapes', color: '#f87171' },
            { time: 82, intensity: 79, label: 'Night Vision Stalk', color: '#fbbf24' },
            { time: 102, intensity: 89, label: 'Buffalo Bill', color: '#fde68a' },
            { time: 113, intensity: 94, label: 'Ending', color: '#dc2626' }
        ], 
        synopsis: "Clarice Starling, a young and ambitious FBI trainee, is thrown into the deep end to catch 'Buffalo Bill,' a serial killer who skins his female victims. To save the next girl, she must enter the high-security dungeon of Dr. Hannibal Lecter—a brilliant psychiatrist turned cannibalistic monster. What begins as an interrogation evolves into a chilling, psychological waltz where Clarice must trade her own traumatic memories for Lecter's insights, risking her sanity to stop a slaughter.", 
        themes: ["Transformation", "Manipulation", "Identity", "Fear"], 
        awards: ["Big Five Oscars", "Golden Globe"] 
    }),

    // 2. Fight Club
    550: createMovieData({ 
        psychologicalIntensity: 98, mindBendScore: 95, emotionalImpact: 85, complexityLevel: "EXTREME", 
        dominantColor: "#3f6212", rating: 8.8, criticsScore: 79, audienceScore: 96, 
        director: "David Fincher", cast: ["Edward Norton", "Brad Pitt", "Helena Bonham Carter"], 
        boxOffice: "$101.2 million", budget: "$63 million", 
        dna: { Drama: 70, Psychological: 20, Thriller: 10 }, 
        scenes: [
            { time: 5, intensity: 40, label: 'Meeting Tyler Durden', color: '#b91c1c' },
            { time: 50, intensity: 70, label: 'Fight Club Formation', color: '#f87171' },
            { time: 100, intensity: 90, label: 'Fight to the End', color: '#fbbf24' },
            { time: 115, intensity: 95, label: 'Chaos Unleashed', color: '#fde68a' },
            { time: 125, intensity: 98, label: 'Final Twist', color: '#dc2626' }
        ], 
        synopsis: "A ticking time bomb of an insomniac, suffocated by his IKEA-catalog life, finds a strange release in the company of Tyler Durden—a charismatic soap salesman who believes self-destruction is the answer to everything. Together, they create an underground fight club that evolves into something far more dangerous: a cult-like army targeting the foundations of society itself. But as the chaos spreads, the narrator realizes that Tyler Durden is not who he seems.", 
        themes: ["Consumerism", "Identity", "Masculinity", "Anarchy"], 
        awards: ["Oscar Nomination", "Cult Classic Status"] 
    }),

    // 3. Memento
    77: createMovieData({ 
        psychologicalIntensity: 90, mindBendScore: 98, emotionalImpact: 88, complexityLevel: "EXTREME", 
        dominantColor: "#d6c8b2", rating: 8.4, criticsScore: 93, audienceScore: 94, 
        director: "Christopher Nolan", cast: ["Guy Pearce", "Carrie-Anne Moss", "Joe Pantoliano"], 
        boxOffice: "$39.7 million", budget: "$9 million", 
        dna: { Mystery: 50, Thriller: 30, Drama: 20 }, 
        scenes: [
            { time: 5, intensity: 40, label: 'Opening Black & White', color: '#b91c1c' },
            { time: 50, intensity: 60, label: 'Tattoos Explanation', color: '#f87171' },
            { time: 80, intensity: 75, label: 'Car Scene', color: '#fbbf24' },
            { time: 105, intensity: 85, label: 'Final Reveal', color: '#fde68a' },
            { time: 110, intensity: 92, label: 'The Beginning/End', color: '#dc2626' }
        ], 
        synopsis: "Leonard Shelby is a man living in a fractured reality. Unable to form new memories since the attack that killed his wife, he hunts her murderer using a complex system of Polaroid photos, handwritten notes, and tattoos on his own skin. Told in reverse chronological order, the film forces you to experience Leonard's disorientation firsthand, slowly revealing a devastating truth: when you can't trust your own mind, everyone is a suspect, including yourself.", 
        themes: ["Memory", "Truth", "Identity", "Revenge"], 
        awards: ["Oscar Nomination", "Sundance Winner"] 
    }),

    // 4. Se7en
    807: createMovieData({ 
        psychologicalIntensity: 98, mindBendScore: 85, emotionalImpact: 95, complexityLevel: "HIGH", 
        dominantColor: "#1c1917", rating: 8.6, criticsScore: 83, audienceScore: 95, 
        director: "David Fincher", cast: ["Brad Pitt", "Morgan Freeman", "Kevin Spacey"], 
        boxOffice: "$327.3 million", budget: "$33 million", 
        dna: { Mystery: 50, Thriller: 40, Crime: 10 }, 
        scenes: [
            { time: 8, intensity: 45, label: 'Sin 1: Gluttony', color: '#b91c1c' },
            { time: 38, intensity: 65, label: 'Sin 3: Greed', color: '#f87171' },
            { time: 77, intensity: 85, label: 'Sin 5: Lust', color: '#fbbf24' },
            { time: 102, intensity: 92, label: 'Desert Confrontation', color: '#fde68a' },
            { time: 120, intensity: 98, label: "What's in the Box?", color: '#dc2626' }
        ], 
        synopsis: "In a city drowning in constant rain and moral decay, two detectives—one a weary veteran, the other a brash rookie—hunt a serial killer who turns the Seven Deadly Sins into gruesome tableaus of torture. As they move from one horrific crime scene to the next, they realize they aren't just catching a criminal; they are pawns in his masterwork. It is a descent into pure nihilism, ending in a desert showdown that will leave you scarred.", 
        themes: ["Sin", "Moral Decay", "Apathy", "Justice"], 
        awards: ["MTV Movie Award", "Oscar Nomination"] 
    }),

    // 5. Shutter Island
    11324: createMovieData({ 
        psychologicalIntensity: 90, mindBendScore: 92, emotionalImpact: 85, complexityLevel: "HIGH", 
        dominantColor: "#334155", rating: 8.2, criticsScore: 68, audienceScore: 77, 
        director: "Martin Scorsese", cast: ["Leonardo DiCaprio", "Mark Ruffalo", "Ben Kingsley"], 
        boxOffice: "$294 million", budget: "$80 million", 
        dna: { Mystery: 50, Thriller: 35, Drama: 15 }, 
        scenes: [
            { time: 15, intensity: 40, label: 'Arrival', color: '#b91c1c' },
            { time: 60, intensity: 68, label: 'Interrogation Room', color: '#f87171' },
            { time: 95, intensity: 80, label: 'Storm Breaks', color: '#fbbf24' },
            { time: 110, intensity: 88, label: 'Hospital Secrets', color: '#fde68a' },
            { time: 130, intensity: 93, label: 'Truth Revealed', color: '#dc2626' }
        ], 
        synopsis: "U.S. Marshal Teddy Daniels arrives at Shutter Island, a fortress-like asylum for the criminally insane, to find a missing patient who vanished from a locked room. But as a hurricane rips through the island, cutting off all escape, Teddy discovers that the doctors are hiding something terrible. Haunted by his own tragic past and plagued by migraines and hallucinations, he begins to suspect that he was never meant to leave the island alive.", 
        themes: ["Sanity", "Trauma", "Denial", "Reality"], 
        awards: ["Teen Choice Award", "National Board of Review"] 
    }),

    // 6. Black Swan
    44214: createMovieData({ 
        psychologicalIntensity: 95, mindBendScore: 90, emotionalImpact: 92, complexityLevel: "HIGH", 
        dominantColor: "#18181b", rating: 8.0, criticsScore: 85, audienceScore: 84, 
        director: "Darren Aronofsky", cast: ["Natalie Portman", "Mila Kunis", "Vincent Cassel"], 
        boxOffice: "$106.9 million", budget: "$13 million", 
        dna: { Drama: 55, Thriller: 40, Psychological: 5 }, 
        scenes: [
            { time: 12, intensity: 38, label: 'Audition', color: '#b91c1c' },
            { time: 40, intensity: 62, label: 'Rehearsal Tension', color: '#f87171' },
            { time: 75, intensity: 80, label: 'Performance Panic', color: '#fbbf24' },
            { time: 95, intensity: 85, label: 'Psychological Breakdown', color: '#fde68a' },
            { time: 105, intensity: 95, label: 'Final Performance', color: '#dc2626' }
        ], 
        synopsis: "Nina is a ballerina whose life is consumed by dance. When she wins the lead role in 'Swan Lake,' she easily embodies the innocent White Swan but struggles to find the seductive darkness required for the Black Swan. As a rival dancer threatens to replace her, Nina's desperation triggers a terrifying metamorphosis. The pressure fractures her reality, leading to a hallucinatory nightmare where perfection demands the ultimate sacrifice.", 
        themes: ["Perfectionism", "Duality", "Obsession", "Sacrifice"], 
        awards: ["Oscar Best Actress", "Golden Globe"] 
    }),

    // 7. The Machinist
    4553: createMovieData({ 
        psychologicalIntensity: 92, mindBendScore: 88, emotionalImpact: 80, complexityLevel: "HIGH", 
        dominantColor: "#94a3b8", rating: 7.7, criticsScore: 77, audienceScore: 83, 
        director: "Brad Anderson", cast: ["Christian Bale", "Jennifer Jason Leigh", "Aitana Sánchez-Gijón"], 
        boxOffice: "$8.6 million", budget: "$5 million", 
        dna: { Drama: 40, Thriller: 40, Psychological: 20 }, 
        scenes: [
            { time: 7, intensity: 30, label: 'Sleeplessness', color: '#b91c1c' },
            { time: 35, intensity: 55, label: 'Paranoia', color: '#f87171' },
            { time: 65, intensity: 70, label: 'Conspiracy Reveal', color: '#fbbf24' },
            { time: 90, intensity: 80, label: 'Mental Breakdown', color: '#fde68a' },
            { time: 100, intensity: 85, label: 'Final Revelation', color: '#dc2626' }
        ], 
        synopsis: "Trevor Reznik is a skeletal shadow of a man who hasn't slept in a year. His insomnia has eroded his mind, leaving him prone to vivid hallucinations and paranoia. When a workplace accident he causes costs a coworker his arm, Trevor becomes convinced that an enigmatic figure named Ivan is orchestrating a plot to destroy him. But as he connects the clues, he finds that the conspiracy is far more personal—and horrifying—than he imagined.", 
        themes: ["Guilt", "Insomnia", "Memory", "Atonement"], 
        awards: ["Sitges Award", "Goya Nomination"] 
    }),

    // 8. Oldboy
    670: createMovieData({ 
        psychologicalIntensity: 90, mindBendScore: 94, emotionalImpact: 98, complexityLevel: "EXTREME", 
        dominantColor: "#365314", rating: 8.4, criticsScore: 82, audienceScore: 94, 
        director: "Park Chan-wook", cast: ["Choi Min-sik", "Yoo Ji-tae", "Kang Hye-jung"], 
        boxOffice: "$15.5 million", budget: "$3 million", 
        dna: { Drama: 40, Mystery: 30, Thriller: 30 }, 
        scenes: [
            { time: 10, intensity: 40, label: 'Imprisonment', color: '#b91c1c' },
            { time: 60, intensity: 75, label: 'Revenge Planning', color: '#f87171' },
            { time: 95, intensity: 82, label: 'Escape and Hunt', color: '#fbbf24' },
            { time: 115, intensity: 90, label: 'Showdown', color: '#fde68a' },
            { time: 120, intensity: 93, label: 'Revelation', color: '#dc2626' }
        ], 
        synopsis: "On a rainy night, an ordinary businessman is kidnapped and locked in a cheap hotel room for 15 years without explanation. His only connection to the world is a TV set. Then, suddenly, he is released. Armed with a hammer and a thirst for vengeance, he has five days to find his captor and discover the reason for his imprisonment. But the truth is part of a twisted game that is far more violent and tragic than his confinement ever was.", 
        themes: ["Revenge", "Incest", "Fate", "Memory"], 
        awards: ["Grand Prix Cannes", "Blue Dragon Winner"] 
    }),

    // 9. Taxi Driver
    103: createMovieData({ 
        psychologicalIntensity: 90, mindBendScore: 75, emotionalImpact: 88, complexityLevel: "HIGH", 
        dominantColor: "#eab308", rating: 8.3, criticsScore: 96, audienceScore: 93, 
        director: "Martin Scorsese", cast: ["Robert De Niro", "Jodie Foster", "Harvey Keitel"], 
        boxOffice: "$28.6 million", budget: "$12 million", 
        dna: { Drama: 50, Crime: 30, Thriller: 20 }, 
        scenes: [
            { time: 15, intensity: 40, label: 'Night Driving', color: '#b91c1c' },
            { time: 48, intensity: 65, label: 'Violent Version', color: '#f87171' },
            { time: 90, intensity: 80, label: 'Rampage', color: '#fbbf24' },
            { time: 110, intensity: 95, label: 'Final Shootout', color: '#fde68a' },
            { time: 113, intensity: 98, label: 'Ending', color: '#dc2626' }
        ], 
        synopsis: "Travis Bickle is God's lonely man—a Vietnam vet driving a cab through the neon-soaked squalor of 1970s New York. Disgusted by the 'filth' he sees on the streets at night, his isolation festers into a dangerous obsession. He buys a gun, shaves his head into a Mohawk, and prepares for a self-appointed mission to wash the scum off the streets. It is a terrifying portrait of a man slowly becoming a loaded gun.", 
        themes: ["Isolation", "Vigilantism", "Urban Decay", "Insanity"], 
        awards: ["Palme d'Or Winner", "4 Oscar Nominations"] 
    }),

    // 10. The Shining
    694: createMovieData({ 
        psychologicalIntensity: 93, mindBendScore: 88, emotionalImpact: 90, complexityLevel: "HIGH", 
        dominantColor: "#ea580c", rating: 8.4, criticsScore: 83, audienceScore: 93, 
        director: "Stanley Kubrick", cast: ["Jack Nicholson", "Shelley Duvall", "Danny Lloyd"], 
        boxOffice: "$44 million", budget: "$19 million", 
        dna: { Drama: 50, Horror: 30, Thriller: 20 }, 
        scenes: [
            { time: 12, intensity: 38, label: 'First Snow', color: '#b91c1c' },
            { time: 50, intensity: 70, label: 'Meeting Grady', color: '#f87171' },
            { time: 95, intensity: 85, label: 'Maze Scenes', color: '#fbbf24' },
            { time: 130, intensity: 90, label: 'Blood Elevator', color: '#fde68a' },
            { time: 140, intensity: 95, label: 'The Finale', color: '#dc2626' }
        ], 
        synopsis: "Jack Torrance hopes that a winter caretaking job at the isolated Overlook Hotel will cure his writer's block. But the hotel is not as empty as it seems. As the snow piles up outside, cutting the family off from the world, the hotel's dark history begins to bleed into the present. Jack's sanity crumbles under the weight of cabin fever and supernatural influence, turning him against his wife and son in a terrifying crescendo of madness.", 
        themes: ["Isolation", "Madness", "Supernatural", "Family"], 
        awards: ["Saturn Award", "National Film Registry"] 
    })
};

// 6️⃣ CINEMATIC_COLORS
export const CINEMATIC_COLORS = {
    Thriller: '#1e293b', Drama: '#dc2626', Mystery: '#dc2626', 'Sci-Fi': '#0f172a',
    Crime: '#422006', Romance: '#be185d', Action: '#991b1b', Psychological: '#7c3aed', Horror: '#0f172a'
};

// 7️⃣ RATING_OPTIONS
export const RATING_OPTIONS = [
    { value: 1, label: "A Disappointment", color: "#dc2626", symbol: "🎫", bgColor: "bg-red-900/30", description: "Torn ticket - Total disappointment" },
    { value: 2, label: "Flawed", color: "#ea580c", symbol: "🎟️", bgColor: "bg-orange-900/30", description: "Faded ticket - Has major flaws" },
    { value: 3, label: "Worth the Ride", color: "#16a34a", symbol: "🎟️", bgColor: "bg-green-900/30", description: "Clean ticket - Solid entertainment" },
    { value: 4, label: "Exceptional", color: "#eab308", symbol: "🎫", bgColor: "bg-yellow-900/30", description: "Golden ticket - Cinematic masterpiece" }
];

// 8️⃣ PSYCH_THRILLER_FAQS
export const PSYCH_THRILLER_FAQS = {
    'The Silence of the Lambs': [
        { question: "Why is Hannibal Lecter considered an anti-hero?", answer: "Despite being a cannibalistic serial killer, Lecter is portrayed with intelligence, manners, and a twisted code of honor. He helps Clarice not out of altruism, but because he respects her intellect and courtesy. He attacks the 'rude' and the incompetent, making the audience strangely root for him against the ruder, bureaucratic villains." },
        { question: "What do the moths symbolize?", answer: "The Death's Head Hawkmoth, placed in the victims' throats, symbolizes Buffalo Bill's desire for transformation. Just as a caterpillar becomes a moth, he wants to shed his own skin and become a woman. It represents the perverse nature of his 'change'—beauty born from death and decay." },
        { question: "Is the film horror or thriller?", answer: "It is a rare hybrid that masters both. The psychological tension between Clarice and Lecter is a thriller element, while Buffalo Bill's dungeon and the graphic imagery are pure horror. It won the 'Big Five' Oscars, proving that genre distinctions don't matter when filmmaking is this masterful." },
        { question: "Why doesn't Clarice quit?", answer: "Clarice is driven by the 'screaming of the lambs'—her childhood trauma of failing to save a slaughterhouse lamb. Saving Catherine Martin is her way of silencing those screams. She endures Lecter's probing and Bill's terror because her need for redemption is stronger than her fear." }
    ],
    'Fight Club': [
        { question: "What is the true meaning of 'Project Mayhem'?", answer: "Project Mayhem represents the chaotic, destructive reaction to consumerist numbness. It isn't a solution; it's a tantrum. The film argues that stripping away civilization doesn't create freedom—it creates a fascist cult. Tyler Durden is not a hero; he is the dangerous charisma of extremism." },
        { question: "Why does the Narrator shoot himself?", answer: "Shooting himself through the cheek is the ultimate act of reclaiming control. It kills Tyler (an idea in his head) without killing himself. It symbolizes the death of his ego and his dependence on the toxic masculine fantasy Tyler represented. He is finally 'awake.'" },
        { question: "Is Marla Singer real?", answer: "Yes, Marla is the catalyst. She ruins the Narrator's fake support group therapy because her presence reflects his own lie back at him. She is the chaotic reality he tries to escape, and ultimately, the human connection he needs to accept to heal." },
        { question: "What does the soap represent?", answer: "Soap is made from fat, often rendered from humans (in the movie's logic). It symbolizes the 'cleansing' of society by using its own excess against it. Selling rich women their own fat back to them as soap is the ultimate anticapitalist joke—commodifying their own vanity." }
    ],
    'Memento': [
        { question: "Did Sammy Jankis exist?", answer: "The film strongly implies Sammy Jankis is a fabrication of Leonard's mind. Leonard projected his own tragedy (accidentally killing his wife with insulin) onto a fictional character to avoid the guilt. Sammy is the lie Leonard tells himself to keep functioning." },
        { question: "Why does the film play backwards?", answer: "The reverse chronology forces the audience to simulate Leonard's condition. We don't know the context of any scene, just like he doesn't. It makes us share his confusion, vulnerability, and his frantic need to create meaning from fragments." },
        { question: "Is Teddy the villain?", answer: "Teddy is a manipulator, but he tells the truth: Leonard has already killed the real John G. years ago. Teddy uses Leonard as a weapon to kill other criminals for profit. He is a villain, but Leonard is the one who chooses to perpetuate the cycle of murder." },
        { question: "What is the meaning of 'I have to believe in a world outside my own mind'?", answer: "This final monologue is Leonard's justification for lying to himself. He chooses to burn the photo and set himself on a path to kill Teddy, proving that we all edit our memories to create a narrative we can live with. He chooses happiness over truth." }
    ],
    'Se7en': [
        { question: "Why does John Doe turn himself in?", answer: "John Doe surrenders because his masterpiece requires it. He needs to complete the cycle of Envy (himself) and Wrath (Detective Mills). His death is not a defeat; it is the final brushstroke. By forcing Mills to kill him, he proves his point that sin is inescapable." },
        { question: "What is in the box?", answer: "The box contains the severed head of Mills' pregnant wife, Tracy. It is the ultimate psychological weapon. It destroys Mills' future and his soul in one moment, transforming a lawman into a murderer and completing the killer's sermon." },
        { question: "Is the city New York?", answer: "The city is never named. It is a stylized, noir version of an urban hellscape—always raining, dark, and decaying. By keeping it anonymous, the film suggests that this moral rot is universal, happening everywhere in the modern world." },
        { question: "Why does Somerset retire?", answer: "Somerset starts the film cynical, wanting to escape. By the end, witnessing the ultimate evil, he decides to stay (implied by the Hemingway quote). He realizes that retreating allows evil to win, and that 'fighting for' the world is a burden he must accept." }
    ],
    'Shutter Island': [
        { question: "Is Teddy Daniels sane?", answer: "No. Teddy Daniels is actually Andrew Laeddis, a patient at the asylum who murdered his manic-depressive wife after she drowned their children. The entire 'investigation' is an elaborate role-play designed by his doctors to force him to face his trauma." },
        { question: "What does the ending line mean?", answer: "'Which would be worse - to live as a monster, or to die as a good man?' This line reveals that the treatment worked. Andrew remembers who he is, but the guilt is too heavy. He chooses to pretend he has regressed so they will lobotomize him, effectively committing suicide of the mind." },
        { question: "What does the fire represent?", answer: "Fire is associated with Andrew's delusions (the fake Laeddis). It symbolizes his insanity and the destruction of his reality. Water, conversely, represents the truth (the drowning of his children), which is why he is terrified of water throughout the film." },
        { question: "Is the conspiracy real?", answer: "The conspiracy (mind control, Nazis) is a fabrication of Andrew's mind to explain the strange behavior of the staff. It is a defense mechanism. The reality is much sadder: a progressive doctor trying desperately to cure a violent patient with empathy instead of surgery." }
    ],
    'Black Swan': [
        { question: "Is Lily real?", answer: "Lily is real, but Nina's perception of her is warped. The scene where they have sex is a hallucination representing Nina embracing her own repressed sexuality. Lily acts as the 'Double'—the embodiment of everything Nina is afraid to be: loose, dangerous, and free." },
        { question: "Did Nina actually grow wings?", answer: "No. The physical transformation (feathers, red eyes, bending legs) is entirely in her mind. It visualizes her psychological break. However, the emotional transformation is real—she effectively 'becomes' the Swan by killing the human part of herself." },
        { question: "What does 'I was perfect' mean?", answer: "It is the tragedy of the artist. Nina achieved the perfect performance, but the cost was her life. It questions the value of artistic perfection—is a moment of transcendence worth total self-destruction? For Nina, in that final moment, the answer is yes." },
        { question: "Why does she stab herself?", answer: "She believes she is stabbing her rival, Lily. In reality, she stabs herself with a glass shard. This symbolizes that her greatest enemy was never Lily, but her own internal pressure. To kill the White Swan (innocence), she had to physically destroy her own body." }
    ],
    'The Machinist': [
        { question: "Why hasn't Trevor slept?", answer: "His insomnia is caused by repressed guilt. He committed a hit-and-run a year ago, killing a child. His mind refuses to let him rest because his conscience is tortured. The physical wasting away mirrors his spiritual decay." },
        { question: "Who is Ivan?", answer: "Ivan is a hallucination representing Trevor's guilt. He looks like a distorted version of Trevor's former self (confident, muscular). Ivan pushes Trevor to confront the truth. The toe-thumbs and menacing grin are manifestations of Trevor's self-loathing." },
        { question: "What does the post-it note game mean?", answer: "The hangman game is his subconscious leaving clues. The final word is 'KILLER.' It is his mind trying to break through the wall of denial he has built. Solving the puzzle means accepting that he is the villain of his own story." },
        { question: "Why does he finally sleep at the end?", answer: "After turning himself in to the police, Trevor is finally able to sleep in his cell. The confession lifts the burden of the secret. Imprisonment brings him freedom from his own mind. It suggests that punishment is a necessary part of redemption." }
    ],
    'Oldboy': [
        { question: "Why was Dae-su imprisoned for 15 years?", answer: "He was imprisoned to separate him from his daughter so she could grow up. The villain, Woo-jin, needed time to execute a plan where Dae-su would unknowingly fall in love with his own daughter, replicating the incestuous sin Woo-jin committed with his own sister." },
        { question: "What is the meaning of the tongue cutting?", answer: "Dae-su cuts out his own tongue as an act of desperate penance. He realizes his careless gossip caused the death of Woo-jin's sister. It is a sacrifice to beg for his daughter's ignorance, proving he will do anything to protect her from the truth." },
        { question: "Does the hypnosis work at the end?", answer: "The ending is ambiguous. Dae-su asks the hypnotist to split his mind, leaving the 'Monster' with the memories and the 'Man' ignorant. His final smile, shifting into a grimace, suggests the procedure might have failed, or that the pain remains even if the memory is gone." },
        { question: "Why eat a live octopus?", answer: "The scene represents Dae-su's primal state. After 15 years of eating only dumplings, he wants to consume something living to feel alive and dominant. It is a raw expression of his fury and his detachment from civilized human behavior." }
    ],
    'Taxi Driver': [
        { question: "Is Travis a hero or a villain?", answer: "He is neither; he is a symptom. The film presents him as a ticking bomb. His 'heroic' rescue of Iris is an act of violent catharsis, not pure altruism. The irony is that society celebrates him as a hero because they only see the result (saving a child), not the psychosis that drove it." },
        { question: "What is the meaning of 'You talkin' to me?'?", answer: "It shows Travis's isolation and his fantasy of confrontation. He is rehearsing for a conflict that hasn't happened yet because he desperately wants to matter. He imagines a world where he is powerful and respected, compensating for his invisibility." },
        { question: "Does Travis die at the end?", answer: "Many interpret the final sequence (where he is hailed as a hero) as a dying dream. It feels too perfect and dreamlike compared to the grit of the rest of the film. However, Scorsese has stated he survived, which is darker: a ticking bomb is back on the streets, reset and ready to explode again." },
        { question: "Why the mohawk?", answer: "The mohawk is a visual declaration of war. It signifies a soldier preparing for a suicide mission. It marks the point where Travis abandons any attempt to fit into society and fully commits to his violent destiny. He creates a ritual out of his own breakdown." }
    ],
    'The Shining': [
        { question: "What is 'The Shine'?", answer: "The Shine is a psychic ability to see the past, future, and ghosts. Danny has it, and the hotel wants it. The Overlook Hotel is a battery that feeds on this psychic energy. It wants to consume Danny to increase its power, using Jack as the tool to get to him." },
        { question: "Why is Jack in the 1921 photo?", answer: "The photo implies reincarnation or absorption. Jack has 'always been the caretaker.' His soul has been claimed by the hotel, joining the timeless party of ghosts. It suggests that Jack was never truly free; he was destined to return to the Overlook to replay its tragedy." },
        { question: "What does the elevator of blood mean?", answer: "It represents the accumulated violence of the hotel's history—Indian burial grounds, murders, suicides. The blood cannot be contained; it spills out, demanding acknowledgment. It is a visual metaphor for the return of the repressed trauma that the hotel embodies." },
        { question: "Did the hotel drive Jack crazy or was he already unstable?", answer: "Both. Jack was an alcoholic with a history of violence (dislocating Danny's shoulder). The hotel didn't create the monster; it exploited the cracks already present in Jack's psyche. It offered him a drink and validated his resentment, pushing him over the edge." }
    ]
};

// 9️⃣ HELPER FUNCTIONS & EXPORTS
export const getTMDBPosterUrl = (posterPath, size = 'medium') => {
    if (!posterPath) return null;
    const posterSize = TMDB_CONFIG.POSTER_SIZES[size] || TMDB_CONFIG.POSTER_SIZES.medium;
    return `${TMDB_CONFIG.IMAGE_BASE_URL}/${posterSize}${posterPath}`;
};

export const getSensitiveContentTypes = (tmdbId) => {
    const sensitiveData = SENSITIVE_TIMELINES[tmdbId];
    if (!sensitiveData?.scenes?.length) return null;
    const types = new Set();
    sensitiveData.scenes.forEach(scene => {
        const lowerType = scene.type.toLowerCase();
        if (lowerType.includes('sex')) types.add('intimate scenes');
        if (lowerType.includes('nudity')) types.add('nudity');
        if (lowerType.includes('kissing')) types.add('kissing scenes');
    });
    return Array.from(types);
};

export const generateFAQData = (movie) => {
    return PSYCH_THRILLER_FAQS[movie.Title] || [];
};

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const posterUrl = FALLBACK_POSTERS[movie.tmdbId] || '';
    return {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        'name': movie.Title,
        'description': movieInfo?.synopsis || `${movie.Title} - A gripping psychological thriller`,
        'genre': movie.genre,
        'datePublished': movie.year.toString(),
        'director': { '@type': 'Person', 'name': movieInfo?.director || 'Acclaimed Director' },
        'actor': movieInfo?.cast?.map(actor => ({ '@type': 'Person', 'name': actor })) || [],
        'duration': `PT${movie.runtime}M`,
        'image': posterUrl,
        'aggregateRating': { 
            '@type': 'AggregateRating', 
            'ratingValue': movieInfo?.rating || 7.5, 
            'bestRating': 10, 
            'worstRating': 1, 
            'ratingCount': movieInfo?.audienceScore || 100 
        }
    };
};

export const generateFAQSchema = (faqs) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({ 
        '@type': 'Question', 
        'name': faq.question, 
        'acceptedAnswer': { '@type': 'Answer', 'text': faq.answer } 
    }))
});

export const fetchMovieFromTMDB = async (tmdbId) => ({ 
    poster_path: null, 
    title: COMPLETE_MOVIE_DATABASE.find(m => m.tmdbId === tmdbId)?.Title || 'Unknown Movie' 
});

export const fetchWatchProviders = async (tmdbId, region = 'US') => null;

export const formatSensitiveTimeline = (tmdbId) => {
    const raw = SENSITIVE_TIMELINES[tmdbId];
    if (!raw || !raw.scenes || raw.scenes.length === 0) return null;
    return {
        scenes: raw.scenes.map(scene => ({
            start: scene.start,
            end: scene.end,
            type: scene.type,
            description: scene.description || ''
        }))
    };
};

// Build object map by tmdbId
export const COMPLETE_PSYCH_THRILLER_DATABASE = Object.fromEntries(
    COMPLETE_MOVIE_DATABASE.map(m => [m.tmdbId, m])
);

export default COMPLETE_PSYCH_THRILLER_DATABASE;