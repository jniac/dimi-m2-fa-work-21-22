import { setPixel } from '../../../../common/canvas.js'

let x = 0
let y = 0
let orientation = 0

const moveForward = () => {
  if (orientation === 0) {
    x = x + 1
  }
  else if (orientation === 1) {
    y = y + 1
  }
  else if (orientation === 2) {
    x = x - 1
  }
  else if (orientation === 3) {
    y = y - 1
  }
}

export const move = () => {
  moveForward()
  setPixel(x, y, 'red')
}



export const left = () => {
  orientation = orientation + 1
  if (orientation === 4) {
    orientation = 0
  }
}

export const right = () => {
  orientation = orientation - 1
  if (orientation === -1) {
    orientation = 3
  }
}