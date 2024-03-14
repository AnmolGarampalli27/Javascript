/** @format */

// Based on storing and accessing of data they are categoised into two types
// Primaitve Data Type
// They are 7 in number & they are called by value

// 7 : String, Number, Boolean, null, undefined, Symbol, BigInt

// Non Primitve Data Type / Reference data type

// Array, Objects, Functions

const isLoggedIn = true;
console.log(typeof isLoggedIn);

const id = Symbol("123");
const id2 = Symbol("123");

console.log(id === id2);

console.log(typeof id);

const bigNumber = 9108222564n;

console.log(typeof bigNumber);

const heroes = ["Shaktiman", "Nagraj", "doga"];
console.log(typeof heroes);
let myObj = {
  name: "Anmol",
  age: "25",
};

const myFunction = function () {
  console.log("Hello World");
};

// https://262.ecma-international.org/5.1/#sec-11.4.3
