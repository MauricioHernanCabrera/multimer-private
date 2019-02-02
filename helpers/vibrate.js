const vibrate = (pattern) => {
  try {
    window.navigator.vibrate(pattern)
  } catch (e) {}
}

export {
  vibrate
}
