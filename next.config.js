/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Node 24's build image has OpenSSL 3 only. This Next release's native
  // SWC needs libssl.so.1.1, and the WASM minifier it falls back to crashes.
  swcMinify: false,
  images: {
    domains: ['placekitten.com', 'ibb.co'],
  },
}

module.exports = nextConfig
