const getColors = () => {
  // https://developer.mozilla.org/fr/docs/Web/API/Window/getComputedStyle
  const style = getComputedStyle(document.body)
  return [
    style.getPropertyValue('--color-1'),
    style.getPropertyValue('--color-2'),
    style.getPropertyValue('--color-3'),
    style.getPropertyValue('--color-4'),
    style.getPropertyValue('--color-5'),
  ]
}

export let colors = getColors()

export const backgroundColors = [
  '#333'
]

export const getRandomColor = () => {
  const index = Math.floor(Math.random() * colors.length)
  const color=colors[index]
  return color
}

const update =()=>{
  colors=getColors();
  document.querySelectorAll('section.color-set div.color').forEach((div, index) => {
    div.innerHTML = colors[index]
  })
}

update()

document.body.addEventListener('color-changed', () => {
  update()
})