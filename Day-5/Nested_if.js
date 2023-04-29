let num = "12sp";
if (isNaN(num)) {
  console.log(`${num} is not a number`);
} else {
  if (num % 1 != 0) {
    console.log(`${num} is a float number`);
  } else {
    if (num % 2 == 0) {
      console.log(`${num} is even integer`);
    } else {
      console.log(`${num} is odd integer`);
    }
  }
}
