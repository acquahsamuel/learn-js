// Function are key 

function definition(){
    console.log('Hello world');
    console.log('Hello Code');
    console.log('Hello Javascript');   
}

definition();



function rollDice(){
    const randomDice = Math.floor(Math.random() * 6) + 1; 
    console.log(randomDice);
}

rollDice();

// Calling function inside (functions , conditionals , objects)
function rollDie(){
    rollDice();
    rollDice();
    rollDice();
    rollDice();
}


function throwDice(rollTimes){
   for(let i = 0 ; i < rollTimes ; i++){
        rollDice();
   }
}

//Multiple parameter function (Other matters)
function sum(x , y){
    console.log(x + y);
}

function divide(a , b){
    console.log(a / b);
}


