import { onParallax } from '../common/parallax.js'
import { randomItem } from '../common/random-utils.js'
import { waitSeconds } from '../common/utils.js'

const mapSpan = (char) => {
  if (char === ' ') {
    return ' '
  }
  return `<span>${char}</span>`
}

let randomColorOld = null
const getRandomColor = () => {

  let color = randomItem([
    'var(--color-1)',
    'var(--color-2)',
    'var(--color-3)',
    'var(--color-4)',
    'var(--color-5)',
  ])

  while (randomColorOld === color) {
    color = randomItem([
      'var(--color-1)',
      'var(--color-2)',
      'var(--color-3)',
      'var(--color-4)',
      'var(--color-5)',
    ])
  }

  randomColorOld = color

  return color
}

const section = document.querySelector('section.intro')
const p = section.querySelector('p')
const scrollDown = section.querySelector('.scroll-down')

onParallax(section, info => {
  const isHidden = info.y > 0.01
  p.classList.toggle('hidden', isHidden)
  scrollDown.classList.toggle('hidden', isHidden)
})

p.innerHTML = p.innerText
  .split('')
  .map(c => mapSpan(c))
  .join('')

const startAnim = async () => {

  const spans = [...p.querySelectorAll('span')]
  
  let index = 0

  while (true) {
    await waitSeconds(.5)

    for (const span of spans) {
      span.style.backgroundColor = null
    }

    const color = getRandomColor()
    spans[index].style.backgroundColor = color
    scrollDown.style.backgroundColor = color

    index += 1
    if (index === spans.length) {
      index = 0
    }
  }
}

startAnim()
