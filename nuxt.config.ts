// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    prerender: {
      autoSubfolderIndex: false
    }
  },
  modules: [
    '@nuxt/content'
  ],
  content: {
    // ... options
  }
})
