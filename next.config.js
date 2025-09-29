/** @type {import('next').NextConfig} */
const nextConfig = {
  // 🔥 MINIMAL CONFIG - NO FANCY STUFF
  reactStrictMode: false,
  
  images: {
    unoptimized: true,
    domains: ['image.tmdb.org']
  },
  
  env: {
    NEXT_PUBLIC_TMDB_API_KEY: '6054e5498fb2619274454959c38bbdfa'
  }
}

module.exports = nextConfig
