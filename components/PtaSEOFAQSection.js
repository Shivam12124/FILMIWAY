// components/PtaSEOFAQSection.js - MATCHING AUTEUR THEME ✅
import React from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react'; // 📸 Swapped to Camera for the Director/Auteur theme

// 🔥 IMPORT THE NEW DYNAMIC FAQ GENERATOR
import { COMPLETE_MOVIE_DATA as PTA_MOVIE_DATA, getVisibleMovieFAQs } from '../utils/ptaMoviesData';

const PtaSEOFAQSection = ({ movie }) => {
    const movieInfo = PTA_MOVIE_DATA[movie?.tmdbId];
    
    // Grab runtime
    const currentRuntime = movie?.Runtime || movie?.runtime || "Official";
    
    // Generate FAQs
    const faqsFromData = getVisibleMovieFAQs(movie?.Title, movie?.tmdbId, currentRuntime);

    // Safety check
    if (!faqsFromData || faqsFromData.length === 0) {
        console.log('⚠️ No PTA FAQs found for:', movie?.Title);
        return null;
    }
    
    return (
        <motion.section 
            className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-700/50"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
        >
            <h2 className="text-xl sm:text-2xl font-light text-stone-400 mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
                <Camera size={20} className="sm:w-6 sm:h-6" />
                <span className="hidden sm:inline">Frequently Asked Questions About {movie?.Title}</span>
                <span className="sm:hidden">FAQ About {movie?.Title}</span>
            </h2>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                Common questions about {movie?.Title} and its exploration of Paul Thomas Anderson's auteur vision, complex character studies, and cinematic mastery.
            </p>
            <div className="space-y-4 sm:space-y-6">
                {faqsFromData.map((faq, index) => (
                    <motion.div 
                        key={index}
                        className="bg-gray-900/40 rounded-xl p-4 sm:p-6 border border-stone-800/50 hover:border-stone-500/50 transition-colors duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <h3 className="text-base sm:text-lg font-medium text-stone-200 mb-2 sm:mb-3">{faq.question}</h3>
                        
                        {/* 🔥 Added "whitespace-pre-line" to properly render line breaks instead of printing HTML tags! */}
                        <p className="text-gray-300 leading-relaxed text-sm sm:text-base whitespace-pre-line">
                            {faq.answer}
                        </p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default PtaSEOFAQSection;