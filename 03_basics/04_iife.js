/** @format */

// Immeadtily Invoked Function Expression
// https://developer.mozilla.org/en-US/docs/Glossary/IIFE

// To avoid pollution from global scope, in order to remove pollution from global scope element we use IIFE

// Declaring an IIFE

// (function sample() {
//   //Declaring an IIFE
//   console.log("DB Connected");
// })();

(function chai() {
  // named IIFE
  console.log(`DB CONNECTED`);
})();

const sum = () => {
  // Combination of Arrow & IIFE function
  console.log("Arrow & IIFE combined");
};

// sample();
sum();
chai();
