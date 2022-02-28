import './color-set.js'
import './intro.js'
import './lorem.js'
import './parallax.js'
import './particles2.js'
import './end.js'






const btn = document.querySelector('.color-change button').onclick = () => {

    document.body.classList.toggle('color-version-2')
    const event = new CustomEvent('color-changed')
    document.body.dispatchEvent(event)

  
  }

 