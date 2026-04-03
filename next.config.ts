import { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig :NextConfig= {
  images: {
    domains: ["kimi-web-img.moonshot.cn"],
  },
    experimental: {
    turbopackFileSystemCacheForDev: true,
}
};

module.exports = nextConfig;