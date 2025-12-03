// components/WarFilmsSEOFAQSection.js

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';


const warFilmsMovieFAQs = {
  "Saving Private Ryan": [
    { q: 'What is the premise of Saving Private Ryan?', a: "Following the catastrophic D-Day landings on Normandy Beach in 1944, a squad of American soldiers is tasked with the seemingly impossible mission of finding and bringing home Private James Ryan, the sole surviving brother of four, before the brutal campaign continues." },
    { q: 'Is Saving Private Ryan realistic?', a: "The film is renowned for its brutal, unflinching realism—particularly the visceral opening D-Day sequence. Director Steven Spielberg consulted extensively with veterans and military advisors to ensure the combat portrayal authentically captured the terror, chaos, and devastating human cost of warfare." },
    { q: 'Who directed Saving Private Ryan?', a: "Steven Spielberg directed this landmark war epic, bringing his masterful storytelling and technical precision to create one of cinema's most impactful and historically significant war films." },
    { q: 'What themes does the film explore?', a: "Core themes include the immense human cost of war, the bonds forged between soldiers under extreme duress, the moral complexity of military orders, sacrifice, duty, and the lasting psychological and emotional trauma of combat." },
    { q: 'Was it critically acclaimed?', a: "Saving Private Ryan was both a massive commercial success and critical triumph, winning five Academy Awards including Best Director, and is widely regarded as one of the greatest war films ever made." }
  ],
  "Apocalypse Now": [
    { q: 'What is Apocalypse Now about?', a: "A disillusioned Army captain travels upriver through the Vietnamese jungle to locate and assassinate Colonel Kurtz, a rogue commanding officer who has descended into madness and established a god-like cult in the heart of the wilderness." },
    { q: 'Is it based on true events?', a: "While fictional, Apocalypse Now is loosely adapted from Joseph Conrad's novella 'Heart of Darkness,' transposing the colonial narrative into the Vietnam War context—creating a nightmarish, philosophical exploration of imperialism and descent into chaos." },
    { q: 'Who directed Apocalypse Now?', a: "Francis Ford Coppola directed this visionary, deeply ambitious war film during an extraordinarily turbulent production marked by on-set disasters, actor illness, and Coppola's own psychological struggles." },
    { q: 'What makes it unique among war films?', a: "Rather than traditional heroic war narrative, Apocalypse Now uses surrealism, philosophical meditation, and haunting imagery to portray war as existential horror—a descent into madness and moral collapse rather than triumph." },
    { q: 'What are its most iconic scenes?', a: "The film features several legendary sequences including the helicopter assault with 'Ride of the Valkyries,' the Vietnamese sampan massacre, the Do Lung Bridge chaos, and Kurtz\'s apocalyptic final monologue about the true nature of warfare." }
  ],
  "Das Boot": [
    { q: 'What is Das Boot about?', a: "The film follows a German U-boat crew during World War II as they navigate the intense pressures of submarine warfare in the Atlantic, experiencing the claustrophobic horror, mechanical failures, and psychological toll of hunting and being hunted beneath the waves." },
    { q: 'Is Das Boot pro-German?', a: "No—the film humanizes the submarine crew while simultaneously portraying the futility and tragedy of their mission, emphasizing the universal suffering of soldiers on all sides rather than glorifying any national perspective." },
    { q: 'Who directed Das Boot?', a: "Wolfgang Petersen directed this masterpiece submarine thriller, crafting an incredibly tense, claustrophobic experience using innovative camera work and sound design to immerse audiences in the submarine environment." },
    { q: 'What makes it different from other war films?', a: "By focusing on the intimate, enclosed world of a submarine rather than grand battlefield scenes, Das Boot creates unprecedented psychological intensity—the true enemy becomes mechanical failure, desperation, and the crushing weight of the ocean itself." },
    { q: 'How was it received internationally?', a: "Das Boot was universally praised as one of the greatest war films ever made, transcending its German origin to become a global classic appreciated for its technical mastery and profound humanism." }
  ],
  "Platoon": [
    { q: 'What is Platoon about?', a: "A young American soldier arrives in Vietnam and experiences the brutal reality of jungle warfare, caught between two commanding officers—one moral, one ruthlessly pragmatic—as he witnesses the moral corruption and chaos of the Vietnam War firsthand." },
    { q: 'Is Platoon autobiographical?', a: "Yes—director Oliver Stone based the film on his own harrowing experiences as a soldier in Vietnam, lending it profound authenticity and emotional depth that transcends typical war film storytelling." },
    { q: 'Who directed Platoon?', a: "Oliver Stone directed this anti-war classic, bringing raw personal experience and artistic vision to create one of cinema's most honest and disturbing portrayals of the Vietnam War experience." },
    { q: 'What themes are central to the film?', a: "Platoon explores themes of moral ambiguity in combat, the corruption of soldiers through violence, the psychological toll of war, the generational divide between soldiers and leadership, and the irreversible damage war inflicts on the human soul." },
    { q: 'How did it impact perceptions of the Vietnam War?', a: "Released in 1986 after years of cultural avoidance, Platoon became the first major Hollywood film to portray Vietnam unflinchingly and critically, helping shift American cultural discourse about the war." }
  ],
  "1917": [
    { q: 'What is 1917 about?', a: "Two young British soldiers are sent on a desperate, seemingly impossible mission through no man's land during World War I to deliver orders that could prevent thousands of deaths in an upcoming attack." },
    { q: 'What is unique about 1917\'s cinematography?', a: "The film was shot to appear as one continuous take, creating unprecedented immersion and real-time tension. Director Sam Mendes utilized innovative camera techniques, hidden cuts, and visual effects to maintain the illusion of unbroken continuity throughout." },
    { q: 'Who directed 1917?', a: "Sam Mendes directed this technically innovative and emotionally devastating war film, earning widespread critical acclaim and multiple Academy Award nominations for his visionary approach to the medium." },
    { q: 'How does it portray World War I?', a: "1917 portrays WWI as a nightmare landscape of mud, decay, and mechanical slaughter—emphasizing the futility of the Great War and the expendability of individual soldiers within massive industrial-scale warfare." },
    { q: 'What awards did it win?', a: "1917 won multiple Academy Awards including Best Cinematography and Best Visual Effects, cementing its place as a landmark achievement in war film cinema." }
  ],
  "Come and See": [
    { q: 'What is Come and See about?', a: "A young Soviet partisan witnesses the devastating German occupation of Belarusian villages during World War II, experiencing atrocities that progressively destroy his innocence and humanity in one of cinema's most harrowing anti-war statements." },
    { q: 'Why is Come and See so intense?', a: "The film presents unrelenting, graphic depictions of wartime atrocities without heroism or romanticism, creating a deeply traumatic viewing experience that forces audiences to confront the true horror and inhumanity of warfare." },
    { q: 'Who directed Come and See?', a: "Elem Klimov directed this devastating masterpiece, which was banned in the Soviet Union for years due to its unflinching critique of nationalism and militarism." },
    { q: 'Is it based on true events?', a: "Yes—Come and See is based on actual documented atrocities committed by Nazi occupation forces in Belarus, making its brutal content historically grounded and deeply tragic." },
    { q: 'Why is it considered one of the greatest war films?', a: "Come and See transcends traditional war film conventions to become a profound meditation on the absolute corruption of the human spirit by violence—offering no comfort, no heroism, only devastating truth." }
  ],
  "Schindler's List": [
    { q: 'What is Schindler\'s List about?', a: "The film chronicles the true story of Oskar Schindler, a German businessman who saved over a thousand Jewish refugees from the Holocaust by employing them in his factories, risking everything for his workers' survival." },
    { q: 'Who directed Schindler\'s List?', a: "Steven Spielberg directed this profound Holocaust memorial film, bringing both artistic mastery and deep respect to one of history's darkest chapters." },
    { q: 'Is it historically accurate?', a: "Yes—the film is meticulously based on Thomas Keneally's novel, which itself was grounded in extensive historical research and interviews with actual survivors and witnesses to events." },
    { q: 'What themes does it explore?', a: "Schindler's List explores themes of moral courage against systemic evil, the power of individual human compassion against industrialized atrocity, redemption, and the responsibility of remembrance." },
    { q: 'What awards did it win?', a: "Schindler's List won seven Academy Awards including Best Picture and Best Director, and remains one of cinema's most important historical documents and moral statements." }
  ],
  "Full Metal Jacket": [
    { q: 'What is Full Metal Jacket about?', a: "The film follows American Marines through brutal boot camp training under a sadistic drill sergeant, then into the brutality of the Vietnam War, exploring how military institutions transform individuals into dehumanized combat machines." },
    { q: 'Who directed Full Metal Jacket?', a: "Stanley Kubrick directed this visionary critique of militarization, known for his perfectionist approach, innovative cinematography, and unflinching examination of institutional dehumanization." },
    { q: 'Why does the film divide into two parts?', a: "The first half portrays boot camp dehumanization, the second combat chaos—Kubrick deliberately contrasts institutional control with battlefield chaos to expose the contradictions of military culture." },
    { q: 'What themes are explored?', a: "Full Metal Jacket examines themes of dehumanization, toxic masculinity, the psychological corruption of combat training, the gap between military fantasy and brutal reality, and the loss of individual identity within institutional systems." },
    { q: 'How was it received?', a: "While controversial, the film is now widely recognized as a masterpiece of war cinema—praised for its technical brilliance, psychological depth, and unflinching critique of militarism." }
  ],
  "Paths of Glory": [
    { q: 'What is Paths of Glory about?', a: "A French colonel challenges a senseless World War I military order during the trench warfare stalemate, risking his career to defend three soldiers scapegoated and condemned to death for a failed assault." },
    { q: 'Who directed Paths of Glory?', a: "Stanley Kubrick directed this early masterpiece, creating a scathing critique of military hierarchy, institutional cruelty, and the dehumanizing logic of warfare." },
    { q: 'Is it based on true events?', a: "Yes—the film is based on the true story of the Nivelle Offensive during World War I and the subsequent executions of French soldiers, making its critique historically grounded." },
    { q: 'Why was it controversial?', a: "The film was controversial for its unflinching critique of military leadership and its suggestion that warfare often involves the institutional sacrifice of innocent soldiers for political and career advancement." },
    { q: 'What is its legacy?', a: "Paths of Glory established the template for anti-war cinema, influencing generations of filmmakers and remaining a powerful statement about institutional violence and human expendability." }
  ],
  "Lawrence of Arabia": [
    { q: 'What is Lawrence of Arabia about?', a: "The film follows T.E. Lawrence, a British officer who becomes a legendary leader of Arab forces during World War I, chronicling his rise, his psychological transformation, and the moral complexities of his role in Middle Eastern politics and warfare." },
    { q: 'Who directed Lawrence of Arabia?', a: "David Lean directed this epic masterpiece, known for his sweeping cinematography, complex character study, and ambitious scope—considered one of cinema's greatest achievements." },
    { q: 'Is it historically accurate?', a: "While based on T.E. Lawrence's life and memoirs, the film takes considerable artistic license, emphasizing dramatic narrative and psychological exploration over strict historical documentation." },
    { q: 'What themes does it explore?', a: "Lawrence of Arabia examines themes of cultural identity, the corrupting influence of power, imperialism, nationalism, personal ambition within geopolitical conflict, and the psychological toll of war and leadership." },
    { q: 'What awards did it win?', a: "Lawrence of Arabia won seven Academy Awards including Best Picture and Best Director, and remains an iconic epic film that defines the war cinema genre." }
  ]
};


const WarFilmsSEOFAQSection = ({ movie }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const title = movie.Title;
  const faqs = warFilmsMovieFAQs[title] || [
    { q: 'What makes this war film significant?', a: "This war film explores profound themes of combat, sacrifice, and the human cost of warfare through compelling narratives and authentic portrayals of conflict." },
    { q: 'Where can I watch this film?', a: "Available on major streaming platforms; check availability in your region for this acclaimed war cinema." },
    { q: 'Who directed this movie?', a: "Directed by a distinguished filmmaker known for masterful war film storytelling and technical excellence." }
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
        Deep dive into {title} with insider knowledge, historical context, production details, and insights about this powerful war film.
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


export default WarFilmsSEOFAQSection;
