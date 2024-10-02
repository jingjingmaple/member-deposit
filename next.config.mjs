/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/member',
        destination: '/member/deposit', // Matched parameters can be used in the destination
        permanent: false,
      },
      {
        source: '/',
        destination: '/login', // Matched parameters can be used in the destination
        permanent: false,
      },
    ]
  },
}

export default nextConfig
