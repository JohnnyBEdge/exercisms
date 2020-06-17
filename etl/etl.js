//notes
//old is an object of point value and letter arrays associated
//for each letter, we want to return a new key value pair of a single point value
//and a single letter

export const transform = (old) => 
    Object.entries(old).reduce((newList, [key, value]) => {
      value.forEach(letter => newList[letter.toLowerCase()] = +key)
      return newList;
    }, {})
  
  
