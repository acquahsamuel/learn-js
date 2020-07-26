const button = document.querySelector('button');

button.addEventListener('click' , ()=> {
    console.log("You clicked me")
});

const items = document.querySelectorAll('li');
items.forEach(item => {
    item.addEventListener('click', e =>{
        e.target.style.textDecoration = 'line-through';
        // item.classList.add('item-1');
        // item.classList.add('hide-me');
        // console.log('You have clicked me');
 
        //  You can set event listener this way
        // item.style.textDecoration = 'line-through';
        
    });
});