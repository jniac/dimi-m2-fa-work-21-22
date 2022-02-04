
const clamp01 = (x) => x < 0 ? 0 : x > 1 ? 1 : x
const lerp = (a, b, t) => a + (b - a) * clamp01(t)
const inverseLerp = (a, b, t) => clamp01((t - a) / (b - a))

const elements = new Set()

const updateElement = (element) => {
  const parentWidth = window.innerWidth
  const parentHeight = window.innerHeight

  const el = element.getBoundingClientRect()
  const rx = inverseLerp(parentWidth, -el.width, el.x)
  const ry = inverseLerp(parentHeight, -el.height, el.y)
  const x = lerp(1, -1, rx)
  const y = lerp(1, -1, ry)
  const width = (parentWidth + el.width) / 2
  const height = (parentHeight + el.height) / 2
  const detail = { x, y, width, height }

  const event = new CustomEvent('parallax', { detail })
  element.dispatchEvent(event)
  for (const child of element.children) {
    child.dispatchEvent(event)
  }
}

/**
 * Ajoute un élément du DOM.
 * @param {HTMLElement} element 
 */
export const trackParallax = (element) => {
  elements.add(element)
  update(element)
}

const update = () => {
  for (const element of elements) {
    updateElement(element)
  }
}

const loop = () => {
  requestAnimationFrame(loop)
  update()  
}

// À chaque "frame" ? Pas pour le moment.
// requestAnimationFrame(loop)

// à chaque scroll c'est suffisant
window.onscroll = update
