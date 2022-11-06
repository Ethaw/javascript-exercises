const leapYears = function(year) {
  if (year % 4 || (year % 100 == 0 && year % 400)) {
    return false
  }
  return true
};

module.exports = leapYears;
