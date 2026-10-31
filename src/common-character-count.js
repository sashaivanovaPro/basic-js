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
  let count = 0;
  const remainingCharacters = s1.split('');
  for (const character of s2.split('')) {
    const index = remainingCharacters.indexOf(character);
    if (index !== -1) {
      remainingCharacters.splice(index, 1);
      count += 1;
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
