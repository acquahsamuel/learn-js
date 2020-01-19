// Master javascript and become a pro
/*
    querySelector
    querySelectorAll

    getElementById = no hash(#) symbol infornt 
    getElementsByClassName = no dot(.) symbol infornt 
    getElementByTagName   
    
    innerText == for actual text 
    innerHTML == for actual html element
    textContent



*/

// const li = document.querySelector('li');

// filter Method on Array
console.log(" Filter Array Method ");
const users = [{
        name: 'shaun',
        premium: true
    },
    {
        name: 'code',
        premium: false
    },
    {
        name: 'mario',
        premium: false
    },
    {
        name: 'chun-lo',
        premium: true
    }

];


const filterdScore = users.filter(user => {
    return user.premium;
});
console.log(filterdScore);


var numbers = [5, 32, 43, , 53, 4, 8, 10];
const odd = numbers.filter(num => {
    return num % 2 !== 0;
});
console.log(odd);


var people = [{
    id: 1,
    name: "John",
    age: 28
}, {
    id: 2,
    name: "Jane",
    age: 31
}, {
    id: 3,
    name: "Peter",
    age: 55
}];

const agePeople = people.filter(ages => {
    return ages.age < 35;
});
console.log(agePeople);



console.log(" Mapping Array Method ");
const prices = [20, 10, 30, 25, 15, 40, 80, 5];
const newMapping = prices.map((price) => {
    return price / 2;
});
console.log(newMapping);


const maps = ['one', 'two', 'three', 'four'].map(value => value.length);
console.log(maps);


console.log("Find  Array Method ");
const wins =  [10, 30 , 15, 25 , 20 , 50 , 40 , 5];
const findWins = wins.find((newWins) =>{
    return newWins > 20;
}); 

console.log(findWins);





// Reversing through an array
console.log("Reversed Loop ");
const myArray = [20, 10, 2, 57, 2, 16, 9, 12];
for (var i = myArray.length - 1; i > -1; i--) {
    console.log(myArray[i]);
}

console.log("For Loop");

const newArray = [16, 10, 2, 57, 2, 16, 9, 12];
for (var i = 0; i < newArray.length; i++) {
    console.log(newArray[i]);
}

// console.log("While Loop");
// const newWhile = [16, 10, 2, 57, 2, 16, 9, 12];



console.log("ForEach");
const forEachLooping = [16, 10, 2, 57, 2, 16, 9, 12];
forEachLooping.forEach(newForEach => {
    console.log(newForEach);
});


const formsTop = document.querySelector('form');
const feedback = document.querySelector('#feedback');
const userPattern = /^[a-zA-Z]{6,12}$/;

formsTop.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = formsTop.username.value;

    if (userPattern.test(username)) {
        let success = feedback.textContent = ' Correct username ';
    } else {
        let erro = feedback.textContent = 'Invalid combination for parameter ';
    }
});


formsTop.username.addEventListener('keyup', (e) => {
    if (userPattern.test(e.target.value)) {
        formsTop.username.setAttribute('class', 'success');
    } else {
        formsTop.username.setAttribute('class', 'error');
    }
}); 


const getTodos = function(callback){
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange' , () =>{
        if(request.readyState === 4 && request.readyState === 200){
            callback(undefined, request.responseText);    
        }else{
            callback(request.responseText, undefined);
        }
    });

    request.open('GET' , 'url here');
    request.send();
  
    
};


getTodos((err , data) => {
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});

