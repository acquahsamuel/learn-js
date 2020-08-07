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

// Slicing extracts a part of a string and returns the extracted part in a new string

let lstVa = str[str.length -1];


let newStrr = str.slice(7);
console.log(newStrr);



var txt = "";
var numbersSt = [45, 4, 9, 16, 25];
numbersSt.forEach(myFunction);

function myFunction(value, index, array) {
    txt = txt + value + "<br>";
}
