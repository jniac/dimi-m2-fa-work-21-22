export const colors = [
  '#fff', 
  '#bc13fe',
  '#f09',
  '#0fa',
  '#cc0',
]

export const backgroundColors = [
  '#black',
  '#black',
]

export const getRandomColor = () => {
  const index = Math.floor(Math.random() * colors.length)
  const color = colors[index]
  return color
}
