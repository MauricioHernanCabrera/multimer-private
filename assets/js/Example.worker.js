let timer = null

self.onmessage = ({ data: { type, payload } }) => {
  switch (type) {
    case 'startTimer': {
      timer = payload.timer

      const interval = setInterval(() => reduceTime(), 1000)

      self.postMessage({
        type: 'getInterval',
        payload: {
          interval
        }
      })
      break
    }


    case 'clearInterval': {
      if (timer) {

        clearInterval(timer.interval)

        timer = null
      }
      break
    }

    default: {
      break
    }
  }
}

const reduceTime = () => {
  let { hours, minutes, seconds } = Object.assign(timer.time)

  if (minutes === 0 && hours > 0 && seconds === 0) {
    hours--
    minutes = 60
  }

  if (seconds === 0 && minutes > 0) {
    minutes--
    seconds = 60
  }

  seconds--

  const payload = {
    timerId: timer.id,
    data: {
      time: {
        hours,
        minutes,
        seconds
      }
    }
  }

  self.postMessage({
    type: 'newValueTimer',
    payload,
  })

  timer.time.hours = hours
  timer.time.minutes = minutes
  timer.time.seconds = seconds
}
