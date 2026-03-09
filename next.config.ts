import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (webpackConfig) => {
    // your existing SVG → React component rule
    // NOTE: If you ever have an SVG loader issue,
    // SVGs need be in client components
    webpackConfig.module.rules.push({
      test: /\.svg$/,
      issuer: { and: [/\.(js|ts)x?$/] },
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgo: true,
            svgoConfig: {
              plugins: [
                { name: "removeViewBox", active: false },
                { name: "removeDimensions", active: true },
              ],
            },
          },
        },
      ],
    });

    return webpackConfig;
  },
  turbopack: {
    // 1) apply SVGR to `.svg` imports
    rules: {
      "*.svg": {
        loaders: [
          {
            loader: "@svgr/webpack",
            options: {
              svgo: true,
              svgoConfig: {
                plugins: [
                  { name: "removeViewBox", active: false },
                  { name: "removeDimensions", active: true },
                ],
              },
            },
          },
        ],
        as: "*.js",
      },
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dribbble.com",
      },
    ],
  },
};

export default nextConfig;
