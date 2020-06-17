//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(data) {
    this.data = data;
  }

  get rows() {
    return this.data.split('\n')
      .map(row => row
      .split(' ')
      .map(num => +num))
  }

  get columns() {
    return this.rows[0].map((num,index) => this.rows
      .map(row => row[index]))
  }
}



