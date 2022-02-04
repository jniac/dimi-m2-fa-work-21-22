import { remap } from '../../../../common/basic-functions.js'
import { trackParallax } from '../../../../common/parallax.js'

const copyLeftToRight = () => {
  const left = document.querySelector('section.rorschach div.left')
  const right = document.querySelector('section.rorschach div.right')
  right.innerHTML = left.innerHTML
}

const section = document.querySelector('section.rorschach')
trackParallax(section, {
  onParallax: info => {
    const scrollT = remap(-0.5, -0, -1, 0, info.y)
    section.style.setProperty('--scroll-t', scrollT)
  },
})

copyLeftToRight()
