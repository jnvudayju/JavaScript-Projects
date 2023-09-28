// ==== Problem #6 ====
// A buyer is interested in seeing only BMW and Audi cars within the inventory.
// Execute a function and return an array that only contains BMW and Audi cars.
// Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.

function BMWAndAudi(data) {
  let result = [];

  for (let index = 0; index < data.length; index++) {
    if (data[index].car_make == "Audi" || data[index].car_make == "BMW") {
      result.push(data[index]);
    }
  }

  return result;
}

module.exports = BMWAndAudi;
