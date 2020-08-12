// For loops

console.log('=========For Loops =================');
for (let i = 1; i <= 10; i++) {
    console.log("Hello ", i);
}

for (let i = 1; i <= 20; i++) {
    console.log(i * i);
}

console.log('Decrementing loop');
for (let i = 200; i >= 0; i -= 25) {
    console.log(i);
}

console.log('Infinite Loop must be avioded');

// const animals = ['lions' ,'tiger', 'bears'];


const myStudent = [
    {
        firstName: 'Zeus',
        grade: 86
    }, {
        firstName: 'Artiemsu',
        grade: 97
    }, {
        firstName: 'Hera',
        grade: 72
    }, {
        firstName: 'Aposlls',
        grade: 45
    },
];

let sum = 0;
for (let i = 0; i < myStudent.length; i++) {
    console.log(myStudent[i].firstName);
    console.log(myStudent[i].grade);

    sum += myStudent[i].grade;
}

console.log(sum);

WeekDayName = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
];

const word = 'stressed';
let reversedWord = '';
for (i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
}
console.log(reversedWord);

const gameBoard = [
    [
        3, 32, 8, 4
    ],
    [
        64, 8, 32, 2
    ],
    [
        8, 32, 16, 4
    ],
    [
        2, 8, 4, 2
    ],
];

let total = 0;
for (let i = 0; i < gameBoard.length; i++) {
    let row = gameBoard[i];
    for (let j = 0; j < row.length; j++) {
        total += row[j];
    }
}
console.log(total);

// While Loops
// While condition is true run the code

let num = 0;
while (num < 10) {
    console.log(num);
    console.log(num++);
}

const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while (target !== guess) { // console.log(`Target : ${target} Guess " ${guess}`)
    guess = Math.floor(Math.random() * 10);
}

console.log(`Target : ${target} Guess " ${guess}`);
console.log(`Congratulation you won`);

// for of Loops

console.log('=========For of Loops ==================');
let subreddit = ['soccer', 'podheads', 'cringe', 'books'];

for (let sub of subreddit) {
    console.log(sub);
}

for (let char of 'Codeman') {
    console.log(char);
}

console.log('===========Comparing for and for of Loops ==========');
const magicSquare = [
    [
        2, 7, 6
    ],
    [
        9, 5, 1
    ],
    [
        4, 3, 8
    ],
];

// Version using a for loop...
for (let i = 0; i < magicSquare.length; i++) {
    let row = magicSquare[i];
    let sum = 0;
    for (let j = 0; j < row.length; j++) {
        sum += row[j];
    }
    console.log(`${row} summed to ${sum}`);
}

// Much cleaner version using a for...of
for (let row of magicSquare) {
    let sum = 0;
    for (let num of row) {
        sum += num;
    }
    console.log(`${row} summed to ${sum}`);
}

// EXAMPLE 2
// If you need the indices, use a traditional for loop!
const words1 = ['mail', 'milk', 'bath', 'black'];
const words2 = ['box', 'shake', 'tub', 'berry'];

for (let i = 0; i < words1.length; i++) { // Access index i of both arrays
    console.log(`${
        words1[i]
    }${
        words2[i]
    }`);
}

console.log('======Object.keys and Object.value  ====================');
// For of on Objects
const movieReviews = {
    Arrival: 9.5,
    Alien: 9,
    Amelie: 8,
    'In Bruges': 9,
    Amadeus: 10,
    'Kill  Bill': 8,
    'Little Miss Sunshine ': 8.5,
    Caroline: 7.5
};

for (let movie of Object.keys(movieReviews)) {
    console.log(movie, movieReviews[movie]);
}

const ratingAverage = Object.values(movieReviews);
let totalRate = 0;
for (let r of ratingAverage) {
    totalRate += r;
}

totalRate /= ratingAverage.length;
console.log(totalRate);

console.log('======For in Loop(Good for looping over Object)  ======');

const jeopardyWinnigs = {
    regularyPlay: 2522700,
    watsonChallenge: 3000000,
    tournamentOfChampions: 50000000,
    battleOfTheDecades: 10000000
}


for (let prop in jeopardyWinnigs) {
    console.log(prop);
    console.log(jeopardyWinnigs[prop]);
}


// total wining
let totalEarn = 0;
for (let prop in jeopardyWinnigs) {
    totalEarn += jeopardyWinnigs[prop];
}

console.log(`Ken Jennings Total Earing : ${totalEarn}`);

for (let k in[88, 99, 77, 66]) {
    console.log(k);
}
