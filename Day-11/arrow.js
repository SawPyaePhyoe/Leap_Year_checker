let person = ["spp", 28, "graduated", "989877665"];
person[0] = "AMT";

console.log(person);
person[person.length] = "Mdy";
console.log(person);

let x = new Array(7).fill(1);
console.log(x);
console.log(x.fill(2, 1));

console.log(typeof x);
