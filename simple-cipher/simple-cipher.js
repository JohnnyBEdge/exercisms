//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Cipher {
  constructor(key) {
    //throws error if key is uppercase or contains numbers
    if(/[0-9A-Z]/g.test(key) || key === "") throw new Error("Invalid key");

    //if no key provided, creates random 100 char key
    if(!key){
      const alphabet = 'abcdefghijklmnopqrstuvwxyz';
      function getRandomLetter() {
        return alphabet[Math.floor(Math.random() * alphabet.length)];
      };
  
      function generateKey(key) {
        return [...new Array(100)]
            .map(el => this.getRandomLetter())
            .join('');
      };
    //use key provided if valid
    } else {  
      this.key = key;  }
  }

  encode() {
    throw new Error("Remove this statement and implement this function");
  }

  decode() {
    throw new Error("Remove this statement and implement this function");
  }

  get key() {
    throw new Error("Remove this statement and implement this function");
  }
}
