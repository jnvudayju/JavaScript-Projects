// ==== Problem #4 ====
// The accounting team needs all the years from every car on the lot.
// Execute a function that will return an array from the dealer data
// containing only the car years and log the result in the console as it was returned.

function carYearData(data) {
  let result = [];
  for (let index = 0; index < data.length; index++) {
    let d = data[index].car_year;
    result.push(d);
  }

  return result;
  // for custom sorting
  //   return result.sort((a, b) => {
  //     return b - a;
  //   });
}

module.exports = carYearData;
