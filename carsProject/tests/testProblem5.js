const data = require("../message");
const yearFunc = require("../Problem4");
const yearArr = yearFunc(data);
const myFunc = require("../Problem5");
const result = myFunc(yearArr);
console.log(result, result.length);
