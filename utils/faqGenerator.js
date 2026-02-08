// utils/faqGenerator.js

/**
 * Checks a movie's sensitive content timeline for specific keywords
 * and generates a corresponding FAQ object.
 *
 * @param {object} movieData The movie data object, which may contain sensitive_content_timeline.
 * @param {string} movieName The name of the movie.
 * @returns {{question: string, answer: string} | null} An FAQ object if sensitive scenes are found or if the timeline exists (to provide a "No" answer), otherwise null.
 */
export const generateSensitiveContentFAQ = (movieData, movieName) => {
  // Return null if the sensitive content timeline doesn't exist or is empty, as there's nothing to analyze.
  if (!movieData?.sensitive_content_timeline || movieData.sensitive_content_timeline.length === 0) {
    return null;
  }

  const sensitiveKeywords = ['sex', 'nudity', 'partial nudity', 'sexual content', 'suggestive'];
  
  const sensitiveScenes = movieData.sensitive_content_timeline.filter(scene =>
    scene.tags && Array.isArray(scene.tags) && scene.tags.some(tag => 
      sensitiveKeywords.some(keyword => tag.toLowerCase().includes(keyword.toLowerCase()))
    )
  );

  // If sensitive scenes are found, construct the "Yes" answer.
  if (sensitiveScenes.length > 0) {
    const timestamps = sensitiveScenes.map(scene => scene.timestamp).join(', ');
    
    // Create a unique, cleaned-up list of the types of content found.
    const contentTypesSet = new Set(sensitiveScenes.flatMap(scene => 
      scene.tags.filter(tag => sensitiveKeywords.some(keyword => tag.toLowerCase().includes(keyword.toLowerCase())))
    ));
    const contentTypes = Array.from(contentTypesSet).join(', ');

    return {
      question: `Does ${movieName} contain sex, nudity, or sexual scenes?`,
      answer: `Yes, ${movieName} contains instances of ${contentTypes}. Viewer discretion is advised. You can find a detailed breakdown of these scenes in our 'Sensitive Content' section.`
    };
  }

  // If the timeline exists but no sensitive scenes are found, provide a definitive "No" answer.
  return {
    question: `Does ${movieName} contain sex, nudity, or sexual scenes?`,
    answer: `Based on our analysis, ${movieName} does not contain any explicit sexual scenes or nudity.`
  };
};
