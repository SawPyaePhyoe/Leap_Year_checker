let x = 3;
let y = add(2, 3) * x;
console.log(y);
//function declaration
function add(a, b) {
  return a + b;
}

//function expression
const z = function (a, b) {
  return a + b;
};
console.log(z(1, 5));
console.log(typeof z);

//arrow function
const addition = (a, b) => a + b;
console.log(addition(2, 5));

const num = (a) => a;
console.log(num(7));
