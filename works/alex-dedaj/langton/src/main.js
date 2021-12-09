import { resizeCanvas, setPixel } from '../../../../common/canvas.js'

resizeCanvas(32, 32)

setPixel(3, 3, 'red')
setPixel(4, 3, 'blue')
setPixel(4, 4, '#f59833')

for (let x = 3; x < 24; x++) {
    const color = (x % 2 === 0) ? '#fc0' : 'red'
    // Division euclidienne, en gros, on divise le numéro du pixel (1,2,3)
    // par 2, si le chiffre restant est 0 (donc divisé par un pixel pair)
    // alors on colorie le pixel en 'fc0 (jaune)', sinon en rouge
    setPixel(x, 10, '#fc0')
}