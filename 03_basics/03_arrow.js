/** @format */
const user = {
  username: "Anmol",
  price: 999,

  welcomeMessage: function () {
    console.log(this.username + " , Welcome to website");
    console.log(this);
    //  This keyword is used to refer to the current context, In the above method this is used to refer to the above username present within the function.
  },
};

// user.welcomeMessage();

// user.username = "Sam";

// user.welcomeMessage();

console.log(this);

// function chai() {
//   let username = "Anmol Garampalli";
//   console.log(this.username);
// }

// chai();

const chai = () => {
  // Arrow Function
  let username = "Anmol Garampalli";
  console.log(this.username);
};

chai();

const addTwoNumbers = (num1, num2) => {
  // Arrow function
  return num1 + num2;
};

const addTwo = (num3, num4) => num3 + num4; //Implicit Arrow Function
// In this type the compiler automatically understands that there is a single statement in the function and there is no need of return keyword

console.log(addTwoNumbers(5, 5));

console.log(addTwo(2, 3));

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
