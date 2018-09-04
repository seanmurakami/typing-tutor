let state = {
  start: false, // when the user starts typing, this should switch to "true"
  currentCharacter: 0 // what has to be adjusted as the user types, should increase by one if they type the correct letter
}

let myArray = [] // contains objects with property "letter"

let $view = document.querySelector('div')

// takes a string and assigns each characer its own property of "letter"
// it then pushes it to the array
function addCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    let blank = {}
    blank.letter = string[i]
    myArray.push(blank)
  }
  state.myCharacters = myArray
  return myArray
}

addCharacter('grumpy wizards make toxic brew for the evil queen and jack')

// renders one letter at a time and puts it in a span element
// if the text content = myArray[currentCharacter value] - starting is 0
function renderLetter(item, number) {
  let $letter = document.createElement('span')
  $letter.textContent = item.letter
  if (myArray[number] === myArray[state['currentCharacter']]) {
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

$view.appendChild(renderAllLetters(myArray))

document.addEventListener('keydown', function (e) {
  if (e.key === myArray[state['currentCharacter']]['letter']) {
    state.start = true
    state.currentCharacter += 1
    $view.innerHTML = ''
    $view.appendChild(renderAllLetters(myArray))
  }
})
