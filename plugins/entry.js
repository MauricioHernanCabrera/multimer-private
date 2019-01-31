import Vue from 'vue'

if (process.browser) {
  const scrollReveal = require('scrollreveal').default()
  Vue.prototype.$scrollReveal = scrollReveal
}
