/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/storybook/:path*',
          destination: '/out-storybook/:path*',
        },
      ]
    },
  }
  
  module.exports = nextConfig
  