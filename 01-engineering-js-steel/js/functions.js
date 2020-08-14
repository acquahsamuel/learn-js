// Ternary Operator = condition ? expIfTrue : expIfFalse
let status = 'online';
                                    // True part first || otherwise false
let color  = status === 'online' ? 'red' : 'blue';


// Array section with methods
/* Use these array = [cars , fruit ] */

const array1 = ['a' , 'b' ,'c' ,'d'];
const array2 = ['e' ,'f' ,'g' , 'h'];


let shoppingList = ['ceral','cheese','ice'];
let topSong = [
    'Fist Time Ever I saw Your Face',
    'God only knows',
    'A day in the Life',
    'Life on Mars'
];

// Indexing array how do we access them 
shoppingList[1];
shoppingList[2];

let GetlastItem =  shoppingList[shoppingList.length -1];


// Modifying Array 
shoppingList[0] = 'water';
shoppingList[2] = 'creams';


//Adding something to the end of the array
shoppingList.push('lastWater');
shoppingList.push('lastCheese');

// Removing something at the end of the array
shoppingList.pop();
shoppingList.pop([1]);
shoppingList.pop('water');
shoppingList.pop(shoppingList[shoppingList.length -1 ]);


// Adding something to start of the array 
shoppingList.unshift('friedFish','Gari');
shoppingList.unshift('pure water');

// Removing something from the start(1st Element ) of the array
shoppingList.shift([0]);
shoppingList.shift('water');
shoppingList.shift();

topSong.push("Hello it's me");
topSong.push("At the center of it all");


// Concat = Merger Array 
const concatingArray1Array2 = array1.concat(array2);
const concatingArray2Array1 = array2.concat(array1);


// Incldues - Look  for a value(Boolean method)
shoppingList.includes('string');
shoppingList.includes('water' ,1);


// IndexOf = just like str.indexOf 

// join = create a string from arr


//Reverse = reverse an array 


//slice = copy portion of an arr


//splice = remove/replace elements in an array

// sort =





console.log(shoppingList)