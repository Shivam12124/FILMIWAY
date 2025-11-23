// components/HeistThrillerSEOFAQSection.js - FULL DETAILED FAQS FOR ALL 10 HEIST THRILLER FILMS
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';

const heistThrillerMovieFAQs = {
  "Heat": [
    { q: 'What is the core premise of Heat?', a: "Heat follows master thief Neil McCauley and detective Vincent Hanna in a high-stakes cat-and-mouse game across Los Angeles, blending intense heist action with deep character exploration." },
    { q: 'Is Heat known for its iconic coffee shop scene?', a: "The legendary café scene between De Niro and Pacino is one of cinema's greatest moments—two titans discussing fate, loyalty, and the hunter-prey dynamic with quiet intensity." },
    { q: 'Who directed Heat?', a: "Michael Mann directed this masterpiece, crafting meticulous action sequences and atmospheric night-time LA visuals that defined the modern crime thriller." },
    { q: 'Was Heat critically acclaimed?', a: "Heat received universal acclaim for its performances, direction, and realistic portrayal of professional criminals—it's considered the gold standard of heist cinema." },
    { q: 'What themes define Heat?', a: "Major themes include professionalism versus personal connection, the loneliness of obsession, moral ambiguity, and the thin line between cop and criminal." }
  ],
  "The Italian Job": [
    { q: 'What is The Italian Job about?', a: "A crew of thieves execute an elaborate gold heist in Turin using Mini Coopers for a thrilling getaway through the city's historic streets and tunnels." },
    { q: 'Who stars in the original film?', a: "Michael Caine leads the iconic 1969 version with charm and wit, while the 2003 remake features Mark Wahlberg, Charlize Theron, and Edward Norton." },
    { q: 'What makes The Italian Job so entertaining?', a: "Its perfect blend of clever planning, stylish execution, witty dialogue, and unforgettable car chase sequences through Turin's tight corridors." },
    { q: 'Is The Italian Job based on true events?', a: "The story is fictional but captures the spirit of 1960s caper films with its emphasis on ingenuity over violence." },
    { q: 'What is the famous ending line?', a: "The 1969 version ends with the iconic cliffhanger: 'Hang on a minute lads, I've got a great idea'—one of cinema's most memorable endings." }
  ],
  "Ocean's Eleven": [
    { q: 'Who made Ocean\'s Eleven?', a: "Steven Soderbergh directed this slick 2001 remake, assembling an all-star cast led by George Clooney, Brad Pitt, and Matt Damon for a casino heist extravaganza." },
    { q: 'What casinos do they rob?', a: "Danny Ocean's crew targets three Las Vegas casinos—the Bellagio, Mirage, and MGM Grand—all owned by ruthless Terry Benedict." },
    { q: 'Did the film spawn sequels?', a: "Yes—Ocean's Twelve (2004) and Ocean's Thirteen (2007) continued the franchise, maintaining the stylish tone and ensemble chemistry." },
    { q: 'How does the heist work?', a: "The elaborate plan involves impersonating workers, creating a fake vault, and exploiting casino security systems—all revealed through clever reverse storytelling." },
    { q: 'Why is it regarded as a modern classic?', a: "Witty dialogue, star power, stylish cinematography, and a perfectly executed twist ending make it the definitive modern heist film." }
  ],
  "Inside Man": [
    { q: 'What is the plot of Inside Man?', a: "A perfectly planned bank robbery on Wall Street becomes a tense hostage situation as detective Keith Frazier tries to outsmart mastermind Dalton Russell." },
    { q: 'What is iconic about Dalton Russell?', a: "Clive Owen's calculated criminal orchestrates a heist where nothing is as it seems—his opening monologue sets the tone for layers of deception." },
    { q: 'Did the film win awards?', a: "While not an Oscar winner, Inside Man became Spike Lee's highest-grossing film and received widespread critical acclaim for its intelligent plotting." },
    { q: 'Who directed it?', a: "Spike Lee directed with precision and social commentary, elevating the heist genre with questions about power, greed, and historical justice." },
    { q: 'What themes does it explore?', a: "It interrogates wealth inequality, Nazi collaboration, moral compromise, and the corrupting influence of old money protected by institutions." }
  ],
  "The Town": [
    { q: 'What inspired The Town?', a: "Based on Chuck Hogan's novel 'Prince of Thieves,' it follows Charlestown bank robbers trapped between loyalty, love, and the FBI closing in." },
    { q: 'Who directed this film?', a: "Ben Affleck directs and stars as Doug MacRay, a thief seeking escape from his criminal life in Boston's tight-knit robbery culture." },
    { q: 'Why is the action so intense?', a: "Realistic armored car and bank heist sequences shot on location in Boston create visceral, documentary-style authenticity rarely seen in heist films." },
    { q: 'Is it character-driven?', a: "Absolutely—The Town balances thrilling action with deep character exploration of redemption, friendship, and the weight of criminal legacy." },
    { q: 'What\'s the emotional core?', a: "The tragic impossibility of escaping one's past while protecting those you love—Doug's doomed romance with Claire drives the film's heart." }
  ],
  "Reservoir Dogs": [
    { q: 'What is Reservoir Dogs about?', a: "A failed diamond heist spirals into paranoia and violence as color-coded criminals try to identify the rat who tipped off the police." },
    { q: 'Is Reservoir Dogs Tarantino\'s debut?', a: "Yes—Quentin Tarantino's explosive 1992 debut revolutionized indie cinema with non-linear storytelling and razor-sharp dialogue." },
    { q: 'Who stars in Reservoir Dogs?', a: "Harvey Keitel, Tim Roth, Steve Buscemi, and Michael Madsen lead an ensemble cast delivering unforgettable performances of loyalty and betrayal." },
    { q: 'What are its main themes?', a: "Themes of trust, betrayal, honor among thieves, and the breakdown of criminal professionalism under pressure define the narrative." },
    { q: 'How was it received?', a: "Initially controversial for its violence, it's now celebrated as a landmark of independent cinema that launched Tarantino's legendary career." }
  ],
  "Hell or High Water": [
    { q: 'What is the premise of Hell or High Water?', a: "Two brothers rob banks across West Texas to save their family ranch, pursued by a retiring Texas Ranger in a modern Western thriller." },
    { q: 'Who directed and starred?', a: "David Mackenzie directs Chris Pine, Ben Foster, and Jeff Bridges in a meditation on economic desperation and family loyalty." },
    { q: 'Was Hell or High Water adapted from another source?', a: "Taylor Sheridan wrote the original screenplay, examining modern American poverty through the heist genre lens." },
    { q: 'Did it win awards?', a: "It received four Oscar nominations including Best Picture, with universal praise for its acting, writing, and social commentary." },
    { q: 'What sets it apart?', a: "Blending neo-Western atmosphere with economic desperation, it transforms bank robbery into a desperate act of survival against institutional greed." }
  ],
  "Thief": [
    { q: 'What is the story of Thief?', a: "Frank, a professional safecracker, dreams of going straight but is pulled deeper into organized crime for one last massive jewelry heist." },
    { q: 'Who helmed this film?', a: "Michael Mann's 1981 directorial debut established his signature style—neon-lit cities, electronic scores, and morally complex criminals." },
    { q: 'Which themes does it explore?', a: "Themes of freedom versus control, the impossibility of escape from criminal life, and maintaining dignity within corrupt systems dominate." },
    { q: 'Is it based on true events?', a: "While fictional, Mann researched real safecrackers to create authentic procedural detail in Frank's meticulous heist techniques." },
    { q: 'What is the visual style?', a: "Neon-soaked Chicago nights, Tangerine Dream's synth score, and clinical precision create Mann's proto-Heat aesthetic blueprint." }
  ],
  "The Bank Job": [
    { q: 'What is The Bank Job\'s narrative twist?', a: "A 1971 London bank robbery uncovers royal scandals, MI5 conspiracies, and criminal underworld secrets that powerful people will kill to protect." },
    { q: 'Who directed and who stars?', a: "Roger Donaldson directs Jason Statham in a rare dramatic role as small-time crook Terry Leather, caught between criminals and government agents." },
    { q: 'Is it based on a true story?', a: "Yes—based on the real Baker Street robbery where stolen safe deposit contents allegedly included compromising royal photographs and MI5 evidence." },
    { q: 'How does the film treat conspiracy?', a: "It reveals how ordinary criminals accidentally stumbled into state secrets, forcing government cover-ups through D-notices and intimidation." },
    { q: 'Did The Bank Job influence heist cinema?', a: "It proved fact-based heist thrillers could blend action with political intrigue, inspiring renewed interest in true crime caper films." }
  ],
  "Dog Day Afternoon": [
    { q: 'What is the premise of Dog Day Afternoon?', a: "Based on a true story, a desperate man robs a Brooklyn bank to fund his partner's gender confirmation surgery, sparking a media circus and hostage crisis." },
    { q: 'Who directed Dog Day Afternoon?', a: "Sidney Lumet helms this pressure-cooker thriller, transforming a failed heist into a profound character study of desperation and media spectacle." },
    { q: 'How does the film blur fiction and reality?', a: "Shot documentary-style with improvised dialogue, it captures the absurdity of the 1972 incident that captivated New York during a sweltering August day." },
    { q: 'What genre is it?', a: "Crime drama with dark comedy elements—using the heist framework to explore sexuality, mental health, and the American Dream's broken promises." },
    { q: 'How was it received?', a: "Six Oscar nominations including Best Picture, with Al Pacino's 'Attica! Attica!' chant becoming one of cinema's most iconic improvised moments." }
  ]
};

const HeistThrillerSEOFAQSection = ({ movie }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const title = movie.Title;
  const faqs = heistThrillerMovieFAQs[title] || [
    { q: 'What makes this heist thriller unique?', a: "Intricate planning, high-stakes execution, and memorable criminal masterminds make this a must-watch for heist cinema fans." },
    { q: 'Where can I watch this film?', a: "Check major streaming platforms in your region for availability." },
    { q: 'Who directed this movie?', a: "A visionary filmmaker whose craft elevated this heist thriller to cinematic excellence." }
  ];

  return (
    <motion.section
      className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-700/50"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <h2 className="text-xl sm:text-2xl font-light text-yellow-300 mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
        <Info size={20} className="sm:w-6 sm:h-6" />
        <span className="hidden sm:inline">Frequently Asked Questions About {title}</span>
        <span className="sm:hidden">FAQ About {title}</span>
      </h2>
      <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
        Deep dive into {title} with insider knowledge, production details, and insights about this masterful heist thriller.
      </p>
      <div className="space-y-4 sm:space-y-6">
        {faqs.map((faq, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-800/30 rounded-xl p-4 sm:p-6 border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <h3 className="text-base sm:text-lg font-medium text-yellow-200 mb-3 sm:mb-4 leading-relaxed">
              {faq.q}
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base font-light">
              {faq.a}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default HeistThrillerSEOFAQSection;
