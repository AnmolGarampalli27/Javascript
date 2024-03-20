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

// Combining Two Objects

const obj1 = {
  1: "a",
  2: "b",
};

const obj2 = {
  3: "c",
  4: "d",
};

const obj3 = { obj1, obj2 };
console.log(obj3); // O/P: { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
// It forms object within an object

const obj4 = Object.assign({}, obj1, obj2); // {} is an optional parameter but it makes sure that the output returned is a new object
console.log(obj4); // O/P: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// The Object.assign() static method copies all
//  enumerable own properties from one or more source objects to a target object. It returns the modified target object.

const obj5 = Object.assign({}, obj1, obj2, obj3);
console.log(obj5);

//  In case paranthesis is not used all the elements will be stored in intial array. In this case it will obj1.

const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
];

users[1].email;
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
  coursename: "JS in hindi",
  price: "999",
  courseInstructor: "Hitesh",
};

const { coursename, price, courseInstructor: instructor } = course;

// courseInstructor: instructor => This notation helps in renaming the varibales into simpler names for convinience

// The above statement helps in accessing the elements
// of the objects without having to use the dot notation.

console.log(coursename); // O/P: JS in hindi
console.log(instructor); //O/P: Hitesh

//  Intro to API & JSON

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[{}, {}, {}];

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON
