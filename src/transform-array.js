const { NotImplementedError } = require('../extensions/index.js');

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
function transform( arr ) {
  let newArr = [];
  if (arr instanceof Array) {
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "string") {
        if (arr[i] === "--discard-prev") {
          newArr.pop(newArr[i - 1]);
        } else if (arr[i] === "--double-next") {
          newArr.push(arr[i + 1]);
        } else if (arr[i] === "--double-prev") {
          newArr.push(arr[i + 1]);
        }
      } else if (typeof arr[i] === "number") {
        if (typeof arr[i - 1] === "--discard-next") {
          return;
        } else {
          newArr.push(arr[i]);
        }
      } else {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  } else {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
}

module.exports = {
  transform
};
