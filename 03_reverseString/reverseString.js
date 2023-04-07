const reverseString = function (text) {
  let arr = text.split("");
  let cont = arr.reverse().join("");
  return cont;
};

// Do not edit below this line
module.exports = reverseString;
