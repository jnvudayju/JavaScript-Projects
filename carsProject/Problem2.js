function lastCarData(data) {
  if (
    !Array.isArray(data) ||
    data.length <= 0 ||
    lastCarData.arguments.length < 1
  ) {
    return [];
  } else {
    return data[data.length - 1];
  }
}

module.exports = lastCarData;
