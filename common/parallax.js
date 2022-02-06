
const clamp01 = (x) => x < 0 ? 0 : x > 1 ? 1 : x
const lerp = (a, b, t) => a + (b - a) * clamp01(t)
const inverseLerp = (a, b, t) => clamp01((t - a) / (b - a))

/** @typedef {'none' | 'children' | 'all-children'} DispacthMode */
/** @typedef {{ x: number, y: number, width: number, height: number, old?: ParallaxInfo }} ParallaxInfo */
/** @typedef {(info: ParallaxInfo, infoOld: ParallaxInfo) => void} ParallaxCallback */
/** @typedef {{ dispatch: DispacthMode, onParallax: ParallaxCallback }} TrackOptions */

/** @type {Set<{ element: HTMLElement, dispatch: DispacthMode }>} */
const elements = new Set()

/** @type {Map<HTMLElement, ParallaxInfo>} */
const infoMap = new Map()

/**
 * Met à jour un noeud.
 * @param {HTMLElement} element 
 * @param {DispacthMode} dispatch Faut-il mettre à jour les enfants de ce noeud ?
 */
const updateElement = (element, dispatch = 'none') => {
  const parentWidth = window.innerWidth
  const parentHeight = window.innerHeight

  const el = element.getBoundingClientRect()
  const rx = inverseLerp(parentWidth, -el.width, el.x)
  const ry = inverseLerp(parentHeight, -el.height, el.y)
  const x = lerp(-1, 1, rx)
  const y = lerp(-1, 1, ry)
  const width = (parentWidth + el.width) / 2
  const height = (parentHeight + el.height) / 2
  const info = { x, y, width, height, old: null }

  const infoOld = infoMap.get(element)
  const hasChanged = !infoOld || (
    info.x !== infoOld.x ||
    info.y !== infoOld.y ||
    info.width !== infoOld.width ||
    info.height !== infoOld.height
  )

  if (hasChanged) {

    info.old = infoOld ?? { ...info }
    infoMap.set(element, info)
    
    const event = new CustomEvent('parallax', { detail: info })
    element.dispatchEvent(event)
  
    if (dispatch !== 'none') {
      const elements = [...element.children]
      while (elements.length > 0) {
        const first = elements.shift()
        first.dispatchEvent(event)
        if (dispatch === 'all-children') {
          elements.push(...first.children)
        }
      }
    }
  }
}

const update = () => {
  for (const { element, dispatch } of elements) {
    updateElement(element, dispatch)
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
 * @param {Partial<TrackOptions> | ParallaxCallback} options 
 */
export const trackParallax = (element, options = null) => {
  
  if (typeof options === 'function') {
    return trackParallax(element, { onParallax: options })
  }

  const onDestroy = []
  const destroy = () => {
    for (const cb of onDestroy) {
      cb()
    }
  }
  
  const { 
    dispatch = 'none', 
    onParallax: onParallaxArg,
  } = options ?? {}
  
  const bundle = { element, dispatch }
  elements.add(bundle)
  onDestroy.push(() => elements.delete(bundle))

  if (onParallaxArg) {
    const { destroy } = onParallax(element, onParallaxArg)
    onDestroy.push(destroy)
  }

  update(element, dispatch)

  return { destroy }
}

/**
 * Ajoute un écouteur d'évènement à un noeud du DOM.
 * @param {HTMLElement} element 
 * @param {ParallaxCallback} onParallax 
 */
export const onParallax = (element, onParallax) => {
  const listener = event => onParallax(event.detail, event.detail.old)
  element.addEventListener('parallax', listener)
  const destroy = () => element.removeEventListener('parallax', listener)
  return { destroy }
}
