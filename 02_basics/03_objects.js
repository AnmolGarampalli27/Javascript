// singleton
// Object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
    name: "Anmol ",
    "full name": "Anmol Garampalli",
[mySym]: "key1",
    age: 25,
    location: "Bidar",
    email: "anmol@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Wednesday"]  
};

console.log(JsUser.email);
console.log(JsUser["email"]);



console.log(typeof mySym);


