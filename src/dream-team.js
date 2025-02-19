const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  members = members.filter((item) => {return typeof item === 'string'}).map((item) => {return item.trim().toUpperCase()}).sort();
  let res = '';
  for (let name of members) {
    res += name[0];
  }
  return res;
  // remove line with error and write your code here
}

module.exports = {
  createDreamTeam
};
