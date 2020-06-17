
export const steps = (num) => {
  let steps = 0;
  let n = num;
  while(n !== 1){
  if(n <= 0){
    throw 'Only positive numbers are allowed'
  } else if(n === 1){
    return steps;
  } else if(n % 2 === 0){
    n = n/2
    steps++
  } else if(n % 2 !== 0){
    n = 3*n +1;
    steps++
  } 
  }
return steps;
};