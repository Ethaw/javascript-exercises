const ftoc = function(x) {
  // toFixed returns a string, the unary + converts to number
  // Warning: round() and toFixed() do not give the same results!
  // https://stackoverflow.com/questions/566564/math-roundnum-vs-num-tofixed0-and-browser-inconsistencies
  return +((x - 32) * 5/9).toFixed(1);
};

const ctof = function(x) {
  return +(x * 9/5 + 32).toFixed(1);
};

module.exports = {
  ftoc,
  ctof
};
