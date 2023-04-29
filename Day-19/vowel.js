let text = "I like apple.I like apple.I like apple.I like apple.";
let count = 0;
for (let i = 0; i < text.length; i++) {
  if (
    text[i].toLowerCase() == "a" ||
    text[i].toLowerCase() == "e" ||
    text[i].toLowerCase() == "i" ||
    text[i].toLowerCase() == "o" ||
    text[i].toLowerCase() == "u"
  ) {
    count++;
  }
}
console.log(count);

const vowel = ["a", "e", "i", "o", "u"];
const show_vowel = [];
for (let i = 0; i < text.length; i++) {
  if (vowel.includes(text[i].toLowerCase())) {
    show_vowel.push(text[i].toLowerCase());
  }
}

show_vowel.sort();
console.log(show_vowel.sort());

let array = [];
for (let a = 0; a < show_vowel.length; a++) {
  let count = 1;
  for (let k = a + 1; k < show_vowel.length; k++) {
    if (show_vowel[a] == show_vowel[k]) {
      count++;
    }
  }
  array.push(`${count}${show_vowel[a]}`);
  console.log(array);
  for (let i = 2; i < show_vowel.length; i++) {
    if (count == i) {
      console.log(show_vowel.splice(a, i - 1));

      break;
    }
  }
}
console.log(array.join(" "));
