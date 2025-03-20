const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin({
  locales: ['en', 'fr'], // Liste des langues supportées
  defaultLocale: 'fr', // Langue par défaut
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"], // Ajoute Unsplash ici
  },
};

module.exports = withNextIntl(nextConfig);
