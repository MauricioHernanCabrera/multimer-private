const sayMessage = (title) => {
  try {
    const voice = window.speechSynthesis.getVoices().find((voice) => voice.lang === 'es-MX')
    const message = new SpeechSynthesisUtterance(`${title}: !Terminada¡`)
    message.voice = voice
    window.speechSynthesis.speak(message)
  } catch (e) {}
}

export {
  sayMessage
}
