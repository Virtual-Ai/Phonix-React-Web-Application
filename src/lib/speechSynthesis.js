import { isString } from './utils'

export const getSpeakText = (step) => {
  const { message, metadata = {} } = step
  if (isString(metadata.speak)) {
    return metadata.speak
  }
  if (isString(message)) {
    return message
  }
  return ''
}

export const speakFn = (speechSynthesisOptions) => (step, previousValue) => {
  const { lang, voice, enable } = speechSynthesisOptions
  const { user } = step

  if (!window.SpeechSynthesisUtterance || !window.speechSynthesis) {
    return
  }
  if (user) {
    return
  }
  if (!enable) {
    return
  }

  const msg = new window.SpeechSynthesisUtterance()

  const data =
    'cmd=grammar_check&format=json&text=' +
    previousValue +
    '.&slang=en_US&customerid=IMWJ2KtS1XQhOST'
  try {
    fetch('https://svc.webspellchecker.net/spellcheck31/script/ssrv.fcgi?', {
      method: 'POST',
      body: data,
    })
      .then((res) => res.json())
      .then((json) => {
        if (json[0].matches.length !== 0) {
          let message = ''
          for (let i = 0; i < json[0].matches.length; i++) {
            message = message + json[0].matches[i].message + '\n'
          }

          msg.text = message
          msg.lang = lang
          msg.voice = voice
          window.speechSynthesis.speak(msg)
        } else {
          if (step.id !== '1') {
            msg.text = 'no changes'
            msg.lang = lang
            msg.voice = voice
            window.speechSynthesis.speak(msg)
          }
        }
      })
  } catch (err) {
    console.error(err)
  }
}
