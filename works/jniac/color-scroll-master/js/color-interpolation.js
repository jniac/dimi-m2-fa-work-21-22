import Color from "https://colorjs.io/dist/color.js"
import { trackParallax } from '../../../../common/parallax.js'
import { inverseLerp } from '../../../../common/basic-functions.js'

const section = document.querySelector('section.color-interpolation')

// Couleurs :
const cssMap = document.body.computedStyleMap()
const darkGrey = new Color('#111')
let color2 = new Color(cssMap.get('--color-3').toString())
let color3 = new Color(cssMap.get('--color-4').toString())

// Interpolations :
// Les interpolations sont obtenu par la méthode "range":
// https://colorjs.io/docs/interpolation.html
let gradient1 = darkGrey.range(color2)
let gradient2 = color2.range(color3)

const updateColor = () => {
  color2 = new Color('--color-3', document.body)
  color3 = new Color('--color-4', document.body)
  gradient1 = darkGrey.range(color2)
  gradient2 = color2.range(color3)
}

const updateGradientDiv = () => {
  const gradient = [
    ...Color.steps(darkGrey, color2, { steps: 10 }),
    ...Color.steps(color2, color3, { steps: 10 }),
  ].map(c => c.hex).join(', ')
  section.querySelector('div.gradient').style.backgroundImage = `linear-gradient(to right, ${gradient})`
}

updateGradientDiv()

const getInterpolatedColor = y => {
  if (y < 0) {
    const t = inverseLerp(-.3, -.1, y)
    return gradient1(t).hex
  }
  else {
    const t = inverseLerp(.1, .3, y)
    return gradient2(t).hex
  }
}

trackParallax(section, info => {
  
  const color = getInterpolatedColor(info.y)

  const left = info.y < 0 ? inverseLerp(-.3, -.1, info.y) * 0.5 : inverseLerp(.1, .3, info.y) * 0.5 + 0.5
  section.querySelector('div.gradient .cursor').style.left = `${(left * 100).toFixed(1)}%`

  const n = info.y.toFixed(2)
  for (const span of section.querySelectorAll('span.y')) {
    span.innerHTML = `${n}<br>${color}`
  }

  section.style.backgroundColor = color
})

// grrr. 
// Une ligne de code pour retirer la première ligne du bloc code. Such a shame.
section.querySelector('code').innerHTML = section.querySelector('code').innerText.trim()



// Les couleurs CSS sont susceptible de changer. 
// Il sera alors nécessaire de ré-évaluer les variables couleurs.
document.body.addEventListener('color-changed', () => {
  updateColor()
  updateGradientDiv()
})


