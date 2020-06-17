//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (word) => {
  // throw new Error("Remove this statement and implement this function");
  let reverse = word.split('').reverse().join('');
  return reverse;
};
