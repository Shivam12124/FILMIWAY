// components/DramaSEOFAQSection.js - DRAMA FAQ WITH ORIGINAL YELLOW THEME ✅
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const DramaSEOFAQSection = ({ movie }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const getDramaFAQs = (title) => {
    const t = title.toLowerCase();

    if (t.includes('1917')) {
      return [
        { q: 'Is 1917 really filmed in one continuous shot?', a: 'While 1917 appears to be one continuous shot, it\'s actually composed of several long takes seamlessly stitched together using invisible cuts. Director Sam Mendes and cinematographer Roger Deakins meticulously choreographed every movement to create the illusion of real-time action throughout the entire 119-minute runtime.' },
        { q: 'Is 1917 based on a true story?', a: 'Yes, 1917 is inspired by stories director Sam Mendes heard from his grandfather, Alfred Mendes, who served as a lance corporal in World War I. While the specific mission depicted is fictionalized, it\'s based on real wartime experiences and historical events from the Western Front.' },
        { q: 'What makes 1917 an essential war drama?', a: '1917 revolutionizes war cinema by immersing viewers directly into the trenches through its one-shot technique. The technical achievement serves the emotional story - you experience every minute of terror, exhaustion, and determination alongside the soldiers, making it the most visceral WWI film ever made.' },
        { q: 'Did 1917 win any Oscars?', a: 'Yes, 1917 won 3 Academy Awards: Best Cinematography (Roger Deakins), Best Visual Effects, and Best Sound Mixing. It was also nominated for Best Picture and Best Director, ultimately losing to Parasite.' },
        { q: 'Where was 1917 filmed?', a: '1917 was primarily filmed in the UK, including Salisbury Plain, Hankley Common, Shepperton Studios, and Govan Docks in Glasgow. The filmmakers created extensive trenches and No Man\'s Land sets to achieve the authentic WWI atmosphere.' }
      ];
    }

    if (t.includes('roma')) {
      return [
        { q: 'Why is Roma shot in black and white?', a: 'Director Alfonso Cuarón chose black and white to evoke the feel of memory and nostalgia, reflecting how we remember our childhood. The decision also emphasizes the film\'s intimate focus on character and emotion over spectacle, stripping away distractions to reveal raw human experiences.' },
        { q: 'Is Roma based on Alfonso Cuarón\'s childhood?', a: 'Yes, Roma is semi-autobiographical, inspired by Cuarón\'s upbringing in the Colonia Roma neighborhood of Mexico City during the early 1970s. The character Cleo is based on Libo Rodríguez, the indigenous domestic worker who helped raise Cuarón and his siblings.' },
        { q: 'What language is Roma in?', a: 'Roma features primarily Spanish dialogue, with significant portions in Mixtec (an indigenous Mexican language). The film authentically captures the linguistic diversity of 1970s Mexico City, with Cleo speaking Mixtec while the family speaks Spanish.' },
        { q: 'Did Roma win the Oscar for Best Picture?', a: 'No, Roma did not win Best Picture (losing to Green Book in a controversial decision), but it won 3 Academy Awards: Best Director (Alfonso Cuarón), Best Cinematography (Alfonso Cuarón), and Best Foreign Language Film.' },
        { q: 'Where can I watch Roma?', a: 'Roma is exclusively available on Netflix worldwide. It was one of Netflix\'s first major prestige films to receive wide critical acclaim and Oscar recognition, marking a turning point for streaming platforms in serious cinema.' }
      ];
    }

    if (t.includes('irishman')) {
      return [
        { q: 'How long is The Irishman?', a: 'The Irishman has a runtime of 209 minutes (3 hours and 29 minutes), making it Martin Scorsese\'s longest film. The epic length allows Scorsese to tell a sweeping story spanning decades of organized crime in America.' },
        { q: 'Is The Irishman based on a true story?', a: 'Yes, The Irishman is based on the 2004 book "I Heard You Paint Houses" by Charles Brandt, which chronicles the life of Frank Sheeran, a mob hitman who claimed to have killed Jimmy Hoffa. While Sheeran\'s confessions are disputed by historians, the film treats his account as its narrative foundation.' },
        { q: 'What is the de-aging technology in The Irishman?', a: 'The Irishman uses groundbreaking de-aging CGI technology from Industrial Light & Magic to make De Niro, Pacino, and Pesci appear decades younger in flashback sequences. Unlike traditional prosthetics or makeup, the process captured subtle facial movements in real-time to maintain authentic performances.' },
        { q: 'Did The Irishman win any Oscars?', a: 'Despite 10 Academy Award nominations including Best Picture and Best Director, The Irishman did not win any Oscars. It lost Best Picture to Parasite in what many considered a surprising sweep for the Korean film.' },
        { q: 'Why did The Irishman have limited theatrical release?', a: 'Netflix gave The Irishman a limited 26-day theatrical release before streaming to qualify for Academy Awards. Major theater chains refused to show it due to Netflix\'s short theatrical window, sparking ongoing debates about streaming vs. theatrical distribution.' }
      ];
    }

    if (t.includes('marriage story')) {
      return [
        { q: 'Is Marriage Story based on a true story?', a: 'While not directly autobiographical, Marriage Story draws heavily from writer-director Noah Baumbach\'s own divorce from actress Jennifer Jason Leigh. The film synthesizes his personal experiences with observations about modern marriage and divorce in creative communities.' },
        { q: 'What is the famous fight scene in Marriage Story?', a: 'The climactic argument scene is Marriage Story\'s emotional centerpiece, where Charlie and Nicole (Adam Driver and Scarlett Johansson) unleash years of repressed resentment in a raw, devastating exchange. Driver and Johansson\'s uninterrupted performances in this 10-minute sequence showcase their extraordinary range.' },
        { q: 'Did Marriage Story win any Academy Awards?', a: 'Marriage Story won 1 Oscar for Best Supporting Actress (Laura Dern as divorce attorney Nora Fanshaw). It received 6 nominations total, including Best Picture, Best Actor (Adam Driver), and Best Actress (Scarlett Johansson).' },
        { q: 'Why is Marriage Story so realistic?', a: 'Noah Baumbach insisted on authentic legal proceedings, consulting real divorce attorneys and observing actual custody mediations. The film\'s power comes from recognizing that both characters are flawed but sympathetic - there are no villains, just two people who loved each other struggling through an impossible situation.' },
        { q: 'What does the ending of Marriage Story mean?', a: 'The ending shows Charlie and Nicole achieving bittersweet acceptance. Charlie tying Nicole\'s shoe represents lingering intimacy and care despite separation. They\'ve learned to co-parent with grace, suggesting that divorce doesn\'t erase love - it transforms it into something different but still meaningful.' }
      ];
    }

    if (t.includes('social network')) {
      return [
        { q: 'Is The Social Network accurate to Facebook\'s real story?', a: 'The Social Network takes creative liberties with Facebook\'s founding for dramatic effect. Mark Zuckerberg called it fiction, particularly the girlfriend breakup motivation. However, the film accurately captures the core legal disputes, the Winklevoss twins\' lawsuit, and the falling out between Zuckerberg and Eduardo Saverin.' },
        { q: 'Who wrote The Social Network screenplay?', a: 'Aaron Sorkin wrote the Oscar-winning screenplay based on Ben Mezrich\'s book "The Accidental Billionaires." Sorkin\'s signature rapid-fire dialogue and non-linear structure transform tech entrepreneurship into Shakespearean drama about ambition, betrayal, and isolation.' },
        { q: 'Did The Social Network win Best Picture?', a: 'No, The Social Network lost Best Picture to The King\'s Speech in a major Oscar upset. However, it won 3 Academy Awards: Best Adapted Screenplay (Aaron Sorkin), Best Original Score (Trent Reznor and Atticus Ross), and Best Film Editing.' },
        { q: 'Why is The Social Network considered a masterpiece?', a: 'David Fincher\'s precise direction and Sorkin\'s brilliant writing elevate a story about coding into a timeless exploration of genius, friendship, and the cost of success. The film predicted social media\'s impact on human connection before Facebook\'s full cultural dominance emerged.' },
        { q: 'What is Mark Zuckerberg\'s opinion of The Social Network?', a: 'Zuckerberg has said the film got his wardrobe right but fabricated his motivations. He particularly disputes the girlfriend breakup angle, noting he was dating his now-wife Priscilla Chan during Facebook\'s creation. However, he acknowledged the film captured the intensity of building a startup.' }
      ];
    }

    // Default FAQs for other drama movies
    return [
      { q: `What makes ${movie.title || movie.Title} an essential drama?`, a: `${movie.title || movie.Title} stands out for its powerful performances, authentic storytelling, and emotional depth that resonates long after viewing.` },
      { q: `Is ${movie.title || movie.Title} based on a true story?`, a: `${movie.synopsis || 'This compelling drama explores universal human experiences through its narrative.'}` },
      { q: `Where can I watch ${movie.title || movie.Title}?`, a: `${movie.title || movie.Title} is available to stream on Netflix.` },
      { q: `What are the main themes of ${movie.title || movie.Title}?`, a: `The film explores ${movie.themes?.join(', ') || 'human resilience, relationships, and personal growth'} through its narrative.` },
      { q: `Did ${movie.title || movie.Title} win any awards?`, a: `${movie.awards?.join(', ') || 'The film received critical acclaim for its performances and storytelling.'}` }
    ];
  };

  const faqs = getDramaFAQs(movie.title || movie.Title);

  return (
    <motion.section
      className="mb-16 bg-gradient-to-br from-gray-900/60 to-gray-800/40 rounded-2xl p-8 border border-yellow-400/20 shadow-2xl"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-gradient-to-br from-yellow-600/20 to-yellow-700/10 rounded-xl border border-yellow-500/30">
          <HelpCircle className="w-7 h-7 text-yellow-400" />
        </div>
        <h2 className="text-3xl font-light text-white tracking-wide">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="border border-gray-700/50 rounded-xl overflow-hidden bg-gray-800/30 hover:border-yellow-500/30 transition-all duration-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left group"
            >
              <h3 className="text-lg font-medium text-gray-200 group-hover:text-yellow-400 transition-colors pr-4">
                {faq.q}
              </h3>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5 text-yellow-400 flex-shrink-0" />
              </motion.div>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-gray-300 leading-relaxed border-t border-gray-700/50 pt-4">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-yellow-950/20 border border-yellow-900/30 rounded-xl">
        <p className="text-sm text-gray-400 leading-relaxed">
          <strong className="text-yellow-400">Note:</strong> These FAQs provide context and background about {movie.title || movie.Title}. 
          For the most current information about availability and awards, please check official sources.
        </p>
      </div>
    </motion.section>
  );
};

export default DramaSEOFAQSection;
