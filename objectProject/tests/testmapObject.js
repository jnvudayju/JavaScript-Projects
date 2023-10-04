const data = require("../objects.cjs");
const myFunc = require("../mapObject");
const result = myFunc(data, (key, val) => {
  return val + 10;
});
console.log(result);

// const callback = (value) => {
//   return value + 2;
// };

// let arr  =[1,2,3,4,5,6,7];
// const result = arr.map(callback)
// console.log(result);
