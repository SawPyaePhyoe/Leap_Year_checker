let x = Number(prompt("Enter your num"));
let y = 12;
let result;
let result_update;
if (isNaN(x)) {
  alert(`${x} is not a number`);
} else {
  if (x % 1 != 0) {
    alert(`${x} is not an integer`);
  } else {
    switch (x % 4) {
      case 0:
        result = Number(prompt(`${x} + ${y}`));
        result_update = x + y;

        break;
      case 1:
        result = Number(prompt(`${x} - ${y}`));
        result_update = x - y;

        break;
      case 2:
        result = Number(prompt(`${x} * ${y}`));
        result_update = x * y;
        break;
      case 3:
        result = Number(prompt(`${x} / ${y}`)).toFixed(2);
        result_update = (x / y).toFixed(2);

        break;
    }
    if (result == result_update) {
      alert("Good job. You correct the answer.");
    } else {
      alert("There is something wrong in your calculation");
    }
  }
}
