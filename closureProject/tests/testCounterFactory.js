const myFunc = require("../counterFactory");

const result = myFunc();
console.log(result);
console.log(result.increment());
console.log(result.decrement());
