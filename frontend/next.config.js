/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_ENDPOINT: "http://localhost:3000",
  },
};

module.exports = nextConfig
