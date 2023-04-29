// //rest Parameter
// function add(x, y, ...z) {
//   console.log(z);
// }

// add(12, 4, 7, 8, 9);

// //default value
// function subtract(a, b = 6) {
//   return a - b;
// }
// console.log(subtract(12));

// let x = 12;
// let y = 3;
// function multiply(a, b) {
//   return a * b;
// }
// console.log(multiply(x, y));

// function divide(a, b) {
//   return a / b;
// }
// console.log(divide(x, y));

// function total(a, b, c) {
//   const result = a + b + c;
//   console.log(result);
//   return result;
// }
// total(1, 2, 3);

// function total(a, b) {
//   const result = a + b;
//   return result;
// }
// total(1, 2, 6);

// console.log(total(1, 2, 6));

function BMI(w, f, i) {
  let height = f * 12 + i;
  const bmi = (703 * w) / Math.pow(height, 2);
  let result;
  if (bmi < 18.5) {
    result = "under weight";
  } else if (bmi >= 18.5 && bmi < 25) {
    result = "Normal";
  } else if (bmi >= 25 && bmi < 30) {
    result = "overweight";
  } else {
    result = "obesity";
  }
  return result;
}

console.log(BMI(90, 5, 4));
