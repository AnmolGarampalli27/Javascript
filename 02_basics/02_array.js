/** @format */

const marvelHeroes = ["Thor", "Ironman", "Spiderman"];
const dcHeroes = ["Superman", "Flash", "Batman"];

// marvelHeroes.push(dcHeroes);

console.log("Marvel Heroes are " + marvelHeroes);

var herosOfUniverse = marvelHeroes.concat(dcHeroes);

// console.log(marvelHeroes);

console.log("Combined heros of the Universe are " + herosOfUniverse);


const allNewHeros = [...dcHeroes, ...marvelHeroes];

console.log(allNewHeros);

const another_array =  [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat :Array flat method

console.log(real_another_array);

console.log(Array.from("Anmol Garampalli"))