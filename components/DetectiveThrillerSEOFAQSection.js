// components/DetectiveThrillerSEOFAQSection.js

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';

const detectiveThrillerMovieFAQs = {
  "Se7en": [
    { q: 'What is the core premise of Se7en?', a: "Se7en follows two highly distinct detectives tracking a brilliant serial killer who uses the seven deadly sins as his perverse motives, immersing audiences in a bleak, rain-drenched world of inescapable moral rot and tightly controlled suspense." },
    { q: 'Is Se7en known for its ending?', a: "The ending of Se7en is arguably one of the most shocking and visceral in modern thriller history—delivering a sudden, devastating twist involving a mysterious box, which instantly cemented the film's legacy as a true psychological nightmare." },
    { q: 'Who directed Se7en?', a: "The film was masterfully directed by David Fincher, whose signature mastery of oppressive darkness, pervasive atmosphere, and precise psychological detail shaped Se7en's unrelenting and relentless tension." },
    { q: 'Was Se7en critically acclaimed?', a: "Se7en was both a massive commercial success and a critical triumph upon its release, widely praised for its powerhouse performances, visual style, and haunting, uncompromising narrative—it remains a cornerstone of the mystery thriller genre." },
    { q: 'What themes define Se7en?', a: "Major, complex themes explored include the inherent nature of sin, the conflict between legal justice and personal vengeance, the failure of modern institutions, and the ultimate challenge of maintaining any sense of hope in a profoundly corrupt world." }
  ],
  "Zodiac": [
    { q: 'What is Zodiac about?', a: "Zodiac meticulously follows the lives of newspaper journalists and police detectives who become utterly and dangerously obsessed with investigating the infamous, real-life Zodiac Killer, who terrorized the San Francisco Bay Area in the late 1960s and early 1970s with cryptic ciphers." },
    { q: 'Is Zodiac based on true events?', a: "Yes—the film is meticulously researched and faithfully adapted primarily from Robert Graysmith's non-fiction books, portraying the real, still-unsolved case with chilling procedural accuracy and rich historical authenticity across decades." },
    { q: 'Who directed Zodiac?', a: "David Fincher once again brings his signature, meticulous style to this slow-burn investigation thriller, opting to prioritize realistic detail and psychological dread over sensationalism or easy answers." },
    { q: 'How does Zodiac treat the unsolved mystery?', a: "Crucially, rather than manufacturing false closure or a quick reveal, Zodiac focuses intensely on exploring the psychological toll of obsession with truly unanswered questions—making it a deeply haunting, authentic, and realistic character study." },
    { q: 'What is unique about its cinematography?', a: "Fincher utilizes period-accurate visuals and lighting to brilliantly recreate the look and feel of 1970s San Francisco, all while maintaining his contemporary, driving pacing and crisp editing techniques for modern intensity." }
  ],
  "Prisoners": [
    { q: 'What is Prisoners about?', a: "When his young daughter and her friend vanish without a trace, a highly desperate father takes the investigation and retribution into his own violent hands, while a methodical, dedicated detective races to solve the case through proper, legal investigative channels before time runs out." },
    { q: 'Who stars in Prisoners?', a: "Hugh Jackman and Jake Gyllenhaal deliver career-defining, raw powerhouse performances as the agonized father and the obsessive detective, supported brilliantly by the talents of Viola Davis and Paul Dano." },
    { q: 'What moral questions does it raise?', a: "The film fearlessly explores difficult moral territory, questioning how far a person should go to protect their family, the ethics and effectiveness of torture, and the dangerously blurred line between seeking justice and exacting personal vengeance." },
    { q: 'Is it based on true events?', a: "While entirely fictional, the story taps into very deep, primal fears about child abduction and the frustrating perceived limits of law enforcement when faced with such desperate, high-stakes situations." },
    { q: 'How does the pacing contribute?', a: "Director Denis Villeneuve's notably deliberate, methodical pacing successfully builds an almost unbearable level of sustained tension while simultaneously allowing complex character development, moral ambiguity, and the intricate mystery to slowly and painfully unfold." }
  ],
  "The Secret in Their Eyes": [
    { q: 'What is the film’s premise?', a: "A retired legal counselor writes a novel based on a haunting, unresolved rape and murder case from his past in Argentina, forcing him to confront long-suppressed memories of obsession and enduring love." },
    { q: 'Which awards did it win?', a: "It won the highly coveted Academy Award for Best Foreign Language Film in 2010—cementing its global reputation as a landmark of modern Argentine cinema and a powerful thriller." },
    { q: 'What themes are explored?', a: "Major themes include the relentless pursuit of justice across decades, the burden of unresolved trauma, the nature of enduring love, and the tense conflict between personal, primal vengeance and slow, legal process." },
    { q: 'Who directed it?', a: "The film was powerfully directed by Juan José Campanella, who masterfully blended the elements of crime procedural, passionate romance, and gripping drama into a deeply moving and shocking thriller." },
    { q: 'How does it handle time?', a: "The narrative expertly and frequently weaves between the investigation in the 1970s and the present day, allowing the passage of time to deepen the emotional impact and the profound sense of loss and justice delayed." }
  ],
  "Memories of Murder": [
    { q: 'What inspired Memories of Murder?', a: "It is directly based on Korea's infamous, real-life Hwaseong serial murders, following detectives who struggle with severely limited resources, institutional incompetence, and their own psychological collapse during the economically and politically troubled 1980s." },
    { q: 'Who directed this film?', a: "Visionary director Bong Joon-ho seamlessly blends intense police procedural with elements of dark comedy and pointed social critique—showcasing his genre mastery years before his global Oscar triumph with Parasite." },
    { q: 'Why is the ending famous?', a: "Its ambiguous, highly haunting conclusion left international audiences in a state of profound uncertainty—a feeling made even more powerful when the real-life case was finally solved in 2019, more than three decades later." },
    { q: 'What themes does it explore?', a: "It critically explores themes of institutional failure, the socio-economic class divide, the harsh limits of justice, police incompetence, and how unresolved trauma affects investigators over long periods of time." },
    { q: 'How does it differ from American detective films?', a: "It deviates by focusing less on heroic police solving and more on procedural failure, systemic limitations, and character flaws—creating a raw, realistic sense of frustration rather than manufactured Hollywood closure." }
  ],
  "The Chaser": [
    { q: 'What is The Chaser about?', a: "A disgraced former detective, who now works as a pimp, races desperately against time to find two of his missing working girls while unknowingly unraveling the deadly trail left by a brutal, active serial killer." },
    { q: 'How does the film build tension?', a: "Its taut pacing, relentless street chases, and raw, visceral, gritty storytelling make it a standout, high-octane example of modern Korean thriller cinema." },
    { q: 'What themes are central?', a: "The film focuses on deep-seated corruption, personal desperation, and the systemic failure of police institutions to effectively protect vulnerable victims." },
    { q: 'Is it based on true events?', a: "It was inspired by the real serial killer Yoo Young-chul in Korea, and the narrative highlights the sometimes fatal inefficiency and jurisdictional issues of the police force." },
    { q: 'Who directed it?', a: "The film was directed by Na Hong-jin, marking his powerful and brutal breakthrough into significant international critical acclaim and recognition." }
  ],
  "Mystic River": [
    { q: 'What is Mystic River about?', a: "The murder of a daughter reunites three childhood friends—a victim, a detective, and a suspect—leading to a dark, complex investigation saturated with long-held secrets, suspicion, and deep-seated guilt." },
    { q: 'Who directed Mystic River?', a: "Esteemed filmmaker Clint Eastwood directed this emotionally intense psychological drama and crime thriller, focusing heavily on character and moral consequence." },
    { q: 'What themes does it explore?', a: "It explores the indelible consequences of childhood trauma, the binding yet fragile nature of friendship, corrosive guilt, and the generational fallout of past sins." },
    { q: 'Who stars in it?', a: "An incredible ensemble cast including Oscar-winners Sean Penn and Tim Robbins, alongside Kevin Bacon, headline the deeply moving and tragic story." },
    { q: 'How was the film received?', a: "It was highly critically acclaimed for its powerful performances and deep emotional resonance, winning multiple major awards, including two Academy Awards." }
  ],
  "Marshland": [
    { q: 'What is Marshland about?', a: "Set in the remote, visually stunning marshlands of post-Franco Spain, two ideologically opposed detectives investigate a brutal double murder in a region shrouded in local secrets and lingering political tension." },
    { q: 'What distinguishes Marshland?', a: "It is distinguished by its heavy atmospheric noir style, stunning aerial cinematography of the swamps, and its subtle, yet potent, portrayal of Spain's unresolved historical and political trauma." },
    { q: 'Who directed it?', a: "The film was directed by Alberto Rodríguez, who expertly combines the procedural intensity of a crime thriller with sharp, relevant social and political commentary." },
    { q: 'What themes does it cover?', a: "It covers themes of lingering political unrest, the silence of deeply buried societal secrets, corruption, and the shadows that the traumatic events of the past cast upon the present." },
    { q: 'How was it received?', a: "Marshland was critically praised, winning ten Goya Awards (Spain's equivalent of the Oscars), establishing it as a top Spanish thriller of the 2010s." }
  ],
  "Fargo": [
    { q: 'What is Fargo about?', a: "A desperate, heavily indebted car salesman hires two incompetent criminals to kidnap his own wife in snowy Minnesota, initiating a violent crime gone wrong that entangles a kind, pregnant police chief." },
    { q: 'Is Fargo a comedy?', a: "It is famous for blending pitch-black dark comedy with the procedural intensity and sudden violence of a crime thriller, creating a uniquely unsettling and memorable tone." },
    { q: 'Who created Fargo?', a: "The visionary filmmaking duo Joel and Ethan Coen crafted this cult classic, known for its peculiar characters, memorable dialogue, and distinct visual tone." },
    { q: 'What themes are explored?', a: "Core themes include greed, profound deception, the tragic absurdity of poorly planned crime, and the contrast between simple, genuine good and the sheer banality of evil." },
    { q: 'Has it influenced other media?', a: "Yes—it inspired an Emmy-winning, critically acclaimed, long-running television series that expanded the film's universe, along with numerous cultural parodies and cinematic homages." }
  ],
  "The Fugitive": [
    { q: 'What is The Fugitive about?', a: "Dr. Richard Kimble, wrongly convicted for his wife’s brutal murder, escapes custody following a spectacular train crash and is forced to pursue the real killer while simultaneously being hunted across the country." },
    { q: 'Who stars in The Fugitive?', a: "Harrison Ford leads the action thriller as the determined fugitive, while Tommy Lee Jones gives an Oscar-winning performance as the relentless and sharp-witted U.S. Marshal Samuel Gerard hunting him." },
    { q: 'How was the film received?', a: "It was a massive commercial success and was praised by critics for its non-stop, intense action sequences, its tight, suspenseful plotting, and the powerful chemistry between the two leads." },
    { q: 'What themes drive the story?', a: "The narrative is primarily driven by powerful themes of the quest for justice, unwavering personal perseverance, the constant evasion of authority, and the ultimate search for the painful, elusive truth." },
    { q: 'Did it inspire adaptations?', a: "It was a successful film adaptation of a classic 1960s TV series, and the film itself remains a benchmark for high-stakes action thrillers and is often imitated." }
  ]
};

const DetectiveThrillerSEOFAQSection = ({ movie }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const title = movie.Title;
  const faqs = detectiveThrillerMovieFAQs[title] || [
    { q: 'What makes this detective thriller unique?', a: "Detailed plotting, immersive detective work, and compelling character dynamics define this film." },
    { q: 'Where can I watch this film?', a: "Available on major streaming platforms; check availability in your region." },
    { q: 'Who directed this movie?', a: "Directed by a distinguished filmmaker known for craft in thriller genre." }
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
        Deep dive into {title} with insider knowledge, production details, and insights about this brilliant detective thriller.
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

export default DetectiveThrillerSEOFAQSection;
