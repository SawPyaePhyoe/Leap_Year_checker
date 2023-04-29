const text = "I like apple";
const vowel = ["a", "e", "i", "o", "u"];
const array = [];
let count = 0;
for (let i = 0; i < text.length; i++) {
  if (!array.includes(text[i].toLowerCase())) {
    if (vowel.includes(text[i].toLowerCase())) {
      array.push(text[i].toLowerCase());
      count++;
    }
  }
}
console.log(array);
console.log(count);
