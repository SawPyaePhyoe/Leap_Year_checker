const frm = document.querySelector("#frm");
const tsk = document.querySelector("#tsk");
const tasks = document.querySelector("#tasks");
let todos = [];

const getId = () => Math.round(Math.random() * 1000000);
const LS = () => localStorage.setItem("TODO", JSON.stringify(todos));

const displayTodo = (item) => {
  const task_el = document.createElement("div");
  task_el.classList.add("task");
  const content_el = document.createElement("div");
  content_el.classList.add("content");
  const input_el = document.createElement("input");
  input_el.type = "text";
  input_el.value = item.task;
  input_el.setAttribute("readonly", "readonly");
  input_el.classList.add("input_el");
  content_el.appendChild(input_el);
  task_el.appendChild(content_el);
  const action_el = document.createElement("div");
  action_el.classList.add("action");
  const edit_btn = document.createElement("button");
  edit_btn.innerText = "edit";
  edit_btn.classList.add("edit");
  action_el.appendChild(edit_btn);
  const delete_btn = document.createElement("button");
  delete_btn.innerText = "delete";
  delete_btn.classList.add("delete");
  action_el.appendChild(delete_btn);
  task_el.appendChild(action_el);
  tasks.appendChild(task_el);
  tsk.value = "";
  if (item.done) {
    input_el.classList.add("done");
  }

  input_el.onclick = () => {
    todos.forEach((todo) => {
      if (todo.id == item.id) {
        todo.done = !item.done;
      }
    });

    console.log(todos);
    if (item.done) {
      input_el.classList.add("done");
    } else {
      input_el.classList.remove("done");
    }
    LS();
  };

  edit_btn.onclick = () => {
    if (edit_btn.innerText === "EDIT") {
      edit_btn.innerText = "Save";
      input_el.removeAttribute("readonly");
      input_el.focus();
    } else {
      edit_btn.innerText = "EDIT";
      item.task = input_el.value;
      input_el.setAttribute("readonly", "readonly");
      LS();
    }
  };
  const deletehandler = () => {
    tasks.removeChild(task_el);
    const todo_up = todos.filter((todo) => todo.id != item.id);
    todos = [...todo_up];
    LS();
  };
  delete_btn.onclick = () => {
    const alert_box = confirm(
      `Are you sure you want to delete "${item.task}"?`
    );
    alert_box ? deletehandler() : null;
  };
};

frm.onsubmit = (e) => {
  e.preventDefault();
  const task = tsk.value;
  if (task) {
    const id = getId();
    const todo = { id, task, done: false };

    todos.push(todo);
    console.log(todos);
    tasks.innerHTML = "";
    todos.forEach((todo) => displayTodo(todo));
    LS();
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const LS_data = JSON.parse(localStorage.getItem("TODO"));
  LS_data.forEach((item) => {
    todos.push(item);
    displayTodo(item);
  });
});
