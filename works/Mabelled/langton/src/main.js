import { resizeCanvas, setPixel } from '../../../../common/canvas.js'
import { ant } from './ant.js'

resizeCanvas(128, 128)

ant.teleport(64, 64)

document.querySelector('button').onclick = () => {
  ant.move()
}
