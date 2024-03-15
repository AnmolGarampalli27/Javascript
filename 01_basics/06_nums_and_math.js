/** @format */
const age = 25;

const newNumber = new Number(100);

console.log(typeof age);
console.log(typeof newNumber);

console.log(newNumber.toString());
console.log(
  newNumber.toFixed(4)
); /* This method is very commonly used in E-Commerce application to make calculations accurate to n digits */

// Precision Method

const someNumber = 100.4745;

console.log(someNumber.toPrecision(2));

// Understanding Locale String

const largeNumber = 100000000;

console.log(largeNumber.toLocaleString());

// ++++++++++++++++  Maths +++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); //converts negative only values to positve values

console.log(Math.round(6.6765));

console.log(Math.ceil(6.33)); //chooses top value after round off

console.log(Math.floor(6.53)); //chooses tthe low value after round off

console.log(Math.min(12, 23, 40, 10, 13));

console.log(Math.max(10, 24, 90, 345, 500));

console.log(Math.random());

console.log(Math.random() * 10 + 1);

const maxLimit = 20;
const minLimit = 10;

const genNum = Math.floor(Math.random() * (maxLimit - minLimit + 1) + minLimit);

console.log(genNum);

// Math.random method gives you value between 1 & 10

