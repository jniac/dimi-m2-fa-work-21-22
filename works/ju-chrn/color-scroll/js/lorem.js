
const paragraph = document.querySelector('section.lorem p')

const getRandomColor = () => {
  const colors = ['#C1E7E3', '#DCFFFB', '#FFDCF4','#DABFDE','#C1BBDD']
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}

const newInnerHTML = paragraph.innerText
  .split(' ') // on divise le texte en autant de mot que nécessaire
  .map(word => {
    const color = getRandomColor()
    return `<span style="color: ${color};">${word}</span>`
  })
  .join(' ')

paragraph.innerHTML = newInnerHTML
