/**
 * Renvoie un tableau des 5 couleurs définies en CSS.
 */
 const getColors = () => {
    // https://developer.mozilla.org/fr/docs/Web/API/Window/getComputedStyle
    const style = getComputedStyle(document.body)
    return [
      style.getPropertyValue('--color-1'),
      style.getPropertyValue('--color-2'),
      style.getPropertyValue('--color-3'),
      style.getPropertyValue('--color-4'),
      style.getPropertyValue('--color-5'),
    ]
  }
  
  const section = document.body.querySelector('section.color-set')
  const divs = [...section.querySelectorAll('.color')]
  
  const update = () => {
  
    const colors = getColors()
  
    divs.forEach((div, index) => {
    
      const color = colors[index]
      
      div.style.backgroundColor = color
      div.innerHTML = color
    
      div.onclick = () => {
        // on utilise l'API du navigateur, cf doc:
        // https://developer.mozilla.org/fr/docs/Web/API/Clipboard/writeText
        navigator.clipboard.writeText(color)
    
        section.style.backgroundColor = color
        
        // le feedback visuel est géré avec l'ajout, puis le retrait au bout de 500ms,
        // d'une classe CSS "clicked".
        div.classList.add('clicked')
        setTimeout(() => {
          div.classList.remove('clicked')
          section.style.backgroundColor = null
        }, 500)
      }
    })
  }
  
  update()
  
  document.body.addEventListener('color-changed', () => {
    update()
  })
  