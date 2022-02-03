export const colors = [
  '#fc0',
  'red',
  'blue',
  '#6f0',
  '#888',

]


export const backgroundColors = [
'black',
'brown',
]


export const getRandomColor = () => {
  const index = Math.floor(Math.random() * colors.length)
  const color = colors[index]
  return color
}
