// Flattens a nested array (the nesting can be to any depth).
// Hint: You can solve this using recursion.
// Example: flatten([1, [[2]], [3, [[4]]]]); => [1, 2, 3, 4];

function flatten(elements, depth) {
    if(depth<=0){
        return elements;
    }

  if (depth > 0) {
    let flattenResult = [];
    if (!Array.isArray(elements)) {
      return;
    }

    for (let index = 0; index < elements.length; index++) {
      let newArray;

      if (Array.isArray(elements[index])) {
        newArray = elements[index];
        newArray = newArray[0];
        flattenResult.push(newArray);
      } else {
        flattenResult.push(elements[index]);
      }
    }
    
    return flatten(flattenResult, depth-1);
  }
  return elements;
}
module.exports = flatten;
