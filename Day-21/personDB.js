class Person {
  constructor(name, age, address, ph_no, academic_year, email) {
    this.Name = name;
    this.age = age;
    this.address = address;
    this.PhNo = ph_no;
    this.academic_year = academic_year;
    this.email = email;
  }
}

let person1 = new Person(
  "Shine Lin Htun",
  "23",
  "MYK",
  "09653215467",
  "Graduated",
  "shinelin966@gmail.com"
);
let person4 = new Person(
  "Bhone Myat Zaw",
  "16",
  "MYK",
  "09653215470",
  "High Diploma",
  "BhoneMyat966@gmail.com"
);
let person2 = new Person(
  "Thu Rein Myo Min",
  "19",
  "MYK",
  "09653215468",
  "High Diploma",
  "thurein966@gmail.com"
);
let person3 = new Person(
  "Thu Rein Zaw",
  "19",
  "YGN",
  "09653215469",
  "High Diploma",
  "zawzaw967@gmail.com"
);
const PersonDB = [person1, person2, person3, person4];
// const SearchbyCity = (city) => {
//   const search_by_city = PersonDB.filter((person) => {
//     console.log(person);
//     return person.address == city.toUpperCase();
//   });
//   console.log(search_by_city);
//   let result = "";
//   search_by_city.map((c, index) => {
//     console.log(index);
//     result +=
//       index +
//       1 +
//       ". " +
//       c.Name +
//       " " +
//       c.age +
//       " " +
//       c.address +
//       " " +
//       c.PhNo +
//       " " +
//       c.academic_year +
//       " " +
//       c.email +
//       "\n";
//   });
//   console.log(result);
// };
// SearchbyCity("myk");

// const SearchbyName = (name) => {
//   const search_by_name = PersonDB.filter((person) => {
//     console.log(person);
//     return person.Name == name;
//   });
//   console.log(search_by_name);
//   let result = "";
//   search_by_name.map((c, index) => {
//     result +=
//       index +
//       1 +
//       ". " +
//       c.Name +
//       " " +
//       c.age +
//       " " +
//       c.address +
//       " " +
//       c.PhNo +
//       " " +
//       c.academic_year +
//       " " +
//       c.email +
//       "\n";
//   });
//   console.log(result);
// };
// SearchbyName("Thu Rein Myo Min");

const SortofName = () => {
  PersonDB.sort((a, b) => {
    if (a.Name > b.Name) {
      return 1;
    } else if (a.Name < b.Name) {
      return -1;
    }
    return 0;
  });
  return PersonDB;
};

console.log(SortofName());

const Sortofage = () => {
  PersonDB.sort((a, b) => {
    if (a.age > b.age) {
      return 1;
    } else if (a.age < b.age) {
      return -1;
    }
    return 0;
  });
  return PersonDB;
};

console.log(Sortofage());
