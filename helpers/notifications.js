const showNotification = async (title, config) => {
  try {
    const registration = await navigator.serviceWorker.getRegistration()
    if (!registration) return
    // if (!registration) return alert('No hay un Service Worker :(')

    // body: `${title}`,
    // tag,
    // silent: false,
    // renotify: true,
    // vibrate,

    registration.showNotification(title, config)
  } catch (e) {}
}

const enableNotifications = async () => {
  try {
    if (!('Notification' in window) || !('serviceWorker' in navigator)) {
      // return alert('Tu navegador no soporta notificaciones')
      return
    }

    if (Notification.permission === 'default') {
      await Notification.requestPermission()
    }

    if (Notification.permission === 'blocked') {
      // return alert('Bloqueaste las notificaciones :(')
      return
    }

    if (Notification.permission !== 'granted') {
      return
    }
  } catch (e) {}
}

export {
  showNotification,
  enableNotifications,
}
