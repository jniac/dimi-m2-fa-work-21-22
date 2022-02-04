
const clamp01 = (x) => x < 0 ? 0 : x > 1 ? 1 : x
const lerp = (a, b, t) => a + (b - a) * clamp01(t)
const inverseLerp = (a, b, t) => clamp01((t - a) / (b - a))

/** @typedef {{ x: number, y: number, width: number, height: number }} ParallaxInfo */
/** @typedef {{ dispatchToChildren: boolean, onParallax: (info: ParallaxInfo) => void }} TrackOptions */

/** @type {Set<{ element: HTMLElement, dispatchToChildren: boolean }>} */
const elements = new Set()

/**
 * Met à jour un noeud.
 * @param {HTMLElement} element 
 * @param {boolean} dispatchToChildren Faut-il mettre à jour les enfants de ce noeud ?
 */
const updateElement = (element, dispatchToChildren = false) => {
  const parentWidth = window.innerWidth
  const parentHeight = window.innerHeight

  const el = element.getBoundingClientRect()
  const rx = inverseLerp(parentWidth, -el.width, el.x)
  const ry = inverseLerp(parentHeight, -el.height, el.y)
  const x = lerp(-1, 1, rx)
  const y = lerp(-1, 1, ry)
  const width = (parentWidth + el.width) / 2
  const height = (parentHeight + el.height) / 2
  const detail = { x, y, width, height }

  const event = new CustomEvent('parallax', { detail })
  element.dispatchEvent(event)

  if (dispatchToChildren) {
    for (const child of element.children) {
      child.dispatchEvent(event)
    }
  }
}

const update = () => {
  for (const { element, dispatchToChildren } of elements) {
    updateElement(element, dispatchToChildren)
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






/**
 * Ajoute un élément du DOM.
 * @param {HTMLElement} element
 * @param {Partial<TrackOptions>} options 
 */
export const trackParallax = (element, {
  dispatchToChildren = true,
  onParallax,
} = {}) => {
  elements.add({ element, dispatchToChildren })
  if (onParallax) {
    element.addEventListener('parallax', event => onParallax(event.detail))
  }
  update(element, dispatchToChildren)
}

/**
 * Ajoute un écouteur d'évènement à un noeud du DOM.
 * @param {HTMLElement} element 
 * @param {(info: ParallaxInfo) => void} onParallax 
 */
export const onParallax = (element, onParallax) => {
  const listener = event => onParallax(event.detail)
  element.addEventListener('parallax', listener)
  const destroy = () => element.removeEventListener('parallax', listener)
  return { destroy }
}
