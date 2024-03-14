/** @format */

let score = "33abc";

console.log(typeof score);
console.log(typeof score);

let valueInNumber = Number(score);

console.log(typeof valueInNumber);
console.log(typeof valueInNumber);
console.log(valueInNumber);

//  33 => 33
//  33abc => Nan [Not a Number]
// true => 1, false => 0

let isLoggedIn = 1;
let value = Boolean(isLoggedIn);
console.log(value);

//  1 => true, 0 => false
// "" => false
// " " => true

let randomNumber = 33;
let stringValue = String(randomNumber);
console.log(typeof stringValue);

console.log("///// Operations ///// ");

let numValue = 25;
let negNumValue = -numValue;
console.log(negNumValue);

console.log(19 + 1 + "2");

// Type Conversion: https://tc39.es/ecma262/#sec-type-conversion
