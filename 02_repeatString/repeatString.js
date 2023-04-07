const repeatString = function (text, num) {
  if (num < 0) {
    return "ERROR";
  } else if (num === 0) {
    return "";
  } else if (text === "") {
    return "";
  } else {
    let t_text = "";
    for (let i = 0; i < num; i++) {
      t_text = t_text + text;
    }
    return t_text;
  }
};

// Do not edit below this line
module.exports = repeatString;
