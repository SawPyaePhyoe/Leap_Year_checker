// const n1=Number(prompt("Enter your first number"))
// const n2=Number(prompt("Enter your second number"))

// function multiply(num1, num2) {
//    return num1 * num2
// }
// multiply(n1, n2)

// alert(multiply(n1, n2))

function Bmi(w, f, i) {
  let result;
  const BMI = ((w * 703) / (f * 12 + i) ** 2).toFixed(2);
  if (BMI < 18.5) {
    result = "under weight";
  } else if (BMI >= 18.5 && BMI < 25) {
    result = "normal";
  } else if (BMI >= 25 && BMI < 30) {
    result = "overweight";
  } else {
    result = "obesity";
  }
  return result;
}
console.log(Bmi(90, 5, 3));
