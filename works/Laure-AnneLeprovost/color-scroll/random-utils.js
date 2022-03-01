/**
 * Renvoie un nombre au hasard compris entre `min` et `max`
 * @param {number} min 
 * @param {number} max 
 */
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

/**
 * Effectue un tirage aléatoire et le compare avec la probabilité donnée en paramètre :
 * - `chance(0)` retourne toujours `false`
 * - `chance(1)` retourne toujours `true`
 * - `chance(0.5)` retourne `true` dans 50% des cas
 * @param {number} p 
 * @returns 
 */
export const chance = (p) => Math.random() < p