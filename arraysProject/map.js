// Do NOT use .map, to complete this function.
// How map works: Map calls a provided callback function once for each element in an array, in order, and functionructs a new array from the res .
// Produces a new array of values by mapping each value in list through a transformation function (iteratee).
// Return the new array.
function map(arr, cb) {
  let result = [];
  if (!Array.isArray(arr)) {
    return [];
  } else {
    for (let index = 0; index < arr.length; index++) {
      result.push(cb(arr[index]));
    }
  }

  return result;
}

module.exports = map;
