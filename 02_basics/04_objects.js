/** @format */

const tinderUser = new Object();
tinderUser.id = "123abc";
tinderUser.name = "Michael";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);
// O/P: {} Empty Object

const tinderUser2 = {};
console.log(tinderUser2);
// O/P: Empty Object

const regularUser = {
  email: "name@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Anmol",
      lastname: "Garampalli",
    },
  },
};

console.log(regularUser.fullname.userfullname.firstname);
