
export const randomRange = (min, max) => {
  return min + (max - min) * Math.random()
}

export const randomItem = (array) => {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

export const shuffle = (array) => {
  const result = [...array]
  for (let index = 0; index < array.length; index++) {
    const randomIndex = Math.floor(Math.random() * array.length)
    const tmp = result[index]
    result[index] = result[randomIndex]
    result[randomIndex] = tmp
  }
  return result
}

export const chance = (p) => Math.random() < p

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
