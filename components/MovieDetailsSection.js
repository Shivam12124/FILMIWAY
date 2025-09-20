// components/MovieDetailsSection.js - WITH AGE RATING ADDED
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

const MovieDetailsSection = React.memo(({ movie }) => {
  const movieInfo = COMPLETE_MOVIE_DATA[movie?.tmdbId];
  if (!movie || !movieInfo) return null;

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
      'shutter island': '138 min'
    };
    
    const titleKey = title.toLowerCase().replace(/[^\w\s]/g, '').trim();
    return runtimeData[titleKey] || movieInfo.runtime || movie.Runtime || '120 min';
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
      'shutter island': 'R'
    };
    
    const titleKey = title.toLowerCase().replace(/[^\w\s]/g, '').trim();
    return ageRatings[titleKey] || movieInfo.ageRating || movie.Rated || 'R';
  };

  const title = movie.Title || 'Unknown Title';
  const director = movieInfo.director || movie.director || 'Unknown Director';
  const genre = movieInfo.genre || movie.Genre || 'Drama';
  const year = movie.Year || movie.year || '20XX';
  const runtime = getAccurateRuntime(title);
  const ageRating = getAgeRating(title); // GET AGE RATING
  const quote = STRATEGIC_QUOTES[movie.tmdbId] || '';
  const mindBendingIndex = movieInfo.mindBendingIndex ?? 85;
  const complexityLevel = movieInfo.complexityLevel || 'HIGH';
  const cast = movieInfo.cast?.join(', ') || '';
  const boxOffice = movieInfo.boxOffice || 'N/A';
  const budget = movieInfo.budget || 'N/A';
  const rating = movieInfo.rating || '7.5';

  // YOUR EXACT COMPLEXITY COLOR FUNCTION FROM THE FILE
  const getComplexityColor = (level) => {
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

  // MOVIE-SPECIFIC SYNOPSIS BASED ON TITLE
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
    
    if (t.includes('shutter island')) return "A U.S. Marshal investigates a disappearance at a remote psychiatric facility where nothing is as it appears. His grip on reality slips as dark experiments surface. The investigation becomes a psychological maze with no exit.";
    
    return "A mind-bending exploration of reality where every scene challenges your perception of truth and identity.";
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

      {/* 🎯 COMPLEXITY SCORE SECTION - STATS MOVED TO RIGHT */}
      <motion.div
        className="mb-8 sm:mb-12 bg-gradient-to-br from-gray-800/40 to-gray-900/60 rounded-xl border border-gray-700/50 p-4 sm:p-8 shadow-2xl backdrop-blur-sm relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.01 }}
      >
        {/* Corner decorations */}
        <div className="absolute top-2 left-2 sm:top-4 sm:left-4 w-3 h-3 sm:w-5 sm:h-5 border-t-2 border-l-2 border-yellow-400/40"></div>
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-3 h-3 sm:w-5 sm:h-5 border-t-2 border-r-2 border-yellow-400/40"></div>
        <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-3 h-3 sm:w-5 sm:h-5 border-b-2 border-l-2 border-yellow-400/40"></div>
        <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-3 h-3 sm:w-5 sm:h-5 border-b-2 border-r-2 border-yellow-400/40"></div>

        {/* Header with title on left, stats on right */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4 sm:gap-6">
          {/* Title on left */}
          <div className="flex items-center gap-4">
            <Star className="w-6 h-6 text-green-400" />
            <h3 className="text-2xl font-light text-gray-200 tracking-wide uppercase">COMPLEXITY SCORE</h3>
          </div>
          
          {/* Stats moved to right */}
          <div className="flex items-center gap-6 sm:gap-8">
            <div className="text-right">
              <div className="text-3xl sm:text-4xl font-extralight mb-1 tracking-wider text-gray-200">{mindBendingIndex}</div>
              <div className="text-xs text-gray-400 font-light tracking-wide uppercase">MIND-BENDING INDEX</div>
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
              <span className="text-sm text-gray-300 font-light tracking-wider uppercase">COGNITIVE DISTORTION LEVEL</span>
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

            {/* Progress bar */}
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
              
              {/* Markers */}
              <div className="absolute -top-1 sm:-top-2 left-0 w-full flex justify-between">
                {[25, 50, 75].map(mark => (
                  <div 
                    key={mark}
                    className="w-0.5 sm:w-1 h-4 sm:h-7 bg-yellow-400/30 rounded-full"
                    style={{ left: `${mark}%` }}
                  ></div>
                ))}
              </div>
            </div>

            <p className="text-gray-300/90 text-sm font-light leading-relaxed tracking-wide mt-3">
              {mindBendingIndex >= 90 
                ? "A transcendent masterpiece that redefines narrative complexity, requiring multiple viewings for complete comprehension."
                : mindBendingIndex >= 80 && mindBendingIndex < 90
                ? "Sophisticated cinematic storytelling with advanced non-linear elements and reality-bending concepts."
                : mindBendingIndex >= 70 && mindBendingIndex < 80
                ? "Thoughtfully complex narrative structure with engaging mind-bending elements throughout."
                : "Accessible complexity with subtle mind-bending elements that reward careful viewing."
              }
            </p>
          </div>
        </div>
      </motion.div>

      {/* OTHER SECTIONS */}
      <SensitiveContentTimelineSection movie={movie} />
      <EnhancedIntensityGraph scenes={movieInfo.scenes} dominantColor={movieInfo.dominantColor} />
      <StrategicDNAHelix dna={movieInfo.dna} dominantColor={movieInfo.dominantColor} />
      <RealCommentsRatingSection movie={movie} />
      <SEOFAQSection movie={movie} />
    </motion.div>
  );
});

MovieDetailsSection.displayName = 'MovieDetailsSection';
export default MovieDetailsSection;
