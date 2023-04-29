// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// let total = 0;
// for (let i = 1; i < 11; i++) {
//   total += i; // total=total+i
// }
// console.log(total);

let add = 0;
const num = [
  12, 445, 67, 89, 34, 56, 78, 11, 22, 34, 56, 78, 9, 3, 6, 8, 9, 11, 2, 3,
];
let largestNum = num[0];
console.log(num[0]);
for (let i = 0; i < num.length; i++) {
  add += num[i]; //add=add+num[i]
}
console.log(add);

for (let i = 1; i < num.length; i++) {
  if (largestNum < num[i]) {
    largestNum = num[i];
  }
}
console.log(largestNum);

let smallestNum = num[0];
for (let i = 1; i < num.length; i++) {
  if (smallestNum > num[i]) {
    smallestNum = num[i];
  }
}
console.log(smallestNum);
