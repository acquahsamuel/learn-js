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
        rating: 4.25
    },
    {
        title: 'Bone: The Complete Edition',
        authors: ['Jeff Smith'],
        rating: 4.42
    },
    {
        title: 'American Gods',
        authors: ['Neil Gaiman'],
        rating: 4.11
    },
    {
        title: 'A Gentleman in Moscow',
        authors: ['Amor Towles'],
        rating: 4.36
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

const texts = ['ro fl', ' ' , 'lol','omg','ttyl'];
const caps = texts.map(t =>{
    return t.toUpperCase();
})

const splitText = texts.map(t =>{
    return t.indexOf(' ');
})

const checkNumberEven = number.map(n =>{
    return {
        value : n,
        isEven : n %2 === 0,
    }
})

const abrev = texts.map(t =>{
    return t.toUpperCase().split('').join('.');
})

const getOnlyBootTitle = books.map(titleBook =>{
    return titleBook.title;
})


/* Implict Arrow function 
    (Mean function does not have a return statement)
   
*/
const square = n => (n * n);
const doubles = number.map(n => n * 2);