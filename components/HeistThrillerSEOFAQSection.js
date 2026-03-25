// components/HeistThrillerSEOFAQSection.js - DYNAMIC & SEO OPTIMIZED ✅
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, ChevronDown, ChevronUp } from 'lucide-react'; // Changed to Lock for Heist Theme
// 🔥 IMPORT THE DYNAMIC FAQ GENERATOR
import { getVisibleMovieFAQs } from '../utils/heistThrillerMovieData';

const HeistThrillerSEOFAQSection = ({ movie }) => {
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
      className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-gray-700/50"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-10 gap-4">
        <div>
          {/* 🎨 Amber/Gold Theme for the Heist Collection */}
          <h2 className="text-2xl sm:text-3xl font-light text-yellow-100 flex items-center gap-3">
            <Lock size={24} className="text-yellow-400" />
            <span>Frequently Asked Questions About <span className="font-semibold text-yellow-300">{title}</span></span>
          </h2>
          <p className="text-gray-400 mt-2 text-sm sm:text-base max-w-2xl">
            Explore our **Parents Guide** and expert analysis for {title}. We provide accurate timestamps for sensitive scenes to skip and map the biggest heist tension peaks of this cinematic thriller.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {faqsFromData.map((faq, idx) => (
          <motion.div 
            key={idx}
            className={`bg-gray-800/40 rounded-xl overflow-hidden border transition-all duration-300 ${
              openIndex === idx ? 'border-yellow-500/50 bg-gray-800/60' : 'border-gray-700/50 hover:border-yellow-600/30'
            }`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <button
              onClick={() => toggleFAQ(idx)}
              className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
            >
              {/* 🔥 The exact question (Static Trivia OR Dynamic Parents Guide) */}
              <span className="text-base sm:text-lg font-medium text-yellow-100 pr-4">
                {faq.question || faq.q}
              </span>
              {openIndex === idx ? (
                <ChevronUp className="w-5 h-5 text-yellow-400 flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
              )}
            </button>
            
            <motion.div
              initial={false}
              animate={{ height: openIndex === idx ? 'auto' : 0, opacity: openIndex === idx ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              {/* 🔥 The exact answer (with whitespace-pre-line to format the timestamp lists perfectly) */}
              <div className="p-5 pt-0 text-gray-300 leading-relaxed text-sm sm:text-base font-light border-t border-gray-700/30 mt-2 whitespace-pre-line">
                {faq.answer || faq.a}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default HeistThrillerSEOFAQSection;