const todoList = [{
    name: 'peas',
    dueDate: '2022-12-22'
    }, 
    {
    name:'yummy', 
    dueDate: '2022-12-22'}];

renderTodoList();

function renderTodoList(){
    let todoListHTML = '';

    for(let i = 0; i < todoList.length; i++){
        const todoObject = todoList[i];
        //const name = todoObject.name;
        //const dueDate = todoObject.dueDate;
        const { name, dueDate} = todoObject; //deconstructing
        const html = `
            <div> ${name} </div>
            <div> ${dueDate} </div>
            <button onclick = "
                todoList.splice(${i}, 1);
                renderTodoList();
            " class = "delete-todo-button"> Delete </button>
            `;
        todoListHTML += html; //acumulator 
    }
    
    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;
}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    todoList.push({name, dueDate}); //shorthand

    inputElement.value = '';

    renderTodoList();
}