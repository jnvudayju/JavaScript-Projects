const myFunc = require("../limitFunctionCallCount");
const result = myFunc(() => {
  console.log("I am invoked");
}, 0);

console.log(result);
console.log(result());




