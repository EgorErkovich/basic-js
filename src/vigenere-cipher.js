const { NotImplementedError } = require('../extensions/index.js');

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

  constructor(typeOfMachine) {
    this.typeOfMachine = typeOfMachine || (typeOfMachine === undefined) ? 'direct' : 'reverse';
  }
  sayHi() {
    alert(this.typeOfMachine);
  }

  encrypt(text, key) {
    if (text === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    text = text.toUpperCase();
    key = key.toUpperCase();
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numAlph = {};
    for(let i = 0; i < alphabet.length; i++){
      numAlph[alphabet[i]] = i;
    }
    let code = '';
    let symbols = [];
    for (let i = 0; i < text.length; i++) {
      if (text[i].match(/[^a-z]/gi)) {
        symbols.push([text[i], i]);
      }
    }
    text = text.replace(/[^a-z]/gi, '');
    for(let i = 0; i < text.length; i++){
      code += alphabet[(numAlph[text[i]] + numAlph[key[i % key.length]]) % alphabet.length];
    }
    code = code.split('');
    for (let i = 0; i < symbols.length; i++) {
      code.splice(symbols[i][1], 0, symbols[i][0]);
    }

    if (this.typeOfMachine === 'direct') {
      return code.join('');
    } else {
      return code.reverse().join('');
    }
    // remove line with error and write your code here
  }
  decrypt(text, key) {
    if (text === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }
    text = text.toUpperCase();
      key = key.toUpperCase();
      const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const numAlph = {};
  
      for(let i = 0; i < alphabet.length; i++){
        numAlph[alphabet[i]] = i;
      }
      let code = '';
      let symbols = [];
      for (let i = 0; i < text.length; i++) {
        if (text[i].match(/[^a-z]/gi)) {
          symbols.push([text[i], i]);
        }
      }
      text = text.replace(/[^a-z]/gi, '');
      for(let i = 0; i < text.length; i++){
        code += alphabet[(numAlph[text[i]] - numAlph[key[i % key.length]] + alphabet.length) % alphabet.length];
      }
      code = code.split('');
      for (let i = 0; i < symbols.length; i++) {
        code.splice(symbols[i][1], 0, symbols[i][0]);
      }
      if (this.typeOfMachine === 'direct') {
        return code.join('');
      } else {
        return code.reverse().join('');
      }
    // remove line with error and write your code here
  }
}

module.exports = {
  VigenereCipheringMachine
};
