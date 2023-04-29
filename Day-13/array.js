// let x = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// console.log(x[2][0]);
// console.log(x);

// let y = new Array(3);
// y[0] = new Array(2).fill(0);
// y[0].fill(4, 1, 2);
// y[1] = new Array(2).fill(1);
// y[2] = new Array(2).fill(2);
// console.log(y);

let name = [
  "AMT",
  "July Kyaw",
  "Shine linn Htun",
  "Bhone Myat Zaw",
  "HZP",
  "TRMM",
  "TRZ",
];
// console.log(name);

// name.forEach((e, i) => {
//   console.log(i);
// });
// name.forEach((e, i) => {
//   console.log(e);
// });

let sum = 0;
const age = [20, 19, 16, 14, 12, 28];
age.forEach((e) => console.log(e + 1));
console.log(age);
console.log("==========");
age.map((e) => console.log(e + 1));
console.log(age);
console.log("==========");
age.forEach((e) => console.log((sum += e)));

const array_update = age.forEach((e) => e + 1);
console.log(array_update);

const array_update1 = age
  .map((e) => e + 1)
  .filter((e) => {
    return e % 2 == 0;
  });

console.log(array_update1);

const nameFilter = name.filter((e) => e == "AMT");
console.log(nameFilter);

let n = 6;
if (!(n % 2)) {
  console.log("even number");
} else {
  console.log("odd number");
}
