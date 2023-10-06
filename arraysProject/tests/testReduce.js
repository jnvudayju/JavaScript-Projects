const arr = [1, 2, 3, 4, 5];
const myFunc = require("../reduce");
const result = myFunc(arr, (startingValue, currentValue, index, arr) => {
  return startingValue + currentValue;
});

console.log(result);
