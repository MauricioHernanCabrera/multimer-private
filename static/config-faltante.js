self.addEventListener('notificationclick', function (event) {
  event.notification.close()

  event.waitUntil(
    clients.openWindow('https://mauriciohernancabrera.github.io/multimer')
  )
})


workbox.googleAnalytics.initialize()

workbox.routing.registerRoute(new RegExp('/^https://fonts.(?:googleapis|gstatic).com/(.*)/'), workbox.strategies.cacheFirst({ "cacheName": "google-font-multimer", "cacheExpiration": { "maxEntries": 10000, "maxAgeSeconds": 31536000 } }), 'GET')
workbox.routing.registerRoute(new RegExp('/multimer/_nuxt/.*'), workbox.strategies.cacheFirst({ "cacheName": "multimer-nuxt", "cacheExpiration": { "maxEntries": 10000, "maxAgeSeconds": 604800 } }), 'GET')
workbox.routing.registerRoute(new RegExp('/multimer/.*'), workbox.strategies.networkFirst({ "cacheName": "multimer-all", "cacheExpiration": { "maxEntries": 10000, "maxAgeSeconds": 604800 } }), 'GET')

