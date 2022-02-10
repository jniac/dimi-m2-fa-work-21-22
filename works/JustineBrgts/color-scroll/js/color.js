const colors =[
'#e4c55f',
'#c05959',
'#be596a',
'#ff00ff',
'#a80529',
 ]

const backgroundColors = [
'#fcfcfc',
]

export const getRandomColor = () => {
const index = Math.floor(Math.random() * colors.length)
const color = colors [index]
return color
}
div.onclick = () => {
     
     navigator.clipboard.writeText(color)
 
     section.style.backgroundColor = color
     
     div.classList.add('clicked')
     setTimeout(() => {
       div.classList.remove('clicked')
       section.style.backgroundColor = null
     }, 500)
   }
 