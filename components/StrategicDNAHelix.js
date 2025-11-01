// components/StrategicDNAHelix.js - WITH TOOLTIP ✅
import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, HelpCircle } from 'lucide-react';

// 🎨 OPTIMIZED STANDARDIZED GENRE COLORS - EVERY GENRE IS UNIQUE
const STANDARDIZED_COLORS = {
  "Drama": "#dc2626",
  "Thriller": "#0f172a",
  "Action": "#f59e0b",
  "Adventure": "#059669",
  "Sci-Fi": "#3b82f6",
  "Romance": "#ec4899",
  "Comedy": "#eab308",
  "Fantasy": "#8b5cf6",
  "Neo-Noir": "#0f172a",
  "Mystery": "#6b21a8",
  "Horror": "#991b1b",
  "Crime": "#1d1fb9ff",
  "Psychological": "#9333ea",
  "Memory": "#a78bfa",
  "Dreams": "#60a5fa"
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

    return (
        <motion.div 
            className={`mb-8 sm:mb-12 ${className}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
                <div className="relative w-24 h-64 sm:w-32 sm:h-80 lg:w-36 lg:h-96 flex-shrink-0 bg-gradient-to-b from-gray-800/40 to-gray-900/60 rounded-xl p-3 sm:p-4 lg:p-6 border border-gray-700/50 shadow-2xl backdrop-blur-sm">
                    <div className="absolute top-2 left-2 sm:top-3 sm:left-3 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-l-2 border-yellow-400/30"></div>
                    <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-r-2 border-yellow-400/30"></div>
                    <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-l-2 border-yellow-400/30"></div>
                    <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-r-2 border-yellow-400/30"></div>
                    <svg viewBox="0 0 120 320" className="w-full h-full relative z-10">
                        <defs>
                            <linearGradient id="strategicHelix" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#ca8a04" stopOpacity="0.9" />
                                <stop offset="25%" stopColor="#a16207" stopOpacity="0.8" />
                                <stop offset="50%" stopColor="#854d0e" stopOpacity="0.9" />
                                <stop offset="75%" stopColor="#a16207" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="#ca8a04" stopOpacity="0.7" />
                            </linearGradient>
                            <filter id="strategicGlow">
                                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>
                        <motion.path 
                            d="M 60 30 Q 30 80, 60 130 Q 90 180, 60 230 Q 30 280, 60 320" 
                            stroke="url(#strategicHelix)" 
                            strokeWidth="2" 
                            fill="none" 
                            filter="url(#strategicGlow)" 
                            initial={{ pathLength: 0 }} 
                            animate={{ pathLength: 1 }} 
                            transition={{ duration: 2.5, ease: "easeInOut" }} 
                        />
                        <motion.path 
                            d="M 60 30 Q 90 80, 60 130 Q 30 180, 60 230 Q 90 280, 60 320" 
                            stroke="url(#strategicHelix)" 
                            strokeWidth="2" 
                            fill="none" 
                            filter="url(#strategicGlow)" 
                            initial={{ pathLength: 0 }} 
                            animate={{ pathLength: 1 }} 
                            transition={{ duration: 2.5, delay: 0.4, ease: "easeInOut" }} 
                        />
                        {genreData.map((genreInfo, index) => {
                            const count = Math.round((genreInfo.percentage / total) * 15);
                            return Array(count).fill().map((_, i) => {
                                const y = 40 + (index * count + i) * 12;
                                if (y > 300) return null;
                                const angle = (index * count + i) * 20;
                                const x1 = 60 + Math.cos(angle * Math.PI / 180) * 20;
                                const x2 = 60 - Math.cos(angle * Math.PI / 180) * 20;
                                return (
                                    <g key={`${genreInfo.genre}-${i}`}>
                                        <motion.line 
                                            x1={x1} y1={y} x2={x2} y2={y}
                                            stroke={genreInfo.color} 
                                            strokeWidth="2" 
                                            filter="url(#strategicGlow)" 
                                            initial={{ opacity: 0, scaleX: 0 }} 
                                            animate={{ opacity: 0.9, scaleX: 1 }} 
                                            transition={{ delay: (index * count + i) * 0.03 + 1, duration: 0.4 }} 
                                        />
                                        <motion.g
                                            initial={{ scale: 0, rotate: -90 }} 
                                            animate={{ scale: 1, rotate: 0 }} 
                                            transition={{ 
                                                delay: (index * count + i) * 0.03 + 1.2,
                                                duration: 0.6, 
                                                type: "spring", 
                                                stiffness: 300 
                                            }}
                                        >
                                            <circle 
                                                cx={x1} cy={y} r="2.5" 
                                                fill={genreInfo.color} 
                                                filter="url(#strategicGlow)" 
                                                className="cursor-help" 
                                                opacity="0.95"
                                            >
                                                <title>{genreInfo.genre}: {genreInfo.percentage}%</title>
                                            </circle>
                                            <circle 
                                                cx={x2} cy={y} r="2.5" 
                                                fill={genreInfo.color} 
                                                filter="url(#strategicGlow)" 
                                                className="cursor-help" 
                                                opacity="0.95"
                                            >
                                                <title>{genreInfo.genre}: {genreInfo.percentage}%</title>
                                            </circle>
                                        </motion.g>
                                    </g>
                                );
                            });
                        })}
                    </svg>
                </div>
                <div className="flex-1 space-y-6 sm:space-y-8 w-full">
                    <motion.div 
                        className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0" 
                        initial={{ opacity: 0, x: -40 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        transition={{ delay: 0.8 }}
                    >
                        <h4 className="text-xl sm:text-2xl font-light text-gray-100 flex items-center gap-3 sm:gap-4 tracking-wide">
                            <motion.div 
                                animate={{ rotate: 360 }} 
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }} 
                                className="text-2xl sm:text-3xl"
                            >
                                🧬
                            </motion.div>
                            CINEMATIC DNA
                            
                            {/* 💡 TOOLTIP */}
                            <motion.div
                                className="group relative cursor-help inline-block"
                                whileHover={{ scale: 1.1 }}
                            >
                                <HelpCircle className="w-4 h-4 text-gray-400" />
                                
                                {/* Tooltip popup */}
                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-3 rounded-lg border backdrop-blur-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap z-50 shadow-xl"
                                     style={{ 
                                       backgroundColor: 'rgba(31, 41, 55, 0.95)',
                                       borderColor: 'rgba(234, 179, 8, 0.3)',
                                       minWidth: '280px'
                                     }}>
                                    <div className="text-yellow-400 font-medium mb-1 text-sm">
                                        Genre DNA Breakdown
                                    </div>
                                    <div className="text-gray-300 text-xs leading-relaxed">
                                        Visual representation of the movie's<br/>
                                        genre composition. Larger segments<br/>
                                        indicate dominant genre elements.
                                    </div>
                                    {/* Arrow pointing down */}
                                    <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                                        <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent" 
                                             style={{ borderTopColor: 'rgba(234, 179, 8, 0.3)' }}></div>
                                    </div>
                                </div>
                            </motion.div>
                        </h4>
                        <div className="text-xs text-gray-400 flex items-center gap-2 sm:gap-3 tracking-wider uppercase">
                            <BarChart3 size={14} className="sm:w-4 sm:h-4" />
                            Genre Analysis
                        </div>
                    </motion.div>
                    <div className="space-y-4 sm:space-y-6">
                        {genreData.map(({ genre, percentage, color }, index) => (
                            <motion.div 
                                key={genre} 
                                initial={{ opacity: 0, x: -50 }} 
                                animate={{ opacity: 1, x: 0 }} 
                                transition={{ delay: 1.4 + index * 0.15, duration: 0.6 }} 
                                className="group flex items-center justify-between p-3 sm:p-5 hover:bg-gray-800/30 rounded-xl transition-all duration-400 border border-transparent hover:border-gray-700/40"
                            >
                                <div className="flex items-center gap-4 sm:gap-6">
                                    <motion.div 
                                        className="relative w-4 h-4 sm:w-5 sm:h-5 rounded-full shadow-lg border border-gray-600/30" 
                                        style={{ backgroundColor: color }} 
                                        whileHover={{ scale: 1.4 }} 
                                        animate={{ 
                                            boxShadow: [
                                                `0 0 0px ${color}`, 
                                                `0 0 25px ${color}30`, 
                                                `0 0 0px ${color}`
                                            ] 
                                        }} 
                                        transition={{ 
                                            boxShadow: { duration: 4, repeat: Infinity }, 
                                            scale: { duration: 0.3 } 
                                        }}
                                    >
                                        <motion.div 
                                            className="absolute inset-0 rounded-full" 
                                            style={{ backgroundColor: color }} 
                                            animate={{ scale: [1, 2, 1], opacity: [0, 0.5, 0] }} 
                                            transition={{ duration: 3, repeat: Infinity, delay: index * 0.6 }} 
                                        />
                                    </motion.div>
                                    <span className="text-gray-200 font-light group-hover:text-gray-100 transition-colors text-base sm:text-lg tracking-wide">
                                        {genre}
                                    </span>
                                </div>
                                <motion.span 
                                    className="text-gray-300/90 font-light text-lg sm:text-xl tracking-wider" 
                                    animate={{ 
                                        color: ['rgba(203, 213, 225, 0.9)', color, 'rgba(203, 213, 225, 0.9)'], 
                                        scale: [1, 1.05, 1] 
                                    }} 
                                    transition={{ duration: 5, repeat: Infinity, delay: index * 1 }}
                                >
                                    {percentage}%
                                </motion.span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
});

StrategicDNAHelix.displayName = 'StrategicDNAHelix';

export default StrategicDNAHelix;
