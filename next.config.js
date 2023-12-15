// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    localeDetection: false,
    domains: [{
      "domain": "dev.local.fr",
      "defaultLocale": "fr"
    },
    {
      "domain": "dev.local.us",
      "defaultLocale": "en"
    },],
  },
}

module.exports = nextConfig
