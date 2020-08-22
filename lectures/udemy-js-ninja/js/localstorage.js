// Setting items in localstorage
localStorage.setItem('name', 'Alex');
localStorage.setItem('age', 50);
localStorage.setItem('year', 1996);


// Retriving values in localStorage
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');


console.log(name);
console.log(age);


// Updating localStorage
localStorage.setItem('name', 'Akio');


let newName = localStorage.getItem('name');
console.log(newName);
localStorage.clear();


// Coverting Complex Array  

const todos = [

    {text : 'play mariokart ' , author : 'shawun'},
    {text : 'buy oil' , author : 'model'},
    {text : 'pray today ' , author : 'code'},
    {text : 'hacking' , author : 'Alex'}
]


console.log(JSON.stringify(todos));

localStorage.setItem('todos' , JSON.stringify(todos));
const stored = localStorage.getItem('todos');

console.log(JSON.parse(stored));
