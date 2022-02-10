export const colors = [
  '#ffcc00',
  'red',
  'blue',
  '#f6c044',
  '#0ff',
]

export const backgroundColors = [
  '#222',
  '#0FFCA8',
]
export const getRandomColor = () => {
  const index = Math.floor(Math.random() * colors.length)
  const color = colors[index]
  return color
}