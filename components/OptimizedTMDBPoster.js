// components/OptimizedTMDBPoster.js - CREATE THIS NEW FILE
import Image from 'next/image';

const OptimizedTMDBPoster = ({ 
  movie, 
  priority = false, 
  className = "w-full h-full object-cover",
  width = 300,
  height = 450 
}) => {
  // Handle missing poster_path
  const posterPath = movie.poster_path || movie.Poster;
  
  if (!posterPath || posterPath === 'N/A') {
    return (
      <div className={`${className} bg-gray-800 flex items-center justify-center`}>
        <span className="text-gray-400 text-sm">No Image</span>
      </div>
    );
  }

  // Build the full URL
  const posterUrl = posterPath.startsWith('http') 
    ? posterPath 
    : `https://image.tmdb.org/t/p/w500${posterPath}`;

  return (
    <Image
      src={posterUrl}
      alt={`${movie.Title || movie.title} movie poster`}
      width={width}
      height={height}
      priority={priority}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
      className={className}
    />
  );
};

export default OptimizedTMDBPoster;
