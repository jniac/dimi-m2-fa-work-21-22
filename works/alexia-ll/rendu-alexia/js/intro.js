import { inverseLerp } from '../../../../common/basic-functions.js'
import { trackParallax } from '../../../../common/parallax.js'
import { randomItem, shuffle } from '../../../../common/random-utils.js'

/**
 * Créer une grille (div) dans un noeud html.
 * @param {HTMLElement} element 
 * @param {number} col 
 * @param {number} row
 * @returns {HTMLDivElement[][]} Les divs créées (tableau à 2 dimensions)
 */
const createGrid = (element, col = 10, row = 10) => {
  const divs = []
  for (let y = 0; y < row; y++) {
    const rowDivs = []
    for (let x = 0; x < col; x++) {
      const div = document.createElement('div')
      element.append(div)
      div.style.left = `${x / col * 100}%`
      div.style.top = `${y / row * 100}%`
      div.style.width = `${1 / col * 100}%`
      div.style.height = `${1 / row * 100}%`
      rowDivs.push(div)
    }
    divs.push(rowDivs)
  }
  return divs
}

const section = document.querySelector('section.intro')
const grid = section.querySelector('.grid')
const size = { x: 31, y: 5 }
const divs = createGrid(grid, size.x, size.y).flat()

// couleurs aléatoires
divs.forEach(div => {
  const x = randomItem([1, 2, 3, 4, 5])
  div.style.setProperty('--color', `var(--color-${x})`)
})

const suffleDivs = shuffle(divs)
