/** @format */
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

let myDate = new Date();

console.log(myDate); //unreadble format

console.log(myDate.toString()); //slightly readable format

console.log(myDate.toDateString());

console.log(myDate.toLocaleDateString());

console.log(myDate.toISOString());

console.log(myDate.toJSON());
