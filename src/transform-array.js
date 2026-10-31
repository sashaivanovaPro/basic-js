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
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const result = [];
  let previousIndex = -1;
  for (let index = 0; index < arr.length; index += 1) {
    switch (arr[index]) {
      case '--discard-next':
        index += 1;
        break;
      case '--discard-prev':
        if (index > 0 && previousIndex === index - 1) {
          result.pop();
          previousIndex = -1;
        }
        break;
      case '--double-next':
        if (index + 1 < arr.length) {
          result.push(arr[index + 1]);
        }
        break;
      case '--double-prev':
        if (index > 0 && previousIndex === index - 1) {
          result.push(arr[index - 1]);
        }
        break;
      default:
        result.push(arr[index]);
        previousIndex = index;
    }
  }
  return result;
}

module.exports = {
  transform
};
