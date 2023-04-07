const add = function (add1, add2) {
  let sum = add1 + add2;
  return sum;
};

const subtract = function (sub1, sub2) {
  let minus = sub1 - sub2;
  return minus;
};

const sum = function (array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total = total + array[i];
  }
  return total;
};

const multiply = function (mult1) {
  let mult = 1;
  for (let i = 0; i < mult1.length; i++) {
    mult = mult * mult1[i];
  }
  return mult;
};

const power = function (base, pow) {
  let result = 1;
  for (let i = 0; i < pow; i++) {
    result = result * base;
  }
  return result;
};

const factorial = function (intput) {
  let fact = 1;
  for (let i = 1; i <= intput; i++) {
    fact = fact * i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
