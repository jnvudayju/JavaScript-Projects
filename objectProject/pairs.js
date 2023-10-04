function keyValuePairs(data) {
  let result = [];

  for (let key in data) {
    let temp = [];
    temp.push(key);
    temp.push(data[key]);
    result.push(temp);
  }

  return result;
}

module.exports = keyValuePairs;
