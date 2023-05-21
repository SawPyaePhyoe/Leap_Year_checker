const header = document.querySelector("#nav_bar");
const burger = document.querySelector("#hamburger");
const ul = document.querySelector("#nav_ul");
const items = document.querySelectorAll("#nav_ul li a");
console.log(items);

burger.onclick = function () {
  burger.classList.toggle("active");
  ul.classList.toggle("active");
};
items.forEach((item) => {
  item.onclick = function () {
    burger.classList.toggle("active");
    ul.classList.toggle("active");
  };
});

document.onscroll = function () {
  if (window.scrollY > 100) {
    header.style.backgroundColor = "#2f2f41";
  } else {
    header.style.backgroundColor = "rgba(50, 46, 46, 0.317)";
  }
};
