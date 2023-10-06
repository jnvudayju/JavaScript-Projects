// Do NOT use .reduce to complete this function.
// How reduce works: A reduce function combines all elements into a single value going from left to right.
// Elements will be passed one by one into `cb` along with the `startingValue`.
// `startingValue` should be the first argument passed to `cb` and the array element should be the second argument.
// `startingValue` is the starting value.  If `startingValue` is undefined then make `elements[0]` the initial value.
function reduce(arr, cb) {
  let result = 0;
  if (!Array.isArray(arr)) {
    return [];
  } else {
    for (let index = 0; index < arr.length; index++) {
      result = cb(result, arr[index], index, arr);
      console.log(result + " " + arr[index]); //1 2 3 4 5
    }
  }

  return result;
}

module.exports = reduce;
