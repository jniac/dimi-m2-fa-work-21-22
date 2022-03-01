import { round } from '../../../../common/basic-functions.js'
import { trackParallax } from '../../../../common/parallax.js'
import { randomItem } from '../../../../common/random-utils.js'

const section = document.querySelector('section.you-cant-read-this')
const container = section.querySelector('.container')

const mapWord = (word) => {
  const spans = word
    .split('')
    .map(char => `<span>${char}</span>`)
    .join('')
  return `
    <div>
      ${spans}
    </div>
  `
}

const splitToSpan = () => {
  const words = ['merci', 'mabelle']
  container.innerHTML = words
    .map(word => mapWord(word))
    .join('<span class="space"></span>')
}

const setRandomColorsToSpan = () => {
  for (const span of container.querySelectorAll('span:not(.space)')) {
    const color = randomItem([
      '--color-1', 
      '--color-2',
      '--color-3',
      '--color-4',
      '--color-5',
    ])
    span.style.color = `var(${color})`
    span.style.backgroundColor = `var(${color})`
  }
}

splitToSpan()
setRandomColorsToSpan()

let y = 0, yOld = 0
trackParallax(section, info => {
  yOld = y
  y = round(info.y, 0.1)

  if (y !== yOld) {
    setRandomColorsToSpan()
  }
})
