// Note: values are all considered unique.

const removeFromArray0 = function(arr, ...values) {
  // Naive way, iteratively removing each value in place
  for (val of values) {
    let i = arr.indexOf(val);
    if (i >= 0) {
      arr.splice(i, 1);
    }
  }
  return arr
};

const removeFromArray = function(arr, ...values) {
  // Using filter and set
  values = new Set(values);
  return arr.filter(x => !values.has(x));
};

module.exports = removeFromArray;
