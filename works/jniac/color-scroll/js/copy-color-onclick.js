
const divs = document.querySelectorAll('section.color-set div.color')

for (const div of divs) {
  div.onclick = () => {
    // on utilise l'API du navigateur, cf doc:
    // https://developer.mozilla.org/fr/docs/Web/API/Clipboard/writeText
    navigator.clipboard.writeText(div.innerText)
  }
}
