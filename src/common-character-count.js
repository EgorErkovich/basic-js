const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let arr1 = s1.split('');
  let arr2 = s2.split('');
  let map1 = new Map();
  let map2 = new Map();
  let count = 0;

  for (let char of arr1) {
    if (!map1.has(char)) {
      map1.set(char, 1);
    } else {
      map1.set(char, map1.get(char) + 1);
    }
  }

  for (let char of arr2) {
    if (!map2.has(char)) {
      map2.set(char, 1);
    } else {
      map2.set(char, map2.get(char) + 1);
    }
  }

  for (let item of map1.keys()) {
    if (map2.has(item)) {
      map1.get(item) <= map2.get(item) ? count += map1.get(item) : count += map2.get(item);
    }
  }

  return count;
  // remove line with error and write your code here
}

module.exports = {
  getCommonCharacterCount
};
