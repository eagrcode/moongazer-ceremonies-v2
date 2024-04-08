const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */

const nextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
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

module.exports = withBundleAnalyzer(nextConfig);
