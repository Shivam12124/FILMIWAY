// utils/warFilmsMovieData.js - 10 BEST WAR FILMS OF ALL TIME 🎬 ✅
// Unflinching portrayals of conflict, morality, and human resilience.

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

// 1. RAW DATA LIST
export const WAR_FILMS = [
  {
    imdbID: 'tt0120815',
    tmdbId: 857,
    title: 'Saving Private Ryan',
    director: 'Steven Spielberg',
    genre: 'Drama, War',
    year: 1998,
    runtime: '169 min',
    ageRating: 'R',
    rating: 8.6,
    cast: ['Tom Hanks', 'Edward Burns', 'Tom Sizemore'],
    boxOffice: '$482.2 million',
    budget: '$70 million',
    synopsis: "Following the Normandy Landings, a group of U.S. soldiers led by Captain John Miller is tasked with a deadly mission: find Private James Ryan and bring him home after his three brothers are killed in combat. As they fight their way through the brutal landscape of occupied France, the soldiers grapple with the morality of their mission and the incomprehensible cost of war.",
    poster_path: '/dXF8R5jL0VsUJLc7xij5AzHj1IZ.jpg',
    backdrop_path: '/z5l3i7mTHmAjbdCBZwuAe5VZ4WJ.jpg',
    scenes: [
      { time: 18, intensity: 92, label: 'D-Day: Omaha Beach', color: '#dc2626' },
      { time: 65, intensity: 72, label: 'Miller\'s Mission Begins', color: '#ea580c' },
      { time: 98, intensity: 78, label: 'Carentan Combat', color: '#f97316' },
      { time: 140, intensity: 88, label: 'Reiben\'s Wound', color: '#fb923c' },
      { time: 160, intensity: 96, label: 'Final Sacrifice', color: '#dc2626' }
    ],
    warIntensity: 98,
    complexityLevel: 'EXTREME',
    dominantColor: '#1f2937',
    dna: { War: 70, Drama: 20, History: 10 },
    sensitiveScenes: [
      { start: '0:18:00', end: '0:25:00', description: 'Graphic D-Day battle with graphic violence and gore' },
      { start: '1:38:20', end: '1:38:45', description: 'Brief nudity (rear, man bathing)' }
    ]
  },
  {
    imdbID: 'tt0078788',
    tmdbId: 28,
    title: 'Apocalypse Now',
    director: 'Francis Ford Coppola',
    genre: 'Drama, War',
    year: 1979,
    runtime: '154 min',
    ageRating: 'R',
    rating: 8.4,
    cast: ['Marlon Brando', 'Martin Sheen', 'Robert Duvall'],
    boxOffice: '$150 million',
    budget: '$31 million',
    synopsis: "A fragmented descent into the madness of war during the Vietnam conflict. Captain Willard is ordered on an assassination mission upriver to find Colonel Kurtz, a legendary military figure who has gone rogue. As Willard journeys deeper into the jungle, the line between civilization and savagery blurs into nightmarish surrealism.",
    poster_path: '/lQlhYK6RlTcz0Fqst02qj0RyJCW.jpg',
    backdrop_path: '/1Tb2n8toUt2WJXAKaVoWNNZC5fI.jpg',
    scenes: [
      { time: 12, intensity: 65, label: 'Helicopter Assault', color: '#0369a1' },
      { time: 54, intensity: 58, label: 'Sampan Massacre', color: '#ef4444' },
      { time: 97, intensity: 72, label: 'Kurtz\'s Compound', color: '#991b1b' },
      { time: 130, intensity: 85, label: 'Ritual and Madness', color: '#7f1d1d' },
      { time: 150, intensity: 94, label: 'Kurtz\'s End', color: '#1f2937' }
    ],
    warIntensity: 94,
    complexityLevel: 'EXTREME',
    dominantColor: '#1a1a2e',
    dna: { War: 60, Drama: 30, Psychological: 10 },
    sensitiveScenes: [
      { start: '0:30:50', end: '0:31:30', description: 'Nudity (brief, woman in background)' },
      { start: '1:22:00', end: '1:23:30', description: 'Blood ritual scene' },
      { start: '1:28:45', end: '1:29:15', description: 'Animal sacrifice' }
    ]
  },
  {
    imdbID: 'tt0056172',
    tmdbId: 947,
    title: 'Lawrence of Arabia',
    director: 'David Lean',
    genre: 'Adventure, Biography, Drama, War',
    year: 1962,
    runtime: '216 min',
    ageRating: 'PG',
    rating: 8.3,
    cast: ['Peter O\'Toole', 'Alec Guinness', 'Omar Sharif'],
    boxOffice: '$70 million',
    budget: '$15 million',
    synopsis: "An epic biographical drama of T.E. Lawrence, a brilliant but enigmatic British officer who becomes a legendary figure during the Arab Revolt against the Ottoman Empire in World War I. Navigating tribal politics, personal demons, and the brutal realities of desert warfare, Lawrence transforms from military strategist to myth.",
    poster_path: '/5oPIKiWjxEVnXMWh2B8L5iqkqOu.jpg',
    backdrop_path: '/1s6nV8LvV5yE8vJJgC2YYl3w0K0.jpg',
    scenes: [
      { time: 28, intensity: 42, label: 'Cairo Command', color: '#fbbf24' },
      { time: 78, intensity: 68, label: 'Aqaba Bridge Explosion', color: '#f97316' },
      { time: 132, intensity: 82, label: 'Deraa Incident', color: '#dc2626' },
      { time: 178, intensity: 74, label: 'Damascus Victory', color: '#fbbf24' },
      { time: 208, intensity: 88, label: 'Reflection and Farewell', color: '#6b7280' }
    ],
    warIntensity: 85,
    complexityLevel: 'HIGH',
    dominantColor: '#f59e0b',
    dna: { War: 45, Drama: 40, Biography: 15 },
    sensitiveScenes: [
      { start: '1:21:45', end: '1:23:30', description: 'Sexual assault (non-graphic but intense)' }
    ]
  },
  {
    imdbID: 'tt0091251',
    tmdbId: 25237,
    title: 'Come and See',
    director: 'Elem Klimov',
    genre: 'Drama, War',
    year: 1985,
    runtime: '142 min',
    ageRating: 'Not Rated',
    rating: 8.3,
    cast: ['Aleksei Kravchenko', 'Olga Mironova', 'Liubomiras Laucius'],
    boxOffice: '$0.7 million',
    budget: '0.5 million',
    synopsis: "A devastating, unflinching portrait of Nazi atrocities during WWII on the Eastern Front. Young Soviet partisan Florya embarks on what he believes will be a glorious military adventure, only to witness the systematic destruction of his homeland and people. As his journey progresses, Florya's face transforms from innocent excitement to traumatized horror.",
    poster_path: '/jR0VVMdQxM0m2mTq4ynePKMfD8e.jpg',
    backdrop_path: '/5K9YvmH7IRAaIWUvHFTnzQT7Alj.jpg',
    scenes: [
      { time: 22, intensity: 58, label: 'Burning Village', color: '#dc2626' },
      { time: 67, intensity: 88, label: 'The Massacre', color: '#7f1d1d' },
      { time: 108, intensity: 96, label: 'Hitlerite Atrocity', color: '#111827' },
      { time: 135, intensity: 98, label: 'Florya\'s Destruction', color: '#1f2937' },
      { time: 140, intensity: 99, label: 'Final Transformation', color: '#000000' }
    ],
    warIntensity: 99,
    complexityLevel: 'EXTREME',
    dominantColor: '#1f1f1f',
    dna: { War: 70, Drama: 25, Historical: 5 },
    sensitiveScenes: [
      { start: '0:22:00', end: '0:40:00', description: 'Village massacre with graphic violence and death' },
      { start: '1:08:00', end: '1:18:00', description: 'Holocaust atrocities and mass executions (extremely graphic)' },
      { start: '1:30:45', end: '1:32:00', description: 'Gunshot suicide of woman' }
    ]
  },
  {
    imdbID: 'tt0108052',
    tmdbId: 424,
    title: 'Schindler\'s List',
    director: 'Steven Spielberg',
    genre: 'Biography, Drama, History, War',
    year: 1993,
    runtime: '195 min',
    ageRating: 'R',
    rating: 8.9,
    cast: ['Liam Neeson', 'Ralph Fiennes', 'Ben Kingsley'],
    boxOffice: '$321.2 million',
    budget: '$22 million',
    synopsis: "Based on the true story of Oskar Schindler, a German industrialist who risks everything to save over a thousand Polish-Jewish refugees from the Holocaust. With cold Nazi officer Amon Göth running the nearby Kraków ghetto, Schindler uses cunning, bribery, and moral courage to protect his workers.",
    poster_path: '/sF1U4EUQS8YHUcQ8CAA0E6nouaC.jpg',
    backdrop_path: '/rNzQyW4f8B8cT52GbHrgMcjcgZY.jpg',
    scenes: [
      { time: 28, intensity: 45, label: 'Kraków Ghetto', color: '#6b7280' },
      { time: 75, intensity: 68, label: 'Shooting from Tower', color: '#ef4444' },
      { time: 112, intensity: 82, label: 'List Making', color: '#fbbf24' },
      { time: 154, intensity: 88, label: 'Train to Auschwitz', color: '#1f2937' },
      { time: 185, intensity: 95, label: 'Schindler\'s Breakdown', color: '#dc2626' }
    ],
    warIntensity: 92,
    complexityLevel: 'EXTREME',
    dominantColor: '#2d2d2d',
    dna: { War: 60, Drama: 25, History: 15 },
    sensitiveScenes: [
      { start: '0:45:00', end: '0:48:00', description: 'Holocaust executions (graphic)' },
      { start: '0:52:10', end: '0:52:40', description: 'Nudity (female prisoners, non-sexual)' },
      { start: '1:12:30', end: '1:13:00', description: 'Sexual coercion by Nazi officer' }
    ]
  },
  {
    imdbID: 'tt0093058',
    tmdbId: 600,
    title: 'Full Metal Jacket',
    director: 'Stanley Kubrick',
    genre: 'Drama, War',
    year: 1987,
    runtime: '116 min',
    ageRating: 'R',
    rating: 8.3,
    cast: ['Matthew Modine', 'R. Lee Ermey', 'Vincent D\'Onofrio'],
    boxOffice: '$46.4 million',
    budget: '$30 million',
    synopsis: "A brutal exploration of the Vietnam War in two parts: the first chronicles the dehumanization of Marine recruits under the tyrannical drill sergeant Hartman, while the second follows Private Joker through the chaos of combat during the Tet Offensive.",
    poster_path: '/2l0vHaM1J7s3RvHH0yvIQqANgZN.jpg',
    backdrop_path: '/0QL9d-g5T0bC04uVYdFGrJ3FkdB.jpg',
    scenes: [
      { time: 18, intensity: 62, label: 'Drill Sergeant\'s Rant', color: '#991b1b' },
      { time: 42, intensity: 75, label: 'Toilet Bowl Beating', color: '#dc2626' },
      { time: 68, intensity: 58, label: 'Joker\'s Duality', color: '#7c2d12' },
      { time: 88, intensity: 72, label: 'Tet Offensive', color: '#ea580c' },
      { time: 110, intensity: 85, label: 'Sniper Mercy', color: '#dc2626' }
    ],
    warIntensity: 88,
    complexityLevel: 'HIGH',
    dominantColor: '#1a1a1a',
    dna: { War: 65, Drama: 25, Satire: 10 },
    sensitiveScenes: [
      { start: '0:42:00', end: '0:44:00', description: 'Bathroom killing with graphic violence' },
      { start: '1:28:00', end: '1:29:00', description: 'Sniper shot with blood spatter' }
    ]
  },
  {
    imdbID: 'tt8183660',
    tmdbId: 530915,
    title: '1917',
    director: 'Sam Mendes',
    genre: 'Drama, War',
    year: 2019,
    runtime: '119 min',
    ageRating: 'R',
    rating: 8.2,
    cast: ['George MacKay', 'Dean-Charles Chapman', 'Mark Strong'],
    boxOffice: '$384.9 million',
    budget: '$95 million',
    synopsis: "Two British soldiers are ordered to cross enemy territory and deliver an urgent message that will stop an attack doomed to fail. Shot to appear as one continuous take, the film places viewers directly into the soldiers' journey through the trenches, bombardment, and chaos of WWI.",
    poster_path: '/sv3q8ZyK3D7zpW6HLzBzpqf4A5J.jpg',
    backdrop_path: '/bwFbt9Y8W8sUXLTFLABhR03y63L.jpg',
    scenes: [
      { time: 12, intensity: 58, label: 'No Man\'s Land', color: '#a16207' },
      { time: 42, intensity: 72, label: 'The Plane Crash', color: '#92400e' },
      { time: 68, intensity: 65, label: 'German Trenches', color: '#7c2d12' },
      { time: 95, intensity: 82, label: 'River Crossing', color: '#0369a1' },
      { time: 115, intensity: 88, label: 'Final Message', color: '#ea580c' }
    ],
    warIntensity: 86,
    complexityLevel: 'HIGH',
    dominantColor: '#6b5b45',
    dna: { War: 65, Drama: 30, Adventure: 5 },
    sensitiveScenes: [
      { start: '0:16:00', end: '0:22:00', description: 'War violence with bullet wounds and explosions' },
      { start: '0:42:00', end: '0:48:00', description: 'Dead bodies and destruction (graphic)' }
    ]
  },
  {
    imdbID: 'tt0082096',
    tmdbId: 156249,
    title: 'Das Boot',
    director: 'Wolfgang Petersen',
    genre: 'Drama, War',
    year: 1981,
    runtime: '149 min',
    ageRating: 'R',
    rating: 8.4,
    cast: ['Jürgen Prochnow', 'Herbert Grönemeyer', 'Klaus Wennemann'],
    boxOffice: '$84.7 million',
    budget: '$45 million',
    synopsis: "A claustrophobic masterpiece following the crew of a German U-boat during WWII as they hunt Allied ships while facing increasing pressure from destroyer escorts. Confined within the submarine's steel walls, tensions mount as the sailors' humanity and fragile sanity are tested.",
    poster_path: '/qGhV5Apu6fvJD9mfJO7RM5NWDMM.jpg',
    backdrop_path: '/xOWqRaqpqLhDnwIchvGWJFKXicp.jpg',
    scenes: [
      { time: 28, intensity: 52, label: 'Depth Charges', color: '#0369a1' },
      { time: 68, intensity: 68, label: 'Convoy Attack', color: '#dc2626' },
      { time: 102, intensity: 78, label: 'Close Escape', color: '#ea580c' },
      { time: 134, intensity: 85, label: 'Men Breaking Down', color: '#f97316' },
      { time: 148, intensity: 92, label: 'Final Sinking', color: '#1f2937' }
    ],
    warIntensity: 87,
    complexityLevel: 'HIGH',
    dominantColor: '#001f3f',
    dna: { War: 70, Drama: 25, Thriller: 5 },
    sensitiveScenes: [
      { start: '0:68:00', end: '0:72:00', description: 'Naval explosion with casualties' },
      { start: '1:28:00', end: '1:30:00', description: 'Crew member psychological breakdown' }
    ]
  },
  {
    imdbID: 'tt0091763',
    tmdbId: 792,
    title: 'Platoon',
    director: 'Oliver Stone',
    genre: 'Drama, War',
    year: 1986,
    runtime: '120 min',
    ageRating: 'R',
    rating: 8.1,
    cast: ['Tom Berenger', 'Willem Dafoe', 'Charlie Sheen'],
    boxOffice: '$138.5 million',
    budget: '$6.1 million',
    synopsis: "Oliver Stone's semi-autobiographical account of a young idealistic soldier who arrives in Vietnam and must navigate the moral ambiguity of war. Torn between two sergeants representing different moral philosophies, the soldier witnesses atrocities, betrayal, and the corruption of youth.",
    poster_path: '/a0jR03qjDUYfKPi5HGU8S7BG6An.jpg',
    backdrop_path: '/gj08f8ySLHGWrNKHoSdO0R6YFSN.jpg',
    scenes: [
      { time: 24, intensity: 58, label: 'Ambush', color: '#15803d' },
      { time: 58, intensity: 72, label: 'Village Massacre', color: '#dc2626' },
      { time: 92, intensity: 68, label: 'Sergeant Conflict', color: '#ea580c' },
      { time: 108, intensity: 82, label: 'Personal Vengeance', color: '#f97316' },
      { time: 118, intensity: 88, label: 'Final Confrontation', color: '#991b1b' }
    ],
    warIntensity: 85,
    complexityLevel: 'HIGH',
    dominantColor: '#1a4d2e',
    dna: { War: 70, Drama: 20, Personal: 10 },
    sensitiveScenes: [
      { start: '0:24:00', end: '0:30:00', description: 'Combat violence with casualties' },
      { start: '0:58:00', end: '1:02:00', description: 'Village atrocity and assault (graphic)' }
    ]
  },
  {
    imdbID: 'tt0047528',
    tmdbId: 975,
    title: 'Paths of Glory',
    director: 'Stanley Kubrick',
    genre: 'Drama, War',
    year: 1957,
    runtime: '88 min',
    ageRating: 'Not Rated',
    rating: 8.4,
    cast: ['Kirk Douglas', 'Ralph Meeker', 'Adolphe Menjou'],
    boxOffice: '$0.9 million',
    budget: '$900 thousand',
    synopsis: "A damning critique of military hierarchy and the futility of WWI. When a commanding officer orders a suicidal assault on an enemy position, the failure becomes a PR problem for headquarters. Three random soldiers are selected as scapegoats and court-martialed for cowardice.",
    poster_path: '/kZ3VKEqJFp2C5h1AyhRr6cjNbWZ.jpg',
    backdrop_path: '/QwqnP6tGBVBpknfFnxPXIJ6HH2c.jpg',
    scenes: [
      { time: 12, intensity: 65, label: 'Battlefield Orders', color: '#7c2d12' },
      { time: 38, intensity: 72, label: 'Failed Assault', color: '#dc2626' },
      { time: 62, intensity: 78, label: 'Court Martial', color: '#92400e' },
      { time: 80, intensity: 88, label: 'Execution', color: '#1f1f1f' },
      { time: 88, intensity: 92, label: 'Innocent Tears', color: '#dc2626' }
    ],
    warIntensity: 89,
    complexityLevel: 'HIGH',
    dominantColor: '#2d2d2d',
    dna: { War: 70, Drama: 25, Political: 5 },
    sensitiveScenes: [
      { start: '0:80:00', end: '0:88:00', description: 'Firing squad execution (graphic)' }
    ]
  }
];

// ✅ 2. DYNAMICALLY BUILD FALLBACK POSTERS
export const FALLBACK_POSTERS = Object.fromEntries(
  WAR_FILMS.map(movie => [
    movie.tmdbId, 
    `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  ])
);

// ✅ 3. DYNAMICALLY BUILD SENSITIVE TIMELINES
export const SENSITIVE_TIMELINES = Object.fromEntries(
  WAR_FILMS.map(movie => {
    const scenes = (movie.sensitiveScenes || []).map(scene => {
      const d = scene.description.toLowerCase();
      let type = 'Violence/Gore';
      if (d.includes('nudity')) type = 'Nudity';
      else if (d.includes('sexual')) type = 'Sexual Content';
      else if (d.includes('assault')) type = 'Sexual Assault';
      else if (d.includes('suicide')) type = 'Suicide';
      
      let severity = 'Moderate';
      if (d.includes('graphic') || d.includes('extreme') || d.includes('atrocity')) severity = 'High';
      if (d.includes('brief') || d.includes('mild')) severity = 'Mild';

      return {
        start: scene.start,
        end: scene.end,
        type: type,
        severity: severity,
        description: scene.description
      };
    });
    return [movie.tmdbId, { scenes }];
  })
);

// ✅ 4. DYNAMICALLY BUILD COMPLETE_MOVIE_DATA
export const COMPLETE_MOVIE_DATA = Object.fromEntries(
  WAR_FILMS.map(movie => [movie.tmdbId, { ...movie }])
);

// ✅ 5. WAR FILM SPECIFIC FAQs (4 per film for all 10 films)
export const WAR_FILMS_FAQS = {
  'Saving Private Ryan': [
    { question: "Is the D-Day scene realistic?", answer: "Yes, the 24-minute opening sequence is widely considered the most realistic depiction of combat in cinema history. Spielberg used handheld cameras and desaturated color to mimic 1940s newsreel footage, and many WWII veterans reportedly had to leave theaters because it was too intense." },
    { question: "Did the mission actually happen?", answer: "The specific mission is fictional, but it was inspired by the true story of the Niland brothers. Fritz Niland was sent home after it was believed his three brothers had been killed in action, though one was later found alive in a POW camp." },
    { question: "What does 'FUBAR' mean?", answer: "It is a military acronym used by the soldiers meaning 'F***ed Up Beyond All Recognition.' It reflects the soldiers' cynical view of the chaotic and often nonsensical situations they find themselves in during the war." },
    { question: "Why do the soldiers resent Ryan?", answer: "They resent risking their lives—eight men—to save just one. They feel their mission implies Ryan's life is more valuable than their own, highlighting the arbitrary nature of who lives and dies in war." }
  ],
  'Apocalypse Now': [
    { question: "Is it based on a book?", answer: "Yes, it is a loose adaptation of Joseph Conrad's novella 'Heart of Darkness.' Coppola moved the setting from the Congo in the late 19th century to the Vietnam War, exploring similar themes of imperialism and the darkness within the human soul." },
    { question: "Why is the ending ambiguous?", answer: "The ending reflects the madness of war. Willard kills Kurtz but refuses to take his place as the new 'god' of the tribe, rejecting the horror even as he is forever changed by it. He leaves the compound, effectively 'dropping the weapon.'" },
    { question: "Did Marlon Brando really improvise his lines?", answer: "Yes, Brando arrived on set overweight and having not read the book. Coppola had to read 'Heart of Darkness' to him on set, and much of Kurtz's dialogue, including the famous monologue about the snail on the razorblade, was improvised." },
    { question: "Was the animal sacrifice real?", answer: "Yes, the water buffalo sacrifice at the end of the film was a real ritual performed by the local Ifugao people in the Philippines where the movie was filmed. The crew merely filmed the actual event happening." }
  ],
  'Lawrence of Arabia': [
    { question: "Is the film historically accurate?", answer: "It is considered broadly accurate in spirit but takes liberties with timelines and characters. For example, the character of Sherif Ali (Omar Sharif) is a composite of several real historical figures to simplify the narrative." },
    { question: "What is the famous 'match cut'?", answer: "One of cinema's most famous transitions occurs when Lawrence blows out a match, and the film instantly cuts to the burning sunrise over the desert. It symbolizes Lawrence's transition from the small, contained world of England to the vast, consuming heat of Arabia." },
    { question: "Why did Lawrence return to the desert?", answer: "The film suggests Lawrence was addicted to the desert's purity and the freedom it offered him to reinvent himself. He felt like an outsider in British society but found a new identity—and a destiny—among the Arab tribes." },
    { question: "Did Peter O'Toole do his own stunts?", answer: "Mostly, yes. O'Toole learned to ride camels for the film. However, the scene where he falls from his camel and others ride over him was a dangerous stunt that nearly killed him." }
  ],
  'Come and See': [
    { question: "Why is the film considered so disturbing?", answer: "It uses a mix of hyper-realism and surreal horror to depict Nazi atrocities. The director, Elem Klimov, used real live ammunition in some scenes to get authentic reactions of fear from the young lead actor, creating an atmosphere of genuine terror." },
    { question: "Is the village massacre based on a real event?", answer: "Yes, it is based on the Khatyn massacre and hundreds of similar atrocities committed by the Nazis in Belarus during WWII. Over 600 villages were destroyed in a similar manner to what is shown in the film." },
    { question: "What happened to the lead actor?", answer: "Aleksei Kravchenko, who was only a teenager, reportedly went gray from the stress of filming. To protect his sanity, the director utilized hypnosis during the most traumatic scenes to help him dissociate from the horror." },
    { question: "What is the meaning of the ending?", answer: "Florya shoots at a portrait of Hitler, reversing time in a desperate attempt to undo the war. However, he stops when he sees Hitler as a baby, realizing that killing a child—even one who becomes a monster—is the moral line he cannot cross." }
  ],
  'Schindler\'s List': [
    { question: "Why is the film in black and white?", answer: "Spielberg chose black and white to give the film a timeless, documentary-like quality, evoking the actual footage of the Holocaust. It strips away the 'glamour' of cinema to focus purely on the stark horror of the events." },
    { question: "What does the girl in the red coat symbolize?", answer: "She represents the innocence of the victims and the 'red flag' that the Allied powers ignored. For Schindler, spotting her in the chaos of the liquidation is the turning point that forces him to see the Jews as individuals, not just a workforce." },
    { question: "Did Schindler really save that many people?", answer: "Yes, Oskar Schindler is credited with saving approximately 1,200 Jews by employing them in his factories. The 'list' was a real document used to transport his workers away from the death camps to safety." },
    { question: "Why does Schindler break down at the end?", answer: "He is overwhelmed by guilt, realizing that he could have saved even more people if he had sold his car or his pin. It humanizes him not as a perfect hero, but as a flawed man who realizes the infinite value of a single human life." }
  ],
  'Full Metal Jacket': [
    { question: "Why is the film split into two distinct halves?", answer: "The first half focuses on the psychological breakdown during training, while the second focuses on the chaos of actual combat. Kubrick contrasts the rigid, dehumanizing order of boot camp with the messy, unpredictable reality of war." },
    { question: "Was R. Lee Ermey a real drill instructor?", answer: "Yes, he was a real Marine Corps drill instructor. He was originally hired as a technical advisor but was cast as Gunnery Sergeant Hartman after Kubrick saw an instructional tape of him improvising insults for 15 minutes without repeating himself." },
    { question: "What is the 'duality of man' theme?", answer: "Private Joker wears a peace symbol button while writing 'Born to Kill' on his helmet. He explicitly mentions Jung's theory of the duality of man, highlighting the contradiction of soldiers who want peace but are trained to be killers." },
    { question: "Why do they sing the Mickey Mouse Club song?", answer: "The ending scene shows the soldiers singing the childish theme song while marching through a burning hellscape. It emphasizes their lost innocence and the absurdity of young American boys being sent to kill in a foreign land." }
  ],
  '1917': [
    { question: "Was 1917 actually filmed in one shot?", answer: "No, it was filmed in a series of long takes (some up to 8-9 minutes) that were digitally stitched together to create the illusion of a single continuous shot. The only visible cut occurs when the protagonist is knocked unconscious." },
    { question: "Why did the director choose the one-shot technique?", answer: "Sam Mendes wanted the audience to feel trapped in real-time with the characters. By removing cuts, the viewer cannot 'escape' the tension or look away, creating an immersive, claustrophobic experience of trench warfare." },
    { question: "Is the story true?", answer: "The characters are fictional, but the plot is based on a story Mendes' grandfather, a WWI veteran, told him about a messenger who had to run through enemy lines. It captures the essence of the chaotic communication during the war." },
    { question: "What is the significance of the cherry trees?", answer: "The cherry blossoms appear throughout the film, symbolizing the fragility and cycle of life. They remind Schofield of home and beauty amidst the destruction, serving as a visual motif for hope and renewal." }
  ],
  'Das Boot': [
    { question: "How realistic is the submarine depiction?", answer: "It is considered one of the most accurate depictions of submarine warfare. The set was a near-exact replica of a U-boat interior, mounted on a hydraulic gimbal to physically shake the cast during depth charge scenes." },
    { question: "Did the actors really look that exhausted?", answer: "Yes, the film was shot chronologically over a year. The actors were kept indoors to maintain their pale skin and grew real beards. Their exhaustion and claustrophobia on screen were largely real due to the grueling shoot." },
    { question: "Why is the ending so tragic?", answer: "After surviving impossible odds at sea, the crew is killed by an air raid just as they return to port. It underscores the futility of their struggle and the indiscriminate nature of war—survival is often just a matter of luck." },
    { question: "What perspective does the film offer?", answer: "Unlike many war films, it shows WWII from the German perspective but focuses on the sailors as ordinary men trapped in a steel coffin, rather than ideologies. It highlights the shared terror and humanity of soldiers on all sides." }
  ],
  'Platoon': [
    { question: "Is Platoon autobiographical?", answer: "Yes, Oliver Stone wrote it based on his own experiences as an infantryman in Vietnam. He wanted to counter the 'heroic' portrayals of the war (like The Green Berets) with a gritty, realistic view of the infighting and drug use among soldiers." },
    { question: "What do Barnes and Elias represent?", answer: "They represent the 'two fathers' fighting for the protagonist's soul. Elias (Willem Dafoe) represents humanity, mercy, and morality, while Barnes (Tom Berenger) represents the ruthless, survival-at-all-costs brutality of the war machine." },
    { question: "Why did they use Barber's 'Adagio for Strings'?", answer: "The mournful classical piece is used to underscore the tragedy and waste of life. Its slow, melancholic build contrasts with the frantic violence, elevating the scenes of death into moments of sorrowful reflection." },
    { question: "Did the cast undergo training?", answer: "Yes, the actors were subjected to a brutal 30-day boot camp in the Philippines led by a military advisor. They dug foxholes, ate rations, and had no showers to simulate the exhaustion and irritability of real soldiers." }
  ],
  'Paths of Glory': [
    { question: "Why was the film banned in France?", answer: "It was banned in France for nearly 20 years because it was seen as an insult to the French army. The depiction of French generals as callous and incompetent was considered too controversial and unpatriotic at the time." },
    { question: "What is the 'ant hill' assault meant to show?", answer: "The suicidal attack on the 'Ant Hill' demonstrates the disconnect between the commanders in their chateaus and the soldiers in the mud. The generals order men to their deaths for lines on a map, highlighting the absurdity of military bureaucracy." },
    { question: "Is the ending song significant?", answer: "The final scene, where the soldiers hum along to a German prisoner's song, is a moment of shared humanity. It shows that despite the propaganda, the soldiers have more in common with their 'enemy' than with their own commanders." },
    { question: "Why does the General order the artillery on his own men?", answer: "In a fit of rage when the soldiers refuse to leave the trenches for a suicide mission, General Mireau orders artillery to fire on them to force them out. It is the ultimate betrayal of leadership, prioritizing his ego over their lives." }
  ]
};

// 6. HELPER FUNCTIONS
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
    if (lowerType.includes('violence') || lowerType.includes('gore')) types.add('graphic violence');
    if (lowerType.includes('suicide')) types.add('disturbing content');
  });
  return Array.from(types);
};

export const generateFAQData = (movie) => {
  return WAR_FILMS_FAQS[movie.Title] || [];
};

export const generateMovieSchema = (movie) => {
  const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
  const posterUrl = FALLBACK_POSTERS[movie.tmdbId];
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Movie',
    'name': movie.Title,
    'description': movieInfo?.synopsis || `${movie.Title} - An unflinching war film.`,
    'genre': movie.genre,
    'datePublished': movie.year.toString(),
    'director': { '@type': 'Person', 'name': movieInfo?.director || 'Director' },
    'actor': movieInfo?.cast?.map(actor => ({ '@type': 'Person', 'name': actor })) || [],
    'duration': `PT${movie.runtime}M`,
    'image': posterUrl,
    'aggregateRating': { 
      '@type': 'AggregateRating', 
      'ratingValue': movieInfo?.rating || 8.0, 
      'bestRating': 10, 
      'worstRating': 1, 
      'ratingCount': 100 
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
  title: WAR_FILMS.find(m => m.tmdbId === tmdbId)?.Title || 'Unknown Movie' 
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

// 7. FINAL EXPORT ALIASING
export const COMPLETE_MOVIE_DATABASE = WAR_FILMS;
export const WAR_FILMS_DATABASE = WAR_FILMS;

export default WAR_FILMS;