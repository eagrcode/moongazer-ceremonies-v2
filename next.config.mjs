/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "moongazer-ceremonies-v2-storageda729-staging.s3.eu-west-2.amazonaws.com",
        pathname: "/static-images/*",
      },
    ],
  },
};

export default nextConfig;
