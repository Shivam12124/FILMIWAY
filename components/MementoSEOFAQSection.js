// components/MementoSEOFAQSection.js - DYNAMIC & SEO OPTIMIZED ✅
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, ChevronDown, ChevronUp } from 'lucide-react'; // Matches the Psychological vibe
// 🔥 IMPORT THE DYNAMIC FAQ GENERATOR
import { getVisibleMovieFAQs } from '../utils/movieData';

const MementoSEOFAQSection = ({ movie }) => {
    const [openIndex, setOpenIndex] = useState(null);
    const title = movie?.Title || "this film";
    
    // 🔥 AUTOMATICALLY GENERATE THE FAQS (Includes the Dynamic Timestamp FAQ & Intensity Peaks)
    // This ensures the UI perfectly matches the Bot Schema!
    const currentRuntime = movie?.Runtime || movie?.runtime || "Official";
    const faqsFromData = getVisibleMovieFAQs(movie?.Title, movie?.tmdbId, currentRuntime);

    // Safety check - return null if no FAQs are found
    if (!faqsFromData || faqsFromData.length === 0) {
        return null;
    }

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    
    return (
        <motion.section 
            className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-700/50"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
        >
            {/* 🎨 Yellow/Amber Theme for the Memento Collection */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-10 gap-4">
                <div>
                    <h2 className="text-2xl sm:text-3xl font-light text-yellow-400 flex items-center gap-3">
                        <Brain size={24} className="text-yellow-500" />
                        <span>Frequently Asked Questions About <span className="font-semibold text-yellow-300">{title}</span></span>
                    </h2>
                    <p className="text-gray-400 mt-2 text-sm sm:text-base max-w-2xl leading-relaxed">
                        Explore our Parents Guide and expert analysis for {title}. We provide accurate timestamps for sensitive scenes to skip and map the biggest memory distortion peaks of this psychological thriller.
                    </p>
                </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
                {faqsFromData.map((faq, index) => (
                    <motion.div 
                        key={index}
                        className={`bg-gray-800/30 rounded-xl overflow-hidden border transition-all duration-300 group ${
                            openIndex === index ? 'border-yellow-500/50 bg-gray-800/60' : 'border-gray-700/50 hover:border-yellow-500/30'
                        }`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                        >
                            {/* 🔥 The exact question (Static Trivia OR Dynamic Parents Guide) */}
                            <span className="text-base sm:text-lg font-medium text-yellow-200 pr-4">
                                {faq.question || faq.q}
                            </span>
                            {openIndex === index ? (
                                <ChevronUp className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                            ) : (
                                <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                            )}
                        </button>
                        
                        <motion.div
                            initial={false}
                            animate={{ height: openIndex === index ? 'auto' : 0, opacity: openIndex === index ? 1 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            {/* 🔥 The exact answer (including the HTML-formatted timestamp lists) */}
                            <div className="p-5 pt-0 text-gray-300 leading-relaxed text-sm sm:text-base font-light border-t border-gray-700/30 mt-2 whitespace-pre-line group-hover:text-gray-200 transition-colors">
                                {faq.answer || faq.a}
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default MementoSEOFAQSection;