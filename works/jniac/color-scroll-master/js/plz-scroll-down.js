import { onParallax } from '../../../../common/parallax.js'
import { randomItem } from '../../../../common/random-utils.js'
import { waitSeconds } from '../../../../common/utils.js'

const mapSpan = (char) => {
  if (char === ' ') {
    return ' '
  }
  return `<span>${char}</span>`
}

const getRandomColor = () => {
  return randomItem([
    'var(--color-1)',
    'var(--color-2)',
    'var(--color-3)',
    'var(--color-4)',
    'var(--color-5)',
  ])
}

const section = document.querySelector('section.intro')
const p = section.querySelector('p')

onParallax(section, info => {
  console.log(info)
  p.classList.toggle('hidden', info.y > 0.01)
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

    spans[index].style.backgroundColor = getRandomColor()

    index += 1
    if (index === spans.length) {
      index = 0
    }
  }
}

startAnim()
