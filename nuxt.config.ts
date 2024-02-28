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

// Create a query looking for anything in content/ directory
const contentQuery = queryContent()

// Create a query looking into content/articles directory
const contentQuery = queryContent('articles')

// Create a query looking into content/articles/nuxt3 directory
const contentQuery = queryContent('articles', 'nuxt3')