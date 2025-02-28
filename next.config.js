
const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["d33wubrfki0l68.cloudfront.net"], // Ajoute ce domaine ici
  },
};
 
module.exports = withNextIntl(nextConfig);

