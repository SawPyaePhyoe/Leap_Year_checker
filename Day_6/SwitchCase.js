const day = new Date().getDay();


let result;
console.log(typeof day);

switch (day) {
  case 0:
    result = "Sunday";
    break;
  case 1:
    result = "Monday";
    break;
  case 2:
    result = "Tuesday";
    break;
  case 3:
    result = "Wednesday";
    break;
  case 4:
    result = "Thursday";
    break;
  case 5:
    result = "Friday";
    break;
  default:
    result = "Saturday";
    break;
}
console.log(result);
