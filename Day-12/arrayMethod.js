const fruit = ["mango", "apple", "jackfruit", "dragonFruit"];
const Pop = fruit.pop();
console.log(Pop);
console.log(fruit);
fruit.push("orange");

console.log(fruit);

console.log(typeof fruit);
const fruit_u = fruit.toString();
const fruit_j = fruit.join(" ");

console.log(typeof fruit_u);
console.log(typeof fruit_j);
console.log(fruit_u);
console.log(fruit_j);

console.log(fruit.join(", "));

const name = "saw pyae ";
const name_u = name.toUpperCase();
console.log(name_u);
console.log(name);

const Shift = fruit.shift();
console.log(Shift);
console.log(fruit);
fruit.unshift("banana");
console.log(fruit);
delete fruit[0];
console.log(fruit);
console.log(fruit[0]);

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);
console.log(myChildren);
console.log(typeof myChildren);
myGirls.splice(1, 0, "luvies", "Rosy");
console.log(myGirls);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const citrus = fruits.slice(1, 4);
fruits.splice(2, 1);
console.log(fruits);
console.log(citrus);
