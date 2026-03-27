// components/WarFilmsSEOFAQSection.js - MATCHING INCEPTION DESIGN ✅
import React from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';
// 🔥 IMPORT THE NEW DYNAMIC FAQ GENERATOR
import { COMPLETE_MOVIE_DATA as WAR_FILMS_MOVIE_DATA, getVisibleMovieFAQs } from '../utils/warFilmsMovieData';

const WarFilmsSEOFAQSection = ({ movie }) => {
    // Handle potential casing differences from the database
    const movieTitle = movie?.Title || movie?.title;
    const movieInfo = WAR_FILMS_MOVIE_DATA[movie?.tmdbId];
    
    // Grab runtime
    const currentRuntime = movie?.Runtime || movie?.runtime || "Official";
    
    // Generate FAQs
    const faqsFromData = getVisibleMovieFAQs(movieTitle, movie?.tmdbId, currentRuntime);

    // Safety check
    if (!faqsFromData || faqsFromData.length === 0) {
        console.log('⚠️ No War Films FAQs found for:', movieTitle);
        return null;
    }
    
    return (
        <motion.section 
            className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-700/50"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
        >
            <h2 className="text-xl sm:text-2xl font-light text-red-400 mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
                <Info size={20} className="sm:w-6 sm:h-6" />
                <span className="hidden sm:inline">Frequently Asked Questions About {movieTitle}</span>
                <span className="sm:hidden">FAQ About {movieTitle}</span>
            </h2>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                Common questions about {movieTitle} and its unflinching portrayal of conflict, morality, and human resilience.
            </p>
            <div className="space-y-4 sm:space-y-6">
                {faqsFromData.map((faq, index) => (
                    <motion.div 
                        key={index}
                        className="bg-gray-800/30 rounded-xl p-4 sm:p-6 border border-gray-700/50 hover:bg-gray-800/50 transition-colors duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <h3 className="text-base sm:text-lg font-medium text-red-300 mb-2 sm:mb-3">{faq.question}</h3>
                        
                        {/* 🔥 FIX 2: Added "whitespace-pre-line" to properly render line breaks instead of printing HTML tags! */}
                        <p className="text-gray-300 leading-relaxed text-sm sm:text-base whitespace-pre-line">
                            {faq.answer}
                        </p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default WarFilmsSEOFAQSection;