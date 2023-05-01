const frm = document.getElementById("frm");
const inp1 = document.getElementById("inp1");
const inp2 = document.getElementById("inp2");
const inp3 = document.getElementById("inp3");
const tbl = document.getElementById("tbl");
const WDB = [];

function getID() {
  return Math.round(Math.random() * 1000000);
}
const LS = () => localStorage.setItem("WDB_2", JSON.stringify(WDB));

const createRow = (data) => {
  const tr = document.createElement("tr");
  for (const item of Object.values(data)) {
    const td = document.createElement("td");
    td.innerText = item;
    tr.appendChild(td);
  }
  return tr;
};

frm.onsubmit = (e) => {
  console.log(e);
  e.preventDefault();
  const name = inp1.value;
  const age = inp2.value;
  const address = inp3.value;
  const id = getID();
  if (name && age && address) {
    const person = { id, name, age, address };
    WDB.push(person);
    const row_no = WDB.length;
    const show_Data = { row_no, name, age, address };
    const tr = createRow(show_Data);
    tbl.appendChild(tr);
    e.target.reset();
    inp1.focus();
    LS();
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const LS_data = JSON.parse(localStorage.getItem("WDB_2"));
  console.log(LS_data);
  LS_data.forEach((item, index) => {
    WDB.push(item);
    const person = {
      row_no: index + 1,
      name: item.name,
      age: item.age,
      address: item.address,
    };
    const tr = createRow(person);
    tbl.appendChild(tr);
  });
});
