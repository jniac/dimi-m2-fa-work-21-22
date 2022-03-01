import { resizeCanvas, setPixel } from '../../../../common/canvas.js'
import './ant.js'
import { left, move } from './ant.js'

resizeCanvas(32, 32)

setPixel(3, 3, 'red')
setPixel(4, 3, 'blue')
setPixel(4, 4, '#f59833')

move()
move()
move()
left()
move()
