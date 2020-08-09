let cars = ['Saab', 'Hammer', 'BMW', 'Bently'];
let fruit = ['Banana' ,'Orange' ,'Apple' ,'Mango'];
const points = [40, 100, 1 , 5 ,35 ,10];

let personObj = {
    name : 'Person',
    age : 30,
    profession : 'Student',
    location : 'Accra',
    Skill : 'Software Engineer'
}


/* Looping over Objects 
    Object.keys()
    Object.values() and 
    Object.entries()
*/

// for(const props in personObj){
//     console.log(`Obj.${props} = ${personObj[props]}`)
// }

for(let key in personObj){
    console.log(`${key} : ${personObj[key]}`);
}

let newCar = cars[0] = "Pertson";
let lastFruit = fruit[fruit.length -1 ];
console.log(lastFruit);


let fruitToString = fruit.toString();
let fruitPop = fruit.pop();
let fruitPush  = fruit.push('Last fruit');
let fruitJoin = fruit.join(" * ");


let shiftFruit = fruit.shift();
let unshitFruit = fruit.unshift('Pear');

console.log(unshitFruit);
console.log(fruitJoin);





