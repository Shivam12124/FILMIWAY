// utils/sensitiveContent.js - Sensitive content timelines
const timeToSeconds = (timeStr) => {
    const parts = timeStr.split(':').map(Number);
    if (parts.length === 3) {
        return parts[0] * 3600 + parts[1] * 60 + parts[2];
    }
    if (parts.length === 2) {
        return parts[0] * 60 + parts[1];
    }
    return 0;
};

export const SENSITIVE_TIMELINES = {
    14337: { scenes: [] }, // Primer - Clean film
    4960: { // Synecdoche, New York - 6 scenes
        scenes: [
            { start: timeToSeconds("34:24"), end: timeToSeconds("35:05"), type: "Sex" },
            { start: timeToSeconds("46:40"), end: timeToSeconds("46:47"), type: "Kissing" },
            { start: timeToSeconds("56:35"), end: timeToSeconds("57:04"), type: "Sex (not graphic)" },
            { start: timeToSeconds("1:01:35"), end: timeToSeconds("1:02:12"), type: "Nudity" },
            { start: timeToSeconds("1:33:04"), end: timeToSeconds("1:35:15"), type: "Nudity" },
            { start: timeToSeconds("1:38:35"), end: timeToSeconds("1:38:40"), type: "Kissing (casual)" }
        ]
    },
    1018: { // Mulholland Drive - 5 scenes
        scenes: [
            { start: timeToSeconds("1:19:38"), end: timeToSeconds("1:20:02"), type: "Kissing" },
            { start: timeToSeconds("1:38:45"), end: timeToSeconds("1:42:18"), type: "Nudity + Intimate Kissing" },
            { start: timeToSeconds("2:01:27"), end: timeToSeconds("2:02:59"), type: "Partial Nudity + Intimate Situation" },
            { start: timeToSeconds("2:04:36"), end: timeToSeconds("2:05:03"), type: "Kissing" },
            { start: timeToSeconds("2:15:50"), end: timeToSeconds("2:15:58"), type: "Kissing" }
        ]
    },
    206487: { // Predestination - 3 scenes
        scenes: [
            { start: timeToSeconds("19:07"), end: timeToSeconds("19:20"), type: "Sex + Partial Nudity" },
            { start: timeToSeconds("42:20"), end: timeToSeconds("42:50"), type: "Nudity" },
            { start: timeToSeconds("1:12:50"), end: timeToSeconds("1:12:58"), type: "Kissing (casual)" }
        ]
    },
    220289: { // Coherence - 1 scene
        scenes: [
            { start: timeToSeconds("53:27"), end: timeToSeconds("53:34"), type: "Casual Kissing" }
        ]
    },
    141: { // Donnie Darko - 3 scenes
        scenes: [
            { start: timeToSeconds("1:08:02"), end: timeToSeconds("1:08:16"), type: "Kissing" },
            { start: timeToSeconds("1:17:00"), end: timeToSeconds("1:17:08"), type: "Kissing" },
            { start: timeToSeconds("1:31:10"), end: timeToSeconds("1:31:30"), type: "Intimate Kissing" }
        ]
    },
    181886: { // Enemy - 12 scenes (MOST SENSITIVE)
        scenes: [
            { start: timeToSeconds("1:46"), end: timeToSeconds("1:50"), type: "Partial Nudity (glimpse)" },
            { start: timeToSeconds("2:50"), end: timeToSeconds("4:58"), type: "Nudity" },
            { start: timeToSeconds("7:23"), end: timeToSeconds("7:29"), type: "Kissing" },
            { start: timeToSeconds("7:50"), end: timeToSeconds("8:05"), type: "Sex" },
            { start: timeToSeconds("8:37"), end: timeToSeconds("8:42"), type: "Sex" },
            { start: timeToSeconds("9:10"), end: timeToSeconds("9:15"), type: "Sex" },
            { start: timeToSeconds("14:38"), end: timeToSeconds("15:10"), type: "Sex" },
            { start: timeToSeconds("45:20"), end: timeToSeconds("45:52"), type: "Nudity" },
            { start: timeToSeconds("1:14:25"), end: timeToSeconds("1:14:41"), type: "Partial Nudity" },
            { start: timeToSeconds("1:19:30"), end: timeToSeconds("1:20:35"), type: "Sex" },
            { start: timeToSeconds("1:22:20"), end: timeToSeconds("1:22:42"), type: "Intimate Kissing + Partial Nudity" },
            { start: timeToSeconds("1:23:55"), end: timeToSeconds("1:24:08"), type: "Nudity" }
        ]
    },
    1381: { // The Fountain - 2 scenes
        scenes: [
            { start: timeToSeconds("26:34"), end: timeToSeconds("27:46"), type: "Intimate Kissing + Partial Nudity" },
            { start: timeToSeconds("36:57"), end: timeToSeconds("37:01"), type: "Partial Nudity (glimpse)" }
        ]
    },
    31011: { // Mr. Nobody - 6 scenes
        scenes: [
            { start: timeToSeconds("31:48"), end: timeToSeconds("32:00"), type: "Kissing" },
            { start: timeToSeconds("48:56"), end: timeToSeconds("49:10"), type: "Intimate Kissing" },
            { start: timeToSeconds("1:03:58"), end: timeToSeconds("1:05:08"), type: "Intimate Kissing + Partial Nudity" },
            { start: timeToSeconds("1:08:27"), end: timeToSeconds("1:08:31"), type: "Kissing" },
            { start: timeToSeconds("1:17:08"), end: timeToSeconds("1:17:42"), type: "Sex" },
            { start: timeToSeconds("1:35:10"), end: timeToSeconds("1:36:58"), type: "Intimate Kissing + Partial Nudity" }
        ]
    },
    11324: { // Shutter Island - 2 scenes
        scenes: [
            { start: timeToSeconds("1:10:43"), end: timeToSeconds("1:10:47"), type: "Nudity" },
            { start: timeToSeconds("1:59:03"), end: timeToSeconds("1:59:06"), type: "Casual Kissing" }
        ]
    }
};

// Function to get sensitive content types for SEO descriptions
export const getSensitiveContentTypes = (tmdbId) => {
    const sensitiveData = SENSITIVE_TIMELINES[tmdbId];
    if (!sensitiveData?.scenes?.length) return null;
    
    const types = new Set();
    sensitiveData.scenes.forEach(scene => {
        const lowerType = scene.type.toLowerCase();
        if (lowerType.includes('sex')) types.add('intimate scenes');
        if (lowerType.includes('nudity')) types.add('nudity');
        if (lowerType.includes('kissing')) types.add('kissing scenes');
    });
    
    return Array.from(types);
};
