let weight = Number(prompt("Enter your weight in lbs"));
let ft = Number(prompt("Enter your height in ft"));
let inch = Number(prompt("Enter your height in inch"));
let height = ft * 12 + inch;
const BMI = ((weight * 703) / Math.pow(height, 2)).toFixed(1); //Math.pow(height,2)=height**2
let result;
if (BMI < 16) {
  result = `Your Body Mass Index is ${BMI}. This is considered severely underweight`;
} else if (BMI >= 16.0 && BMI <= 18.4) {
  result = `Your Body Mass Index is ${BMI}. This is considered  underweight`;
} else if (BMI >= 18.5 && BMI <= 24.9) {
  result = `Your Body Mass Index is ${BMI}. This is considered normal`;
} else if (BMI >= 25 && BMI <= 29.9) {
  result = `Your Body Mass Index is ${BMI}. This is considered overweight`;
} else if (BMI >= 30 && BMI <= 34.9) {
  result = `Your Body Mass Index is ${BMI}. This is considered moderately obese`;
} else if (BMI >= 35.0 && BMI <= 39.9) {
  result = `Your Body Mass Index is ${BMI}. This is severely obese`;
} else {
  result = `Your Body Mass Index is ${BMI}. This is morbidly obese`;
}
alert(result);
