/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase, {defaultConfig}) => {

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */
      reactStrictMode: true,
      // images: {
      //   domains: ['localhost:3000'],
      // }
    }
  }

  return {
    /* config options for all phases except development here */
    reactStrictMode: true,
    // images: {
    //   domains: [process.env.NEXT_PUBLIC_BACKEND_URL],
    // }
  }
}
