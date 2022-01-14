import { resizeCanvas, setPixel } from '../../../../common/canvas.js'
import { ant } from './ant.js'

resizeCanvas(32, 32)

ant.teleport(15, 15)

document.querySelector('button').onclick = () => {
  ant.move()
}
