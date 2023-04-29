// let num = 16;
// let array = [];
// for (let i = 1; i <= 16; i++) {
//   if (num % i == 0) {
//     array.push(i);
//   }
// }
// console.log(array.toString());

let num = 1;
let isPrime = true;
if (num < 2) {
  isPrime = false;
} else {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      isPrime = false;
      break;
    }
  }
}
if (isPrime) {
  console.log("This is a prime number");
} else {
  console.log("This is not a prime number");
}
