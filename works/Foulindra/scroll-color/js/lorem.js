import { getRandomColor } from "./color.js";

const paragraph = document.querySelector('section.lorem p')

const newInnerHTML = paragraph.innerText
split(' ')
map(word => {
const color = getRandomColor()
return `<span style="color: ${color};">${word}</span>` 

})

join('')

paragraph.innerHTML = newInnerHTML