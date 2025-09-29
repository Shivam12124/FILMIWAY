/** @type {import('next').NextConfig} */
const nextConfig = {
  // 🔥 STATIC EXPORT FOR NETLIFY - WORKS WITH SSG
  output: 'export',
  trailingSlash: true,
  
  // 🔥 MINIMAL CONFIG - NO FANCY STUFF
  reactStrictMode: false,
  
  images: {
    unoptimized: true,
    domains: [
      'image.tmdb.org',
      'm.media-amazon.com',
      'www.themoviedb.org'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '/t/p/**',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
  
  env: {
    NEXT_PUBLIC_TMDB_API_KEY: '6054e5498fb2619274454959c38bbdfa'
  }
}

module.exports = nextConfig
