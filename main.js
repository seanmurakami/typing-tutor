let state = {
  start: false, // when the user starts typing, this should switch to "true"
  currentCharacter: 0 // what has to be adjusted as the user types, should increase by one if they type the correct letter
}

let myArray = [] // contains objects with property "letter"

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
function renderLetter(item) {
  let $letter = document.createElement('span')
  $letter.textContent = item.letter
  if ($letter.textContent === myArray[state['currentCharacter']]['letter']){
    $letter.classList.toggle('characterTyped')
  }
  return $letter
}

function renderAllLetters(items){
  let $sentence = document.createElement('div')
  for (let i = 0; i < items.length; i++){
    $sentence.appendChild(renderLetter(items[i]))
  }
  return $sentence
}

document.body.appendChild(renderAllLetters(myArray))
