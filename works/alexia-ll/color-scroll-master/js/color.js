
export const colors = [
  '#ffcc00', 
  '#aaaaaa',
  '#94003a',
  '#4223a8',
  '#fff',
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
