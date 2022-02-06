import { round } from '../../../../common/basic-functions.js'
import { trackParallax } from '../../../../common/parallax.js'
import { randomItem } from '../../../../common/random-utils.js'

const section = document.querySelector('section.you-cant-read-this')

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
  const words = section.innerText.split(' ')
  section.innerHTML = words
    .map(word => mapWord(word))
    .join('<span class="space"></span>')
}

const setRandomColorsToSpan = () => {
  for (const span of section.querySelectorAll('span:not(.space)')) {
    const i1 = randomItem([1, 2, 3, 4, 5])
    // const i2 = randomItem([1, 3, 4])
    span.style.color = `var(--color-${i1})`
    span.style.backgroundColor = `var(--color-${i1})`
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