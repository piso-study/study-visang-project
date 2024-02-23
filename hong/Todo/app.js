const $root = document.getElementById('root');

const todoElements = {
	getNewTodoElements: (elementAttrs) => elementAttrs.map((attr) => Object.assign(document.createElement(attr.tag), attr)),

	addTodo: (todoStr, completed = false) => {
		const todoList = document.querySelector('#todoList');
		const newTodo = document.createElement('li');

		todoElements.getNewTodoElements([
			{ tag: 'input', type: 'text' , disabled: true, value: todoStr, className: completed ? 'checked': ''},
			{ tag: 'i', className: 'custom-checkbox bx bx-checkbox bx-sm' },
			{ tag: 'i', className: 'update-todo bx bx-pencil bx-sm' },
			{ tag: 'i', className: 'delete-todo bx bx-trash bx-sm' },
		]).forEach((element) => newTodo.appendChild(element));

		todoList.appendChild(newTodo);
	},

	toggles: (ele, arr) => arr.forEach((i) => ele.classList.toggle(i)),
};

const store = {
	saveTodoList: () => {
		const todos = [...document.querySelector('#todoList').querySelectorAll('li > input')].map((todo) => ({
			todo: todo.value,
			completed: todo.classList.contains('checked'),
		}));
		localStorage.setItem('myTodoList', JSON.stringify(todos));
	},

    loadTodoList: () => {
        const storedTodos = JSON.parse(localStorage.getItem('myTodoList'));
        storedTodos && storedTodos.forEach(({ todo, completed }) => todoElements.addTodo(todo, completed));
    },
};

$root.innerHTML = `
    <h1 id="todoTitle">My Todo List</h1>
    <form id="todoInput">
        <input type="text" name="todo" />
        <button type="submit">Save</button>
    </form>
    <ul id="todoList"></ul>
`;

$root.addEventListener('submit', (e) => {
	e.preventDefault();
	const inputValue = e.target.elements.todo.value.trim();
	inputValue === "" ? null : todoElements.addTodo(inputValue);
    e.target.elements.todo.value = "";
	store.saveTodoList();
});

$root.addEventListener('click', (e) => {
	const targetClassList = e.target.classList;

	if (targetClassList.contains('update-todo')) {
		const updatingTodo = e.target.previousElementSibling.previousElementSibling;
		updatingTodo.disabled = !updatingTodo.disabled;
		todoElements.toggles(e.target, ['bx-pencil', 'bx-check']);
	};

	if (targetClassList.contains('delete-todo')) {
		e.target.parentElement.remove();
	};

	if (targetClassList.contains('custom-checkbox')) {
		const checkBox = e.target;
		todoElements.toggles(checkBox, ['bx-checkbox', 'bx-checkbox-checked']);
		todoElements.toggles(checkBox.previousElementSibling, ['checked']);
	};

	store.saveTodoList();
});

window.addEventListener('DOMContentLoaded', store.loadTodoList);