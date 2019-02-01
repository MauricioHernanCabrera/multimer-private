import Vue from 'vue'

// const resize = (Vue) => {
//   const { innerWidth, innerHeight } = window

//   const bp = {
//     xs: false,
//     sm: false,
//     smAndDown: false,
//     smAndUp: false,
//     md: false,
//     mdAndDown: false,
//     mdAndUp: false,
//     lg: false,
//     lgAndDown: false,
//     lgAndUp: false,
//     xl: false,
//     width: 0,
//     height: 0,
//   }

//   bp.sm = true

//   ////////////////////////////////////////// XS
//   if (innerWidth < 600) {
//     bp.xs = true
//   }

//   ////////////////////////////////////////// SM
//   if (innerWidth >= 600 && innerWidth < 960) {
//     bp.sm = true
//   }
//   if (innerWidth < 960) {
//     bp.smAndDown = true
//   }
//   if (innerWidth >= 600) {
//     bp.smAndUp = true
//   }

//   ////////////////////////////////////////// MD
//   if (innerWidth >= 960 && innerWidth < 1264) {
//     bp.md = true
//   }
//   if (innerWidth < 1264) {
//     bp.mdAndDown = true
//   }
//   if (innerWidth >= 960) {
//     bp.mdAndUp = true
//   }

//   ////////////////////////////////////////// LG
//   if (innerWidth >= 1264 && innerWidth < 1904) {
//     bp.lg = true
//   }
//   if (innerWidth < 1904) {
//     bp.lgAndDown = true
//   }
//   if (innerWidth >= 1264) {
//     bp.lgAndUp = true
//   }

//   ////////////////////////////////////////// LG
//   if (innerWidth >= 1904) {
//     bp.xl = true
//   }

//   ////////////////////////////////////////// WIDTH

//   bp.width = innerWidth
//   ////////////////////////////////////////// HEIGHT
//   bp.height = innerHeight

//   Vue.prototype.$bp = {
//     ...Vue.prototype.$bp,
//     ...bp
//   }

// }

if (process.browser) {
  const scrollReveal = require('scrollreveal').default()
  Vue.prototype.$scrollReveal = scrollReveal

  // Vue.prototype.$bp = {
  //   xs: false,
  //   sm: false,
  //   smAndDown: false,
  //   smAndUp: false,
  //   md: false,
  //   mdAndDown: false,
  //   mdAndUp: false,
  //   lg: false,
  //   lgAndDown: false,
  //   lgAndUp: false,
  //   xl: false,
  //   width: 0,
  //   height: 0,
  // }

  // resize(Vue)

  // window.addEventListener('resize', () => resize(Vue))
}
