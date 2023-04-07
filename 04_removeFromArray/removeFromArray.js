const removeFromArray = function (array, ...choice) {
  for (let i = 0; i < array.length; i++) {
    for (let k of choice) {
      if (array[i] === k) {
        array.splice(i, 1);
        i--;
      }
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
