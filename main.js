let myArray = []

function addCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    let blank = {}
    blank.letter = string[i]
    myArray.push(blank)
  }
  return myArray
}

addCharacter('Hello World')

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
