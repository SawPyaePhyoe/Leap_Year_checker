// const text = "myname";

// const reversed_text = text.split("").reverse().join("");
// console.log(reversed_text);
// const text_array = text.split("");
// const reversed_uptext = text_array.reduce((prev, next) => next + prev);
// console.log(reversed_uptext);

// const array = [2, 5, 6, 9, 11, 34];
// const total = array.reduce((prev, next) => prev + next, 0);
// console.log(total);

// const items = [
//   { id: 1, item_name: "Shampoo", price: 5000 },
//   { id: 2, item_name: "Soap", price: 2000 },
//   { id: 3, item_name: "Facial cream", price: 7000 },
// ];
// const price = items.map((item) => item.price);
// console.log(price);
// const sum = price.reduce((prev, next) => prev + next, 0);
// console.log(sum);

// const text = "apple";
// const reversed_text = text.split("").reverse().join("");
// if (text === reversed_text) {
//   console.log("It is a palindrome");
// } else {
//   console.log("It is not a palindrome");
// }
// console.log(text.length);
// let isPalindrome = true;
// for (let i = 0; i < text.length; i++) {
//   if (text[i] != text[text.length - 1 - i]) {
//     isPalindrome = false;
//     break;
//   }
// }
// if (isPalindrome) {
//   console.log("It is a palindrome");
// } else {
//   console.log("It is not a palindrome");
// }
// let add_num = [];
// for (let i = 1; i <= 100; i++) {
//   let is_prime = true;
//   if (i < 2) {
//     is_prime = false;
//   } else {
//     for (let j = 2; j < i; j++) {
//       if (i % j == 0) {
//         is_prime = false;
//         break;
//       }
//     }
//   }
//   if (is_prime) {
//     add_num.push(i);
//   }
// }
// console.log(add_num);

let num = 3;
const matrix = new Array(num); //[[0 ,1 , 1] ,[ 1,0 , 1] ,[ 1, 1, 0] ]
for (let i = 0; i < num; i++) {
  matrix[i] = new Array(num);
  for (let j = 0; j < num; j++) {
    matrix[i][j] = 1;
    matrix[i][i] = 0;
  }
  console.log(matrix[i].toString());
}
console.log(matrix);

for (let k = 0; k < num; k++) {
  let row = matrix[k][0];
  for (let a = 1; a < num; a++) {
    row += "," + matrix[k][a];
  }
  console.log(row);
}
