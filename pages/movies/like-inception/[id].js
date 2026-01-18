// pages/movies/like-inception/[id].js - FINAL STABLE VERSION ✅
// VISUALS: Yellow/Amber Theme (Mind-Bending), Minimalist Banner
// SCHEMA: Maximalist (Hidden Intensity, DNA, and FAQs for Bots)

import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Play, X, User, Twitter, Hash, Send, Film, Brain } from 'lucide-react'; 
import InternalCollectionsSection from '../../../components/InternalCollectionsSection';
import CinematicBackground from '../../../components/CinematicBackground';
import MovieDetailsSection from '../../../components/MovieDetailsSection';
import TMDBAttribution from '../../../components/TMDBAttribution';

// ✅ IMPORT DATA
import { 
  COMPLETE_MOVIE_DATABASE, 
  COMPLETE_MOVIE_DATA,
  SENSITIVE_TIMELINES 
} from '../../../utils/movieData';

// ✅ INTEGRATED FAQS (4 per film)
const INCEPTION_COLLECTION_FAQS = {
    'Primer': [
        { question: "Is the timeline in Primer solvable?", answer: "Yes, but it is incredibly difficult. Fans have created elaborate flowcharts to track the 9+ timelines created by the recursive use of the box." },
        { question: "What happens to the doubles?", answer: "The film implies that multiple versions of Aaron and Abe exist simultaneously, some locked away or drugged by their future selves." },
        { question: "Why do their ears bleed?", answer: "Ear bleeding is a symptom of physical degradation caused by long-term time travel, suggesting the human body cannot handle repeated causal loops." },
        { question: "How long were they in the box?", answer: "To travel back multiple days, they had to sit in the box for that exact duration (e.g., sit for 24 hours to go back 24 hours), requiring immense patience." }
    ],
    'Synecdoche, New York': [
        { question: "Is Caden dead the whole time?", answer: "Many theories suggest Caden is dying throughout the film, and the play is his brain processing his final moments. The fading sets and time jumps support this." },
        { question: "What does the burning house symbolize?", answer: "It represents Hazel's choice to live authentically even while being consumed by mortality. She buys a house that is on fire and lives in it until she dies." },
        { question: "Why does the set keep growing?", answer: "The set represents Caden's mind. As he tries to capture the full complexity of life, the simulation becomes as large and unmanageable as reality itself." },
        { question: "Who is the cleaning lady?", answer: "The cleaning lady who gives Caden his final instructions represents death or God, guiding him to his final rest and release from his artistic obsession." }
    ],
    'Mulholland Drive': [
        { question: "Who is the cowboy?", answer: "The Cowboy represents Hollywood's gatekeepers—a surreal enforcer of the rules who appears when the dream (Betty's life) starts to deviate from the script." },
        { question: "Is the first half a dream?", answer: "Yes. The consensus is that the first 2/3 of the film is Diane's dream of being 'Betty,' a successful actress, before reality crashes in." },
        { question: "What does the blue box mean?", answer: "The blue box is the portal between the dream world and reality. Opening it signifies the dreamer waking up and the fantasy collapsing." },
        { question: "Who is the homeless figure?", answer: "The figure behind Winkie's diner represents the ugly, terrifying truth of Diane's guilt and failure, hidden behind the shiny facade of her Hollywood dream." }
    ],
    'Coherence': [
        { question: "Which Em survives?", answer: "The Em we follow at the end is not the original Em. She murdered a version of herself in a 'better' timeline to take her place, but the final phone call reveals she wasn't successful." },
        { question: "How much was improvised?", answer: "Almost all of it. The actors were given index cards with motivations for each scene but no script, creating genuine confusion and paranoia." },
        { question: "What do the glow sticks mean?", answer: "The glow sticks (red vs blue) are markers of different realities. The characters realize they have crossed into a different timeline when the glow stick colors don't match." },
        { question: "Is the ending happy?", answer: "No. It is a chilling subversion. Em thinks she has stolen a perfect life, but the existence of two Ems in one timeline means her chaos is just beginning." }
    ],
    'Donnie Darko': [
        { question: "What is the Tangent Universe?", answer: "It is an unstable parallel reality created when the jet engine falls. Donnie is the 'Living Receiver' chosen to return the artifact to the Primary Universe to prevent a black hole collapse." },
        { question: "Does Donnie have to die?", answer: "Yes. To close the loop and save the universe (and his girlfriend Gretchen), Donnie must choose to stay in his bed and be crushed by the engine." },
        { question: "Who is Grandma Death?", answer: "Roberta Sparrow is a former 'Living Receiver' who wrote the book on time travel. She wanders aimlessly, waiting for Donnie to fulfill the prophecy she wrote." },
        { question: "Why is Frank a rabbit?", answer: "Frank is a 'Manipulated Dead'—someone who died in the Tangent Universe. His scary costume is simply what he was wearing when he was shot, appearing to Donnie as a ghost." }
    ],
    'Enemy': [
        { question: "What does the spider mean?", answer: "The spider represents women, entrapment, and the fear of commitment/motherhood in the protagonist's subconscious. The final giant spider is his wife, symbolizing his total entrapment." },
        { question: "Are they the same person?", answer: "Yes. Adam and Anthony are two sides of the same man's personality—the bored husband and the adulterous actor—battling for control." },
        { question: "What is the car crash scene?", answer: "The crash kills the 'Anthony' personality and his mistress, leaving 'Adam' as the surviving persona who tries to return to his wife, only to fall back into old habits." },
        { question: "Why does he sigh at the end?", answer: "The sigh indicates resignation. When he sees the giant spider (his wife), he accepts that he is trapped in his life and must likely cheat/escape again to cope." }
    ],
    'The Fountain': [
        { question: "Are there three time periods?", answer: "Director Darren Aronofsky suggests there is only one reality: the present-day scientist Tom. The Conquistador story is the book his wife wrote, and the space future is his internal meditation on grief." },
        { question: "What does Xibalba symbolize?", answer: "Xibalba is the Maya underworld, a place of death and rebirth. For Tom, reaching Xibalba means accepting that death is not a disease to be cured, but a part of creation." },
        { question: "Did he find the cure?", answer: "No, he failed to save his wife's body. However, he succeeded in saving himself by finally finishing her book and accepting her death, finding spiritual peace." },
        { question: "Why does he eat the tree bark?", answer: "In the Conquistador story, his greed for immortality makes him consume the tree, which turns him into flora. It warns that the selfish desire to live forever destroys humanity." }
    ],
    'Mr. Nobody': [
        { question: "Which life is real?", answer: "None of them and all of them. The entire film takes place in the mind of the 9-year-old boy at the train station, paralyzingly envisioning every possible future before making a choice." },
        { question: "What is the Big Crunch?", answer: "It is the theory that the universe will stop expanding and reverse. In the film, time starts moving backward at the moment of the Big Crunch, allowing Nemo to undo his choices." },
        { question: "Who is the old Nemo?", answer: "Old Nemo is the consciousness of the boy projecting himself to the end of time. He is the observer checking which path leads to the least regret." },
        { question: "What does 'checkmate' mean?", answer: "It refers to a state where any move is a bad move (zugzwang). Nemo realizes the only way to avoid pain is not to choose, which is why he remains at the station." }
    ],
    'Shutter Island': [
        { question: "Is he insane or being gaslit?", answer: "He is Andrew Laeddis, a patient at the asylum. The 'investigation' is an elaborate role-play designed by his doctors to help him break his delusion." },
        { question: "Does he accept reality at the end?", answer: "Yes. His final line ('To live as a monster or to die as a good man?') implies he is sane but chooses lobotomy over living with the guilt of killing his wife." },
        { question: "Who is the 'partner' Chuck?", answer: "Chuck is actually Dr. Sheehan, his primary psychiatrist. He plays along with the delusion to monitor Andrew and keep him safe during the experiment." },
        { question: "What is the Law of 4?", answer: "The 'Law of 4' is the clue that reveals the anagrams in names (Edward Daniels = Andrew Laeddis). It proves his entire persona is a constructed fiction." }
    ],
    'The Usual Suspects': [
        { question: "Is Verbal Kint really Keyser Söze?", answer: "Yes. The limp, the weakness, and the story were all a fabrication. He used details from the bulletin board in the office to construct the narrative." },
        { question: "Did the heist actually happen?", answer: "The core event (the boat massacre) happened, but the details involving the other criminals were likely manipulated or invented by Kint to frame Keaton." },
        { question: "Why did he kill his own family?", answer: "To prove to his enemies that he had no weaknesses. By destroying what he loved, he removed their leverage, establishing his terrifying mythos." },
        { question: "What gave him away?", answer: "The detective realizes too late that the names and places in Kint's story (Redfoot, Kobayashi) were pulled from random objects in the interrogation room." }
    ],
    'Predestination': [
        { question: "Who are the parents?", answer: "Jane and John are the parents of themselves. It is a closed loop where the same person is the mother, father, and child." },
        { question: "Does the loop ever end?", answer: "No. The movie implies a fatalistic universe where the loop is infinite. The main character must become the Fizzle Bomber to ensure his own creation." },
        { question: "Who is the Fizzle Bomber?", answer: "The Fizzle Bomber is the future version of the protagonist (John/Jane). The psychosis from excessive time travel turned him into the villain he spent his life hunting." },
        { question: "What is the snake metaphor?", answer: "The 'Ouroboros' (snake eating its tail) is referenced constantly. It symbolizes the character's life: a self-contained cycle of creation and destruction with no beginning or end." }
    ]
};

const COLORS = {
  accent: '#EAB308', // Yellow/Amber for Inception
  accentLight: '#FDE047', 
  bgPrimary: '#0B0B0C', 
  bgCard: 'rgba(55, 65, 81, 0.3)', 
  textPrimary: '#FFFFFF', 
  textSecondary: '#D1D5DB', 
  textMuted: '#9CA3AF', 
  textDisabled: '#6B7280',
  borderAccent: 'rgba(234, 179, 8, 0.25)', 
  borderLight: 'rgba(107, 114, 128, 0.3)',
};

const MOVIE_YEARS = {
  'Enemy': '2013', 'Primer': '2004', 'The Fountain': '2006',
  'Synecdoche, New York': '2008', 'Mulholland Drive': '2001',
  'Predestination': '2014', 'Coherence': '2013', 'Donnie Darko': '2001',
  'Mr. Nobody': '2009', 'Shutter Island': '2010', 'Memento': '2000',
  'Inception': '2010', 'The Usual Suspects': '1995'
};

const MOVIE_DATA_BY_TITLE = {
  'Shutter Island': { connection: 'Like Inception, Shutter Island masterfully blurs the line between reality and delusion. Both films question what\'s real through unreliable protagonists navigating layered psychological mysteries with stunning plot twists.' },
  'Mr. Nobody': { connection: 'Like Inception\'s nested dreams creating infinite possibilities, Mr. Nobody explores multiple reality layers and parallel timelines. Both films challenge viewers to question which version of events is truly real.' },
  'Primer': { connection: 'Like Inception\'s complex dream architecture requiring multiple viewings, Primer builds intricate temporal layers and rules. Both films reward intellectual engagement with mind-bending scientific concepts.' },
  'Synecdoche, New York': { connection: 'Like Inception\'s reality-within-reality structure, Synecdoche creates nested worlds where characters lose themselves in elaborate artistic constructions. Both films explore identity fragmentation through layered storytelling.' },
  'Mulholland Drive': { connection: 'Like Inception\'s dream logic and surreal sequences, Mulholland Drive operates on mysterious narrative rules where reality shifts unexpectedly. Both films use dreamlike imagery to create haunting experiences.' },
  'Predestination': { connection: 'Like Inception\'s carefully orchestrated heist with multiple moving parts, Predestination reveals information strategically through complex planning. Both films feature protagonists executing elaborate time-sensitive missions.' },
  'Coherence': { connection: 'Like Inception\'s layered reality confusion, Coherence traps characters in parallel possibilities where they question what\'s real. Both films create paranoia through shifting realities and unreliable perceptions.' },
  'Donnie Darko': { connection: 'Like Inception\'s exploration of subconscious influence and manipulation, Donnie Darko blends psychological depth with sci-fi concepts. Both films feature protagonists struggling to understand their role in complex scenarios.' },
  'Enemy': { connection: 'Like Inception\'s identity confusion within dream layers, Enemy explores psychological doubling and doppelgangers. Both films create unsettling atmospheres through ambiguous reality and identity questions.' },
  'The Fountain': { connection: 'Like Inception\'s emotional journey about letting go of the past, The Fountain explores love transcending time and death through three interconnected timelines. Both films combine spectacular visuals with deeply personal themes.' },
  'The Usual Suspects': { connection: 'Like Inception\'s layered deception and misdirection, The Usual Suspects builds an elaborate con through unreliable narration. Both films feature masterful plot twists that recontextualize everything.' },
  'Inception': { connection: 'The definitive mind-bending film that inspired this entire collection. Inception explores reality layers, memory manipulation, and the subconscious mind through stunning visuals and complex storytelling.' },
  'Memento': { connection: 'Like Inception, Memento explores the unreliable nature of memory and perception through innovative storytelling. Both Christopher Nolan films challenge viewers to question what\'s real.' }
};

const getTMDBImage = (path, size = 'w1280') => 
  path ? `https://image.tmdb.org/t/p/${size}${path}` : null;

const getMindBendingInsight = (title) => {
  const data = MOVIE_DATA_BY_TITLE[title];
  return data?.connection || 'A film that challenges perception, reality, and the nature of the mind, just like Inception.';
};

// ✅ OPTIMIZED BANNER
const OptimizedBanner = ({ movie, movieData, trailer, isMobile, richData }) => {
  const [showTrailer, setShowTrailer] = useState(false);
  const [countdown, setCountdown] = useState(4);
  const [hasClosedTrailer, setHasClosedTrailer] = useState(false);
  const timerRef = useRef(null);

  const backdropPath = movieData?.backdrop_path || richData?.backdrop_path || movie?.backdrop_path;
  const posterPath = movieData?.poster_path || richData?.poster_path || movie?.poster_path;
  const bannerImage = backdropPath ? getTMDBImage(backdropPath, 'w1280') : null;
  const posterImage = posterPath ? getTMDBImage(posterPath, 'w500') : null;
  
  const insight = getMindBendingInsight(movie?.Title);
  const mindScore = richData?.mindBendingIndex || 92;

  const mobileHeroCSS = `
  @media (max-width: 767px) {
    .mobile-hero-row { display: flex; flex-direction: row; align-items: flex-start; width: 100vw; max-width: 100vw; gap: 10px; margin: 0; padding: 0 8px; }
    .mobile-hero-poster { width: 38vw; min-width: 106px; border-radius: 12px; overflow: hidden; box-shadow: 0 3px 14px #0007; margin: 0; flex-shrink: 0; }
    .mobile-hero-poster img { width: 100%; height: auto; border-radius: 12px; display: block; }
    .mobile-mind-card { background: linear-gradient(135deg, #1a1600 0%, #0f0f15 100%); border-radius: 12px; box-shadow: 0 2px 12px #0006; margin: 0; flex: 1; border-left: 4px solid #EAB308; display: flex; flex-direction: column; justify-content: flex-start; padding: 10px 10px 10px 12px; min-height: 110px; position: relative; }
    .mobile-mind-row { display: flex; align-items: flex-start; gap: 7px; }
    .mobile-mind-icon { min-width: 24px; min-height: 24px; color: #FDE047; margin-top: 2px; }
    .mobile-mind-title { font-size: 15px; font-weight: bold; color: #FDE047; margin-bottom: 1px; line-height: 1.12; }
    .mobile-mind-desc { font-size: 12.3px; color: #ededed; line-height: 1.36; margin-top: 2px; }
  }`;

  useEffect(() => {
    if (!isMobile && trailer && !showTrailer && !hasClosedTrailer) {
      timerRef.current = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) { clearInterval(timerRef.current); setShowTrailer(true); return 0; }
          return prev - 1;
        });
      }, 1000);
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [isMobile, trailer, showTrailer, hasClosedTrailer]);

  const handleCloseTrailer = () => { setShowTrailer(false); setHasClosedTrailer(true); if (timerRef.current) clearInterval(timerRef.current); };
  const handlePlayClick = () => { setShowTrailer(true); setHasClosedTrailer(false); };

  return (
    <motion.div className="relative w-full overflow-hidden mb-6 sm:mb-8 mx-0 sm:mx-4 lg:mx-6 rounded-none sm:rounded-3xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
      <style>{mobileHeroCSS}</style>
      <div className="relative h-[300px] sm:h-[400px] lg:h-[600px]">
        <AnimatePresence mode="wait">
          {showTrailer && trailer ? (
             <motion.div key="trailer" className="absolute inset-0 rounded-none sm:rounded-3xl overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
               <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full" />
               <button onClick={handleCloseTrailer} className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 sm:p-3 rounded-full backdrop-blur-md shadow-xl transition-all duration-300 hover:scale-110 z-50" style={{ backgroundColor: `${COLORS.bgPrimary}DD`, color: COLORS.textPrimary }}><X className="w-4 h-4 sm:w-5 sm:h-5" /></button>
             </motion.div>
          ) : (
            <motion.div key="image" className="absolute inset-0 rounded-none sm:rounded-3xl overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
              <div className="relative w-full h-full">
                {bannerImage ? <Image src={bannerImage} alt={`${movie?.Title} banner`} fill priority sizes="100vw" quality={90} className="object-cover" /> : <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: COLORS.bgCard }}><Film className="w-16 h-16 sm:w-24 sm:h-24" style={{ color: COLORS.textMuted }} /></div>}
                <div className="absolute inset-0 z-10" style={{ background: `linear-gradient(to bottom, transparent 0%, transparent 60%, ${COLORS.bgPrimary}80 85%, ${COLORS.bgPrimary} 100%)` }} />
              </div>
              {trailer && (
                <motion.div className="absolute inset-0 flex items-center justify-center z-20" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1, duration: 0.8 }}>
                  <motion.button onClick={handlePlayClick} className="p-4 sm:p-6 rounded-full backdrop-blur-lg shadow-2xl transition-all duration-300" style={{ backgroundColor: `${COLORS.bgPrimary}BB`, border: `2px solid ${COLORS.textPrimary}`, color: COLORS.textPrimary }} whileHover={{ scale: 1.15, backgroundColor: `${COLORS.accent}DD`, borderColor: COLORS.accent }} whileTap={{ scale: 0.95 }}><Play className="w-6 h-6 sm:w-8 sm:h-8 ml-1" /></motion.button>
                </motion.div>
              )}
              {!isMobile && trailer && !showTrailer && !hasClosedTrailer && countdown > 0 && (
                <motion.div className="absolute top-6 sm:top-8 right-6 sm:right-8 backdrop-blur-md rounded-full px-3 sm:px-4 py-1.5 sm:py-2 border z-30" style={{ backgroundColor: `${COLORS.bgPrimary}CC`, borderColor: `${COLORS.accent}66`, color: COLORS.accent }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-medium"><div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full animate-pulse" style={{ backgroundColor: COLORS.accent }}></div>Trailer in {countdown}s</div>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {isMobile ? (
        <div className="mobile-hero-row">
          <div className="mobile-hero-poster">{posterImage ? <Image src={posterImage} alt={`${movie?.Title} poster`} width={320} height={480} className="w-full h-auto" priority /> : <div style={{ background: COLORS.bgCard, width: '100%', height: '150px', display: 'flex', alignItems: 'center', justifycontent: 'center' }}><Brain style={{ color: COLORS.textMuted }} /></div>}</div>
          <div className="mobile-mind-card">
            <div className="mobile-mind-row"><Brain className="mobile-mind-icon" /><div><div className="mobile-mind-title">Mind-Bending Score</div></div></div>
            <div className="mobile-mind-desc"><strong>{mindScore}</strong> - {insight.substring(0, 80)}...</div>
          </div>
        </div>
      ) : (
        <div className="relative px-3 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 z-20" style={{ backgroundColor: COLORS.bgPrimary }}>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 items-start">
            <motion.div className="flex-shrink-0 relative w-24 sm:w-48 md:w-56 lg:w-80 mx-auto sm:mx-0" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }}>
              <div className="relative" style={{ aspectRatio: '2/3' }}>
                {posterImage ? <Image src={posterImage} alt={`${movie?.Title} poster`} fill sizes="(max-width: 640px) 96px, (max-width: 768px) 192px, (max-width: 1024px) 224px, 320px" quality={85} className="object-cover rounded-lg sm:rounded-xl shadow-2xl" /> : <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: COLORS.bgCard, borderRadius: '12px' }}><Brain style={{ color: COLORS.textMuted }} /></div>}
              </div>
            </motion.div>
            <motion.div className="flex-1 w-full min-w-0" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.0, duration: 0.8 }}>
              <motion.div className="relative rounded-xl sm:rounded-2xl overflow-hidden p-4 sm:p-6 lg:p-8 backdrop-blur-sm" style={{ background: `linear-gradient(135deg, rgba(234, 179, 8, 0.15) 0%, rgba(15, 15, 20, 0.5) 100%)`, border: `1px solid ${COLORS.borderLight}`, boxShadow: `0 8px 32px rgba(234, 179, 8, 0.2)` }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.8 }}>
                <div className="absolute top-0 left-0 right-0 h-0.5 sm:h-1" style={{ background: `linear-gradient(90deg, transparent, ${COLORS.accent}, transparent)` }} />
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
                  <motion.div className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl flex-shrink-0" style={{ background: `linear-gradient(135deg, ${COLORS.accent}20, ${COLORS.accent}10)`, border: `1px solid ${COLORS.accent}40` }} whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}><Brain className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" style={{ color: COLORS.accent }} /></motion.div>
                  <div className="min-w-0 flex-1"><h2 className="text-sm sm:text-base lg:text-xl xl:text-2xl font-bold leading-tight" style={{ color: COLORS.accent }}>Why This Movie Bends Reality</h2><p className="text-xs sm:text-sm hidden sm:block" style={{ color: COLORS.textMuted }}>Mind-Bending Score: {mindScore}/100</p></div>
                </div>
                <div className="relative pl-4 sm:pl-6 border-l-2" style={{ borderColor: `${COLORS.accent}40` }}>
                  <motion.div className="absolute -left-1.5 sm:-left-2 top-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full" style={{ backgroundColor: COLORS.accent }} animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} />
                  <p className="text-xs sm:text-sm lg:text-base xl:text-lg leading-relaxed font-normal break-words" style={{ color: COLORS.textSecondary, lineHeight: '1.8' }}>{insight}</p>
                </div>
                <motion.div className="mt-4 sm:mt-6 h-0.5 sm:h-1 rounded-full" style={{ background: `linear-gradient(90deg, ${COLORS.accent}60, transparent)`, width: '40%' }} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.5, duration: 0.8 }} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

const SmartBackButton = () => {
    const handleBackClick = () => { if (typeof window !== 'undefined') window.location.href = '/collection/movies-like-inception'; };
    return (
        <motion.button onClick={handleBackClick} className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50 flex items-center gap-2 px-3 sm:px-4 py-2 backdrop-blur-md rounded-lg transition-all duration-300 shadow-xl text-xs sm:text-sm" style={{ backgroundColor: `${COLORS.bgPrimary}F2`, border: `1px solid ${COLORS.borderLight}` }} whileHover={{ scale: 1.02, x: -2 }} whileTap={{ scale: 0.98 }} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} onMouseEnter={(e) => e.currentTarget.style.borderColor = COLORS.borderAccent} onMouseLeave={(e) => e.currentTarget.style.borderColor = COLORS.borderLight}>
            <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: COLORS.accent }} /><span className="font-medium" style={{ color: COLORS.accent }}>Back to Collection</span>
        </motion.button>
    );
};

const AuthorCreditSection = () => (
    <motion.section className="pt-6 sm:pt-8 mt-12 sm:mt-16" style={{ borderTop: `1px solid ${COLORS.borderLight}` }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.0, duration: 0.8 }}>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="flex items-center gap-3"><User className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: COLORS.textDisabled }} /><div><p className="text-xs sm:text-sm" style={{ color: COLORS.textMuted }}>Curated by <span className="font-medium" style={{ color: COLORS.textSecondary }}>Filmiway Editorial Team</span></p><p className="text-xs" style={{ color: COLORS.textDisabled }}>Expert analysis of complex cinema</p></div></div>
            <div className="flex items-center gap-3 sm:gap-4"><span className="text-xs sm:text-sm" style={{ color: COLORS.textDisabled }}>Share:</span><div className="flex gap-2 sm:gap-3">{[Twitter, Hash, Send].map((Icon, i) => (<button key={i} className="p-1.5 sm:p-2 rounded-full transition-colors" style={{ color: COLORS.textDisabled }} onMouseEnter={(e) => { e.currentTarget.style.color = COLORS.textSecondary; e.currentTarget.style.backgroundColor = COLORS.bgCard; }} onMouseLeave={(e) => { e.currentTarget.style.color = COLORS.textDisabled; e.currentTarget.style.backgroundColor = 'transparent'; }}><Icon className="w-3 h-3 sm:w-4 sm:h-4" /></button>))}</div></div>
        </div>
    </motion.section>
);

const SubtleFilmGrain = () => (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.005]"><div className="w-full h-full bg-repeat" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='0.3'/%3E%3C/svg%3E")`, backgroundSize: '60px 60px' }} /></div>
);

const InceptionBreadcrumb = ({ movie }) => (
    <motion.nav className="mb-6 sm:mb-8 px-3 sm:px-4 lg:px-6 pb-3 sm:pb-4" style={{ borderBottom: `1px solid ${COLORS.borderLight}` }} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <div className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm" style={{ color: COLORS.textMuted }}>
            <Link href="/collection/movies-like-inception" className="transition-all duration-300 truncate" style={{ color: COLORS.textMuted }} onMouseEnter={(e) => e.currentTarget.style.color = COLORS.accent} onMouseLeave={(e) => e.currentTarget.style.color = COLORS.textMuted}>Movies Like Inception</Link>
            <ChevronLeft size={14} className="flex-shrink-0" style={{ color: COLORS.textDisabled, transform: 'rotate(180deg)' }} /><span className="font-medium truncate" style={{ color: `${COLORS.accent}B3` }}>{movie.Title}</span>
        </div>
    </motion.nav>
);

// ✅ JSON-LD SCHEMA GENERATOR
const generateMovieSchema = (movie, movieData, currentMovieYear) => {
  const data = COMPLETE_MOVIE_DATA?.[movie.tmdbId] || {};
  const sensitiveData = SENSITIVE_TIMELINES?.[movie.tmdbId] || {};
  const faqs = INCEPTION_COLLECTION_FAQS?.[movie.Title] || [];

  // 1. CALCULATE PEAK (Safe check)
  let peakStats = "Peak info unavailable.";
  if (data?.scenes && data.scenes.length > 0) {
    const peakScene = data.scenes.reduce((prev, current) => 
      (current.intensity > prev.intensity) ? current : prev
    );
    peakStats = `[PEAK MOMENT] Maximum Intensity (${peakScene.intensity}/100) hits at minute ${peakScene.time}: "${peakScene.label}".`;
  }

  // 2. METRICS
  const intensityStats = `
    [FILMIWAY METRICS]
    - Mind-Bending Score: ${data?.mindBendingIndex || 90}/100
    - Narrative Complexity: ${data?.narrativeComplexity || 0}/100
    - Visual Impact: ${data?.visualImpact || 0}/100
  `;

  const dnaStats = data?.dna 
    ? `[GENRE DNA] ${Object.entries(data.dna).map(([genre, val]) => `${genre}: ${val}%`).join(', ')}`
    : 'Sci-Fi Thriller';

  // Content warnings (Safe check)
  const contentWarnings = sensitiveData?.scenes 
    ? `[CONTENT ADVISORY] ${sensitiveData.scenes.map(s => 
        (s.start && s.end) 
          ? `${s.type}: ${s.start}-${s.end} (${s.severity})` 
          : `${s.type} (${s.severity})` 
      ).join(' | ')}.`
    : 'No specific content warnings listed.';
    
  const faqText = faqs.length > 0
    ? `[COMMON QUESTIONS] ${faqs.map(f => `Q: ${f.question} A: ${f.answer}`).join(' | ')}`
    : '';

  // 3. COMPILE FULL DESCRIPTION
  const fullDescription = `
    ${data?.synopsis || movie.description || "A mind-bending cinematic experience."}
    
    --- DETAILED ANALYSIS ---
    ${peakStats} 
    ${intensityStats}
    ${dnaStats}
    ${contentWarnings}
    ${faqText}
    
    Ranking: #${movie.rank || 'N/A'} in Mind-Bending Movies.
    Production: Budget ${data?.budget || 'N/A'}, Box Office ${data?.boxOffice || 'N/A'}.
  `.replace(/\s+/g, ' ').trim();

  const movieSchema = {
    "@context": "https://schema.org",
    "@type": "Movie",
    "name": movie.Title,
    "description": fullDescription, 
    "datePublished": currentMovieYear,
    "image": movieData?.poster_path ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}` : undefined,
    "director": {
      "@type": "Person",
      "name": data?.director || "Unknown"
    },
    "actor": data?.cast?.map(actor => ({
      "@type": "Person",
      "name": actor
    })) || [],
    
    "review": {
      "@type": "Review",
      "author": {
        "@type": "Organization",
        "name": "Filmiway"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": data?.rating || 8.0, 
        "bestRating": "10",
        "worstRating": "1"
      }
    },

    "genre": data?.dna ? Object.keys(data.dna) : ["Sci-Fi", "Thriller"],
    "keywords": "Inception, Mind-Bending, Dream Logic, Reality, " + (data?.themes ? data.themes.join(", ") : ""),
    "url": `https://filmiway.com/movies/like-inception/${movie.imdbID}`,
    "author": {
      "@type": "Organization",
      "name": "Filmiway",
      "url": "https://filmiway.com"
    }
  };

  const faqSchema = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  } : null;

  return { movieSchema, faqSchema };
};

const InceptionMoviePage = ({ movie, tmdbData }) => {
    // Note: Inception collection uses the generic movieData file.
    const movieInfo = COMPLETE_MOVIE_DATA?.[movie.tmdbId] || {};
    const [movieData, setMovieData] = useState(tmdbData); // Initialize with SS data
    const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
        sessionStorage.setItem('fromCollection', 'movies-like-inception');
        sessionStorage.setItem('fromCollectionName', 'Movies Like Inception');
    }
  }, []);

    const currentMovieYear = MOVIE_YEARS[movie.Title] || movie.year || 'Unknown';
    const trailer = movieData?.videos?.results?.find(video => video.type === 'Trailer' && video.site === 'YouTube');

    // ✅ SEO FIX: Join title into a single string variable to prevent hydration markers ()
    const cleanSEOTitle = `${movie.Title} (${currentMovieYear}) - Movies Like Inception | Filmiway`;
    const cleanSEODesc = `${movie.Title} (${currentMovieYear}) - A mind-bending masterpiece like Inception. Analysis, ratings & where to stream.`;

    // Generate schema
    const { movieSchema, faqSchema } = generateMovieSchema(movie, movieData, currentMovieYear);

    return (
        <div className="min-h-screen text-white relative overflow-hidden" style={{ backgroundColor: COLORS.bgPrimary }}>
            <Head>
                {/* 🔥 HYDRATION BUG FIXED */}
                <title>{cleanSEOTitle}</title>
                <meta name="description" content={cleanSEODesc} />
                <link rel="canonical" href={`https://filmiway.com/movies/like-inception/${movie.imdbID}`} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="English" />

                {/* Meta Tags */}
                <meta property="og:title" content={cleanSEOTitle} />
                <meta property="og:description" content="A mind-bending journey into perception and reality." />
                <meta property="og:type" content="video.movie" />
                <meta property="og:image" content={movieData?.poster_path ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}` : ''} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={cleanSEOTitle} />
                <meta name="twitter:description" content="A mind-bending journey into perception and reality." />
                <meta name="twitter:image" content={movieData?.poster_path ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}` : ''} />

                {/* ✅ SCHEMA INJECTION */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(movieSchema) }}
                />
                {faqSchema && (
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                    />
                )}
            </Head>

            <SubtleFilmGrain />
            <div className="absolute inset-0"><CinematicBackground /></div>
            <SmartBackButton />
            
            <div className="relative z-10 pt-10 sm:pt-12 lg:pt-16">
                
                {/* ✅ HIDDEN H1 FOR SEO PARITY */}
                <h1 className="sr-only">{cleanSEOTitle}</h1>

                <InceptionBreadcrumb movie={movie} />
                <div className="container mx-auto px-0 pb-16 sm:pb-24 lg:pb-32 max-w-7xl">
                    <OptimizedBanner movie={movie} movieData={movieData} richData={movieInfo} trailer={trailer} isMobile={isMobile} />
                    
                    <motion.div 
    id="watch" 
    initial={{ opacity: 0, y: 20 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.5 }} // Faster, no massive delay
    className="space-y-8 sm:space-y-12 px-3 sm:px-4 lg:px-6"
>
                        <MovieDetailsSection movie={movie} fromInceptionCollection={true} />
                    </motion.div>
                    
                    <div className="px-3 sm:px-4 lg:px-6">
                        <InternalCollectionsSection currentSlug="movies-like-inception" />
                        <TMDBAttribution />
                        <AuthorCreditSection />
                    </div>
                </div>
            </div>
        </div>
    );
};

export async function getStaticPaths() {
    const paths = COMPLETE_MOVIE_DATABASE.map((movie) => ({ params: { id: movie.imdbID } }));
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    try {
        const movie = COMPLETE_MOVIE_DATABASE.find((m) => m.imdbID === params.id);
        if (!movie) return { notFound: true };

        const tmdbResponse = await fetch(
            `https://api.themoviedb.org/3/movie/${movie.tmdbId}?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed&append_to_response=videos`
        );
        const tmdbData = tmdbResponse.ok ? await tmdbResponse.json() : null;

        return {
            props: { movie, tmdbData },
        };
    } catch (error) {
        console.error('Error fetching TMDB data:', error);
        return {
            props: {
                movie: COMPLETE_MOVIE_DATABASE.find((m) => m.imdbID === params.id),
                tmdbData: null,
            },
        };
    }
}

export default InceptionMoviePage;