export const colors =['#ffcc00', 'red', 'blue', 'green', '#ff7900']
export const backgroudColors = ['#222', '#232323']

export const getRandomColor =() => {
  const index = Math.floor(Math.random() * colors.length)
  const color = colors[index]
  return color
}