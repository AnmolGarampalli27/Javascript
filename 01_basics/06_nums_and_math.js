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
