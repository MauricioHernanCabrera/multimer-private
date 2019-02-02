const COLORS_ARRAY = [
  'kiwi-3',
  'kiwi-2',
  'kiwi-1',
  'blueberry-3',
  'blueberry-2',
  'blueberry-1',
  'raspberry-3',
  'raspberry-2',
  'raspberry-1',
  'banana-3',
  'banana-2',
  'banana-1',
  'pumpkin-3',
  'pumpkin-2',
  'pumpkin-1',
  'jelly-3',
  'jelly-2',
  'jelly-1',
  'cocoa-3',
  'cocoa-2',
  'cocoa-1',
  'licorice-3',
  'licorice-2',
  'licorice-1',
  'cloud-3',
  'cloud-2',
  'cloud-1',
  'creme',
]

const THEME = [
  'kiwi',
  'blueberry',
  'banana',
  'pumpkin',
  'raspberry',
  'jelly',
  'cocoa',
]

const TYPES_OF_BUTTONS = [
  'button',
  'submit',
  'reset'
]

const newTimer = {
  title: '',
  time: {
  hours: 0,
    minutes: 0,
      seconds: 0,
  },
  theme: 'kiwi',
}

const PATTERN_VIBRATE_FINISH_TIMER = [500, 250, 500, 250, 500]

const PATTERN_VIBRATE_START_TIMER = [200]

export {
  COLORS_ARRAY,
  THEME,
  TYPES_OF_BUTTONS,
  newTimer,
  PATTERN_VIBRATE_FINISH_TIMER,
  PATTERN_VIBRATE_START_TIMER,
}
