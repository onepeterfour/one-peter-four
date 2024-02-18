/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io'
      }
    ]
  },
  experimental: {
    taint: true
  }
  // ...other config settings
}

export default async function config() {
  return nextConfig
}
