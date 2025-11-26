// components/TimeTravelSEOFAQSection.js - FULL DETAILED FAQS FOR ALL 10 TIME TRAVEL FILMS

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const timeTravelMovieFAQs = {
  "Back to the Future": [
    { q: 'What is Back to the Future about?', a: "Marty McFly accidentally travels to 1955 in a DeLorean time machine, where he must ensure his teenage parents fall in love or risk erasing his own existence. It's the quintessential time travel adventure." },
    { q: 'Who directed Back to the Future?', a: "Robert Zemeckis directed this iconic sci-fi adventure, perfectly blending humor, heart, and inventive storytelling that defined a generation." },
    { q: 'Is the DeLorean a real time machine?', a: "The DeLorean DMC-12 was a real sports car modified for the film with fictional flux capacitor technology. It became an enduring pop culture icon." },
    { q: 'Did Back to the Future win awards?', a: "Yes—it won the Academy Award for Best Sound Effects Editing and became one of the highest-grossing films of 1985." },
    { q: 'What themes does it explore?', a: "Themes include destiny vs. free will, the consequences of altering the past, family relationships, and the power of determination." }
  ],
  "Terminator 2: Judgment Day": [
    { q: 'What is the plot of Terminator 2?', a: "A reprogrammed Terminator is sent back to protect young John Connor from a more advanced liquid-metal T-1000. It's an epic action sequel with profound emotional stakes." },
    { q: 'Who stars in the film?', a: "Arnold Schwarzenegger returns as the T-800, alongside Linda Hamilton (Sarah Connor), Edward Furlong (John Connor), and Robert Patrick (T-1000)." },
    { q: 'What makes T2 groundbreaking?', a: "Revolutionary CGI effects (especially the liquid-metal T-1000), intense action choreography, and a surprisingly emotional father-son dynamic between man and machine." },
    { q: 'Did it win Oscars?', a: "T2 won four Academy Awards: Best Sound, Best Sound Effects Editing, Best Makeup, and Best Visual Effects." },
    { q: 'How does time travel work in T2?', a: "Skynet sends terminators back to kill resistance leaders before they rise. The film explores the paradox of preventing a war that sent the time travelers back in the first place." }
  ],
  "The Terminator": [
    { q: 'What is The Terminator about?', a: "A cyborg assassin is sent from 2029 to 1984 to kill Sarah Connor, whose unborn son will lead humanity's future resistance. A soldier follows to protect her." },
    { q: 'Who created The Terminator?', a: "James Cameron directed and co-wrote this groundbreaking sci-fi thriller that launched one of cinema's most iconic franchises." },
    { q: 'Is The Terminator horror or sci-fi?', a: "It's a hybrid—combining relentless slasher-film tension with hard sci-fi time travel concepts and dystopian future warfare." },
    { q: 'What is the time travel paradox?', a: "Kyle Reese travels back to save Sarah, becomes John's father, creating a predestination paradox where John's existence depends on the very war he'll fight." },
    { q: 'How was it received?', a: "Initially a modest-budget thriller, it became a massive cult hit and critical success, praised for its intensity, innovation, and Schwarzenegger's iconic performance." }
  ],
  "Interstellar": [
    { q: 'What is Interstellar about?', a: "Explorers travel through a wormhole seeking a new home for humanity. The film explores relativity, time dilation, love transcending dimensions, and sacrifice." },
    { q: 'Who directed Interstellar?', a: "Christopher Nolan crafted this visually stunning, scientifically grounded epic with physicist Kip Thorne as scientific consultant." },
    { q: 'How does time work in Interstellar?', a: "Time dilation near a black hole means one hour on a water planet equals seven years on Earth—creating devastating emotional consequences." },
    { q: 'What is the Tesseract scene?', a: "The climactic sequence where Cooper enters a higher-dimensional space to communicate across time with his daughter through gravity manipulation." },
    { q: 'Did it win awards?', a: "Interstellar won the Academy Award for Best Visual Effects and was praised for its ambitious scope and Hans Zimmer's iconic score." }
  ],
  "Predestination": [
    { q: 'What makes Predestination so complex?', a: "It's a paradox-heavy thriller where a temporal agent's identity, mission, and existence form an intricate causal loop with one of cinema's most shocking twists." },
    { q: 'Who stars in Predestination?', a: "Ethan Hawke and Sarah Snook deliver powerhouse performances in this mind-bending adaptation of Heinlein's 'All You Zombies.'" },
    { q: 'Is it based on a book?', a: "Yes—adapted from Robert A. Heinlein's short story, one of the most famous time travel paradox tales in science fiction literature." },
    { q: 'What is the main paradox?', a: "The film explores the bootstrap paradox and predestination loop where cause and effect become circular, questioning free will and identity." },
    { q: 'Why is the ending controversial?', a: "Its revelation challenges viewers' understanding of identity, gender, and causality—intentionally designed to provoke thought and repeated viewings." }
  ],
  "Primer": [
    { q: 'What is Primer about?', a: "Two engineers accidentally invent a time machine and become entangled in overlapping timelines. It's the most technically complex time travel film ever made." },
    { q: 'Why is Primer so confusing?', a: "Its ultra-low budget indie approach deliberately omits exposition, requiring viewers to piece together multiple timeline iterations and paradoxes." },
    { q: 'Who made Primer?', a: "Shane Carruth wrote, directed, produced, starred in, and composed the music—all on a $7,000 budget." },
    { q: 'Is the science accurate?', a: "Relatively—Carruth grounded it in plausible physics concepts, avoiding typical Hollywood time travel tropes for rigorous scientific speculation." },
    { q: 'How many viewings does it take?', a: "Most viewers need 3-5 viewings with timeline diagrams to fully grasp the layered paradoxes and character duplicates." }
  ],
  "12 Monkeys": [
    { q: 'What is 12 Monkeys about?', a: "A convict is sent back in time to gather information about a virus that devastated humanity. Terry Gilliam's dark, dystopian masterpiece questions sanity and fate." },
    { q: 'Who stars in 12 Monkeys?', a: "Bruce Willis plays the time-traveling convict, with Brad Pitt earning an Oscar nomination for his unhinged performance as mental patient Jeffrey Goines." },
    { q: 'Is time travel possible in 12 Monkeys?', a: "The film suggests time is immutable—travelers can't change the past, only fulfill it, exploring predestination and the futility of altering fate." },
    { q: 'What inspired the film?', a: "Loosely based on Chris Marker's experimental short film 'La Jetée' (1962), reinterpreting its haunting time loop narrative." },
    { q: 'What themes does it explore?', a: "Madness vs. reality, the inescapable nature of destiny, memory, trauma, and humanity's self-destructive tendencies." }
  ],
  "Donnie Darko": [
    { q: 'What is Donnie Darko about?', a: "A troubled teenager receives visions from a mysterious rabbit figure, leading him through parallel universes, time loops, and existential choices about sacrifice." },
    { q: 'Who directed Donnie Darko?', a: "Richard Kelly's debut film became a cult phenomenon despite initial box office failure, celebrated for its ambitious, enigmatic storytelling." },
    { q: 'What is Frank the Rabbit?', a: "Frank is a figure from a tangent timeline who guides Donnie to prevent a catastrophic dimensional collapse through ultimate self-sacrifice." },
    { q: 'Is it a time loop movie?', a: "Yes—involving parallel timelines and tangent universes that must be corrected, with Donnie caught between multiple realities." },
    { q: 'Why is it so beloved?', a: "Its blend of teen angst, cosmic horror, '80s nostalgia, philosophical depth, and haunting atmosphere created an enduring cult classic." }
  ],
  "Groundhog Day": [
    { q: 'What is Groundhog Day about?', a: "A cynical weatherman relives the same day repeatedly in Punxsutawney, Pennsylvania, learning profound lessons about life, love, and self-improvement." },
    { q: 'Why is Groundhog Day iconic?', a: "It defined the time loop subgenre, influencing countless films while delivering both comedy and surprisingly deep existential philosophy." },
    { q: 'How many times does he repeat the day?', a: "Never explicitly stated—director Harold Ramis estimated 10 years, some analysts suggest 30-40 years based on skills Phil develops." },
    { q: 'What makes it work?', a: "Bill Murray's perfect performance balancing cynicism, despair, joy, and redemption, paired with sharp writing and genuine emotional growth." },
    { q: 'What themes does it explore?', a: "Self-improvement, the meaning of life, love, redemption, and whether change comes from external circumstances or internal growth." }
  ],
  "Timecrimes": [
    { q: 'What is Timecrimes about?', a: "A man accidentally travels back one hour, triggering a tightly-wound causality loop where his actions create the very events he's trying to prevent." },
    { q: 'Who made Timecrimes?', a: "Spanish director Nacho Vigalondo crafted this suspenseful indie thriller on a modest budget with ingenious plotting and claustrophobic tension." },
    { q: 'Why is it so effective?', a: "Its short timeframe (one hour loops) and limited locations create relentless momentum as each iteration reveals new layers of the paradox." },
    { q: 'Is it similar to Primer?', a: "Both are low-budget, cerebral time travel thrillers, but Timecrimes is more accessible while maintaining intricate causal loops." },
    { q: 'What makes it unique?', a: "The film perfectly demonstrates the 'predestination paradox'—every attempt to change events only ensures they happen exactly as observed." }
  ]
};

const TimeTravelSEOFAQSection = ({ movie }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const title = movie.Title;
  const faqs = timeTravelMovieFAQs[title] || [
    { q: 'What makes this time travel film unique?', a: "Inventive temporal mechanics, compelling characters, and thought-provoking paradoxes make this a must-watch for sci-fi fans." },
    { q: 'Where can I watch this film?', a: "Check major streaming platforms in your region for availability." },
    { q: 'Who directed this movie?', a: "A visionary filmmaker whose unique approach to time travel storytelling sets this film apart." }
  ];

  return (
    <motion.section
      className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-700/50"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <h2 className="text-xl sm:text-2xl font-light text-blue-300 mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
        <Clock size={20} className="sm:w-6 sm:h-6" />
        <span className="hidden sm:inline">Frequently Asked Questions About {title}</span>
        <span className="sm:hidden">FAQ About {title}</span>
      </h2>
      <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
        Explore the time-bending mechanics, paradoxes, and storytelling genius behind {title}.
      </p>
      <div className="space-y-4 sm:space-y-6">
        {faqs.map((faq, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-800/30 rounded-xl p-4 sm:p-6 border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <h3 className="text-base sm:text-lg font-medium text-blue-200 mb-3 sm:mb-4 leading-relaxed">
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

export default TimeTravelSEOFAQSection;
