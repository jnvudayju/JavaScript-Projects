const arr = [1, 2, 3, 4, 5];
const myFunc = require("../map");
const result = myFunc(arr, (values, index, arr) => {
  return values;
});

console.log(result);
