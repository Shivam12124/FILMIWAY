// components/BestActionMoviesSEOFAQSection.js - MATCHING HIGH OCTANE ACTION DESIGN ✅
import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react'; // 🔥 Swapped to Zap for the high-octane action theme

// 🔥 IMPORT THE NEW DYNAMIC FAQ GENERATOR
import { COMPLETE_MOVIE_DATA as BEST_ACTION_MOVIE_DATA, getVisibleMovieFAQs } from '../utils/bestActionMoviesData';

const BestActionMoviesSEOFAQSection = ({ movie }) => {
    const movieInfo = BEST_ACTION_MOVIE_DATA[movie?.tmdbId];
    
    // Grab runtime
    const currentRuntime = movie?.Runtime || movie?.runtime || "Official";
    
    // Generate FAQs
    const faqsFromData = getVisibleMovieFAQs(movie?.Title, movie?.tmdbId, currentRuntime);

    // Safety check
    if (!faqsFromData || faqsFromData.length === 0) {
        console.log('⚠️ No Action Movie FAQs found for:', movie?.Title);
        return null;
    }
    
    return (
        <motion.section 
            className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-slate-800/80"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
        >
            <h2 className="text-xl sm:text-2xl font-light text-red-500 mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
                <Zap size={20} className="sm:w-6 sm:h-6 text-red-600" />
                <span className="hidden sm:inline">Frequently Asked Questions About {movie?.Title}</span>
                <span className="sm:hidden">FAQ About {movie?.Title}</span>
            </h2>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                Common questions about {movie?.Title}, its adrenaline-pumping action scenes, and parental guidance/trigger warnings.
            </p>
            <div className="space-y-4 sm:space-y-6">
                {faqsFromData.map((faq, index) => (
                    <motion.div 
                        key={index}
                        className="bg-slate-900/40 rounded-xl p-4 sm:p-6 border border-slate-800 hover:bg-slate-900/60 hover:border-red-500/30 transition-all duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <h3 className="text-base sm:text-lg font-medium text-red-400 mb-2 sm:mb-3">{faq.question}</h3>
                        
                        {/* 🔥 FIX: Added "whitespace-pre-line" to properly render line breaks instead of printing HTML tags! */}
                        <p className="text-gray-300 leading-relaxed text-sm sm:text-base whitespace-pre-line">
                            {faq.answer}
                        </p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default BestActionMoviesSEOFAQSection;