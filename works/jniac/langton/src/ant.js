import { getPixel, setPixel } from '../../../../common/canvas.js'

let x = 0
let y = 0
let orientation = 0

const teleport = (newX, newY) => {
  x = newX
  y = newY
}

const moveForward = () => {
  // Droite :
  if (orientation === 0) {
    x = x + 1
  }
  // Bas :
  else if (orientation === 1) {
    y = y + 1
  }
  // Gauche :
  else if (orientation === 2) {
    x = x - 1
  }

  // Haut :
  else if (orientation === 3) {
    y = y - 1
  }
}

export const turnRight = () => {
  orientation = orientation + 1
  if (orientation === 4) {
    orientation = 0
  }
}

export const turnLeft = () => {
  orientation = orientation - 1
  if (orientation === -1) {
    orientation = 3
  }
}

export const move = () => {
  const pixel = getPixel(x, y)

  if (pixel === '#ff0000') {
    setPixel(x, y, '#ffffff')
    turnLeft()
  } else {
    setPixel(x, y, '#ff0000')
    turnRight()
  }

  moveForward()
}

export const ant = {
  move,
  teleport,
}
