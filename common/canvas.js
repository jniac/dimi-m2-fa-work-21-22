
export const canvas = document.querySelector('canvas')
export const ctx = canvas.getContext('2d')

/**
 * Change la taille du canvas (et permet de choisir un couleur "white" par défaut).
 * @param {number} width 
 * @param {number} height 
 * @param {string} color 
 */
export const resizeCanvas = (width, height, color = 'white') => {

  canvas.width = width
  canvas.height = height
  ctx.fillStyle = color
  ctx.fillRect(0, 0, width, height)
}

/**
 * Définit la couleur d'un pixel du canvas.
 * @param {number} x 
 * @param {number} y 
 * @param {string} color 
 */
export const setPixel = (x, y, color) => {

  ctx.fillStyle = color
  ctx.fillRect(x, y, 1, 1)
}

/**
 * Récupère la valeur d'un pixel du canvas.
 * @param {number} x 
 * @param {number} y 
 * @returns Un chaîne de caractère du type "#ff0000" (les lettres sont en bas de casse).
 */
 export const getPixel = (x, y) => {

  const [r, g, b] = ctx.getImageData(x, y, 1, 1).data
  const rgb = r << 16 | g << 8 | b
  return `#${rgb.toString(16).padStart(6, '0')}`
}
