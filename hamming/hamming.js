//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (s1,s2) => {
  //validation
if(s1 === '' && s2 !== ''){
  throw new Error('left strand must not be empty');
} else if(s2 === '' && s1 !== ''){
  throw new Error('right strand must not be empty');
} else if (s1.length !== s2.length){
  throw new Error('left and right strands must be of equal length');
};
let count = 0;
for(let i = 0; i < s1.length; i++){
  s1[i] !== s2[i] ? ++count : ''
}
return count

};
