/** @format */

function printMyName() {
  console.log("A");
  console.log("N");
  console.log("M");
  console.log("O");
  console.log("L");
}

printMyName();

// Output:

/* 
A
N
M
O
L
*/

function addTwoNumbers(number_a, number_b) {
  //number_a,b are parameters
  console.log(number_a + number_b);

  return number_a + number_b;
}

addTwoNumbers(1, 2); //O/P:3 1,2 are arguments to the function

function loginUserMessage(username = "sam") {
  //default value is sam
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

console.log(loginUserMessage("Anmol Garampalli"));

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

console.log(calculateCartPrice(200, 400, 500, 2000)); //O/P: [ 500, 2000 ]

const user = {
  username: "Anmol",
  price: 199
}

function handleObject(anyobject){
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`); //O/P: 
  // Username is Anmol and price is 199
}

handleObject(user)

const newArray = [100,200,300,400];

function returnSecondValue(getArray){
  return getArray[2];

}

console.log(returnSecondValue(newArray)); 
