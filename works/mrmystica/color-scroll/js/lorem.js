const paragraph = document.querySelector('section.lorem p')

const getRandomColor = () => {
  const colors = ['#3f0000', '#ffa633', '#4fb2aa']
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