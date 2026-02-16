// ✅ CLEAN SCHEMA GENERATOR - SHARED ACROSS ALL COLLECTIONS
export const generateCleanMovieSchema = (movie, movieData, currentMovieYear, collectionSlug, platformName = null, internalData = null) => {
  const data = internalData || movie.movieData || {}; 
  
  // Platform-specific description
  let platformText = '';
  if (platformName) {
    platformText = ` streaming on ${platformName}`;
  }
  
  const cleanDescription = (
    data?.synopsis || 
    movie.description || 
    `${movie.Title} (${currentMovieYear}) is a high-octane film${platformText}. Featured in Filmiway's curated collection.`
  ).substring(0, 350).trim();

  const movieSchema = {
    "@context": "https://schema.org",
    "@type": "Movie",
    "name": movie.Title,
    "description": cleanDescription,
    "datePublished": currentMovieYear,
    "image": movieData?.poster_path 
      ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}` 
      : undefined,
    "director": data?.director ? {
      "@type": "Person",
      "name": data.director
    } : undefined,
    "actor": data?.cast?.slice(0, 5).map(actor => ({
      "@type": "Person",
      "name": actor
    })) || [],
    "aggregateRating": data?.rating ? {
      "@type": "AggregateRating",
      "ratingValue": data.rating,
      "bestRating": "10",
      "worstRating": "1",
      "ratingCount": "1"
    } : undefined,
    "genre": data?.dna ? Object.keys(data.dna) : ["Drama"],
    "url": `https://filmiway.com/movies/${collectionSlug}/${movie.imdbID}`
  };

  const faqSchema = null;

  return { movieSchema, faqSchema };
};