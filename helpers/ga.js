const timerMoreSelected = ({ title, theme, time: { hours, minutes, seconds }}) => {
  const baseCategory = 'Timer more selected'
  const baseAction = 'Selection'

  ga('send', 'event', {
    eventCategory: `${baseCategory} - Full time`,
    eventAction: `${baseAction}`,
    eventLabel: `${hours}:${minutes}:${seconds}`
  })

  ga('send', 'event', {
    eventCategory: `${baseCategory} - Hours`,
    eventAction: `${baseAction}`,
    eventLabel: `${hours}`
  })

  ga('send', 'event', {
    eventCategory: `${baseCategory} - Minutes`,
    eventAction: `${baseAction}`,
    eventLabel: `${minutes}`
  })

  ga('send', 'event', {
    eventCategory: `${baseCategory} - Seconds`,
    eventAction: `${baseAction}`,
    eventLabel: `${seconds}`
  })

  ga('send', 'event', {
    eventCategory: `${baseCategory} - Title`,
    eventAction: `${baseAction}`,
    eventLabel: `${title}`
  })

  ga('send', 'event', {
    eventCategory: `${baseCategory} - Theme`,
    eventAction: `${baseAction}`,
    eventLabel: `${theme}`
  })
}

const actionOfTimer = (name) => {
  ga('send', 'event', {
    eventCategory: `Action of Timer`,
    eventAction: `Click`,
    eventLabel: `${name}`,
  })
}

export {
  timerMoreSelected,
  actionOfTimer,
}
