module.exports = {
  mode: 'universal',

  head: {
    title: 'Multimer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: 'Web App para medir el tiempo.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.5.0/css/all.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Comfortaa:300,400,700' },
    ]
  },

  loading: { color: '#fff' },

  css: [
    'animate.css',
    'epic-spinners/dist/lib/epic-spinners.min.css',
    '~/assets/style/styles.css',
    // 'normalize.css',
  ],

  plugins: [
    '~/plugins/epic-spinners',
    { src: '~/plugins/entry', ssr: false },
    { src: '~/plugins/cookie', ssr: false },
    { src: '~/plugins/webfontloader', ssr: false },
  ],

  modules: [,
    '@nuxtjs/pwa',
    'cookie-universal-nuxt',
  ],

  build: {
    extend(config, ctx) { }
  }
}
