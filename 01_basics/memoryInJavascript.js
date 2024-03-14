/** @format */

//  There are twoo types of memory in the Javascript
// Stack(Primitve) & Heap(Non-Primitve)

let myName = "Anmol Garampalli";

let anotherName = myName;
anotherName = "Amnol Garampalli";

console.log(myName);

console.log(anotherName);

// console.log(typeof anotherName);

//  In primitve datetype you will be given a copy of the orginal data and it will
//  changed if you redefine the value in the varibale.

let userOne = {
  email: "anmol@google.com",
  upi: "9108222564@jupiteraxis",
};

let userTwo = userOne;

console.log(userOne.email);

userOne.email = "anmol@google.com";
userTwo.email = "anmol@gmail.com";

console.log(userTwo.email);
