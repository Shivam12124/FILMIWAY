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
    
    // 1. Nudity Scenes (Captures any nudity, partial nudity, topless, bare)
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

    // 2. Explicit Sex Scenes (Actual intercourse, oral sex, masturbation, steamy erotic acts - excludes pure nudity and non-intercourse sexual content)
    const sexScenes = sensitiveScenes.filter(s => {
        if (!s.start || s.start.trim() === '' || s.start.toLowerCase() === 'none') return false;
        const t = (s.type || '').toLowerCase();
        const d = (s.description || '').toLowerCase();

        // If it's pure nudity/partial nudity without sex or intercourse, it belongs ONLY in Nudity
        if ((t.startsWith('nudity') || t.startsWith('partial nudity') || t === 'nudity' || t === 'partial nudity') && 
            !t.includes('sex') && !t.includes('intercourse') && !d.includes('intercourse') && !d.includes('having sex') && !d.includes('oral sex') && !d.includes('masturbation')) {
            return false;
        }

        // Exclude purely non-sexual tags
        if (t.includes('non-sexual') || t.includes('non sexual')) {
            return false;
        }

        // If it is just general 'sexual content' without explicit sex / intercourse
        if (t.includes('sexual content') && !t.includes('sex &') && !t.includes('explicit sex') && !t.includes('sex scene') && !t.includes('intercourse') && !d.includes('intercourse') && !d.includes('having sex') && !d.includes('masturbation')) {
            return false;
        }

        // Must depict actual sex, intercourse, masturbation, oral, or steamy erotic acts
        return /\bsex\b/i.test(t) || t.includes('sex &') || t.includes('intercourse') || t.includes('steamy') || t.includes('erotic') || 
               t.includes('masturbation') || t.includes('blowjob') || t.includes('oral') ||
               d.includes('having sex') || d.includes('intercourse') || d.includes('sexual intercourse') || d.includes('masturbation');
    });

    // 3. Sexual Content Scenes that are NOT explicit sex scenes (Lingerie, Suggestive, Sensual Dancing)
    const sexualContentOnlyScenes = sensitiveScenes.filter(s => {
        if (!s.start || s.start.trim() === '' || s.start.toLowerCase() === 'none') return false;
        if (sexScenes.includes(s) || nudityScenes.includes(s)) return false;
        const t = (s.type || '').toLowerCase();
        const d = (s.description || '').toLowerCase();
        return t.includes('sexual content') || t.includes('lingerie') || t.includes('suggestive') || t.includes('bikini') || d.includes('sexual content') || d.includes('lingerie');
    });

    // 🏆 DEDICATED FEATURE FAQS:
    // FAQ 1: Does [Title] have sex scenes?
    let sexAnswer = '';
    if (sexScenes.length > 0) {
        const sexList = sexScenes.map(s => {
            const timeRange = s.end ? `${s.start}–${s.end}` : s.start;
            const label = s.type || 'Sex Scene';
            const severity = s.severity ? ` (${s.severity})` : '';
            return `• ${timeRange} - ${label}${severity}`;
        }).join('\n');
        sexAnswer = `Yes. ${title} contains ${sexScenes.length} explicit sex scene${sexScenes.length > 1 ? 's' : ''}. Exact skip timestamps:\n\n${sexList}\n\nVerified frame by frame by Filmiway editors for the ${currentRuntime} runtime.`;
    } else if (sexualContentOnlyScenes.length > 0) {
        const contentList = sexualContentOnlyScenes.map(s => {
            const timeRange = s.end ? `${s.start}–${s.end}` : s.start;
            const label = s.type || 'Sexual Content';
            const severity = s.severity ? ` (${s.severity})` : '';
            return `• ${timeRange} - ${label}${severity}`;
        }).join('\n');
        sexAnswer = `No. Filmiway editors have verified that ${title} contains zero explicit sex scenes throughout its ${currentRuntime} runtime, but it does feature ${sexualContentOnlyScenes.length} scene${sexualContentOnlyScenes.length > 1 ? 's' : ''} with suggestive sexual content or lingerie:\n\n${contentList}\n\nVerified by Filmiway editors for the ${currentRuntime} runtime.`;
    } else {
        sexAnswer = `No. Filmiway editors have manually verified that ${title} contains zero sex scenes throughout its full ${currentRuntime} runtime.`;
    }

    const faqSex = {
        question: `Does ${title} have sex scenes? If yes, what are the timestamps to skip them?`,
        answer: sexAnswer
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
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-3 sm:gap-4">
                <div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white flex items-center gap-2.5 sm:gap-3">
                        <Info size={24} className="text-yellow-500 shrink-0" />
                        <span>Frequently Asked Questions About <span className="text-yellow-400 font-bold">{title}</span></span>
                    </h2>
                    <p className="text-gray-400 sm:text-gray-300 mt-2 text-xs sm:text-sm lg:text-base max-w-3xl leading-relaxed font-normal">
                        Explore our Parents Guide, verified skip timestamps, and expert scene analysis for {title}.
                    </p>
                </div>
            </div>

            <div className="space-y-3.5 sm:space-y-4">
                {faqsFromData.map((faq, index) => (
                    <motion.div 
                        key={index}
                        className={`bg-gray-800/30 rounded-xl sm:rounded-2xl overflow-hidden border transition-all duration-300 group ${
                            openIndex === index ? 'border-yellow-500/50 bg-gray-800/60 shadow-xl' : 'border-gray-700/50 hover:border-yellow-500/30'
                        }`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex items-center justify-between p-4 sm:p-5 lg:p-6 text-left focus:outline-none cursor-pointer"
                            aria-expanded={openIndex === index}
                        >
                            {/* 🔥 The exact question (Parents Guide or Intensity) */}
                            <span className="text-base sm:text-lg lg:text-xl font-medium sm:font-bold text-yellow-200 sm:text-yellow-300 pr-4 leading-snug">
                                {faq.question || faq.q}
                            </span>
                            {openIndex === index ? (
                                <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 shrink-0" />
                            ) : (
                                <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500 group-hover:text-yellow-400 transition-colors shrink-0" />
                            )}
                        </button>
                        
                        <motion.div
                            initial={false}
                            animate={{ height: openIndex === index ? 'auto' : 0, opacity: openIndex === index ? 1 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            {/* 🔥 The answer rendered with whitespace-pre-line to respect bullet points */}
                            <div className="p-4 sm:p-5 lg:p-6 pt-0 text-gray-300 sm:text-gray-200 leading-relaxed text-xs sm:text-sm lg:text-base font-light sm:font-normal border-t border-gray-700/30 mt-2 whitespace-pre-line group-hover:text-white transition-colors">
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