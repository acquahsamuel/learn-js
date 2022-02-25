// Deleting Element from the DOM with Events Listeners
const ul = document.querySelector('ul');
const items = document.querySelectorAll('li');
const button = document.querySelector('button');

button.classList.add('btn-style');
button.addEventListener('click' , () => {
    const li = document.createElement('li');
    li.textContent = 'New todo item ';
    ul.prepend(li);

    // ul.append(li);
    // ul.innerHTML += "<li> New to Todo </li>"

});

ul.addEventListener('click', e =>  {
    if(e.target.tagName === 'LI'){
        e.target.remove();
    }
});


// items.forEach(item =>{
//     item.addEventListener('click' , (event) =>{
//         event.target.remove();
//     });
// });




