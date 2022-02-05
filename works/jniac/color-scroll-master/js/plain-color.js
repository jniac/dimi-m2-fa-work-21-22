import Color from "https://colorjs.io/dist/color.esm.js"
import { onParallax, trackParallax } from '../../../../common/parallax.js'
import { colors } from './color.js'
import { inverseLerp } from '../../../../common/basic-functions.js'

const section = document.querySelector('section.plain-color')

const darkGrey = new Color('#111111')
const redish = new Color(colors[2])
const mauve = new Color(colors[3])
const darkGreyToRedish = darkGrey.range(redish)
const redishToMauve = redish.range(mauve)

const getColor = y => {
  if (y < 0) {
    const t = inverseLerp(-.5, -.1, y)
    return darkGreyToRedish(t).hex
  }
  else {
    const t = inverseLerp(.1, .5, y)
    return redishToMauve(t).hex
  }
}

trackParallax(section)
onParallax(section, info => {
  
  const color = getColor(info.y)

  const n = info.y.toFixed(2)
  section.innerHTML = `
    <span>y: ${n}<br>${color}</span>
    <span class="big">y: ${n}<br>${color}</span>
    <span>y: ${n}<br>${color}</span>
  `

  section.style.backgroundColor = color
})
