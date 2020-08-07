//charAt(x)
var myString = 'jQuery FTW!!!';
console.log(myString.charAt(7));
//output: F

//charAt(position)
var message="jquery4u";
//alerts "q"
alert(message.charAt(1))

//concat(v1, v2,..)
var message="Sam"
var final=message.concat(" is a"," hopeless romantic.")
//alerts "Sam is a hopeless romantic."
alert(final)

//fromCharCode(c1, c2,...)
console.log(String.fromCharCode(97,98,99,120,121,122))
//output: abcxyz
console.log(String.fromCharCode(72,69,76,76,79))
//output: HELLO


//indexOf(char/substring)
var sentence="Hi, my name is Sam!"
if (sentence.indexOf("Sam")!=-1)
alert("Sam is in there!")


//lastIndexOf(substr, [start])
var myString = 'javascript rox';
console.log(myString.lastIndexOf('r'));
//output: 11



//match(regexp) //select integers only
var intRegex = /[0-9 -()+]+$/;  
 
var myNumber = '999';
var myInt = myNumber.match(intRegex);
console.log(isInt);
//output: 999
 
var myString = '999 JS Coders';
var myInt = myString.match(intRegex);
console.log(isInt);
//output: null

const arrayValue = [
    'red',
    'orange',
    'blue',
    'oink',
    'yellow'
];


console.log(arrayValue[arrayValue.length - 1]);
console.log(arrayValue[arrayValue.length] = "Water")

console.log(arrayValue.length)
console.log(arrayValue);


let newMusic = ['Theophilus Sunday', 'Hit man the jack', 'Amakye Dede song', 'Freedom by code'];

console.log(newMusic);

letters = [
    'T',
    'C',
    'E',
    'P',
    'S',
    'E',
    'R'
];
console.log(letters);
console.log(letters.join('-'));


let animals = [
    'shark',
    'salmon',
    'whale',
    'bear',
    'lizard',
    'tortoise'
];
console.log(animals);
// Remember the lenght is always -1 of the total
let swimmmers = animals.slice(0, 3);
console.log(swimmmers);

// Last item == -1
console.log(animals[animals.length - 1]);

const quadruped = animals.slice(-3);
console.log(quadruped);


// Splice method on arrays
console.log(animals.splice(1, 1));
console.log(animals.splice(1, 1, 'Herllo'))

console.log(animals);


/* The two methods, indexOf() and search(), are equal?
  
  The search() method cannot take a second start position argument.
  The indexOf() method cannot take powerful search values (regular expressions).
*/

let secondIndexOf = function (s1, s2) {
    let firstIndex = s1.indexOf(s2);
    return s1.indexOf(s2, firstIndex + 1);
}


let animal = [
    'shark',
    'salmon',
    'whale',
    'bear',
    'lizard',
    'tortoise'
];


// splice(startIdx, deleteCount, itemsToInsert);

// =====================
// INSERTING w/ SPLICE
// =====================
// 'at index 1, delete 0 items and insert "octopus"'
animals.splice(1, 0, 'octopus');
// ["shark", "octopus", "salmon", "whale", "bear", "lizard", "tortoise"]

// =====================
// DELETING w/ SPLICE
// =====================
// 'at index 5, delete 2 items'
animals.splice(5, 2);
// ["shark", "octopus", "salmon", "whale", "bear"]

// =====================
// REPLACING w/ SPLICE
// =====================
// 'at index 3, delete 2 items and replace them with "orca" and "grizzly"'
animals.splice(3, 2, 'orca', 'grizzly');
// ["shark", "octopus", "salmon", "orca", "grizzly"]
