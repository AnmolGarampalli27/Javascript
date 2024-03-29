/** @format */

const userEmail = "";

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Email address not found");
}

//truthy values
// "0", 'false', " ", [], {}, function(){}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// https://developer.mozilla.org/en-US/docs/Glossary/Truthy

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is Empty");
}
