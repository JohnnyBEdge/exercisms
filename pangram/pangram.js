//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (sen) => {
  const alpha = "abcdefghijklmnopqrstuvwxyz".split("");
  const senLetters = sen.toLowerCase().split("");
  //every tests whether all elements in array pass the condition supplied
  return alpha.every((letter) => senLetters.includes(letter));
};