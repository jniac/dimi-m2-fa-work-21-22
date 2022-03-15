
const divs = document.querySelectorAll('section.color-set div.color')

for (const div of divs) {
  div.onclick = () => {

    navigator.clipboard.writeText(div.innerText)
    
    div.classList.add('clicked')
    setTimeout(() => {
      div.classList.remove('clicked')
    }, 500)
  }
}
