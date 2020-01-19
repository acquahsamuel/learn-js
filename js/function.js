// function in javascript 

function greet(){
    console.log("Hello world javascript "); 
}

greet();


//function expression 
const speak = function speaking(){
    console.log("Hello i am speaking to you");
};

speak();

//passing value through a function 
const passing = function speaking(name){
    console.log(`I am speaking to you ${name}`);
    console.log(name);
};

passing('KikoLo');

//function expression 
const greeter = function(){
    return 'hello world greeter';
}

/* Shortcut with arrow functino */
const greet1 = () => 'hello world == arrow function ';  
console.log(greeter());  
console.log(greet1());


const bill = (products, tax) =>{
    let total = 0;
    for(let i = 0 ; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;

};

console.log(bill([10,15,30], 0.2));

// MEthods and function 
let names = 'Alex';

console.log(names.toUpperCase());
console.log(names.toLowerCase());

//********* *// Callback functions 
let people = ['james' ,'Alex', 'Joe' , 'Same'];

// Using a regualar for loop
for(let i = 0 ; i < people.length; i++){
    console.log(people[i]);
}


// Using a callback
people.forEach(person => {
    console.log(person);
});


const cooking = ['oil' ,'fish' ,'Gari' , 'Kenkey'];
const logFood = (cooking , index) => {
    console.log(`Ingrdient : ${cooking}  ${index}`);
}

cooking.forEach(logFood);


//get reference to the 'ul'
const ul = document.querySelector('.people');
const classList = ['Eric' , 'James' , 'Cooking'];
let html = `` ;

classList.forEach((person) =>{
    html += `<li style="color : black">  ${person} </li>`;

});

console.log(html);
ul.innerHTML  = html;

// Javascript Objects 


var Person = {
    title : "His is title ",
    name : "Asjdd",
    content  : 'Hello world',
    age  : 40 
}

let user = {
    name : "James",
    age : 29,
    email : "insede@gmail.com",
    location : 'accra',
    blogs : ['Functional Expert , inside labs at expert i want to become '],
    
    login : function(){
        console.log("Logged into account");
    },
    blog(){
        this.blogs.forEach(blog =>{
            console.log(blog);
        })
    }
    
}



user.login();
user.blog();



