/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.themealdb.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  redirects : async () => {
    return [
      {
        source: "/About",
        destination: "/Posts",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
