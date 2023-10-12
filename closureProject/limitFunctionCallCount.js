// Should return a function that invokes `cb`.
// The returned function should only allow `cb` to be invoked `n` times.
// Returning null is acceptable if cb can't be returned
function limitFunctionCallCount(cb, n) {
  let counter = 0;

  if (arguments.length < 2) {
    return () => {
      console.log("Fucntion cant be called ");
      return null;
    };
  }

  if (typeof arguments[0] !== "function" || typeof arguments[1] !== "Number") {
    return () => {
      return null;
    };
  }

  return () => {
    if (counter++ < n) {
      cb();
    } else {
      return null;
    }
  };
}

module.exports = limitFunctionCallCount;
