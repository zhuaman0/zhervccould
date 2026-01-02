// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: {enabled: true},
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', 'nuxt-icons', '@nuxt/icon'],
  css: ['./app/styles/main.css'],
  components: [{path: '~/components', pathPrefix: true}],
  ssr: false,
  imports: {
    dirs: ['components', 'plugins', 'stores', 'stores/*/*', 'api'],
  },
})
