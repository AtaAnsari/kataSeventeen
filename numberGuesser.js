let prompt = require("prompt-sync")();
let randomNumber = Math.floor(Math.random()* 11)
let answers = ["initialize"]
let counter = 0
let decrement = 0

console.log("Guess a number: ")
let answer = prompt("> ");
for(i = 0; i < answers.length; i++){
  let number = Number(answer)
  let test = number/number
  let ifRepeat = false
  for(j=0; j < answers.indexOf(answer)+1; j++){
    if (test === 1 && answer === answers[j]){decrement +=1} else if (number === 0 && answer === answers[j]){decrement +=1}
    }
for(j=0; j < answers.indexOf(answer)+1; j++){
  if (answer === answers[j]){ifRepeat = true} else {ifRepeat = false}
  }
counter +=1
if(number === randomNumber && i===0){
  console.log(`You got it! You took ${counter} attempts!`)} 
else if (number === randomNumber) {
  console.log(`You got it! You took ${counter - decrement} attempts!`)}
else if ( number > randomNumber && ifRepeat === true){
  answers.push(answer)
  console.log("Already Guessed!")
  console.log("Guess a number: ")
  answer = prompt("> ")
  number = Number(answer)
}
else if ( number > randomNumber && ifRepeat === false){
  answers.push(answer)
  console.log("Too high!")
  console.log("Guess a number: ")
  answer = prompt("> ")
  number = Number(answer)
}
else if ( number < randomNumber && ifRepeat === true){
  answers.push(answer)
  console.log("Already Guessed!")
  console.log("Guess a number: ")
  answer = prompt("> ")
  number = Number(answer)
}
else if ( number < randomNumber && ifRepeat === false){
  answers.push(answer)
  console.log("Too Low!")
  console.log("Guess a number: ")
  answer = prompt("> ")
  number = Number(answer)
}

else if (test != 1){
  answers.push(answer)
  console.log("Not a number! Try Again!")
  answer = prompt("Guess a number: ")
  decrement +=1
}
}

