const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  const ears = '^^';
  let count = 0;
  for (let arr of matrix) {
    count += arr.reduce((sum, cur) => {
      if (cur === ears) {
        sum += 1;
        return sum;
      } else return sum;
    }, 0)
  }
  return count;
}

module.exports = {
  countCats
};
