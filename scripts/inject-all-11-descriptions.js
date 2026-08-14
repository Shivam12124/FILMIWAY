// scripts/inject-all-11-descriptions.js
const fs = require('fs');
const path = require('path');

const masterTimestampsPath = path.join(__dirname, '../utils/masterTimestamps.json');
const masterTimestamps = JSON.parse(fs.readFileSync(masterTimestampsPath, 'utf8'));

const descriptionsMap = {
    "345": { // Eyes Wide Shut
        "0:00:48": "Alice Harford disrobes in her bedroom, showing brief partial rear nudity as she prepares for the party.",
        "0:13:10": "Dr. Bill Harford assists an overdose victim in Victor Ziegler's bathroom, depicting full female nudity.",
        "0:20:00": "Bill and Alice engage in an intimate bedroom argument featuring partial female nudity in sheer lingerie.",
        "0:21:20": "Alice undresses in front of a mirror with partial upper-body nudity visible.",
        "0:21:40": "Alice sits on the bed undressed during a candid conversation about fidelity.",
        "0:23:50": "Alice recounts a vivid fantasy involving a naval officer, set in suggestive bedroom attire.",
        "0:26:18": "Bill arrives at a patient's apartment where Marion confesses her feelings while in emotional distress.",
        "0:37:42": "Bill visits Domino's apartment where intimate contact occurs with visible lingerie and partial nudity.",
        "0:46:00": "Bill speaks with Domino in her room, featuring suggestive clothing and intimate dialogue.",
        "1:07:32": "Sally receives Bill at Domino's apartment while wearing revealing lingerie.",
        "1:09:14": "Bill visits Milich's costume shop, discovering his teenage daughter in revealing attire with two men.",
        "1:14:22": "Bill arrives at the Somerton mansion ritual, witnessing masked participants in states of total nudity.",
        "1:19:47": "The secret ritual sequence continues with prolonged depictions of masked couples engaging in sexual activity.",
        "1:27:47": "A nude masked woman intervenes to save Bill during his confrontation by the cult council.",
        "1:47:56": "Bill visits the morgue to identify the body of Amanda Payne, depicting a non-graphic nude corpse.",
        "1:54:47": "Bill returns home to find the ritual mask placed on his pillow beside his sleeping wife.",
        "2:08:17": "Bill and Alice visit a toy store with their daughter, discussing their marriage during the closing scene."
    },
    "884": { // Crash (1996)
        "0:03:06": "Catherine Ballard undresses against a sports car in an aircraft hangar with visible upper-body nudity.",
        "0:03:30": "James and Catherine Ballard engage in an open marriage dialogue involving intimate physical contact.",
        "0:05:03": "James Ballard and Helen Remington experience a violent head-on collision resulting in intimate trauma.",
        "0:05:32": "Helen Remington is shown in the wreckage with torn clothing exposing partial female nudity.",
        "0:06:05": "James and Helen recover in adjacent hospital beds, developing an unconventional physical bond.",
        "0:08:07": "Catherine visits James in the hospital, engaging in suggestive dialogue while adjusting bedding.",
        "0:13:10": "James engages in solitary reflection while watching automotive crash test footage.",
        "0:23:50": "James and Helen meet at a car scrapyard, engaging in intimate contact inside a wrecked automobile.",
        "0:24:53": "Vaughan demonstrates crash fetishism by re-enacting historical celebrity automobile accidents.",
        "0:43:05": "James, Catherine, and Vaughan attend a private stunt performance involving specialized vehicle rigs.",
        "0:46:47": "Vaughan drives through a car wash while James and Catherine engage in intimate backseat contact.",
        "0:55:00": "James and Gabrielle engage in physical intimacy inside a modified vehicle equipped with leg braces.",
        "1:05:18": "Catherine visits Vaughan's apartment, depicting partial female nudity during a photo session.",
        "1:07:55": "Vaughan photographs wounds and scars on crash survivors with visible full-body nudity.",
        "1:09:13": "Vaughan and James drive through nighttime highway traffic in an intense state of psychological fascination.",
        "1:14:25": "James and Vaughan engage in physical intimacy inside a convertible during a torrential rainstorm.",
        "1:20:00": "Vaughan deliberately crashes into Catherine's vehicle on the overpass.",
        "1:35:15": "James and Catherine pursue each other onto a roadside embankment following a final crash."
    },
    "979": { // Irréversible
        "0:05:50": "Marcus and Pierre enter the underground club 'Le Rectum', encountering patrons in states of male nudity.",
        "0:12:23": "Marcus searches the dark corridors of the club, escalating into a graphic physical altercation.",
        "0:45:00": "The infamous underpass sequence depicting a brutal, non-consensual assault on Alex with full nudity.",
        "1:15:36": "The reverse timeline shows Alex, Marcus, and Pierre in a peaceful apartment morning with partial nudity."
    },
    "2251": [ // Unfaithful
        { start: "0:33:50", end: "0:36:26", description: "Connie Sumner and Paul Martel engage in intimate kissing and disrobing in his Soho apartment." },
        { start: "0:40:40", end: "0:41:10", description: "Connie reminisces about her encounter with Paul while riding the train back to Westchester." },
        { start: "0:43:10", end: "0:46:35", description: "Connie returns to Paul's loft, engaging in passionate physical intimacy with visible female topless nudity." },
        { start: "0:52:00", end: "0:52:45", description: "Paul and Connie engage in intimate contact in a hallway rest stop." },
        { start: "0:55:45", end: "0:55:55", description: "Connie undresses in Paul's apartment bathroom with partial upper-body exposure." },
        { start: "1:00:50", end: "1:00:55", description: "Connie adjusts her silk lingerie before meeting Paul in a restaurant restroom." },
        { start: "1:01:25", end: "1:01:37", description: "Connie and Paul engage in a brief, intense encounter inside a restaurant restroom stall." },
        { start: "1:01:58", end: "1:02:15", description: "Connie returns to her table in a state of emotional fluster." },
        { start: "1:08:45", end: "1:09:04", description: "Connie and Paul engage in intimacy on a sofa prior to Edward discovering Paul's address." }
    ],
    "10867": [ // Malèna
        { start: "0:14:04", end: "0:14:10", description: "Renato spies through a keyhole as Malèna undresses in her bedroom, showing upper-body nudity." },
        { start: "0:16:20", end: "0:16:40", description: "Malèna dances alone in her living room to gramophone music in a silk nightgown with partial nudity." },
        { start: "0:23:58", end: "0:24:00", description: "Renato observes Malèna trying on black mourning attire in front of her mirror." },
        { start: "0:24:01", end: "0:24:47", description: "Renato engages in solitary adolescent fantasy while watching Malèna from his rooftop viewpoint." },
        { start: "0:49:05", end: "0:49:08", description: "Renato glimpses Malèna unbuttoning her blouse in her residence." },
        { start: "1:01:39", end: "1:01:55", description: "Malèna cuts and dyes her hair black following news of her husband's reported death." },
        { start: "1:04:45", end: "1:05:30", description: "Malèna walks through the town square in a fitted suit as townspeople stare intensely." },
        { start: "1:06:48", end: "1:06:50", description: "Brief vision sequence of Malèna disrobing in a romantic fantasy." },
        { start: "1:08:38", end: "1:11:17", description: "Malèna is forced into relationships with occupying officers, depicted with partial nudity." }
    ],
    "11013": [ // Secretary
        { start: "0:53:16", end: "0:56:28", description: "Lee Holloway engages in consensual BDSM spanking with E. Edward Grey in his law office." },
        { start: "0:57:56", end: "0:59:30", description: "Lee types legal dictation while maintaining a specific physical posture ordered by Mr. Grey." },
        { start: "1:01:33", end: "1:02:16", description: "Lee wears a suggestive outfit while performing office administrative duties." },
        { start: "1:05:10", end: "1:07:35", description: "Mr. Grey places Lee in specialized physical restraints inside his private office suite." },
        { start: "1:09:55", end: "1:10:25", description: "Lee and Mr. Grey experience an intense emotional and physical breakthrough." },
        { start: "1:19:58", end: "1:20:33", description: "Lee sits at Mr. Grey's desk for three consecutive days without moving as a test of devotion." },
        { start: "1:42:01", end: "1:44:40", description: "Lee and Mr. Grey embrace in marital intimacy with partial upper-body nudity." }
    ],
    "106646": [ // The Wolf of Wall Street
        { start: "0:02:02", end: "0:03:05", description: "Jordan Belfort engages in erratic behavior with Naomi Lapaglia inside a sports car." },
        { start: "0:13:55", end: "0:14:15", description: "Jordan and Teresa attend a wild Stratton Oakmont office party featuring total female nudity." },
        { start: "0:38:55", end: "0:39:47", description: "Stratton Oakmont brokers participate in an outrageous party sequence with visible full-body nudity." },
        { start: "0:54:45", end: "0:55:10", description: "Donnie Azoff engages in inappropriate exposure at a crowded company celebration." },
        { start: "0:58:25", end: "0:59:30", description: "Jordan meets Naomi in her apartment, depicting Margot Robbie in a famous state of full female nudity." },
        { start: "1:02:25", end: "1:02:45", description: "Jordan and Naomi engage in intimate contact in their luxury bedroom while butler watches." },
        { start: "1:07:30", end: "1:08:30", description: "Jordan and Naomi host a wild party on their luxury yacht with visible female upper-body nudity." },
        { start: "1:12:05", end: "1:12:15", description: "Jordan takes Quaaludes during an intense business flight to Switzerland." },
        { start: "1:16:55", end: "1:17:22", description: "Jordan and Naomi engage in a turbulent bedroom argument featuring partial disrobing." },
        { start: "1:48:20", end: "1:48:38", description: "Jordan and his inner circle participate in an uninhibited penthouse party sequence." },
        { start: "2:17:30", end: "2:18:10", description: "Jordan attempts to drive home during severe Quaalude impairment." },
        { start: "2:31:20", end: "2:31:40", description: "Naomi informs Jordan of her decision to file for divorce during a bedroom confrontation." },
        { start: "2:38:30", end: "2:40:00", description: "Jordan surrenders to federal authorities following his cooperation agreement." }
    ],
    "341174": [ // Fifty Shades Darker
        { start: "0:21:52", end: "0:24:21", description: "Christian Grey and Anastasia Steele reconcile, engaging in intimate contact in his apartment shower." },
        { start: "0:34:40", end: "0:37:25", description: "Christian and Ana attend a masquerade ball in elegant attire before heading to the playroom." },
        { start: "0:42:49", end: "0:44:32", description: "Christian and Ana engage in BDSM play involving silver BEN-WA balls and silk restraints." },
        { start: "0:50:35", end: "0:52:24", description: "Christian and Ana engage in physical intimacy on his luxury yacht with female topless nudity." },
        { start: "1:04:05", end: "1:04:37", description: "Christian and Ana engage in an intimate encounter inside a crowded elevator." },
        { start: "1:23:35", end: "1:23:51", description: "Christian and Ana reconcile in the bedroom following an encounter with Leila Williams." },
        { start: "1:34:11", end: "1:34:50", description: "Ana comforts Christian after his helicopter crash, depicting partial female nudity." },
        { start: "1:51:05", end: "1:54:12", description: "Christian proposes to Ana in a room filled with flowers, followed by intimate celebration." }
    ],
    "401981": [ // Red Sparrow
        { start: "0:15:35", end: "0:16:00", description: "Dominika Egorova is forced into psychological vulnerability at State School 4." },
        { start: "0:18:43", end: "0:18:46", description: "Dominika stands before the Matron during an intense military conditioning inspection." },
        { start: "0:24:08", end: "0:24:31", description: "Dominika experiences forced disrobing in front of her class as part of Sparrow training." },
        { start: "0:32:54", end: "0:32:58", description: "A male target is depicted in a state of full nudity during an intelligence entrapment." },
        { start: "0:40:52", end: "0:40:54", description: "Dominika confronts a dangerous asset in a hotel suite in Budapest." },
        { start: "0:41:25", end: "0:41:41", description: "Dominika disrobes in a indoor swimming facility with full female nudity visible." },
        { start: "0:45:38", end: "0:46:38", description: "Dominika and Nate Nash engage in an ambiguous intimate encounter in his apartment." },
        { start: "1:24:01", end: "1:24:46", description: "Dominika undergoes interrogation and physical torture by Russian security agents." },
        { start: "1:43:09", end: "1:43:10", description: "Dominika executes a complex double-agent trade on a foggy airfield bridge." }
    ],
    "792307": [ // Poor Things
        { start: "0:20:19", end: "0:20:25", description: "Bella Baxter explores her body in Godwin's estate, discovering self-pleasure." },
        { start: "0:20:38", end: "0:20:51", description: "Bella engages in solitary self-pleasure with an apple during dinner." },
        { start: "0:23:29", end: "0:23:32", description: "Bella walks through the estate corridor with upper-body nudity." },
        { start: "0:24:43", end: "0:24:50", description: "Bella disrobes before Duncan Wedderburn in her Lisbon hotel bedroom." },
        { start: "0:25:10", end: "0:25:42", description: "Bella and Duncan engage in what she terms 'furious jumping' with full female nudity." },
        { start: "0:25:54", end: "0:27:10", description: "Bella and Duncan continue their intimate encounters across Lisbon." },
        { start: "0:27:30", end: "0:27:45", description: "Bella explores Lisbon in vibrant attire following her intimate awakening." },
        { start: "0:34:33", end: "0:34:55", description: "Bella and Duncan engage in physical intimacy inside their hotel suite." },
        { start: "0:41:05", end: "0:41:28", description: "Bella and Duncan engage in intimacy on board the ocean liner." },
        { start: "0:42:53", end: "0:43:21", description: "Bella discusses philosophy with Martha and Harry while Duncan sleeps nude." },
        { start: "0:43:49", end: "0:44:37", description: "Bella observes low-income life in Alexandria, experiencing emotional distress." },
        { start: "0:49:15", end: "0:49:21", description: "Bella arrives in Paris without money, meeting Madame Swiney." },
        { start: "1:17:00", end: "1:17:24", description: "Bella works in a Parisian brothel, discovering human psychology through clients." },
        { start: "1:27:00", end: "1:28:22", description: "Bella and Toinette form a close physical and political bond in Paris." },
        { start: "1:31:36", end: "1:31:45", description: "Bella attends socialist student meetings in Paris with Toinette." },
        { start: "1:32:15", end: "1:33:42", description: "Bella encounters Max McCandles who arrives in Paris to inform her of Godwin's illness." },
        { start: "1:33:46", end: "1:35:10", description: "Bella returns to London to reconcile with her creator Godwin Baxter." },
        { start: "1:37:16", end: "1:39:53", description: "General Alfie Blessington interrupts Bella's wedding to claim her as Victoria." },
        { start: "1:40:20", end: "1:40:31", description: "Bella resides at Blessington's estate, discovering his oppressive nature." },
        { start: "1:41:10", end: "1:41:59", description: "Bella confronts Alfie when he attempts to force a surgical procedure on her." },
        { start: "1:45:55", end: "1:48:23", description: "Bella transforms Blessington's estate into a medical practice alongside Max and Toinette." }
    ],
    "1064213": [ // Anora
        { start: "0:01:00", end: "0:04:30", description: "Anora (Ani) performs lap dances at the Headquarters exotic dance club in Brooklyn." },
        { start: "0:05:11", end: "0:05:25", description: "Ani meets Ivan (Vanya) Zakharov at the club bar, speaking Russian." },
        { start: "0:09:04", end: "0:09:50", description: "Vanya hires Ani for a private session in the club's VIP lounge." },
        { start: "0:14:45", end: "0:15:01", description: "Ani visits Vanya's luxury mansion in Brighton Beach for an exclusive week-long booking." },
        { start: "0:20:20", end: "0:20:27", description: "Ani and Vanya party with friends, engaging in physical intimacy in his indoor pool." },
        { start: "0:21:30", end: "0:21:45", description: "Vanya and Ani fly on a private jet to Las Vegas on a whim." },
        { start: "0:24:58", end: "0:25:13", description: "Vanya and Ani get impulsively married at a 24-hour wedding chapel in Las Vegas." },
        { start: "0:28:05", end: "0:28:20", description: "Ani and Vanya celebrate their marriage in his mansion with visible female upper-body nudity." },
        { start: "0:29:20", end: "0:29:32", description: "Vanya's Russian oligarch parents learn of the marriage and dispatch henchmen." },
        { start: "0:35:30", end: "0:36:04", description: "Toros, Garnick, and Igor break into the mansion to force an annulment, leading to a chaotic fight." },
        { start: "1:34:42", end: "1:38:45", description: "Ani, Igor, Toros, and Garnick search for Vanya across Coney Island nightlife spots." },
        { 2: "2:13:20", end: "2:15:00", description: "Ani and Igor share a poignant, emotional moment in his car before she leaves." }
    ]
};

let count = 0;
for (let id in descriptionsMap) {
    if (masterTimestamps[id] && masterTimestamps[id].scenes) {
        const rules = descriptionsMap[id];
        if (Array.isArray(rules)) {
            rules.forEach(rule => {
                let scene = masterTimestamps[id].scenes.find(s => s.start === rule.start);
                if (scene) {
                    scene.description = rule.description;
                } else if (rule.type) {
                    let typeScene = masterTimestamps[id].scenes.find(s => (s.type || '').toLowerCase().includes(rule.type.toLowerCase().substring(0, 5)));
                    if (typeScene) typeScene.description = rule.description;
                }
            });
        } else {
            for (let startTime in rules) {
                let scene = masterTimestamps[id].scenes.find(s => s.start === startTime);
                if (scene) {
                    scene.description = rules[startTime];
                }
            }
        }
        count++;
    }
}

fs.writeFileSync(masterTimestampsPath, JSON.stringify(masterTimestamps, null, 2), 'utf8');
console.log(`✅ Injected rich descriptions into all remaining target movies (${count} total movies updated)!`);
