// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/image', '@pinia/nuxt'],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  css: [
    '~/assets/css/variables.css',
    '~/assets/css/null.css',
    '~/assets/css/style.css',
    '~/assets/css/fonts.css',
  ],
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    },
  },
})
