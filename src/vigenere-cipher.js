/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    return this.#transform(message, key, 1);
  }

  decrypt(message, key) {
    return this.#transform(message, key, -1);
  }

  #transform(message, key, direction) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    const normalizedKey = key.toUpperCase();
    const alphabetSize = 26;
    const firstLetterCode = 'A'.charCodeAt(0);
    let keyIndex = 0;
    const result = message.replace(/[a-z]/gi, (letter) => {
      const letterIndex = letter.toUpperCase().charCodeAt(0) - firstLetterCode;
      const shift = normalizedKey.charCodeAt(keyIndex % normalizedKey.length) - firstLetterCode;
      keyIndex += 1;
      const encryptedIndex = (letterIndex + direction * shift + alphabetSize) % alphabetSize;
      return String.fromCharCode(firstLetterCode + encryptedIndex);
    });
    return this.isDirect ? result : Array.from(result).reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine,
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
};
