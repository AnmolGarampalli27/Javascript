/** @format */

//  (): paranthesis
//  []: brackets
// {} : braces

//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array :Array documentation

const myArr = [0, 1, 2, 3, 4, 5, 13, 14, 25, 233, 40];

console.log(typeof myArr);

const myHeroes = ["Shaktiman", "Naagraj"];

const myArr2 = new Array(1, 2, 3, 4, 5);

console.log(typeof myArr2);
console.log(myArr2);

console.log(myArr[8]); // Accessing elements in the array

// Array Methods

// Array Push Method

myArr.push(6);
console.log(myArr);

// Adding  another element

myArr.push(7);
console.log(myArr);

myArr.pop();
console.log(myArr);

myArr.unshift(10);
console.log(myArr);

myArr.shift();
console.log(myArr);

console.log(myArr.includes(9));

console.log(myArr.includes(0));

console.log(myArr.indexOf(4));

const newArray = myArr.join();
console.log(typeof newArray);

// Slice, Splice method

console.log("A", myArr);
const myNewArray = myArr.slice(1, 3);

console.log(myNewArray);
