// components/MovieDetailsSection.js - UPDATED WITH MUTED GREEN + UNIQUE FILM DATA
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Film, BookOpen, Star, Brain, BarChart3, Shield } from 'lucide-react';
import { COMPLETE_MOVIE_DATA, STRATEGIC_QUOTES } from '../utils/movieData';
import EnhancedIntensityGraph from './EnhancedIntensityGraph';
import StrategicDNAHelix from './StrategicDNAHelix';
import SensitiveContentTimelineSection from './SensitiveContentTimelineSection';
import EnhancedWhereToWatchSection from './EnhancedWhereToWatchSection';
import RealCommentsRatingSection from './RealCommentsRatingSection';
import SEOFAQSection from './SEOFAQSection';
import MementoSEOFAQSection from './MementoSEOFAQSection';
import ShutterIslandSEOFAQSection from './ShutterIslandSEOFAQSection';

const MovieDetailsSection = React.memo(({ movie, fromMementoCollection, fromShutterIslandCollection }) => {
  // 🔥 FIXED: Add safety check first
  if (!movie) {
    console.log('❌ No movie data provided');
    return null;
  }

  const movieInfo = COMPLETE_MOVIE_DATA[movie?.tmdbId];
  
  // 🔥 MOVIE-SPECIFIC UNIQUE DATA - DIFFERENT FOR EACH FILM
  const getMovieSpecificData = (title) => {
    const t = title.toLowerCase();
    
    // 🔥 SHUTTER ISLAND - Psychological Horror Focus
    if (t.includes('shutter island')) {
      return {
        mindBendingIndex: 79,
        complexityLevel: 'MEDIUM',
        dominantColor: '#dc2626',
        rating: 8.2,
        director: 'Martin Scorsese',
        scenes: [
          { time: 15, intensity: 40, label: 'Arrival at Ashecliffe', color: '#7c2d12' },
          { time: 35, intensity: 65, label: 'Patient Interview', color: '#dc2626' },
          { time: 55, intensity: 80, label: 'Ward C Discovery', color: '#ef4444' },
          { time: 85, intensity: 95, label: 'Lighthouse Revelation', color: '#f87171' },
          { time: 120, intensity: 100, label: 'Reality Breakdown', color: '#fca5a5' }
        ],
        dna: { "Psychological": 70, "Mystery": 25, "Drama": 5 },
        cast: ['Leonardo DiCaprio', 'Mark Ruffalo', 'Ben Kingsley'],
        boxOffice: '$294.8M',
        budget: '$80M'
      };
    }
    
    // 🔥 THE USUAL SUSPECTS - Crime Thriller Focus  
    if (t.includes('usual suspects')) {
      return {
        mindBendingIndex: 88,
        complexityLevel: 'EXTREME',
        dominantColor: '#ea580c',
        rating: 8.5,
        director: 'Bryan Singer',
        scenes: [
          { time: 10, intensity: 35, label: 'Police Lineup', color: '#7c2d12' },
          { time: 30, intensity: 50, label: 'Heist Planning', color: '#ea580c' },
          { time: 60, intensity: 75, label: 'Keyser Söze Legend', color: '#f97316' },
          { time: 85, intensity: 90, label: 'Ship Explosion', color: '#fb923c' },
          { time: 100, intensity: 100, label: 'Verbal\'s Revelation', color: '#fed7aa' }
        ],
        dna: { "Crime": 60, "Mystery": 30, "Thriller": 10 },
        cast: ['Kevin Spacey', 'Gabriel Byrne', 'Benicio del Toro'],
        boxOffice: '$23.3M',
        budget: '$6M'
      };
    }
    
    // 🔥 MEMENTO - Memory Focus
    if (t.includes('memento')) {
      return {
        mindBendingIndex: 95,
        complexityLevel: 'EXTREME',
        dominantColor: '#7c3aed',
        rating: 8.4,
        director: 'Christopher Nolan',
        scenes: [
          { time: 5, intensity: 45, label: 'Polaroid Fade', color: '#581c87' },
          { time: 25, intensity: 60, label: 'Natalie Encounter', color: '#7c3aed' },
          { time: 50, intensity: 80, label: 'Teddy\'s Truth', color: '#8b5cf6' },
          { time: 75, intensity: 90, label: 'John G. Hunt', color: '#a78bfa' },
          { time: 110, intensity: 100, label: 'Memory Manipulation', color: '#c4b5fd' }
        ],
        dna: { "Memory": 80, "Thriller": 15, "Drama": 5 },
        cast: ['Guy Pearce', 'Carrie-Anne Moss', 'Joe Pantoliano'],
        boxOffice: '$40.0M',
        budget: '$9M'
      };
    }
    
    // 🔥 INCEPTION - Dream Focus
    if (t.includes('inception')) {
      return {
        mindBendingIndex: 93,
        complexityLevel: 'EXTREME',
        dominantColor: '#0ea5e9',
        rating: 8.8,
        director: 'Christopher Nolan',
        scenes: [
          { time: 20, intensity: 50, label: 'Dream Sharing', color: '#0c4a6e' },
          { time: 45, intensity: 70, label: 'Hotel Fight', color: '#0ea5e9' },
          { time: 80, intensity: 85, label: 'Snow Fortress', color: '#38bdf8' },
          { time: 120, intensity: 95, label: 'Limbo Depths', color: '#7dd3fc' },
          { time: 145, intensity: 100, label: 'Spinning Top', color: '#bae6fd' }
        ],
        dna: { "Dreams": 65, "Action": 25, "Sci-Fi": 10 },
        cast: ['Leonardo DiCaprio', 'Marion Cotillard', 'Tom Hardy'],
        boxOffice: '$836.8M',
        budget: '$160M'
      };
    }
    
    // 🔥 DEFAULT FALLBACK (for other films)
    return {
      mindBendingIndex: 85,
      complexityLevel: 'HIGH',
      dominantColor: '#ca8a04',
      rating: movie.imdbRating || 7.5,
      director: movie.Director || 'Acclaimed Director',
      scenes: [
        { time: 20, intensity: 60, label: 'Opening', color: '#92400e' },
        { time: 50, intensity: 75, label: 'Conflict', color: '#ca8a04' },
        { time: 80, intensity: 85, label: 'Climax', color: '#eab308' },
        { time: 100, intensity: 90, label: 'Resolution', color: '#facc15' },
        { time: 120, intensity: 95, label: 'Revelation', color: '#fde047' }
      ],
      dna: { "Mystery": 60, "Thriller": 30, "Drama": 10 },
      cast: ['Lead Actor', 'Supporting Cast'],
      boxOffice: 'N/A',
      budget: 'N/A'
    };
  };

  // 🔥 GET MOVIE-SPECIFIC DATA
  const safeMovieInfo = movieInfo || getMovieSpecificData(movie.Title);

  // ACCURATE RUNTIME DATA FOR EACH MOVIE
  const getAccurateRuntime = (title) => {
    const runtimeData = {
      'mr. nobody': '141 min',
      'primer': '77 min', 
      'synecdoche, new york': '124 min',
      'mulholland drive': '147 min',
      'predestination': '97 min',
      'coherence': '89 min',
      'donnie darko': '113 min',
      'enemy': '90 min',
      'the fountain': '96 min',
      'shutter island': '138 min',
      'the usual suspects': '106 min',
      'memento': '113 min',
      'inception': '148 min'
    };
    
    const titleKey = title.toLowerCase().replace(/[^\w\s]/g, '').trim();
    return runtimeData[titleKey] || safeMovieInfo.runtime || movie.Runtime || '120 min';
  };

  // ACCURATE AGE RATINGS (MPAA SYSTEM)
  const getAgeRating = (title) => {
    const ageRatings = {
      'mr. nobody': 'R',
      'primer': 'PG-13', 
      'synecdoche, new york': 'R',
      'mulholland drive': 'R',
      'predestination': 'R',
      'coherence': 'Not Rated',
      'donnie darko': 'R',
      'enemy': 'R',
      'the fountain': 'PG-13',
      'shutter island': 'R',
      'the usual suspects': 'R',
      'memento': 'R',
      'inception': 'PG-13'
    };
    
    const titleKey = title.toLowerCase().replace(/[^\w\s]/g, '').trim();
    return ageRatings[titleKey] || safeMovieInfo.ageRating || movie.Rated || 'R';
  };

  const title = movie.Title || 'Unknown Title';
  const director = safeMovieInfo.director || movie.director || 'Unknown Director';
  const genre = safeMovieInfo.genre || movie.Genre || 'Drama';
  const year = movie.Year || movie.year || '20XX';
  const runtime = getAccurateRuntime(title);
  const ageRating = getAgeRating(title);
  const quote = STRATEGIC_QUOTES[movie.tmdbId] || '';
  const mindBendingIndex = safeMovieInfo.mindBendingIndex ?? 85;
  const complexityLevel = safeMovieInfo.complexityLevel || 'HIGH';
  const cast = safeMovieInfo.cast?.join(', ') || '';
  const boxOffice = safeMovieInfo.boxOffice || 'N/A';
  const budget = safeMovieInfo.budget || 'N/A';
  const rating = safeMovieInfo.rating || '7.5';

  // 🔥 COMPLEXITY COLOR FUNCTION - 💚 GREEN FOR SHUTTER ISLAND ONLY!
  const getComplexityColor = (level) => {
    // 💚 Use green colors ONLY for Shutter Island collection
    if (fromShutterIslandCollection) {
      switch(level) {
        case 'EXTREME': return '#16a34a'; // Green instead of red
        case 'HIGH': return '#22c55e';    // Green instead of orange
        case 'MEDIUM': return '#4ade80';  // Light green
        default: return '#6b7280';
      }
    }
    
    // ✅ Original colors for other collections
    switch(level) {
      case 'EXTREME': return '#dc2626';
      case 'HIGH': return '#ea580c';
      case 'MEDIUM': return '#16a34a';
      default: return '#6b7280';
    }
  };

  // AGE RATING COLORS
  const getAgeRatingColor = (rating) => {
    switch(rating) {
      case 'G': return '#22c55e';
      case 'PG': return '#3b82f6';
      case 'PG-13': return '#f59e0b';
      case 'R': return '#ef4444';
      case 'NC-17': return '#7c2d12';
      default: return '#6b7280';
    }
  };

  // 🔥 ENHANCED MOVIE-SPECIFIC SYNOPSIS WITH NEW MOVIES
  const getUniqueDescription = () => {
    const t = title.toLowerCase();
    
    if (t.includes('primer')) return "Two engineers accidentally discover time travel in their garage. As they exploit multiple timelines for personal gain, reality fractures into dangerous paradoxes. A low-budget masterpiece that will melt your brain.";
    
    if (t.includes('synecdoche')) return "A theater director creates a life-sized replica of New York inside a warehouse to stage the most honest play ever conceived. Reality and performance blur as his ambitious project becomes infinite recursion. Kaufman's existential meditation on art and mortality.";
    
    if (t.includes('mulholland')) return "A car crash on Mulholland Drive sends an amnesiac woman into the dark heart of Hollywood's dream factory. Lynch weaves dreams and nightmares into a puzzle where nothing is real and everything matters. Identity becomes the ultimate mystery.";
    
    if (t.includes('predestination')) return "A temporal agent pursues an elusive criminal who has evaded him through time for years, jumping between decades to prevent crimes before they happen. His final assignment leads him to recruit his younger self for a mission that will determine the fate of humanity. The chase becomes a complex temporal puzzle where past, present, and future collide in ways that challenge the very nature of identity and free will.";
    
    if (t.includes('coherence')) return "Eight friends gather for dinner as a cosmic phenomenon fractures reality into infinite parallel versions. Each decision splits their world into terrifying new possibilities. A mind-bending thriller shot in one house with endless implications.";
    
    if (t.includes('donnie darko')) return "A troubled teenager receives visions from a six-foot rabbit predicting the world's end in 28 days. Time travel, destiny, and suburban paranoia collide in this cult classic. Frank demands increasingly dangerous acts as reality unravels.";
    
    if (t.includes('enemy')) return "A quiet professor discovers his exact double living a different life in the same city. Their obsession with each other fractures reality in disturbing ways. Gyllenhaal's dual performance explores the dark side of identity.";
    
    if (t.includes('fountain')) return "Three parallel love stories across a thousand years explore mortality, obsession, and acceptance through myth and science. A conquistador, scientist, and space traveler all fight the same impossible battle. Aronofsky's visual poetry about death and transcendence.";
    
    if (t.includes('mr. nobody') || t.includes('nobody')) return "The last mortal human recounts the infinite lives he could have lived based on different choices. Every decision creates new realities in this quantum meditation on possibility. Each timeline is equally real and unreal.";
    
    // 🔥 NEW: The Usual Suspects description
    if (t.includes('usual suspects')) return "Five criminals meet in a police lineup and plan the perfect heist. But their target leads them into the web of Keyser Söze, a legendary crime lord who may not exist. Nothing is as it seems in this masterpiece of deception where the greatest trick is convincing you it's real.";
    
    // 🔥 NEW: Memento description  
    if (t.includes('memento')) return "A man with short-term memory loss hunts his wife's killer using notes, tattoos, and Polaroid photos as his memory. But in a world where he can't form new memories, how can he trust what he's already forgotten? Nolan's breakthrough thriller told in reverse chronological order.";
    
    // 🔥 NEW: Inception description
    if (t.includes('inception')) return "Dom Cobb infiltrates dreams to steal secrets from the subconscious. His final job requires the impossible: instead of stealing an idea, he must plant one deep within a target's mind. Dreams within dreams create a labyrinth where reality becomes negotiable and time moves differently on each level.";
    
    if (t.includes('shutter island')) return "A U.S. Marshal investigates a disappearance at a remote psychiatric facility where nothing is as it appears. His grip on reality slips as dark experiments surface. The investigation becomes a psychological maze with no exit.";
    
    return "A mind-bending exploration of reality where every scene challenges your perception of truth and identity.";
  };

  // 🔥 SMART COMPLEXITY SCORE TITLE LOGIC
  const getComplexityScoreTitle = () => {
    if (fromShutterIslandCollection) return 'PSYCHOLOGICAL COMPLEXITY SCORE';
    if (fromMementoCollection) return 'MEMORY COMPLEXITY SCORE';
    return 'COMPLEXITY SCORE';
  };

  const getComplexityIndexLabel = () => {
    if (fromShutterIslandCollection) return 'PSYCHOLOGICAL INDEX';
    if (fromMementoCollection) return 'MEMORY INDEX';
    return 'MIND-BENDING INDEX';
  };

  const getComplexityLevelLabel = () => {
    if (fromShutterIslandCollection) return 'PSYCHOLOGICAL DISTORTION LEVEL';
    if (fromMementoCollection) return 'MEMORY DISTORTION LEVEL';
    return 'COGNITIVE DISTORTION LEVEL';
  };

  const getComplexityDescription = () => {
    if (fromShutterIslandCollection) {
      if (mindBendingIndex >= 90) return "A transcendent masterpiece that redefines psychological storytelling, requiring multiple viewings for complete comprehension.";
      if (mindBendingIndex >= 80) return "Sophisticated psychological manipulation with advanced reality-questioning elements and identity complexity.";
      if (mindBendingIndex >= 70) return "Thoughtfully complex psychological narrative with engaging mind-bending elements throughout.";
      return "Accessible psychological complexity with subtle reality-questioning elements that reward careful viewing.";
    }
    
    if (fromMementoCollection) {
      if (mindBendingIndex >= 90) return "A transcendent masterpiece that redefines memory-based storytelling, requiring multiple viewings for complete comprehension.";
      if (mindBendingIndex >= 80) return "Sophisticated memory manipulation with advanced identity-questioning elements and temporal complexity.";
      if (mindBendingIndex >= 70) return "Thoughtfully complex memory narrative with engaging identity-bending elements throughout.";
      return "Accessible memory complexity with subtle identity-questioning elements that reward careful viewing.";
    }
    
    // Default descriptions
    if (mindBendingIndex >= 90) return "A transcendent masterpiece that redefines narrative complexity, requiring multiple viewings for complete comprehension.";
    if (mindBendingIndex >= 80) return "Sophisticated cinematic storytelling with advanced non-linear elements and reality-bending concepts.";
    if (mindBendingIndex >= 70) return "Thoughtfully complex narrative structure with engaging mind-bending elements throughout.";
    return "Accessible complexity with subtle mind-bending elements that reward careful viewing.";
  };

  return (
    <motion.div
      className="space-y-12 mt-16"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* CINEMATIC TITLE */}
      <div className="text-center space-y-6">
        <motion.h1 
          className="text-4xl md:text-6xl font-extralight tracking-widest text-white" 
          style={{ fontFamily: "'Playfair Display', serif" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          {title}
        </motion.h1>
        
        <motion.div 
          className="flex items-center justify-center space-x-6 text-gray-400 text-sm tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <span>{year}</span>
          <span>•</span>
          <span>{director}</span>
          <span>•</span>
          <span>{runtime}</span>
          <span>•</span>
          <span 
            className="px-2 py-1 rounded border font-medium"
            style={{ 
              color: getAgeRatingColor(ageRating),
              borderColor: getAgeRatingColor(ageRating),
              backgroundColor: `${getAgeRatingColor(ageRating)}15`
            }}
          >
            {ageRating}
          </span>
        </motion.div>

        {quote && (
          <motion.blockquote 
            className="text-2xl text-yellow-400/90 font-light italic max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            "{quote}"
          </motion.blockquote>
        )}
      </div>

      {/* UNIQUE MOVIE DESCRIPTION */}
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <div className="p-8 bg-gradient-to-r from-gray-800/30 to-gray-900/50 rounded-2xl border border-yellow-400/20">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-yellow-400" />
            <h3 className="text-2xl font-light text-yellow-300">The Experience</h3>
          </div>
          
          <p className="text-gray-200 leading-relaxed text-lg">
            {getUniqueDescription()}
          </p>
        </div>
      </motion.div>

      {/* MINIMAL INFO CARDS */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="p-6 bg-gray-900/40 rounded-xl border-l-2 border-yellow-400/50">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-5 h-5 text-yellow-400" />
            <h3 className="text-lg font-light text-white">Cast & Crew</h3>
          </div>
          <div className="space-y-2">
            <p className="text-gray-300"><span className="text-gray-500">Director:</span> {director}</p>
            <p className="text-gray-300 text-sm"><span className="text-gray-500">Starring:</span> {cast}</p>
          </div>
        </div>

        <div className="p-6 bg-gray-900/40 rounded-xl border-l-2 border-blue-400/50">
          <div className="flex items-center gap-3 mb-4">
            <Film className="w-5 h-5 text-blue-400" />
            <h3 className="text-lg font-light text-white">Production Details</h3>
          </div>
          <div className="space-y-2">
            <p className="text-gray-300"><span className="text-gray-500">Budget:</span> {budget}</p>
            <p className="text-gray-300"><span className="text-gray-500">Box Office:</span> {boxOffice}</p>
            <p className="text-gray-300">
              <span className="text-gray-500">Age Rating:</span> 
              <span 
                className="ml-2 px-2 py-1 rounded border text-sm font-medium"
                style={{ 
                  color: getAgeRatingColor(ageRating),
                  borderColor: getAgeRatingColor(ageRating),
                  backgroundColor: `${getAgeRatingColor(ageRating)}15`
                }}
              >
                {ageRating}
              </span>
            </p>
          </div>
        </div>
      </motion.div>

      {/* WHERE TO WATCH FIRST */}
      <EnhancedWhereToWatchSection movie={movie} />

      {/* 🔥 SMART COMPLEXITY SCORE SECTION - 💚 GREEN BORDERS FOR SHUTTER ISLAND! */}
      <motion.div
        className="mb-8 sm:mb-12 bg-gradient-to-br from-gray-800/40 to-gray-900/60 rounded-xl border border-gray-700/50 p-4 sm:p-8 shadow-2xl backdrop-blur-sm relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.01 }}
      >
        {/* Corner decorations - 💚 GREEN FOR SHUTTER ISLAND */}
        <div className={`absolute top-2 left-2 sm:top-4 sm:left-4 w-3 h-3 sm:w-5 sm:h-5 border-t-2 border-l-2 ${fromShutterIslandCollection ? 'border-green-400/40' : 'border-yellow-400/40'}`}></div>
        <div className={`absolute top-2 right-2 sm:top-4 sm:right-4 w-3 h-3 sm:w-5 sm:h-5 border-t-2 border-r-2 ${fromShutterIslandCollection ? 'border-green-400/40' : 'border-yellow-400/40'}`}></div>
        <div className={`absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-3 h-3 sm:w-5 sm:h-5 border-b-2 border-l-2 ${fromShutterIslandCollection ? 'border-green-400/40' : 'border-yellow-400/40'}`}></div>
        <div className={`absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-3 h-3 sm:w-5 sm:h-5 border-b-2 border-r-2 ${fromShutterIslandCollection ? 'border-green-400/40' : 'border-yellow-400/40'}`}></div>

        {/* Header with title on left, stats on right */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4 sm:gap-6">
          {/* Smart Title on left - 💚 GREEN ICON FOR SHUTTER ISLAND */}
          <div className="flex items-center gap-4">
            <Star className={`w-6 h-6 ${fromShutterIslandCollection ? 'text-green-400' : 'text-green-400'}`} />
            <h3 className="text-2xl font-light text-gray-200 tracking-wide uppercase">
              {getComplexityScoreTitle()}
            </h3>
          </div>
          
          {/* Stats moved to right */}
          <div className="flex items-center gap-6 sm:gap-8">
            <div className="text-right">
              <div className="text-3xl sm:text-4xl font-extralight mb-1 tracking-wider text-gray-200">{mindBendingIndex}</div>
              <div className="text-xs text-gray-400 font-light tracking-wide uppercase">
                {getComplexityIndexLabel()}
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl sm:text-4xl font-extralight mb-1 tracking-wider text-gray-200">{rating}</div>
              <div className="text-xs text-gray-400 font-light tracking-wide uppercase">IMDB RATING</div>
            </div>
          </div>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <div>
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <span className="text-sm text-gray-300 font-light tracking-wider uppercase">
                {getComplexityLevelLabel()}
              </span>
              <span 
                className="text-sm font-light px-3 py-1 sm:px-4 sm:py-2 rounded-lg border backdrop-blur-sm tracking-wider uppercase"
                style={{
                  color: getComplexityColor(complexityLevel),
                  borderColor: getComplexityColor(complexityLevel),
                  backgroundColor: `${getComplexityColor(complexityLevel)}15`
                }}
              >
                {complexityLevel}
              </span>
            </div>

            {/* Progress bar - 💚 GREEN FOR SHUTTER ISLAND */}
            <div className="relative w-full bg-gray-700/50 rounded-full h-4 overflow-hidden">
              <motion.div 
                className="h-full rounded-full relative"
                style={{ backgroundColor: getComplexityColor(complexityLevel) }}
                initial={{ width: 0 }}
                animate={{ width: `${mindBendingIndex}%` }}
                transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-pulse"></div>
              </motion.div>
              
              {/* Markers - 💚 GREEN FOR SHUTTER ISLAND */}
              <div className="absolute -top-1 sm:-top-2 left-0 w-full flex justify-between">
                {[25, 50, 75].map(mark => (
                  <div 
                    key={mark}
                    className={`w-0.5 sm:w-1 h-4 sm:h-7 rounded-full ${fromShutterIslandCollection ? 'bg-green-400/30' : 'bg-yellow-400/30'}`}
                    style={{ left: `${mark}%` }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Smart Description */}
            <p className="text-gray-300/90 text-sm font-light leading-relaxed tracking-wide mt-3">
              {getComplexityDescription()}
            </p>
          </div>
        </div>
      </motion.div>

      {/* 🔥 YOUR ORIGINAL COMPONENTS WITH UNIQUE MOVIE DATA */}
      <SensitiveContentTimelineSection movie={movie} />
      <EnhancedIntensityGraph scenes={safeMovieInfo.scenes} dominantColor={safeMovieInfo.dominantColor} />
      <StrategicDNAHelix dna={safeMovieInfo.dna} dominantColor={safeMovieInfo.dominantColor} />
      <RealCommentsRatingSection movie={movie} />
      
      {/* 🔥 FIXED FAQ SECTION - NOW PASSES MOVIE PROP CORRECTLY */}
      {fromShutterIslandCollection ? (
        <ShutterIslandSEOFAQSection movie={movie} />
      ) : fromMementoCollection ? (
        <MementoSEOFAQSection movie={movie} />
      ) : (
        <SEOFAQSection movie={movie} />
      )}
    </motion.div>
  );
});

MovieDetailsSection.displayName = 'MovieDetailsSection';
export default MovieDetailsSection;
