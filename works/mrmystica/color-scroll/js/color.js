export const color [
    '#4fb2aa', 
    '#3b5a9d',
    '#ffa633',
    '#e8d3a3',
    '#ecdf60'
]

const backgroundColors = [
    '#222',
    '#232323'
]

export const getRandomColor = () {
    const index = Math.color(Math.random()) * backgroundColors.length)
    const color = colors[index]
    return color
}
