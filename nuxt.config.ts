// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    prerender: {
      autoSubfolderIndex: false,
      modules: [
        '@nuxt/content'
      ],
      content: {
        // ... options
      }
    }
  },
  modules: [
    '@nuxt/content'
  ],
  content: {
    // ... options
  },
  app: {
    head: {
      script: [
        { src: '/assets/vendor/purecounter/purecounter_vanilla.js' },
        {src: '/assets/vendor/aos/aos.js'},
        {src: '/assets/vendor/bootstrap/js/bootstrap.bundle.min.js'},
        {src: '/assets/vendor/glightbox/js/glightbox.min.js'},
        {src: '/assets/vendor/isotope-layout/isotope.pkgd.min.js'},
        {src: '/assets/vendor/swiper/swiper-bundle.min.js'},
        {src: '/assets/vendor/waypoints/noframework.waypoints.js'},
        {src: '/assets/vendor/php-email-form/validate.js'},
        {src: '/assets/js/main.js'}
      ],
      link: [
        { href: '/assets/vendor/animate.css/animate.min.css', rel: 'stylesheet'},
        {href: '/assets/vendor/aos/aos.css', rel: 'stylesheet'},
        {href: '/assets/vendor/bootstrap/css/bootstrap.min.css', rel: 'stylesheet'},
        {href: '/assets/vendor/bootstrap-icons/bootstrap-icons.css', rel: 'stylesheet'},
        {href: '/assets/vendor/boxicons/css/boxicons.min.css', rel: 'stylesheet'},
        {href: '/assets/vendor/glightbox/css/glightbox.min.css', rel: 'stylesheet'},
        {href: '/assets/vendor/swiper/swiper-bundle.min.css', rel: 'stylesheet'},
        {href: '/assets/css/style.css', rel: 'stylesheet'}
      ]
    }
  }
}
)



