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

// Helper to ensure default values with the new KILLER metric
const createMovieData = (data) => ({
    sanityErosion: 90, // The new "Brain-Melt" Metric 🧠
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
        { start: '11:20', end: '11:40', type: 'Sexual Content', severity: 'Moderate' },
        { start: '57:37', end: '1:01:10', type: 'Nudity (Woman)', severity: 'Moderate' },
        { start: '1:03:35', end: '1:05:10', type: 'Sex', severity: 'High' },
        { start: '1:22:20', end: '1:22:36', type: 'Sexual Content', severity: 'Moderate' },
        { start: '1:30:30', end: '1:30:38', type: 'Partial Nudity (man)', severity: 'Mild' }
    ]},
    103: { scenes: [
        { start: '35:34', end: '35:45', type: 'Sexual Content', severity: 'Moderate' },
        { start: '58:52', end: '59:05', type: 'Sexual Content', severity: 'Moderate' }
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
    4553: "https://image.tmdb.org/t/p/w500/wM2oJ5s4E5c0t9c2c2f2f2f2.jpg",
    670: "https://image.tmdb.org/t/p/w500/pWDtjs568ZfOTMbURQBYuT4Qxka.jpg",
    103: "https://image.tmdb.org/t/p/w500/ekstpHby5fsBliVqgJ6kL.jpg",
    694: "https://image.tmdb.org/t/p/w500/9w0Vkq1e5c3bWp6b1c1c1.jpg"
};

export const COMPLETE_MOVIE_DATA = {
    // 1. The Silence of the Lambs (1991) - STATUS: PSYCHOLOGICAL DOMINATION
    274: createMovieData({ 
        sanityErosion: 90, complexityLevel: "HIGH", 
        dominantColor: "#4a5568", rating: 8.6,
        dna: { Thriller: 55, Crime: 30, Horror: 15 }, 
        scenes: [
            { time: 10, intensity: 32, label: "First Interview", color: "#b91c1c" },
            { time: 46, intensity: 68, label: "Lecter Escapes", color: "#f87171" },
            { time: 82, intensity: 78, label: "Night Vision Stalk", color: "#fbbf24" },
            { time: 102, intensity: 90, label: "Buffalo Bill Basement", color: "#fde68a" },
            { time: 113, intensity: 93, label: "Lecter Walks Free", color: "#dc2626" } // PEAK: Lingering Unease
        ],
        synopsis: "A young FBI trainee must seek the help of an incarcerated cannibal to catch another serial killer. A perfect psychological dance that exerts pressure through manipulation rather than shock."
    }),

    // 2. Fight Club (1999) - STATUS: IDENTITY COLLAPSE
    550: createMovieData({ 
        sanityErosion: 96, complexityLevel: "EXTREME", 
        dominantColor: "#3f6212", rating: 8.8,
        dna: { Drama: 50, Psychological: 30, Thriller: 20 }, 
        scenes: [
            { time: 5, intensity: 35, label: "Meeting Tyler Durden", color: "#b91c1c" },
            { time: 50, intensity: 70, label: "Fight Club Formation", color: "#f87171" },
            { time: 100, intensity: 85, label: "Self-Inflicted Gunshot", color: "#fbbf24" },
            { time: 115, intensity: 90, label: "Project Mayhem Realized", color: "#fde68a" },
            { time: 125, intensity: 96, label: "You Met Me at a Very Strange Time", color: "#dc2626" } // PEAK: Genre-Defining
        ]
    }),

    // 4. Se7en (1995) - STATUS: NIHILISTIC SINGULARITY
    807: createMovieData({ 
        sanityErosion: 97, complexityLevel: "HIGH", 
        dominantColor: "#1c1917", rating: 8.6,
        dna: { Mystery: 45, Thriller: 45, Crime: 10 }, 
        scenes: [
            { time: 8, intensity: 45, label: "Gluttony", color: "#b91c1c" },
            { time: 38, intensity: 65, label: "Greed", color: "#f87171" },
            { time: 77, intensity: 80, label: "Lust", color: "#fbbf24" },
            { time: 102, intensity: 90, label: "Desert Confrontation", color: "#fde68a" },
            { time: 120, intensity: 98, label: "What's in the Box?", color: "#dc2626" } // PEAK: Moral Annihilation
        ]
    }),

    // 5. Shutter Island (2010) - STATUS: PSYCHOLOGICAL TRAGEDY
    11324: createMovieData({ 
        sanityErosion: 90, complexityLevel: "HIGH", 
        dominantColor: "#334155", rating: 8.2,
        dna: { Mystery: 50, Thriller: 35, Drama: 15 }, 
        scenes: [
            { time: 15, intensity: 38, label: "Arrival", color: "#b91c1c" },
            { time: 60, intensity: 65, label: "Interrogation Room", color: "#f87171" },
            { time: 95, intensity: 78, label: "Storm Breaks", color: "#fbbf24" },
            { time: 110, intensity: 89, label: "Hospital Truth", color: "#fde68a" },
            { time: 130, intensity: 96, label: "Which Would Be Worse?", color: "#dc2626" } // PEAK: Tragic Acceptance
        ]
    }),

    // 6. Black Swan (2010) - STATUS: SELF-DESTRUCTION
    44214: createMovieData({ 
        sanityErosion: 95, complexityLevel: "HIGH", 
        dominantColor: "#18181b", rating: 8.0,
        dna: { Drama: 50, Thriller: 45, Horror: 5 }, 
        scenes: [
            { time: 12, intensity: 35, label: "Audition", color: "#b91c1c" },
            { time: 40, intensity: 60, label: "Rehearsal Tension", color: "#f87171" },
            { time: 75, intensity: 78, label: "Performance Panic", color: "#fbbf24" },
            { time: 95, intensity: 88, label: "Mirror Breakdown", color: "#fde68a" },
            { time: 105, intensity: 95, label: "I Was Perfect", color: "#dc2626" } // PEAK: Identity Annihilation
        ]
    }),

    // 8. Oldboy (2003) - STATUS: EXISTENTIAL CRUELTY
    670: createMovieData({ 
        sanityErosion: 98, complexityLevel: "EXTREME", 
        dominantColor: "#365314", rating: 8.4,
        dna: { Drama: 40, Mystery: 30, Thriller: 30 }, 
        scenes: [
            { time: 10, intensity: 40, label: "Imprisonment", color: "#b91c1c" },
            { time: 60, intensity: 72, label: "Revenge Path", color: "#f87171" },
            { time: 95, intensity: 82, label: "Hammer Corridor Aftermath", color: "#fbbf24" },
            { time: 115, intensity: 90, label: "Hypnosis Game", color: "#fde68a" },
            { time: 120, intensity: 100, label: "The Truth", color: "#dc2626" } // PEAK: Soul-Destroying
        ]
    }),

    // 9. Taxi Driver (1976) - STATUS: PSYCHOLOGICAL IMPLOSION
    103: createMovieData({ 
        sanityErosion: 92, complexityLevel: "HIGH", 
        dominantColor: "#eab308", rating: 8.3,
        dna: { Drama: 50, Crime: 30, Thriller: 20 }, 
        scenes: [
            { time: 15, intensity: 38, label: "Night Driving", color: "#b91c1c" },
            { time: 48, intensity: 62, label: "Violent Fantasies", color: "#f87171" },
            { time: 90, intensity: 78, label: "Preparation", color: "#fbbf24" },
            { time: 110, intensity: 92, label: "Brothel Shootout", color: "#fde68a" },
            { time: 113, intensity: 85, label: "Media Mythology", color: "#dc2626" } // Descent after the spike
        ]
    }),

    // 10. The Shining (1980) - STATUS: SLOW-BURN MADNESS
    694: createMovieData({ 
        sanityErosion: 95, complexityLevel: "HIGH", 
        dominantColor: "#ea580c", rating: 8.4,
        dna: { Drama: 40, Horror: 40, Thriller: 20 }, 
        scenes: [
            { time: 12, intensity: 35, label: "First Snow", color: "#b91c1c" },
            { time: 50, intensity: 68, label: "Grady Conversation", color: "#f87171" },
            { time: 85, intensity: 80, label: "Blood Elevator Vision", color: "#fbbf24" },
            { time: 120, intensity: 90, label: "Here's Johnny", color: "#fde68a" },
            { time: 140, intensity: 95, label: "Frozen in the Maze", color: "#dc2626" } // PEAK: Haunting Climax
        ]
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