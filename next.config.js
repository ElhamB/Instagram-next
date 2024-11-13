/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'www.jennexplores.com',
          pathname: '**',
        },
        {
            protocol: 'https',
            hostname: 'upload.wikimedia.org',
            pathname: '**',
          },
      ],
    },
  };
  
  module.exports = nextConfig;