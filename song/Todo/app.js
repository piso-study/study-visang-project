const $root = document.getElementById('root');

$root.innerHTML = `
<h1 id="TodoTitle">My Todo List</h1>
    <form id="TodoInput">
        <input type="text" name="todo" />
        <button type="submit">Save</button>
    </form>
<ul id="TodoList"></ul>
`;
