// scripts/inject-custom-descriptions.js
const fs = require('fs');
const path = require('path');

const masterTimestampsPath = path.join(__dirname, '../utils/masterTimestamps.json');
const masterTimestamps = JSON.parse(fs.readFileSync(masterTimestampsPath, 'utf8'));

const customDescriptionsMap = {
    "345": [ // Eyes Wide Shut
        { type: "Profanity", description: "Strong language throughout, including around 18 uses of the F-word alongside repeated moderate profanity, crude sexual terms, and vulgar insults." },
        { type: "Violence & Gore", description: "Very mild violence-related content, limited to implied off-screen injury, brief minor intimidation, and a non-graphic corpse depiction." }
    ],
    "402": [ // Basic Instinct
        { start: "0:03:11", end: "0:05:25", description: "Explicit sexual content involving a man and woman engaged in intercourse, with full female nudity." },
        { start: "0:05:17", end: "0:05:25", description: "A deceased male character is shown lying on a bed covered in blood, with genital nudity visible." },
        { start: "0:22:16", end: "0:22:26", description: "A sequence features a female character in a state of total nudity as she begins to dress." },
        { start: "0:27:35", end: "0:27:41", description: "An interrogation sequence features a female character whose seated position and subsequent posture adjustment result in a brief instance of visible genital nudity." },
        { start: "0:36:29", end: "0:39:00", description: "A sequence depicts a non-consensual sexual encounter involving the forcible disrobing of a female character and intimate contact, followed by mutual nudity and an act of intercourse." },
        { start: "0:45:00", end: "0:45:10", description: "A brief sequence features a female character disrobing to a state of total nudity." },
        { start: "1:11:30", end: "1:16:05", description: "Explicit sexual content involving a fully nude man and woman engaged in prolonged intercourse in multiple positions, including oral sexual activity." },
        { start: "1:45:00", end: "1:45:24", description: "A scene depicts a fully nude man and woman with nudity partially obscured by other characters’ hands and body positioning." },
        { start: "2:00:50", end: "2:02:55", description: "Explicit sexual content involving a man and woman engaged in intercourse, with female topless and rear nudity visible." },
        { type: "Profanity", description: "Approximately 40 uses of the F-word and frequent crude sexual references." },
        { type: "Violence & Gore", description: "Features graphic ice-pick murders with detailed shots of blood and physical injury. Contains themes of sexual violence and assault." }
    ],
    "617": [ // Wild Things
        { start: "0:17:25", end: "0:17:52", description: "Explicit sexual content featuring female nudity, intimate sexual positioning, and audible sexual vocalization." },
        { start: "0:59:18", end: "0:59:55", description: "A sequence features a male and two female characters engaging in mutual kissing and caressing, involving visible upper-body nudity and intimate contact." },
        { start: "1:01:35", end: "1:03:20", description: "A sequence features a female character exiting a swimming pool in sheer swimwear, resulting in visible upper-body nudity through the transparent fabric while engaging in intentional physical positioning." },
        { start: "1:09:40", end: "1:10:50", description: "A sequence features two female characters in a swimming pool engaging in mutual kissing and physical embrace, with visible upper-body nudity as swimwear is removed." },
        { start: "1:32:55", end: "1:33:11", description: "Brief male nudity shown in a non-sexual shower scene, with partial genital and rear exposure." },
        { type: "Violence & Gore", description: "Violence featuring physical fights, implied murder, poisoning, drowning, gunfire, brief blood detail, and scenes of assault and injury." },
        { type: "Profanity", description: "Strong language throughout, including 30 uses of the F-word in the theatrical version (36 in the unrated version), 14 uses of the S-word, 7 uses of \"bitch,\" 1 use of the C-word, and additional frequent profanity." }
    ],
    "884": [ // Crash
        { type: "Violence & Gore", description: "Disturbing crash-related imagery including graphic injury detail, bloody wounds, disturbing corpse visuals, and intense car accident sequences throughout." },
        { type: "Profanity", description: "Strong language including 10+ uses of the F-word and frequent explicit sexual dialogue." }
    ],
    "979": [ // Irréversible
        { type: "Violence & Gore", description: "Extreme graphic violence featuring brutal assaults, sexual violence, severe beatings, bone-breaking, bloody injuries, and prolonged scenes of disturbing physical abuse." },
        { type: "Profanity", description: "Very strong coarse language throughout, including repeated use of the F-word, highly offensive sexual profanity, and other frequent vulgar insults and profanity." }
    ],
    "1278": [ // The Dreamers
        { start: "0:26:50", end: "0:27:11", description: "A sequence depicts a male and female character sharing a bed in a state of nudity, with only partial body exposure visible on screen." },
        { start: "0:31:42", end: "0:32:20", description: "A sequence depicts a male character in a state of full-body nudity while bathing." },
        { start: "0:45:11", end: "0:46:36", description: "A sequence depicts a male character engaging in an act of masturbation while facing away from the camera in the presence of a man and a woman." },
        { start: "0:51:13", end: "0:51:51", description: "An intense sequence features a female character dancing while unbuttoning her shirt to reveal upper-body nudity, followed by the removal of her skirt to reveal undergarments while being observed by two male characters." },
        { start: "0:52:55", end: "1:02:52", description: "A sustained sequence depicts a male and female character in a state of full-body nudity while engaging in sexual activity." },
        { start: "1:03:12", end: "1:05:25", description: "A sequence depicts nudity of a female character in a bed, partially obscured by framing and camera angles." },
        { start: "1:07:55", end: "1:08:45", description: "An long sequence features a male character in a state of lower-body nudity while partially clothed in a shirt." },
        { start: "1:13:42", end: "1:20:19", description: "An extended bathing sequence features both a male and female character nudity." },
        { start: "1:27:20", end: "1:29:50", description: "Explicit sexual content involving topless female nudity and oral sexual activity." },
        { start: "1:38:00", end: "1:38:33", description: "A sequence features both a male and female character in a state of full-body nudity." },
        { start: "1:40:40", end: "1:41:20", description: "A sequence features a female character in a state of full-body nudity as she awakens in bed." },
        { type: "Profanity", description: "Approximately 10 uses of strong sexual expletives (F-words)." },
        { type: "Violence & Gore", description: "Depicts riot violence involving the throwing of bricks and petrol bombs. Contains a suicide attempt by gas and themes of self-harm." }
    ],
    "2251": [ // Unfaithful
        { type: "Violence & Gore", description: "Moderate violence includes minor accidental injuries and brief physical confrontations, culminating in a sudden bloody killing with repeated blunt-force blows and visible bloodshed." },
        { type: "Profanity", description: "Moderate to strong language throughout, including more than 10 uses of the F-word alongside repeated coarse profanity and occasional crude terminology." }
    ],
    "4588": [ // Lust, Caution
        { start: "1:00:15", end: "1:01:27", description: "A man and woman are shown engaging in sexual activity under a bedsheet, with nudity obscured." },
        { start: "1:01:51", end: "1:02:40", description: "A man and woman are shown engaging in sexual activity, and in a later moment the woman is briefly seen emerging from under a bedsheet fully nude." },
        { start: "1:32:35", end: "1:34:26", description: "Sexual violence involving forced disrobing, non-consensual sexual activity, and explicit nudity with BDSM elements." },
        { start: "1:40:20", end: "1:43:36", description: "Explicit sexual content involving a fully nude man and woman engaged in intercourse with intimate physical and oral sexual contact in multiple positions." },
        { start: "1:52:50", end: "1:55:32", description: "Explicit sexual content involving a fully nude man and woman engaged in intercourse with intense physical intimacy and audible moaning." },
        { type: "Profanity", description: "Minimal use of strong language (approximately 1 use of the F-word)." },
        { type: "Violence & Gore", description: "Contains graphic wartime brutality, including an execution by firing squad and a brutal stabbing. Includes themes of sexual assault and predatory behavior." }
    ],
    "10867": [ // Malèna
        { type: "Violence & Gore", description: "Moderate to strong violence includes physical assaults, public mob brutality, slapping and punching, and a prolonged beating resulting in visible blood and bruising." },
        { type: "Profanity", description: "Moderate coarse language includes several uses of the F-word, repeated profanity, crude insults, and occasional sexual slang." }
    ],
    "11013": [ // Secretary
        { type: "Violence & Gore", description: "Strong disturbing themes involving self-harm with brief bloody imagery, along with BDSM-related sexual content and psychologically intense material." },
        { type: "Profanity", description: "Strong coarse language throughout, including repeated uses of the F-word, other profanity, and crude sexual insults." }
    ],
    "106646": [ // The Wolf of Wall Street
        { type: "Profanity", description: "Pervasive strong language with over 500 uses of the F-word and frequent use of the C-word." },
        { type: "Violence & Gore", description: "Depicts domestic abuse, drug-induced injuries, and reckless behavior. Includes scenes of vomiting and physical altercations." }
    ],
    "152584": [ // Blue Is the Warmest Color
        { start: "0:18:05", end: "0:19:06", description: "Explicit sexual content featuring female nudity, masturbation, and sustained intimate activity with audible sexual vocalization." },
        { start: "0:22:04", end: "0:24:22", description: "Lengthy explicit sexual activity featuring full male and female nudity with sustained intimate activity in multiple positions." },
        { start: "1:14:53", end: "1:21:46", description: "Lengthy explicit same-sex sexual content featuring full female nudity, oral sexual activity, intimate physical contact, and sustained sexual activity in multiple positions." },
        { start: "1:30:32", end: "1:31:56", description: "Explicit sexual content featuring full female nudity and sustained simulated sexual activity in multiple positions, culminating in orgasm." },
        { start: "1:38:18", end: "1:40:53", description: "Explicit sexual content featuring full female nudity, intimate kissing and oral sexual activity followed by post-coital dialogue." },
        { start: "1:41:01", end: "1:41:49", description: "A non-sexual sequence features a female character posing for a portrait in a state of full-body nudity, depicted through panning shots and technical close-ups of upper and lower-body nudity." },
        { start: "2:00:01", end: "2:03:49", description: "A sequence depicts a female character undressing to a state of full-body nudity before entering a bed, where a second female character is shown with visible upper-body nudity while partially obscured by bedding." },
        { start: "2:47:58", end: "2:48:20", description: "A bathing sequence features a female character in a state of full-body nudity." },
        { type: "Profanity", description: "Approximately 12 uses of strong sexual expletives, including sexual slurs and derogatory language." },
        { type: "Violence & Gore", description: "Features physical altercations including face-slapping and shoving during intense emotional conflict." }
    ],
    "216015": [ // Fifty Shades of Grey
        { start: "0:43:10", end: "0:46:25", description: "Explicit sexual content involving a man and woman, including disrobing, visible female topless and rear nudity, male rear nudity, and sustained sexual activity." },
        { start: "0:47:49", end: "0:50:15", description: "Explicit sexual content involving a man and woman, including disrobing, female topless nudity, male rear nudity, bondage, and sustained intercourse with visible sexual activity and audible sexual sounds." },
        { start: "1:03:00", end: "1:06:10", description: "A consensual BDSM scene involving restraint and visible female topless nudity." },
        { start: "1:18:25", end: "1:18:56", description: "A consensual BDSM scene involving restraint and spanking, with partial female nudity." },
        { start: "1:23:56", end: "1:29:35", description: "Explicit sexual content involving a man and woman, including disrobing, BDSM elements, full nudity, and sustained intercourse." },
        { start: "1:45:47", end: "1:47:36", description: "Explicit sexual content involving full nudity of woman, BDSM elements, and sexual intercourse." },
        { start: "1:51:50", end: "1:54:21", description: "Explicit sexual content involving disrobing, full female nudity, BDSM elements." },
        { type: "Profanity", description: "The dialogue features infrequent strong profanity, including approximately seven uses of the F-word (some in sexual context), alongside moderate coarse language and occasional vulgar expressions." },
        { type: "Violence & Gore", description: "A film depicting BDSM-themed sexual relationships with bondage, restraint, and spanking elements, brief violence." }
    ],
    "341174": [ // Fifty Shades Darker
        { type: "Violence & Gore", description: "Moderate violence and threat-related content, including gunfire, attempted sexual assault, a helicopter crash, physical confrontations." },
        { type: "Profanity", description: "Strong language throughout, including repeated uses of the F-word and other coarse profanity, along with crude insults." }
    ],
    "401981": [ // Red Sparrow
        { type: "Violence & Gore", description: "Graphic violence involving sexual assault attempts, torture, mutilation, bloody stabbings, disturbing injury detail, and prolonged scenes of physical suffering." },
        { type: "Profanity", description: "Contains strong language including uses of the F-word, sexual expletives, and repeated coarse profanity." }
    ],
    "664413": [ // 365 Days
        { start: "0:11:30", end: "0:13:28", description: "Explicit sexual content featuring oral sexual activity with male genital visibility, alongside a separate implied woman masturbation scene with minimal visual detail." },
        { start: "0:44:11", end: "0:46:44", description: "A sequence depicts a female character disrobing to a state of total nudity while entering a shower, involving visible upper-body and rear nudity, followed by a male character joining her, also exhibiting rear nudity." },
        { start: "0:53:13", end: "0:59:05", description: "Explicit sexual content involving nudity, bondage/restraint, non-consensual elements, forced sexual witnessing, oral sexual activity, and brief male rear nudity and woman topless nudity." },
        { start: "1:07:55", end: "1:12:50", description: "A prolonged sexual montage depicting a couple engaged in intercourse in multiple positions, featuring full nudity including female topless and rear nudity, male rear nudity, and brief male genital exposure." },
        { start: "1:18:22", end: "1:21:07", description: "A sexual scene shows a couple engaging in intercourse in a bathroom, including full female nudity and brief male rear nudity, with sexual climax." },
        { start: "1:32:30", end: "1:36:07", description: "Explicit sexual content involving a man and woman engaged in intercourse and oral sexual activity, with full female nudity." },
        { type: "Violence & Gore", description: "Content featuring serious sexual violence themes including kidnapping, threats of rape, non-consensual sexual touching, forced restraint, and attempted assault, alongside strong violence with shootings and visible blood." },
        { type: "Profanity", description: "Strong and frequent profanity throughout, including repeated uses of the F-word along with other crude, sexual, and offensive language." }
    ],
    "792307": [ // Poor Things
        { type: "Violence & Gore", description: "Strong disturbing content throughout, featuring graphic surgical and body-horror imagery, corpse mutilation, animal deaths, bloody injuries, threats, physical assaults, and unsettling depictions of experimental medical procedures." },
        { type: "Profanity", description: "Very strong language throughout, including more than 30+ uses of the F-word, repeated sexual and anatomical references, mild obscenities, frequent insulting and derogatory name-calling, and aggressive verbal outbursts." }
    ],
    "1064213": [ // Anora
        { type: "Violence & Gore", description: "Mild to moderate violence includes biting, punching, and several physical confrontations involving pushing, grabbing, and restraint. Some characters sustain minor injuries such as bruises, scars, and a black eye, and one woman is briefly restrained and tied up." },
        { type: "Profanity", description: "Very strong language throughout, including extremely frequent use of the F-word (over 500 uses), repeated coarse profanity, sexualized insults, degrading slurs, and occasional highly offensive language." }
    ],
    "290098": [ // The Handmaiden
        { start: "0:21:45", end: "0:21:51", description: "A sequence features a female character in a bathtub with visible upper-body nudity." },
        { start: "0:51:38", end: "0:54:38", description: "An intense sequence features passionate kissing and sexual activity in intimate positions with visible female nudity." },
        { start: "1:47:10", end: "1:47:20", description: "Explicit sexual content involving disrobing, visible female topless nudity, intimate touching, and implied sexual vocalization." },
        { start: "1:48:38", end: "1:48:48", description: "Brief female topless nudity as a woman rises from bed." },
        { start: "1:58:45", end: "2:03:06", description: "Lengthy explicit same-sex sexual content featuring female nudity, intimate oral contact, and sustained sexual activity in multiple positions." },
        { start: "2:21:10", end: "2:23:15", description: "Explicit sexual content involving intimate breast contact and moaning." },
        { start: "2:32:26", end: "2:32:33", description: "Brief rear nudity as a woman removes her robe, with visible buttocks and partial back exposure." },
        { start: "2:33:32", end: "2:34:30", description: "Implied sexual activity involving masturbation and moaning." },
        { start: "2:40:10", end: "2:42:20", description: "Explicit same-sex sexual content featuring full nudity, passionate kissing, intimate genital contact, and sustained sexual activity." }
    ],
    "181886": [ // Nymphomaniac: Vol. I
        { start: "0:21:40", end: "0:22:00", description: "A brief topless image of a female character appears on a poster in the background." },
        { start: "0:23:30", end: "0:24:05", description: "A male and female character are shown engaging in sexual activity, with most nudity obscured by camera angles." },
        { start: "0:23:38", end: "0:23:49", description: "A male and female character are shown engaging in sexual activity, with genital exposure." },
        { start: "0:25:33", end: "0:25:36", description: "A female character is shown briefly topless while talking to her friend." },
        { start: "0:34:18", end: "0:34:34", description: "A male and female character are shown engaging in sexual activity." },
        { start: "0:41:10", end: "0:42:17", description: "A male and female character are shown engaging in oral sexual activity." },
        { start: "0:51:03", end: "0:52:55", description: "A montage depicts a male and female character engaging in sexual activity, including full-body nudity." },
        { start: "0:59:10", end: "0:59:36", description: "A hospital scene depicts a female character's genital area exposed for a medical procedure." },
        { start: "1:16:25", end: "1:16:36", description: "Sexual activity is depicted showing female topless nudity, while the male character's nudity is obscured by the camera angle." },
        { start: "1:21:40", end: "1:22:55", description: "A female character is implied to be masturbating. Her hand is seen under clothing, so no graphic details are shown." },
        { start: "2:01:50", end: "2:02:08", description: "A male and female character are shown engaging in sexual activity, with genital exposure." },
        { start: "2:03:30", end: "2:03:42", description: "A male character's backside is shown while he is lying down on a hospital bed." },
        { start: "2:03:43", end: "2:04:35", description: "A male and female character are shown engaging in sexual activity." },
        { start: "2:13:20", end: "2:17:30", description: "A montage depicts male and female characters in a state of full nudity, including oral sexual activity." },
        { start: "2:20:50", end: "2:23:40", description: "A male and female character are shown engaging in sexual activity, including full-state nudity." },
        { start: "2:24:05", end: "2:25:00", description: "During the credits, several scenes of sexual activity and nudity appear." }
    ]
};

let updatedCount = 0;

for (let tmdbId in customDescriptionsMap) {
    if (masterTimestamps[tmdbId]) {
        const item = masterTimestamps[tmdbId];
        const patches = customDescriptionsMap[tmdbId];

        if (!item.scenes) item.scenes = [];

        patches.forEach(patch => {
            if (patch.start) {
                // Match by timestamp start time
                let foundScene = item.scenes.find(s => s.start === patch.start);
                if (foundScene) {
                    foundScene.description = patch.description;
                    if (patch.end) foundScene.end = patch.end;
                } else {
                    item.scenes.push({
                        start: patch.start,
                        end: patch.end || "",
                        type: "Sex & Nudity",
                        severity: "High",
                        description: patch.description
                    });
                }
            } else if (patch.type) {
                // Match by type (Violence & Gore / Profanity)
                let foundScene = item.scenes.find(s => (s.type || '').toLowerCase().includes(patch.type.toLowerCase().substring(0, 5)));
                if (foundScene) {
                    foundScene.description = patch.description;
                } else {
                    item.scenes.push({
                        start: "",
                        end: "",
                        type: patch.type,
                        severity: "High",
                        description: patch.description
                    });
                }
            }
        });

        updatedCount++;
    }
}

fs.writeFileSync(masterTimestampsPath, JSON.stringify(masterTimestamps, null, 2), 'utf8');
console.log(`✅ Injected custom descriptions into ${updatedCount} movies in masterTimestamps.json!`);
