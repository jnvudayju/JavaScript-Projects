function dataExtract(data, id) {
  for (let index = 0; index < data.length; index++) {
    if (index == id - 1) {
      return data[index];
    }
  }
}

// console.log(
//   `Car ${result.id} is a ${result.car_year} ${result.car_make} ${result.car_model}`
// );

module.exports = dataExtract;
