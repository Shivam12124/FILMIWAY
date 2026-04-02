// utils/revengeMovieData.js - COMPLETE REVENGE COLLECTION DATA ✅
// Movies exploring visceral impact, moral complexity, and the cost of vengeance.

export const TMDB_CONFIG = {
      API_KEY: 'process.env.NEXT_PUBLIC_TMDB_API_KEY',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

// 1. RAW DATA LIST (The Database)
export const COMPLETE_MOVIE_DATABASE = [
    { tmdbId: 670, imdbID: 'tt0364569', Title: 'Oldboy', year: 2003, genre: 'Action Mystery', runtime: 120, rank: 1 },
    { tmdbId: 98, imdbID: 'tt0172495', Title: 'Gladiator', year: 2000, genre: 'Action Drama', runtime: 155, rank: 2 },
    { tmdbId: 33, imdbID: 'tt0105695', Title: 'Unforgiven', year: 1992, genre: 'Western', runtime: 130, rank: 3 },
    { tmdbId: 197, imdbID: 'tt0112573', Title: 'Braveheart', year: 1995, genre: 'History Drama', runtime: 178, rank: 4 },
    { tmdbId: 1124, imdbID: 'tt0482571', Title: 'The Prestige', year: 2006, genre: 'Sci-Fi Thriller', runtime: 130, rank: 5 },
    { tmdbId: 281957, imdbID: 'tt1663202', Title: 'The Revenant', year: 2015, genre: 'Adventure Drama', runtime: 156, rank: 6 },
    { tmdbId: 393, imdbID: 'tt0378194', Title: 'Kill Bill: Vol. 2', year: 2004, genre: 'Action Crime', runtime: 137, rank: 7 },
    { tmdbId: 245891, imdbID: 'tt2911666', Title: 'John Wick', year: 2014, genre: 'Action Thriller', runtime: 101, rank: 8 },
    { tmdbId: 49797, imdbID: 'tt1588170', Title: 'I Saw the Devil', year: 2010, genre: 'Thriller Horror', runtime: 144, rank: 9 },
    { tmdbId: 11362, imdbID: 'tt0245844', Title: 'The Count of Monte Cristo', year: 2002, genre: 'Adventure Action', runtime: 131, rank: 10 }
];

const timeToSeconds = (timeStr) => {
    const parts = timeStr.split(':').map(Number);
    if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
    if (parts.length === 2) return parts[0] * 60 + parts[1];
    return 0;
};

// 2. SENSITIVE TIMELINES
export const SENSITIVE_TIMELINES = {
    670: { scenes: [
        { start: '11:20', end: '11:40', type: 'Sexual Content', severity: 'Moderate' },
        { start: '57:37', end: '1:01:10', type: 'Partial nudity (Woman)', severity: 'Moderate' },
        { start: '1:03:35', end: '1:05:10', type: 'Sex', severity: 'High' },
        { start: '1:22:20', end: '1:22:36', type: 'Sexual Content', severity: 'Moderate' },
        { start: '1:30:30', end: '1:30:38', type: 'Partial nudity (Man)', severity: 'Mild' }
    ]},
   98: { 
        scenes: [
            { start: "50:40", end: "50:55", type: "Partial Nudity (Man)", severity: "Mild" }
        ] 
    },
    33: { scenes: [] },
    197: { scenes: [{ start: '38:23', end: '39:20', type: 'Nudity', severity: 'Moderate' }] },
    1124: { scenes: [] },
     281957: { scenes: [{ start: "0:06:44", end: "0:06:48", type: "Nudity", severity: "Moderate", description: "Male buttocks" }, { start: "1:44:00", end: "1:44:23", type: "Sex ", severity: "Moderate" }] },
    393: { scenes: [] },
      245891: { 
        scenes: [
            { start: "45:00", end: "45:30", type: "Suggestive Clothing (Bikini)", severity: "Mild" }
        ] 
    },
    49797: { scenes: [{ start: '9:53', end: '10:25 ', type: 'Nudity', severity: 'Moderate"' }, { start: '26:40', end: '27:40', type: 'Sex & Nudity', severity: 'Moderate"' }] },
    11362: { scenes: [] }
};

// 3. FALLBACK POSTERS
export const FALLBACK_POSTERS = {
    670: "https://image.tmdb.org/t/p/w500/pWDtjs568ZfOTMbURQBYuT4Qxka.jpg",
    98: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    33: "https://image.tmdb.org/t/p/w500/54nJ1pYd2L8k1X5Yp2F1vX9.jpg",
    197: "https://image.tmdb.org/t/p/w500/or1gBugydmjToi8qSFKpRlIyN5p.jpg",
    1124: "https://image.tmdb.org/t/p/w500/tRNlZbgNCNOpLpbPEz5L8G8oa0J.jpg",
    281957: "https://image.tmdb.org/t/p/w500/ji3ecJphATlguKMxT63J1QyqQ.jpg",
    393: "https://image.tmdb.org/t/p/w500/2yhg0mZQMhDyvUQ4rG1IZ4oIaP6.jpg",
    245891: "https://image.tmdb.org/t/p/w500/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
    49797: "https://image.tmdb.org/t/p/w500/zp5jh4fyqGRyPd2b9X2E8C.jpg",
    11362: "https://image.tmdb.org/t/p/w500/9.jpg"
};

// Helper: Create Data with Revenge Metrics
const createRevengeData = (data) => ({
    revengeIntensity: 90,
    moralComplexity: 85,
    visceralImpact: 90,
    complexityLevel: "HIGH",
    dominantColor: "#EF4444",
    ...data,
});

// 4. DETAILED MOVIE DATA (Object)
export const COMPLETE_MOVIE_DATA = {
    // 1. Oldboy (2003) - STATUS: EXISTENTIAL MASTERY
    670: createRevengeData({ 
        revengeIntensity: 100, moralComplexity: 98, visceralImpact: 100, complexityLevel: "EXTREME", 
        dominantColor: "#0f172a", rating: 8.4, director: "Park Chan-wook", 
        cast: ['Choi Min-sik', 'Yoo Ji-tae', 'Kang Hye-jung'], 
        dna: { "Mystery": 40, "Thriller": 35, "Action": 25 }, 
        scenes: [
            { time: 10, intensity: 42, label: 'The Abduction', color: '#0f172a' },
            { time: 25, intensity: 58, label: '15 Years Later', color: '#334155' },
            { time: 68, intensity: 88, label: 'Corridor Fight', color: '#dc2626' },
            { time: 90, intensity: 72, label: 'The Penthouse', color: '#475569' },
            { time: 115, intensity: 100, label: 'The Tongue', color: '#991b1b' } 
        ], 
        synopsis: "A genre-shattering masterpiece where the revenge is not a victory, but a trap. Oh Dae-su's 15-year imprisonment leads to a revelation so devastating it redefines the limits of psychological trauma.", 
        themes: ["Incest", "Memory", "Karma", "Despair"]
    }),

    // 2. Gladiator (2000) - STATUS: HEROIC TRAGEDY
    98: createRevengeData({ 
        revengeIntensity: 92, moralComplexity: 60, visceralImpact: 88, complexityLevel: "MEDIUM", 
        dominantColor: "#f59e0b", rating: 8.5, director: "Ridley Scott", 
        cast: ["Russell Crowe", "Joaquin Phoenix"],
        dna: { "Action": 50, "Drama": 40, "History": 10 },
        scenes: [
            { time: 25, intensity: 78, label: 'Family Murdered', color: '#7c2d12' },
            { time: 60, intensity: 65, label: 'Zucchabar Arena', color: '#d97706' },
            { time: 95, intensity: 82, label: 'Are You Not Entertained?', color: '#b45309' },
            { time: 125, intensity: 80, label: 'Reveal to Commodus', color: '#ea580c' },
            { time: 145, intensity: 92, label: 'Final Duel', color: '#f59e0b' }
        ], 
        synopsis: "An epic tale of a fallen general seeking justice in the arena. While visceral and grand, its power lies in its classical emotional arc and mythic satisfaction.", 
        themes: ["Honor", "Legacy", "Tyranny", "Freedom"]
    }),

    // 3. Unforgiven (1992) - STATUS: MORAL DEVASTATION
    33: createRevengeData({ 
        revengeIntensity: 94, moralComplexity: 98, visceralImpact: 82, complexityLevel: "HIGH", 
        dominantColor: "#dc2626", rating: 8.2, director: "Clint Eastwood", 
        cast: ["Clint Eastwood", "Gene Hackman", "Morgan Freeman"],
        dna: { "Western": 50, "Drama": 30, "Action": 20 },
        scenes: [
            { time: 20, intensity: 28, label: 'The Pig Farm', color: '#7f1d1d' },
            { time: 60, intensity: 52, label: "Little Bill's Beating", color: '#991b1b' },
            { time: 108, intensity: 80, label: "Ned's Death", color: '#b91c1c' },
            { time: 115, intensity: 86, label: 'Whiskey Bottle', color: '#ef4444' },
            { time: 124, intensity: 94, label: 'Saloon Showdown', color: '#0f172a' }
        ],
        synopsis: "A deconstructive masterpiece that strips away Western myths. William Munny's return to violence is a somber reflection on the permanent stains of a killer's soul.",
        themes: ["Legacy", "Violence", "Justice", "Redemption"]
    }),

    // 4. Braveheart (1995) - STATUS: NATIONALIST VENDETTA
    197: createRevengeData({ 
        revengeIntensity: 95, moralComplexity: 50, visceralImpact: 90, complexityLevel: "MEDIUM", 
        dominantColor: "#1d4ed8", rating: 8.4, director: "Mel Gibson", 
        cast: ["Mel Gibson", "Sophie Marceau"],
        dna: { "History": 40, "Action": 40, "Drama": 20 },
        scenes: [
            { time: 38, intensity: 95, label: "Murron's Execution", color: '#b91c1c' },
            { time: 85, intensity: 88, label: 'Stirling Bridge', color: '#1d4ed8' },
            { time: 130, intensity: 82, label: 'Battle of Falkirk', color: '#1e40af' },
            { time: 155, intensity: 70, label: 'The Betrayal', color: '#1e3a8a' },
            { time: 175, intensity: 100, label: 'Freedom!', color: '#0f172a' }
        ],
        synopsis: "A sweeping historical epic where personal loss ignites a revolution. William Wallace’s quest to avenge his wife becomes the rallying cry for a nation's independence.",
        themes: ["Freedom", "Betrayal", "Patriotism", "Sacrifice"]
    }),

    // 5. The Prestige (2006) - STATUS: PSYCHOLOGICAL COLLAPSE
    1124: createRevengeData({ 
        revengeIntensity: 96, moralComplexity: 95, visceralImpact: 80, complexityLevel: "EXTREME", 
        dominantColor: "#6b21a8", rating: 8.5, director: "Christopher Nolan", 
        cast: ['Hugh Jackman', 'Christian Bale', 'Scarlett Johansson'],
        dna: { "Mystery": 45, "Thriller": 35, "Sci-Fi": 20 },
        scenes: [
            { time: 12, intensity: 55, label: 'The Drowning', color: '#581c87' },
            { time: 45, intensity: 62, label: 'The Bullet Catch', color: '#6b21a8' },
            { time: 80, intensity: 74, label: "Tesla's Lab", color: '#7e22ce' },
            { time: 100, intensity: 83, label: "Angier's Return", color: '#9333ea' },
            { time: 125, intensity: 96, label: 'The Final Prestige', color: '#3b0764' }
        ],
        synopsis: "A brilliant, non-linear descent into an escalating rivalry. Nolan explores how the obsession with destroying a rival can clone a man's darkness until nothing else remains.",
        themes: ["Obsession", "Identity", "Secrets", "Sacrifice"]
    }),

    // 6. The Revenant (2015) - STATUS: PRIMAL RETRIBUTION
    281957: createRevengeData({ 
        revengeIntensity: 90, moralComplexity: 72, visceralImpact: 100, complexityLevel: "HIGH", 
        dominantColor: "#475569", rating: 8.0, director: "Alejandro Iñárritu", 
        cast: ["Leonardo DiCaprio", "Tom Hardy"],
        dna: { "Adventure": 50, "Drama": 30, "Action": 20 },
        scenes: [
            { time: 5, intensity: 85, label: 'Pawnee Attack', color: '#475569' },
            { time: 25, intensity: 100, label: 'The Bear', color: '#1e293b' },
            { time: 35, intensity: 95, label: "Hawk's Murder", color: '#0f172a' },
            { time: 110, intensity: 80, label: 'Mountain Fall', color: '#64748b' },
            { time: 148, intensity: 96, label: 'Final Duel', color: '#000000' }
        ],
        synopsis: "A brutal, visually immersive survival epic. Hugh Glass’s journey through the frozen wilderness is fueled entirely by the primal need to confront the man who left him for dead.",
        themes: ["Survival", "Nature", "Betrayal", "Spirituality"]
    }),

    // 7. Kill Bill: Vol. 2 (2004) - STATUS: MATERNAL FURY
    393: createRevengeData({ 
        revengeIntensity: 94, moralComplexity: 80, visceralImpact: 85, complexityLevel: "MEDIUM", 
        dominantColor: "#facc15", rating: 8.0, director: "Quentin Tarantino", 
        cast: ["Uma Thurman", "David Carradine"],
        dna: { "Action": 45, "Crime": 35, "Drama": 20 },
        scenes: [
            { time: 45, intensity: 92, label: 'Buried Alive', color: '#854d0e' },
            { time: 60, intensity: 70, label: 'Pai Mei Training', color: '#ca8a04' },
            { time: 95, intensity: 88, label: 'Elle Driver Fight', color: '#eab308' },
            { time: 110, intensity: 65, label: 'Meeting B.B.', color: '#fde047' },
            { time: 130, intensity: 94, label: 'The Final Step', color: '#000000' }
        ],
        synopsis: "Tarantino’s operatic conclusion to the Bride's journey. Vol. 2 shifts from the sword to the soul, revealing the complex love and hate that exists between the killer and her creator.",
        themes: ["Motherhood", "Redemption", "Honor", "Closure"]
    }),

    // 8. John Wick (2014) - STATUS: ADRENALINE SURGE
    245891: createRevengeData({ 
        revengeIntensity: 89, moralComplexity: 40, visceralImpact: 92, complexityLevel: "MEDIUM", 
        dominantColor: "#f59e0b", rating: 7.4, director: "Chad Stahelski", 
        cast: ["Keanu Reeves", "Michael Nyqvist"],
        dna: { "Action": 60, "Thriller": 30, "Crime": 10 },
        scenes: [
            { time: 15, intensity: 72, label: 'Puppy Death', color: '#dc2626' },
            { time: 30, intensity: 55, label: 'The Sledgehammer', color: '#475569' },
            { time: 50, intensity: 78, label: 'Home Invasion', color: '#f59e0b' },
            { time: 78, intensity: 88, label: 'Red Circle Club', color: '#9333ea' },
            { time: 95, intensity: 89, label: 'Dock Showdown', color: '#0f172a' } 
        ],
        synopsis: "A sleek, stylized explosion of neon-noir action. When a retired assassin loses his only connection to his late wife, he dismantles a criminal empire with surgical precision.",
        themes: ["Legacy", "Fate", "Underworld Codes", "Grief"]
    }),

    // 9. I Saw the Devil (2010) - STATUS: PURE MONSTROSITY
    49797: createRevengeData({ 
        revengeIntensity: 99, moralComplexity: 92, visceralImpact: 100, complexityLevel: "HIGH", 
        dominantColor: "#991b1b", rating: 7.8, director: "Kim Jee-woon", 
        cast: ["Lee Byung-hun", "Choi Min-sik"],
        dna: { "Thriller": 45, "Crime": 35, "Horror": 20 },
        scenes: [
            { time: 8, intensity: 70, label: 'The Murder', color: '#991b1b' },
            { time: 40, intensity: 78, label: 'Catch & Release 1', color: '#b91c1c' },
            { time: 85, intensity: 86, label: 'The Greenhouse', color: '#7f1d1d' },
            { time: 110, intensity: 92, label: 'Turning Tables', color: '#0f172a' },
            { time: 138, intensity: 96, label: 'The Final Gift', color: '#000000' }
        ],
        synopsis: "A horrifyingly intense game of cat-and-mouse. Soo-hyun's hunt for a serial killer becomes so brutal that the boundary between the hero and the monster completely evaporates.",
        themes: ["Moral Decay", "Cruelty", "Vengeance", "Grief"]
    }),

    // 10. The Count of Monte Cristo (2002) - STATUS: CLASSIC TRIUMPH
    11362: createRevengeData({ 
        revengeIntensity: 88, moralComplexity: 70, visceralImpact: 78, complexityLevel: "MEDIUM", 
        dominantColor: "#1e3a8a", rating: 7.7, director: "Kevin Reynolds", 
        cast: ["Jim Caviezel", "Guy Pearce"],
        dna: { "Adventure": 45, "Action": 35, "Drama": 20 },
        scenes: [
            { time: 12, intensity: 60, label: 'Wrongful Arrest', color: '#1e3a8a' },
            { time: 55, intensity: 82, label: 'Escape from d’If', color: '#1d4ed8' },
            { time: 85, intensity: 75, label: "The Count's Reveal", color: '#1e40af' },
            { time: 105, intensity: 80, label: "Albert's Abduction", color: '#1e3a8a' },
            { time: 125, intensity: 90, label: 'The Final Duel', color: '#0f172a' }
        ],
        synopsis: "The ultimate tale of transformation and patience. Edmond Dantès' journey from betrayed prisoner to wealthy nobleman is a masterclass in slow-burn, strategic justice.",
        themes: ["Justice", "Patience", "Class Struggle", "Betrayal"]
    })
};
// 5. CUSTOM FAQs
export const REVENGE_MOVIE_FAQS = {
    'Oldboy': [
        { question: "What is the final twist in the movie Oldboy?", answer: "The devastating twist reveals that the antagonist, Woo-jin, orchestrated a complex, decades-long plan to manipulate Dae-su into unknowingly falling in love with his own daughter, serving as the ultimate psychological revenge." },
        { question: "Did the actor really eat a live octopus in Oldboy?", answer: "Yes, in one of the film's most famous scenes, actor Choi Min-sik actually consumed four live octopuses across multiple takes to capture the raw, visceral desperation of his character." },
        { question: "Why was Oh Dae-su imprisoned for exactly 15 years?", answer: "He was kept in the private prison for 15 years specifically to allow his daughter, who was a toddler when he was captured, to grow into an adult woman, setting the stage for Woo-jin's final trap." },
        { question: "Does Dae-su remember the truth at the end of Oldboy?", answer: "The ending is deliberately ambiguous. He visits a hypnotist to erase the traumatic memory of his daughter's identity, but his final, pained smile leaves the audience wondering if the hypnosis actually worked or if he is faking ignorance to survive." }
    ],
    'Gladiator': [
        { question: "Is Maximus from Gladiator based on a real historical figure?", answer: "Maximus Decimus Meridius is a fictional character, but he is heavily inspired by real historical figures, including the Roman general Narcissus (who assassinated Commodus) and Spartacus, the famous gladiator who led a slave uprising." },
        { question: "Did Emperor Commodus really kill his father Marcus Aurelius?", answer: "No, historically Emperor Marcus Aurelius died of natural causes (likely the Antonine Plague) in 180 AD. The movie dramatically altered this event to establish Commodus as the central villain." },
        { question: "Was a real Colosseum built for the movie Gladiator?", answer: "The production built a massive, 52-foot-high replica of about one-third of the Roman Colosseum in Malta. The remaining two-thirds, including the upper tiers and the roaring crowds, were created using groundbreaking CGI." },
        { question: "What is the meaning of the ending in Gladiator?", answer: "When Maximus dies in the arena, his visions of the wheat fields signify that he has finally earned peace. Having fulfilled his vow to avenge his family and restore Rome's honor, he crosses into Elysium (the afterlife) to reunite with his wife and son." }
    ],
    'Unforgiven': [
        { question: "Why is Unforgiven considered a 'revisionist' Western?", answer: "Instead of portraying the Wild West as a place of heroic gunfights and clear-cut morality, Unforgiven strips away the romantic myth. It shows violence as clumsy, terrifying, and deeply damaging to the soul, and depicts 'heroes' as flawed, aging men." },
        { question: "Why does William Munny agree to do one last killing?", answer: "Despite swearing off violence, Munny is desperate. His pig farm is failing, his wife has died, and he needs the bounty money to ensure his young children do not starve or grow up in total poverty." },
        { question: "What does the writer W.W. Beauchamp represent in Unforgiven?", answer: "Beauchamp represents the sensationalist 'dime novelists' of the 19th century who irresponsibly turned gritty, brutal outlaws into romanticized legends, fueling the toxic mythology of the American West." },
        { question: "What does the final scene of Unforgiven mean?", answer: "When Munny threatens to kill anyone who shoots at him, it proves that his terrifying capacity for cold-blooded violence never truly left him. It shatters the illusion that a person can ever completely walk away from a violent past." }
    ],
    'Braveheart': [
        { question: "How historically accurate is the movie Braveheart?", answer: "The film is highly fictionalized for dramatic effect. For example, 13th-century Scots did not wear belted plaids (kilts), the romantic subplot with Princess Isabella is impossible due to her age at the time, and the English did not invoke 'Prima Nocta'." },
        { question: "Why does William Wallace scream 'Freedom' at the end?", answer: "His final scream is the ultimate act of defiance. By refusing to beg for mercy or submit to the English King, he ensures he dies as a martyr, inspiring the Scottish rebellion to fight on and eventually win their independence." },
        { question: "Did the real Battle of Stirling Bridge happen on a bridge?", answer: "Yes, the historical Battle of Stirling Bridge was a tactical masterclass where the Scots trapped the English on a narrow bridge. However, director Mel Gibson chose to film it on an open field to create a more cinematic, chaotic clash." },
        { question: "Did Scottish warriors really paint their faces blue?", answer: "Using blue woad dye was a tradition of the ancient Picts who fought the Romans centuries earlier. It was not used by 13th-century Scottish soldiers, but it was included in the film to make Wallace's army look more visually intimidating." }
    ],
    'The Prestige': [
        { question: "What is the big twist regarding Alfred Borden in The Prestige?", answer: "The twist reveals that 'Alfred Borden' was actually identical twins sharing one life and one identity. They took turns playing Borden and his assistant Fallon, sacrificing their individual lives to pull off the ultimate illusion." },
        { question: "Did Nikola Tesla's machine actually work in The Prestige?", answer: "Yes, within the sci-fi logic of the film, Tesla's machine was not a teleportation device, but a cloning machine. It created an exact duplicate of Angier every time he used it, forcing him to murder his own clone during every performance." },
        { question: "What does the title 'The Prestige' actually mean?", answer: "In the film's lore, a magic trick has three parts: The Pledge (showing an ordinary object), The Turn (making it disappear), and The Prestige (bringing it back). The Prestige is the hardest part and the one that earns the audience's applause." },
        { question: "Who is the real villain in The Prestige?", answer: "The film argues that both Angier and Borden are villains. Their escalating obsession with besting one another destroys the lives of everyone around them, proving that the pursuit of absolute perfection demands a monstrous personal cost." }
    ],
    'The Revenant': [
        { question: "Is the movie The Revenant based on a true story?", answer: "Yes, it is heavily inspired by the true story of Hugh Glass, an American frontiersman who was mauled by a grizzly bear in 1823 and left for dead by his companions, forcing him to crawl for weeks through the wilderness to survive." },
        { question: "Did Leonardo DiCaprio actually sleep inside a dead horse?", answer: "While the horse carcass was a highly realistic prop created by the art department, DiCaprio did subject himself to extreme conditions, including swimming in freezing rivers and famously eating a real, raw bison liver on camera." },
        { question: "Why does Hugh Glass let Fitzgerald live at the end of The Revenant?", answer: "Glass realizes that killing Fitzgerald will not bring his son back. By pushing Fitzgerald down the river to the Arikara tribe, he adheres to the belief that 'revenge is in the Creator's hands,' surrendering his personal vengeance to fate." },
        { question: "How did they film the bear attack in The Revenant?", answer: "The attack is a masterful blend of highly detailed CGI and live-action stunt work. A stuntman wearing a blue suit physically threw DiCaprio around the set, and the bear was later digitally painted over the stuntman in post-production." }
    ],
    'Kill Bill: Vol. 2': [
        { question: "Is the Five Point Palm Exploding Heart Technique a real martial arts move?", answer: "No, the technique is entirely fictional, created by Quentin Tarantino as a homage to classic 1970s Shaw Brothers kung-fu movies. It serves as the ultimate, mythical finishing move to conclude The Bride's journey." },
        { question: "Why is the final fight with Bill so short and quiet?", answer: "After hours of bloody, high-octane sword fights, the quiet conversation and swift end subvert audience expectations. It emphasizes the tragic, intimate reality that Bill and The Bride were former lovers, making the climax an emotional breakup rather than a generic action scene." },
        { question: "Why is The Bride's name 'beped' out in the first movie?", answer: "Her real name, Beatrix Kiddo, is hidden in Vol. 1 to build her mythic status as an unstoppable force of nature. Revealing her name in Vol. 2 humanizes her, shifting her role from a cold assassin to a grieving mother." },
        { question: "Why did Bill try to assassinate The Bride at her wedding?", answer: "Bill's motivation was born from toxic, murderous jealousy. When he realized she had faked her death to escape him and marry a civilian, his heartbreak and ego drove him to destroy the peaceful life she was trying to build." }
    ],
    'John Wick': [
        { question: "Why is the death of the dog so important to John Wick?", answer: "The beagle puppy was the final gift from his terminally ill wife. It wasn't just a pet; it represented John's last remaining connection to his wife and his final chance to grieve and live a peaceful, normal life outside the assassin world." },
        { question: "How does the Gold Coin currency work in John Wick?", answer: "The gold coins are not tied to a specific monetary value like dollars. Instead, they represent an absolute currency of favors, respect, and access within the assassin underworld. One coin can buy a drink, a gun, or body disposal." },
        { question: "Did Keanu Reeves perform his own stunts and shooting in John Wick?", answer: "Yes, Keanu Reeves trained extensively for months in Judo, Brazilian Jiu-Jitsu, and tactical 3-gun shooting (pistol, rifle, shotgun). He performed roughly 90% of his own stunts, which is why the camera rarely cuts away during action scenes." },
        { question: "What does 'Baba Yaga' mean in John Wick?", answer: "While 'Baba Yaga' traditionally refers to a witch in Slavic folklore, the film uses it to mean 'The Boogeyman.' As the Russian mob boss explains, John Wick isn't exactly the Boogeyman; 'he is the one you sent to kill the fucking Boogeyman.'" }
    ],
    'I Saw the Devil': [
        { question: "What is the core message of the movie I Saw the Devil?", answer: "The film explores the Nietzschean warning: 'He who fights with monsters should look to it that he himself does not become a monster.' The protagonist's quest for vengeance completely strips him of his humanity, making him as sadistic as the killer." },
        { question: "Why does the protagonist keep catching and releasing the killer?", answer: "He refuses to give the killer the mercy of a quick death. By planting a tracker on him, he beats the killer to the brink of death, lets him heal, and repeats the process, intending to inflict the maximum amount of prolonged psychological and physical torture." },
        { question: "Is there an alternate ending to I Saw the Devil?", answer: "Yes, the director's cut features a slightly different tone at the end. Instead of breaking down into agonizing sobs, one version shows him walking away with a blank, stoic expression, leaving it ambiguous as to whether he feels regret or just complete emotional emptiness." },
        { question: "Why is the violence in I Saw the Devil so extreme and graphic?", answer: "Director Kim Jee-woon uses extreme gore to prevent the audience from cheering for the revenge. The brutality is meant to be sickening, actively discouraging the viewer from enjoying the violence and forcing them to confront the ugly reality of retribution." }
    ],
    'The Count of Monte Cristo': [
        { question: "How does the 2002 movie differ from the original Alexandre Dumas novel?", answer: "The movie significantly simplifies the massive novel. The biggest change is the ending: in the book, Edmond leaves Mercedes to start a new life, but the film gives them a Hollywood happy ending where they reunite and discover they have a son together." },
        { question: "Where was the Château d'If prison filmed for the movie?", answer: "The exterior and interior scenes of the terrifying island prison, the Château d'If, were filmed at Saint Mary's Tower on the island of Comino in Malta, which provided the perfect isolated, ancient stone aesthetic." },
        { question: "What is the meaning of the name 'Zatarra' in the film?", answer: "When Edmond is rescued by the smugglers, they call him 'Zatarra,' which they translate as 'driftwood.' This perfectly symbolizes his state at the time: a man with no identity, floating aimlessly through life before he discovers the treasure and his purpose." },
        { question: "Why does Edmond spare Fernand Mondego initially?", answer: "Edmond's revenge is meticulous. He believes death is too easy a punishment. He wants Mondego to experience the exact same despair he felt in prison by systematically destroying Mondego's fortune, reputation, and family before finally allowing him to die." }
    ]
};
// 6. HELPER FUNCTIONS (🔥 UPGRADED FOR UNIVERSAL SEO)
export const getTMDBPosterUrl = (posterPath, size = 'medium') => {
    if (!posterPath) return null;
    const posterSize = TMDB_CONFIG.POSTER_SIZES[size] || TMDB_CONFIG.POSTER_SIZES.medium;
    return `${TMDB_CONFIG.IMAGE_BASE_URL}/${posterSize}${posterPath}`;
};

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
            description: scene.description || '',
            displayLabel: `${scene.type} (${scene.severity})` 
        }))
    };
};

// 🔥 1. THE KEYWORD BRIDGE (SEO-Optimized)
export const getSensitiveContentTypes = (tmdbId) => {
    const sensitiveData = SENSITIVE_TIMELINES[tmdbId];
    if (!sensitiveData?.scenes?.length) return null;
    const types = new Set();
    sensitiveData.scenes.forEach(scene => {
        const lowerType = scene.type?.toLowerCase() || '';
        if (lowerType.includes('sexual content')) types.add('sexual content');
        else if (lowerType.match(/\bsex\b/)) types.add('sex');
        else if (lowerType.includes('explicit')) types.add('explicit content');
        if (lowerType.includes('partial nudity')) types.add('partial nudity');
        else if (lowerType.includes('nudity')) types.add('nudity');
        if (lowerType.includes('suggestive') || lowerType.includes('lingerie') || lowerType.includes('bikini')) types.add('suggestive clothing');
    });
    return Array.from(types);
};

// 🔥 2. THE "GOLDEN EGG" SCHEMA GENERATOR (Universal Version)
// 🔥 HELPER: Calculates total skip time in minutes and seconds
const calculateSkipStats = (scenes) => {
    let totalSeconds = 0;
    scenes.forEach(scene => {
        if (scene.start && scene.end) {
            const parseTime = (t) => {
                const parts = t.split(':').map(Number);
                if (parts.length === 3) return (parts[0] * 3600) + (parts[1] * 60) + (parts[2] || 0);
                if (parts.length === 2) return (parts[0] * 60) + (parts[1] || 0);
                return 0;
            };
            const startSec = parseTime(scene.start);
            const endSec = parseTime(scene.end);
            if (endSec > startSec) totalSeconds += (endSec - startSec);
        }
    });
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    if (totalSeconds === 0) return "< 1 min"; 
    if (mins === 0) return `${secs} sec`;
    return secs > 0 ? `${mins} min ${secs} sec` : `${mins} min`;
};

// 🔥 NEW: HELPER TO CALCULATE SEVERITY METRICS WITH 2+ EXTREME LOGIC
const getHighestSeverityInfo = (scenes) => {
    const severities = scenes.map(s => (s.severity || 'Moderate').toLowerCase());
    const extremeCount = severities.filter(s => s === 'extreme').length;
    if (extremeCount >= 2) return 'Extreme';
    if (severities.includes('high') || extremeCount === 1) return 'High';
    if (severities.includes('moderate')) return 'Moderate';
    return 'Mild';
};

// 🔥 7. THE "GOLDEN EGG" SCHEMA GENERATOR
export const generateCleanMovieSchema = (movie, tmdbData, currentMovieYear, collectionSlug, unused, movieInfo) => {
    let currentRuntime = movie.Runtime || movie.runtime || "Official";
    if (typeof currentRuntime === 'number') currentRuntime = `${currentRuntime} min`;

    const sensitiveScenes = SENSITIVE_TIMELINES[movie.tmdbId]?.scenes || [];
    const heavyScenes = sensitiveScenes.filter(s => {
        const t = s.type?.toLowerCase() || '';
        return t.includes('sex') || t.includes('nudity') || t.includes('explicit') || t.includes('suggestive') || t.includes('lingerie') || t.includes('bikini'); 
    });

    const sceneCount = heavyScenes.length;
    let schemaDesc = '';
    if (sceneCount > 0) {
        schemaDesc = `${movie.Title} Parents Guide with exact sex & nudity timestamps. ${sceneCount} scenes manually verified frame by frame by Filmiway editors for the ${currentRuntime} runtime.`;
    } else {
        schemaDesc = `${movie.Title} Parents Guide. Filmiway editors have manually verified zero sex scenes or nudity in the full ${currentRuntime} runtime.`;
    }

    const movieSchema = {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        'name': movie.Title,
        'description': schemaDesc,
        'genre': movie.genre,
        'url': `https://filmiway.com/movies/${collectionSlug}/${movie.imdbID}`, 
        'datePublished': currentMovieYear?.toString() || movie.year.toString(),
        'director': { '@type': 'Person', 'name': movieInfo?.director || 'Director' },
        'actor': movieInfo?.cast?.map(actor => ({ '@type': 'Person', 'name': actor })) || [],
        'image': tmdbData?.poster_path ? `https://image.tmdb.org/t/p/w500${tmdbData.poster_path}` : (FALLBACK_POSTERS[movie.tmdbId] || ''),
        'duration': `PT${movie.runtime}M`
    };

    const staticFaqs = REVENGE_MOVIE_FAQS[movie.Title] ? [...REVENGE_MOVIE_FAQS[movie.Title]] : [];
    const intensityScenes = movieInfo?.scenes || [];
    
    const schemaFaqs = staticFaqs.map(faq => ({ 
        '@type': 'Question', 
        'name': faq.question, 
        'acceptedAnswer': { '@type': 'Answer', 'text': faq.answer } 
    }));

    if (intensityScenes.length > 0) {
        const schemaIntensityList = intensityScenes.map(s => `<li>Minute ${s.time} - ${s.label} (Intensity: ${s.intensity}/100)</li>`).join('');
        schemaFaqs.unshift({
            '@type': 'Question',
            'name': `What are the most intense scenes in ${movie.Title}?`,
            'acceptedAnswer': { 
                '@type': 'Answer', 
                'text': `According to the Filmiway Intensity metric, ${movie.Title} peaks at the following moments:<br><br><ul>${schemaIntensityList}</ul>` 
            }
        });
    }

    if (heavyScenes.length > 0) {
        const typesArray = getSensitiveContentTypes(movie.tmdbId) || ['mature content'];
        const typesString = typesArray.join(' and ');
        const totalSkipTime = calculateSkipStats(heavyScenes);
        const firstTimestamp = heavyScenes[0].start;
        const firstSeverity = heavyScenes[0].severity || 'Moderate';
        const overallSeverity = getHighestSeverityInfo(heavyScenes);

        const schemaListText = heavyScenes.map(s => {
            const timeRange = s.end ? `${s.start} to ${s.end}` : s.start;
            const fullType = s.severity ? `${s.type} (${s.severity})` : (s.type || 'Mature Content');
            return `<li>${timeRange} - ${fullType}</li>`;
        }).join('');

        const startTimesList = heavyScenes.map(s => s.start).join(', ');

        // Filter out suggestive clothing to determine if it's truly unsafe for family
        const familyUnsafeTypes = typesArray.filter(t => t !== 'suggestive clothing');
        const familyUnsafeString = familyUnsafeTypes.join(' and ');

        const familyFaqSchema = familyUnsafeTypes.length > 0 
            ? {
                '@type': 'Question',
                'name': `Is ${movie.Title} safe to watch with family?`,
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': `No. ${movie.Title} is not safe to watch with family because it contains ${familyUnsafeString}. Adults can use Filmiway's timestamps to skip all ${sceneCount} scenes in the ${currentRuntime} runtime.`
                }
            }
            : {
                '@type': 'Question',
                'name': `Is ${movie.Title} safe to watch with family?`,
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': `Yes, regarding explicit sexual content. Filmiway editors have manually verified that ${movie.Title} does not have any sex, nudity, or sexual content in the full ${currentRuntime} runtime.`
                }
            };

        schemaFaqs.unshift(
            {
                '@type': 'Question',
                'name': `Does ${movie.Title} have sex scenes or nudity?`,
                'acceptedAnswer': { 
                    '@type': 'Answer', 
                    'text': `Yes. ${movie.Title} contains ${sceneCount} scenes of ${typesString}. Exact timestamps:<br><br><ul>${schemaListText}</ul><br>Manually verified frame by frame by Filmiway editors for the ${currentRuntime} runtime.` 
                }
            },
            {
                '@type': 'Question',
                'name': `What time does nudity appear in ${movie.Title} and how do I skip it?`,
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': `Explicit content first appears at ${firstTimestamp} (${firstSeverity}). Total time to skip: ${totalSkipTime} across ${sceneCount} scenes. Skip timestamps: ${startTimesList}. Verified for the ${currentRuntime} version.`
                }
            },
            familyFaqSchema
        );
    } else {
        schemaFaqs.unshift(
            {
                '@type': 'Question',
                'name': `Does ${movie.Title} have sex scenes or nudity?`,
                'acceptedAnswer': { 
                    '@type': 'Answer', 
                    'text': `No. Filmiway editors have manually verified that ${movie.Title} is free of explicit sex scenes and nudity.` 
                }
            },
            {
                '@type': 'Question',
                'name': `Is ${movie.Title} safe to watch with family?`,
                'acceptedAnswer': { 
                    '@type': 'Answer', 
                    'text': `Yes, regarding explicit sexual content. Filmiway editors have manually verified that ${movie.Title} does not have any sex, nudity, or sexual content in the full ${currentRuntime} runtime.` 
                }
            }
        );
    }

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'name': `Parents Guide and FAQ for ${movie.Title}`,
        'mainEntity': schemaFaqs
    };

    return { movieSchema, faqSchema };
};

// 🔥 8. FRONTEND UI SYNC
export const getVisibleMovieFAQs = (movieTitle, tmdbId, currentRuntime = "Official") => {
    const staticFaqs = REVENGE_MOVIE_FAQS[movieTitle] ? [...REVENGE_MOVIE_FAQS[movieTitle]] : [];
    const sensitiveScenes = SENSITIVE_TIMELINES[tmdbId]?.scenes || [];
    const movieInfo = COMPLETE_MOVIE_DATA[tmdbId];
    const intensityScenes = movieInfo?.scenes || [];

    const dbMovie = COMPLETE_MOVIE_DATABASE.find(m => m.tmdbId === tmdbId);
    let finalRuntime = currentRuntime !== "Official" ? currentRuntime : (dbMovie?.runtime ? `${dbMovie.runtime} min` : "Official");
    if (typeof finalRuntime === 'number') finalRuntime = `${finalRuntime} min`;

    if (intensityScenes.length > 0) {
        const uiIntensityList = intensityScenes.map(s => `• Minute ${s.time} - ${s.label} (Intensity: ${s.intensity}/100)`).join('\n');
        staticFaqs.unshift({
            question: `What are the most intense scenes in ${movieTitle}?`,
            answer: `According to the Filmiway Intensity metric, ${movieTitle} peaks at the following moments:

${uiIntensityList}`
        });
    }

    const heavyScenes = sensitiveScenes.filter(s => {
        const t = s.type?.toLowerCase() || '';
        return t.includes('sex') || t.includes('nudity') || t.includes('explicit') || t.includes('suggestive') || t.includes('lingerie') || t.includes('bikini');
    });

    if (heavyScenes.length > 0) {
        const typesArray = getSensitiveContentTypes(tmdbId) || ['mature content'];
        const typesString = typesArray.join(' and ');
        const sceneCount = heavyScenes.length;
        const totalSkipTime = calculateSkipStats(heavyScenes);
        const firstTimestamp = heavyScenes[0].start;
        const firstSeverity = heavyScenes[0].severity || 'Moderate';
        const overallSeverity = getHighestSeverityInfo(heavyScenes);

        const uiDetailedList = heavyScenes.map(s => {
            const timeRange = s.end ? `${s.start}–${s.end}` : s.start;
            const fullType = s.severity ? `${s.type || 'Mature Content'}, ${s.severity}` : (s.type || 'Mature Content');
            return `• ${timeRange} (${fullType})`;
        }).join('\n');
        
        const startTimesList = heavyScenes.map(s => s.start).join(', ');

        // Filter out suggestive clothing for the UI as well
        const familyUnsafeTypes = typesArray.filter(t => t !== 'suggestive clothing');
        const familyUnsafeString = familyUnsafeTypes.join(' and ');

        const familyFaqUI = familyUnsafeTypes.length > 0
            ? {
                question: `Is ${movieTitle} safe to watch with family?`,
                answer: `No. ${movieTitle} is not safe to watch with family because it contains ${familyUnsafeString}. Adults can use Filmiway's timestamps to skip all ${sceneCount} scenes in the ${finalRuntime} runtime.`
            }
            : {
                question: `Is ${movieTitle} safe to watch with family?`,
                answer: `Yes, regarding explicit sexual content. Filmiway editors have manually verified that ${movieTitle} does not have any sex, nudity, or sexual content in the full ${finalRuntime} runtime.`
            };

        staticFaqs.unshift(
            {
                question: `Does ${movieTitle} have sex scenes or nudity?`,
                answer: `Yes. ${movieTitle} contains ${sceneCount} scenes of ${typesString}. Exact timestamps:

${uiDetailedList}

Manually verified frame by frame by Filmiway editors for the ${finalRuntime} runtime.`
            },
            {
                question: `What time does nudity appear in ${movieTitle} and how do I skip it?`,
                answer: `Explicit content first appears at ${firstTimestamp} (${firstSeverity}). Total time to skip: ${totalSkipTime} across ${sceneCount} scenes. Skip timestamps: ${startTimesList}. Verified for the ${finalRuntime} version.`
            },
            familyFaqUI
        );
    } else {
        staticFaqs.unshift(
            {
                question: `Does ${movieTitle} have sex scenes or nudity?`,
                answer: `No. Filmiway editors have manually verified that ${movieTitle} is free of explicit sex scenes and nudity.`
            },
            {
                question: `Is ${movieTitle} safe to watch with family?`,
                answer: `Yes, regarding explicit sexual content. Filmiway editors have manually verified that ${movieTitle} does not have any sex, nudity, or sexual content in the full ${finalRuntime} runtime.`
            }
        );
    }

    return staticFaqs;
};

// EXPORT NAMED ALIAS FOR COMPATIBILITY
export const REVENGE_MOVIES = COMPLETE_MOVIE_DATABASE;

export default {
    COMPLETE_MOVIE_DATABASE,
    REVENGE_MOVIES,
    COMPLETE_MOVIE_DATA,
    SENSITIVE_TIMELINES,
    REVENGE_MOVIE_FAQS
};