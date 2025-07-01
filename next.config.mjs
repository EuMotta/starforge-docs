import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  env: {
    SITE_URL: process.env.SITE_URL || 'http://localhost:3000'
  }
};

export default withMDX(config);
