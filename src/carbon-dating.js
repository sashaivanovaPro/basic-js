const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
    if (typeof sampleActivity !== "string") {
    return false;
  }
  const k = 0.693 / HALF_LIFE_PERIOD;
  let number = +sampleActivity;
  if (!number || number <= 0) {
    return false;
  } else {
    const age = Math.ceil(Math.log(MODERN_ACTIVITY / number) / k);
    if (age < 1) {
      return false;
    }
    return age;
  }
}

module.exports = {
  dateSample
};
