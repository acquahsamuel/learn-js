// Methods with Arrays
const score = [10, 30 , 15, 25 , 20 , 50 , 40 , 5];

// Using the filter method prsents an updated version of an array listed based on a certain condition
// Looping throught an array = taking callback function
// The filter method is mostly used in testing condtions  
// Its is distructive = destory the original Array

const filteredScore = score.filter(scores =>{
        return scores == 20;
});
console.log(filteredScore);


const championLeague = [
  { name : "Messi" , goals : 29  },
  { name : "Ronaldo" , goals : 21  },
  { name : "Ronney" , goals : 19  },
  { name : "Xavi" , goals : 23  },
  { name : "John Boey" , goals : 50  }
]

const championLeagueUpate = championLeague.filter((championLeagueTable)  =>  {
    return championLeagueTable.goals > 50;
});
console.log(championLeagueUpate);


const users = [
    {name : 'James' , premunm : true},
    {name : 'Alexa' , premunm : true},
    {name : 'Colie' , premunm : false},
    {name : 'Promp' , premunm : true},
    {name : 'Callb' , premunm : false}
    
];

// using the filter Array Method
const updatedUsers = users.filter((user) => {
    return user.premunm / 2;
});
console.log(updatedUsers);



//Map Methods
// Takes an Array and map that to a completely new Array
// Push that updated array into a new Array (Callback)
// Its is no  distructive = does not destory the original Array

const prices = [10, 30 , 15, 25 , 20 , 50 , 40 , 5];
const mapPrcies = prices.map((price) =>{
        return price / 2;
});

console.log(mapPrcies);

// Challenge 

const products = [
    {name : 'gold star ' , price : 20},
    {name : 'mushroom ' , price : 40},
    {name : 'green shells ' , price : 30},
    {name : 'banana skin ' , price : 10},
    {name : 'red shells ' , price : 50},
];


// Iterating over them 
// Return Object for the array
const newproduct = products.map((product) => {
    if(product > 20){
        return {name : product.name, price : product.price / 2};
    }else{
        return product;
    }
});

console.log(newproduct);


// Reduce Methods 
// Return any Single Value in the Array == Based on the given Condtion 
// Return a number { counting the values }
// Kind of counting single value in items
// Methods with Arrays
const gamesScores = [10, 30 , 15, 25 , 20 , 50 , 40 , 5];
let total = 0;

const newGameScore = gamesScores.reduce((acc, value) => {
   if(value > 10){
       acc++;
     }
     return acc;
} , 0);
console.log(newGameScore);


const bids = [
    {player : 'mario' , score : 50},
    {player : 'yoshi' , score : 30},
    {player : 'mario' , score : 70},
    {player : 'mario' , score : 70},
    {player : 'mario' , score : 70},
    {player : 'crystal' , score : 60},

];

// Using the reduce method
const newBid = bids.reduce((acc, current) => {
    if(current.player === 'mario'){
        acc += current.score;
    }
    return acc;

}, 0);

console.log(newBid);


// Find methods
// Return the first value in an item when it passes a certain test
const wins =  [10, 30 , 15, 25 , 20 , 50 , 40 , 5];
const findWins = wins.find((newWins) =>{
    return newWins > 20;
}); 

console.log(findWins);

//Sorting Method 
// Sorting takes a function and 
// Compare function (a , b) 
// 2 argument(concecutive values 1st and 2nd || 2nd or 3rd) 
// 
var points = [ -1 , 40,  0, 100, 1, 5, 25, 10];
let pointere =  points.sort((a, b) => {return a-b});
console.log(pointere);


// Methods Chaining
const produce = [
    {name : 'gold star ' , price : 20},
    {name : 'mushroom ' , price : 40},
    {name : 'green shells ' , price : 30},
    {name : 'banana skin ' , price : 10},
    {name : 'red shells ' , price : 50},
];


const chainss = produce.filter((filteredProduce) => {
    return  filteredProduce.price > 20;
});

const sorts = chainss.map((filteredMaped) => {
    return {name : filteredMaped.name, price: filteredMaped.price / 2};
});

console.log(chainss);
console.log(sorts);

// .map((chain) => {
//     return {name : }
// })



// Concating  Arrays 
var hege = ["Cecilie" , "Lone"];
var stale = ["Emil", "Tobias" , "Linus"];
var children  = hege.concat(stale);


console.log(children.length);
console.log(children.includes("Lone"));

console.log(children.push("Alex"));
console.log(children.shift());

console.log(children.push("Code"));
console.log(children);


