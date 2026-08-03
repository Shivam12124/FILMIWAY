const fs = require('fs');

const masterTimestampsPath = 'c:/Users/filmi/FILMIWAY/FILMIWAY/utils/masterTimestamps.json';
const db = JSON.parse(fs.readFileSync(masterTimestampsPath, 'utf8'));

const batch3Data = {
  "809": {
    "Title": "Shrek 2",
    "Age": "All ages",
    "Summary": "Suitable for all ages; contains clean dialogue and mild cartoon fantasy violence.",
    "violence": {
      "severity": "Mild",
      "description": "Cartoon fantasy action with slapstick fights, chases, and comedic knight pursuits with no blood."
    },
    "profanity": {
      "severity": "None",
      "description": "Family-friendly fairytale dialogue with mild crude humor and playful insults."
    }
  },
  "843": {
    "Title": "In the Mood for Love",
    "Age": "All ages",
    "Summary": "Suitable for all ages; clean, respectful period dialogue with no violence.",
    "violence": {
      "severity": "None",
      "description": "Completely non-violent romantic drama."
    },
    "profanity": {
      "severity": "None",
      "description": "Restrained, period-appropriate dialogue with no expletives or strong language."
    }
  },
  "850": {
    "Title": "A Christmas Story",
    "Age": "8+",
    "Summary": "Aged 8+ for mild childhood scuffles, minor expletives, and family-friendly thematic elements.",
    "violence": {
      "severity": "Mild",
      "description": "Slapstick schoolyard scuffles, comedic accidents, and a minor BB gun cheek scratch."
    },
    "profanity": {
      "severity": "Mild",
      "description": "Mild language, humorous insults, and running gags about swearing (without explicit expletives)."
    }
  },
  "857": {
    "Title": "Saving Private Ryan",
    "Age": "18+",
    "Summary": "Aged 18+ for graphic realistic war violence and pervasive strong language throughout.",
    "violence": {
      "severity": "High",
      "description": "Relentless, extremely graphic WWII combat with D-Day gore, disembowelment, severed limbs, and point-blank executions."
    },
    "profanity": {
      "severity": "High",
      "description": "Pervasive military profanity throughout, including constant F-words and combat slurs."
    }
  },
  "872": {
    "Title": "Singin' in the Rain",
    "Age": "All ages",
    "Summary": "Suitable for all ages; exceptionally clean classic dialogue and wholesome themes.",
    "violence": {
      "severity": "None",
      "description": "Classic musical comedy with light slapstick stunts and zero violence."
    },
    "profanity": {
      "severity": "None",
      "description": "Clean, classic Hollywood-era dialogue with no profanity."
    }
  },
  "873": {
    "Title": "The Color Purple",
    "Age": "16+",
    "Summary": "Aged 16+ for depictions of domestic abuse, intense physical violence, and moderate language.",
    "violence": {
      "severity": "High",
      "description": "Depictions of severe domestic abuse, violent physical beatings, and threats of sexual assault."
    },
    "profanity": {
      "severity": "Moderate",
      "description": "Intense emotional arguments featuring harsh personal insults, abusive dialogue, and period-specific slurs."
    }
  },
  "901": {
    "Title": "City Lights",
    "Age": "All ages",
    "Summary": "Suitable for all ages; clean silent-era slapstick and no profanity.",
    "violence": {
      "severity": "Mild",
      "description": "Comedic silent-era boxing matches and gentle slapstick street scuffles."
    },
    "profanity": {
      "severity": "None",
      "description": "Silent film with clean intertitles and no profane text."
    }
  },
  "914": {
    "Title": "The Great Dictator",
    "Age": "All ages",
    "Summary": "Suitable for all ages; clean comedic satire and mild slapstick war gags.",
    "violence": {
      "severity": "Mild",
      "description": "Satirical wartime scuffles, slapstick aerial mishaps, and non-graphic military arrests."
    },
    "profanity": {
      "severity": "None",
      "description": "Classic comedic dialogue containing no explicit swearing or profanity."
    }
  },
  "935": {
    "Title": "Dr. Strangelove",
    "Age": "12+",
    "Summary": "Aged 12+ for mild language, political satire, and bloodless wartime action.",
    "violence": {
      "severity": "Mild",
      "description": "Military shootouts outside an airbase without visible blood, and footage of nuclear detonations."
    },
    "profanity": {
      "severity": "Mild",
      "description": "Mild military profanity, satirical insults, and double entendres."
    }
  },
  "947": {
    "Title": "Lawrence of Arabia",
    "Age": "12+",
    "Summary": "Aged 12+ for moderate war combat violence and historical thematic elements.",
    "violence": {
      "severity": "Moderate",
      "description": "WWI desert warfare featuring execution shootouts, bayonet charges, and bloodied casualties."
    },
    "profanity": {
      "severity": "None",
      "description": "Historical dialogue with virtually no modern profanity."
    }
  },
  "949": {
    "Title": "Heat",
    "Age": "18+",
    "Summary": "Aged 18+ for intense, realistic gun violence and pervasive strong language throughout.",
    "violence": {
      "severity": "High",
      "description": "High-caliber street shootouts, bloody bank robberies, executions, and realistic gun combat."
    },
    "profanity": {
      "severity": "High",
      "description": "Pervasive strong profanity with dozens of F-words and aggressive crime-world banter."
    }
  },
  "968": {
    "Title": "Dog Day Afternoon",
    "Age": "16+",
    "Summary": "Aged 16+ for frequent strong language and intense bank robbery hostage situations.",
    "violence": {
      "severity": "Moderate",
      "description": "High-stress bank hostage situation featuring police standoffs and a fatal gunshot execution."
    },
    "profanity": {
      "severity": "High",
      "description": "Heavy 1970s street profanity, including frequent F-bombs from panicked captors and hostages."
    }
  },
  "975": {
    "Title": "Paths of Glory",
    "Age": "14+",
    "Summary": "Aged 14+ for intense war combat, executions, and mild language.",
    "violence": {
      "severity": "High",
      "description": "Grim WWI trench warfare, artillery bombardments, and a stark execution by firing squad."
    },
    "profanity": {
      "severity": "Mild",
      "description": "Period military dialogue with light swearing and insults."
    }
  },
  "1089": {
    "Title": "Point Break",
    "Age": "16+",
    "Summary": "Aged 16+ for intense action violence and frequent strong language.",
    "violence": {
      "severity": "High",
      "description": "High-impact action violence with bank robberies, shootouts, martial arts fights, and a gory lawnmower accident."
    },
    "profanity": {
      "severity": "High",
      "description": "Heavy 1990s action profanity, including constant F-words and expletives."
    }
  },
  "1090": {
    "Title": "The Thirteenth Floor",
    "Age": "14+",
    "Summary": "Aged 14+ for moderate sci-fi thriller violence and moderate language.",
    "violence": {
      "severity": "Moderate",
      "description": "Sci-fi thriller violence including knife stabbings, gunshots, vehicular crashes, and bloody crime scenes."
    },
    "profanity": {
      "severity": "Moderate",
      "description": "Regular conversational swearing and occasional strong expletives."
    }
  },
  "1124": {
    "Title": "The Prestige",
    "Age": "13+",
    "Summary": "Aged 13+ for moderate thriller violence, disturbing imagery, and moderate language.",
    "violence": {
      "severity": "Moderate",
      "description": "Stage illusions gone wrong, drowning, hanging, gunshot wounds, and severed fingers."
    },
    "profanity": {
      "severity": "Moderate",
      "description": "Moderate language including British expletives and occasional strong terms."
    }
  },
  "1398": {
    "Title": "Stalker",
    "Age": "12+",
    "Summary": "Aged 12+ for intense psychological tension and philosophical themes.",
    "violence": {
      "severity": "Mild",
      "description": "Atmospheric sci-fi tension with a brief gunshot and minor scuffles; little physical violence."
    },
    "profanity": {
      "severity": "None",
      "description": "Philosophical conversations with virtually no swearing in translation."
    }
  },
  "1405": {
    "Title": "Greed",
    "Age": "12+",
    "Summary": "Aged 12+ for moderate silent-era violence and desperate crime themes.",
    "violence": {
      "severity": "Moderate",
      "description": "Crime-of-passion strangulation and a fatal, desperate struggle in Death Valley."
    },
    "profanity": {
      "severity": "None",
      "description": "Silent film intertitles containing no profanity."
    }
  },
  "1491": {
    "Title": "The Illusionist",
    "Age": "12+",
    "Summary": "Aged 12+ for mild period violence, suicide themes, and clean dialogue.",
    "violence": {
      "severity": "Mild",
      "description": "Off-screen murder mystery, intense stage magic peril, and a gunshot suicide."
    },
    "profanity": {
      "severity": "Mild",
      "description": "Period-appropriate 19th-century dialogue with negligible swearing."
    }
  },
  "1538": {
    "Title": "Collateral",
    "Age": "18+",
    "Summary": "Aged 18+ for intense hitman violence and frequent strong language throughout.",
    "violence": {
      "severity": "High",
      "description": "Point-blank hitman assassinations, bloody crime scenes, and intense gunfights in crowded areas."
    },
    "profanity": {
      "severity": "High",
      "description": "Frequent strong profanity throughout, heavily featuring the F-word."
    }
  },
  "1584": {
    "Title": "School of Rock",
    "Age": "9+",
    "Summary": "Aged 9+ for mild language, light crude humor, and school rock-band themes.",
    "violence": {
      "severity": "None",
      "description": "Non-violent comedy with occasional comedic staging or minor physical humor."
    },
    "profanity": {
      "severity": "Mild",
      "description": "Mild, kid-accessible profanity and light rock-culture insults."
    }
  },
  "1585": {
    "Title": "It's a Wonderful Life",
    "Age": "All ages",
    "Summary": "Suitable for all ages; clean classic dialogue with mature themes of emotional distress.",
    "violence": {
      "severity": "Mild",
      "description": "A brief slap to the ear resulting in minor bleeding, and scenes of emotional distress."
    },
    "profanity": {
      "severity": "None",
      "description": "Classic, clean family dialogue with no swearing."
    }
  },
  "1593": {
    "Title": "Night at the Museum",
    "Age": "All ages",
    "Summary": "Suitable for all ages; features mild fantasy slapstick and clean dialogue.",
    "violence": {
      "severity": "Mild",
      "description": "Family slapstick involving living museum exhibits, tiny arrows, and chaotic chases."
    },
    "profanity": {
      "severity": "None",
      "description": "Very light family-comedy exclamations and mild insults."
    }
  },
  "1653": {
    "Title": "The Motorcycle Diaries",
    "Age": "13+",
    "Summary": "Aged 13+ for moderate language and mature thematic elements.",
    "violence": {
      "severity": "Mild",
      "description": "Minor road crashes, physical exhaustion, and depictions of illness in poor communities."
    },
    "profanity": {
      "severity": "Moderate",
      "description": "Regular casual swearing and regional Latin American slang in subtitles."
    }
  },
  "1813": {
    "Title": "The Devil's Advocate",
    "Age": "18+",
    "Summary": "Aged 18+ for graphic horror violence, explicit sexual content, and pervasive strong language.",
    "violence": {
      "severity": "High",
      "description": "Gory demonic hallucinations, violent stabbings, and a bloody suicide sequence."
    },
    "profanity": {
      "severity": "High",
      "description": "Pervasive strong profanity, explicit sexual dialogue, and blasphemous language."
    }
  },
  "1824": {
    "Title": "50 First Dates",
    "Age": "13+",
    "Summary": "Aged 13+ for crude humor, sexual references, and moderate language.",
    "violence": {
      "severity": "Mild",
      "description": "Comedic slapstick, including golf club hits and minor physical comedy."
    },
    "profanity": {
      "severity": "Moderate",
      "description": "Frequent crude sexual jokes, vulgar humor, and moderate swearing."
    }
  },
  "1847": {
    "Title": "The Long Goodbye",
    "Age": "18+",
    "Summary": "Aged 18+ for sudden graphic violence and frequent strong language.",
    "violence": {
      "severity": "High",
      "description": "Sudden brutal violence, including a face smashed with a glass bottle and a close-range shooting."
    },
    "profanity": {
      "severity": "High",
      "description": "Heavy 1970s hard-boiled profanity, F-words, and aggressive street language."
    }
  },
  "1858": {
    "Title": "Transformers",
    "Age": "12+",
    "Summary": "Aged 12+ for intense sci-fi action violence and moderate language.",
    "violence": {
      "severity": "Moderate",
      "description": "Large-scale sci-fi robot battles with heavy collateral destruction, explosions, and minimal human blood."
    },
    "profanity": {
      "severity": "Moderate",
      "description": "Occasional strong language and suggestive teen humor."
    }
  },
  "1902": {
    "Title": "Open Your Eyes (Abre los ojos)",
    "Age": "15+",
    "Summary": "Aged 15+ for moderate violence, psychological distress, and moderate language.",
    "violence": {
      "severity": "Moderate",
      "description": "A severe car crash causing facial disfigurement, psychological distress, and a shooting."
    },
    "profanity": {
      "severity": "Moderate",
      "description": "Regular Spanish profanity and adult conversational themes in subtitles."
    }
  },
  "1934": {
    "Title": "Shakespeare in Love",
    "Age": "14+",
    "Summary": "Aged 14+ for moderate language, sexual innuendos, and mild action.",
    "violence": {
      "severity": "Mild",
      "description": "Stage swordfights, a brief barroom duel, and an off-screen stabbing."
    },
    "profanity": {
      "severity": "Moderate",
      "description": "Elizabethan banter mixed with modern expletives and sexual innuendo."
    }
  },
  "1946": {
    "Title": "eXistenZ",
    "Age": "18+",
    "Summary": "Aged 18+ for graphic body-horror violence and moderate language.",
    "violence": {
      "severity": "High",
      "description": "Gory organic technology, guns built from bone and flesh, point-blank shootings, and bloody surgical implants."
    },
    "profanity": {
      "severity": "Moderate",
      "description": "Regular use of strong profanity and unsettling dialogue."
    }
  },
  "1954": {
    "Title": "The Butterfly Effect",
    "Age": "18+",
    "Summary": "Aged 18+ for disturbing graphic violence and pervasive strong language.",
    "violence": {
      "severity": "High",
      "description": "Disturbing scenes of childhood abuse, exploding mailboxes, animal cruelty, limb loss, and fatal violence."
    },
    "profanity": {
      "severity": "High",
      "description": "Heavy, aggressive profanity with frequent F-words throughout."
    }
  },
  "2034": {
    "Title": "Training Day",
    "Age": "18+",
    "Summary": "Aged 18+ for intense graphic violence and pervasive strong street language.",
    "violence": {
      "severity": "High",
      "description": "Brutal gangland executions, severe beatings, Russian roulette, and bloody street shootouts."
    },
    "profanity": {
      "severity": "High",
      "description": "Constant street profanity with over 200 uses of the F-word and heavy racial slurs."
    }
  },
  "2057": {
    "Title": "Original Sin",
    "Age": "16+",
    "Summary": "Aged 16+ for moderate violence and moderate language.",
    "violence": {
      "severity": "Moderate",
      "description": "Fatal poisonings, close-range gunshots, and violent arguments."
    },
    "profanity": {
      "severity": "Moderate",
      "description": "Erotic drama dialogue featuring moderate profanity."
    }
  },
  "2105": {
    "Title": "American Pie",
    "Age": "16+",
    "Summary": "Aged 16+ for pervasive crude sexual humor and constant strong language.",
    "violence": {
      "severity": "Mild",
      "description": "Comedic slapstick and embarrassing physical mishaps."
    },
    "profanity": {
      "severity": "High",
      "description": "Heavy crude sexual language, constant swearing, and explicit anatomical jokes."
    }
  },
  "2118": {
    "Title": "L.A. Confidential",
    "Age": "18+",
    "Summary": "Aged 18+ for strong graphic violence and frequent strong language throughout.",
    "violence": {
      "severity": "High",
      "description": "Brutal police interrogation beatings, bloody massacres, execution shootouts, and crime scene photos."
    },
    "profanity": {
      "severity": "High",
      "description": "Constant hard-boiled profanity, heavy F-words, and historical racial slurs."
    }
  },
  "2252": {
    "Title": "Eastern Promises",
    "Age": "18+",
    "Summary": "Aged 18+ for graphic brutal violence and frequent strong language.",
    "violence": {
      "severity": "High",
      "description": "Graphic knife attacks, an infamous naked bathhouse fight, throat slitting, and severed fingers."
    },
    "profanity": {
      "severity": "High",
      "description": "Heavy mob profanity, explicit insults, and coarse street language."
    }
  },
  "2280": {
    "Title": "Big",
    "Age": "9+",
    "Summary": "Aged 9+ for mild language and thematic elements.",
    "violence": {
      "severity": "Mild",
      "description": "A brief slapstick scuffle between friends and minor carnival peril."
    },
    "profanity": {
      "severity": "Mild",
      "description": "Very limited swearing, including one casual use of the F-word by a child character."
    }
  },
  "2291": {
    "Title": "Jacob's Ladder",
    "Age": "18+",
    "Summary": "Aged 18+ for intense psychological horror, graphic violence, and strong language.",
    "violence": {
      "severity": "High",
      "description": "Disturbing psychological horror imagery, bloody Vietnam combat flashbacks, and graphic hospital torture."
    },
    "profanity": {
      "severity": "High",
      "description": "Frequent military and urban profanity, including F-bombs."
    }
  },
  "2609": {
    "Title": "Planes, Trains and Automobiles",
    "Age": "15+",
    "Summary": "Aged 15+ for a single scene of intense profanity (repeated F-words) and mild slapstick accidents.",
    "violence": {
      "severity": "Mild",
      "description": "Slapstick vehicular accidents, including a car squeezing between semi-trucks and catching fire."
    },
    "profanity": {
      "severity": "High",
      "description": "Famous for a single rental-car counter scene containing 18 uses of the F-word in one minute."
    }
  },
  "2666": {
    "Title": "Dark City",
    "Age": "13+",
    "Summary": "Aged 13+ for moderate sci-fi action violence and moderate language.",
    "violence": {
      "severity": "Moderate",
      "description": "Telekinetic battles, knife murders, pale alien figures, and dark sci-fi violence."
    },
    "profanity": {
      "severity": "Moderate",
      "description": "Occasional strong language scattered through tense scenes."
    }
  },
  "2756": {
    "Title": "The Abyss",
    "Age": "14+",
    "Summary": "Aged 14+ for intense deep-sea peril and frequent strong language.",
    "violence": {
      "severity": "Moderate",
      "description": "High-stress deep-sea emergencies, tense underwater combat, and a harrowing medical CPR sequence."
    },
    "profanity": {
      "severity": "High",
      "description": "Heavy pressure-filled swearing with frequent F-words from oil rig workers."
    }
  },
  "2757": {
    "Title": "Adaptation.",
    "Age": "16+",
    "Summary": "Aged 16+ for frequent strong language and moderate violence.",
    "violence": {
      "severity": "Moderate",
      "description": "A terrifying alligator attack, a sudden fatal car crash, and gunshots in a swamp."
    },
    "profanity": {
      "severity": "High",
      "description": "Frequent strong profanity and high-anxiety swearing."
    }
  },
  "2787": {
    "Title": "Pitch Black",
    "Age": "16+",
    "Summary": "Aged 16+ for graphic sci-fi horror violence and frequent strong language.",
    "violence": {
      "severity": "High",
      "description": "Gory alien creature attacks, dismemberment, a violent spaceship crash, and brutal stabbings."
    },
    "profanity": {
      "severity": "High",
      "description": "Frequent sci-fi action profanity and heavy F-bombs."
    }
  },
  "2832": {
    "Title": "Identity",
    "Age": "16+",
    "Summary": "Aged 16+ for graphic slasher violence and moderate language.",
    "violence": {
      "severity": "High",
      "description": "Gory slasher-style murders, a severed head in a washing machine, and vehicular run-overs."
    },
    "profanity": {
      "severity": "Moderate",
      "description": "Frequent panic-driven profanity and continuous swearing."
    }
  },
  "3090": {
    "Title": "The Treasure of the Sierra Madre",
    "Age": "12+",
    "Summary": "Aged 12+ for moderate western violence and mild language.",
    "violence": {
      "severity": "Moderate",
      "description": "Western bandit shootouts, machete attacks, and fatal betrayals in the desert."
    },
    "profanity": {
      "severity": "Mild",
      "description": "Mild 1940s western dialogue with light swearing."
    }
  },
  "3093": {
    "Title": "Basic Instinct 2",
    "Age": "18+",
    "Summary": "Aged 18+ for graphic violence, explicit sexual content, and pervasive strong language.",
    "violence": {
      "severity": "High",
      "description": "A fatal high-speed car crash into water, bloody ice-pick killings, and drownings."
    },
    "profanity": {
      "severity": "High",
      "description": "Heavy explicit sexual dialogue and pervasive profanity throughout."
    }
  },
  "3131": {
    "Title": "Gangs of New York",
    "Age": "18+",
    "Summary": "Aged 18+ for brutal graphic violence and frequent strong language throughout.",
    "violence": {
      "severity": "High",
      "description": "Brutal 19th-century street battles with meat cleavers, knives, bayonets, and graphic mutilation."
    },
    "profanity": {
      "severity": "High",
      "description": "Heavy period-accurate profanity, slurs, and strong expletives."
    }
  },
  "4141": {
    "Title": "Shoot 'Em Up",
    "Age": "18+",
    "Summary": "Aged 18+ for constant extreme gun violence and pervasive strong language.",
    "violence": {
      "severity": "High",
      "description": "Over-the-top, bloody gunfights, dozens of creative killings, and extreme action violence throughout."
    },
    "profanity": {
      "severity": "High",
      "description": "Constant profanity, crude jokes, and F-bombs."
    }
  },
  "4148": {
    "Title": "Revolutionary Road",
    "Age": "16+",
    "Summary": "Aged 16+ for intense marital shouting matches, emotional distress, and strong language.",
    "violence": {
      "severity": "Moderate",
      "description": "Intense marital arguments and a graphic, fatal self-induced abortion aftermath."
    },
    "profanity": {
      "severity": "High",
      "description": "Frequent severe marital shouting matches loaded with heavy profanity."
    }
  }
};

let updatedCount = 0;

for (const [tmdbId, data] of Object.entries(batch3Data)) {
  const movie = db[tmdbId];
  if (!movie) {
    console.log(`Skipping TMDB ID ${tmdbId} (not in db)`);
    continue;
  }
  
  // Set basic attributes
  movie.Age = data.Age;
  movie.Summary = data.Summary;
  
  if (!movie.scenes) {
    movie.scenes = [];
  }
  
  // Filter out existing Violence & Gore and Profanity entries to avoid duplicates
  movie.scenes = movie.scenes.filter(s => s.type !== "Violence & Gore" && s.type !== "Profanity");
  
  // Append new general timeline alerts
  movie.scenes.push({
    "start": "",
    "end": "",
    "type": "Violence & Gore",
    "severity": data.violence.severity,
    "description": data.violence.description
  });
  
  movie.scenes.push({
    "start": "",
    "end": "",
    "type": "Profanity",
    "severity": data.profanity.severity,
    "description": data.profanity.description
  });
  
  updatedCount++;
}

fs.writeFileSync(masterTimestampsPath, JSON.stringify(db, null, 4));
console.log(`Successfully updated ${updatedCount} movies in masterTimestamps.json for Batch 3!`);
