// undefined and Null 
/* Null is an intentional abscence of a value = Must be assigned */
/* Undefined variable that do not have an assigned value are undefined */


/* Reference types vrs Primitive types 
    When we create a primitive variable we are creating value Type Variable
    That mean the actual value is store in memory 

    But with reference types variable (there is a pointer to the location a
    reference a memmory address )
*/

// For primitives Types 
let friut = 'orange';
let fruitcopy = friut;

console.log(friut);
console.log(fruitcopy);

let letsUpdateFruit = "watermelon";
let letsCheckFruitCopyValue = console.log(fruitcopy);


// For reference Types (when a data type value is modified it affects it too)
let numRef = [1,2,3,6,7,10,33,3];
let numRef2 = numRef;




console.log(Math.random(30));

const area = 7.7;
console.log(Math.round(area));

// Round it one
console.log(Math.floor(area));

// Round it up 
console.log(Math.ceil(area));

// Turncate - Cut it down
console.log(Math.trunc(area));


