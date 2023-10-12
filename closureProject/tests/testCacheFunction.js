const myFunc = require("../cacheFunciton");
const result = myFunc();
console.log(result[0](2,3,5));
console.log(result[0](2,3,5));
console.log(result[0](2,3,5,2345));

console.log(result[1]);



