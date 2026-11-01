/**
 * Implement chainMaker object according to task description
 * 
 */
const links = [];

const chainMaker = {
  getLength() {
    return links.length;
  },
  addLink(value) {
    try {
      const text = arguments.length === 0 ? '' : String(value);
      links.push(`( ${text} )`);
    } catch (error) {
      links.length = 0;
      throw error;
    }
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position < 1 || position > links.length) {
      links.length = 0;
      throw new Error("You can't remove incorrect link!");
    }
    links.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    links.reverse();
    return this;
  },
  finishChain() {
    const chain = links.join('~~');
    links.length = 0;
    return chain;
  }
};

module.exports = {
  chainMaker
};
