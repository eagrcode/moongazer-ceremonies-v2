const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */

const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  // compiler: {
  //   removeConsole: process.env.NODE_ENV === "production",
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:
          "moongazer-ceremonies-v2-storageda729-staging.s3.eu-west-2.amazonaws.com",
        pathname: "/static-images/*",
      },
      {
        protocol: "https",
        hostname:
          "moongazer-ceremonies-v2-storageda729-staging.s3.eu-west-2.amazonaws.com",
        pathname: "/blog/*",
      },
    ],
  },
};

module.exports = withBundleAnalyzer(nextConfig);
