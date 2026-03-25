/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ CORE SETTINGS
  trailingSlash: false,
  reactStrictMode: false,

  // ⚡ OPTIMIZED: Image settings with modern formats
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.themoviedb.org',
        pathname: '/**',
      },
    ],
    // ⚡ NEW: Modern image formats (AVIF/WebP save 50%+ bandwidth)
    formats: ['image/avif', 'image/webp'],
    // ⚡ NEW: Cache images for 30 days (faster repeat visits)
    minimumCacheTTL: 60 * 60 * 24 * 30,
    // ⚡ NEW: Optimized device sizes
    deviceSizes: [640, 768, 1024, 1280, 1536],
    // ⚡ NEW: Optimized image sizes (matches your actual usage)
    imageSizes: [150, 185, 200, 250, 300],
  },

  // ✅ ENVIRONMENT VARIABLES
  env: {
    NEXT_PUBLIC_TMDB_API_KEY: process.env.NEXT_PUBLIC_TMDB_API_KEY,
  },

  // ✅ PERFORMANCE SETTINGS
  generateEtags: true, 
  poweredByHeader: false,
  compress: true,
  swcMinify: true, // ⚡ NEW: Faster minification

  // ✅ REDIRECTS
  async redirects() {
    return [
      {
        source: '/contact',
        destination: '/contact-us',
        permanent: true,
      },
      // ✅ Legacy Movie Folder Redirects (Protecting SEO Traffic)
      { source: '/movies/black-swan/:id', destination: '/movies/movies-like-black-swan/:id', permanent: true },
      { source: '/movies/crime-thriller/:id', destination: '/movies/best-crime-thriller-movies/:id', permanent: true },
      { source: '/movies/detective-thriller/:id', destination: '/movies/best-detective-thriller-movies/:id', permanent: true },
      { source: '/movies/donnie-darko/:id', destination: '/movies/movies-like-donnie-darko/:id', permanent: true },
      { source: '/movies/eyes-wide-shut/:id', destination: '/movies/movies-like-eyes-wide-shut/:id', permanent: true },
      { source: '/movies/interstellar/:id', destination: '/movies/movies-like-interstellar/:id', permanent: true },
      { source: '/movies/like-prestige/:id', destination: '/movies/movies-like-the-prestige/:id', permanent: true },
      { source: '/movies/matrix/:id', destination: '/movies/movies-like-the-matrix/:id', permanent: true },
      { source: '/movies/mystery-thriller/:id', destination: '/movies/best-mystery-thriller-movies/:id', permanent: true },
      { source: '/movies/oldboy/:id', destination: '/movies/movies-like-oldboy/:id', permanent: true },
      { source: '/movies/parasite/:id', destination: '/movies/movies-like-parasite/:id', permanent: true },
      { source: '/movies/psych-thriller/:id', destination: '/movies/best-psychological-thriller-movies/:id', permanent: true },
      { source: '/movies/revenge/:id', destination: '/movies/best-revenge-movies/:id', permanent: true },
      { source: '/movies/sci-fi/:id', destination: '/movies/best-sci-fi-movies/:id', permanent: true },
      { source: '/movies/survival/:id', destination: '/movies/best-survival-movies/:id', permanent: true },
      { source: '/movies/thriller/:id', destination: '/movies/best-thriller-movies/:id', permanent: true },
      { source: '/movies/heist-thriller/:id', destination: '/movies/best-heist-thriller-movies/:id', permanent: true },
      { source: '/movies/time-travel/:id', destination: '/movies/best-time-travel-movies/:id', permanent: true },
      { source: '/movies/war-films/:id', destination: '/movies/best-war-films/:id', permanent: true },
      { source: '/movies/like-inception/:id', destination: '/movies/movies-like-inception/:id', permanent: true },
      { source: '/movies/like-memento/:id', destination: '/movies/movies-like-memento/:id', permanent: true },
      { source: '/movies/like-se7en/:id', destination: '/movies/movies-like-se7en/:id', permanent: true },
      { source: '/movies/like-shutter-island/:id', destination: '/movies/movies-like-shutter-island/:id', permanent: true },
      
    ];
  },

  // ✅ BUILD CACHE
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },
};

module.exports = nextConfig;
