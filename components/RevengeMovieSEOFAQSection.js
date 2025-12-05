// components/RevengeMovieSEOFAQSection.js

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';

const revengeMovieFAQs = {
  "Oldboy": [
    { q: 'What is the core premise of Oldboy?', a: "Oldboy follows Oh Dae-su, an ordinary man inexplicably imprisoned in a sealed hotel room for fifteen brutal years with no explanation, who is then suddenly released and embarks on a violent quest to discover who imprisoned him and why—leading to one of cinema's most devastating revelations." },
    { q: 'Why is Oldboy considered a masterpiece?', a: "The film is renowned for its iconic single-take corridor fight sequence, its masterful blend of visceral action and psychological horror, and its shocking twist ending that completely recontextualizes the entire narrative—making it a cornerstone of modern revenge cinema." },
    { q: 'Who directed Oldboy?', a: "South Korean visionary Park Chan-wook directed this genre-defining film as the second installment in his acclaimed Vengeance Trilogy, showcasing his signature style of stylized violence and moral complexity." },
    { q: 'Is Oldboy part of a trilogy?', a: "Yes—it forms the centerpiece of Park Chan-wook's Vengeance Trilogy, alongside Sympathy for Mr. Vengeance and Lady Vengeance, though the films are thematically connected rather than narratively linked." },
    { q: 'What themes define Oldboy?', a: "The film explores profound themes of revenge's psychological toll, the futility of vengeance, the nature of guilt and redemption, and how the pursuit of revenge can destroy both the avenger and the target in equally devastating ways." }
  ],
  "Gladiator": [
    { q: 'What is Gladiator about?', a: "Gladiator follows Maximus Decimus Meridius, Rome's greatest general, who is betrayed by the power-hungry prince Commodus and reduced to slavery as a gladiator—transforming from a broken slave into the people's champion seeking vengeance against the emperor who murdered his family." },
    { q: 'Who directed Gladiator?', a: "Ridley Scott directed this epic revenge saga, bringing his signature visual grandeur and meticulous attention to historical detail while crafting an intensely personal story of loss and retribution." },
    { q: 'What awards did Gladiator win?', a: "The film won five Academy Awards including Best Picture and Best Actor for Russell Crowe's powerful performance, cementing its status as a modern epic masterpiece and reviving the historical epic genre." },
    { q: 'What makes the revenge satisfying?', a: "The film delivers cathartic satisfaction by contrasting Maximus's noble character with Commodus's corruption, building to an arena confrontation where personal vengeance intersects with public justice and the restoration of Rome's honor." },
    { q: 'Is Gladiator historically accurate?', a: "While inspired by historical figures and events, the film takes substantial creative liberties with Roman history—prioritizing emotional truth and dramatic impact over strict historical accuracy to serve its revenge narrative." }
  ],
  "Unforgiven": [
    { q: 'What is Unforgiven about?', a: "Unforgiven follows William Munny, a reformed gunslinger and widowed pig farmer, who reluctantly returns to his violent past one last time to collect a bounty for avenging a disfigured prostitute—confronting both his own dark legacy and a sadistic sheriff." },
    { q: 'Who directed and starred in Unforgiven?', a: "Clint Eastwood both directed and starred in this revisionist Western masterpiece, delivering a career-defining performance that deconstructs the mythology of the Old West and his own iconic screen persona." },
    { q: 'What makes Unforgiven different from typical Westerns?', a: "Unlike glorified Hollywood Westerns, Unforgiven presents violence as ugly, consequences as permanent, and revenge as a morally corrupting force—stripping away romantic notions to reveal the brutal, unglamorous reality of frontier justice." },
    { q: 'What awards did it receive?', a: "The film won four Academy Awards including Best Picture and Best Director, with widespread critical acclaim for its mature, thoughtful deconstruction of Western genre conventions and the cost of violence." },
    { q: 'What themes does Unforgiven explore?', a: "Central themes include the impossibility of escaping one's violent past, the corrosive nature of revenge, the myth versus reality of the Old West, and how violence dehumanizes both perpetrator and victim." }
  ],
  "Braveheart": [
    { q: 'What is Braveheart about?', a: "Braveheart chronicles William Wallace, a 13th-century Scottish commoner who transforms from a peaceful farmer into a legendary warrior after English soldiers murder his secret wife—leading him to unite fractured Scottish clans in a full-scale war for independence." },
    { q: 'Who directed Braveheart?', a: "Mel Gibson directed and starred in this sweeping historical epic, crafting a visceral blend of intimate revenge tragedy and large-scale war spectacle that became a cultural phenomenon." },
    { q: 'How does personal revenge become national liberation?', a: "The film brilliantly escalates from Wallace's individual quest for vengeance into a broader fight for Scottish freedom—showing how personal tragedy can ignite revolutionary movements and inspire collective action against tyranny." },
    { q: 'What awards did Braveheart win?', a: "The film won five Academy Awards including Best Picture and Best Director, along with numerous other accolades for its epic scope, emotional power, and visceral battle sequences." },
    { q: 'Is Braveheart historically accurate?', a: "While inspired by the real William Wallace, the film takes significant historical liberties with dates, events, and characters—prioritizing emotional drama and mythic storytelling over strict historical documentation." }
  ],
  "The Prestige": [
    { q: 'What is The Prestige about?', a: "The Prestige follows two rival Victorian-era magicians whose friendship shatters after a tragic accident, spiraling into an obsessive, escalating rivalry where each man sacrifices everything—career, loved ones, and ultimately their lives—to destroy the other and create the perfect illusion." },
    { q: 'Who directed The Prestige?', a: "Christopher Nolan directed this intricate revenge thriller, employing his signature non-linear storytelling and thematic complexity to create a film that rewards multiple viewings with new revelations." },
    { q: 'What makes the revenge unique?', a: "Unlike physical violence, the revenge operates through professional sabotage, intellectual one-upmanship, and the destruction of each other's magical secrets—making it a cerebral, psychological battle rather than a visceral confrontation." },
    { q: 'What is the film\'s twist ending?', a: "The film's shocking finale reveals the horrifying extent of sacrifice both men made for revenge—with revelations about identity, cloning technology, and the true cost of obsession that completely reframe the entire narrative." },
    { q: 'What themes does it explore?', a: "Central themes include the destructive nature of obsession, the cost of revenge, the blurred line between illusion and reality, and how the pursuit of perfection can lead to moral corruption and self-destruction." }
  ],
  "The Revenant": [
    { q: 'What is The Revenant about?', a: "The Revenant follows frontiersman Hugh Glass who, after being mauled by a grizzly bear and left for dead by his companion who murdered his son, embarks on a grueling 200-mile survival journey through brutal 1820s wilderness to exact revenge." },
    { q: 'Who directed The Revenant?', a: "Alejandro G. Iñárritu directed this visceral survival epic, using natural lighting and extreme filming conditions to create an immersive, raw cinematic experience that won him his second consecutive Best Director Oscar." },
    { q: 'What makes the film visually stunning?', a: "Cinematographer Emmanuel Lubezki's use of natural light, long takes, and breathtaking landscapes creates an almost documentary-like realism that immerses viewers in Glass's harrowing journey through unforgiving wilderness." },
    { q: 'Did Leonardo DiCaprio win an Oscar?', a: "Yes—DiCaprio finally won his first Academy Award for Best Actor for his physically demanding, largely dialogue-free performance that required enduring extreme weather conditions and eating raw bison liver on camera." },
    { q: 'Is it based on a true story?', a: "The film is inspired by the real Hugh Glass's legendary 1823 survival story, though it takes creative liberties with historical details—particularly regarding his son and the ultimate fate of his betrayer." }
  ],
  "Kill Bill: Vol. 2": [
    { q: 'What is Kill Bill: Vol. 2 about?', a: "Kill Bill: Vol. 2 continues The Bride's roaring rampage of revenge as she confronts the remaining members of the Deadly Viper Assassination Squad—including the one-eyed Elle Driver and her former lover Bill—who orchestrated the massacre that nearly killed her." },
    { q: 'How does Vol. 2 differ from Vol. 1?', a: "While Volume 1 emphasized stylized action and martial arts, Volume 2 shifts focus to character development, emotional depth, and dialogue—revealing The Bride's backstory and the complex relationship dynamics that led to her quest for vengeance." },
    { q: 'Who directed Kill Bill?', a: "Quentin Tarantino wrote and directed both volumes as a single four-hour revenge epic, blending influences from spaghetti westerns, kung fu films, and Japanese samurai cinema into his signature style." },
    { q: 'What is the Pai Mei training sequence?', a: "The extended flashback showing The Bride's brutal training under the legendary, sadistic kung fu master Pai Mei provides crucial context for her abilities while adding depth to her character and the film's martial arts mythology." },
    { q: 'What themes does it explore?', a: "The film examines the cost of revenge, the possibility of redemption, maternal instinct versus vengeance, and whether achieving revenge can ever truly bring closure or peace to the avenger." }
  ],
  "John Wick": [
    { q: 'What is John Wick about?', a: "John Wick follows a legendary retired assassin who is pulled violently back into the criminal underworld when Russian mobsters kill the puppy his late wife left him as a final gift—unleashing a methodical, balletic rampage of vengeance through New York's criminal empire." },
    { q: 'What makes John Wick revolutionary?', a: "The film revolutionized action cinema with its innovative gun-fu fight choreography, world-building through the Continental Hotel and assassin society, and Keanu Reeves's commitment to performing his own stunts with military-grade tactical precision." },
    { q: 'Who directed John Wick?', a: "Chad Stahelski, a veteran stuntman and stunt coordinator, made his directorial debut with John Wick—bringing unprecedented authenticity and innovation to action choreography that elevated the entire genre." },
    { q: 'Why does he seek revenge over a dog?', a: "The puppy represents John's last connection to his deceased wife and his hope for a peaceful life—its senseless murder by entitled criminals destroys that hope, symbolizing the impossibility of escaping his violent past." },
    { q: 'Did it spawn a franchise?', a: "Yes—the film's massive success launched a multi-billion dollar franchise including three sequels, a prequel series, spin-offs, and comic books—all expanding the intricate world of assassins and their code." }
  ],
  "I Saw the Devil": [
    { q: 'What is I Saw the Devil about?', a: "I Saw the Devil follows elite secret agent Soo-hyun who, after a sadistic serial killer murders his pregnant fiancée, embarks on a harrowing revenge that goes beyond simple killing—he captures, tortures, releases, and re-captures the killer in an endless cycle of brutality." },
    { q: 'What makes it so extreme?', a: "The film's unflinching portrayal of graphic violence and torture, combined with its exploration of how revenge transforms the protagonist into something as monstrous as his target, makes it one of the most intense revenge films ever made." },
    { q: 'Who directed I Saw the Devil?', a: "Kim Jee-woon directed this brutal thriller, pushing the boundaries of the revenge genre to explore how the pursuit of vengeance corrupts and dehumanizes even righteous characters." },
    { q: 'What themes does it explore?', a: "The film examines how revenge transforms the avenger into the villain, the cycle of violence, moral degradation, and whether vengeance can ever provide satisfaction or merely perpetuates evil." },
    { q: 'Is it banned in any countries?', a: "The film faced censorship challenges in South Korea due to its extreme violence, requiring cuts for theatrical release—though the uncut version showcases the director's full vision of revenge's horrifying consequences." }
  ],
  "The Count of Monte Cristo": [
    { q: 'What is The Count of Monte Cristo about?', a: "The Count of Monte Cristo follows Edmond Dantès, a naive young sailor who is falsely imprisoned for treason by envious rivals—emerging fourteen years later as the wealthy, mysterious Count to exact meticulous, systematic revenge on everyone who destroyed his life." },
    { q: 'Is it based on a classic novel?', a: "Yes—the 2002 film adapts Alexandre Dumas's 1844 novel, widely considered the quintessential revenge story and one of the greatest adventure novels ever written, though the film simplifies and condenses the intricate plot." },
    { q: 'What makes the revenge satisfying?', a: "The revenge is deeply satisfying because it's methodical, intelligent, and karmic—Dantès doesn't merely kill his enemies but systematically dismantles their lives, exposing their crimes and watching them suffer the consequences of their betrayal." },
    { q: 'Who directed the 2002 version?', a: "Kevin Reynolds directed this adaptation, emphasizing adventure and romance alongside revenge while making the complex novel more accessible for modern audiences through streamlined storytelling." },
    { q: 'What themes does it explore?', a: "The film examines justice versus vengeance, the corrupting influence of revenge, redemption, forgiveness, and whether achieving revenge can truly heal the wounds of betrayal or merely creates new scars." }
  ]
};

const RevengeMovieSEOFAQSection = ({ movie }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const title = movie.Title;
  const faqs = revengeMovieFAQs[title] || [
    { q: 'What makes this revenge film unique?', a: "Powerful character motivations, visceral action sequences, and moral complexity define this compelling revenge narrative." },
    { q: 'Where can I watch this film?', a: "Available on major streaming platforms; check availability in your region." },
    { q: 'Who directed this movie?', a: "Directed by a distinguished filmmaker known for masterful storytelling in the revenge genre." }
  ];

  return (
    <motion.section
      className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-700/50"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <h2 className="text-xl sm:text-2xl font-light text-red-300 mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
        <Info size={20} className="sm:w-6 sm:h-6" />
        <span className="hidden sm:inline">Frequently Asked Questions About {title}</span>
        <span className="sm:hidden">FAQ About {title}</span>
      </h2>
      <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
        Deep dive into {title} with insider knowledge, production details, and insights about this brutal revenge masterpiece.
      </p>
      <div className="space-y-4 sm:space-y-6">
        {faqs.map((faq, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-800/30 rounded-xl p-4 sm:p-6 border border-gray-700/50 hover:border-red-400/50 transition-all duration-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <h3 className="text-base sm:text-lg font-medium text-red-200 mb-3 sm:mb-4 leading-relaxed">
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

export default RevengeMovieSEOFAQSection;
