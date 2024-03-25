/** @format */
const user = {
  username: "Anmol",
  price: 999,

  welcomeMessage: function () {
    console.log("${this.username}, Welcome to website");
    //  This keyword is used to refer to the current context, In the above method this is used to refer to the above username present within the function.
  },
};
