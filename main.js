let myArray = []

function addCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    let blank = {}
    blank.letter = string[i]
    myArray.push(blank)
  }
  return myArray
}

addCharacter('I believe I can fly. I believe I can touch the sky. I dream about it every night and day. Spread my wings and fly away.')

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
