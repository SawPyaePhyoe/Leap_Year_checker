// const year = 2016;

// if (year % 4==0 && year % 100 !=0) {
//     console.log("leap year");
// }
// else if(year % 400 ==0){
//     console.log("leap year");
// }
// else{
//     console.log("common year");
// }

// if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//   console.log("leap year");
// } else {
//   console.log("common year");
// }

const date = new Date().getFullYear();
const month = 4;
// if (isNaN(month)) {
//   console.log("Invalid the value of month");
// } else {
//   if (month < 1 || month > 12) {
//     console.log("Out of range of month");
//   } else {
//     if (month == 2) {
//       if ((date % 4 == 0 && date % 100 != 0) || date % 400 == 0) {
//         console.log("This month has 29 days");
//       } else {
//         console.log("This month has 28 days");
//       }
//     } else if (month == 4 || month == 6 || month == 9 || month == 11) {
//       console.log("This month has 30 days");
//     } else {
//       console.log("This month has 31 days");
//     }
//   }
// }

if (isNaN(month)) {
  console.log("Invalid the value of month");
} else if (month < 1 || month > 12) {
  console.log("Out of range of month");
} else if (month == 2) {
  if ((date % 4 == 0 && date % 100 != 0) || date % 400 == 0) {
    console.log("This month has 29 days");
  } else {
    console.log("This month has 28 days");
  }
} else if (month == 4 || month == 6 || month == 9 || month == 11) {
  console.log("This month has 30 days");
} else {
  console.log("This month has 31 days");
}
