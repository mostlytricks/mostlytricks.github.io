const todoForm = document.querySelector(".todo-form");
const todoList = document.querySelector(".todo-list");
const todoInput = document.querySelector(".todo-form input");

let toDos = []; /* temp storage */

const TODOS_KEY = "todos";

const saveToDo = () => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
};

const deleteToDo = (e) => {
  const li = e.target.parentNode;
  toDos = toDos.filter((toDo) => {
    // 필터 사용 유의, type 유의할 것
    toDo.id !== parseInt(li.id);
  });
  li.remove();
  saveToDo();
};

const paintToDo = (newToDoObj) => {
  if (newToDoObj === "") {
    return -1;
  }
  const line = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  const div = document.createElement("div");
  line.id = newToDoObj.id;
  button.innerText = " x ";
  button.addEventListener("click", deleteToDo);
  span.innerText = `${newToDoObj.text}  `;

  line.appendChild(span);
  line.appendChild(div);
  line.appendChild(button);
  todoList.appendChild(line);
};

const toDoSubmit = (e) => {
  e.preventDefault();
  const newToDo = todoInput.value;
  todoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDo();
};

todoForm.addEventListener("submit", toDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedUsername === null) {
  todoForm.classList.add(HIDDEN_CLASS);
} else {
  todoForm.classList.remove(HIDDEN_CLASS);
}

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
