function getTodos() {
  const todos = JSON.parse(localStorage.getItem("todos")) || { todoList: [] };
  return todos;
}

function appendTodoInHtml(todoText) {
  const todoList = document.getElementById("todoList");
  const todo = document.createElement("li");
  todo.textContent = todoText;
  todoList.appendChild(todo);
}

function saveTodo(todoText) {
  const todos = getTodos();
  todos.todoList.push(todoText);
  localStorage.setItem("todos", JSON.stringify(todos));
}

document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todoInput");
  todoInput.addEventListener("change", (event) => {
    let todoText = event.target.value;
    event.target.value = todoText.trim();
  });

  const addTodoBtn = document.getElementById("addTodo");
  addTodoBtn.addEventListener("click", () => {
    const todoText = todoInput.value;

    if (todoText === "") {
      alert("Please write something for the todo.");
    } else {
      todoInput.value = "";
      appendTodoInHtml(todoText);
      saveTodo(todoText);
    }
  });

  const todos = getTodos();
  todos.todoList.forEach((todoText) => {
    appendTodoInHtml(todoText);
  });
});
