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


// Object.freeze(JsUser); // this method helps in freezing the changes to the javascript object


JsUser.email="anmol@openai.com" // value will not be changed

// console.log(JsUser.email);

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log('Hello Js User,  $[this.name]');
}

console.log(JsUser.greeting);

console.log(JsUser.greetingTwo);
