// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: {enabled: true},
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-icons',
    '@nuxt/icon',
    '@nuxtjs/i18n',
  ],
  css: ['./app/styles/main.css'],
  components: [{path: '~/components', pathPrefix: true}],
  ssr: false,
  imports: {
    dirs: ['components', 'plugins', 'stores', 'stores/*/*', 'api'],
  },
  i18n: {
    locales: [
      {code: 'en', language: 'en-US', file: 'en.json'},
      {code: 'ru', language: 'fr-RU', file: 'ru.json'},
    ],
    defaultLocale: 'ru',
    strategy: 'no_prefix',
  },
})
