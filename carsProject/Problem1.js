function dataExtract(data, id) {
  if (
    !Array.isArray(data) ||
    data.length <= 0 ||
    typeof(id) == 'undefined' ||
    typeof (id) != 'number' ||
    dataExtract.arguments.length < 1
  ) {
    return [];
  } else {
    for (let index = 0; index < data.length; index++) {
      if (index === id - 1) {
        return data[index];
      }
    }
  }
}

// console.log(
//   `Car ${result.id} is a ${result.car_year} ${result.car_make} ${result.car_model}`
// );

module.exports = dataExtract;
