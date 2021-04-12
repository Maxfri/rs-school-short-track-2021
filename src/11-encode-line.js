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
  let count = 0;
  let result = '';
  for (let i = 0; i <= str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      count++;
      if (count === 1) {
        result += str[i];
      } else {
        result += count + str[i];
      }
      count = 0;
    }
  }
  return result;
}

module.exports = encodeLine;
