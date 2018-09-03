let myArray = [
  {
    word: 'Hello'
  },
  {
    word: 'World'
  }
]

function renderWord(item) {
  let $word = document.createElement('p')
  for (let i = 0; i < item.length; i++) {
    $word.textContent = item[i]
  }
  return $word
}
