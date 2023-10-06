const arr = [1, 2, 3, 4, 5];
const myFunc = require("../filter");
const result = myFunc(arr, (value, index, arr)=>{
    return value%2!=0;
})

console.log(result);
