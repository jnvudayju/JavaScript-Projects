const arr = [1, 2, 3, 4, 5];
const myFunc = require("../each");
myFunc(arr, (value, index) => {
  console.log(value + " " + index);
});


