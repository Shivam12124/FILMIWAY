const TMDB_API_KEY = "6054e5498fb2619274454959c38bbdfa";

async function fetchMovies(category) {
  const urlCategoryMap = {
    trending: `trending/movie/week`,
    acclaimed: `movie/top_rated`,
    popular: `movie/popular`,
  };

  const url = `https://api.themoviedb.org/3/${urlCategoryMap[category]}?api_key=${TMDB_API_KEY}&language=en-US&page=1`;
  
  const res = await fetch(url);
  const data = await res.json();
  return data.results || [];
}
