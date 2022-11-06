const reverseString0 = function(s) {
  // Manually
  let arr = [];
  n = s.length;
  for (let i=0; i<n; i++) {
    arr.push(s[n-i-1]);
  }
  return arr.join('');
};

const reverseString = function(s) {
  // Using array.reverse
  let arr = s.split('');
  arr.reverse();
  return arr.join('');
};

module.exports = reverseString;
