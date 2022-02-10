
export const waitSeconds = (seconds) => new Promise(resolve => {
  setTimeout(resolve, seconds * 1000)
})
