//
// This is only a SKELETON file for the 'Grains' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const square = (x) => {
  if(x < 1 || x > 64){
    throw new Error('square must be between 1 and 64');
    } else {
      return BigInt(Math.pow(2,x-1))
    }
};



export const total = () => {
  return 2n * square(64) - 1n;
};
