const repeatString = function(string, num) {
  num = parseInt(num);
  if (num === NaN || num < 0) {
    return 'ERROR';
  }

  // Using built-in.
  return string.repeat(num);

  // Manually with join.
  let arr = [];
  for (let i=0; i<num; i++) {
    arr.push(string);
  }
  return arr.join('');
};





// Do not edit below this line
module.exports = repeatString;
