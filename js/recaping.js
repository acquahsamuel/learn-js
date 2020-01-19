function greet() {
    console.log("Hello world");
}

const speak = function (name, age) {
    console.log(`Hi there ${name} , ${age}`);
}
speak("Alex", 30);



// Arrow function practise
// const cook = function(){
//     return 'hello , world ';
// }


const cook = () =>  'hell world' ;
const result = cook();
console.log(result);


const bill = (products, tax) => {
    let total = 0 ;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
};

console.log(bill([10,15,30], 0.2));


//functions
// methods
// methods are function which  are defined to datatypes


// Callback function
// We pass a function as an argumented to another function
const myFuc = (callBackFunc) => {
    //
    let value = 50;
    callBackFunc(value);
}


// Calling a callback function
myFuc(function(value){
    console.log(value);
});

// Other way 
myFuc(value =>{
    console.log(value);
});


let people  = ['mario', 'lugig' ,'thys' , 'shaun' ,'chun-li'];
people.forEach(person =>{
    console.log(person);
});

