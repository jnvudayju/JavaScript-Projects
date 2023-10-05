// Given an object in the following format, return the full name in title case.
// {"first_name": "JoHN", "last_name": "SMith"}
// {"first_name": "JoHN", "middle_name": "doe", "last_name": "SMith"}

function titleCaseName(data) {
  let firstName = data.first_name;
  let middleName = data.middle_name;
  let lastName = data.last_name;
  let result = "";
  

  if (firstName !== undefined) {
    firstName = firstName[0].toUpperCase();

    for (let index = 1; index < data.first_name.length; index++) {
      firstName += data.first_name[index].toLowerCase();
    }
    result += firstName;
    result += " ";
  }

  if (middleName !== undefined) {

    middleName = middleName[0].toUpperCase();

    for (let index = 1; index < data.middle_name.length; index++) {
      middleName += data.middle_name[index].toLowerCase();
    }
    result += middleName;
    result +=" ";

  }

  if (lastName !== undefined) {
    lastName = lastName[0].toUpperCase();

    for (let index = 1; index < data.last_name.length; index++) {
      lastName += data.last_name[index].toLowerCase();
    }
    result += lastName;
  }

  return result;
  
}
module.exports = titleCaseName;
