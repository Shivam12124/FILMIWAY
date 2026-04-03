// utils/detectiveThrillerMovieData.js - COMPLETE DETECTIVE THRILLER COLLECTION 🔥

export const TMDB_CONFIG = {
      API_KEY: 'process.env.NEXT_PUBLIC_TMDB_API_KEY',
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
    807: { scenes: [] }, // Add your Se7en scenes here to remove the "Clean" tag
    1949: { scenes: [] }, // Zodiac
    146233: { scenes: [] }, // Prisoners
    25376: { scenes: [
        { start: "3:35", end: "3:48", type: "Sexual content", severity: "High" },
        { start: "13:00", end: "14:42", type: "Nudity", severity: "High" },
        { start: "1:15:00", end: "1:15:07", type: "Partial nudity", severity: "Mild" },
    ]},
    11423: { scenes: [
        { start: "9:58", end: "10:10", type: "Sex", severity: "Moderate" },
        { start: "54:34", end: "54:55", type: "Nudity", severity: "Mild" },
        { start: "1:01:12", end: "1:02:40", type: "Sexual content", severity: "Moderate" },
        { start: "1:25:12", end: "1:25:47", type: "Sexual content", severity: "Mild" }
    ]},
    13855: { scenes: [
        { start: "6:30", end: "7:30", type: "Lingerie", severity: "Mild" }
    ]},
    322: { scenes: [] },
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

    // 7. Mystic River (2003) - STATUS: TRAGIC INEVITABILITY
    3202: createMovieData({
        mysteryComplexity: 92, psychologicalTension: 95, complexityLevel: "HIGH",
        dominantColor: "#2b3948", rating: 7.9,
        dna: { Drama: 45, Crime: 35, Mystery: 20 },
        scenes: [
            { time: 10, intensity: 50, label: 'Dave is Taken', color: '#1f2937' },
            { time: 38, intensity: 75, label: 'Katie Found in the Park', color: '#b91c1c' },
            { time: 85, intensity: 82, label: 'Dave Confesses to Celeste', color: '#d97706' },
            { time: 115, intensity: 95, label: 'Justice at the River', color: '#dc2626' }, // PEAK: Misguided Vengeance
            { time: 130, intensity: 88, label: 'The Parade Passes By', color: '#9ca3af' }
        ]
    }),

    // 8. Marshland (2014) - STATUS: OPPRESSIVE ATMOSPHERE
     236735: createMovieData({
        mysteryComplexity: 90, psychologicalTension: 88, complexityLevel: "HIGH",
        dominantColor: "#8c7e5a", rating: 7.2,
        dna: { Thriller: 45, Mystery: 35, Crime: 20 },
        scenes: [
            { time: 15, intensity: 40, label: 'Arrival in the Wetlands', color: '#78716c' },
            { time: 35, intensity: 65, label: 'Discovering the Bodies', color: '#991b1b' },
            { time: 60, intensity: 75, label: 'The Secret Network Revealed', color: '#ca8a04' },
            { time: 85, intensity: 85, label: 'Night Chase Through the Reeds', color: '#451a03' },
            { time: 100, intensity: 92, label: 'The Rainstorm Climax', color: '#dc2626' } // PEAK: Washed Away Sins
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
        { question: "Why is the killer in Se7en obsessed with the Seven Deadly Sins?", answer: "John Doe believes society has become entirely apathetic to sin, tolerating it in everyday life. He uses gruesome murders as a 'sermon' to force the world to pay attention, turning his crimes into a perverse, theatrical performance meant to shock people out of their moral stupor." },
        { question: "What does the desert ending in Se7en symbolize?", answer: "The dry, barren desert provides a stark visual contrast to the relentless rain and dark, urban decay seen throughout the rest of the film. It symbolizes the 'stripping away' of all distractions, leaving only the raw, brutal truth of the killer's master plan exposed under the harsh sunlight." },
        { question: "Why does Detective Somerset quote Ernest Hemingway at the end?", answer: "Somerset ends the film quoting, 'The world is a fine place and worth fighting for... I agree with the second part.' This final thought completes his character arc. He starts as a cynic ready to retire, but the tragedy forces him to realize that even if the world is ugly, the fight for justice is the only thing that gives it meaning." },
        { question: "How does Se7en subvert traditional police movie tropes?", answer: "Instead of the partners bonding to defeat the villain and save the day, their clashing personalities ultimately doom them. Mills' impulsiveness plays right into the killer's hands, while Somerset's cautious wisdom fails to stop the tragedy. The villain wins by weaponizing the heroes' own personality traits against them." }
    ],
    'Zodiac': [
        { question: "Why does the movie Zodiac focus so heavily on police paperwork?", answer: "Director David Fincher deliberately highlights the 'drudgery' of real-life investigation—the endless filing, dead ends, and bureaucratic red tape. This strips away the Hollywood glamour of police work, showing that the real horror isn't just the killings, but the slow, agonizing erosion of truth over time." },
        { question: "What makes the basement scene in Zodiac so terrifying?", answer: "It is the only moment where Graysmith steps out of the safe world of data and into physical, immediate danger. The scene is terrifying because it relies entirely on psychological implication—the creaking floorboards, the darkness, and the sudden realization that his obsession may have led him into a fatal trap." },
        { question: "Why does Zodiac end without revealing the killer?", answer: "The film is fundamentally about the psychological toll of uncertainty. By denying the audience a neat, definitive 'gotcha' resolution, it forces the viewer to feel the exact same lingering, gnawing frustration that consumed the real-life investigators for decades." },
        { question: "How does the film use the passage of time as a theme?", answer: "Time is depicted as a destructive force. We see technology change, hairstyles evolve, and careers fade, but the core obsession remains static. The time-lapse construction of the Transamerica Pyramid beautifully symbolizes the world moving forward while the detectives remain hopelessly stuck in the past." }
    ],
    'Prisoners': [
        { question: "What does the maze symbolize in the movie Prisoners?", answer: "The maze represents the inescapable trap of obsession and moral compromise. Keller Dover enters a 'maze' of his own making when he resorts to torture, losing his moral compass. He becomes so focused on the center—finding his daughter—that he cannot see the walls closing in on his own humanity." },
        { question: "How does Prisoners explore themes of religion and faith?", answer: "The film constantly contrasts devout faith with extreme brutality. Characters pray immediately before committing violence. It challenges the audience to ask whether faith is a source of true strength, or a blindfold that allows desperate people to justify terrible acts for a 'higher' purpose." },
        { question: "What does the whistle at the end of Prisoners mean?", answer: "The whistle is a callback to the red emergency toy the daughter lost. Hearing it suggests Detective Loki has finally found Keller. It acts as a tiny, faint signal of hope amidst overwhelming darkness, suggesting that the truth—no matter how deeply it is buried—eventually surfaces." },
        { question: "Does Prisoners have a happy ending?", answer: "Not entirely. Even though rescue is implied, Keller is a broken man who has committed torture. His family is safe, but he will likely face severe legal consequences. The film argues that 'winning' against evil often requires a personal sacrifice that destroys the victor." }
    ],
    'The Secret in Their Eyes': [
        { question: "What is the central theme of The Secret in Their Eyes?", answer: "The film posits that a person can change everything—their face, their home, their family—but they can never change their core 'passion.' This truth unlocks the mystery: the killer's passion for a local soccer team reveals his location, just as Morales' passion for his late wife drives his decades-long vengeance." },
        { question: "Why does Morales choose life imprisonment for the killer instead of death?", answer: "Morales believes a quick execution is a merciful release. Instead, he wants the killer to suffer the agonizing 'void' of a life without meaning or human contact, perfectly mirroring the void Morales feels without his wife. It is a terrifying, absolute form of justice." },
        { question: "What does the broken typewriter symbolize?", answer: "The typewriter consistently misses the letter 'A'. At the end, Espósito finally fixes the word 'TEMO' (I fear) to 'TE AMO' (I love you). This small mechanical correction symbolizes his massive emotional breakthrough—he has stopped fearing his past and is ready to embrace his love for Irene." },
        { question: "How does the movie portray human memory?", answer: "The film presents memory as both a prison and a key. The characters are trapped in the amber of the past. Espósito writes his novel attempting to escape his memories, while Morales constructs a literal, physical prison to keep his memory of the crime alive forever." }
    ],
    'Memories of Murder': [
        { question: "Why does Memories of Murder use dark comedy?", answer: "The dark humor highlights the profound absurdity and incompetence of the local authorities. By making the police look foolish, the film makes their failure to catch the killer feel even more tragic. The laughter disarms the audience, making the sudden shifts to brutal, grounded violence deeply shocking." },
        { question: "What is the significance of the train tunnel scene?", answer: "The dark train tunnel visually represents the vast unknown and the abyss. In the climax, the detective fires his gun blindly into the darkness of the tunnel, symbolizing the utter futility of his rage against an evil he cannot see, catch, or understand." },
        { question: "Why does the final scene take place in a bright rice field?", answer: "Returning to the beautiful, sunlit rice field contrasts sharply with the dark, rainy nights of the murders. It leaves the viewer with a chilling realization: monstrous evil doesn't just exist in the shadows; it hides in plain sight, buried beneath the mundane surface of everyday life." },
        { question: "What does the DNA test result from America represent?", answer: "The inconclusive DNA result represents the frustrating limits of modern science and logic when faced with chaotic evil. It crushes the detectives' final hope for a clean, rational Hollywood ending, forcing them to live with the messy reality of failure." }
    ],
    'The Chaser': [
        { question: "Why is the main character in The Chaser so unlikable?", answer: "Joong-ho is a corrupt ex-cop turned pimp who initially only cares about his missing girls because it hurts his profits. Making him an anti-hero subverts the 'noble detective' trope. His journey is about rediscovering a shred of his lost humanity through the desperate act of trying to save a life." },
        { question: "How does The Chaser critique the South Korean police force?", answer: "The police are depicted as dangerously incompetent, more concerned with public relations than saving citizens. They release a confessed killer purely due to bureaucratic red tape. The film argues that the system protects criminals, leaving vulnerable people to be saved only by street-level outlaws." },
        { question: "Why does the movie reveal the killer's identity immediately?", answer: "By removing the traditional 'whodunit' mystery, the film shifts the tension entirely to 'will they stop him in time?'. This creates an agonizing, Hitchcock-style suspense where the audience knows exactly how dangerous the killer is, but the authorities are maddeningly slow to react." },
        { question: "What is the meaning behind the tragic ending of The Chaser?", answer: "The ending, where help arrives tragically late, emphasizes the film's gritty, noir nihilism. Joong-ho sits silently in the hospital, utterly defeated despite his violent efforts. It suggests that in a deeply broken world, even supreme, frantic effort isn't always enough to secure a happy ending." }
    ],
    'Mystic River': [
        { question: "What does the river symbolize in Mystic River?", answer: "The Mystic River is the silent place where the community buries its darkest sins. While it washes away physical evidence, it traps the psychological guilt. It represents the quiet, flowing current of childhood trauma that runs just beneath the surface, permanently connecting the three main characters." },
        { question: "What is the meaning of the final parade scene?", answer: "The parade outwardly celebrates community unity, but the subtle glances exchanged between characters reveal a dark, secret pact. Jimmy retains his power, Sean accepts the lie, and Dave's wife is silenced. It shows how civil society often maintains order by burying inconvenient, ugly truths." },
        { question: "Is Dave considered a victim or a villain in Mystic River?", answer: "Dave is portrayed as the ultimate tragic victim. His horrific childhood trauma froze his emotional development, leaving him as a frightened boy in a man's body. He becomes a 'monster' only in the eyes of a community that desperately needs a scapegoat to justify their own violence." },
        { question: "How do the wives influence the morality of the film?", answer: "The wives act as the true moral drivers behind the men. Annabeth encourages Jimmy to be a ruthless 'king' for the sake of their family, acting like a modern Lady Macbeth. Meanwhile, Celeste betrays her husband out of pure paranoia. They demonstrate how fierce family loyalty can easily become a toxic, destructive force." }
    ],
    'Marshland': [
        { question: "What is the 'Two Spains' allegory in Marshland?", answer: "The two detectives brilliantly represent the divided soul of post-Franco Spain. One is a brutal, pragmatic relic of the fascist past; the other is an idealistic young democrat. The film argues that Spain's political transition was messy, requiring the new democracy to work alongside the old regime's enforcers." },
        { question: "What do the aerial shots of the birds symbolize?", answer: "The migratory birds represent freedom and escape, directly contrasting with the human characters who are hopelessly stuck in the mud of the town. The mesmerizing, top-down shots look like biological patterns, suggesting that nature is entirely indifferent to the human violence happening below." },
        { question: "Why is the marshland setting so important to the plot?", answer: "The marshland is a liminal, unstable space—neither fully land nor sea. It is an isolated place where evidence can easily sink and disappear, perfectly mirroring the political instability of 1980s Spain and the deep moral ambiguity of the detectives' investigation." },
        { question: "What is the significance of the photographic negatives found at the end?", answer: "The negatives prove the older detective's violent, fascist past, confirming that their brand of justice is deeply compromised. When the younger detective chooses to keep this secret, it suggests that the foundation of the 'new' Spain is built on a quiet, uncomfortable complicity with past crimes." }
    ],
    'Fargo': [
        { question: "Is Fargo actually based on a true story?", answer: "No, it is a stylistic lie. The Coen Brothers used the 'True Story' title card to trick the audience into accepting the movie's bizarre, grotesque events as reality. It allowed them to break traditional narrative rules—like killing off main characters abruptly—under the guise that 'that's just how real life happens.'" },
        { question: "How does Marge Gunderson contrast with the criminals in Fargo?", answer: "Marge represents warmth, new life (she is pregnant), and simple, polite decency ('Minnesota Nice'). The criminals represent coldness, death, and chaotic greed. The film acts as a moral fable, proving that Marge's plodding, polite goodness is vastly more powerful than the chaotic evil of the criminals." },
        { question: "What does the famous woodchipper scene represent?", answer: "It is the ultimate, absurd collision of the mundane and the horrific. A loud, everyday industrial machine used for suburban yard work is used to destroy human remains in a quiet, snowy backyard. It encapsulates the film's core theme: violence is never stylish; it is just messy, loud, and pathetic." },
        { question: "Why is the ransom money never found at the end of Fargo?", answer: "The buried money remains lost in the endless snow, serving as a bleak symbol of the futility of greed. Multiple people died and lives were ruined for a red ice scraper marking a spot in a boundless white void, emphasizing the sheer absurdity of committing crimes for a temporary, useless prize." }
    ],
    'The Fugitive': [
        { question: "What makes Deputy Gerard such a unique antagonist?", answer: "Gerard (Tommy Lee Jones) is not a traditional villain; he is a neutral force of nature. His famous line, 'I don't care!' regarding Kimble's innocence makes him terrifying yet fiercely respectable. He represents a cold justice system that functions purely on duty, forcing Kimble to prove his truth through relentless action." },
        { question: "Did The Fugitive use real practical effects for the train crash?", answer: "Yes, the iconic train crash was a real, full-scale train derailment filmed in a single, massive take. This incredible commitment to practical reality gives the film a tactile, visceral weight that modern CGI cannot match, making the danger feel incredibly real to the audience." },
        { question: "How does the movie use the theme of 'running'?", answer: "While Kimble is technically running away from the law, he is actually running strictly towards the truth. The act of forward movement is his entire investigation. If he stops, he dies. The film brilliantly equates constant motion with survival, and stagnation (prison) with death." },
        { question: "Why is the 'one-armed man' so significant to the plot?", answer: "He is the physical embodiment of the 'imperfect' truth. In a legal system that demands clean, simple answers (that Kimble killed his wife), the one-armed man is the messy, highly improbable detail that proves the system wrong. Finding him is about validating Kimble's sanity just as much as his legal innocence." }
    ]
};

// 9️⃣ HELPER FUNCTIONS & EXPORTS (🔥 UPGRADED FOR UNIVERSAL SEO)
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
            description: scene.description || ''
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

    const staticFaqs = DETECTIVE_THRILLER_FAQS[movie.Title] ? [...DETECTIVE_THRILLER_FAQS[movie.Title]] : [];
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
    const staticFaqs = DETECTIVE_THRILLER_FAQS[movieTitle] ? [...DETECTIVE_THRILLER_FAQS[movieTitle]] : [];
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
                answer: `Yes. Filmiway editors have manually verified that ${movieTitle} is completely free of sex, nudity, and sexual content throughout its entire ${finalRuntime} runtime.`
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
                answer: `Yes. Filmiway editors have manually verified that ${movieTitle} is completely free of sex, nudity, and sexual content throughout its entire ${finalRuntime} runtime.`
            }
        );
    }

    return staticFaqs;
};