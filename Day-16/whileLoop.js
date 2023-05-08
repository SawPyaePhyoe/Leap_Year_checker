let text;
let x = 1;
while (x <= 10) {
  text = `The number is ${x}`;
  console.log(text);
  x++;
}

let num = 3456;

let count = 0;
while (num != 0) {
  num = Math.floor(num / 10);
  count++;
}
console.log(count);

let N = 126;
let sum = 0;
while (N != 0) {
  sum += N % 10;
  N = Math.floor(N / 10);
}
console.log(sum);

let a = 6;
let is_prime = true;
let i = 2;
if (a < 2) {
  is_prime = false;
} else {
  while (i < a) {
    if (a % i == 0) {
      is_prime = false;
      break;
    }
    i++;
  }
  if (is_prime == true) {
    console.log("It is a prime number");
  } else {
    console.log("It is not a prime number");
  }
}

// let array = [];

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 != 0) {
//     console.log(array.push(i));
//   }
// }
// console.log(array.join(" "));
