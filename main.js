let state = {
  start: false,
  currentCharacter: 0
}

let characters = []

let $view = document.querySelector('div')

function addCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    let blank = {}
    blank.letter = string[i]
    blank.failures = 0
    characters.push(blank)
  }
  state.myCharacters = characters
  return characters
}

addCharacter('grumpy wizards make toxic brew for the evil queen and jack')

function renderLetter(item, number) {
  let $letter = document.createElement('span')
  $letter.textContent = item.letter
  if (item === characters[state.currentCharacter] && (state.myCharacters[number].failures > 0)) {
    $letter.classList.toggle('failed')
  }
  else if (item === characters[state.currentCharacter]){
    $letter.classList.toggle('characterTyped')
  }
  return $letter
}

function renderAllLetters(items) {
  let $sentence = document.createElement('div')
  $sentence.classList.add('container')
  for (let i = 0; i < items.length; i++) {
    $sentence.appendChild(renderLetter(items[i], i))
  }
  return $sentence
}

$view.appendChild(renderAllLetters(characters))

document.addEventListener('keydown', function (e) {
  if (e.key === characters[state.currentCharacter].letter) {
    state.start = true
    state.currentCharacter += 1
    $view.innerHTML = ''
    $view.appendChild(renderAllLetters(characters))
  }
  else if (e.key !== characters[state.currentCharacter].letter) {
    state.myCharacters[state.currentCharacter].failures += 1
    $view.innerHTML = ''
    $view.appendChild(renderAllLetters(characters))
  }
})
