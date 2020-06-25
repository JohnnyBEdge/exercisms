//
// This is only a SKELETON file for the 'Simple Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Element {
    constructor(n) {
        this.value = n;
        this.next = null;
    }
  }

export class List {
  constructor(arr) {
      this.length = 0;
      this.head = null;

      if (arr)
          arr.forEach(x => this.add(new Element(x)));
  }

  // get length() {
  //   return this.length;
  // }

  // get head() {
  //   return this.head;
  // }

  add(nextValue) {
    nextValue.next = this.head;
    this.head = nextValue;
    this.length++;
  }

  forEach(func) {
      let curr = this.head;
      let i = 0;

      do func(curr.value, i++)
      while (curr = curr.next){
      };
  }

  toArray() {
      let output = new Array(this.length);
      this.forEach((x, i) => output[i] = x);

      return output;
  }

  reverse() {
      return new List(this.toArray());
  }
}











