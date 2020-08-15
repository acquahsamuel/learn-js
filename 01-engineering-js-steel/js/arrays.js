// Ternary Operator = condition ? expIfTrue : expIfFalse
let status = 'online';
// True part first || otherwise false
let color = status === 'online' ? 'red' : 'blue';


// Array section with methods
/* Use these array = [cars , fruit ] */
const array1 = ['a', 'b', 'c', 'd'];
const array2 = ['e', 'f', 'g', 'h'];

let myString = 'Becoming a dangerous js engineer';

let shoppingList = ['ceral', 'cheese', 'ice'];
let topSong = ['Fist Time Ever I saw Your Face', 'God only knows', 'A day in the Life', 'Life on Mars'];
let newMusic = ['Theophilus Sunday', 'Hit man the jack', 'Amakye Dede song', 'Freedom by code'];
letters = [
    'T',
    'C',
    'E',
    'P',
    'S',
    'E',
    'R'
];

let animals = [
    'shark',
    'salmon',
    'whale',
    'bear',
    'lizard',
    'tortoise'
];


let ingredient = [
    'water',
    'corn starch',
    'flour',
    'cheese',
    'brown sugar',
    'shrimp',
    'eel',
    'butter'
];


// Indexing array how do we access them
shoppingList[1];
shoppingList[2];

let GetlastItem = shoppingList[shoppingList.length - 1];


// Modifying Array
shoppingList[0] = 'water';
shoppingList[2] = 'creams';


// Adding something to the end of the array
shoppingList.push('lastWater');
shoppingList.push('lastCheese');

// Removing something at the end of the array
shoppingList.pop();
shoppingList.pop([1]);
shoppingList.pop('water');
shoppingList.pop(shoppingList[shoppingList.length - 1]);


// Adding something to start of the array
shoppingList.unshift('friedFish', 'Gari');
shoppingList.unshift('pure water');

// Removing something from the start(1st Element ) of the array
shoppingList.shift([0]);
shoppingList.shift('water');
shoppingList.shift();

topSong.push("Hello it's me");
topSong.push("At the center of it all");


// Concat = Merger Array (Order matters )
const concatingArray1Array2 = array1.concat(array2);
const concatingArray2Array1 = array2.concat(array1);

// CharAt = Character At returns index of the character
const getCharAt = myString.charAt(2);


// fromCharCode(c1, c2,...)
console.log(String.fromCharCode(97, 98, 99, 120, 121, 122))
// output: abcxyz
console.log(String.fromCharCode(72, 69, 76, 76, 79))
// output: HELLO


// Incldues - Look  for a value(Boolean method - Exact Match)
shoppingList.includes('string');
ingredient.includes('water', 1);
// can pass in a starting index


// IndexOf = just like str.indexOf (indexOf the value eg. 1 , 2, 3, 4)
ingredient.indexOf('water');
ingredient.indexOf('flour');

// Reverse = reverse an array(Reverse in place hence changes original array)
ingredient.reverse();


/* join = create a string from arr (deal with seperators )
   when used on  a number converts them to string 
   Default join() seperator is (comma ) ,
*/
letters.join(" * ");



/* slice = copy portion of an arr 
   Take portion of an array and makes new array with it 
   Does not modify the original array
   can copy parts too
*/
let newtopSongsSlice = topSong.slice();



// splice = remove/replace elements in an array



// sort =


console.log(shoppingList)
