const fs = require('fs');
const dataFile = 'utils/eroticRomanceMovieData.js';
let dataCode = fs.readFileSync(dataFile, 'utf8');

const faqRegex = /'Indecent Proposal': \[\s*\{[\s\S]*?\}\s*\]\s*\};/;
const faqReplace = `'Indecent Proposal': [
        { question: "Does Indecent Proposal have violence and gore?", answer: "According to the Filmiway Parents Guide, the violence in Indecent Proposal is rated as None. The film contains no actual violence, with no notable violent or graphic content." },
        { question: "Does Indecent Proposal have profanity or swearing?", answer: "The profanity in Indecent Proposal is rated as Moderate. Moderate language includes around 5-6 uses of the F-word alongside occasional coarse profanity, mild sexual references, and insulting language." },
        { question: "What is the central moral dilemma?", answer: "The film presents a terrifyingly simple question: Is a marriage strong enough to survive a transactional infidelity if the financial reward solves all their problems? It examines whether love can truly be separated from money." },
        { question: "How does John Gage manipulate the couple?", answer: "Gage (Robert Redford) uses his immense wealth not just to buy a night with Diana, but to exploit the cracks already present in their marriage. He weaponizes David's insecurity and financial desperation to make the offer impossible to refuse." },
        { question: "Why does the deal destroy them?", answer: "While Diana views the night as a physical transaction to save their future, David is consumed by jealousy and paranoia. The film argues that the true cost wasn't the physical act, but the total destruction of their mutual trust." },
        { question: "What makes Adrian Lyne the perfect director for this?", answer: "Lyne (who also directed Fatal Attraction and Unfaithful) is a master of the erotic thriller. He excels at taking glossy, upper-middle-class lives and injecting them with highly stylized, devastating moral compromises that challenge the audience's own ethics." }
    ],
    'Nymphomaniac: Vol. I': [
        { question: "Does Nymphomaniac: Vol. I have violence and gore?", answer: "According to the Filmiway Parents Guide, the violence in Nymphomaniac is rated as Moderate. Depicts themes of intense psychological trauma, self-harm, and occasional physical altercations." },
        { question: "Does Nymphomaniac: Vol. I have profanity or swearing?", answer: "The profanity in Nymphomaniac: Vol. I is rated as High. Frequent, strong, and highly explicit sexual language is used throughout the entire film." },
        { question: "Why is Nymphomaniac: Vol. I rated NC-17?", answer: "Nymphomaniac: Vol. I earns its NC-17 rating due to extreme sexual content, high nudity, and intense explicit language. Adults can use our timestamps to skip the explicit content." },
        { question: "What makes Lars von Trier's approach unique?", answer: "Unlike mainstream erotic cinema, von Trier uses raw sexuality not to titillate, but to brutally deconstruct the human psyche, religion, and emotional isolation." }
    ]
};`;

if(dataCode.match(faqRegex)) {
    dataCode = dataCode.replace(faqRegex, faqReplace);
    fs.writeFileSync(dataFile, dataCode);
    console.log("Updated FAQs successfully");
} else {
    console.log("Failed to match FAQ regex");
}
