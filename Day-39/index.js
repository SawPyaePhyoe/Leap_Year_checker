const ul = document.querySelector("#ul");
const frm = document.querySelector("#frm");
const text = document.querySelector("#task");
const tasks = [];
const lS = () => localStorage.setItem("ul", JSON.stringify(tasks));
frm.addEventListener("submit", (e) => {
  console.log(e);
  e.preventDefault();
  const task = text.value;
  if (task) {
    tasks.push(task);
    console.log(tasks);
    const li = document.createElement("li");
    li.innerText = task;
    ul.appendChild(li);
  }
  lS();
  text.value = "";
});

document.addEventListener("DOMContentLoaded", () => {
  const LS_data = JSON.parse(localStorage.getItem("ul"));
  console.log(LS_data);
  LS_data.forEach((item) => {
    tasks.push(item);
    const li = document.createElement("li");
    li.innerText = item;
    ul.appendChild(li);
  });
});
