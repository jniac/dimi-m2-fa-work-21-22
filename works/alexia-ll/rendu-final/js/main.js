import './animwave.js'
import './color-onclick.js'
import './color-set.js'
import './lorem.js'


document.querySelector('.color-change button').onclick = () => {
  
  document.body.classList.toggle('color-version-2')

  const event = new CustomEvent('color-changed')
  document.body.dispatchEvent(event)
}
