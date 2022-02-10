
const copyLeftToRight = () => {
  const left = document.querySelector('section.rorschach div.left')
  const right = document.querySelector('section.rorschach div.right')
  right.innerHTML = left.innerHTML
}

copyLeftToRight()
