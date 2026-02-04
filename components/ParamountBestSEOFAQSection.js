// components/ParamountBestSEOFAQSection.js - PARAMOUNT+ BEST MOVIES THEME (GOLD) ✅
import React from 'react';
import { motion } from 'framer-motion';
import { Info, Award } from 'lucide-react';
import { PARAMOUNT_BEST_MOVIE_FAQS } from '../utils/paramountBestMoviesData';

const ParamountBestSEOFAQSection = ({ movie }) => {
    // 🔥 Get FAQs from PARAMOUNT_BEST_MOVIE_FAQS data
    const faqsFromData = movie?.Title && PARAMOUNT_BEST_MOVIE_FAQS?.[movie.Title] 
        ? PARAMOUNT_BEST_MOVIE_FAQS[movie.Title] 
        : [];

    // 🔥 Safety check - return null if no FAQs
    if (!faqsFromData || faqsFromData.length === 0) {
        console.log('⚠️ No Paramount+ Best FAQs found for:', movie?.Title);
        return null;
    }
    
    return (
        <motion.section 
            className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-700/50"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
        >
            <h2 className="text-xl sm:text-2xl font-light text-amber-400 mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
                <Award size={20} className="sm:w-6 sm:h-6 text-amber-500" />
                <span className="hidden sm:inline">Frequently Asked Questions About {movie.Title}</span>
                <span className="sm:hidden">FAQ About {movie.Title}</span>
            </h2>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                Dive deeper into the legacy, production secrets, and cinematic impact of {movie.Title}.
            </p>
            <div className="space-y-4 sm:space-y-6">
                {faqsFromData.map((faq, index) => (
                    <motion.div 
                        key={index}
                        className="bg-gray-800/30 rounded-xl p-4 sm:p-6 border border-gray-700/50 hover:border-amber-500/30 transition-all duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <h3 className="text-base sm:text-lg font-medium text-amber-200 mb-2 sm:mb-3">
                            {faq.question}
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-sm sm:text-base group-hover:text-gray-300 transition-colors">
                            {faq.answer}
                        </p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default ParamountBestSEOFAQSection;