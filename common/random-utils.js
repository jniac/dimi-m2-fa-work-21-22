export const randomRange = (min, max) => {
  return min + (max - min) * Math.random()
}

/**
 * Renvoie un élément aléatoire d'une tableau.
 * @template T
 * @param {T[]} array 
 * @returns {T}
 */
export const randomItem = (array) => {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

/**
 * Créer une copie "mélangée" d'un tableau.
 * @template T
 * @param {T[]} array 
 * @returns {T[]}
 */
export const shuffle = (array) => {
  const result = [...array]
  for (let index = 0; index < array.length; index++) {
    const randomIndex = Math.floor(Math.random() * array.length)
    const tmp = result[index]
    result[index] = result[randomIndex]
    result[randomIndex] = tmp
  }
  return result
}
