// components/PsychThrillerSEOFAQSection.js - PSYCHOLOGICAL THRILLER THEME (Violet/Sanity Erosion) 🧠
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, AlertTriangle } from 'lucide-react'; // Brain for psychology, Alert for spoilers
import { PSYCH_THRILLER_FAQS } from '../utils/psychologicalThrillerMovieData';

const PsychThrillerSEOFAQSection = ({ movie }) => {
    // 🔥 Get FAQs from PSYCH_THRILLER_FAQS data
    const faqsFromData = movie?.Title && PSYCH_THRILLER_FAQS?.[movie.Title] 
        ? PSYCH_THRILLER_FAQS[movie.Title] 
        : [];

    // 🔥 Safety check - return null if no FAQs
    if (!faqsFromData || faqsFromData.length === 0) {
        return null;
    }
    
    return (
        <motion.section 
            className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-violet-900/50"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
        >
            <h2 className="text-xl sm:text-2xl font-light text-violet-400 mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
                <Brain size={24} className="text-violet-500" />
                <span className="hidden sm:inline">Psychological Analysis & FAQs: {movie.Title}</span>
                <span className="sm:hidden">Analysis: {movie.Title}</span>
            </h2>

            <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base italic border-l-2 border-violet-500/50 pl-4">
                "We dig into the fractured psyche of {movie.Title}. Warning: These answers contain spoilers and deep dives into the protagonist's sanity."
            </p>

            <div className="space-y-4 sm:space-y-6">
                {faqsFromData.map((faq, index) => (
                    <motion.div 
                        key={index}
                        className="bg-gray-900/60 rounded-xl p-4 sm:p-6 border border-violet-500/20 hover:border-violet-500/50 transition-colors duration-300 relative overflow-hidden"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        {/* Subtle background glow effect */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-violet-900/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>

                        <div className="flex items-start gap-3">
                            <AlertTriangle className="w-5 h-5 text-violet-500/70 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="text-base sm:text-lg font-medium text-violet-200 mb-2 sm:mb-3">
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

export default PsychThrillerSEOFAQSection;