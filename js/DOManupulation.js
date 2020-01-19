// DOM SELECTION  = Video 46
// const  para = document.querySelector();


const idThing = document.querySelector('#cooking');
console.log(idThing);

const para = document.querySelectorAll('p');

para.forEach(paras =>{
  paras.innerText += 'new text appened';
});
// property name
// method  = ()
console.log(para.innerText);


const content = document.querySelector('.content');
content.innerHTML += '<h2> This is text 3 appended </h2>';
console.log(content.innerHTML);


// Document selection by querySelector
// This is a single collector
const el = document.querySelector('#page-title');
console.log(el);

// This select multiple selector
// They can be different diffent selectors
const ell = document.querySelectorAll('p');
console.log(ell);

// This select element with the name {we don't bring the # sign}
const byId = document.getElementById('page-title');

//THis select elements by thier class Name 
const byClassName = document.getElementsByClassName('error');

// This select element by thier Tag Name
const byTagName = document.getElementsByTagName('p');
console.log(byTagName);
console.log(byTagName[1]);

