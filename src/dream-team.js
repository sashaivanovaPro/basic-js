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
  if (members instanceof Array) {
    let result = [];
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] === "string") {
        result.push(members[i].trim().charAt(0).toUpperCase());
      }
    }
    return result.sort().join("");
  } else {
    return false;
  }
}

module.exports = {
  createDreamTeam
};
