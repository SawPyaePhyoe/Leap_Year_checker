let a = 1236;
let b = 23;
let c = 1234;
let d = 45;
let result;
if (a > b && a > c && a > d) {
  result = "a is the largest number";
} else if (b > c && b > d) {
  result = "b is the largest number";
} else if (c > d) {
  result = "c is the largest number";
} else {
  result = "d is the largest number";
}
console.log(result);

let m = 80;
let R;
if (m > 0 && m <= 39) {
  R = "You fail the exam";
} else if (m >= 40 && m < 80) {
  R = "You pass the exam";
} else if (m >= 80 && m <= 100) {
  R = "You got destination";
} else {
  R = "Invalid score";
}
console.log(R);
