const paragraph = document.querySelector('section.lorem p')



const newInnerHTML = paragraph.innerText
  .split(' ') // on divise le texte en autant de mot que nécessaire
  .map(word => {
    const color = getRandomColor()
    return `<span style="color: ${color};">${word}</span>`
  })
  .join(' ')

paragraph.innerHTML = newInnerHTML