import './copy-color-onclick.js'
import './lorem.js'
import './color-set.js'
import './simple-accordion.js'
import './animation.js'

document.querySelector('.color-change button').onclick = () => {
  
  document.body.classList.toggle('color-version-2')

  // l'évènement "custom" permet de notifier aux scripts qui en font la demande
  // (document.body.addEventListener('color-changed'), ...) le fait que le jeu 
  // de couleur a changé. 
  const event = new CustomEvent('color-changed')
  document.body.dispatchEvent(event)
}
