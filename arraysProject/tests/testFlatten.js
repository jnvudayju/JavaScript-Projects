const nestedArray = [1, [2], [[3]], [[[4]]]];
const myFunc = require("../flatten");
let result = myFunc(nestedArray,2);
console.log(result);