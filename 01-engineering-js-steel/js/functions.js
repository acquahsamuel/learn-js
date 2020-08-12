let highScoreGames = 1430;
let userScoreGames = 1500;

/*
if(userScore >= highScore){
    console.log(`Congrats you have a new high score ${userScore}`);
    highScore = userScore;
}else{
    console.log(`Good game . Your score of ${userScore} did not beat the high score of  ${highScore}`)
}

*/

/*
    Carrie telkinesis 
    Nesting 
*/

let password = 'cat dog';
if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log('Valid Password');
    } else {
        console.log('Password is long enough but cannot contain spaces !!');
    }
} else {
    console.log('Your password is short');
}

// Rewrite
let password1 = 'cat dog';
if (password1 >= 6) {
    if (password1.indexOf('') !== -1) {
        console.log('Password cannot include spaces');
    } else {
        console.log('Valid password !!');
    }
} else {
    console.log('Please password is short ');
}


/*
Switch Javascript Tenary operator 
*/

(5 > 4) ? console.log("True") : console.log("False");

let status = 'offline'
let color = status === 'offline' ? 'red' : 'green';
console.log(color);


const numbers = {
    100: 'one hundered',
    16: 'sixteen'
}

/* correct*/
numbers['700']

const palette = {
    red: '#eb4d4d',
    yellow: 'f9ca24',
    blue: '#30336b'
}

console.log(palette.blue)
console.log(palette['blue'])

// Updating Object
const userReview = {}

userReview.mrSmith = 3.5
userReview['colt'] = 4.5

userReview['colt'] += 3

const student = {
    firstName: 'David',
    lastName: 'Jones',
    strength: [
        'Music', 'Engineering'
    ],
    exams: {
        midterm: 92,
        final: 88
    }
}

console.log(student.strength[1])
console.log(student.firstName)
console.log(student.exams.midterm)

console.log(student['firstName'])
console.log(student.strength['0'])

let average = student.exams.midterm + student.exams.final
console.log(average / 2)

// Array with nested object
const shoppingCart = [
    {
        product: 'Jenga Classic',
        price: 6.88,
        quality: 1
    }, {
        product: 'Echo Dot',
        price: 29.99,
        quality: 3
    }, {
        product: 'Fire Stick',
        price: 39.99,
        quality: 2
    },
]

console.log(shoppingCart.length)
console.log(shoppingCart[0].price)
console.log(shoppingCart[1].product)

// Trick objects
let nums = [1, 2, 3]
let mystery = [1, 2, 3]
let moreNums = nums

// THey look the same but refer to different arrays in memory (different address)
nums === mystery
// false

// These tow arrays reference the exact same array , so we get true;
nums === moreNums

const users = {
    username: 'CherryGarcia88',
    email: 'garcia@gmail.com',
    notification: ['message', 'alert']
}

// Evaluate either ture or false
if (! users.notification.length) {
    console.log('No new notification')
} else {
    console.log('You have new message')
}


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

function scoper() {
    let name = "James";
    let age = 10;
    let color = "pink";

}
scoper();


// Always use let and const not var(again)
// Scoping for let
function doubleArray(arr) {
    const result = [];

    for (i = 0; i < arr.length; i ++) {
        let double = arr[i] * 2;
        result.push(double);
    }
    return result;
}


// Lexical Scoping

function outer() {
    let movie = 'Amadeus';

    function inner() {
        let movie = 'The shinning';
        console.log(movie.toUpperCase());
    }
    inner();
}

outer();


// function expression (annoymus function)
function add(x, y) {
    return x + y;
}

let sums = function (x, y) {
    return x + y;
}

const product = function multiply(x, y) {
    return x * y;
}


// function as objects
function add1(x, y) {
    return x + y;
}

function sub1(x, y) {
    return x - y;
}

function mult1(x, y) {
    return x * y;
}

function div1(x, y) {
    return x / y;
}

const operation = [add1, sub1, mult1, div1];

for (let fun of operation) {
    let result = fun(2, 3);
    console.log(result);
}

function rage() {
    console.log('I have eiids');
}

function cry() {
    console.log('Boo hoo coding for fun');
}


function repeatNTimes(action, num) {
    for (let i = 0; i < num; i++) {
        action();
    }
}

repeatNTimes(cry, 13);


// Callbacks
/*
 
forEach
map
filter
find 
reduce
some
every

*/

const numsFor = [
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
]

numsFor.forEach(function (n) {
    console.log(n)
})

const numbersMap = [
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27
]
const words = ['asap', 'byob', 'rsvp', 'diy']

const newNumberMap = numbersMap.map(function (valu) {
    return valu * 2
})
console.log(newNumberMap)

const randSplit = words.map(function (spli) {
    return spli.split('').join('-')
})

console.log(randSplit)

const numIsEven = numbersMap.map(function (n) {
    return {
        value: n,
        isEven: n % 2 === 0
    }
})

const books = [
    {
        title: 'Good Omens',
        authors: [
            'Terry Pratchett', 'Neil Gaiman'
        ],
        rating: 4.25,
        genres: ['fiction', 'fantasy']
    },
    {
        title: 'Changing My Mind',
        authors: ['Zadie Smith'],
        rating: 3.83,
        genres: ['nonfiction', 'essays']
    },
    {
        title: 'Bone: The Complete Edition',
        authors: ['Jeff Smith'],
        rating: 4.42,
        genres: ['fiction', 'graphic novel', 'fantasy']
    },
    {
        title: 'American Gods',
        authors: ['Neil Gaiman'],
        rating: 4.11,
        genres: ['fiction', 'fantasy']
    }, {
        title: 'A Gentleman in Moscow',
        authors: ['Amor Towles'],
        rating: 4.36,
        genres: ['fiction', 'historical fiction']
    }, {
        title: 'The Name of the Wind',
        authors: ['Patrick Rothfuss'],
        rating: 4.54,
        genres: ['fiction', 'fantasy']
    }, {
        title: 'The Overstory',
        authors: ['Richard Powers'],
        rating: 4.19,
        genres: ['fiction', 'short stories']
    }, {
        title: 'The Way of Kings',
        authors: ['Brandon Sanderson'],
        rating: 4.65,
        genres: ['fantasy', 'epic']
    }, {
        title: 'Lord of the flies',
        authors: ['William Golding'],
        rating: 3.67,
        genres: ['fiction']
    },
]

const newBooks = books.map(function (singleBook, idx) {
    return singleBook.idx,
    singleBook.authors
})
console.log(newBooks)

// Implicit function expression
const squaree = (n) => n * n

const squarese = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    9
]
const doubleSquarese = squarese.map((n) => {
    return n * 2
})

const parityNumber = numbersMap.map((n) => (n % 2 === 0 ? 'Even' : 'Odd'))


// Find item if it's in the array (Only one item is return)(works with ID)
// Find works with King Kong
let movies = ['King Kong', 'Ghana Kyeiwaa', 'Mr.Miss Cook', 'Hi Fpand']

const moviesListFind = movies.find((n) => {
    return movies.includes('King Kong')
})

const bookRating = books.find((ratings) => ratings.rating >= 4.3)

const neilBooks = books.find((neil) => {
    return neil.authors.includes('Neil Gaiman')
})

// Filter Return true or false Does not update or remove (Boolean function)
const odds = squarese.filter((n) => n % 2 === 1)
const even = squarese.filter((n) => n % 2 === 0)
const bigNum = squarese.filter((n) => n > 5)

const goodReadsSearch = books.filter((ratedAbove4) => ratedAbove4.rating >= 4.5)
const fantasyBooks = books.filter((fantasy) => {
    return fantasy.genres.includes('fantasy')
})

const shortForm = books.filter((book) => {
    return book.genres.includes('short stories') || book.genres.includes('essays')
})

// Searching items

const query = 'The Way of Kings'
const results = books.filter((book) => {
    let title = book.title.toLowerCase()
    return title.includes(query.toLowerCase())
})

// Every function return a boolean and everyone of the element must be true
const wordsLetter = [
    'dog',
    'dig',
    'log',
    'bag',
    'wag'
]

const all3Letters = wordsLetter.every((letter) => letter.length === 3)

const allEngInG = wordsLetter.every((letter) => {
    const lastword = letter.length - 1
    return letter[lastword] === 'g'
})

// Some (boolean method) at least one condition must be meet(return true or false)
const someStartWithD = wordsLetter.some((word) => word[0] === 'd')

// Some (boolean method) all condition must be meet (returns true or false)
const ratingHigherThanThreePointFive = books.every((book) => book.rating > 3.5)

const prices = [
    400.5,
    3000,
    99.99,
    35.99,
    12.0,
    9500
]

const badSort = prices.slice().sort()

const ascSort = prices.slice().sort((a, b) => {
    return a - b
})

const desSort = prices.slice().sort((a, b) => {
    return b - a
})

console.log(badSort, ascSort, desSort)

const sortingBooks = books.sort((a, b) => {
    return a.rating - b.rating
})

console.log(sortingBooks)

/* Reducing method == some values with a callback . it will sum all together in one
 */
const numberRed = [
    2,
    3,
    4,
    5,
    6
]
const redRudceSum = numberRed.reduce((total, currentVa) => {
    return total + currentVa
})

const redRudceDiv = numberRed.reduce((total, currentVa) => {
    return total / currentVa
})

// Using reduce method for returing the max and min val
const grades = [
    87,
    65,
    67,
    35,
    98,
    99,
    100,
    34
]
const maxiGrade = grades.reduce((max, currVal) => {
    if (currVal > max) 
        return currVal

    

    return max
})

// Using the default math.min && Math.max function with reduce
const maxGrade = grades.reduce((max, currVal) => {
    return Math.max(max, currVal)
})

const minGrade = grades.reduce((min, currVal) => {
    return Math.min(min, currVal)
})

// Inital Value Tally Results
const votes = [
    'y',
    'y',
    'y',
    'y',
    'y',
    'y',
    'n',
    'n',
    'n',
    'n'
]
const tallyVotes = votes.reduce((tally, val) => {
    if (tally[val]) {
        tally[val]++
    } else {
        tally[val] = 1
    }
    return tally
}, {})


// Randomly Select function
function pickOne(f1, f2) {
    let rand = Math.random();
    if (rand < 0.5) {
        f1();
    } else {
        f2();
    }
}

// function as return values
function multiplyer(num) {
    return function (x) {
        return x * num;
    }
}

const triple = multiplyer(3);

// shortcut for function

const auth = {
    username: 'ToomyBot',
    login() {
        console.log('Logged you in');
    }
}


// The THIS keyword
function greeter() {
    console.log('Hello');
    console.log(this);
}

// THIS inside an Object

const persona = {
    first: 'Cherilyn',
    last: 'Sarkisian',
    nickName: 'Cher',

    login() {
        console.log("Local champion");
        console.log(this);
    },
    fullName() {
        console.log(persona.first);
        console.log(this.first);
    }
}


// sg@6Fb7c06M // THis keyword

const humanBeing = {
    first: 'Cherily',
    last: 'Sarkisian',
    nickNmae: 'Cheerewaa',

    fullName() {
        const {first, last, nickName} = this;
        return `${first} ${last} AKA ${nickName}`
    },

    printBio() {
        console.log(this);
        const fullName = this.fullName();
        console.log(`${fullName} is a person !`);
    }
}

const printBio = humanBeing.printBio;
