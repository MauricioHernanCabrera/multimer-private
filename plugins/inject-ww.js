import ExampleWorker from '~/assets/js/Example.worker.js' // worker files has to end in ".worker.js" - see nuxt.config.js

export default ({ store }, inject) => {
  inject('worker', {
    createWorker() {
      return new ExampleWorker()
    }
  })
}
