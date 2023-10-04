function values(data) {
  let result = [];
  if (data.length <= 0) {
    return result;
  }

  for (let property in data) {
    result.push(data[property]);
  }

  return result;
}

module.exports = values;
