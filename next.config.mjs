/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: "/gigs",
        destination: "/#gigs",
        permanent: true,
      },
      {
        source: "/videos",
        destination: "/#videos",
        permanent: true,
      },
      {
        source: "/podcast",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
