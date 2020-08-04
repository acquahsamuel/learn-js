function square1(num) {
    return num * num
}

function addition(x, y) {
    return x + y
}

let squareS = square1(3)
console.log(squareS)

function isPurple(color) {
    return color.toLowerCase() === 'purple'
}

console.log(isPurple('purple'))

function containsPurple(arr) {
    for (let color of arr) {
        if (color === 'purple' || color === 'magenta') {
            return true
        }
    }
    return false
}

// Function Challenge

console.log('========Function Challenge ============')

function isValidPassword(password, username) {
    if (password.length < 8 || password.indexOf(' ') !== -1 || password.indexOf(username) !== -1) {
        return false
    }
    return true
}

console.log(isValidPassword('89Fjj1nms', 'dogluvr'));


// function array challenge
function averageChallenge(arrayValu) {
    let total = 0;
    for (let eachArrayVal of arrayValu) {
        total += eachArrayVal;
    }
    return total / arrayValu.length;
}

console.log(averageChallenge([0, 50]));

// Pangrams
function isPangram(sentence) {
    let lowerCase = sentence.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let char of alphabet) {
        if (lowerCase.indexOf(char) === -1) {
            return false
        }
    }
    return true;
}

isPangram('Hellow');


// Get Chard

console.log('========getChar ============')


function pick(arr) {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}


function getCard() {
    let alphaNum = [
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
        'A'
    ];

    let suit = ['clubs', 'spades', 'hearts', 'diamonds'];
    return {value: pick(alphaNum), suit: pick(suit)};

}

console.log(getCard());



/* Scoping 
let and const 

but not var 
*/

function scoper(){
    let name = "James";
    let age = 10;
    let color = "pink";

}
scoper();



// Always use let and const not var(again)
// Scoping for let
function doubleArray(arr){
    const result = [];

    for(i = 0; i < arr.length; i++){
        let double = arr[i] * 2;
        result.push(double);
    }
     return result;
}


// Lexical Scoping

function outer(){
    let movie = 'Amadeus';

    function inner(){
        let movie = 'The shinning';
        console.log(movie.toUpperCase());
    }
    inner();
}

outer();


// function expression (annoymus function)
function add(x , y){
    return x + y;
}

let sums = function(x , y){
    return x + y;
}

const product = function multiply(x , y){
    return x * y;
}



// function as objects
function add1(x,y){
    return x + y;
}

function sub1(x,y){
    return x-y;
}

function mult1(x,y){
    return x * y;
}

function div1(x,y){
 return x / y;
}

const operation = [add1, sub1, mult1, div1];

for(let fun of operation){
    let result = fun(2,3);
    console.log(result);
}

function rage(){
    console.log('I have eiids');
}

function  cry(){
    console.log('Boo hoo coding for fun');
}


function repeatNTimes(action , num){
    for(let i = 0 ; i < num; i++){
        action();
    }
}

repeatNTimes(cry, 13);


// Randomly Select function 
function pickOne(f1, f2){
    let rand = Math.random();
    if(rand  < 0.5){
        f1();
    }else{
        f2();
    }
}

//function as return values 
function multiplyer(num){
    return function (x){
        return x * num;
    }
}

const triple = multiplyer(3);