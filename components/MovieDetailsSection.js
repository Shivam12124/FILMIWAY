import React from 'react';
import { motion } from 'framer-motion';
import { Users, Film, BookOpen, Star } from 'lucide-react';

// Data imports
import { COMPLETE_MOVIE_DATA, STRATEGIC_QUOTES } from '../utils/movieData';
import { COMPLETE_MOVIE_DATA as SURVIVAL_MOVIE_DATA, STRATEGIC_QUOTES as SURVIVAL_QUOTES, SENSITIVE_TIMELINES } from '../utils/survivalMovieData';
import dramaRoutes from '../utils/dramaMovieRoutes';
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

const MovieDetailsSection = React.memo(({ movie, fromMementoCollection, fromShutterIslandCollection, fromInceptionCollection, fromSurvivalCollection, fromDramaCollection }) => {

  if (!movie) {
    console.log('❌ No movie data provided');
    return null;
  }

  // Select movie info from proper collection
  const movieInfo = fromSurvivalCollection
    ? SURVIVAL_MOVIE_DATA[movie?.tmdbId]
    : fromDramaCollection
    ? DRAMA_MOVIE_DATA[movie?.tmdbId]
    : COMPLETE_MOVIE_DATA[movie?.tmdbId];

  // Title fallback
  const title = movie.Title || (movieInfo && movieInfo.title) || 'Unknown Title';

  // Fallback function to get movie data by title if missing in collection
  const getMovieSpecificData = (title) => {
    const t = title.toLowerCase();
    return {
      mindBendingIndex: 85, complexityLevel: 'HIGH', dominantColor: '#ca8a04', rating: movie.imdbRating || 7.5, director: movie.Director || 'Acclaimed Director',
      scenes: [
        { time: 20, intensity: 60, label: 'Opening', color: '#92400e' },
        { time: 50, intensity: 75, label: 'Conflict', color: '#ca8a04' },
        { time: 80, intensity: 85, label: 'Climax', color: '#eab308' },
        { time: 100, intensity: 90, label: 'Resolution', color: '#facc15' },
        { time: 120, intensity: 95, label: 'Revelation', color: '#fde047' }
      ],
      dna: { "Mystery": 60, "Thriller": 30, "Drama": 10 },
      cast: ['Lead Actor', 'Supporting Cast'],
      boxOffice: 'N/A', budget: 'N/A'
    };
  };

  const safeMovieInfo = movieInfo || getMovieSpecificData(title);

  // 🔥 SENSITIVE SCENES EXTRACTION - Gets from drama data if available, otherwise falls back
  const sensitiveScenes = fromDramaCollection && safeMovieInfo?.sensitiveScenes
    ? safeMovieInfo.sensitiveScenes
    : (SENSITIVE_TIMELINES[movie?.tmdbId]?.scenes || []);

  // Accurate runtime by title fallback
  const getAccurateRuntime = (title) => {
    const runtimeData = {
      'mr. nobody': '141 min', 'primer': '77 min', 'synecdoche, new york': '124 min', 'mulholland drive': '147 min',
      'predestination': '97 min', 'coherence': '89 min', 'donnie darko': '113 min', 'enemy': '90 min',
      'the fountain': '96 min', 'shutter island': '138 min', 'the usual suspects': '106 min',
      'memento': '113 min', 'inception': '148 min'
    };
    const titleKey = title.toLowerCase().replace(/[^\w\s]/g, '').trim();
    return runtimeData[titleKey] || safeMovieInfo.runtime || movie.Runtime || '120 min';
  };

  // Age rating fallback
  const getAgeRating = (title) => {
    const ageRatings = {
      'mr. nobody': 'R', 'primer': 'PG-13', 'synecdoche, new york': 'R', 'mulholland drive': 'R',
      'predestination': 'R', 'coherence': 'Not Rated', 'donnie darko': 'R', 'enemy': 'R',
      'the fountain': 'PG-13', 'shutter island': 'R', 'the usual suspects': 'R',
      'memento': 'R', 'inception': 'PG-13'
    };
    const titleKey = title.toLowerCase().replace(/[^\w\s]/g, '').trim();
    return ageRatings[titleKey] || safeMovieInfo.ageRating || movie.Rated || 'R';
  };

  const director = safeMovieInfo.director || movie.director || 'Unknown Director';
  const genre = safeMovieInfo.genre || movie.Genre || 'Drama';
  const year = movie.Year || movie.year || '20XX';
  const runtime = getAccurateRuntime(title);
  const ageRating = getAgeRating(title);

  const quote = fromSurvivalCollection
    ? (SURVIVAL_QUOTES[movie.tmdbId] || '')
    : (STRATEGIC_QUOTES[movie.tmdbId] || '');

  const displayIndex = fromSurvivalCollection
    ? (safeMovieInfo.survivabilityIndex || safeMovieInfo.mindBendingIndex || 85)
    : (safeMovieInfo.mindBendingIndex || 85);

  // 🔥 FOR DRAMA COLLECTION: USE EMOTIONAL INTENSITY INSTEAD
  const scoreValue = fromDramaCollection ? (movie.emotionalIntensity || safeMovieInfo.emotionalIntensity || 75) : displayIndex;

  const complexityLevel = safeMovieInfo.complexityLevel || 'HIGH';
  const cast = safeMovieInfo.cast?.join(', ') || '';
  const boxOffice = safeMovieInfo.boxOffice || 'N/A';
  const budget = safeMovieInfo.budget || 'N/A';
  const rating = safeMovieInfo.rating || '7.5';

  // Color helper functions as you had
  const getComplexityColor = (level) => {
    if (fromDramaCollection) {
        switch(level) {
        case 'EXTREME': return '#eab308';
        case 'HIGH': return '#facc15';
        case 'MEDIUM': return '#fde047';
        default: return '#6b7280';
      }
    }
    if (fromInceptionCollection) {
      switch(level) {
        case 'EXTREME': return '#eab308';
        case 'HIGH': return '#facc15';
        case 'MEDIUM': return '#fde047';
        default: return '#6b7280';
      }
    }
    if (fromShutterIslandCollection) {
     switch(level) {
        case 'EXTREME': return '#eab308';
        case 'HIGH': return '#facc15';
        case 'MEDIUM': return '#fde047';
        default: return '#6b7280';
      }
    }
     switch(level) {
        case 'EXTREME': return '#eab308';
        case 'HIGH': return '#facc15';
        case 'MEDIUM': return '#fde047';
        default: return '#6b7280';
    }
  };

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

  // Description text
  const getUniqueDescription = () => {
    const t = title.toLowerCase();

    if (fromSurvivalCollection && safeMovieInfo?.synopsis) return safeMovieInfo.synopsis;
    if (fromDramaCollection && safeMovieInfo?.synopsis) return safeMovieInfo.synopsis;

    // Inception collection descriptions
    if (t.includes('enemy')) return "A quiet professor discovers his exact double living a different life in the same city. Their obsession with each other fractures reality in disturbing ways. Gyllenhaal's dual performance explores the dark side of identity in Villeneuve's psychological maze.";
    if (t.includes('primer')) return "Two engineers accidentally discover time travel in their garage. As they exploit multiple timelines for personal gain, reality fractures into dangerous paradoxes. A low-budget masterpiece that will melt your brain.";
    if (t.includes('coherence')) return "Eight friends gather for dinner as a cosmic phenomenon fractures reality into infinite parallel versions. Each decision splits their world into terrifying new possibilities. A mind-bending thriller shot in one house with endless implications.";
    if (t.includes('donnie darko')) return "A troubled teenager receives visions from a six-foot rabbit predicting the world's end in 28 days. Time travel, destiny, and suburban paranoia collide in this cult classic. Frank demands increasingly dangerous acts as reality unravels.";
    if (t.includes('fountain')) return "Three parallel love stories across a thousand years explore mortality, obsession, and acceptance through myth and science. A conquistador, scientist, and space traveler all fight the same impossible battle. Aronofsky's visual poetry about death and transcendence.";

    if (t.includes('synecdoche')) return "A theater director creates a life-sized replica of New York inside a warehouse to stage the most honest play ever conceived. Reality and performance blur as his ambitious project becomes infinite recursion. Kaufman's existential meditation on art and mortality.";
    if (t.includes('mulholland')) return "A car crash on Mulholland Drive sends an amnesiac woman into the dark heart of Hollywood's dream factory. Lynch weaves dreams and nightmares into a puzzle where nothing is real and everything matters. Identity becomes the ultimate mystery.";
    if (t.includes('predestination')) return "A temporal agent pursues an elusive criminal who has evaded him through time for years, jumping between decades to prevent crimes before they happen. His final assignment leads him to recruit his younger self for a mission that will determine the fate of humanity. The chase becomes a complex temporal puzzle where past, present, and future collide in ways that challenge the very nature of identity and free will.";
    if (t.includes('mr. nobody') || t.includes('nobody')) return "The last mortal human recounts the infinite lives he could have lived based on different choices. Every decision creates new realities in this quantum meditation on possibility. Each timeline is equally real and unreal.";
    if (t.includes('usual suspects')) return "Five criminals meet in a police lineup and plan the perfect heist. But their target leads them into the web of Keyser Söze, a legendary crime lord who may not exist. Nothing is as it seems in this masterpiece of deception where the greatest trick is convincing you it's real.";
    if (t.includes('memento')) return "A man with short-term memory loss hunts his wife's killer using notes, tattoos, and Polaroid photos as his memory. But in a world where he can't form new memories, how can he trust what he's already forgotten? Nolan's breakthrough thriller told in reverse chronological order.";
    if (t.includes('inception')) return "Dom Cobb infiltrates dreams to steal secrets from the subconscious. His final job requires the impossible: instead of stealing an idea, he must plant one deep within a target's mind. Dreams within dreams create a labyrinth where reality becomes negotiable and time moves differently on each level.";
    if (t.includes('shutter island')) return "A U.S. Marshal investigates a disappearance at a remote psychiatric facility where nothing is as it appears. His grip on reality slips as dark experiments surface. The investigation becomes a psychological maze with no exit.";

    return safeMovieInfo.synopsis || "A mind-bending exploration of reality where every scene challenges your perception of truth and identity.";
  };

  const getComplexityScoreTitle = () => {
    if (fromDramaCollection) return 'EMOTIONAL INTENSITY SCORE';
    if (fromSurvivalCollection) return 'SURVIVAL INTENSITY SCORE';
    if (fromInceptionCollection) return 'MIND-BENDING COMPLEXITY SCORE';
    if (fromShutterIslandCollection) return 'PSYCHOLOGICAL COMPLEXITY SCORE';
    if (fromMementoCollection) return 'MEMORY COMPLEXITY SCORE';
    return 'COMPLEXITY SCORE';
  };

  const getComplexityIndexLabel = () => {
    if (fromDramaCollection) return 'EMOTIONAL INTENSITY';
    if (fromSurvivalCollection) return 'SURVIVABILITY INDEX';
    if (fromInceptionCollection) return 'MIND-BENDING INDEX';
    if (fromShutterIslandCollection) return 'PSYCHOLOGICAL INDEX';
    if (fromMementoCollection) return 'MEMORY INDEX';
    return 'MIND-BENDING INDEX';
  };

  const getComplexityLevelLabel = () => {
    if (fromDramaCollection) return 'EMOTIONAL RESONANCE LEVEL';
    if (fromSurvivalCollection) return 'SURVIVAL INTENSITY LEVEL';
    if (fromInceptionCollection) return 'COGNITIVE COMPLEXITY LEVEL';
    if (fromShutterIslandCollection) return 'PSYCHOLOGICAL DISTORTION LEVEL';
    if (fromMementoCollection) return 'MEMORY DISTORTION LEVEL';
    return 'COGNITIVE DISTORTION LEVEL';
  };

  const getComplexityDescription = () => {
    if (fromDramaCollection) {
      if (scoreValue >= 90) return "A profoundly moving emotional journey that reaches the deepest corners of human experience, leaving lasting emotional resonance.";
      if (scoreValue >= 80) return "Intensely emotional narrative with powerful character moments and deeply affecting human connections throughout.";
      if (scoreValue >= 70) return "Thoughtfully crafted emotional story with genuine heart and compelling human drama that touches the soul.";
      return "Accessible emotional narrative with authentic feeling and relatable human moments throughout.";
    }

    if (fromSurvivalCollection) {
      if (scoreValue >= 90) return "An extraordinary survival experience that pushes human endurance to absolute limits, showcasing unbreakable determination.";
      if (scoreValue >= 80) return "Intense survival narrative with brutal challenges testing physical and mental resilience throughout.";
      if (scoreValue >= 70) return "Compelling survival story with engaging life-or-death stakes and authentic human perseverance.";
      return "Accessible survival drama with genuine tension and relatable human struggle against the odds.";
    }

    if (fromInceptionCollection) {
      if (scoreValue >= 90) return "A transcendent masterpiece that redefines reality-bending storytelling, requiring multiple viewings to fully grasp the layered complexity.";
      if (scoreValue >= 80) return "Sophisticated mind-bending narrative with advanced reality-questioning elements and identity complexity throughout.";
      if (scoreValue >= 70) return "Thoughtfully complex reality-bending story with engaging perception-altering elements and philosophical depth.";
      return "Accessible mind-bending complexity with subtle reality-questioning elements that reward careful viewing.";
    }

    if (fromShutterIslandCollection) {
      if (scoreValue >= 90) return "A transcendent masterpiece that redefines psychological storytelling, requiring multiple viewings for complete comprehension.";
      if (scoreValue >= 80) return "Sophisticated psychological manipulation with advanced reality-questioning elements and identity complexity.";
      if (scoreValue >= 70) return "Thoughtfully complex psychological narrative with engaging mind-bending elements throughout.";
      return "Accessible psychological complexity with subtle reality-questioning elements that reward careful viewing.";
    }

    if (fromMementoCollection) {
      if (scoreValue >= 90) return "A transcendent masterpiece that redefines memory-based storytelling, requiring multiple viewings for complete comprehension.";
      if (scoreValue >= 80) return "Sophisticated memory manipulation with advanced identity-questioning elements and temporal complexity.";
      if (scoreValue >= 70) return "Thoughtfully complex memory narrative with engaging identity-bending elements throughout.";
      return "Accessible memory complexity with subtle identity-questioning elements that reward careful viewing.";
    }

    if (scoreValue >= 90) return "A transcendent masterpiece that redefines narrative complexity, requiring multiple viewings for complete comprehension.";
    if (scoreValue >= 80) return "Sophisticated cinematic storytelling with advanced non-linear elements and reality-bending concepts.";
    if (scoreValue >= 70) return "Thoughtfully complex narrative structure with engaging mind-bending elements throughout.";
    return "Accessible complexity with subtle mind-bending elements that reward careful viewing.";
  };

  return (
    <motion.div
      className="space-y-12 mt-16"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
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
        <div className={`absolute top-2 left-2 sm:top-4 sm:left-4 w-3 h-3 sm:w-5 sm:h-5 border-t-2 border-l-2 ${
          fromDramaCollection ? 'border-red-400/40' :
          fromInceptionCollection ? 'border-yellow-400/40' :
          fromShutterIslandCollection ? 'border-green-400/40' :
          'border-yellow-400/40'
        }`}></div>
        <div className={`absolute top-2 right-2 sm:top-4 sm:right-4 w-3 h-3 sm:w-5 sm:h-5 border-t-2 border-r-2 ${
          fromDramaCollection ? 'border-red-400/40' :
          fromInceptionCollection ? 'border-yellow-400/40' :
          fromShutterIslandCollection ? 'border-green-400/40' :
          'border-yellow-400/40'
        }`}></div>
        <div className={`absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-3 h-3 sm:w-5 sm:h-5 border-b-2 border-l-2 ${
          fromDramaCollection ? 'border-red-400/40' :
          fromInceptionCollection ? 'border-yellow-400/40' :
          fromShutterIslandCollection ? 'border-green-400/40' :
          'border-yellow-400/40'
        }`}></div>
        <div className={`absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-3 h-3 sm:w-5 sm:h-5 border-b-2 border-r-2 ${
          fromDramaCollection ? 'border-red-400/40' :
          fromInceptionCollection ? 'border-yellow-400/40' :
          fromShutterIslandCollection ? 'border-green-400/40' :
          'border-yellow-400/40'
        }`}></div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4 sm:gap-6">
          <div className="flex items-center gap-4">
            <Star className={`w-6 h-6 ${
              fromDramaCollection ? 'text-red-400' :
              fromInceptionCollection ? 'text-yellow-400' :
              fromShutterIslandCollection ? 'text-green-400' :
              'text-green-400'
            }`} />
            <h3 className="text-2xl font-light text-gray-200 tracking-wide uppercase">
              {getComplexityScoreTitle()}
            </h3>
          </div>

          <div className="flex items-center gap-6 sm:gap-8">
            <div className="text-right">
              <div className="text-3xl sm:text-4xl font-extralight mb-1 tracking-wider text-gray-200">{scoreValue}</div>
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

            <div className="relative w-full bg-gray-700/50 rounded-full h-4 overflow-hidden">
              <motion.div
                className="h-full rounded-full relative"
                style={{ backgroundColor: getComplexityColor(complexityLevel) }}
                initial={{ width: 0 }}
                animate={{ width: `${scoreValue}%` }}
                transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-pulse"></div>
              </motion.div>

              <div className="absolute -top-1 sm:-top-2 left-0 w-full flex justify-between">
                {[25, 50, 75].map(mark => (
                  <div
                    key={mark}
                    className={`w-0.5 sm:w-1 h-4 sm:h-7 rounded-full ${
                      fromDramaCollection ? 'bg-pink-400/30' :
                      fromInceptionCollection ? 'bg-yellow-400/30' :
                      fromShutterIslandCollection ? 'bg-green-400/30' :
                      'bg-yellow-400/30'
                    }`}
                    style={{ left: `${mark}%` }}
                  ></div>
                ))}
              </div>
            </div>

            <p className="text-gray-300/90 text-sm font-light leading-relaxed tracking-wide mt-3">
              {getComplexityDescription()}
            </p>
          </div>
        </div>
      </motion.div>

      {/* 🔥 PASS SENSITIVE SCENES TO THE COMPONENT */}
      <SensitiveContentTimelineSection movie={movie} sensitiveScenes={sensitiveScenes} />
      
      <EnhancedIntensityGraph scenes={safeMovieInfo.scenes} dominantColor={safeMovieInfo.dominantColor} />
      <StrategicDNAHelix dna={safeMovieInfo.dna} dominantColor={safeMovieInfo.dominantColor} />
      <RealCommentsRatingSection movie={movie} />

      {fromSurvivalCollection ? (
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
