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
];

numsFor.forEach(function (n) {
    console.log(n);
});


const numbersMap = [
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27
];
const words = ['asap', 'byob', 'rsvp', 'diy'];

const newNumberMap = numbersMap.map(function (valu) {
    return valu * 2;
})
console.log(newNumberMap);

const randSplit = words.map(function (spli) {
    return spli.split('').join('-');
})

console.log(randSplit);


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
    }
]

const newBooks = books.map(function (singleBook, idx) {
    return singleBook.idx,
    singleBook.authors;
})
console.log(newBooks);


// Implicit function expression
const squaree = n => n * n;

const squarese = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    9
];
const doubleSquarese = squarese.map(n => {
    return n * 2;
})


const parityNumber = numbersMap.map((n) => n % 2 === 0 ? 'Even' : 'Odd');

// Find item if it's in the array (Only one item is return)(works with ID)
// Find works with King Kong

let movies = ['King Kong', 'Ghana Kyeiwaa', 'Mr.Miss Cook', 'Hi Fpand'];

const moviesListFind = movies.find(n => {
    return movies.includes('King Kong');
});


const bookRating = books.find(ratings => ratings.rating >= 4.3);

const neilBooks = books.find(neil => {
    return neil.authors.includes("Neil Gaiman");
})

// Filter Return true or false Does not update or remove (Boolean function)
const odds = squarese.filter(n => n % 2 === 1)
const even = squarese.filter(n => n % 2 === 0)
const bigNum = squarese.filter(n => n > 5);


const goodReadsSearch = books.filter(ratedAbove4 => ratedAbove4.rating >= 4.5);
const fantasyBooks = books.filter(fantasy => {
    return fantasy.genres.includes('fantasy');
})

const shortForm = books.filter(book => {
    return book.genres.includes('short stories') || book.genres.includes('essays')
});


// Searching items

const query = 'The Way of Kings';
const results = books.filter(book => {
    let title = book.title.toLowerCase();
    return title.includes(query.toLowerCase());
});


// Every return a boolean and everyone must be true
const wordsLetter = [
    'dog',
    'dig',
    'log',
    'bag',
    'wag'
];

const all3Letters = wordsLetter.every(letter => letter.length === 3);

const allEngInG = wordsLetter.every(letter => {
    const lastword = letter.length - 1;
    return letter[lastword] === 'g';
})


// Some (boolean method) at least one condition must be meet(return true or false)
const someStartWithD = wordsLetter.some(word => word[0] === 'd')

// Some (boolean method) all condition must be meet (returns true or false)
const ratingHigherThanThreePointFive = books.every(book => book.rating > 3.5);


const prices = [
    400.50,
    3000,
    99.99,
    35.99,
    12.00,
    9500
];

const badSort = prices.slice().sort();

const ascSort = prices.slice().sort((a, b) => {
    return a - b;
})

const desSort = prices.slice().sort((a, b) => {
    return b - a;
});

console.log(badSort, ascSort, desSort);

const sortingBooks = books.sort((a, b) => {
    return a.rating - b.rating;
})

console.log(sortingBooks);

// Reducing method == some values with a callback . it will sum all together in one
const numberRed = [
    2,
    3,
    4,
    5,
    6
];
const redRudceSum = numberRed.reduce((total, currentVa) => {
    return total + currentVa;
})

const redRudceDiv = numberRed.reduce((total, currentVa) => {
    return total / currentVa;
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
];
const maxiGrade = grades.reduce((max, currVal) => {
    if (currVal > max) 
        return currVal;
    
    return max;
})


// Using the default math.min && Math.max function with reduce
const maxGrade = grades.reduce((max, currVal) => {
    return Math.max(max, currVal);
})

const minGrade = grades.reduce((min, currVal) => {
    return Math.min(min, currVal);
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
];
const tallyVotes = votes.reduce((tally, val) => {
    if (tally[val]) {
        tally[val]++
    }else{
        tally[val] = 1;
    }
    return tally;
}, {})


