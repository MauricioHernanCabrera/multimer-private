export default function ({ store }) {
  const {
    timers,
    page,
    editTimer,
    newTimer,
    historyList,
  } = store.$cookies.get('data') || {}

  store.commit('setPage', page)
  store.commit('setHistory', historyList)
  store.commit('setNewTimer', newTimer)
  store.commit('setEditTimer', editTimer)

  timers.forEach(timer => {
    store.commit('addTimer', timer)
    if (timer.active) {
      store.dispatch('startTimer', timer.id)
    }
  })

  store.subscribe(() => {
    const data = store.state

    store.$cookies.set('data', JSON.parse(JSON.stringify(data)), {
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    })
  })
}
