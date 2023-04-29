function countDay() {
  const year = Number(prompt("Enter the year "));
  const month = Number(prompt("Enter the month "));
  let result;
  if (isNaN(month)) {
    result = "The value of the month must be number";
  } else {
    if (month < 1 || month > 12) {
      result = "The month is out of the range";
    } else {
      if (month == 2) {
        if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
          result = "This month has 29 days";
        } else {
          result = "This month has 28 days";
        }
      } else if (month == 4 || month == 6 || month == 9 || month == 11) {
        result = "This month has 30 days";
      } else {
        result = "This month has 31 days";
      }
    }
  }
  return result;
}
alert(countDay());
