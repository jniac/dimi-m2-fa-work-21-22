import { colors } from './color.js'

document.querySelector('section.color-set').innerHTML = 
  colors.map(color => {
    return `<div class="color" style="background-color: ${color};">${color}</div>`
  })

colors.forEach((color, index) => {
  document.body.style.setProperty(`--color-${index + 1}`, color)
})
