const todoNameEl = document.getElementsByTagName("input")[0];
const dateEl = document.getElementsByTagName("input")[1];

const addBtnEl = document.getElementsByName("add-btn");

const todoContainer = document.querySelector(".todo-container");
const todoItem = document.querySelector(".todo-item");

let todos = JSON.parse(localStorage.getItem('todos')) || [];

const deleteTodo= (i)=>{
  todos.splice(i,1);
  console.log('todos',todos);
  localStorage.setItem('todos', JSON.stringify(todos));
  displayTodo();
}

const addTodo = () => {
	const todoName = todoNameEl.value;
	const todoDate = dateEl.value;
	let todo = { name: todoName, date: todoDate };
	todos.push(todo);
  todoNameEl.value = "";
	dateEl.value = "";
	console.log("todos", todos);
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

displayTodo();
