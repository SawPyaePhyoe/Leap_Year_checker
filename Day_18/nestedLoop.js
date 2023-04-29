// const times = 12;

// for (let i = 1; i <= times; i++) {
//   let row = "";
//   for (let j = 1; j <= 12; j++) {
//     row += i * j + " "; //1 2 3
//   }
//   console.log(row);
// }

// const asterrisk = 8;
// for (let i = 1; i <= asterrisk; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += "*" + " ";
//   }
//   console.log(row);
// }

// const nested = 5;
// for (let i = 1; i <= nested; i++) {
//   let row = "";
//   for (let k = 1; k <= nested - i; k++) {
//     row += " ";
//   }
//   for (let j = 1; j <= i; j++) {
//     row += i + " ";
//   }
//   console.log(row);
// }

const seq = [
  [1, 2],
  [3, 4, 5],
  [1, 2, 4, 5],
];
let product = 1;

for (let i = 0; i < seq.length; i++) {
  console.log(seq[i]);
  for (let j = 0; j < seq[i].length; j++) {
    console.log(seq[i][j]);
    product *= seq[i][j];
  }
}
console.log(product);
