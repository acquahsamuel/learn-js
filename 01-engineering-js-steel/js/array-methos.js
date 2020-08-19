// Super useful Array methods


/* ForEach function */
const number = [20, 21, 22, 23, 24, 25, 26, 27];

number.forEach(num => {
    console.log(num);
});


number.forEach(function (num) {
    console.log(num * 2);
})

function printTriple(n) {
    console.log(n * 3);
}

const tripple = number.forEach(printTriple);


const books = [{
        title: 'Good Omens',
        authors: ['Terry Pratchett', 'Neil Gaiman'],
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
    },
    {
        title: 'A Gentleman in Moscow',
        authors: ['Amor Towles'],
        rating: 4.36,
        genres: ['fiction', 'historical fiction']
    },
    {
        title: 'The Name of the Wind',
        authors: ['Patrick Rothfuss'],
        rating: 4.54,
        genres: ['fiction', 'fantasy']
    },
    {
        title: 'The Overstory',
        authors: ['Richard Powers'],
        rating: 4.19,
        genres: ['fiction', 'short stories']
    },
    {
        title: 'The Way of Kings',
        authors: ['Brandon Sanderson'],
        rating: 4.65,
        genres: ['fantasy', 'epic']
    },
    {
        title: 'Lord of the flies',
        authors: ['William Golding'],
        rating: 3.67,
        genres: ['fiction']
    }
]


const printTitle = books.forEach(title => {
    console.log(title.title, title.authors, title.rating);
})


/* Map  function 
   Creates a new array with the result of calling a callback
   on every element in the array

   Transform arrays , reverse , doubles 
   Does not chanage the array 
   NB = always return otherwise won't work 
   Really powerful with other methods = join, split 
*/

const texts = ['ro fl', ' ', 'lol', 'omg', 'ttyl'];
const caps = texts.map(t => {
    return t.toUpperCase();
})

const splitText = texts.map(t => {
    return t.indexOf(' ');
})

const checkNumberEven = number.map(n => {
    return {
        value: n,
        isEven: n % 2 === 0,
    }
})

const abrev = texts.map(t => {
    return t.toUpperCase().split('').join('.');
})

const getOnlyBootTitle = books.map(titleBook => {
    return titleBook.title;
})


/* Implict Arrow function 
    (Mean function does not have a return statement)
   
*/
const square = n => (n * n);
const doubles = number.map(n => n * 2);
const checkOddOrEven = number.map((n) => (n % 2 === 0) ? 'even' : 'odd');



/*
 FIND METHOD 
 return the value of the first element in the array 
 that satisfies the provided testing function
 If the function return a positive number

 Return only one element that mateches it 
 Relates well with ID's (Unique)

*/

let movies = [
    'The Fantastic Mr.Code',
    'Mr and Mrs Smith',
    'Mrs. DoubleFire',
    'Mr.Deeds',
]

const findMrInMovies = movies.find(name => {
    return name.includes('Mrs');
})

const goodBook = books.find(bo => {
    return bo.rating >= 4.3;
})

const neilBook = books.find(neilBooksOnly => {
    return neilBooksOnly.authors.includes('Neil Gaiman');
});

const moviesFat = movies.find(findDeed => {
    return findDeed.includes('Mr.Deeds');
})


/*
 FILTER 
  Create a new array with all elements that pass the test implemented
  by the provided function 

  Filters the answers back in an array
  Only those passed values will be returned 
  
*/

const numFilter = number.filter(n => {
    return n % 2 === 1;
})

// console.log(books);
const fantasyBooks = books.filter(book => {
    return book.genres.includes('fantasy');
})

const shortForm = books.filter(book => {
    return book.genres.includes('short stories') || book.genres.includes('essay');
});

const query = 'The';
const searchResult = books.filter(book => {
    const title = book.title.toLowerCase();
    return title.includes(query.toLowerCase());
});


/*
 Every and Some (Boolean Methods )
 Tests whether all elements in the array pass the 
 provided function. It returns a Boolean value.


 [for every] all the test condition must be true 
 Eg all words in the array [words ] are 3 

 [for some]  at least one must pass the conditions

*/

const words = ['dog', 'dig', 'log', 'bag', 'wag'];

const everyCheck = words.every(leter => leter.length === 3);
const checkEveryWord = words.every(word => word[0] === 'd');
const checkEveryLastWord = words.every(word => word[word.length - 1] === 'g');
const checkRating = books.every(book => book.rating >= 3.5);


const checkSomeStartWithD = words.some(word => word[0] === 'd');
const anyTwoArthors = books.some(book => book.authors.length === 2);
