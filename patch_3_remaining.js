const fs = require('fs');
const path = require('path');
const componentsDir = path.join(__dirname, 'components');

// 1. Interstellar
let file = path.join(componentsDir, 'InterstellarSEOFAQSection.js');
let code = fs.readFileSync(file, 'utf8');
const interRegex = /const faqsFromData = movie\?\.Title && INTERSTELLAR_MOVIE_FAQS\?\.\[movie\.Title\][\s\n]*\? INTERSTELLAR_MOVIE_FAQS\[movie\.Title\][\s\n]*: \[\];/;
const interReplace = `const rawFaqs = movie?.Title && INTERSTELLAR_MOVIE_FAQS?.[movie.Title] 
        ? INTERSTELLAR_MOVIE_FAQS[movie.Title] 
        : [];
    const faqsFromData = rawFaqs.map(faq => {
        if (faq.answer && faq.answer.includes("[DYNAMIC_SCORE]")) {
            return {
                ...faq,
                answer: faq.answer.replace("[DYNAMIC_SCORE]", movie?.safetyScore || 5).replace("[DYNAMIC_LABEL]", movie?.safetyLabel || "Watch With Caution")
            };
        }
        return faq;
    });`;
code = code.replace(interRegex, interReplace);
fs.writeFileSync(file, code);
console.log("Patched Interstellar");

// 2. SciFi
file = path.join(componentsDir, 'SciFiSEOFAQSection.js');
code = fs.readFileSync(file, 'utf8');
const scifiRegex = /const faqsFromData = getVisibleMovieFAQs\(title, movie\?\.tmdbId, currentRuntime\);/;
const scifiReplace = `const rawFaqs = getVisibleMovieFAQs(title, movie?.tmdbId, currentRuntime);
  const faqsFromData = rawFaqs ? rawFaqs.map(faq => {
      if (faq.answer && faq.answer.includes("[DYNAMIC_SCORE]")) {
          return {
              ...faq,
              answer: faq.answer.replace("[DYNAMIC_SCORE]", movie?.safetyScore || 5).replace("[DYNAMIC_LABEL]", movie?.safetyLabel || "Watch With Caution")
          };
      }
      return faq;
  }) : [];`;
code = code.replace(scifiRegex, scifiReplace);
fs.writeFileSync(file, code);
console.log("Patched SciFi");

// 3. WarFilms
file = path.join(componentsDir, 'WarFilmsSEOFAQSection.js');
code = fs.readFileSync(file, 'utf8');
const warRegex = /const faqsFromData = getVisibleMovieFAQs\(movieTitle, movie\?\.tmdbId, currentRuntime\);/;
const warReplace = `const rawFaqs = getVisibleMovieFAQs(movieTitle, movie?.tmdbId, currentRuntime);
    const faqsFromData = rawFaqs ? rawFaqs.map(faq => {
        if (faq.answer && faq.answer.includes("[DYNAMIC_SCORE]")) {
            return {
                ...faq,
                answer: faq.answer.replace("[DYNAMIC_SCORE]", movie?.safetyScore || 5).replace("[DYNAMIC_LABEL]", movie?.safetyLabel || "Watch With Caution")
            };
        }
        return faq;
    }) : [];`;
code = code.replace(warRegex, warReplace);
fs.writeFileSync(file, code);
console.log("Patched WarFilms");
