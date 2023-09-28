// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website.
// Execute a function to Sort all the car model names into alphabetical order and
//  log the results in the console as it was returned.

// function sortDataAphabetically(data) {
//   data.sort((a, b) => {
//     return a.car_model < b.car_model ? -1 : a.car_model > b.car_model ? 1 : 0;
//   });
// }

function sortDataAphabetically(data) {
  if (
    !Array.isArray(data) ||
    data.length <= 0 ||
    lastCarData.arguments.length < 1
  ) {
    return [];
  }
  let sortedData = data.sort((first, second) => {
    let firstCar = first.car_model.toUpperCase();
    let secondCar = second.car_model.toUpperCase();
    // if(firstCar < secondCar) {
    //     return -1;
    // }
    //  if (firstCar > secondCar) {
    //     return 1;
    // }
    // return 0;

    return firstCar.localeCompare(secondCar);
  });
  return sortedData;
}

module.exports = sortDataAphabetically;
