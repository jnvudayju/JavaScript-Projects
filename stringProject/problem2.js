// Given an IP address - "111.139.161.143". Split it into its component parts 111, 139, 161, 143 and return it in an array in numeric values. [111, 139, 161, 143].

// Support IPV4 addresses only. If there are other characters detected, return an empty array.

function splitIP(data) {
  if (data.length <= 0) {
    return [];
  }

  for (let i = 0; i < data.length; i++) {
    if (
      !(data.charAt(i) >= "0" && data.charAt(i) <= "9") &&
      data.charAt(i) != "."
    ) {
      return [];
    }
  }

  let ans = [];

  for (let i = 0; i < data.length; i += 4) {
    let temp = data.slice(i, i + 3);
    ans.push(temp);
  }

  return ans;
}

module.exports = splitIP;
