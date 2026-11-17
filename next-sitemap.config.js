/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'http://localhost:3000',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: [
    '/api/*',
    '/apple-icon.png',
    '/favicon.ico',
    '/health',
    '/icon*',
    '/manifest.json',
    '/ogimage.png'
  ]
};
