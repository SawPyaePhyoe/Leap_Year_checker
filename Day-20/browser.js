let transfer_data = Number(
  prompt("1. Megabytes\n2. Gigabytes\n3. Terabytes\n4. Exit")
);
const k = 1024;
let user_input;
while (!transfer_data) {
  transfer_data = Number(
    prompt("1. Megabytes\n2. Gigabytes\n3. Terabytes\n4. Exit")
  );
}

switch (transfer_data) {
  case 1:
    user_input = Number(prompt("Enter the value of kilobytes"));
    const mega = user_input / 1024;
    alert(`${Math.round(mega)}MB`);

    break;
  case 2:
    user_input = Number(prompt("Enter the value of kilobytes"));
    const giga = user_input / (1024 * 1024);
    alert(`${Math.round(giga)}GB`);

    break;
  case 3:
    user_input = Number(prompt("Enter the value of kilobytes"));
    const tera = user_input / (1024 * 1024 * 1024);
    alert(`${Math.round(tera)}TB`);

    break;
  case 4:
    break;
  default:
    alert("Input the integer between 1 and 4");
}
