// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000.
// Using the array you just obtained from the previous problem,
// find out how many cars were made before the year 2000 and return the array of older cars
// and log its length.

function carOlders(data) {
  let result = [];
  for (let index = 0; index < data.length; index++) {
    if (data[index] < 2000) {
      result.push(data[index]);
    }
  }

  return result;
}

module.exports = carOlders;
