// components/SurvivalSEOFAQSection.js - FAQ SECTION FOR SURVIVAL MOVIES
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Mountain } from 'lucide-react';

const SurvivalSEOFAQSection = ({ faqs, movieTitle, themeColor = 'yellow' }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const themeColors = {
    yellow: {
      bg: 'from-yellow-900/40 to-yellow-800/40',
      border: 'border-yellow-400/30',
      text: 'text-yellow-300',
      accent: 'text-yellow-400',
      hover: 'hover:bg-yellow-600/10'
    }
  };

  const colors = themeColors[themeColor] || themeColors.yellow;

  return (
    <div className="relative z-30 py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Mountain className={`w-8 h-8 ${colors.accent}`} />
              <h2 className="text-3xl sm:text-4xl font-light text-white">
                Frequently Asked Questions
              </h2>
            </div>
            <p className="text-gray-400 text-lg">
              Everything you need to know about {movieTitle} and its survival elements
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${colors.bg} rounded-xl backdrop-blur-sm border ${colors.border} overflow-hidden transition-all duration-300`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full px-8 py-6 text-left ${colors.hover} transition-all duration-300 flex items-center justify-between`}
                >
                  <div className="flex items-center gap-4">
                    <HelpCircle className={`w-5 h-5 ${colors.accent} flex-shrink-0`} />
                    <h3 className={`text-lg font-medium ${colors.text}`}>
                      {faq.question}
                    </h3>
                  </div>
                  
                  {openIndex === index ? (
                    <ChevronUp className={`w-5 h-5 ${colors.accent} flex-shrink-0`} />
                  ) : (
                    <ChevronDown className={`w-5 h-5 ${colors.accent} flex-shrink-0`} />
                  )}
                </button>

                {openIndex === index && (
                  <div className="px-8 pb-6">
                    <div className="pl-9">
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurvivalSEOFAQSection;
