// components/InterstellarSEOFAQSection.js - COSMIC SCALE THEME (Cyan/Deep Space) 🌌
import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, HelpCircle } from 'lucide-react'; // Rocket for space exploration vibe
import { INTERSTELLAR_MOVIE_FAQS } from '../utils/interstellarMovieData';

const InterstellarSEOFAQSection = ({ movie }) => {
    // 🔥 Get FAQs from INTERSTELLAR_MOVIE_FAQS data
    const faqsFromData = movie?.Title && INTERSTELLAR_MOVIE_FAQS?.[movie.Title] 
        ? INTERSTELLAR_MOVIE_FAQS[movie.Title] 
        : [];

    // 🔥 Safety check - return null if no FAQs
    if (!faqsFromData || faqsFromData.length === 0) {
        console.log('⚠️ No Interstellar FAQs found for:', movie?.Title);
        return null;
    }
    
    return (
        <motion.section 
            className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-cyan-900/30"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
        >
            <h2 className="text-xl sm:text-2xl font-light text-cyan-400 mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
                <Rocket size={24} className="text-cyan-500" />
                <span className="hidden sm:inline">Cosmic Inquiries: {movie.Title}</span>
                <span className="sm:hidden">FAQ: {movie.Title}</span>
            </h2>
            
            <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base italic border-l-2 border-cyan-500/30 pl-4">
                "We explore the scientific accuracy, ending explanations, and existential themes of {movie.Title}."
            </p>

            <div className="space-y-4 sm:space-y-6">
                {faqsFromData.map((faq, index) => (
                    <motion.div 
                        key={index}
                        className="bg-gray-900/60 rounded-xl p-4 sm:p-6 border border-cyan-500/20 hover:border-cyan-500/50 transition-colors duration-300 relative overflow-hidden"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        {/* Subtle starry background effect could go here, but keeping it clean for now */}
                        
                        <div className="flex items-start gap-3">
                            <HelpCircle className="w-5 h-5 text-cyan-600/70 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="text-base sm:text-lg font-medium text-cyan-200 mb-2 sm:mb-3">
                                    {faq.question}
                                </h3>
                                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default InterstellarSEOFAQSection;