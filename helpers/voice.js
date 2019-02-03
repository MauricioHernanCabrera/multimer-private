const sayMessage = (title) => {
  try {
    const voice = window.speechSynthesis.getVoices().find((voice) => voice.lang === 'en-US')
    const message = new SpeechSynthesisUtterance(`${title}: Finished¡`)
    message.voice = voice || window.speechSynthesis.getVoices()[0]
    window.speechSynthesis.speak(message)
  } catch (e) {}
}

export {
  sayMessage
}
