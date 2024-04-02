/** @format */
const coding = ["js", "ruby", "python", "cpp", "java"];

coding.forEach(function (val) {
  console.log(val);
});

// function printMe(item) {
//   console.log(item);
// }

// coding.forEach(printMe);

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});
