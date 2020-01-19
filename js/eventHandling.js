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



