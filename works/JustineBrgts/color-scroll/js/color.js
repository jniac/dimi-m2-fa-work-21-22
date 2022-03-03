export const colors =[
'#590d22',
'#800F2F',
'#A4133C',
'#C9184A',
'#FF4D6D',
 ]

const backgroundColors = [
'#fcfcfc',
]

export const getRandomColor = () => {
const index = Math.floor(Math.random() * colors.length)
const color = colors [index]
return color
}
