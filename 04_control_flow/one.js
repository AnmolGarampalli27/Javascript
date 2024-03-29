/** @format */

//if

const isUserloggedIn = true;
const temperature = 41;

if (temperature === 41) {
  console.log("Temperature is " + temperature + "C");
} else {
  console.log("Temperature is more than specified");
}

console.log("Executed");
// <, >, <=, >=, ==, !=, ===, !==

const score = 200;

if (score > 100) {
  let power = "fly";
  console.log("User Power:" + power);
}

// console.log(power);  //ReferenceError: power is not defined, power is present within the functional scope.

const balance = 1300;

if (balance > 500) console.log("greater than 500"), console.log("Test 2"); // This line defines implicit scope, also it is not a good practice to write this kind of code.

if (balance < 500) {
  console.log("less than 500");
} else if (balance < 750) {
  console.log("less than 750");
} else if (balance < 900) {
  console.log("less than 750");
} else if (balance < 1200) {
  console.log("less than 1200");
} else {
  console.log("less than 1500");
}

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard) {
  // && operator is used to check if both the condtions, the program control moves into the block of conditon
  console.log("Allow to buy courses");
}

if (loggedInFromGoogle || loggedInFromEmail) {
  // || is used to check if any one of the condition present within the statment is true,
  console.log("User logged in successfully");
}

//  Nullish Coalescing operator (??):null undefined

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? undefined;
val1 = undefined ?? 15;

console.log(val1);

// Ternary Operator
const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
