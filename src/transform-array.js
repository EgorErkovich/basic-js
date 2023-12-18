const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  let new_arr = arr.slice(0);
  if (new_arr.length === 0) {
    return new_arr;
  }
  for (let i = 0; i < new_arr.length; i++) {
    if (new_arr[i] === '--double-prev') {
      if (new_arr[i - 1] !== undefined) {
        new_arr[i] = new_arr[i - 1];
      } else new_arr.splice(i, 1);
    }
    if (new_arr[i] === '--double-next') {
      if (new_arr[i + 1] !== undefined) {
        new_arr[i] = new_arr[i + 1];
      } else new_arr.splice(i, 1);
    }
    if (new_arr[i] === '--discard-prev') {
      if (new_arr[i - 1] !== undefined) {
        new_arr.splice(i - 1, 2);
        i--;
      } else new_arr.splice(i, 1);
    }
    if (new_arr[i] === '--discard-next') {
      if ((new_arr[i + 2] === '--double-prev') || (new_arr[i + 2] === '--discard-prev')) {
        new_arr.splice(i, 3);
        i -= 2;
        continue;
      }
      if (new_arr[i + 1] !== undefined) {
        new_arr.splice(i, 2);
        i--;
      } else new_arr.splice(i, 1);
    }
  }
  console.log(new_arr);
  return new_arr;
  // remove line with error and write your code here
}

module.exports = {
  transform
};
