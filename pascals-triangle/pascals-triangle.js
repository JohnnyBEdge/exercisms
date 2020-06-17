//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (numRows) => {
  
//tri always starts with this unless...
let triangle = [[1], [1,1]]

if(numRows === 0){
  return [];
} else if(numRows === 1){
  return [[1]]
} else if(numRows === 2){
  return triangle;
} else {
  //repeat row creation starting at row 3 if numrows is 3 or more
  for(let i = 2; i < numRows; i++){
    createRow(triangle)
  }
}

function createRow(){
//rows always start with 1
let newRow = [1]
let prevRow = triangle[triangle.length-1];
// repeat addition for length of prev row length
for(let i = 0; i < prevRow.length -1; i++){
  let curr = prevRow[i];
  let next = prevRow[i + 1];
  newRow.push(curr+next) 
};
//rows always end with 1
newRow.push(1);
//add newly created row to triangle
triangle.push(newRow);
}
return triangle;
};
