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

/* Annoymus function 

function divid(x , y){
  return x  / y ;
}

function multi(x , y){
  return x * y;
}


*/

// function express = storing a function  in a variable 
const divid = function(x , y){
  return x  / y ;
}

divid(2,4);

const mutti = function(x , y){
  return x * y;
}

mutti(4, 5);


// Higher Order function -- passing function as argument into another function 
function callThreeTimes(){
  cry()
  cry()
  cry()

}

function cry(){
  console.log('Hello world function expression ');
}


function repeatNTimes(action , num){
  for(let i = 0; i < num; i++){
    action()
  }
}
repeatNTimes(cry, 12);



function pickOne(f1, f2){
  const pif1 = Math.floor(Math.random() * 10);
  const pif2 = Math.floor(Math.random() * 10);

  if(pif1 <= 5){
    f1()
  }

  if(pif2 >= 6){
    f2()
  }
}

function snig(){
  console.log('function 1 called');
}

function sing2(){
  console.log('function 2 Called');
}

pickOne(snig, sing2);


//Higher Order function 2-  function that return another function 
function multipyiBy(num){
  return function(x){
    return x * num;
  }
}


const triple = multipyiBy(3);
const double = multipyiBy(2);


// Hoisting with var , let , const

// Hoisting is allowed before initialization in  the case of  var
console.log(varAnimailHoisting)
var varAnimailHoisting = 'tiger';


// Hoisting not allowed before initialization in the case of const 
// console.log(constAnimailHoisting);
// const constAnimailHoisting = 'tiger';

// //Hoisting 
// console.log(letHoistingAnimal);
// let letHoistingAnimal = 'tiger';

/* 
 Hoisting works for normal functions 
 But not function expressions

*/

