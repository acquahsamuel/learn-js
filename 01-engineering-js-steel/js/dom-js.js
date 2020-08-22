// Document Object model 
const h1 = document.createElement('h1');
h1.innerText = 'Hello word';
document.body.append(h1);

/* Generate a css Stylesheet
const createCSSSheet = new CSSStyleSheet();
createCSSSheet.replaceSync('* { transition : all 2s}');
*/

const getAllElement = document.body.children;
const createImage = document.createElement('img');

createImage.src = 'images/test.png';

const imageWidth = createImage.style.width = '60%';
const imageTransition = createImage.style.transition = 'all 3s';
document.body.append(createImage);

const getBrowserHight = document.body.clientHeight;
const getBrowserWidth = document.body.clientWidth;

setInterval(() =>{
    const x =   Math.floor(Math.random() * getBrowserWidth);
    const y =   Math.floor(Math.random() * getBrowserHight);
    // const rotation = Math.floor(Math.random() * 360); 
     el.style.transform = `translate(${x}px , ${y}px`;
   
}, 2000)


// Documents  

// Select a single tags {selectName}
const ul = document.querySelector('');

// Select multiple tags { .className or #idName }
const p = document.querySelectorAll('');


// select element by tagName (p || <h1> </h1>)
const ol = document.getElementsByTagName('');

// select elements { we don't need the . symbol }
const li = document.getElementsByClassName('');

// we don't need the # symbol
const lu = document.getElementById('');

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



// DOM Selection
const ulItem = document.querySelector('ul');
ulItem.parentElement.style.textAlign = 'center';


const button = document.querySelector('button');
button.classList.add('buttonStyle');


console.log(ulItem.children);
Array.from(ulItem.children).forEach(() =>{
    ulItem.classList.add();
});


// Event Handling 
// Event  + CallBack function
button.addEventListener('click' , () =>{
   console.log('Hello world ');
});


// Creating EventListener for the Children 
const item = document.querySelectorAll('li');
console.log(item);

item.forEach((singleItem) =>{
    singleItem.addEventListener('click' , (event) =>{
        // Using the event keyword + target keyword
        // console.log(event.target);

        // singleItem.style.display = 'none';      
        event.target.style.textDecoration = 'line-through';
    })
});



