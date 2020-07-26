const ul = document.querySelector('ul');
// ul.remove();

const button = document.querySelector('button');
button.addEventListener('click', () => {
    //ul.innerHTML += '<li> I am new todo element  </li>';
    const li = document.createElement('li');
    li.textContent = 'I am a new Todo ';

    // append add the item to the button
    //ul.append(li);

    // to add element to the top 
    ul.prepend(li);

});


ul.addEventListener('click' , e =>{
    //console.log(e.target);
    if(e.target.tagName === 'LI'){
        e.target.remove();
    }
})


// Event delegation
// Event propagation

//const items = document.querySelectorAll('li');
//items.forEach(item => {
//    item.addEventListener('click' , e =>{
//       e.target.style.textDecoration = 'line-through';
//        e.target.remove();
//    });
// });