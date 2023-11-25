console.log("welcome to our todo app");
let todoDataList = document.getElementById("todo-data-list");
let saveButton = document.getElementById("save-todo");
let todoInputBar = document.getElementById("todo-input-bar");
let todos = [];
let getPendingTodosButton = document.getElementById( "get-todos"); 


getPendingTodosButton.addEventListener( "click", ( ) =>{
    todos = todos.filter((todo )=> todo.status != "Finished"  ) ;
    reRenderTodos( ) 
}) 

todoInputBar.addEventListener("keydown", function toggleSaveButton() {
    let todotext = todoInputBar.value;

    if (todotext.lenght == 0) {
        if (saveButton.classList.contains('disabled')) return;
        saveButton.classList.add('disabled');

    }

    else if (saveButton.classList.contains('disabled')) {
        saveButton.classList.remove('disabled');
    }
});

saveButton.addEventListener("click", function getTextAndAddTodo() {
    let todotext = todoInputBar.value;
    if (todotext.lenght == 0) return;
    let todo = { text: todotext, status: 'In progress', finishButtonText: 'Finished' }
    todos.push(todo);
    addTodo(todo, todos.length);
    todoInputBar.value = ''
});

function reRenderTodos() {
    todoDataList.innerHTML = "";
    todos.forEach((element, idx) => {
        addTodo(element, idx + 1);
    })
}

function removeTodo(event) {
    // console.log("clicked", event.target.parentElement.parentElement.parentElement);
    // event.target.parentElement.parentElement.parentElement.remove();
    let deleteButtonPressed = event.target;
    let indexTodoRemoved = Number(deleteButtonPressed.getAttribute('todo-idx'));
    todos.splice(indexTodoRemoved, 1);
    reRenderTodos();
}

function finishTodo(event) {
    let finishButtonPressed = event.target;
    let indexTodoFinished = Number(finishButtonPressed.getAttribute("todo-idx"));

    //toggle
    if (todos[indexTodoFinished].status == 'Finished') {
        todos[indexTodoFinished].status = 'In progress';
        todos[indexTodoFinished].finishButtonText = 'Finished'

    } else {
        todos[indexTodoFinished].status = "Finished";
        todos[indexTodoFinished].finishButtonText = "Undo";
    }

    todos.sort((a, b) => {
        if (a.status == 'Finished') {
            return 1;
        }
        return -1;
    })
    reRenderTodos();
}

function editTodo(event ){
let editButtonPressed =event.target;
let indexTodoEdit = Number(editButtonPressed.getAttribute('todo-idx'));
let detailDiv = document.querySelector(`div[todo-idx="${indexTodoEdit}"]` );
let input = document.querySelector(`input[todo-idx="${indexTodoEdit}"]` );
detailDiv.style.display ='none';
input.type='text';
input.value = detailDiv.textContent;

}

function saveEdittedTodo(event ){
    let input = event.target;

    let indexTodoEdit = Number(input.getAttribute('todo-idx'));
   let detailDiv = document.querySelector(`div[todo-idx="${indexTodoEdit}"]` );
if(event.keyCode ==13 ){
    detailDiv.textContent = input.value;
    detailDiv.style.display= "block";
    input.value = '';
    input.type = 'hidden';
} 
} 

function addTodo(todo, todoCount) {
    console.log("called successfully");
    let rowDiv = document.createElement("div");
    let todoItem = document.createElement("div");
    let todoNumber = document.createElement("div");
    let todoDetail = document.createElement("div");
    let todoStatus = document.createElement("div");
    let todoActions = document.createElement("div");
    let deleteButton = document.createElement("button");
    let finishedButton = document.createElement("button");
    let editButton = document.createElement("button");
    let hiddenInput = document.createElement("input");
    let hr = document.createElement("hr");

    //adding classes
    rowDiv.classList.add("row");
    todoItem.classList.add('todo-item', 'd-flex', 'flex-row', 'justify-content-between', 'align-items-center')
    todoNumber.classList.add("todo-no");
    todoDetail.classList.add("todo-detail", "text-muted");
    todoStatus.classList.add("todo-status", "text-muted");
    todoActions.classList.add("todo-action", "d-flex", "justify-content-start", "gap-2");
    deleteButton.classList.add('btn', 'btn-danger', 'delete-todo');
    finishedButton.classList.add('btn', 'btn-success', 'finish-todo');
    editButton.classList.add('btn', 'btn-warning', 'edit-todo');
    hiddenInput.classList.add('form-control',"todo-detail" );

//adding attribute
    finishedButton.setAttribute("todo-idx", todoCount - 1);
    deleteButton.onclick = removeTodo;
    editButton.setAttribute( "todo-idx", todoCount -1)
    todoDetail.setAttribute( "todo-idx", todoCount -1)
    hiddenInput.setAttribute( "todo-idx", todoCount -1)
    deleteButton.setAttribute("todo-idx", todoCount - 1);
    hiddenInput.addEventListener( "keypress", saveEdittedTodo) 
    finishedButton.onclick = finishTodo;
    editButton.onclick = editTodo;
    hiddenInput.type = 'hidden';

    todoNumber.textContent = `${todoCount}`;
    todoDetail.textContent = todo.text; //sets the todo text sent from the input element
    todoStatus.textContent = todo.status;
    deleteButton.textContent = "Delete";
    finishedButton.textContent = todo.finishButtonText;
    editButton.textContent = 'Edit';

    todoActions.appendChild(deleteButton);
    todoActions.appendChild(finishedButton);
    todoActions.appendChild(editButton);

    todoItem.appendChild(todoNumber);
    todoItem.appendChild(todoDetail);
    todoItem.appendChild(hiddenInput);
    todoItem.appendChild(todoStatus);
    todoItem.appendChild(todoActions);

    rowDiv.appendChild(todoItem);
    rowDiv.appendChild(hr);
    todoDataList.appendChild(rowDiv)
}





















//reference
// let getTodosButton = document.getElementById("get-todos");
// //registration of event listener
// let todoDetails = document.getElementsByClassName("todo-detail")
// todoDetails[1].addEventListener("click",()=>{
//     // console.log("clicked");
// } )
// getTodosButton.onclick=()=>{
//     console.log("clicked")
// }