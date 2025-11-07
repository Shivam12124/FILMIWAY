// components/MysteryThrillerSEOFAQSection.js - CORRECTED ALL 10 MYSTERY THRILLER FILMS
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';

const mysteryThrillerMovieFAQs = {
  "Se7en": [
    { q: 'What is the core premise of Se7en?', a: "Se7en follows two detectives tracking a serial killer who uses the seven deadly sins as motives, immersing audiences in a rain-drenched world of moral rot and tightly controlled suspense." },
    { q: 'Is Se7en known for its ending?', a: "The ending of Se7en is one of the most shocking in thriller history—delivering a devastating twist involving a mysterious box, which cements the film's reputation as a true psychological nightmare." },
    { q: 'Who directed Se7en?', a: "The film was directed by David Fincher, whose mastery of darkness, atmosphere, and psychological detail shaped Se7en's relentless tension." },
    { q: 'Was Se7en critically acclaimed?', a: "Se7en was both a commercial and critical triumph, praised for its performances, visual style, and haunting narrative—it remains a staple of the mystery thriller genre." },
    { q: 'What themes define Se7en?', a: "Major themes include the nature of sin, justice versus vengeance, institutional failure, and the challenge of maintaining hope in a corrupt world." }
  ],
  "Shutter Island": [
    { q: 'What is Shutter Island\'s premise?', a: "U.S. Marshal Teddy Daniels investigates a missing patient from an island asylum for the criminally insane—but nothing is as it seems in this psychological labyrinth." },
    { q: 'Who directed Shutter Island?', a: "Martin Scorsese crafts an atmospheric psychological thriller that blurs reality and delusion through masterful visual storytelling and gothic cinematography." },
    { q: 'What makes the twist effective?', a: "Subtle clues throughout reward attentive viewers while the reveal completely reframes the protagonist's entire journey, mental state, and everything witnessed." },
    { q: 'How does the setting enhance the mystery?', a: "The isolated island asylum creates claustrophobic paranoia—gothic architecture and stormy weather amplify psychological unease and mounting dread." },
    { q: 'What themes does it explore?', a: "Trauma, guilt, mental illness, the fragility of reality, and post-war PTSD anchor this thriller in profound psychological territory." }
  ],
  "Prisoners": [
    { q: 'What is Prisoners about?', a: "When his daughter disappears, a desperate father takes matters into his own hands while a detective races to solve the case through proper investigative channels." },
    { q: 'Who stars in Prisoners?', a: "Hugh Jackman and Jake Gyllenhaal deliver powerhouse performances as the father and detective, supported brilliantly by Viola Davis and Paul Dano." },
    { q: 'What moral questions does it raise?', a: "The film explores how far someone would go to protect family, torture's morality, and the blurred line between justice and vengeance." },
    { q: 'Is it based on true events?', a: "While fictional, it taps into very real fears about child abduction and the limits of law enforcement in desperate situations." },
    { q: 'How does the pacing contribute?', a: "Denis Villeneuve's deliberate, methodical pacing builds unbearable tension while allowing complex character development and moral ambiguity to unfold." }
  ],
  "Zodiac": [
    { q: 'What is Zodiac about?', a: "Zodiac follows journalists and detectives obsessively investigating the infamous Zodiac Killer who terrorized San Francisco in the late 1960s and early 1970s." },
    { q: 'Is Zodiac based on true events?', a: "Yes—meticulously researched from Robert Graysmith's books, it portrays the real unsolved case with chilling procedural accuracy and historical authenticity." },
    { q: 'Who directed Zodiac?', a: "David Fincher brings his signature meticulous style to this slow-burn investigation thriller that prioritizes realism over sensationalism." },
    { q: 'How does the film handle the unsolved mystery?', a: "Rather than providing false closure, Zodiac explores the psychological toll of obsession with unanswered questions—making it deeply haunting and realistic." },
    { q: 'What makes the cinematography unique?', a: "Fincher uses period-accurate visuals and lighting to recreate 1970s San Francisco while maintaining contemporary pacing and editing techniques." }
  ],
  "Gone Girl": [
    { q: 'What is Gone Girl\'s central mystery?', a: "A woman disappears on her anniversary, making her husband the prime suspect—but narrative shifts reveal shocking layers of manipulation and calculated deceit." },
    { q: 'Who directed and wrote Gone Girl?', a: "David Fincher directed from Gillian Flynn's screenplay adapting her own bestselling novel—a perfect thriller collaboration of twisted minds." },
    { q: 'What makes the narrative structure unique?', a: "Dual perspectives and timeline shifts gradually reveal both characters' manipulations, keeping audiences constantly off-balance and questioning everything." },
    { q: 'What themes does it explore?', a: "Marriage as performance, media manipulation, misogyny, sociopathy, and the construction of public personas anchor this psychological thriller." },
    { q: 'How did it influence pop culture?', a: "The 'cool girl' monologue and twisty narrative became cultural touchstones—inspiring countless psychological thrillers and think pieces since release." }
  ],
  "Memories of Murder": [
    { q: 'What inspired Memories of Murder?', a: "Based on Korea's real Hwaseong serial murders, it follows detectives struggling with limited resources, incompetence, and their own psychological collapse during the 1980s." },
    { q: 'Who directed this film?', a: "Bong Joon-ho blends police procedural with dark comedy and social critique—years before his Oscar triumph with Parasite, showcasing his genre mastery." },
    { q: 'Why is the ending famous?', a: "Its ambiguous, haunting conclusion left audiences in uncertainty—made more powerful when the real case was finally solved in 2019, decades later." },
    { q: 'What themes does it explore?', a: "Institutional failure, class divide, the limits of justice, police incompetence, and how trauma affects investigators drive this masterful thriller." },
    { q: 'How does it differ from American detective films?', a: "Focuses more on procedural failure and character flaws than heroic solving—creating raw, realistic frustration instead of manufactured closure." }
  ],
  "The Invisible Guest": [
    { q: 'What is The Invisible Guest about?', a: "A businessman accused of murder hires a prestigious lawyer to find loopholes in his case, but nothing is as straightforward as it seems in this Spanish thriller masterpiece." },
    { q: 'What makes this Spanish thriller unique?', a: "Oriol Paulo crafts an intricate puzzle box narrative with multiple reveals, flashbacks, and perspective shifts that constantly recontextualize everything." },
    { q: 'How complex is the plot?', a: "The film features layers upon layers of deception, with each reveal opening new questions—requiring full attention to track all twists." },
    { q: 'Is it dialogue-heavy?', a: "Yes—the confined setting and interrogation format make dialogue central, but the performances and revelations maintain riveting tension throughout." },
    { q: 'What themes does it explore?', a: "Guilt, moral corruption, the price of lies, privilege, and how far people will go to protect their reputations drive the psychological complexity." }
  ],
  "Burning": [
    { q: 'What is Burning about?', a: "A man becomes increasingly suspicious of his childhood friend's relationship with a mysterious and wealthy suitor, leading to existential mystery and mounting paranoia." },
    { q: 'Who directed Burning?', a: "Lee Chang-dong, one of South Korea's master filmmakers, adapts Haruki Murakami's story into a slow-burn psychological mystery thriller." },
    { q: 'What makes Burning different from typical thrillers?', a: "It's deliberately ambiguous and meditative—more interested in class tension, jealousy, and existential dread than conventional plot resolution." },
    { q: 'How does it handle mystery?', a: "Questions remain unanswered intentionally—the film explores obsession and uncertainty rather than providing neat explanations or closure." },
    { q: 'What themes does it explore?', a: "Class inequality, male rage, jealousy, alienation in modern society, and the unknowability of other people anchor this enigmatic thriller." }
  ],
  "The Game": [
    { q: 'What is the premise of The Game?', a: "A wealthy banker's world unravels when a mysterious company thrusts him into a reality-bending 'game'—leaving him unable to tell what's staged and what's real." },
    { q: 'Who directed The Game?', a: "David Fincher explores paranoia and existential angst through labyrinthine plot twists that keep viewers guessing until the very last moment." },
    { q: 'How does the film blur reality?', a: "The Game constantly undermines the protagonist's sense of control—viewers must question every motive, character, and clue until the shocking conclusion." },
    { q: 'What genre is it?', a: "Psychological thriller with elements of dark satire on privilege and isolation—using suspense for existential reflection on modern malaise." },
    { q: 'How was it received?', a: "Widely praised for its relentless pace, thought-provoking premise, and unexpected conclusions that reframe the entire viewing experience." }
  ],
  "Identity": [
    { q: 'What is Identity about?', a: "Stranded strangers at a Nevada motel are being killed off one by one in an Agatha Christie-style setup, and they discover they all share a mysterious connection." },
    { q: 'What makes Identity unique?', a: "The film combines classic locked-room mystery with a shocking psychological twist that completely recontextualizes the entire story's reality." },
    { q: 'Who stars in Identity?', a: "John Cusack leads an ensemble cast including Ray Liotta, Amanda Peet, and John Hawkes in this claustrophobic mystery thriller." },
    { q: 'How does the mystery unfold?', a: "Through mounting paranoia and elimination, characters (and viewers) piece together connections while racing against an unseen killer." },
    { q: 'What is the twist about?', a: "Without spoiling, the film's psychological reveal transforms understanding of who the characters are and the nature of the reality presented throughout." }
  ]
};

const MysteryThrillerSEOFAQSection = ({ movie }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const title = movie.Title;
  const faqs = mysteryThrillerMovieFAQs[title] || [
    { q: 'What makes this mystery thriller unique?', a: "Intricate plotting, brilliant detective work, and shocking revelations make this a must-watch for mystery fans." },
    { q: 'Where can I watch this film?', a: "Check major streaming platforms in your region for availability." },
    { q: 'Who directed this movie?', a: "A renowned filmmaker whose vision makes the film stand out in the mystery thriller genre." }
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
        Deep dive into {title} with insider knowledge, production details, and insights about this brilliant mystery thriller.
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

export default MysteryThrillerSEOFAQSection;
