export const answer = (question) => {

  const keywords = {
    'What is ': '',
    'plus': '+',
    'minus': '-',
    'multiplied by': '*',
    'divided by': '/',
    '?': ''
  }

if (!question.match(/What is/) || question.match(/cubed/)) {
  throw new Error('Unknown operation')
}

  //replace takes two values, what its replacing: in this case regex seperating our key words using the global variable so that it searches through the whole string instead of stoppig at the first occurence. The second value is what its replacing it with. in this case we're using a callback to match the found word with the corresping key from the operator list and returning the value.
  question = question.replace(/What is |plus|minus|multiplied by|divided by|\?/g, word => keywords[word])


  let testForDups = question.split(' ')
  for(let i = 0; i < testForDups.length; i++){
    if(isNaN(testForDups[i]) == isNaN(testForDups[i+1])){
      throw new Error('Syntax error')
    }
  }

 //split seperates the modified question into single elements in an array. acc is what will be returned. cur is what element is being processed. idx is the index of the current element being processed. Since we have supplied it here (i), it will start at 0. If not supplied, it defaults to 1. q is the array 

  let answer = question.split(' ').reduce((acc, cur, idx, arr) => {
    switch(cur) {
      case '+': 
        return Number(acc) +Number(arr[idx+1])
      case '-': 
        return acc -arr[idx+1]
      case '*': 
        return acc *arr[idx+1]
      case '/': 
        return acc /arr[idx+1]
      default: 
      //checks is cur is a number, if not rtn undefined, otherwise rtn the acc or cur, whichever is 
        return isNaN(cur)? undefined: acc || cur 
    }

  })

  if(answer === NaN || answer === undefined){ 
    throw new Error('Syntax error')
  } else {
    return +answer
  }
}


