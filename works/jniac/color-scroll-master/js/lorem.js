import { randomItem } from '../../../../common/random-utils.js'

const paragraph = document.querySelector('section.lorem p')

const newInnerHTML = paragraph.innerText
  .split(' ') // on divise le texte en autant de mot que nécessaire
  .map(word => {
    const color = randomItem([
      '--color-1', 
      '--color-2',
      '--color-3',
      '--color-4',
      '--color-5',
    ])
    return `<span style="color: var(${color});">${word}</span>`
  })
  .join(' ')

paragraph.innerHTML = newInnerHTML
