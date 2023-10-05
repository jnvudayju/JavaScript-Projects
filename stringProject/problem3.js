// Given a string in the format of "10/1/2021", print the month in which the date is present in.
function printMonth(data) {
  if (data.length <= 0) {
    return "data is empty";
  }

  let month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let arr = data.split("/");
  let index = Number(arr[1])-1;

  if(index<0){
    return [];
  }

  return month[index];
}

module.exports = printMonth;
