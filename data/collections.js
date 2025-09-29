// data/collections.js - COMPLETE COLLECTIONS WITH FIXED IMDB IDS
import { COMPLETE_MOVIE_DATABASE } from '../utils/movieData';

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
      'tt1130884',   // #9 Mr. Nobody (2009) - FIXED ID!
      'tt0825232'    // #10 Shutter Island (2010) - FIXED ID!
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
      'tt1130884',   // #9 Mr. Nobody (2009) - FIXED ID!
      'tt0825232'    // #10 Shutter Island (2010) - FIXED ID!
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
      'tt1130884',   // #9 Mr. Nobody (2009) - FIXED ID!
      'tt0114814'    // #10 The Usual Suspects (1995)
    ],
    badges: [
      { label: 'Psychological Horror', desc: 'Unreliable narrator thrillers' },
      { label: 'Community Curated', desc: 'Reviewed by film enthusiasts' },
      { label: 'Expert Analysis', desc: 'Detailed breakdowns & ratings' }
    ]
  },

  // 🔥 NEW SURVIVAL COLLECTION - SAME FORMAT AS EXISTING
  'best-survival-movies': {
    slug: 'best-survival-movies',
    title: 'Best Survival Movies',
    subtitle: 'Ultimate Tests of Human Endurance',
    description: 'Experience the most brutal and intense survival stories ever captured on film. Ranked by survivability index - from impossible escapes to ultimate human resilience.',
    longDescription: 'Dive into cinema\'s most extreme survival stories, where ordinary people face extraordinary circumstances. These films showcase the depths of human endurance, from being trapped under boulders to surviving plane crashes in remote mountains. Each movie demonstrates what it truly means to fight for survival against impossible odds.',
    icon: '🏔️',
    emoji: '🏔️',
    theme: 'yellow',
    primaryColor: '#facc15',
    secondaryColor: '#eab308',
    accentColor: '#ca8a04',
    gradientFrom: 'from-yellow-600',
    gradientTo: 'to-yellow-500',
    category: 'survival',
    tags: ['survival', 'extreme', 'endurance', 'true stories', 'human resilience'],
    metaKeywords: 'best survival movies, survival films, extreme survival, survivability index, brutal survival stories, human endurance movies',
    
    stats: {
      totalMovies: 10,
      averageRating: 7.7,
      totalWatchtime: '21 hours 33 minutes',
      averageSurvivabilityIndex: 89.0,
      mostExtreme: '127 Hours (98/100)',
      newestMovie: 'Society of the Snow (2023)',
      oldestMovie: 'Cast Away (2000)'
    },

    // 🔥 SURVIVAL MOVIE IMDB IDs - SAME FORMAT AS OTHER COLLECTIONS
    movies: [
      'tt1542344',   // #1 127 Hours (2010)
      'tt16277242',  // #2 Society of the Snow (2023)
      'tt0162222',   // #3 Cast Away (2000)
      'tt1663202',   // #4 The Revenant (2015)
      'tt3659388',   // #5 The Martian (2015)
      'tt1649419',   // #6 The Impossible (2012)
      'tt3758172',   // #7 Jungle (2017)
      'tt0472043',   // #8 Apocalypto (2006)
      'tt12262116',  // #9 13 Lives (2022)
      'tt1809398'    // #10 Unbroken (2014)
    ],

    badges: [
      { label: 'Extreme Survival', desc: 'Ultimate tests of human endurance' },
      { label: 'Survivability Indexed', desc: 'Ranked by survival difficulty' },
      { label: 'True Stories', desc: 'Many based on real events' }
    ],

    featured: {
      hero: {
        title: '127 Hours',
        subtitle: 'The Ultimate Test of Human Will',
        description: 'Danny Boyle\'s masterpiece showcases the most extreme survival scenario ever captured on film.',
        poster: 'https://image.tmdb.org/t/p/w500/2fWl4WGEzfr3VbrqhZftLNdlL6Q.jpg',
        backdrop: 'https://image.tmdb.org/t/p/w1280/path-to-backdrop.jpg',
        survivabilityIndex: 98
      }
    },

    relatedCollections: [
      'movies-like-memento',
      'movies-like-inception', 
      'movies-like-shutter-island'
    ],

    seo: {
      title: 'Best Survival Movies - Ranked by Survivability Index | Filmiway',
      description: 'Discover the 10 most brutal survival movies ever made. From 127 Hours to Unbroken, explore cinema\'s ultimate tests of human endurance ranked by survivability index.',
      keywords: 'best survival movies, survival films, extreme survival, survivability index, brutal survival stories, human endurance movies, true survival stories',
      canonicalUrl: 'https://filmiway.com/collection/best-survival-movies',
      ogImage: 'https://filmiway.com/images/survival-movies-collection-og.jpg',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'MovieSeries',
        'name': 'Best Survival Movies Collection',
        'description': 'A curated collection of the most extreme survival movies ranked by survivability index',
        'genre': 'Survival',
        'numberOfMovies': 10
      }
    }
  }
};

export const getAllCollectionSlugs = () => {
  return Object.keys(COLLECTIONS);
};

export const getCollectionBySlug = (slug) => {
  return COLLECTIONS[slug];
};

export const getFeaturedCollections = () => {
  return Object.values(COLLECTIONS).filter(collection => collection.featured);
};

export const getCollectionsByCategory = (category) => {
  return Object.values(COLLECTIONS).filter(collection => 
    collection.category === category
  );
};

export const getSurvivalCollection = () => {
  return COLLECTIONS['best-survival-movies'];
};

export default COLLECTIONS;
