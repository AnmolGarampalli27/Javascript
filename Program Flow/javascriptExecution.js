/** @format */

function one() {
  console.log("one");
  two();
}
function two() {
  console.log("two");
  three();
}
function three() {
  console.log("three");
}
one();
two();
three();

// In Javascript pushing memory blocks from Global Execution context happens in LIFO: Last In First Out format
