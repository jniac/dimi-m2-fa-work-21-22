import { colors } from "./color.js"

const section = document.querySelector('section.color-set')
const divs = section.querySelectorAll('div.color')

divs.forEach((div, index) => {
     const currentColor = colors[index]
     div.style.backgroundColor = currentColor
     div.onclick = () => {
     
          navigator.clipboard.writeText(currentColor)
      
          section.style.backgroundColor = currentColor
          
          div.classList.add('clicked')
          setTimeout(() => {
            div.classList.remove('clicked')
            section.style.backgroundColor = null
          }, 500)
     }
})
