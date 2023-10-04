function invert(data) {
  let invertData = {};
  for (let key in data) {
    let temp = data[key];
    invertData[temp] = key;
  }

  return invertData;
}

module.exports = invert;
