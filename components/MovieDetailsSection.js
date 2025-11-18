import React from 'react';
import { motion } from 'framer-motion';
import { Users, Film, BookOpen, Star } from 'lucide-react';

// Data imports
import { COMPLETE_MOVIE_DATA, STRATEGIC_QUOTES } from '../utils/movieData';
import { COMPLETE_MOVIE_DATA as SURVIVAL_MOVIE_DATA, STRATEGIC_QUOTES as SURVIVAL_QUOTES, SENSITIVE_TIMELINES } from '../utils/survivalMovieData';
import COMPLETE_THRILLER_DATABASE from '../utils/thrillerMovieData';
import MYSTERY_THRILLER_DATABASE from '../utils/mysteryThrillerMovieData';
import dramaRoutes from '../utils/dramaMovieRoutes';
import DETECTIVE_THRILLER_DATABASE from '../utils/detectiveThrillerMovieData';
import COMPLETE_PSYCH_THRILLER_DATABASE from '../utils/psychologicalThrillerMovieData';
import CRIME_THRILLER_DATABASE from '../utils/crimeThrillerMovieData';  // ✅ CRIME THRILLER ADDED

const DRAMA_MOVIE_DATA = dramaRoutes.COMPLETE_MOVIE_DATABASE;

// Component imports
import EnhancedIntensityGraph from './EnhancedIntensityGraph';
import StrategicDNAHelix from './StrategicDNAHelix';
import SensitiveContentTimelineSection from './SensitiveContentTimelineSection';
import EnhancedWhereToWatchSection from './EnhancedWhereToWatchSection';
import RealCommentsRatingSection from './RealCommentsRatingSection';
import SEOFAQSection from './SEOFAQSection';
import MementoSEOFAQSection from './MementoSEOFAQSection';
import ShutterIslandSEOFAQSection from './ShutterIslandSEOFAQSection';
import SurvivalSEOFAQSection from './SurvivalSEOFAQSection';
import DramaSEOFAQSection from './DramaSEOFAQSection';
import ThrillerSEOFAQSection from './ThrillerSEOFAQSection';
import MysteryThrillerSEOFAQSection from './MysteryThrillerSEOFAQSection';
import DetectiveThrillerSEOFAQSection from './DetectiveThrillerSEOFAQSection';
import PsychThrillerSEOFAQSection from './PsychThrillerSEOFAQSection';
import CrimeThrillerSEOFAQSection from './CrimeThrillerSEOFAQSection';  // ✅ CRIME THRILLER FAQ ADDED


const MovieDetailsSection = React.memo(({
  movie,
  fromMementoCollection,
  fromShutterIslandCollection,
  fromInceptionCollection,
  fromSurvivalCollection,
  fromDramaCollection,
  fromPsychologicalThrillerCollection, 
  fromThrillerCollection,
  fromMysteryThrillerCollection,
  fromDetectiveThrillerCollection,
  fromCrimeThrillerCollection  // ✅ CRIME THRILLER FLAG ADDED
}) => {

  if (!movie) return null;

  const safeLookup = (collection, id) => (collection && id && collection[id]) || null;


  // ✅ CRIME THRILLER LOOKUP
  const getCrimeThrillerMovieInfo = () => {
    if (!fromCrimeThrillerCollection || !movie.tmdbId) return null;
    if (!CRIME_THRILLER_DATABASE) return null;
    return CRIME_THRILLER_DATABASE[movie.tmdbId] || null;
  };

  const getPsychologicalThrillerMovieInfo = () => {
    if (!fromPsychologicalThrillerCollection || !movie.tmdbId) return null;
    if (!COMPLETE_PSYCH_THRILLER_DATABASE) return null;
    return COMPLETE_PSYCH_THRILLER_DATABASE[movie.tmdbId] || null;
  };

  const getDetectiveThrillerMovieInfo = () => {
    if (!fromDetectiveThrillerCollection || !movie.tmdbId) return null;
    if (!DETECTIVE_THRILLER_DATABASE) return null;
    return DETECTIVE_THRILLER_DATABASE[movie.tmdbId] || null;
  };

  const getThrillerMovieInfo = () => {
    if (!fromThrillerCollection || !movie.tmdbId) return null;
    if (!COMPLETE_THRILLER_DATABASE) return null;
    return COMPLETE_THRILLER_DATABASE[movie.tmdbId] || null;
  };

  const getMysteryThrillerMovieInfo = () => {
    if (!fromMysteryThrillerCollection || !movie.tmdbId) return null;
    if (!MYSTERY_THRILLER_DATABASE) return null;
    return MYSTERY_THRILLER_DATABASE[movie.tmdbId] || null;
  };


  // ✅ GET MOVIE INFO FROM CORRECT COLLECTION
  // ✅ GET MOVIE INFO FROM CORRECT COLLECTION (INCLUDING CRIME THRILLER)
  const movieInfo = fromCrimeThrillerCollection  // ✅ CRIME THRILLER ADDED FIRST
    ? getCrimeThrillerMovieInfo()
    : fromDetectiveThrillerCollection
    ? getDetectiveThrillerMovieInfo()
    : fromMysteryThrillerCollection
    ? getMysteryThrillerMovieInfo()
    : fromPsychologicalThrillerCollection
    ? getPsychologicalThrillerMovieInfo()
    : fromThrillerCollection
    ? getThrillerMovieInfo()
    : fromSurvivalCollection
    ? safeLookup(SURVIVAL_MOVIE_DATA, movie.tmdbId)
    : fromDramaCollection
    ? safeLookup(DRAMA_MOVIE_DATA, movie.tmdbId)
    : safeLookup(COMPLETE_MOVIE_DATA, movie.tmdbId);

  // ✅ DEFAULT FALLBACK DATA
  const getMovieSpecificData = (title) => ({
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
    dna: { Mystery: 60, Thriller: 30, Drama: 10 },
    cast: ['Lead Actor', 'Supporting Cast'],
    boxOffice: 'N/A',
    budget: 'N/A',
    synopsis: 'A compelling exploration of cinema.',
    ageRating: 'R'
  });

const title = movie.Title || (movieInfo && movieInfo.title) || 'Unknown Title';

const safeMovieInfo = movieInfo || getMovieSpecificData(title);

  const director = safeMovieInfo.director || movie.Director || 'Unknown Director';
  const genre = safeMovieInfo.genre || movie.Genre || 'Drama';
  const year = movie.Year || movie.year || '20XX';
  const runtime = safeMovieInfo.runtime || movie.Runtime || '120 min';
  const ageRating = safeMovieInfo.ageRating || movie.Rated || 'R';
  const cast = safeMovieInfo.cast?.join(', ') || '';
  const boxOffice = safeMovieInfo.boxOffice || 'N/A';
  const budget = safeMovieInfo.budget || 'N/A';
  const rating = safeMovieInfo.rating || movie.imdbRating || 7.5;

  const sensitiveScenes = safeMovieInfo.sensitiveScenes || SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes || [];

  const quote = fromMysteryThrillerCollection
    ? safeMovieInfo.synopsis || ''
    : fromThrillerCollection
    ? safeMovieInfo.synopsis || ''
    : fromSurvivalCollection
    ? SURVIVAL_QUOTES?.[movie.tmdbId] || ''
    : STRATEGIC_QUOTES?.[movie.tmdbId] || '';
    

  const displayIndex = fromMysteryThrillerCollection
  ? safeMovieInfo.mysteryComplexity ?? null
  : fromThrillerCollection
  ? safeMovieInfo.suspenseIntensity ?? null
  : fromSurvivalCollection
  ? safeMovieInfo.survivabilityIndex ?? null
  : safeMovieInfo.mindBendingIndex ?? null;

const scoreValue = fromCrimeThrillerCollection  // ✅ CRIME THRILLER ADDED
  ? movie.suspenseIntensity ?? safeMovieInfo.suspenseIntensity ?? 0
  : fromMysteryThrillerCollection
  ? movie.mysteryComplexity ?? safeMovieInfo.mysteryComplexity ?? 0
  : fromDetectiveThrillerCollection
  ? movie.mysteryComplexity ?? safeMovieInfo.mysteryComplexity ?? 0
  : fromPsychologicalThrillerCollection
  ? movie.suspenseIntensity ?? safeMovieInfo.suspenseIntensity ?? 0
  : fromDramaCollection
  ? movie.emotionalIntensity ?? safeMovieInfo.emotionalIntensity ?? 0
  : fromThrillerCollection
  ? movie.suspenseIntensity ?? safeMovieInfo.suspenseIntensity ?? 0
  : fromSurvivalCollection
  ? movie.survivabilityIndex ?? safeMovieInfo.survivabilityIndex ?? 0
  : fromInceptionCollection
  ? movie.mindBendingIndex ?? safeMovieInfo.mindBendingIndex ?? 0
  : safeMovieInfo.mindBendingIndex ?? 0;


const complexityLevel = safeMovieInfo.complexityLevel || 'HIGH';

const getComplexityColor = (level) => {
  if (fromDetectiveThrillerCollection) {
    switch (level) {
      case 'EXTREME': return '#ea0808ff';
      case 'HIGH': return '#f79400ff';
      case 'MEDIUM': return '#bb9e0cff';
      default: return '#6b7280';
    }
  }

  
  if (fromCrimeThrillerCollection) {  // ✅ CRIME THRILLER ADDED
    switch (level) {
      case 'EXTREME': return '#ea0808ff';
      case 'HIGH': return '#f79400ff';
      case 'MEDIUM': return '#bb9e0cff';
      default: return '#6b7280';
    }
  }
  if (fromMysteryThrillerCollection) {
    switch (level) {
      case 'EXTREME': return '#ea0808ff';
      case 'HIGH': return '#f79400ff';
      case 'MEDIUM': return '#bb9e0cff';
      default: return '#6b7280';
    }
  }
  if (fromPsychologicalThrillerCollection) {  // Added psychological thriller case
    switch (level) {
      case 'EXTREME': return '#ea0808ff';
      case 'HIGH': return '#f79400ff';
      case 'MEDIUM': return '#bb9e0cff';
      default: return '#6b7280';
    }
  }
  if (fromDramaCollection) {
    switch (level) {
      case 'EXTREME': return '#ea0808ff';
      case 'HIGH': return '#f79400ff';
      case 'MEDIUM': return '#bb9e0cff';
      default: return '#6b7280';
    }
  }
  if (fromThrillerCollection) {
    switch (level) {
      case 'EXTREME': return '#ea0808ff';
      case 'HIGH': return '#f79400ff';
      case 'MEDIUM': return '#bb9e0cff';
      default: return '#6b7280';
    }
  }
  switch (level) {
    case 'EXTREME': return '#ea0808ff';
    case 'HIGH': return '#f79400ff';
    case 'MEDIUM': return '#bb9e0cff';
    default: return '#6b7280';
  }
};

  const getAgeRatingColor = (rating) => {
    switch (rating) {
      case 'G': return '#22c55e';
      case 'PG': return '#3b82f6';
      case 'PG-13': return '#f59e0b';
      case 'R': return '#ef4444';
      case 'NC-17': return '#7c2d12';
      default: return '#6b7280';
    }
  };

  const getUniqueDescription = () => {
    if (safeMovieInfo?.synopsis) return safeMovieInfo.synopsis;
    const t = title.toLowerCase();
    
    if (t.includes('se7en')) return "A serial killer uses the seven deadly sins as motives, leading two detectives down a rain-soaked path of moral decay.";
    if (t.includes('prisoners')) return "When his daughter vanishes, a desperate father pursues moral boundaries. Brutal, intense, and emotionally devastating.";
    if (t.includes('no country for old men')) return "A drug deal goes wrong, unleashing violence across rural Texas. Neo-Western masterpiece about the clash between old and new.";
    if (t.includes('silence')) return "An FBI trainee enlists an imprisoned cannibal to catch a living serial killer. Psychological warfare at its finest.";
    if (t.includes('gone girl')) return "A wife's disappearance spirals into media madness and marital deception. Sharp critique of narrative construction.";
    
    return "A compelling exploration of truth, identity, and the limits of human understanding.";
  };

const getComplexityScoreTitle = () => {
  if (fromCrimeThrillerCollection) return 'CRIME INTENSITY SCORE';  // ✅ CRIME THRILLER ADDED
  if (fromDetectiveThrillerCollection) return 'MYSTERY COMPLEXITY SCORE';
  if (fromMysteryThrillerCollection) return 'MYSTERY COMPLEXITY SCORE';
  if (fromPsychologicalThrillerCollection) return 'PSYCHOLOGICAL COMPLEXITY SCORE';
  if (fromDramaCollection) return 'EMOTIONAL INTENSITY SCORE';
  if (fromThrillerCollection) return 'SUSPENSE INTENSITY SCORE';
  if (fromSurvivalCollection) return 'SURVIVAL INTENSITY SCORE';
  if (fromInceptionCollection) return 'MIND-BENDING COMPLEXITY SCORE';
  if (fromShutterIslandCollection) return 'PSYCHOLOGICAL COMPLEXITY SCORE';
  if (fromMementoCollection) return 'MEMORY COMPLEXITY SCORE';
  return 'COMPLEXITY SCORE';
};


const getComplexityIndexLabel = () => {
  if (fromCrimeThrillerCollection) return 'CRIME INTENSITY INDEX';  // ✅ CRIME THRILLER ADDED
  if (fromDetectiveThrillerCollection) return 'MYSTERY INDEX';
  if (fromMysteryThrillerCollection) return 'MYSTERY INDEX';
  if (fromPsychologicalThrillerCollection) return 'PSYCHOLOGICAL INDEX';
  if (fromDramaCollection) return 'EMOTIONAL INTENSITY';
  if (fromThrillerCollection) return 'SUSPENSE INDEX';
  if (fromSurvivalCollection) return 'SURVIVABILITY INDEX';
  if (fromInceptionCollection) return 'MIND-BENDING INDEX';
  if (fromShutterIslandCollection) return 'PSYCHOLOGICAL INDEX';
  if (fromMementoCollection) return 'MEMORY INDEX';
  return 'MIND-BENDING INDEX';
};


const getComplexityLevelLabel = () => {
  if (fromCrimeThrillerCollection) return 'CRIME COMPLEXITY LEVEL';  // ✅ CRIME THRILLER ADDED
  if (fromDetectiveThrillerCollection) return 'MYSTERY COMPLEXITY LEVEL';
  if (fromMysteryThrillerCollection) return 'MYSTERY COMPLEXITY LEVEL';
  if (fromPsychologicalThrillerCollection) return 'PSYCHOLOGICAL DISTORTION LEVEL';
  if (fromDramaCollection) return 'EMOTIONAL RESONANCE LEVEL';
  if (fromThrillerCollection) return 'SUSPENSE INTENSITY LEVEL';
  if (fromSurvivalCollection) return 'SURVIVAL INTENSITY LEVEL';
  if (fromInceptionCollection) return 'COGNITIVE COMPLEXITY LEVEL';
  if (fromShutterIslandCollection) return 'PSYCHOLOGICAL DISTORTION LEVEL';
  if (fromMementoCollection) return 'MEMORY DISTORTION LEVEL';
  return 'COGNITIVE DISTORTION LEVEL';
};


const getComplexityDescription = () => {
  if (fromCrimeThrillerCollection) {  // ✅ CRIME THRILLER ADDED
    if (scoreValue >= 90) return 'A masterfully crafted crime epic with unparalleled narrative complexity, moral ambiguity, and cinematic excellence.';
    if (scoreValue >= 80) return 'A gripping crime thriller with intricate plotting, complex characters, and masterful direction.';
    if (scoreValue >= 70) return 'An engaging crime narrative with solid storytelling and compelling investigative work.';
    return 'An accessible crime thriller that captivates with clever plotting and genuine suspense.';
  }
  if (fromDetectiveThrillerCollection) {
    if (scoreValue >= 90) return 'A masterfully intricate detective thriller with unparalleled investigative depth and suspense.';
    if (scoreValue >= 80) return 'A gripping detective story with complex puzzles and expertly crafted suspense.';
    if (scoreValue >= 70) return 'An engaging detective narrative providing solid mystery and thoughtful investigation.';
    return 'An accessible detective thriller that captivates with clever storytelling and intrigue.';
  }
  if (fromMysteryThrillerCollection) {
    if (scoreValue >= 90) return 'A masterfully crafted mystery with layers of deception, leaving audiences questioning everything until the final reveal.';
    if (scoreValue >= 80) return 'Intricately plotted thriller with compelling mysteries and shocking revelations throughout.';
    if (scoreValue >= 70) return 'Engaging mystery with well-crafted clues and satisfying detective work.';
    return 'Accessible mystery thriller with genuine intrigue and compelling storylines.';
  }
  if (fromPsychologicalThrillerCollection) {  // Added psychological thriller descriptions
    if (scoreValue >= 90) return 'A mind-bending psychological thriller with intense twists and profound character exploration.';
    if (scoreValue >= 80) return 'An immersive psychological thriller that delves deep into the human psyche and suspense.';
    if (scoreValue >= 70) return 'A compelling psychological thriller with gripping tension and layered storytelling.';
    return 'An engaging psychological thriller that captivates with mystery and emotional depth.';
  }
  if (fromDramaCollection) {
    if (scoreValue >= 90) return 'A profoundly moving emotional journey reaching the deepest corners of human experience.';
    if (scoreValue >= 80) return 'Intensely emotional narrative with powerful character moments and deeply affecting connections.';
    if (scoreValue >= 70) return 'Thoughtfully crafted emotional story with genuine heart and compelling drama.';
    return 'Accessible emotional narrative with authentic feeling and relatable moments.';
  }
  if (fromThrillerCollection) {
    if (scoreValue >= 90) return 'An absolutely brutal and relentless suspense masterpiece, leaving viewers shaken.';
    if (scoreValue >= 80) return 'Intensely suspenseful thriller with shocking twists and psychological manipulation.';
    if (scoreValue >= 70) return 'Gripping thriller with compelling mysteries and tense moments throughout.';
    return 'Accessible thriller with genuine suspense and engaging mystery elements.';
  }
  if (scoreValue >= 90) return 'A transcendent masterpiece redefining narrative complexity.';
  if (scoreValue >= 80) return 'Sophisticated cinematic storytelling with advanced non-linear elements.';
  if (scoreValue >= 70) return 'Thoughtfully complex narrative with engaging mind-bending elements.';
  return 'Accessible complexity with subtle mind-bending elements rewarding careful viewing.';
};

const getBorderColor = () => {
  if (fromCrimeThrillerCollection) return 'border-slate-400/40'; 
  if (fromDetectiveThrillerCollection) return 'border-yellow-400/40';
  if (fromPsychologicalThrillerCollection) return 'border-yellow-400/40';  // Added
  if (fromThrillerCollection) return 'border-yellow-400/40';
  if (fromDramaCollection) return 'border-red-400/40';
  if (fromInceptionCollection) return 'border-yellow-400/40';
  if (fromShutterIslandCollection) return 'border-yellow-400/40';
  if (fromMementoCollection) return 'border-yellow-400/40';
  return 'border-yellow-400/40';
};

const getStarColor = () => {
  if (fromCrimeThrillerCollection) return 'text-slate-400';  
  if (fromDetectiveThrillerCollection) return 'text-yellow-400';
  if (fromPsychologicalThrillerCollection) return 'text-yellow-400';  // Added
  if (fromThrillerCollection) return 'text-yellow-400';
  if (fromDramaCollection) return 'text-red-400';
  if (fromInceptionCollection) return 'text-yellow-400';
  if (fromShutterIslandCollection) return 'text-yellow-400';
  if (fromMementoCollection) return 'text-yellow-400';
  return 'text-yellow-400';
};

  return (
    <motion.div
      className="space-y-12 mt-16"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* REST OF YOUR JSX STAYS THE SAME */}
      <div className="text-center space-y-6">
        <motion.h2
          className="text-4xl md:text-6xl font-extralight tracking-widest text-white"
          style={{ fontFamily: "'Playfair Display', serif" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          {title}
        </motion.h2>

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

      </div>

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
          <p className="text-gray-200 leading-relaxed text-lg">{getUniqueDescription()}</p>
        </div>
      </motion.div>

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

      <EnhancedWhereToWatchSection movie={movie} />

      <motion.div
        className="mb-8 sm:mb-12 bg-gradient-to-br from-gray-800/40 to-gray-900/60 rounded-xl border border-gray-700/50 p-4 sm:p-8 shadow-2xl backdrop-blur-sm relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.01 }}
      >
        {[
          { pos: 'top-2 left-2 sm:top-4 sm:left-4', border: 'border-t-2 border-l-2' },
          { pos: 'top-2 right-2 sm:top-4 sm:right-4', border: 'border-t-2 border-r-2' },
          { pos: 'bottom-2 left-2 sm:bottom-4 sm:left-4', border: 'border-b-2 border-l-2' },
          { pos: 'bottom-2 right-2 sm:bottom-4 sm:right-4', border: 'border-b-2 border-r-2' }
        ].map((corner, i) => (
          <div
            key={i}
            className={`absolute ${corner.pos} w-3 h-3 sm:w-5 sm:h-5 ${corner.border} ${getBorderColor()}`}
          />
        ))}

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4 sm:gap-6">
          <div className="flex items-center gap-4">
            <Star className={`w-6 h-6 ${getStarColor()}`} />
            <h3 className="text-2xl font-light text-gray-200 tracking-wide uppercase">
              {getComplexityScoreTitle()}
            </h3>
          </div>

          <div className="flex items-center gap-6 sm:gap-8">
            <div className="text-right">
              <div className="text-3xl sm:text-4xl font-extralight mb-1 tracking-wider text-gray-200">{scoreValue}</div>
              <div className="text-xs text-gray-400 font-light tracking-wide uppercase">{getComplexityIndexLabel()}</div>
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
              <span className="text-sm text-gray-300 font-light tracking-wider uppercase">{getComplexityLevelLabel()}</span>
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

            <div className="relative w-full bg-gray-700/50 rounded-full h-4 overflow-hidden">
              <motion.div
                className="h-full rounded-full relative"
                style={{ backgroundColor: getComplexityColor(complexityLevel) }}
                initial={{ width: 0 }}
                animate={{ width: `${scoreValue}%` }}
                transition={{ duration: 2, delay: 0.5, ease: 'easeOut' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-pulse" />
              </motion.div>

              <div className="absolute -top-1 sm:-top-2 left-0 w-full flex justify-between">
                {[25, 50, 75].map((mark) => (
                  <div
                    key={mark}
                    className={`w-0.5 sm:w-1 h-4 sm:h-7 rounded-full ${getBorderColor().replace('border', 'bg').replace('/40', '/30')}`}
                    style={{ left: `${mark}%` }}
                  />
                ))}
              </div>
            </div>

            <p className="text-gray-300/90 text-sm font-light leading-relaxed tracking-wide mt-3">{getComplexityDescription()}</p>
          </div>
        </div>
      </motion.div>

      <SensitiveContentTimelineSection movie={movie} sensitiveScenes={sensitiveScenes} />

      {/* ✅ DYNAMIC DNA AND INTENSITY GRAPH FROM MOVIEINFO */}
<EnhancedIntensityGraph scenes={safeMovieInfo.scenes} dominantColor={safeMovieInfo.dominantColor} />
<StrategicDNAHelix dna={safeMovieInfo.dna} dominantColor={safeMovieInfo.dominantColor} />

<RealCommentsRatingSection movie={movie} />

{/* ✅ FAQ SECTION WITH CRIME THRILLER SUPPORT */}
{fromCrimeThrillerCollection ? (  // ✅ CRIME THRILLER ADDED FIRST
  <CrimeThrillerSEOFAQSection movie={movie} />
) : fromDetectiveThrillerCollection ? (
  <DetectiveThrillerSEOFAQSection movie={movie} />
) : fromMysteryThrillerCollection ? (
  <MysteryThrillerSEOFAQSection movie={movie} />
) : fromPsychologicalThrillerCollection ? (
  <PsychThrillerSEOFAQSection movie={movie} />
) : fromThrillerCollection ? (
  <ThrillerSEOFAQSection movie={movie} />
) : fromSurvivalCollection ? (
  <SurvivalSEOFAQSection movie={movie} />
) : fromDramaCollection ? (
  <DramaSEOFAQSection movie={movie} />
) : fromInceptionCollection ? (
  <SEOFAQSection movie={movie} />
) : fromShutterIslandCollection ? (
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
