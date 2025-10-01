/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: false,
  reactStrictMode: false,
  swcMinify: true,
  
  images: {
    unoptimized: true
  },
  
  env: {
    NEXT_PUBLIC_TMDB_API_KEY: '6054e5498fb2619274454959c38bbdfa'
  },
  
  generateEtags: false,
  poweredByHeader: false,
  compress: true
}

module.exports = nextConfig
