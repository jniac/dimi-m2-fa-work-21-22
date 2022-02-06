import { randomItem, randomRange } from '../../../../common/random-utils.js'

const section = document.querySelector('section.random-chars')

// https://www.quora.com/What-are-the-coolest-Unicode-characters
// https://www.compart.com/en/unicode/category/So
const chars = 'ൠᴥ❽❋✺✪⁂▲▶►▼◆◢◣◤◥ᔱ፨ጃ❤௵ಠ༄᳄☠⚔♥֍⇆↫⌘⌆⌀⎈╳❄⚀⚁⚂⚃⚄⚅'

const count = 100

const spans = []
for (let i = 0; i < count; i++) {
  const char = randomItem(chars)
  const color = randomItem(['--color-2', '--color-3', '--color-4', '--color-5'])
  const angle = randomRange(-90, 90)
  const scale = randomRange(.3, 1)
  const x = (Math.random() * 100).toFixed() + '%'
  const y = (Math.random() * 100).toFixed() + '%'
  const transform = `rotate(${angle.toFixed(1)}deg) scale(${scale.toFixed(2)})`
  spans.push(`<span style="color: var(${color}); left: ${x}; top: ${y}; transform: ${transform};">${char}</span>`)
}

section.innerHTML = spans.join('\n')