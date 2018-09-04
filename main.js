let myArray = []

let state = {
  start: false,
}

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

function renderLetter(item) {
  let $letter = document.createElement('span')
  $letter.textContent = item.letter
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
