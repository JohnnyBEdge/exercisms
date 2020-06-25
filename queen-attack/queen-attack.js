//https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/

export class QueenAttack {
    //destructuring with default values
    constructor({white, black} = {white: [0,3], black: [7,3]}) {
        this.white = white;
        this.black = black;
  //if not default values, check spaces are not shared
        if(white[0] === black[0] && white[1] === black[1]) {
            throw 'Queens cannot share the same space';
        };
  //...Array created an array with 8 items, 
  //array.fill has values to filled value, start and stop 
  //map r fills each item with 8 _
        this.board = [...Array(8)].map(r => Array(8).fill('_'));
        this.board[white[0]][white[1]] = 'W';
        this.board[black[0]][black[1]] = 'B';
    }
  
    canAttack() {
    const [x1, y1] = this.white;
    const [x2, y2] = this.black;
  //in the same row or column
    return x1 === x2 || y1 === y2 
    //in the same diagonal
        || Math.abs(x1 - x2) === Math.abs(y1 - y2) 
      };
      
  //returns board to string from array
    toString() {
        return this.board.map(r => r.join(' ')).join('\n')+ '\n';
    }
}