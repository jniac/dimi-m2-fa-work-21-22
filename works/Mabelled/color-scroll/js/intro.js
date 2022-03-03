import { trackParallax } from "../../../../common/parallax.js"

const section = document.querySelector('section.intro')
const svg = section.querySelector('svg')

const triangles = svg.querySelectorAll('path')

trackParallax(section, info => {
  triangles.forEach((triangle, index) => {
    const ty = index / triangles.length / 3
    const v = info.y > ty ? 'visible' : 'hidden'
    triangle.setAttributeNS(null, 'visibility', v)
  })
})
