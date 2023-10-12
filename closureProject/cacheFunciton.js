// Should return a function that invokes `cb`.
// A cache (object) should be kept in closure scope.
// The cache should keep track of all arguments have been used to invoke this function.
// If the returned function is invoked with arguments that it has already seen
// then it should return the cached result and not invoke `cb` again.
// `cb` should only ever be invoked once for a given set of arguments.

function cacheFunction() {
  let cache = {};

  return [(...arguments) => {
    let key = "";
    for(let index = 0; index < arguments.length; index++) {
        key += arguments[index]+" ";
    }
    if(cache[key]){
        console.log("I am coming from cache memory");
        return cache[key];
    }
    else {
        const cb = (...arguments) =>{
            console.log("Callback has been invoked");
            return[...arguments];
        };
        cache[key] = cb(...arguments);
        return cache[key];
        
    }
  },cache]
}

module.exports = cacheFunction;
