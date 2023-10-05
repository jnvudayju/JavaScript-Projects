// Given an array of strings ["the", "quick", "brown", "fox"], convert it into a string "the quick brown fox."
// If the array is empty, return an empty string.

function convertToString(data) {
  if (data.length <= 0) {
    return "";
  }

  let result = "";

  for (let i = 0; i < data.length; i++) {
    result += data[i];
    result += " ";
  }

  return result;
}

module.exports = convertToString;
