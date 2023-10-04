const data = require("../objects.cjs");
const myFunc = require("../default");

const defaultProps = {
  Address: "Karnataka",
  City: "Bengaluru",
};

const result = myFunc(data, defaultProps);
console.log(result);
