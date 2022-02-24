import { remap } from '../common/basic-functions.js'
import { trackParallax } from '../common/parallax.js'

const section = document.querySelector('section.simple-accordion')
const container = section.querySelector('.container')

trackParallax(section, info => {
  if (info.y < 0) {
    const scaleY = remap(-1, 0, 0, 1, info.y)
    container.style.transformOrigin = '0 0'
    container.style.transform = `scaleY(${scaleY})`
  }
  else {
    const scaleY = remap(0, 1, 1, 0, info.y)
    container.style.transformOrigin = '0 100%'
    container.style.transform = `scaleY(${scaleY})`
  }
})
