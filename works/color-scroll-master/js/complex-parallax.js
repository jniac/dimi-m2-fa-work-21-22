import { trackParallax } from '../common/parallax.js'

const section = document.querySelector('section.complex-parallax')

trackParallax(section, info => {
  const [shape1, shape2, shape3, shape4] = section.querySelectorAll('.shape')

  const p1 = 1 + info.y + 0.9
  shape1.style.setProperty('--parallax', p1)

  const p2 = 1 + info.y + 0.6
  shape2.style.setProperty('--parallax', p2)

  const p3 = 1 + info.y + 0.3
  shape3.style.setProperty('--parallax', p3)

  const p4 = 1 + info.y + 0.0
  shape4.style.setProperty('--parallax', p4)
})
