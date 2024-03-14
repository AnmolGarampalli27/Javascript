/** @format */

const accountId = 910822;
let accountEmail = "anmolgarampalli@gmail.com";
var accountPassword = "12345";
accountCity = "Bidar";
let accountState;

// accountId = 2; not allowed

accountEmail = "anmolgarampalli2@gmail.com";
accountPassword = "112233";
accountCity = "Bengaluru";

// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);x
// console.log(accountCity);

/* Prefer not to use var
because of issue ib block scope & functional scope

*/
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
