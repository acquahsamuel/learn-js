// Function are key

function definition() {
  console.log('Hello world')
  console.log('Hello Code')
  console.log('Hello Javascript')
}

definition()

function rollDice() {
  const randomDice = Math.floor(Math.random() * 6) + 1
  console.log(randomDice)
}

rollDice()

// Calling function inside (functions , conditionals , objects)
function rollDie() {
  rollDice()
  rollDice()
  rollDice()
  rollDice()
}

function throwDice(rollTimes) {
  for (let i = 0; i < rollTimes; i++) {
    rollDice()
  }
}

//Multiple parameter function (Other matters)
function sum(x, y) {
  console.log(x + y)
}

function divide(a, b) {
  console.log(a / b)
}

/* using return along with function
   Return ends function execution where you calls it
*/
function multi(x, y) {
  return x * y
}

function returnStopIt(name, years) {
  return `${name} ${years} `
  console.log('Hello world')
}

function containsPurple(arr) {
  for (let singleArr of arr) {
    if (singleArr === 'purple' || singleArr === 'magneta') {
      return true
    }
  }
  return false
}

// Challenges With function
function isValidPassword(password, username) {
  const passwordLength = password.length < 8
  const passwrodNoSpace = password.indexOf(' ') !== -1
  const passwordCheck = password.indexOf(username) !== -1

  if (passwordLength || passwrodNoSpace || passwordCheck) return false
  return true
}

// function average

function averageNums(arrVal) {
  let total = 0
  for (let iVal of arrVal) {
    total += iVal
  }
  let res = total / arrVal.length
  return res
}

// function challenge Pangram
let alpha = 'abcdefghijklmnopqrstuvwxyz'
function isPanagram(sentence) {
  for (let alphaChar of alpha) {
    if (sentence.indexOf(alphaChar) === -1) {
      return false
    }
  }
  return true
}

//function playing cards
function getCard() {
  const values = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
    'A',
  ]

  const valIdx = Math.floor(Math.random() * values.length)
  const value = values[valIdx]

  const suits = ['clubs', 'spades', 'hearts', 'diamond']

  const suitIdx = Math.floor(Math.random() * suits.length)
  const suit = suits[suitIdx]

  return {
    value,
    suit,
  }
}

// https://docs.google.com/forms/d/e/1FAIpQLSfAi2o2npU12y5nLHPljAkjv2bzPRT-tvsahyMYRV9XmwvEUQ/viewform?usp=sf_link

//functions Scope
function lol() {
  let person = 'Tomas'
  let age = 45
  let color = 'teal'
}
// lol();
// console.log(person);

/* 
Block Scope (No block scope for var) - issue with var
 Let and const in block scope behaves different to the scope they can be assigned
 or called 
*/
if (true) {
  var animal = 'eel'
  console.log(animal)
}
console.log(animal)

// let animals = ['chimpanzze' ,'panda bear', 'cat'];
// let i = 10;
for (var i = 0; i < animal.length; i++) {
  console.log(i, animal)
}

function doubleArr(arr) {
  const result = []
  for (let num of arr) {
    let double = num * 2
    result.push(double)
  }
  return result
}

/*Lexical Scope 
  Inner function has access to the outer function 
  The inner inner function has access to the outer function 
*/

function outerFun() {
  let hero = 'Black Panter'

  function inner() {
    let cryForHelp = `${hero}, of our heros past`
    console.log(cryForHelp)

    function superInner() {
      let gameplay = cryForHelp
      gameplay = 'Am go the gaming engineer'
      console.log(gameplay)
    }

    superInner()
  }

  inner()
}

// function express = storing a function  in a variable 
const divid = function divid(x , y){
  return x  / y ;
}

divid(2,4);

const mutti = function multi(x , y){
  return x * y;
}

mutti(4, 5);
