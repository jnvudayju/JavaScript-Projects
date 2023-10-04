function mapObject(data, callback) {
  const allKey = [];
  for (let key in data) {
    allKey.push(key);
  }
  for (let index = 0; index < allKey.length; index++) {
    const key = allKey[index];
    const value = data[key];
    data[key] = callback(key, value);
  }
  return data;
}

module.exports = mapObject;
