import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // This forces the computer to only use 1 brain cell at a time and stops multi-tasking!
    cpus: 1,
    workerThreads: false,
  },
};

export default nextConfig;