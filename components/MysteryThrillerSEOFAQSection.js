// components/MysteryThrillerSEOFAQSection.js - CORRECTED ALL 10 MYSTERY THRILLER FILMS
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';

const mysteryThrillerMovieFAQs = {
  "Se7en": [
    { q: 'What is the core premise of Se7en?', a: "Se7en follows two highly distinct detectives tracking a brilliant serial killer who uses the seven deadly sins as his perverse motives, immersing audiences in a bleak, rain-drenched world of inescapable moral rot and tightly controlled suspense." },
    { q: 'Is Se7en known for its ending?', a: "The ending of Se7en is arguably one of the most shocking and visceral in modern thriller history—delivering a sudden, devastating twist involving a mysterious box, which instantly cemented the film's legacy as a true psychological nightmare." },
    { q: 'Who directed Se7en?', a: "The film was masterfully directed by David Fincher, whose signature mastery of oppressive darkness, pervasive atmosphere, and precise psychological detail shaped Se7en's unrelenting and relentless tension." },
    { q: 'Was Se7en critically acclaimed?', a: "Se7en was both a massive commercial success and a critical triumph upon its release, widely praised for its powerhouse performances, groundbreaking visual style, and haunting, uncompromising narrative—it remains a cornerstone of the mystery thriller genre." },
    { q: 'What themes define Se7en?', a: "Major, complex themes explored include the inherent nature of sin, the conflict between legal justice and personal vengeance, the failure of modern institutions, and the ultimate challenge of maintaining any sense of hope in a profoundly corrupt world." }
  ],
  "Shutter Island": [
    { q: 'What is Shutter Island\'s premise?', a: "U.S. Marshal Teddy Daniels travels to a remote, gothic island asylum for the criminally insane to investigate the perplexing disappearance of a patient—but he soon finds that the island’s secrets and his own past create a psychological labyrinth where nothing is remotely trustworthy." },
    { q: 'Who directed Shutter Island?', a: "Acclaimed filmmaker Martin Scorsese crafts this atmospheric and deeply psychological thriller, successfully blurring the lines between external reality and internal delusion through masterful visual storytelling and pervasive gothic cinematography." },
    { q: 'What makes the twist effective?', a: "The film is structured so that subtle clues and narrative inconsistencies reward highly attentive viewers, while the final, shocking reveal completely reframes the protagonist's entire journey, mental state, and everything the audience has witnessed up to that point." },
    { q: 'How does the setting enhance the mystery?', a: "The isolated island asylum, known as Ashecliffe, creates a palpable sense of claustrophobia and paranoia. The severe gothic architecture and stormy, relentless weather amplify the psychological unease and mounting, inescapable dread." },
    { q: 'What themes does it explore?', a: "Profound themes of trauma, self-inflicted guilt, the nature of mental illness, the alarming fragility of subjective reality, and the lasting effects of post-war PTSD firmly anchor this thriller in dense psychological territory." }
  ],
  "Prisoners": [
    { q: 'What is Prisoners about?', a: "When his young daughter and her friend vanish without a trace, a highly desperate father takes the investigation and retribution into his own violent hands, while a methodical, dedicated detective races to solve the case through proper, legal investigative channels before time runs out." },
    { q: 'Who stars in Prisoners?', a: "Hugh Jackman and Jake Gyllenhaal deliver career-defining, raw powerhouse performances as the agonized father and the obsessive detective, supported brilliantly by the talents of Viola Davis and Paul Dano." },
    { q: 'What moral questions does it raise?', a: "The film fearlessly explores difficult moral territory, questioning how far a person should go to protect their family, the ethics and effectiveness of torture, and the dangerously blurred line between seeking justice and exacting personal vengeance." },
    { q: 'Is it based on true events?', a: "While entirely fictional, the story taps into very deep, primal fears about child abduction and the frustrating perceived limits of law enforcement when faced with such desperate, high-stakes situations." },
    { q: 'How does the pacing contribute?', a: "Director Denis Villeneuve's notably deliberate, methodical pacing successfully builds an almost unbearable level of sustained tension while simultaneously allowing complex character development, moral ambiguity, and the intricate mystery to slowly and painfully unfold." }
  ],
  "Zodiac": [
    { q: 'What is Zodiac about?', a: "Zodiac meticulously follows the lives of newspaper journalists and police detectives who become utterly and dangerously obsessed with investigating the infamous, real-life Zodiac Killer, who terrorized the San Francisco Bay Area in the late 1960s and early 1970s with cryptic ciphers." },
    { q: 'Is Zodiac based on true events?', a: "Yes—the film is meticulously researched and faithfully adapted primarily from Robert Graysmith's non-fiction books, portraying the real, still-unsolved case with chilling procedural accuracy and rich historical authenticity across decades." },
    { q: 'Who directed Zodiac?', a: "David Fincher once again brings his signature, meticulous style to this slow-burn investigation thriller, opting to prioritize realistic detail and psychological dread over sensationalism or easy answers." },
    { q: 'How does the film handle the unsolved mystery?', a: "Crucially, rather than manufacturing false closure or a quick reveal, Zodiac focuses intensely on exploring the psychological toll of obsession with truly unanswered questions—making it a deeply haunting, authentic, and realistic character study." },
    { q: 'What makes the cinematography unique?', a: "Fincher utilizes period-accurate visuals and lighting to brilliantly recreate the look and feel of 1970s San Francisco, all while maintaining his contemporary, driving pacing and crisp editing techniques for modern intensity." }
  ],
  "Gone Girl": [
    { q: 'What is Gone Girl\'s central mystery?', a: "A seemingly perfect woman disappears on her wedding anniversary, quickly making her bewildered husband the primary suspect in the media circus—but a shocking mid-film narrative shift reveals deep layers of calculated manipulation and ruthless deceit at play." },
    { q: 'Who directed and wrote Gone Girl?', a: "David Fincher directed the film from Gillian Flynn's highly effective screenplay, which she adapted herself from her own bestselling novel—a truly perfect thriller collaboration of twisted, psychological minds." },
    { q: 'What makes the narrative structure unique?', a: "The structure utilizes dual perspectives (through diaries) and sharp timeline shifts that gradually reveal both main characters' profound manipulations, keeping audiences constantly off-balance, questioning reliability, and doubting everything." },
    { q: 'What themes does it explore?', a: "Major themes include marriage as a cynical public performance, rampant media manipulation, societal misogyny, the terrifying nature of sociopathy, and the conscious construction of public personas in the digital age." },
    { q: 'How did it influence pop culture?', a: "The unforgettable 'cool girl' monologue and the film's twisty, complex narrative instantly became cultural touchstones—inspiring countless subsequent psychological thrillers, books, and analytical think pieces since its release." }
  ],
  "Memories of Murder": [
    { q: 'What inspired Memories of Murder?', a: "It is directly based on Korea's infamous, real-life Hwaseong serial murders, following detectives who struggle with severely limited resources, institutional incompetence, and their own psychological collapse during the economically and politically troubled 1980s." },
    { q: 'Who directed this film?', a: "Visionary director Bong Joon-ho seamlessly blends intense police procedural with elements of dark comedy and pointed social critique—showcasing his genre mastery years before his global Oscar triumph with Parasite." },
    { q: 'Why is the ending famous?', a: "Its ambiguous, highly haunting conclusion left international audiences in a state of profound uncertainty—a feeling made even more powerful when the real-life case was finally solved in 2019, more than three decades later." },
    { q: 'What themes does it explore?', a: "It critically explores themes of institutional failure, the socio-economic class divide, the harsh limits of justice, police incompetence, and how unresolved trauma affects investigators over long periods of time." },
    { q: 'How does it differ from American detective films?', a: "It deviates by focusing less on heroic police solving and more on procedural failure, systemic limitations, and character flaws—creating a raw, realistic sense of frustration rather than manufactured Hollywood closure." }
  ],
  "The Invisible Guest": [
    { q: 'What is The Invisible Guest about?', a: "A highly successful businessman, recently charged with the murder of his mistress, hires a prestigious and ruthlessly effective lawyer to find loopholes in his case—but nothing is as straightforward or truthful as it seems in this Spanish thriller masterpiece." },
    { q: 'What makes this Spanish thriller unique?', a: "Director Oriol Paulo crafts an extremely intricate puzzle box narrative, complete with multiple rapid-fire reveals, detailed flashbacks, and critical perspective shifts that constantly recontextualize every piece of information presented." },
    { q: 'How complex is the plot?', a: "The film features layers upon layers of deliberate deception, with each major reveal opening up entirely new questions—it demands the viewer's full, unwavering attention to accurately track all the sudden and intense twists." },
    { q: 'Is it dialogue-heavy?', a: "Yes—the deliberately confined setting and primary interrogation format make dialogue absolutely central to the plot, but the intensity of the performances and the pace of the revelations maintain riveting, high-stakes tension throughout." },
    { q: 'What themes does it explore?', a: "Profound themes of guilt, deep moral corruption, the personal price of lies, the power of privilege, and how far ordinary people will go to protect their public reputations drive the story's psychological complexity." }
  ],
  "Burning": [
    { q: 'What is Burning about?', a: "A young, working-class man becomes increasingly suspicious and jealous of his childhood friend's relationship with a mysterious, smooth, and wealthy suitor, leading to an open-ended, existential mystery and mounting, suffocating paranoia." },
    { q: 'Who directed Burning?', a: "Lee Chang-dong, one of South Korea's most acclaimed master filmmakers, adapts a short story by Haruki Murakami into a profoundly ambiguous, slow-burn psychological mystery thriller." },
    { q: 'What makes Burning different from typical thrillers?', a: "It is deliberately highly ambiguous and meditative—the film is more interested in exploring deep class tension, unchecked male jealousy, and pervading existential dread than it is in providing a conventional plot resolution." },
    { q: 'How does it handle mystery?', a: "Crucially, the central questions remain intentionally unanswered—the film's focus is on exploring the destructive nature of personal obsession and the burden of uncertainty rather than providing neat explanations or convenient closure." },
    { q: 'What themes does it explore?', a: "It explores the crushing weight of class inequality, silent male rage, corrosive jealousy, deep alienation in modern society, and the ultimate unknowability of other people, anchoring this enigmatic thriller." }
  ],
  "The Game": [
    { q: 'What is the premise of The Game?', a: "Nicholas Van Orton, a cold, immensely wealthy banker, finds his highly structured world suddenly unraveling when a mysterious company thrusts him into a reality-bending, immersive 'game'—leaving him utterly unable to distinguish what is staged and what is a genuine threat." },
    { q: 'Who directed The Game?', a: "David Fincher explores themes of isolation, paranoia, and existential angst through a labyrinthine plot constructed of constantly shifting twists that keep viewers desperately guessing until the very last, shocking moment." },
    { q: 'How does the film blur reality?', a: "The Game constantly and systematically undermines the protagonist's control and perception—viewers are forced to question every motive, every character, and every supposed clue until the shocking final conclusion recontextualizes the entire experience." },
    { q: 'What genre is it?', a: "It is primarily a psychological thriller, but it also contains strong elements of dark satire regarding privilege and isolation, skillfully using suspense as a vehicle for existential reflection on modern malaise." },
    { q: 'How was it received?', a: "The film was widely praised by critics and audiences alike for its unrelenting pace, its truly thought-provoking central premise, and its unexpected conclusions that fundamentally reframe the entire viewing experience upon reflection." }
  ],
  "Identity": [
    { q: 'What is Identity about?', a: "Ten seemingly random strangers, stranded together at a remote Nevada motel during a fierce storm, begin to be killed off one by one in a classic Agatha Christie-style setup, only to discover that they all share a mysterious, dark connection." },
    { q: 'What makes Identity unique?', a: "The film brilliantly combines the tense atmosphere of a classic locked-room mystery with a shocking, inventive psychological twist that completely and permanently recontextualizes the entire story's reality and all the events witnessed." },
    { q: 'Who stars in Identity?', a: "John Cusack leads a strong ensemble cast including talents like Ray Liotta, Amanda Peet, and John Hawkes in this claustrophobic, high-concept mystery thriller." },
    { q: 'How does the mystery unfold?', a: "Through mounting paranoia, suspicion, and a high-stakes process of elimination, the characters (and viewers) piece together hidden connections while racing against an unseen, murderous force in the dark." },
    { q: 'What is the twist about?', a: "Without revealing the shocking detail, the film's psychological reveal fundamentally transforms the audience's understanding of who the characters are, their relationship to each other, and the very nature of the reality presented throughout the motel sequence." }
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
