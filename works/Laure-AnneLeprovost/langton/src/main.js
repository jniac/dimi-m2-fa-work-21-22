import { resizeCanvas, setPixel } from '../../../../common/canvas.js'

resizeCanvas(32, 32)

setPixel(3, 3, 'red')
setPixel(4, 3, 'blue')
setPixel(4, 4, '#f59833')

for (let x = 3; x < 24; x = x + 1) {
  const color = (x % 5 === 0) ? '#fc0' : 'red'
  setPixel(x, 10, color)
}