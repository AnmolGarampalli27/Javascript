/** @format */

// Global and Local scope in Javascript

// This is global scope
var c = 300;

let a = 500;
console.log("OUTER A:", a);

if (true) {
  // This is block scope
  let a = 10;
  console.log("INNER A: ", a);
  const b = 20;
  var c = 30;
}

// console.log(a); OP: ReferenceError: a is not defined
// console.log(b); OP: ReferenceError: b is not defined
console.log(c);

console.log("Scope Hierarchy in Javascript");

function one() {
  const username = "Anmol";

  function two() {
    const website = "YouTube";
    console.log(username);
  }
  //   console.log(website); //ReferenceError: website is not defined
  //   This is due to hierarchy of the scope which will not allow to access the elements present
  // within the function scope to be accessed outside the scope.
  two();
}

one();

if (true) {
  const username = "Anmol";
  if (username === "Anmol") {
    const website = "YouTube";
    console.log(username + "  " + website);
  }
  //   console.log(website); // ReferenceError: website is not defined, cannot access the element outside of its scope
}
// console.log(username); // ReferenceError: username is not defined, cannot access the element outside of its scope
