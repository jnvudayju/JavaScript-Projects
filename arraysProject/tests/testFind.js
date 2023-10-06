const arr = [1, 2, 3, 4, 5];
const myFunc = require("../find");
const result = myFunc(arr, (value, index, arr) => {
  return value > 3;
});
console.log(result);
