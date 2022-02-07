
const clamp01 = (x) => x < 0 ? 0 : x > 1 ? 1 : x
const lerp = (a, b, t) => a + (b - a) * clamp01(t)
const inverseLerp = (a, b, t) => clamp01((t - a) / (b - a))

/** @typedef {'none' | 'children' | 'all-children'} DispatchMode */
/** @typedef {{ x: number, y: number, width: number, height: number, old?: ParallaxInfo }} ParallaxInfo */
/** @typedef {(info: ParallaxInfo, infoOld: ParallaxInfo) => void} ParallaxCallback */
/** @typedef {{ dispatch: DispatchMode, onParallax: ParallaxCallback }} TrackOptions */
/** @typedef {{ info: ParallaxInfo, dispatch: DispatchMode, directListenerCount: number }} Bundle */

/** @type {Map<HTMLElement, Bundle>} */
const map = new Map()

/**
 * Met à jour un noeud.
 * @param {HTMLElement} element 
 * @param {Bundle} bundle
 */
const updateElement = (element, bundle) => {
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

  const infoOld = bundle.info
  const hasChanged = !infoOld || (
    info.x !== infoOld.x ||
    info.y !== infoOld.y ||
    info.width !== infoOld.width ||
    info.height !== infoOld.height
  )

  if (hasChanged) {

    info.old = infoOld ?? { ...info }
    bundle.info = info
    
    const event = new CustomEvent('parallax', { detail: info })
    element.dispatchEvent(event)

    if (bundle.dispatch !== 'none') {
      const elements = [...element.children]
      while (elements.length > 0) {
        const first = elements.shift()
        first.dispatchEvent(event)
        if (bundle.dispatch === 'all-children') {
          elements.push(...first.children)
        }
      }
    }
  }
}

const update = () => {
  for (const [element, bundle] of map.entries()) {
    updateElement(element, bundle)
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
  
  if (map.has(element) === false) {
    map.set(element, { 
      info: null, 
      dispatch: options.dispatch, 
      directListenerCount: 1,
    })
  }
  else {
    const bundle = map.get(element)
    if (options.dispatch) {
      bundle.dispatch = options.dispatch
    }
    bundle.directListenerCount += 1
  }

  onDestroy.push(() => {
    const bundle = map.get(element)
    bundle.directListenerCount += -1
    if (bundle.directListenerCount === 0) {
      map.delete(element)
    }
  })
  
  if (options.onParallax) {
    const { destroy } = onParallax(element, options.onParallax)
    onDestroy.push(destroy)
  }

  update(element)

  return { destroy }
}

/**
 * Ajoute un écouteur d'évènement à un noeud du DOM.
 * @param {HTMLElement} element 
 * @param {ParallaxCallback} callback 
 */
export const onParallax = (element, callback) => {
  const listener = event => callback(event.detail, event.detail.old)
  element.addEventListener('parallax', listener)
  const destroy = () => element.removeEventListener('parallax', listener)
  return { destroy }
}
