const findIndexById = (timers, id) => timers.findIndex(timer => timer.id === id)

const percentageOfTime = (time, timeDefault) => {
  const timeInSeconds = timeToSeconds(time)
  const timeDefaultInSeconds = timeToSeconds(timeDefault)
  return 100 - (timeInSeconds * 100 / timeDefaultInSeconds)
}

const timeToSeconds = ({ hours, minutes, seconds }) => hours * 3600 + minutes * 60 + seconds

const leftPad = n => `0${n}`.substr(-2)

export {
  findIndexById,
  percentageOfTime,
  leftPad,
  timeToSeconds,
}
