import { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  cacheComponents: true,
  images: {
    domains: ["kimi-web-img.moonshot.cn"],
    formats: ["image/avif", "image/webp"],
  },
    experimental: {
    turbopackFileSystemCacheForDev: true,
}
};

module.exports = nextConfig;