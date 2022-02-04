import { waitSeconds } from '../../../../common/utils.js'
import { getRandomColor } from './color.js'

const mapSpan = (char) => {
  if (char === ' ') {
    return ' '
  }
  return `<span>${char}</span>`
}

const p = document.querySelector('section.intro p')

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