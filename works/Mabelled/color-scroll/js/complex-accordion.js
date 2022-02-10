import { remap } from '../../../../common/basic-functions.js'
import { trackParallax } from '../../../../common/parallax.js'

const section = document.querySelector('section.complex-accordion')
const container = section.querySelector('.container')

trackParallax(section, info => {
  if (info.y < 0) {
    const height = remap(-1, 0, 0, 100, info.y)
    const y = remap(-1, 0, 60, 0, info.y)
    container.style.setProperty('--y', `${y}vh`)
    container.style.top = '0'
    container.style.height = `${height.toFixed(3)}%`
  }
  else {
    container.style.setProperty('--y', '0vh')
    container.style.top = '0'
    container.style.height = '100%'
  }
})