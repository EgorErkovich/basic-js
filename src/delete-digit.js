const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let num_arr = String(n).split('');
  let res = 0;

  for (let num_ind = 0; num_ind < num_arr.length; num_ind++) {
    let num = '';
    for (let i = 0; i < num_arr.length; i++) {
      if (i !== num_ind) {
        num += num_arr[i];
      }
    }
    res = Math.max(Number(num), res);
  }
  return res;
}

module.exports = {
  deleteDigit
};
