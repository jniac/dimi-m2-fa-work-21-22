export const colors = [
  '#C1E7E3',
  '#DCFFFB',
  '#FFDCF4',
  '#DABFDE',
  '#C1BBDD',
]

export const backgroundColors = [
  '333'
]

export const getRandomColor = () => {
  const index = Math.floor(Math.random() * colors.length)
  const color = colors[index]
  return colors[index]
}