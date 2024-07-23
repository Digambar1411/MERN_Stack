const formEl = document.getElementById('todo-form');
const todoNameEl = document.getElementById('todo-name');
const dateEl = document.getElementById("due-date");
const addBtnEl = document.getElementsByName("add-btn");
const todoContainer = document.querySelector(".todo-container");
let todos = JSON.parse(localStorage.getItem('todos')) || [];

const deleteTodo= (i)=>{
  todos.splice(i,1);
  localStorage.setItem('todos', JSON.stringify(todos));
  displayTodo();
}

const addTodo = (e) => {
  e.preventDefault();
	const todoName = todoNameEl.value;
	const todoDate = dateEl.value;
	let todo = { name: todoName, date: todoDate };
	todos.push(todo);
  todoNameEl.value = "";
	dateEl.value = "";
  localStorage.setItem('todos', JSON.stringify(todos));
  displayTodo();
};


const displayTodo =() =>{
  let displayHtml = "";
  for(let i=0; i<todos.length; i++){
    const {name, date} = todos[i];
		displayHtml +=
				`<span>${name}</span>
				<span>${date}</span>
				<button onclick='deleteTodo(${i})' class='btn delete-btn'>delete</button>`
  }
  todoContainer.innerHTML=displayHtml;
}

formEl.addEventListener('submit',addTodo);

displayTodo();
