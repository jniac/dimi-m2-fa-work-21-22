import { randomItem } from '../../../../common/random-utils.js'

const p = document.querySelector('section.lorem p')

const getRandomColor = () => {
  const color = randomItem([
    '--color-1', 
    '--color-2',
    '--color-3',
    '--color-4',
    '--color-5',
  ])
  return color
}

const randomSpan = () => {

  const newInnerHTML = p.innerText
    .split(' ') // on divise le texte en autant de mot que nécessaire
    .map(word => {
      const color = getRandomColor()
      return `<span style="color: var(${color});">${word}</span>`
    })
    .join(' ')

  p.innerHTML = newInnerHTML
}

randomSpan()



const button = document.querySelector('section.lorem button')
button.onclick = () => {
  randomSpan()
}
