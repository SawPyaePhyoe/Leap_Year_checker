// let height = 160;
// let ft = height / 30.48;
// let inch = (ft % 1) * 12;
// let result=`${Math.floor(ft)}ft ${Math.round(inch)}inch`;
// console.log(result);

let Cm = 123;
let feet = Math.floor(Cm / 30.48);//4

let inch = Math.round((Cm / 30.48 - feet) * 12);
console.log(feet, inch);
