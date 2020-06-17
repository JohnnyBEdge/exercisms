//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const Node = function(value) {
  this.value = value;
  this.previous = null;
  this.next = null;
  return this.value;
};

export class LinkedList {
  constructor() {
    this._length = 0;
    this.tail = null;
    this.head = null;
}

count() {
    return this._length;
}

push(value) {
    const node = new Node(value);
    if (this._length) {
        this.tail.next = node;
        node.previous = this.tail;
        this.tail = node;
    } else {
        this.head = node;
        this.tail = node;
    }
    this._length++;
    return node;
}

pop() {
    const node = this.delete(this.tail);
    if (this.tail) {
        this.tail.next = null;
    }
    return node.value;
}

shift() {
    const node = this.delete(this.head);
    this.head = node.next;
    return node.value;
}

unshift(value) {
    const node = new Node(value);
    if (this._length) {
        const lastHead = this.head;
        this.head.previous = node;
        this.head = node;
        this.head.next = lastHead;
    } else {
        this.head = node;
        this.tail = node;
    }
    this._length++;
    return node.value;
}

delete(value) {
    const searchValue = value instanceof Node ?
        value.value : value;

    let searchNode = this.head;
    let foundNode = null;

    if (searchValue === this.head.value ) {
        foundNode = this.head;
        this.head = this.head.next;
    }

    if (searchValue === this.tail.value ) {
        foundNode = this.tail;
        this.tail = this.tail.previous;
    }

    while (!searchNode || !foundNode) {
        if (searchNode.value === searchValue) {
            foundNode = searchNode;
            foundNode.previous = foundNode.next;
        } else {
            searchNode = this.head.next;
        }
    }

    this._length--;
    return foundNode;
}
}
