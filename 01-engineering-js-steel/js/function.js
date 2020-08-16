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


/* using return along with function
   Return ends function execution where you calls it
*/
function multi(x , y){
    return x * y;
}

function returnStopIt(name , years){
    return  `${name} ${years} `;
    console.log('Hello world');
}

function containsPurple(arr){
  for(let singleArr of arr){
      if(singleArr === 'purple' || singleArr === 'magneta'){
          return true;
      }
  }
  return false;
}


// Challenges With function 
function isValidPassword(password , username){
   const passwordLength = password.length < 8;
   const passwrodNoSpace = password.indexOf(' ') !== -1
   const passwordCheck = password.indexOf(username) !== -1;

    if(passwordLength || passwrodNoSpace || passwordCheck)  return false;
    return true;

}

// function average 

function averageNums(arrVal){
    let total = 0;
    for(let iVal of arrVal){
        total += iVal;
    }

    let res = total / arrVal.length;
    return res;
}

