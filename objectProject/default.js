function myFunc(data, defaultProps) {
  for (let key in defaultProps) {
    if (!data[key]) {
      data[key] = defaultProps[key];
    }
  }

  return data;
}

module.exports = myFunc;
