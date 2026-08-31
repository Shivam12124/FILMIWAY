// components/SEOFAQSection.js - DYNAMIC & ACCORDION OPTIMIZED ✅
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Info, ChevronDown, ChevronUp } from 'lucide-react';
// 🔥 IMPORT THE DYNAMIC GENERATOR
import { 
    COMPLETE_MOVIE_DATA, 
    getVisibleMovieFAQs 
} from '../utils/movieData';

const SEOFAQSection = ({ movie }) => {
    // ⚡ Open the first high-intent FAQ by default for immediate visibility
    const [openIndex, setOpenIndex] = useState(0);
    const movieInfo = COMPLETE_MOVIE_DATA[movie?.tmdbId];
    const title = movie?.Title || "this film";
    const currentRuntime = movie?.Runtime || movie?.runtime || "Official";
    
    // Resolve sensitive scenes from movie props or cache
    const sensitiveScenes = movie?.resolvedSensitiveScenes || movie?.sensitiveScenes || [];
    
    // Filter scenes for Sex / Sexual Content vs Nudity
    const sexScenes = sensitiveScenes.filter(s => {
        if (!s.start || s.start.trim() === '' || s.start.toLowerCase() === 'none') return false;
        const t = (s.type || '').toLowerCase();
        const d = (s.description || '').toLowerCase();
        if ((t.includes('suggestive') || t.includes('bikini') || t.includes('lingerie')) && 
            !t.includes('sex') && !t.includes('sexual') && !t.includes('intimate') && !t.includes('masturbation') && !d.includes('sex') && !d.includes('sexual') && !d.includes('masturbation')) {
            return false;
        }
        return t.includes('sex') || t.includes('sexual') || t.includes('steamy') || t.includes('erotic') || 
               t.includes('intercourse') || t.includes('intimate') || t.includes('masturbation') || t.includes('touching') ||
               d.includes('sex') || d.includes('sexual') || d.includes('masturbation');
    });

    const nudityScenes = sensitiveScenes.filter(s => {
        if (!s.start || s.start.trim() === '' || s.start.toLowerCase() === 'none') return false;
        const t = (s.type || '').toLowerCase();
        const d = (s.description || '').toLowerCase();
        if ((t.includes('suggestive') || t.includes('bikini') || t.includes('lingerie')) && 
            !t.includes('nudity') && !t.includes('topless') && !t.includes('bare') && !t.includes('naked') && !d.includes('nudity') && !d.includes('topless') && !d.includes('naked')) {
            return false;
        }
        return t.includes('nudity') || t.includes('topless') || t.includes('bare') || t.includes('naked') || 
               d.includes('nudity') || d.includes('topless') || d.includes('naked');
    });

    // 🏆 ALWAYS EXACTLY 2 DEDICATED FEATURE FAQS FOR EVERY SINGLE MOVIE:
    // FAQ 1: Does [Title] have sex scenes?
    const sexList = sexScenes.length > 0
        ? sexScenes.map(s => {
            const timeRange = s.end ? `${s.start}–${s.end}` : s.start;
            const label = s.type || 'Sex / Sexual Content';
            const severity = s.severity ? ` (${s.severity})` : '';
            return `• ${timeRange} - ${label}${severity}`;
        }).join('\n')
        : null;

    const faqSex = {
        question: `Does ${title} have sex scenes? If yes, what are the timestamps to skip them?`,
        answer: sexList 
            ? `Yes. ${title} contains ${sexScenes.length} scene${sexScenes.length > 1 ? 's' : ''} with sex or sexual content. Exact skip timestamps:\n\n${sexList}\n\nVerified frame by frame by Filmiway editors for the ${currentRuntime} runtime.`
            : `No. Filmiway editors have manually verified that ${title} contains zero sex scenes throughout its full ${currentRuntime} runtime.`
    };

    // FAQ 2: Does [Title] have nudity?
    const nudityList = nudityScenes.length > 0
        ? nudityScenes.map(s => {
            const timeRange = s.end ? `${s.start}–${s.end}` : s.start;
            const label = s.type || 'Nudity';
            const severity = s.severity ? ` (${s.severity})` : '';
            return `• ${timeRange} - ${label}${severity}`;
        }).join('\n')
        : null;

    const faqNudity = {
        question: `Does ${title} have nudity? If yes, what are the timestamps to skip it?`,
        answer: nudityList 
            ? `Yes. ${title} contains ${nudityScenes.length} scene${nudityScenes.length > 1 ? 's' : ''} featuring nudity. Exact skip timestamps:\n\n${nudityList}\n\nVerified frame by frame by Filmiway editors for the ${currentRuntime} runtime.`
            : `No. Filmiway editors have manually verified that ${title} is free of nudity throughout its full ${currentRuntime} runtime.`
    };

    const generatedExplicitFAQs = [faqSex, faqNudity];

    // Load base FAQs and filter out legacy vague questions (limiting base to 3 max to prevent FAQ floodgate)
    const faqsRaw = (movie?.customFaqs && movie.customFaqs.length > 0) ? movie.customFaqs : getVisibleMovieFAQs(movie?.Title, movie?.tmdbId, currentRuntime);
    const cleanedBaseFAQs = (faqsRaw || [])
        .filter(f => {
            const q = (f.question || f.q || '').toLowerCase();
            return !q.includes('inappropriate scenes') && 
                   !q.includes('does ' + (title || '').toLowerCase() + ' have sex scenes') && 
                   !q.includes('does ' + (title || '').toLowerCase() + ' have nudity') &&
                   !q.includes('why does filmiway provide skip timestamps');
        })
        .map(faq => {
            if (faq.answer && faq.answer.includes("[DYNAMIC_SCORE]")) {
                return {
                    ...faq,
                    answer: faq.answer.replace("[DYNAMIC_SCORE]", movie?.safetyScore || 5).replace("[DYNAMIC_LABEL]", movie?.safetyLabel || "Watch With Caution")
                };
            }
            return faq;
        })
        .slice(0, 3); // ⚡ Cap base FAQs to top 3 so total section stays lean & clean (5 FAQs max total)

    const faqsFromData = [...generatedExplicitFAQs, ...cleanedBaseFAQs];

    const hasTimestamps = sensitiveScenes.length > 0;
    const watchAlongFAQ = hasTimestamps ? {
        question: `How does the Filmiway Live Watch-Along feature work for ${title}?`,
        answer: `Filmiway provides a free Live Watch-Along sync timer for ${title}. Tap "Start Watch-Along" on your phone when the movie starts on your TV to receive live alerts 15 seconds before sensitive scenes occur, allowing you to skip them effortlessly.`
    } : null;

    if (watchAlongFAQ && !faqsFromData.some(f => (f.question || f.q || '').includes("Watch-Along"))) {
        faqsFromData.push(watchAlongFAQ);
    }

    // Safety check - return null if no FAQs found
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
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-10 gap-4">
                <div>
                    <h2 className="text-2xl sm:text-3xl font-light text-yellow-400 flex items-center gap-3">
                        <Info size={24} className="text-yellow-500" />
                        <span>Frequently Asked Questions About <span className="font-semibold text-yellow-300">{title}</span></span>
                    </h2>
                    <p className="text-gray-400 mt-2 text-sm sm:text-base max-w-2xl leading-relaxed">
                        Explore our Parents Guide, verified skip timestamps, and expert scene analysis for {title}.
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
                            aria-expanded={openIndex === index}
                        >
                            {/* 🔥 The exact question (Parents Guide or Intensity) */}
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
                            {/* 🔥 The answer rendered with whitespace-pre-line to respect bullet points */}
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

export default SEOFAQSection;