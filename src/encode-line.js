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
  let result = '';
  let count = 1;
  for (let index = 1; index <= str.length; index += 1) {
    if (index < str.length && str[index] === str[index - 1]) {
      count += 1;
    } else {
      result += count > 1 ? `${count}${str[index - 1]}` : str[index - 1];
      count = 1;
    }
  }
  return result;
}

module.exports = {
  encodeLine
};
