const palindromes = function (string) {
  let no_punct = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  if (no_punct.length <= 1) {
    return true; // single character or empty string is always a palindrome
  }
  let new_str = no_punct;
  if (string.includes(" ")) {
    new_str = no_punct.split(" ").join("");
  }
  let rev = no_punct.split("").reverse().join("");
  return new_str === rev;
};

// Do not edit below this line
module.exports = palindromes;
