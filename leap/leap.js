//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
//starting with the largest divisor solves 7
export const isLeap = (year) => {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
};


