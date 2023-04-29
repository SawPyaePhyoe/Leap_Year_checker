const count = 10;

for (let i = 1; i <= count; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*" + " ";
  }
  console.log(row);
}

const array = [
  [1, 2],
  [4, 5],
  [5, 3, 4],
];
let product = 1;
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    product *= array[i][j];
  }
}
console.log(product);

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= 10; j++) {
    row += i * j + " ";
  }
  console.log(row);
}

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let k = 1; k <= 5 - i; k++) {
    row += " ";
  }
  for (let j = 1; j <= i; j++) {
    row += i + " ";
  }
  console.log(row);
}

const Count = 5;
const matrix = new Array(Count);
for (let i = 0; i < Count; i++) {
  matrix[i] = new Array(Count);
  for (let j = 0; j < Count; j++) {
    matrix[i][j] = 0;
    matrix[i][i] = 1;
  }
}

for (let i = 0; i < Count; i++) {
  let row = matrix[i][0];
  for (let j = 1; j < Count; j++) {
    row += "," + matrix[i][j];
  }
  console.log(row);
}
