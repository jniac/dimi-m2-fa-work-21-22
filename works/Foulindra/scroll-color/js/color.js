export const colors = [
  'white',
  'blue',
  'yellow',
  'orange',
  'green',
]

export const backgroundColors = [
  '#222',
  '#232323',
]

export const getRandomColor = () => {
  const index = Math.floor(Math.random() * colors.length)
  const color = colors[index]
  return color
}
