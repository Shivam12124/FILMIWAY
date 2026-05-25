import React from 'react';
import { BarChart3, HelpCircle } from 'lucide-react';

// 🎨 OPTIMIZED STANDARDIZED GENRE COLORS - EVERY GENRE IS UNIQUE
const STANDARDIZED_COLORS = {
  // High-Energy & Action
  "Action": "#F97316",      // Vibrant Orange (Explosions, Energy)
  "Adventure": "#10B981",    // Emerald Green (Jungle, Exploration)
  "Thriller": "#0D9488",    // Dark Teal (Suspense, Tension)

  // Imaginative & Creative
  "Sci-Fi": "#06B6D4",      // Cyan (Technology, Aliens)
  "Fantasy": "#A855F7",     // Amethyst Purple (Magic, Other-worldly)
  "Animation": "#38BDF8",    // Sky Blue (Creativity, Youth)
  "Musical": "#14B8A6",     // Bright Teal (Vibrancy, Rhythm)

  // Emotional & Human-Centric
  "Drama": "#6366F1",        // Indigo (Emotional Depth)
  "Romance": "#F43F5E",      // Rose Red (Passion, Love)
  "Family": "#84CC16",       // Lime Green (Wholesome, Nature)
  "Comedy": "#FACC15",       // Sunny Yellow (Laughter, Fun)
  "Music": "#EC4899",        // Hot Pink (Artistic, Pop)

  // Dark & Intense
  "Horror": "#BE123C",       // Crimson Red (Blood, Danger)
  "Mystery": "#1E3A8A",      // Deep Navy Blue (Unknown, Night)
  "Crime": "#475569",        // Slate Gray (Concrete, Grim)
  "Neo-Noir": "#18181B",     // Near Black (Shadows, Morality)
  "Psychological": "#581C87",// Dark Violet (Mind, Corruption)

  // Period & Realism
  "History": "#A16207",      // Golden Brown (Archives, Sepia)
  "War": "#57534E",          // Olive Drab (Military, Somber)
  "Western": "#B45309",      // Rust Brown (Desert, Grit)
};

const StrategicDNAHelix = React.memo(({ dna, dominantColor, className = "" }) => {
    if (!dna) return null;

    const total = Object.values(dna).reduce((sum, val) => sum + val, 0);
    
    const genreData = Object.entries(dna).map(([genre, percentage]) => ({ 
        genre, 
        percentage, 
        color: STANDARDIZED_COLORS[genre] || dominantColor || '#ca8a04',
        normalizedPercentage: (percentage / total) * 100 
    }));

    // 🔥 DYNAMIC SINGLE-HELIX ENGINE: Perfectly maps genres to 26 exact rungs
    const TOTAL_RUNGS = 26;
    let accumulatedPercentage = 0;
    const genreThresholds = genreData.map(g => {
        accumulatedPercentage += g.normalizedPercentage;
        return { ...g, threshold: accumulatedPercentage };
    });

    const rungs = Array.from({ length: TOTAL_RUNGS }).map((_, i) => {
        const progress = ((i + 0.5) / TOTAL_RUNGS) * 100;
        const genre = genreThresholds.find(g => progress <= g.threshold) || genreThresholds[genreThresholds.length - 1];
        return {
            index: i,
            color: genre.color,
            genreName: genre.genre,
            percentage: genre.percentage
        };
    });

    return (
        <div className={`w-full bg-[#0a0a0c] rounded-2xl border border-white/10 shadow-xl p-5 sm:p-8 mb-8 sm:mb-12 ${className}`}>
            <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                <span className="text-2xl">🧬</span>
                <h2 className="text-xl sm:text-2xl font-light text-gray-200 tracking-wide">Cinematic DNA</h2>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
                <div className="relative w-24 h-64 sm:w-32 sm:h-80 lg:w-36 lg:h-96 flex-shrink-0 bg-gradient-to-b from-gray-800/40 to-gray-900/60 rounded-xl p-3 sm:p-4 lg:p-6 border border-gray-700/50 shadow-2xl backdrop-blur-sm">
                    <div className="absolute top-2 left-2 sm:top-3 sm:left-3 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-l-2 border-yellow-400/30"></div>
                    <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-r-2 border-yellow-400/30"></div>
                    <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-l-2 border-yellow-400/30"></div>
                    <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-r-2 border-yellow-400/30"></div>
                    <svg viewBox="0 0 120 320" className="w-full h-full relative z-10">
                        <defs>
                            <linearGradient id="dynamicHelix" x1="0%" y1="0%" x2="0%" y2="100%">
                                {genreData.map((genreInfo, index, arr) => {
                                    const prevOffset = arr.slice(0, index).reduce((acc, curr) => acc + curr.normalizedPercentage, 0);
                                    const currentOffset = prevOffset + genreInfo.normalizedPercentage;
                                    return (
                                        <React.Fragment key={`${genreInfo.genre}-gradient`}>
                                            <stop offset={`${prevOffset}%`} stopColor={genreInfo.color} stopOpacity="0.95" />
                                            <stop offset={`${currentOffset}%`} stopColor={genreInfo.color} stopOpacity="0.95" />
                                        </React.Fragment>
                                    );
                                })}
                            </linearGradient>
                            <filter id="strategicGlow">
                                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>
                        <path 
                            d="M 60 30 Q 30 80, 60 130 Q 90 180, 60 230 Q 30 280, 60 320" 
                            stroke="url(#dynamicHelix)" 
                            strokeWidth="2.5" 
                            strokeDasharray="4 4"
                            fill="none" 
                            filter="url(#strategicGlow)" 
                        />
                        <path 
                            d="M 60 30 Q 90 80, 60 130 Q 30 180, 60 230 Q 90 280, 60 320" 
                            stroke="url(#dynamicHelix)" 
                            strokeWidth="2.5" 
                            strokeDasharray="4 4"
                            fill="none" 
                            filter="url(#strategicGlow)" 
                        />
                        {rungs.map((rung, i) => {
                            const y = 40 + i * 10;
                            
                            // 🔥 MATHEMATICAL FIX: Perfectly align rungs with the Bezier paths to prevent the "2 DNA" illusion
                            let t, offset, x1, x2;
                            if (y <= 130) {
                                t = (y - 30) / 100;
                                offset = 60 * t * (1 - t);
                                x1 = 60 - offset;
                                x2 = 60 + offset;
                            } else if (y <= 230) {
                                t = (y - 130) / 100;
                                offset = 60 * t * (1 - t);
                                x1 = 60 + offset;
                                x2 = 60 - offset;
                            } else {
                                t = (y - 230) / 100;
                                offset = 60 * t * (1 - t);
                                x1 = 60 - offset;
                                x2 = 60 + offset;
                            }

                            return (
                                <g key={`rung-${rung.index}`}>
                                    <line 
                                        x1={x1} y1={y} x2={x2} y2={y}
                                        stroke={rung.color} 
                                        strokeWidth="2" 
                                        filter="url(#strategicGlow)" 
                                        opacity="0.8"
                                    />
                                    <circle cx={x1} cy={y} r="2.5" fill={rung.color} filter="url(#strategicGlow)" className="cursor-help" opacity="0.95">
                                        <title>{`${rung.genreName}: ${rung.percentage}%`}</title>
                                    </circle>
                                    <circle cx={x2} cy={y} r="2.5" fill={rung.color} filter="url(#strategicGlow)" className="cursor-help" opacity="0.95">
                                        <title>{`${rung.genreName}: ${rung.percentage}%`}</title>
                                    </circle>
                                </g>
                            );
                        })}
                    </svg>
                </div>
                <div className="flex-1 space-y-6 sm:space-y-8 w-full">
                    <div className="space-y-4 sm:space-y-6">
                        {genreData.map(({ genre, percentage, color }, index) => (
                        <div 
                                key={genre} 
                                className="group flex items-center justify-between p-3 sm:p-5 hover:bg-gray-800/30 rounded-xl transition-all duration-400 border border-transparent hover:border-gray-700/40"
                            >
                                <div className="flex items-center gap-4 sm:gap-6">
                                <div 
                                        className="relative w-4 h-4 sm:w-5 sm:h-5 rounded-full shadow-lg border border-gray-600/30" 
                                    style={{ backgroundColor: color, boxShadow: `0 0 15px ${color}40` }}
                                    >
                                </div>
                                    <span className="text-gray-200 font-light group-hover:text-gray-100 transition-colors text-base sm:text-lg tracking-wide">
                                        {genre}
                                    </span>
                                </div>
                            <span className="text-gray-300/90 font-light text-lg sm:text-xl tracking-wider" style={{ color }}>
                                    {percentage}%
                            </span>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
});

StrategicDNAHelix.displayName = 'StrategicDNAHelix';

export default StrategicDNAHelix;