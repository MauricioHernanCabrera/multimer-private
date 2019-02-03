const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/multimer/'
  }
} : {}

const baseUrl = process.env.DEPLOY_ENV === 'GH_PAGES' ?
  'https://mauriciohernancabrera.com/multimer' : 'http://localhost:3000'

const page = {
  title: 'Multimer',
  description: 'por ahora no la tengo',
  safe: {
    img: `${baseUrl}/safe_img.png`,
    alt: 'Logo de multimer'
  },
  favicon: `${baseUrl}/multimer.ico`,
  creator: '@hernanmc06'
}

module.exports = {
  ...routerBase,

  mode: 'universal',

  head: {
    title: 'Multimer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: `${page.description}` },

      { name: 'google', content: 'notranslate' },

      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: `${page.title}` },
      { name: 'twitter:creator:752703023583899649', content: `${page.creator}` },
      { name: 'twitter:description', content: `${page.description}` },
      { name: 'twitter:image', content: `${page.safe.img}` },
      { name: 'twitter:image:alt', content: `${page.safe.alt}` },

      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: `${page.title}` },
      { property: 'og:url', content: `${baseUrl}` },
      { property: 'og:image', content: `${page.safe.img}` },
      { property: 'og:site_name', content: `${page.title}` },
      { property: 'og:description', content: `${page.description}` },
    ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: `${page.favicon}` },
    ],

    script: [
      { async: true, href: 'https://www.googletagmanager.com/gtag/js?id=UA-121697227-1' },
    ]
  },

  loading: { color: '#fff' },

  css: [
    'animate.css',
    'epic-spinners/dist/lib/epic-spinners.min.css',
    '~/assets/style/styles.css',
  ],

  plugins: [
    '~/plugins/epic-spinners',
    { src: '~/plugins/entry', ssr: false },
    { src: '~/plugins/cookie', ssr: false },
    { src: '~/plugins/webfontloader', ssr: false },
    { src: '~/plugins/ga', ssr: false },
  ],

  modules: [,
    '@nuxtjs/pwa',
    'cookie-universal-nuxt',
  ],

  manifest: {
    'name': 'Multimer',
    'short_name': 'Multimer',
    'lang': 'en_US',
    'start_url': '/',
    'scope': '/',
    'display': 'standalone',
    'background_color': '#ffffff',
    'theme_color': '#DDDDDD',
  },

  icons: {},

  workbox: {
    runtimeCaching: [
      {
        urlPattern: '/^https:\/\/fonts.(?:googleapis|gstatic).com\/(.*)/',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: {
          cacheName: 'google-font-multimer',
          cacheExpiration: {
            maxEntries: 10000,
            maxAgeSeconds: 365 * 24 * 60 * 60
          }
        }
      },
    ]
  },

  build: {
    extend(config, ctx) {}
  }
}
