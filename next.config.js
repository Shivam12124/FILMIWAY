/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  images: {
    unoptimized: true,
    domains: ['image.tmdb.org', 'www.themoviedb.org']
  },
  env: {
    NEXT_PUBLIC_TMDB_API_KEY: process.env.NEXT_PUBLIC_TMDB_API_KEY || '6054e5498fb2619274454959c38bbdfa'
  },
  // 🔥 DISABLE NETLIFY PLUGIN FEATURES THAT CONFLICT
  experimental: {
    // Remove esmExternals warning
  },
  poweredByHeader: false,
  generateEtags: false,
  compress: true
}

module.exports = nextConfig
