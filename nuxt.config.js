export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  app: {
    baseURL: '/prefix/'
  },
  head: {
    title: 'aplikasi_topup_game',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
     '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],
  axios: {
    baseURL: 'http://localhost:3000/api' // sesuaikan dengan URL API Anda
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
