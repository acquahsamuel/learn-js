const addTodoForm = document.querySelector('.form-add')
const ul = document.querySelector('.add-ul')

const templateAdd = todo => {
  const html = `
    <li class="list-group-item list-border"> ${todo}
    <span class="">
        <div class="custom-control custom-checkbox checkbox-right">
            <input type="checkbox" class="custom-control-input" id="customControlInline">
            <label class="custom-control-label" for="customControlInline"></label>
        </div>
    </span>
    </li>
    `
  ul.innerHTML += html
}

addTodoForm.addEventListener('submit', e => {
  e.preventDefault()

  const todo = addTodoForm.addTodo.value.trim()
  if (todo.length) {
    templateAdd(todo)
    addTodoForm.reset()
  }

  // Set Localstorage
  const todoItems = [
    {
      todos: todo,
    },
  ]

  localStorage.setItem('todos', JSON.stringify(todoItems))
  const allTodos = localStorage.getItem('todos')
  console.log(JSON.parse(allTodos))
})
