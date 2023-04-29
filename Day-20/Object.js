const person = {
  first_name: "Saw",
  last_name: "PHyoe",
  age: 28,
  address: "MYK",
  fullName: function () {
    return this.first_name + this.last_name;
  },
};

person.ph = "0963528794";
console.log(person.age);
console.log(person.fullName());

for (const i of Object.keys(person)) {
  console.log(i);
}
console.log("==========");
for (const i of Object.values(person)) {
  console.log(i);
}
console.log("==========");

for (const [i] of Object.entries(person)) {
  console.log(i);
}
console.log("==========");
for (const [i, a] of Object.entries(person)) {
  console.log(a);
}
console.log("==========");
