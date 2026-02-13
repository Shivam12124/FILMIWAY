// utils/detectiveThrillerMovieData.js - COMPLETE DETECTIVE THRILLER COLLECTION 🔥

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { tmdbId: 807, imdbID: 'tt0114369', Title: 'Se7en', year: 1995, genre: 'Crime Thriller', runtime: 127, rank: 1 },
    { tmdbId: 1949, imdbID: 'tt0443706', Title: 'Zodiac', year: 2007, genre: 'Mystery', runtime: 157, rank: 2 },
    { tmdbId: 146233, imdbID: 'tt1392214', Title: 'Prisoners', year: 2013, genre: 'Thriller', runtime: 153, rank: 3 },
    { tmdbId: 25376, imdbID: 'tt1305806', Title: 'The Secret in Their Eyes', year: 2009, genre: 'Drama', runtime: 129, rank: 4 },
    { tmdbId: 11423, imdbID: 'tt0353969', Title: 'Memories of Murder', year: 2003, genre: 'Crime', runtime: 132, rank: 5 },
    { tmdbId: 13855, imdbID: 'tt1190539', Title: 'The Chaser', year: 2008, genre: 'Action', runtime: 125, rank: 6 },
    { tmdbId: 322, imdbID: 'tt0327056', Title: 'Mystic River', year: 2003, genre: 'Mystery', runtime: 138, rank: 7 },
    { tmdbId: 236735, imdbID: 'tt3253930', Title: 'Marshland', year: 2014, genre: 'Thriller', runtime: 105, rank: 8 },
    { tmdbId: 275, imdbID: 'tt0116282', Title: 'Fargo', year: 1996, genre: 'Crime', runtime: 98, rank: 9 },
    { tmdbId: 5503, imdbID: 'tt0106977', Title: 'The Fugitive', year: 1993, genre: 'Action', runtime: 130, rank: 10 }
];

// Helper to ensure default values
const createMovieData = (data) => ({
    mysteryComplexity: 85,
    psychologicalTension: 80,
    complexityLevel: "HIGH",
    dominantColor: "#000000",
    ...data,
});

export const SENSITIVE_TIMELINES = {
    807: { scenes: [] }, // Se7en
    1949: { scenes: [] }, // Zodiac
    146233: { scenes: [] }, // Prisoners
    25376: { scenes: [
        { start: "3:35", end: "3:48", type: "Sexual assault", severity: "High" },
        { start: "13:00", end: "14:42", type: "Nudity", severity: "High" },
        { start: "1:15:00", end: "1:15:07", type: "Partial nudity", severity: "Mild" },
        { start: "1:33:20", end: "1:33:27", type: "Kissing", severity: "Mild" }
    ]},
    11423: { scenes: [
        { start: "9:58", end: "10:10", type: "Sex", severity: "Moderate" },
        { start: "54:34", end: "54:55", type: "Nudity", severity: "Mild" },
        { start: "1:01:12", end: "1:02:40", type: "Sexual content", severity: "Moderate" },
        { start: "1:25:12", end: "1:25:47", type: "Partial nudity", severity: "Mild" }
    ]},
    13855: { scenes: [
        { start: "6:30", end: "7:30", type: "Suggestive clothing", severity: "Mild" }
    ]},
    322: { scenes: [
        { start: "11:45", end: "12:16", type: "Kissing", severity: "Mild" },
        { start: "2:09:45", end: "2:10:16", type: "Kissing", severity: "Mild" }
    ]},
    236735: { scenes: [
        { start: "11:58", end: "12:10", type: "Nudity", severity: "Mild" },
        { start: "20:58", end: "23:00", type: "Nudity", severity: "Mild" },
        { start: "27:00", end: "27:10", type: "Nudity", severity: "Mild" }
    ]},
    275: { scenes: [
        { start: "11:45", end: "12:07", type: "Sex", severity: "Moderate" },
        { start: "1:06:48", end: "1:07:42", type: "Sex", severity: "Moderate" }
    ]},
    5503: { scenes: [] } // The Fugitive
};

export const FALLBACK_POSTERS = {
    807: "https://image.tmdb.org/t/p/w500/6yoghtyTpznpBik8EngEmJskVUO.jpg",
    1949: "https://image.tmdb.org/t/p/w500/qZ8jV3b8g1.jpg",
    146233: "https://image.tmdb.org/t/p/w500/tuRcCnSj.jpg",
    25376: "https://image.tmdb.org/t/p/w500/kSgK69v6l7l1.jpg",
    11423: "https://image.tmdb.org/t/p/w500/6yIsi26BNO99144Q9.jpg",
    13855: "https://image.tmdb.org/t/p/w500/7I5b.jpg",
    322: "https://image.tmdb.org/t/p/w500/3p6g.jpg",
    236735: "https://image.tmdb.org/t/p/w500/3p6g.jpg", 
    275: "https://image.tmdb.org/t/p/w500/rtDx.jpg", 
    5503: "https://image.tmdb.org/t/p/w500/c0V.jpg" 
};

export const COMPLETE_MOVIE_DATA = {
    // 1. Se7en (1995) - STATUS: NIHILISTIC BENCHMARK
    807: createMovieData({ 
        mysteryComplexity: 98, psychologicalTension: 97, complexityLevel: "EXTREME", 
        dominantColor: "#1c1917", rating: 8.6,
        dna: { Mystery: 45, Thriller: 45, Crime: 10 }, 
        scenes: [
            { time: 8, intensity: 42, label: 'Gluttony Crime Scene', color: '#b91c1c' },
            { time: 38, intensity: 62, label: 'Greed Murder', color: '#f87171' },
            { time: 77, intensity: 82, label: 'Lust Revelation', color: '#fbbf24' },
            { time: 102, intensity: 88, label: 'John Doe Surrenders', color: '#fde68a' },
            { time: 120, intensity: 97, label: "What's in the Box?", color: "#dc2626" } // PEAK: Genre Singularity
        ],
        synopsis: "Two detectives hunt a killer who turns the Seven Deadly Sins into gruesome tableaus. A descent into nihilism that culminates in the most devastating revelation in thriller history."
    }),

    // 2. Zodiac (2007) - STATUS: ATMOSPHERIC OBSESSION
    1949: createMovieData({ 
        mysteryComplexity: 94, psychologicalTension: 90, complexityLevel: "EXTREME", 
        dominantColor: "#237e86", rating: 7.7,
        dna: { Mystery: 60, Thriller: 25, Crime: 15 }, 
        scenes: [
            { time: 14, intensity: 28, label: 'Lake Berryessa Attack', color: '#7285a5' },
            { time: 67, intensity: 55, label: 'Paul Stine Murder', color: '#9a8e3f' },
            { time: 102, intensity: 72, label: 'Basement Interview', color: '#bcafab' },
            { time: 134, intensity: 82, label: 'Hardware Store Confrontation', color: '#ebc634' },
            { time: 148, intensity: 92, label: 'Graysmith Identifies Allen', color: '#b23c65' } // PEAK: Ambiguous Closure
        ]
    }),

    // 3. Prisoners (2013) - STATUS: MORAL AGONY
    146233: createMovieData({ 
        mysteryComplexity: 95, psychologicalTension: 98, complexityLevel: "HIGH", 
        dominantColor: "#052c74", rating: 8.1,
        dna: { Crime: 45, Thriller: 40, Mystery: 15 }, 
        scenes: [
            { time: 20, intensity: 55, label: 'Girls Disappear', color: '#a11515' },
            { time: 49, intensity: 72, label: 'Keller Takes Control', color: '#f87171' },
            { time: 93, intensity: 82, label: 'Torture of Alex Jones', color: '#fbbf24' },
            { time: 120, intensity: 88, label: 'Holly Jones Revealed', color: '#fde68a' },
            { time: 145, intensity: 94, label: 'The Whistle Underground', color: "#dc2626" } // PEAK: Visceral Relief/Horror
        ]
    }),

    // 4. The Secret in Their Eyes (2009) - STATUS: MORAL HORROR
    25376: createMovieData({ 
        mysteryComplexity: 99, psychologicalTension: 88, complexityLevel: "HIGH", 
        dominantColor: "#4276ef", rating: 8.2,
        dna: { Mystery: 50, Thriller: 30, Drama: 20 }, 
        scenes: [
            { time: 19, intensity: 38, label: 'Liliana Coloto Murder Scene', color: '#b91c76' },
            { time: 54, intensity: 60, label: 'Stadium Chase', color: '#5681ae' },
            { time: 80, intensity: 72, label: 'Morales Identified', color: '#fbbf24' },
            { time: 112, intensity: 80, label: 'Case Reopened Years Later', color: '#fde68a' },
            { time: 126, intensity: 90, label: 'Life Sentence in the Shed', color: "#dc2626" } // PEAK: The Weight of Justice
        ]
    }),

    // 5. Memories of Murder (2003) - STATUS: SOCIETAL RUPTURE
    11423: createMovieData({ 
        mysteryComplexity: 97, psychologicalTension: 90, complexityLevel: "HIGH", 
        dominantColor: "#214f36", rating: 8.1,
        dna: { Mystery: 55, Crime: 25, Thriller: 20 }, 
        scenes: [
            { time: 18, intensity: 36, label: 'First Body in the Field', color: '#b91c1c' },
            { time: 50, intensity: 56, label: 'Railroad Interrogation', color: '#f87171' },
            { time: 87, intensity: 68, label: 'False Confession', color: '#fbbf24' },
            { time: 110, intensity: 82, label: 'DNA Hope Fails', color: '#fde68a' },
            { time: 128, intensity: 90, label: 'LOOKING AT THE CAMERA', color: "#dc2626" } // PEAK: Existential Failure
        ]
    }),

    // 6. The Chaser (2008) - STATUS: PURE CRUELTY
    13855: createMovieData({ 
        mysteryComplexity: 88, psychologicalTension: 96, complexityLevel: "EXTREME", 
        dominantColor: "#352e21", rating: 7.8,
        dna: { Crime: 50, Thriller: 40, Mystery: 10 }, 
        scenes: [
            { time: 12, intensity: 38, label: 'Girl Escapes the House', color: '#82416d' },
            { time: 29, intensity: 58, label: 'Street Chase Begins', color: '#e1a41c' },
            { time: 61, intensity: 72, label: 'Hammer Murder Revealed', color: '#418f6d' },
            { time: 92, intensity: 85, label: 'Police Delay the Rescue', color: '#dc8841' },
            { time: 121, intensity: 96, label: 'Too Late to Save', color: "#dc2626" } // PEAK: Unbearable Pressure
        ]
    }),

    // 9. Fargo (1996) - STATUS: ABSURDIST CRIME
    275: createMovieData({ 
        mysteryComplexity: 85, psychologicalTension: 82, complexityLevel: "MEDIUM", 
        dominantColor: "#f8c626", rating: 8.1,
        dna: { Crime: 55, Thriller: 35, Drama: 10 }, 
        scenes: [
            { time: 15, intensity: 28, label: 'Roadside Triple Murder', color: '#ab191c' },
            { time: 39, intensity: 45, label: 'Jerry Loses Control', color: '#e2c36f' },
            { time: 61, intensity: 68, label: 'Parking Lot Shootout', color: '#4959a9' },
            { time: 74, intensity: 86, label: 'Woodchipper Execution', color: '#f94144' },
            { time: 95, intensity: 71, label: 'Ordinary Life Continues', color: "#dc2626" } // Descent into normalcy
        ]
    }),

    // 10. The Fugitive (1993) - STATUS: ICONIC PURSUIT
    5503: createMovieData({ 
        mysteryComplexity: 82, psychologicalTension: 85, complexityLevel: "MEDIUM", 
        dominantColor: "#c8c8c8", rating: 7.8,
        dna: { Crime: 45, Thriller: 40, Action: 15 }, 
        scenes: [
            { time: 5, intensity: 48, label: 'Train Crash Escape', color: '#a1a1a1' },
            { time: 44, intensity: 62, label: 'Dam Jump', color: '#6dc9a6' },
            { time: 72, intensity: 74, label: 'I Didn’t Kill My Wife', color: '#c97c6d' },
            { time: 111, intensity: 87, label: 'One-Armed Man Revealed', color: '#bd7e5e' },
            { time: 128, intensity: 70, label: 'You Found Him', color: "#dc2626" }
        ]
    })
};

// 7️⃣ DETECTIVE_THRILLER_FAQS
export const DETECTIVE_THRILLER_FAQS = {
    'Se7en': [
        { question: "Why does the villain use the Seven Deadly Sins?", answer: "John Doe believes society has become apathetic to sin, tolerating it in everyday life. He uses the gruesome murders as a 'sermon' to force the world to pay attention, turning his crimes into a perverse form of performance art meant to shock people out of their moral stupor." },
        { question: "What is the significance of the ending location?", answer: "The dry, barren desert provides a stark visual contrast to the relentless rain and urban decay of the rest of the film. It symbolizes the 'stripping away' of all distractions, leaving only the raw, brutal truth of John Doe's master plan exposed under the harsh sunlight." },
        { question: "Why does Detective Somerset (Morgan Freeman) quote Hemingway?", answer: "Somerset ends the film with 'The world is a fine place and worth fighting for... I agree with the second part.' This reflects his character arc: he starts as a cynic ready to retire, but the case forces him to realize that even if the world is ugly, the fight for justice is the only thing that gives it meaning." },
        { question: "How does the film subvert the 'buddy cop' trope?", answer: "Instead of the partners bonding to defeat the villain and save the day, their differences ultimately doom them. Mills' impulsiveness plays right into the killer's hands, while Somerset's wisdom fails to stop the tragedy. The villain wins by using the heroes' own traits against them." }
    ],
    'Zodiac': [
        { question: "Why does the film focus so much on paperwork?", answer: "Fincher deliberately highlights the 'drudgery' of investigation—the endless filing, dead ends, and bureaucratic red tape. This de-romanticizes police work, showing that the real horror isn't just the killing, but the slow, agonizing erosion of truth over time." },
        { question: "What does the basement scene represent?", answer: "It is the only moment where Graysmith steps out of the safe world of data and into physical danger. The scene is terrifying because it relies entirely on implication—the creaking floorboards, the darkness, and the realization that his curiosity may have led him into a trap he can't escape." },
        { question: "Why is the lack of a resolution important?", answer: "The film is about the psychological toll of uncertainty. By denying the audience a definitive 'gotcha' moment, it forces them to feel the same lingering, gnawing frustration that consumed the real-life investigators for decades." },
        { question: "How does the film depict the passage of time?", answer: "Time is shown as a destructive force. We see technology change, hairstyles evolve, and careers fade, but the obsession remains static. The fast-forwarding construction of the Transamerica Pyramid symbolizes the world moving on while the detectives remain stuck in the past." }
    ],
    'Prisoners': [
        { question: "What is the metaphorical meaning of the maze?", answer: "The maze represents the trap of obsession and moral compromise. Keller Dover enters a 'maze' of his own making when he tortures Alex, losing his moral compass. He becomes so focused on the center (finding his daughter) that he cannot see the walls closing in on his soul." },
        { question: "Why does the film use religious imagery?", answer: "The film constantly contrasts faith with brutality. Characters pray before committing violence. It asks whether faith is a source of strength or a blindfold that allows people to justify terrible acts in the name of a 'higher' purpose (saving the children)." },
        { question: "What does the whistle signify at the end?", answer: "The whistle is a callback to the red emergency whistle the daughter lost. Hearing it suggests Detective Loki has found Keller. It represents a tiny, faint signal of hope amidst the overwhelming darkness, suggesting that truth, no matter how deep it is buried, eventually surfaces." },
        { question: "Is the ending truly happy?", answer: "No. Even if Keller is rescued, he is a broken man who has committed torture and murder. His family is reunited, but he will likely go to prison. The film argues that 'winning' against evil often requires a sacrifice that destroys the victor." }
    ],
    'The Secret in Their Eyes': [
        { question: "What is the theme of 'passion'?", answer: "The film posits that a person can change everything—their face, their home, their family—but they cannot change their passion. This is the key that unlocks the mystery: the killer's passion for soccer reveals his location, and Morales' passion for his wife drives his decades-long vengeance." },
        { question: "Why does Morales choose life imprisonment over death?", answer: "Morales believes the death penalty is too quick; it's a release. He wants the killer to suffer the 'void' of a life without meaning, just as he has suffered the void of life without his wife. It is a terrifying form of justice that equates existence with punishment." },
        { question: "How does the typewriter fix symbolize the protagonist's arc?", answer: "The typewriter consistently misses the letter 'A'. At the end, Espósito fixes 'TEMO' (I fear) to 'TE AMO' (I love you). This small mechanical correction symbolizes his emotional breakthrough—he has finally stopped fearing the past and is ready to embrace his love for Irene." },
        { question: "What role does memory play?", answer: "The film is a study on how memory is both a prison and a key. The characters are trapped in the amber of the past. Espósito writes the novel to escape his memories, while Morales constructs a literal prison to keep his memory of the crime alive forever." }
    ],
    'Memories of Murder': [
        { question: "Why does the film mix comedy with horror?", answer: "The dark humor highlights the absurdity and incompetence of the authoritarian system. By making the police look foolish, the film makes their failure to catch the killer even more tragic. The laughter disarms the audience, making the sudden shifts to brutal violence feel more shocking." },
        { question: "What does the tunnel symbolize?", answer: "The dark train tunnel represents the unknown and the abyss. In the climax, the detective fires his gun blindly into the darkness of the tunnel, symbolizing the futility of his rage against an evil he cannot see or understand." },
        { question: "Why is the final location significant?", answer: "Returning to the golden rice field in broad daylight contrasts with the dark, rainy nights of the murders. It shows that evil doesn't just exist in the shadows; it is buried beneath the beautiful, mundane surface of everyday life." },
        { question: "What is the significance of the DNA result?", answer: "The inconclusive DNA result from America represents the limit of Western science and logic in the face of this specific, local evil. It crushes the detectives' last hope for a clean, rational solution, forcing them to confront the chaos of their reality." }
    ],
    'The Chaser': [
        { question: "Why is the protagonist an anti-hero?", answer: "Joong-ho is a pimp who only cares about his missing girls because it hurts his profits. Making him unlikable subverts the 'noble detective' trope. His journey is not about justice, but about rediscovering a shred of his lost humanity through the act of saving a life." },
        { question: "What is the critique of the police?", answer: "The police are depicted as more concerned with PR (the mayor's fecal attack incident) than saving lives. They release the killer because of bureaucracy. The film argues that the system protects the powerful and the criminals, leaving the vulnerable to be saved only by outlaws." },
        { question: "Why does the film reveal the killer immediately?", answer: "By removing the 'whodunit' element, the film shifts the tension to 'will they stop him?'. This creates a more agonizing form of suspense (Hitchcockian bomb theory), where the audience knows the danger, but the characters are maddeningly slow to react." },
        { question: "What does the ending signify?", answer: "The tragic ending, where help arrives too late, emphasizes the film's noir nihilism. Joong-ho sits silently in the hospital, defeated despite his violence. It suggests that in a corrupt world, even supreme effort isn't enough to guarantee a happy ending." }
    ],
    'Mystic River': [
        { question: "How does the river serve as a metaphor?", answer: "The Mystic River is a place where the community buries its sins. It washes away the physical evidence but traps the psychological guilt. It represents the silent, flowing current of trauma that runs beneath the surface of the neighborhood, connecting everyone." },
        { question: "Why is the final parade scene disturbing?", answer: "The parade celebrates community unity, but the glances exchanged between the characters reveal a dark secret pact. Jimmy is back in power, Sean accepts the lie, and Dave's wife is silenced. It shows that social order is often maintained by burying the inconvenient truth." },
        { question: "Is Dave a victim or a monster?", answer: "Dave is the ultimate victim. His childhood trauma froze his emotional development, making him a 'boy in a man's body.' He is a monster only in the eyes of those who need a scapegoat. His death is the final tragedy of a life destroyed by an act of random violence years ago." },
        { question: "What is the role of the wives?", answer: "The wives drive the moral compass. Annabeth (Jimmy's wife) encourages him to be a 'king' and justifies his crimes for the family's sake, Lady Macbeth-style. Celeste (Dave's wife) betrays her husband out of fear. They show how family loyalty can become a toxic force." }
    ],
    'Marshland': [
        { question: "What is the 'Two Spains' allegory?", answer: "The two detectives represent the divided soul of post-Franco Spain. One is a brutal relic of the fascist past; the other is a young democrat. The film argues that the Transition was messy—the new democracy had to work with the old regime's enforcers to solve the country's problems." },
        { question: "What do the birds symbolize?", answer: "The migratory birds represent freedom and escape, contrasting with the characters stuck in the mud. The mesmerizing aerial shots of the birds look like biological patterns or blood vessels, suggesting that nature is indifferent to the human violence happening below." },
        { question: "Why is the setting important?", answer: "The marshland is a liminal space—neither land nor sea. It is a place where things can easily disappear and where footing is unsure. This mirrors the political instability of the 1980s and the moral ambiguity of the investigation." },
        { question: "What is the significance of the negatives?", answer: "The discovery of the negatives revealing the older detective's fascist past confirms that justice is compromised. The younger detective keeps this secret, suggesting that the new Spain is built on a foundation of silence and complicity with the old crimes." }
    ],
    'Fargo': [
        { question: "Why does the film claim to be a true story?", answer: "It is a stylistic lie. The Coen Brothers used the 'True Story' title card to trick the audience into accepting the movie's bizarre, grotesque events as reality. It allows them to break narrative rules—like killing the hero halfway through—because 'that's how life happens.'" },
        { question: "What is the contrast between Marge and the criminals?", answer: "Marge represents warmth, life (pregnancy), and simple decency ('Minnesota Nice'). The criminals represent cold, death, and greed. The film is a moral fable showing that Marge's plodding, polite goodness is more powerful than the chaotic, intelligent evil of the criminals." },
        { question: "What does the woodchipper scene represent?", answer: "It is the ultimate collision of the mundane and the horrific. A loud, industrial machine used for yard work is destroying a human body in a snowy suburban backyard. It encapsulates the film's theme: violence is not cool or stylish; it is messy, loud, and pathetic." },
        { question: "Why is the money never found?", answer: "The buried money remains lost in the snow, a symbol of the futility of greed. People died and lives were ruined for a red ice scraper marking a spot in a boundless white void. It emphasizes the absurdity of the crimes committed for such a temporary, useless prize." }
    ],
    'The Fugitive': [
        { question: "Why is Gerard such a compelling antagonist?", answer: "Gerard (Tommy Lee Jones) is not a villain; he is a force of nature. He famously says, 'I don't care!' regarding Kimble's innocence. This neutrality makes him terrifying yet respectable. He represents the system that functions without emotion, forcing Kimble to prove his truth through action." },
        { question: "How does the film use practical effects?", answer: "The train crash was a real, full-scale train derailment filmed in a single take. This commitment to practical reality gives the film a tactile, visceral weight that CGI cannot match. The danger feels real because the physics are real." },
        { question: "What is the theme of 'running'?", answer: "Kimble is running from the law, but he is running *towards* the truth. The act of movement is his investigation. He cannot stop or he dies. The film equates motion with life and stagnation (prison) with death." },
        { question: "Why is the one-armed man significant?", answer: "He is the physical embodiment of the 'imperfect' truth. In a system that demands clean answers (Kimble did it), the one-armed man is the messy, overlooked detail that proves the system wrong. Finding him is about validating Kimble's sanity as much as his innocence." }
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
    return DETECTIVE_THRILLER_FAQS[movie.Title] || [];
};

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const posterUrl = FALLBACK_POSTERS[movie.tmdbId] || '';
    return {
        "@context": "https://schema.org",
        "@type": "Movie",
        "name": movie.Title,
        "description": movieInfo?.synopsis || `${movie.Title} - A masterful detective thriller.`,
        "genre": movie.genre,
        "datePublished": movie.year.toString(),
        "director": {
            "@type": "Person",
            "name": movieInfo?.director || "Acclaimed Director"
        },
        "actor": movieInfo?.cast?.map(actor => ({
            "@type": "Person",
            "name": actor
        })) || [],
        "duration": `PT${movie.runtime}M`,
        "image": posterUrl,
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": movieInfo?.rating || 7.0,
            "bestRating": 10,
            "worstRating": 1,
            "ratingCount": movieInfo?.audienceScore || 100
        }
    };
};

export const generateFAQSchema = (faqs) => {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };
};

export const fetchMovieFromTMDB = async (tmdbId) => {
    return {
        poster_path: null,
        title: COMPLETE_MOVIE_DATABASE.find(m => m.tmdbId === tmdbId)?.Title || 'Unknown Movie'
    };
};

export const fetchWatchProviders = async (tmdbId, region = 'US') => {
    return null; 
};

export const formatSensitiveTimeline = (tmdbId) => {
    const raw = SENSITIVE_TIMELINES[tmdbId];
    if (!raw || !raw.scenes || raw.scenes.length === 0) return null;
    
    return {
        scenes: raw.scenes.map(scene => ({
            start: scene.start,
            end: scene.end,
            type: scene.type,
            description: scene.description
        }))
    };
};

// Build object map by tmdbId
export const COMPLETE_DETECTIVE_THRILLER_DATABASE = Object.fromEntries(
    COMPLETE_MOVIE_DATABASE.map(m => [m.tmdbId, m])
);

export default COMPLETE_DETECTIVE_THRILLER_DATABASE;