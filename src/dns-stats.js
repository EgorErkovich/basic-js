const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let stat = {};
  let arr = [];
  if (domains.length === 0) {
    return stat;
  } else {
    for (let dns of domains) {
      arr.push(dns.split('.').reverse());
    }
    for (let i = 0; i < arr.length; i++) {
      for (let j = 1; j < arr[i].length; j++) {
        arr[i][j] = arr[i][j - 1] + '.' + arr[i][j];
      }
    }

    count = 0;
    let res = [];
    for (let dns of arr) {
      res.push(...dns);
    }
    let map = new Map();
    for (let item of res) {
      item = '.' + item;
      if (!map.has(item)) {
        map.set(item, 1);
      } else {
        map.set(item, map.get(item) + 1);
      }
    }
    stat = Object.fromEntries(map.entries());
    return stat;
  }
}


module.exports = {
  getDNSStats
};
