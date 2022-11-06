const sumAll = function(x, y) {
  const isInvalidArg = x => {
    return (typeof x !== 'number' || parseInt(x) !== x || x < 0 
            ? true : false)
  }

  if (isInvalidArg(x) || isInvalidArg(y)) {
    return 'ERROR';
  }

  if (x > y) {
    [x, y] = [y, x];
  }

  // Using maths to solve in O(1)
  const f = x => x*(x+1)/2;
  return f(y) - f(x-1);

  // // Using a loop
  // let sum = y;
  // for (; x<y; x++) {
  //   sum += x;
  // }
  // return sum
};

module.exports = sumAll;
