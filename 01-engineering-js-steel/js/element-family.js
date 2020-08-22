const firstLI = document.querySelector('li');
const allLis = document.querySelectorAll('li');
const ul = document.querySelector('ul');

const todo = document.querySelector('#todos .todo');

/* for(let i = 0; i < allLis.length; i++){
    allLis[i].innerText = 'Welcome on baord';
 }

 for(let li of allLis){
     li.innerText = 'Welcome on bard'
 }

 */


// Really important = Changing Styles 
/* for the styles to appear Unless those styles are inline  */
ul.style.color = 'orchid';
ul.style.fontSize = '20px';

const p = document.querySelector('p');
p.style.color = 'black';
p.style.fontFamily = 'Tahoma';

/*
 Get Computed Style
 getComputedStyle 
 to see the current affected CSS element on the page

 */

const stlyes = getComputedStyle(firstLI);
//console.log(stlyes);


/*

 setAttribute is not suitable for CSS styling it 
 overwrites the entire css class 

  But rather use the Classlist 
  eg. todo.classList.add 
      todo.classList.remove
      todo.classList.toogle 

      Toggle = if it is there remove it 
             = if it is not there add it
    
*/

// todo.style.color = 'red';
// todo.style.textDecoration = 'line-through';
// todo.style.opacity = 40 ;

// Using setAttribute to change color 
todo.setAttribute('class' ,'done')

// Using classList to change CSS values 
todo.classList.add('done');

todo.classList.contains('donee'); // false 
todo.classList.toggle('done');

//without classList 
todo.setAttribute('class' , todo.getAttribute('class') + 'done');

