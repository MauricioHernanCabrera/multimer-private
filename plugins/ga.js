export default ({ app, store }) => {
  (function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date(); a = s.createElement(o),
    m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
  })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga')

  if (process.env.DEPLOY_ENV === 'GH_PAGES') {
    ga('create', 'UA-121697227-1', 'auto')

    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());

    gtag('config', 'UA-121697227-1');

    app.router.afterEach((to, from) => {
      ga('set', 'page', to.path)
      ga('send', 'pageview')

      // Evitar enviar datos a GA al estar en etapa de desarrollo
      // if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
      //   ga('set', 'sendHitTask', null)
      // }
    })
  }
}
