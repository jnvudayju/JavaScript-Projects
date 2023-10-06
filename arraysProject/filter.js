// Do NOT use .filter, to complete this function.
// Similar to `find` but you will return an array of all elements that passed the truth test
// Return an empty array if no elements pass the truth test
function filter (arr, cb) {
    let result = [];
    if(!Array.isArray(arr)){
        return [];
    }
    else{
        for(let index=0; index<arr.length; index++){
            let temp = cb(arr[index], index, arr);
            if(temp){
                result.push(arr[index]);
            }
        }
    }

    return result;

}

module.exports = filter;