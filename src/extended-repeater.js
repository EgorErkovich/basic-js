const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let sep = [];
  str = String(str);
  if ((options['additionRepeatTimes'] !== undefined) && (options['addition'] !== undefined)) {
    for (let i = 0; i < Number(options['additionRepeatTimes']); i++) {
      sep.push(String(options['addition']));
    }
    if (options['additionSeparator'] !== undefined) {
      str += sep.join(String(options['additionSeparator']));
    } else {
      str += sep.join('|');
    }
  }
  if ((options['additionRepeatTimes'] === undefined) && (options['addition'] !== undefined)) {
    str += options['addition'];
  }
  let arr = [];
  if (options['repeatTimes'] === undefined) {
    return str;
  }
  for (let i = 0; i < options['repeatTimes']; i++) {
    arr.push(str);
  }
  if (options['separator'] !== undefined) {
    return arr.join(String(options['separator']));
  } else {
    return arr.join('+');
  }
  // remove line with error and write your code here
}

module.exports = {
  repeater
};
