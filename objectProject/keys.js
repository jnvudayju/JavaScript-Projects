function extractKeys(data) {
  let result = [];
  if (data.length <= 0) {
    return result;
  }

  for (let property in data) {
    result.push(property);
  }

  return result;
}

module.exports = extractKeys;
