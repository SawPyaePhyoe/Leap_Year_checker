// const num = [12, 45, 34, 23, 67, 89, 13, 47, 67, 19];
// for (let i = 0; i < num.length; i++) {
//   if (num[i] % 2 != 0) {
//     num.splice(i, 1);
//     i--;
//   }
//   console.log(num);
// }
// console.log(num);

// const num1 = [12, 45, 34, 23, 67, 89, 13, 47, 67, 19];

// const del = 89;
// for (let i = 0; i < num1.length; i++) {
//   if (num1[i] == del) {
//     num1.splice(i, 1);
//   }
// }
// console.log(num1);

let a = 7;
let b = a;

// let result = 1;
// for (let i = a; i > 0; i--) {
//   result *= i;
// }
// console.log(result);

// for (let i = a - 1; i > 0; i--) {
//   a *= i; //30
// }
// console.log(a);

// for (let i = 1; i < b; i++) {
//   a *= i;
// }
// console.log(a);

if (a < 0) {
  console.log("Your number must be greater than 0");
} else {
  if (a == 1 || a == 0) {
    console.log("The factorial of this number is 1");
  } else {
    for (let i = 1; i < b; i++) {
      a *= i;
    }
    console.log(`The factorial of this number is ${a}`);
  }
}
