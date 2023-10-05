// There are numbers that are stored in the format "$100.45", "$1,002.22", "-$123", and so on.
//  Write a function to convert the given strings into their equivalent numeric format without any precision loss - 100.45, 1002.22, -123 and so on.
//  There could be typing mistakes in the string so if the number is invalid, return 0.

function myFunc(data) {
  let result = [];

  if(data.length<=0){
    return [];
  }

  for (let index = 0; index < data.length; index++) {
    let s = data[index];
    let p = "";
    for (let i = 0; i < s.length; i++) {
      if (s.charAt(i) != "$" && s.charAt(i) != "," && s.charAt(i) != " ") {
        p = p + s.charAt(i);
      }
    }
    console.log(p);
    result.push(Number(p));
  }

  return result;
}

module.exports = myFunc;
