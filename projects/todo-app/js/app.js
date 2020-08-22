const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const deleteTodo = document.querySelector('.delete');



const generateTemplate = (todo) => {
   const html =  `
      <li class="list-group-item d-flex justify-content-between align-items-center">
         <span> ${todo}  </span>
         <i class="ti ti-trash delete"></i>
      </li> `;
   
      list.innerHTML += html;

 };

addForm.addEventListener('submit' , (events) =>{
    events.preventDefault();
    
    const todo = addForm.add.value.trim();

    // This will return  a boolean
    if(todo.length){
        generateTemplate(todo);

        // Reset will clear the text fields 
        addForm.reset(); 
    }
});


// DELETE TODOS 
list.addEventListener('click' , (event) =>{

    if(event.target.classList.contains('delete')){
        event.target.parentElement.remove();
    }
});

// SEARCHING TODOS 
const search = document.querySelector('.search input');
const filteredTodos = (term) => {

     Array.from(list.children)
     .filter((todo) => !todo.textContent.toLowerCase().includes(term))
     .forEach((todo) => todo.classList.add('filtered'));

     Array.from(list.children)
     .filter((todo) => todo.textContent.toLowerCase().includes(term))
     .forEach((todo) => todo.classList.remove('filtered'));
     
};

search.addEventListener('keyup' , () =>{
    event.preventDefault();
    const term = search.value.trim().toLowerCase();
    filteredTodos(term);
});



