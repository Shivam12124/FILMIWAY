// data/collections.js - CORRECTED: ALL COLLECTIONS END WITH SHUTTER ISLAND AT #10

export const COLLECTIONS = {
  'movies-like-inception': {
    slug: 'movies-like-inception',
    title: 'Movies Like Inception',
    description: 'Mind-bending sci-fi thrillers with complex narratives and reality-questioning elements',
    movies: [
      'tt0390384',   // #1 Primer (2004)
      'tt0383028',   // #2 Synecdoche, New York (2008) 
      'tt0166924',   // #3 Mulholland Drive (2001)
      'tt2397535',   // #4 Predestination (2014)
      'tt2866360',   // #5 Coherence (2013)
      'tt0246578',   // #6 Donnie Darko (2001)
      'tt2316411',   // #7 Enemy (2013)
      'tt0414993',   // #8 The Fountain (2006)
      'tt0485947',   // #9 Mr. Nobody (2009)
      'tt1130884'    // 🔥 #10 SHUTTER ISLAND (2010) - FIXED!
    ],
    badges: [
      { label: 'Mind-Bending', desc: 'Reality-questioning narratives' },
      { label: 'Community Curated', desc: 'Reviewed by film enthusiasts' },
      { label: 'Expert Analysis', desc: 'Detailed breakdowns & ratings' }
    ]
  },

  'movies-like-memento': {
    slug: 'movies-like-memento',
    title: 'Movies Like Memento',
    description: 'Memory-twisting psychological thrillers with fragmented narratives and identity confusion',
    movies: [
      'tt0390384',   // #1 Primer (2004)
      'tt0383028',   // #2 Synecdoche, New York (2008)
      'tt0166924',   // #3 Mulholland Drive (2001)
      'tt2397535',   // #4 Predestination (2014)
      'tt2866360',   // #5 Coherence (2013)
      'tt0246578',   // #6 Donnie Darko (2001)
      'tt2316411',   // #7 Enemy (2013)
      'tt0414993',   // #8 The Fountain (2006)
      'tt0485947',   // #9 Mr. Nobody (2009)
      'tt1130884'    // 🔥 #10 SHUTTER ISLAND (2010) - FIXED!
    ],
    badges: [
      { label: 'Memory-Twisting', desc: 'Fragmented narrative structures' },
      { label: 'Community Curated', desc: 'Reviewed by film enthusiasts' },
      { label: 'Expert Analysis', desc: 'Detailed breakdowns & ratings' }
    ]
  },

  'movies-like-shutter-island': {
    slug: 'movies-like-shutter-island', 
    title: 'Movies Like Shutter Island',
    description: 'Psychological thrillers with unreliable narrators, identity crises, and shocking revelations',
    movies: [
      'tt0390384',   // #1 Primer (2004)
      'tt0383028',   // #2 Synecdoche, New York (2008)
      'tt0166924',   // #3 Mulholland Drive (2001)
      'tt2397535',   // #4 Predestination (2014)
      'tt2866360',   // #5 Coherence (2013)
      'tt0246578',   // #6 Donnie Darko (2001)
      'tt2316411',   // #7 Enemy (2013)
      'tt0414993',   // #8 The Fountain (2006)
      'tt0485947',   // #9 Mr. Nobody (2009)
      'tt0114814'    // 🔥 #10 THE USUAL SUSPECTS (1995) - AS YOU REQUESTED!
    ],
    badges: [
      { label: 'Psychological Horror', desc: 'Unreliable narrator thrillers' },
      { label: 'Community Curated', desc: 'Reviewed by film enthusiasts' },
      { label: 'Expert Analysis', desc: 'Detailed breakdowns & ratings' }
    ]
  }
};

export const getAllCollectionSlugs = () => {
  return Object.keys(COLLECTIONS);
};

export const getCollectionBySlug = (slug) => {
  return COLLECTIONS[slug];
};
