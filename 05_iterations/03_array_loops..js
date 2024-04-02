/** @format */

//  for of loop
const arr = [1, 2, 3, 4, 5, 6];

for (const i of arr) {
  console.log(i);
}
/* O/P:
1
2
3
4
5
6*/

const alphabets = ["A", "B", "C", "D", "E"];

console.log();

for (const iterator of alphabets) {
  console.log(iterator);
}

const greetings = "Hello Anmol Garampalli";

for (const greet of greetings) {
  console.log(`Each character is: ${greet}`);
}

//  Map

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");
// Map does not print duplicate values

console.log(map);

/*
Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
}*/

for (const [key, value] of map) {
  console.log(key, ":-", value);
}

/* O/P:
IN :- India
USA :- United States of America
Fr :- France
*/

const programming = ["js", "rb", "python", "java", "cpp"];

for (const language in programming) {
  console.log(language); //OP: 0 1 2 3 4
  console.log(programming[language]);
}
