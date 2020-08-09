// Default function parameter Values
/* 
 function must have default parameters passed through them 
 but if one of the parameters are omitted then we get undefined 
 so function with default parameter help solve this 


 Default function parameters (Other is key )
*/


function multiply(x , y = 1){
    return x * y;
}

const greet = (person, greeting = 'Good day') =>{
    return `Hi ${person} ${greeting} !`;
}


let str = "Please locate where 'locate' occurs!";
let pos = str.search("locate");

// Using the rest , spread and array destructing 

// Array destructing
const raceResult = [
    'Eliud Kipchoge',
    'Feyisa Lelisa',
    'Galen Rupp',
    'Ghirmay Ghebreslassie',
    'Alphonce Simbu',
    'Jared Ward'
];

const  [silver , gold , bronze ] = raceResult;
const  [firstv ,  , , fourth] = raceResult;
const  [firster, ...others] = raceResult;





