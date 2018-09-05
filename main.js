let state = {
  currentCharacter: 0,
  totalKeyDown: 0,
  failures: 0
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

function showResults(){
  let $resultMessage = document.createElement('p') // add a class here to style your paragraph
  let x = Math.round(((state.totalKeyDown-state.failures)/state.totalKeyDown)*100)
  $resultMessage.textContent = 'Good job! You had ' + x + '% accuracy!'
  return $resultMessage
}

$view.appendChild(renderAllLetters(characters))

document.addEventListener('keydown', function (e) {
  if (state.currentCharacter === characters.length){
    $view.innerHTML = ''
    $view.appendChild(renderAllLetters(characters))
    $view.appendChild(showResults())
  }
  else if (e.key === characters[state.currentCharacter].letter) {
    state.currentCharacter += 1
    state.totalKeyDown += 1
    $view.innerHTML = ''
    $view.appendChild(renderAllLetters(characters))
  }
  else if (e.key !== characters[state.currentCharacter].letter) {
    state.myCharacters[state.currentCharacter].failures += 1
    state.failures += 1
    state.totalKeyDown += 1
    $view.innerHTML = ''
    $view.appendChild(renderAllLetters(characters))
  }
})
