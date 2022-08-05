/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['placekitten.com', 'ibb.co'],
  },
}

module.exports = nextConfig
