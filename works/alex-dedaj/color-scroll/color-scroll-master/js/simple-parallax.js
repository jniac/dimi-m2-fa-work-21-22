import { trackParallax } from '../../../common/parallax.js'

const section = document.querySelector('section.simple-parallax')

trackParallax(section, info => {
  const [circle0, circle1, circle2] = section.querySelectorAll('.circle')

  const scale0 = info.y + 1.5
  circle0.style.transform = `scale(${scale0})`

  const scale1 = info.y + 1.1
  circle1.style.transform = `scale(${scale1})`

  const scale2 = info.y + 0.7
  circle2.style.transform = `scale(${scale2})`
})
