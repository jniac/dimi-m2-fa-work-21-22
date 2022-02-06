import Color from "https://colorjs.io/dist/color.esm.js"
import { onParallax, trackParallax } from '../../../../common/parallax.js'
import { colors } from './color.js'
import { inverseLerp } from '../../../../common/basic-functions.js'

const section = document.querySelector('section.color-interpolation')

// Couleurs :
const darkGrey = new Color('#111111')
const redish = new Color(colors[2])
const mauve = new Color(colors[3])

// Interpolations :
// Les interpolations sont obtenu par la méthode "range":
// https://colorjs.io/docs/interpolation.html
const gradientDarkGreyToRedish = darkGrey.range(redish)
const gradientRedishToMauve = redish.range(mauve)

const gradient = [
  ...Color.steps(darkGrey, redish, { steps: 10 }),
  ...Color.steps(redish, mauve, { steps: 10 }),
].map(c => c.hex).join(', ')
section.querySelector('div.gradient').style.backgroundImage = `linear-gradient(to right, ${gradient})`

const getInterpolatedColor = y => {
  if (y < 0) {
    const t = inverseLerp(-.5, -.1, y)
    return gradientDarkGreyToRedish(t).hex
  }
  else {
    const t = inverseLerp(.1, .5, y)
    return gradientRedishToMauve(t).hex
  }
}

trackParallax(section)
onParallax(section, info => {
  
  const color = getInterpolatedColor(info.y)

  const t = info.y < 0 ? inverseLerp(-.5, -.1, info.y) * 0.5 : inverseLerp(.1, .5, info.y) * 0.5 + 0.5
  section.querySelector('div.gradient .cursor').style.left = `${(t * 100).toFixed(1)}%`

  const n = info.y.toFixed(2)
  for (const span of section.querySelectorAll('span.y')) {
    span.innerHTML = `${n}<br>${color}`
  }

  section.style.backgroundColor = color
})

// grrr. 
// Une ligne de code pour retirer la première ligne du bloc code. Such a shame.
section.querySelector('code').innerHTML = section.querySelector('code').innerText.trim()
