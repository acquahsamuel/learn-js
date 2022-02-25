/*
 Default function Params 
 (Order matters )
 Default parameters moves the end of it 

*/


function multiplyDefaultPara(a, b = 1) {
    return a * b;
}

multiplyDefaultPara(4);
multiplyDefaultPara(4, 5);


const greet = (person, greeting = 'Good Morning') => {
    console.log(`Hello ${person} ${greeting}`)
};

greet('Alex Code');


const gladH = (x, y = [1, 2, 3]) => {
    console.log(x, y);
}

gladH(5);


const feed = (person, greeting = 'Hi', punctuation = '!') => {
    console.log(`${greeting} , ${person} , ${punctuation}`)
}




/*
 Rest & Spread
 Really Useful
 
 Spread syntax allows an iterable such as  an arrau to be 
 expanded in places where zero or more arugment (for function calls) 
 or element are expected 

  for function calls 
  for object literals 
  for array literals 

*/

// Spreading on a function 
const numbersLine = [9, 3, 2, 3, 8];
Math.max(numbersLine);
Math.max(...numbersLine);


function giveMeFour(a, b, c, d) {
    console.log('a', a)
    console.log('b', b)
    console.log('c', c)
    console.log('d', d)
}


const colors1 = ['red', 'orange', 'yellow', 'green']
giveMeFour(...colors1);



// Spreading on Array literals
const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];

[...nums1, ...nums2];



const cephalopods = ['dumbo octopus', 'humboldt squid', 'flamboyant cuttlefish'];

const gastropods = ['giant african snail', 'banana slug', 'variable neon slug'];

const cnidaria = ['fire coral', 'moon jelly'];


const mollusca = [...cephalopods, ...gastropods]
//["dumbo octopus", "humboldt squid", "flamboyant cuttlefish", "giant african snail", "banana slug", "variable neon slug"]

const inverts = [...cnidaria, ...gastropods, ...cephalopods]
//["fire coral", "moon jelly", "giant african snail", "banana slug", "variable neon slug", "dumbo octopus", "humboldt squid", "flamboyant cuttlefish"]

const cephCopy = [...cephalopods];
//["dumbo octopus", "humboldt squid", "flamboyant cuttlefish"]



/* 
Spreading on an Object
Spread won't clone nested Objects 
*/

const feline = {
    legs: 4,
    family: 'Felidae'
}


const canie = {
    family: 'Caninae',
    furry: true
}

const dog = {
    ...canie,
    isPet: true,
    aboarable: true
}

const houseCat = {
    ...feline,
    isGrumpy: true,
    personality: 'isReallyNice',
}

/* Using the Rest Operator
    Rest is the upgrade for argument function accessible 
    with any function 


*/

/* Using Arguemtns 
   Arguemts does not work for arrow functions
*/
function sumWithArgs() {
    const argsArr = [...arguments];
    argsArr.reduce((total, currtVal) => {
        return total + currtVal;
    })
}

function fullNameArgu(first, last) {
    console.log(arguments);
    console.log(first);
}


// const multiply = () =>{
//     console.log(arguments)
// }

// Rest Params (Collects all remaining arguments into an actual array)
function sumWithRest(...nums) {
    return nums.reduce((total, currentVal) => {
        return total + currentVal;
    })
}

function fullNameWithRest(first, last, ...titles) {
    console.log(first);
    console.log(last);
    console.log(titles);
}


function add(...args) {
    let result = 0;

    for (let arg of args) result += arg;

    return result
}

add(1) // returns 1
add(1, 2) // returns 3
add(1, 2, 3, 4, 5) // returns 15

/*
    Destructiing 
    A short clean syntax to unpack 
    Destructing Arrays 
*/

const raceResult = [
    'Elui Kipchoge',
    'Feyisa Lelisa',
    'Galen Rupp',
    'Jared Ward',
    'Ghirmay Gheresmbnlassie'
]

const [gold, siler, bronze] = raceResult;

//Skipping index 
const [first, , , last] = raceResult;
const [winner, ...others] = raceResult;


/*
    Object Desturcting
*/
const runner = {
    firstWinner: 'Eluid',
    lastWinner: 'Kipchoge',
    country: 'Kenya',
    title: 'Elder of the Order of the Golden Heart of Kenya',
}


const {
    firstWinner,
    lastWinner,
    ...remaingObjects
} = runner
// const {firstWinner , lastWinner , country} = runner;
const {
    country: nation,
    title: honoric
} = runner;

/*
    Nesting Destructing 
*/

const resultsOfRunning = [{
        first: 'Eliud',
        last: 'Kipchoge',
        country: 'Kenya',
    },
    {
        first: 'Feyisa',
        last: 'Lilesa',
        country: 'Ethiopia',
    },
    {
        first: 'Galen',
        last: 'Rupp',
        country: 'United States ',
    },
]

const [, {
    country
}] = resultsOfRunning;

// Parameters Destructing 
const fullName = ({
    first,
    last
}) => {
    return `${first} ${last}`
}

const runnerAgain = {
    first: 'Eluis',
    last: 'Kipchoge',
    country: 'Kenya',
}

fullName(runnerAgain);

const response = [
    'HTTP/1.1',
    '200 OK',
    'application/json',
]

function parseResponse([protocol, statusCode, contentType]) {
    console.log(`Status : ${statusCode} protocol : ${protocol}`);
}