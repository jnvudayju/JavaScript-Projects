// Do NOT use forEach to complete this function.
// Iterates over a list of elements, yielding each in turn to the `cb` function.
// This only needs to work with arrays.
// You should also pass the index into `cb` as the second argument
function eachFor(arr, cb) {
  if (!Array.isArray(arr)) {
    return [];
  }

  for (let index = 0; index < arr.length; index++) {
    cb(arr[index], index);
  }
}

module.exports = eachFor;
