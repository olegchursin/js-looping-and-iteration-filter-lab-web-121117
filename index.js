// Code your solution in this file
function findMatching(array, string) {
  return array.filter (function (driver) {return driver.toLowerCase() === string.toLowerCase()})
};

function fuzzyMatch(array, string) {
  return array.filter (function (driver) {return driver.toLowerCase().slice(0,string.length) === string.toLowerCase()})
};

function matchName(array, string) {
  return array.filter (function (driver) {return driver.name.toLowerCase() === string.toLowerCase()})
};
