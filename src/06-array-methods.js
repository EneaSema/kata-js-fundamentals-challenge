// 06-array-methods.js

// 1. Use map to create a new array with the numbers doubled
function doubleNumbers(arr) {
  // write your solution here
  const double = arr.map((current) => {
    return current * 2;
  });
  return double;
}

// 2. Use filter to return only even numbers
function filterEven(arr) {
  // write your solution here
  const even = arr.filter((a) => {
    return a % 2 === 0;
  });
  return even;
}

module.exports = {
  doubleNumbers,
  filterEven,
};
