import './intro.js'
import './plz-scroll-down.js'
import './color-set.js'
import './lorem.js'
import './simple-accordion.js'
import './simple-parallax.js'
import './color-interpolation.js'
import './complex-parallax.js'
import './complex-accordion.js'
import './random-chars.js'
import './you-cant-read-this.js'
import './rorschach.js'

document.querySelector('.color-change button').onclick = () => {
  
  document.body.classList.toggle('color-version-2')

  // l'évènement "custom" permet de notifier aux scripts qui en font la demande
  // (document.body.addEventListener('color-changed'), ...) le fait que le jeu 
  // de couleur a changé. 
  const event = new CustomEvent('color-changed')
  document.body.dispatchEvent(event)
}
