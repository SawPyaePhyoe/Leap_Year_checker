function Person(name, age, address) {
  this.firstName = name;
  this.age = age;
  this.address = address;
  
}
const person1 = new Person("July Kyaw", "17", "Myk");
const person2 = new Person("Aung Myat Thu", "24", "Myk");
console.log(person2);

class People {
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  fullname = function () {
    return this.name + this.age;
  };
}
const people_1 = new People("Thurein Zaw", "20", "MYk");
console.log(people_1.fullname());
console.log(people_1);
