// components/SurvivalSEOFAQSection.js - MATCHING INCEPTION DESIGN ✅
import React from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';
import { COMPLETE_MOVIE_DATA as SURVIVAL_MOVIE_DATA, SURVIVAL_MOVIE_FAQS } from '../utils/survivalMovieData';
import { SENSITIVE_TIMELINES } from '../utils/survivalMovieData';

const SurvivalSEOFAQSection = ({ movie }) => {
    const movieInfo = SURVIVAL_MOVIE_DATA[movie.tmdbId];
    const sensitiveData = SENSITIVE_TIMELINES[movie.tmdbId];
    
    // 🔥 Get FAQs from SURVIVAL_MOVIE_FAQS data
    const faqsFromData = movie?.Title && SURVIVAL_MOVIE_FAQS?.[movie.Title] 
        ? SURVIVAL_MOVIE_FAQS[movie.Title] 
        : [];

    // 🔥 Safety check - return null if no FAQs
    if (!faqsFromData || faqsFromData.length === 0) {
        console.log('⚠️ No survival FAQs found for:', movie?.Title);
        return null;
    }
    
    return (
        <motion.section 
            className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-700/50"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
        >
            <h2 className="text-xl sm:text-2xl font-light text-yellow-300 mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
                <Info size={20} className="sm:w-6 sm:h-6" />
                <span className="hidden sm:inline">Frequently Asked Questions About {movie.Title}</span>
                <span className="sm:hidden">FAQ About {movie.Title}</span>
            </h2>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                Common questions about {movie.Title} and this extraordinary survival story.
            </p>
            <div className="space-y-4 sm:space-y-6">
                {faqsFromData.map((faq, index) => (
                    <motion.div 
                        key={index}
                        className="bg-gray-800/30 rounded-xl p-4 sm:p-6 border border-gray-700/50"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <h3 className="text-base sm:text-lg font-medium text-yellow-200 mb-2 sm:mb-3">{faq.question}</h3>
                        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default SurvivalSEOFAQSection;
