const icon = document.getElementById("icon");
console.log(icon);
const clip = document.getElementById("clip");
console.log(icon);
const res_sec = document.getElementById("result_section");
const res1 = document.getElementById("calc_1");
const res2 = document.getElementById("calc_2");
icon.onclick = function () {
  clip.classList.toggle("block");
};
const form = document.getElementById("frm");
const text = document.getElementById("chk_yr");
const error_msg = document.getElementById("error-msg");
console.log(text);

text.onkeypress = function () {
  text.classList.remove("error_box");
  error_msg.classList.remove("block");
  res_sec.classList.remove("block");
};

form.onsubmit = function (e) {
  console.log(e);
  e.preventDefault();
  const year = text.value;
  if (!year) {
    text.classList.add("error_box");
    error_msg.classList.add("block");
  } else if (year < 1582) {
    res_sec.classList.add("block");
    res1.innerText = "Calculator error";
    res2.innerHTML =
      "<b>The year has to be greater than 1582, the first year the Gregorean calendar was employed.</b>";
  } else if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    res_sec.classList.add("block");
    res1.innerText = `Is ${year} a leap year?`;
    res2.innerHTML = "<b>Yes</b>";
  } else {
    res_sec.classList.add("block");
    res1.innerText = `Is ${year} a leap year?`;
    res2.innerHTML = "<b>No</b>";
  }
  e.target.reset();
  text.focus();
};
