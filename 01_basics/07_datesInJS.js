/** @format */
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

let myDate = new Date();

console.log(myDate); //unreadble format

console.log(myDate.toString()); //slightly readable format

console.log(myDate.toDateString());

console.log(myDate.toLocaleDateString());

console.log(myDate.toISOString());

console.log(myDate.toJSON());

console.log(myDate.toLocaleString());

console.log(typeof myDate); // Type is Object because we created a new object

let myCreatedDate = new Date(2024, 11, 23);
console.log(myCreatedDate.toDateString());

console.log(myCreatedDate.toLocaleString());
