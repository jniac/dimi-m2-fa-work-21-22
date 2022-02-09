
export const colors = [
  '#ffcc00', 
  'red',
  'blue',
  '#6f0',
  '#0ff',
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
