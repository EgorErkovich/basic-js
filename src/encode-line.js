const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split('');
  let res = '';
  let count;
  for (let i = 0; i < arr.length; i++) {
    count = 0;
    for (let j = i; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      } else {
        break;
      }
    }
    if (count === 1) {
      res += arr[i];
    } else {
      res += count + arr[i];
    }
    
    i += count - 1;
  }
  return res;
  // remove line with error and write your code here
}

module.exports = {
  encodeLine
};
