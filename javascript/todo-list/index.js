const checkboxes = document.querySelectorAll(".checkbox");

const todoInput = document.querySelector(".todo-input");
const addButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

const all = document.querySelector("#all");
const completed = document.querySelector("#completed");
const remaining = document.querySelector("#remaining");

let todos = [];

addButton.addEventListener("click", () => {
  const text = todoInput.value;
  if (!text) {
    return;
  }

  const todo = { id: todos.length + 1, title: text, completed: false };

  todos.push(todo);

  const todoNode = createTodo(todo);

  todoList.append(todoNode);

  clearInput();
});

function clearInput() {
  todoInput.value = "";
}

function createTodo({ id, title, completed }) {
  const li = document.createElement("li");
  li.setAttribute("class", "todo-item");

  const input = document.createElement("input");

  input.setAttribute("type", "checkbox");
  input.setAttribute("class", "checkbox");
  input.setAttribute("id", id);

  input.checked = completed;

  addEvent(input, id);

  const label = document.createElement("label");
  label.setAttribute("for", id);
  label.setAttribute("class", "todo-label");
  label.innerText = title;

  li.append(input);
  li.append(label);

  return li;
}

function getFilteredTask(filter) {
  if (typeof filter !== "boolean") {
    return todos;
  }

  const filterTask = todos.filter((todo) => todo.completed === filter);

  return filterTask;
}

function displayTasks(filter) {
  const filteredTasks = getFilteredTask(filter);

  const taskNodes = filteredTasks.map((task) => createTodo(task));

  todoList.replaceChildren(...taskNodes);
}

completed.addEventListener("click", () => {
  all.setAttribute("class", "list-item");
  remaining.setAttribute("class", "list-item");

  completed.setAttribute("class", "list-item list-item--active");

  displayTasks(true);
});

remaining.addEventListener("click", () => {
  all.setAttribute("class", "list-item");
  completed.setAttribute("class", "list-item");

  remaining.setAttribute("class", "list-item list-item--active");

  displayTasks(false);
});

all.addEventListener("click", () => {
  completed.setAttribute("class", "list-item");
  remaining.setAttribute("class", "list-item");

  all.setAttribute("class", "list-item list-item--active");

  displayTasks();
});

function addEvent(inputNode) {
  inputNode.addEventListener("change", (e) => {
    const id = Number(e.target.id);

    todos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: inputNode.checked };
      }

      return todo;
    });
  });
}

displayTasks();
