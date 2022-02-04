import { trackParallax } from '../../../common/parallax.js'

const randomRange = (min, max) => {
  return min + (max - min) * Math.random()
}
const randomItem = (array) => {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

const initDot = (dot) => {

  const anchorX = randomRange(-.5, .5)
  const anchorY = randomRange(-.5, .5)
  const zIndex = randomItem([-1, 1, 1])
  const color = randomItem(['#210960', null])
  const scale = randomRange(.2, 1.2)
  dot.style.zIndex = zIndex
  dot.style.backgroundColor = color

  const parallaxScale = randomRange(0, 4)
  
  dot.addEventListener('parallax', event => {
    const px = anchorX + event.detail.x * parallaxScale
    const py = anchorY + event.detail.y * parallaxScale
    const tx = `${(px * 100).toFixed(1)}vw`
    const ty = `${(py * 100).toFixed(1)}vh`
    dot.style.transform = `translate(${tx}, ${ty}) scale(${scale})`
  })

}

const initParallax = () => {
  
  const section = document.querySelector('section.fx')
  const dotSource = document.querySelector('section.fx .dot')
  dotSource.remove()

  const dotCount = 100

  for (let i = 0; i < dotCount; i++) {
    const clone = dotSource.cloneNode(true)
    section.append(clone)
    initDot(clone)
  }

  trackParallax(section)
}

initParallax()
