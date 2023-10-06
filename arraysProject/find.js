// Do NOT use .includes, to complete this function.
// Look through each value in `elements` and pass each element to `cb`.
// If `cb` returns `true` then return that element.
// Return `undefined` if no elements pass the truth test.
function find(arr, cb) {
  let result = 0;
  let element = 0;
  if (!Array.isArray(arr)) {
    return undefined;
  } else {
    for (let index = 0; index < arr.length; index++) {
      result = cb(arr[index], index, arr);
      if (result) {
        element = arr[index];
        break;
      }
    }
  }

  return result ? element : undefined;
}

module.exports = find;
