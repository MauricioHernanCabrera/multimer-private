const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/multimer/'
  }
} : {}

const baseUrl = process.env.DEPLOY_ENV === 'GH_PAGES' ?
  'https://mauriciohernancabrera.github.io/multimer' : 'http://localhost:3000'

const page = {
  title: 'Multimer',
  description: 'Web application of multiple free online countdown interval timers. This relog timer with sound and alarm is perfect for cooking, training, doing gymnastics, running, studying, among other things. Available for Windows, Mac, Android, iPad, iPhone and many more devices. Try it is fun!',
  safe: {
    img: `${baseUrl}/safe_img.png`,
    alt: 'Logo de multimer'
  },
  favicon: `${baseUrl}/logo-2.ico`,
  creator: '@hernanmc06',
  category: 'Utility, Tool, Timer',
  subcategory: 'Alarms & Clocks',
  genre: 'Timer',
  browserRequirements: 'Requires JavaScript. Requires HTML5.',
  version: '1.0.0',
}

const schemaWebApplication = {
  "@context": "http://schema.org",
  "@type": "WebApplication",
  "name": `${page.title}`,
  "url": `${baseUrl}`,
  "description": `${page.description}`,
  "applicationCategory": `${page.category}`,
  "applicationSubCategory": `${page.subcategory}`,
  "genre": `${page.genre}`,
  "about": {
    "@type": "Thing",
    "description": "timer, multiple timer"
  },
  "browserRequirements": `${page.browserRequirements}`,
  "softwareVersion": `${page.version}`,
  "operatingSystem": "All"
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
      { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=UA-121697227-1' },
      { async: true, src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js' },
      {
        hid: 'adsense',
        innerHTML: `(adsbygoogle = window.adsbygoogle || []).push({ google_ad_client: 'ca-pub-3934550073327550', enable_page_level_ads: true });`
      },
      { type: 'application/ld+json', innerHTML: JSON.stringify(schemaWebApplication) },
    ],
    __dangerouslyDisableSanitizers: ['script'],
  },

  loading: { color: '#fff' },

  css: [
    'animate.css',
    '~/assets/style/styles.css',
  ],

  plugins: [
    { src: '~/plugins/entry', ssr: false },
    { src: '~/plugins/webfontloader', ssr: false },
    { src: '~/plugins/ga', ssr: false },
    { src: '~/plugins/inject-ww', ssr: false },
    { src: '~/plugins/init-state', ssr: false },
  ],

  modules: [,
    '@nuxtjs/pwa',
    'cookie-universal-nuxt',
  ],

  manifest: {
    'name': 'Multimer',
    'short_name': 'Multimer',
    'lang': 'en_US',
    'start_url': '/multimer/',
    'scope': '/multimer/',
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
    extend (config, { isDev, isClient }) {
      config.output.globalObject = "this"

      if (isClient) { // web workers are only available client-side
        config.module.rules.push({
          test: /\.worker\.js$/, // this will pick up all .js files that ends with ".worker.js"
          loader: 'worker-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
