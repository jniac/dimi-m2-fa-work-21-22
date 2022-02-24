import { chance, randomItem, randomRange } from '../../../../common/random-utils.js'

const section = document.querySelector('section.random-chars')

const randomDraw = () => {

  // https://www.quora.com/What-are-the-coolest-Unicode-characters
  // https://www.compart.com/en/unicode/category/So
  const chars = 'ൠ❽❋✺⁂▲▶►▼◆◢◣◤◥֍⇆↫⌘⌆⌀⎈╳❄⚀⚁⚂⚃⚄⚅▧▥▦▧▥▦▧▥▦▱◊⌁'

  const count = 100

  const spans = []
  for (let i = 0; i < count; i++) {
    const char = randomItem(chars)
    const color = randomItem(['--color-2', '--color-3', '--color-4', '--color-5'])
    const angle = randomRange(-90, 90)
    const scale = chance(1 / 40) ? randomRange(4, 5) : randomRange(.3, 1)
    const x = (Math.random() * 100).toFixed() + '%'
    const y = (Math.random() * 100).toFixed() + '%'
    const transform = `translate(-50%, -50%) rotate(${angle.toFixed(1)}deg) scale(${scale.toFixed(2)})`
    const style = `
      color: var(${color}); 
      left: ${x}; 
      top: ${y}; 
      transform: ${transform};
    `
    spans.push(`<span style="${style}">${char}</span>`)
  }

  section.querySelector('.container').innerHTML = spans.join('\n')
}

randomDraw()

section.querySelector('button').onclick = () => {
  randomDraw()
}
