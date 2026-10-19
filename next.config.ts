import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // ریشه مسیریابی فایل‌ها را روی خود پروژه قفل می‌کند تا server.js همیشه در .next/standalone/server.js ساخته شود
  outputFileTracingRoot: process.cwd(),
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
