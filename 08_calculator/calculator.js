const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
	return arr.reduce((x, y) => x + y, 0);
};

const multiply = function(arr) {
	return arr.reduce((x, y) => x * y, 1);
};

const power = function(x, y) {
  if (x === 0 && y === 0) {
    return 0;
  }
	let res = 1;
  for (let i=0; i<y; i++) {
    res *= x;
  }
  return res;
};

const factorial = function(n) {
	let res = 1;
  for (let i=2; i<=n; i++) {
    res *= i;
  }
  return res;
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
